const bindElements = [
   "fileContent",
   "hidden",
   "required",
   "disabled",
   "readOnly",
   "value",
   "data",
   "options",
   "target",
];

let numberOfChanges = 0;
let numberOfAmbiguousLines = 0;
let ambiguousBindStrings = [];

function getBindString (string) {
   // The inputString is changed if it contains strings like /data/foo/bar/test
   // and no '' are used. If the inputString contains no such strings it is returned as it is
   let inputString = String(string);
   // Regex to find bind string pattern, string to be found are: /data/foo/bar/test
   // Then replace it with ExtJS valid bind string -> data.foo.bar.test
   const bindStringRegex = /(\/\w+)+/g;
   // Regex to find bind string in string, string to be found are: '' , '/data/foo/bar/test'
   // These patterns are not replaced. '/data/foo/bar/test' should be '/data/foo/bar/test'
   // '' are used to show that the string inside is not changed.
   const regexInsideString = /('.*?')/g;

   const regexInsideBind = /(\${.*?})/g;
   let potentialBindStrings = [...inputString.matchAll(bindStringRegex)];
   let noChangeStrings = [...inputString.matchAll(regexInsideString)];
   let insideBindStrings = [...inputString.matchAll(regexInsideBind)];

   let changeMade = true;
   while (potentialBindStrings.length > 0 && changeMade) {
      changeMade = false;
      for (let i = 0; i < potentialBindStrings.length; i++) {
         const pBS = potentialBindStrings[i];
         // Check if the potential bind string is inside a no change bind string
         let isInNoChangeString = false;
         noChangeStrings.forEach((nCS) => {
            if ((nCS.index < pBS.index) && (nCS.index + nCS[0].length > pBS.index)) {
               isInNoChangeString = true;
            }
         });
         // Check if the potential bind string is inside a
         let isInBindString = false;
         insideBindStrings.forEach((iCS) => {
            if ((iCS.index < pBS.index) && (iCS.index + iCS[0].length > pBS.index)) {
               isInBindString = true;
            }
         });
         // Only change the potential bind string if it is not inside a potential bind string
         if (!isInNoChangeString && !isInBindString) {
            // The first / has to be replaced by nothing (or whitespace)
            const newBindString = `\${${pBS[0]}}`; // Whitespace necessary for this approach
            // All other / have to be replaced by "." for valid ExtJS bind String
            const beforeNewBindString = inputString.slice(0, pBS.index);
            const afterNewBindString = inputString.slice(pBS.index + pBS[0].length, inputString.length);
            // The inputString is changed during this for loop. Therefore the length of the
            // inputString can not change or the indices will mess up the result.
            inputString = beforeNewBindString + newBindString + afterNewBindString;

            // Update value for next while iteration
            // This way it is possible to replace values, while changing indices due to replacing strings
            changeMade = true;
            potentialBindStrings = [...inputString.matchAll(bindStringRegex)];
            noChangeStrings = [...inputString.matchAll(regexInsideString)];
            insideBindStrings = [...inputString.matchAll(regexInsideBind)];
            break;
         }
      }
   }
   inputString = inputString.replaceAll(" + ", " ");
   inputString = inputString.replaceAll("+", "");
   inputString = inputString.replaceAll("'", "");
   return inputString;
}

function translateString (string) {
   const bindStringRegex = /(\/\w+)+/g;
   if (typeof (string) !== "string" || string.match(bindStringRegex) === null) {
      return string;
   }
   const potentialBindStrings = [...string.matchAll(bindStringRegex)];
   if (potentialBindStrings.length === 1 && potentialBindStrings[0][0].length === string.length) {
      numberOfChanges += 1;
      return `\${${string}}`;
   }
   ambiguousBindStrings.push(string);
   console.warn(`Bind String (${string}) is ambiguous and was not changed.`
                + `\nDid you mean (${getBindString(string)}) or (\${${string}}) or something else? `
                + "If this should stay unchanged, you can ignore this warning.");
   numberOfAmbiguousLines += 1;
   return string;
}

function changeComponent (component) {
   // console.log(component);
   bindElements.forEach((b) => {
      if (b in component) {
         component[b] = translateString(component[b]);
      }
   });
   if ("components" in component) {
      // console.log(component["components"]);
      component.components.forEach((c) => {
         changeComponent(c);
      });
   }
}

let filesToProcess = [];

process.argv.forEach(function (val, index, array) {
   if (index > 1) {
      filesToProcess.push(val);
   }
});

if (filesToProcess.length === 0) {
   console.log("No filenames provided. Use \nnode translate.js file1.json");
} else {
   filesToProcess.forEach((fileName) => {
      const sample = require(`./${  fileName}`);
      numberOfChanges = 0;
      numberOfAmbiguousLines = 0;

      if (typeof(sample) === "object") {
         if ("components" in sample && "metaData" in sample && "configuration" in sample) {
            console.log(`\nFile ./${  fileName} starts processing. \n`);
            sample["components"].forEach((c) => {
               changeComponent(c);
            });

            if (numberOfAmbiguousLines + numberOfChanges === 0) {
               console.log("No changes necessary.");
            } else {
               // write changed forms configuration in new file in folder new_syntax
               const fs = require("fs");
               const dir = "./new_syntax/";
               if (!fs.existsSync(dir)) {
                  fs.mkdirSync(dir);
               }
               const dirInFilename = fileName.slice(0, fileName.lastIndexOf("/") + 1);
               fs.mkdirSync(dir + dirInFilename, { recursive: true });
               fs.writeFile(dir + fileName, JSON.stringify(sample, null, 2), function(err) {
                  if (err) {
                     console.log(err);
                  }
               });
               console.log(`\n${numberOfChanges} lines changed. ${numberOfAmbiguousLines} lines could not be changed and need to be changed individually depending on context.`);
               console.log(`File successfully saved to ${  dir + fileName}.\n`);
            }
         } else {
            console.log("File does not contain a forms configuration.");
         }
      } else {
         console.log("File does not contain json object.");
      }
   });
}

/*
 comment:
 don't use node, use BpcCommon.Api. in browser console (just copy script into console)
*/
