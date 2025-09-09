/**
 * This is a copy of the German translation, translated back into English.
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September",
            "October", "November", "December"
        ];

        Ext.Date.defaultFormat = 'm/d/Y';
        Ext.Date.defaultTimeFormat = 'H:i';

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            Jan: 0,
            Feb: 1,
            Mar: 2,
            Apr: 3,
            May: 4,
            Jun: 5,
            Jul: 6,
            Aug: 7,
            Sep: 8,
            Oct: 9,
            Nov: 10,
            Dec: 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3)
                .toLowerCase()];
        };

        Ext.Date.dayNames = [
            "Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"
        ];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 3);
        };
    }

    if (Ext.util && Ext.util.Format) {
        var originalNumberFn = Ext.util.Format.number;

        Ext.util.Format.number = function(v, format) {
            return originalNumberFn(v, format || "0,000.00/i");
        };
        /*
        Ext.util.Format.__number = Ext.util.Format.number;

        Ext.util.Format.number = function(v, format) {
            return Ext.util.Format.__number(v, format || "0,000.00/i");
        };*/


        Ext.apply(Ext.util.Format, {
            thousandSeparator: ',',
            decimalSeparator: '.',
            currencySign: '$',
            dateFormat: 'm/d/Y'
        });
    }
});

Ext.define('Ext.locale.en.Panel', {
    override: 'Ext.Panel',

    config: {
        standardButtons: {
            ok: {
                text: 'OK'
            },
            abort: {
                text: 'Abort'
            },
            retry: {
                text: 'Retry'
            },
            ignore: {
                text: 'Ignore'
            },
            yes: {
                text: 'Yes'
            },
            no: {
                text: 'No'
            },
            cancel: {
                text: 'Cancel'
            },
            apply: {
                text: 'Apply'
            },
            save: {
                text: 'Save'
            },
            submit: {
                text: 'Submit'
            },
            help: {
                text: 'Help'
            },
            close: {
                text: 'Close'
            }
        },
        closeToolText: 'Close panel'
    }
});

Ext.define('Ext.locale.en.picker.Date', {
    override: 'Ext.picker.Date',

    config: {
        doneButton: 'Done',
        monthText: 'Month',
        dayText: 'Day',
        yearText: 'Year'
    }
});

Ext.define('Ext.locale.en.picker.Picker', {
    override: 'Ext.picker.Picker',

    config: {
        doneButton: 'Done',
        cancelButton: 'Cancel'
    }
});

Ext.define('Ext.locale.en.panel.Date', {
    override: 'Ext.panel.Date',

    config: {
        nextText: 'Next month (Ctrl/Control + Right)',
        prevText: 'Previous month (Ctrl/Control + Left)',
        buttons: {
            footerTodayButton: {
                text: "Today"
            }
        }
    }
});

Ext.define('Ext.locale.en.panel.Collapser', {
    override: 'Ext.panel.Collapser',

    config: {
        collapseToolText: 'Hide panel',
        expandToolText: 'Expand panel'
    }
});

Ext.define('Ext.locale.en.field.Field', {
    override: 'Ext.field.Field',

    config: {
        requiredMessage: 'This field is required',
        validationMessage: 'Invalid format'
    }
});

Ext.define('Ext.locale.en.field.Number', {
    override: 'Ext.field.Number',

    decimalsText: 'The maximum number of decimals is {0}',
    minValueText: 'The minimum value for this field is {0}',
    maxValueText: 'The maximum value for this field is {0}',
    badFormatMessage: 'This is not a valid number'
});

Ext.define('Ext.locale.en.field.Text', {
    override: 'Ext.field.Text',

    badFormatMessage: 'The value does not match the required format',
    config: {
        requiredMessage: 'This field must not be empty',
        validationMessage: 'Wrong format'
    }
});

Ext.define('Ext.locale.en.Dialog', {
    override: 'Ext.Dialog',

    config: {
        maximizeTool: {
            tooltip: "Maximize to fullscreen"
        },
        restoreTool: {
            tooltip: "Restore to original size"
        }
    }
});

Ext.define("Ext.locale.en.field.FileButton", {
    override: "Ext.field.FileButton",

    config: {
        text: 'Browse...'
    }
});

Ext.define('Ext.locale.en.dataview.List', {
    override: 'Ext.dataview.List',

    config: {
        loadingText: 'Loading data ...'
    }
});

Ext.define('Ext.locale.en.dataview.EmptyText', {
    override: 'Ext.dataview.EmptyText',

    config: {
        html: 'No data to display'
    }
});

Ext.define('Ext.locale.en.dataview.Abstract', {
    override: 'Ext.dataview.Abstract',

    config: {
        loadingText: 'Loading data ...'
    }
});

Ext.define("Ext.locale.en.LoadMask", {
    override: "Ext.LoadMask",

    config: {
        message: 'Loading...'
    }
});

Ext.define('Ext.locale.en.dataview.plugin.ListPaging', {
    override: 'Ext.dataview.plugin.ListPaging',

    config: {
        loadMoreText: 'Load more...',
        noMoreRecordsText: 'No more records'
    }
});

Ext.define("Ext.locale.en.dataview.DataView", {
    override: "Ext.dataview.DataView",

    config: {
        emptyText: ""
    }
});

Ext.define('Ext.locale.en.field.Date', {
    override: 'Ext.field.Date',

    minDateMessage: 'The date in this field must be after {0}',
    maxDateMessage: 'The date in this field must be before {0}'
});

Ext.define("Ext.locale.en.grid.menu.SortAsc", {
    override: "Ext.grid.menu.SortAsc",

    config: {
        text: "Sort Ascending"
    }
});

Ext.define("Ext.locale.en.grid.menu.SortDesc", {
    override: "Ext.grid.menu.SortDesc",

    config: {
        text: "Sort Descending"
    }
});

Ext.define("Ext.locale.en.grid.menu.GroupByThis", {
    override: "Ext.grid.menu.GroupByThis",

    config: {
        text: "Group by this field"
    }
});

Ext.define("Ext.locale.en.grid.menu.ShowInGroups", {
    override: "Ext.grid.menu.ShowInGroups",

    config: {
        text: "Show in groups"
    }
});

Ext.define("Ext.locale.en.grid.menu.Columns", {
    override: "Ext.grid.menu.Columns",

    config: {
        text: "Columns"
    }
});

Ext.define('Ext.locale.en.data.validator.Presence', {
    override: 'Ext.data.validator.Presence',

    config: {
        message: 'Must be present'
    }
});

Ext.define('Ext.locale.en.data.validator.Format', {
    override: 'Ext.data.validator.Format',

    config: {
        message: 'Wrong format'
    }
});

Ext.define("Ext.locale.en.data.validator.Email", {
    override: "Ext.data.validator.Email",

    config: {
        message: 'Invalid email address'
    }
});

Ext.define('Ext.locale.en.data.validator.Phone', {
    override: 'Ext.data.validator.Phone',

    config: {
        message: 'Invalid phone number'
    }
});
Ext.data.validator.Email
Ext.define("Ext.locale.en.data.validator.Number", {
    override: "Ext.data.validator.Number",

    config: {
        message: 'Invalid number'
    }
});

Ext.define('Ext.locale.en.data.validator.Url', {
    override: 'Ext.data.validator.Url',

    config: {
        message: 'Invalid URL'
    }
});

Ext.define('Ext.locale.en.data.validator.Range', {
    override: 'Ext.data.validator.Range',

    config: {
        nanMessage: 'Must be numeric',
        minOnlyMessage: 'The minimum value for this field is {0}',
        maxOnlyMessage: 'The maximum value for this field is {0}',
        bothMessage: 'Must be between {0} and {1}'
    }
});

Ext.define('Ext.locale.en.data.validator.Bound', {
    override: 'Ext.data.validator.Bound',

    config: {
        emptyMessage: 'Must be present',
        minOnlyMessage: 'Value must be greater than {0}',
        maxOnlyMessage: 'Value must be smaller than {0}',
        bothMessage: 'Value must be between {0} and {1}'
    }
});

Ext.define('Ext.locale.en.data.validator.CIDRv4', {
    override: 'Ext.data.validator.CIDRv4',

    config: {
        message: 'Invalid CIDR-Block'
    }
});

Ext.define('Ext.locale.en.data.validator.CIDRv6', {
    override: 'Ext.data.validator.CIDRv6',

    config: {
        message: 'Invalid CIDR-Block'
    }
});

Ext.define('Ext.locale.en.data.validator.Currency', {
    override: 'Ext.data.validator.Currency',

    config: {
        message: 'Invalid currency amount'
    }

});

Ext.define('Ext.locale.en.data.validator.DateTime', {
    override: 'Ext.data.validator.DateTime',

    config: {
        message: 'Invalid date and time'
    }
});

Ext.define('Ext.locale.en.data.validator.Exclusion', {
    override: 'Ext.data.validator.Exclusion',

    config: {
        message: 'Value is excluded'
    }
});

Ext.define('Ext.locale.en.data.validator.IPAddress', {
    override: 'Ext.data.validator.IPAddress',

    config: {
        message: 'Invalid IP address'
    }
});

Ext.define('Ext.locale.en.data.validator.Inclusion', {
    override: 'Ext.data.validator.Inclusion',

    config: {
        message: 'Not included in the list of allowed values'
    }
});

Ext.define('Ext.locale.en.data.validator.Time', {
    override: 'Ext.data.validator.Time',

    config: {
        message: 'Invalid time'
    }
});

Ext.define("Ext.locale.en.data.validator.Date", {
    override: "Ext.data.validator.Date",

    config: {
        message: "Invalid date"
    }
});

Ext.define('Ext.locale.en.data.validator.Length', {
    override: 'Ext.data.validator.Length',

    config: {
        minOnlyMessage: 'The length must be at least {0}',
        maxOnlyMessage: 'The length cannot be more than {0}',
        bothMessage: 'The length must be between {0} and {1}'
    }
});

Ext.define('Ext.locale.en.ux.colorpick.Selector', {
    override: 'Ext.ux.colorpick.Selector',

    okButtonText: 'OK',
    cancelButtonText: 'Cancel'
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.en.Component", {
    override: "Ext.Component"
});

Ext.define("Ext.locale.en.grid.filters.menu.Base", {
    override: "Ext.grid.filters.menu.Base",

    config: {
        text: "Filter"
    }
});

Ext.define('Ext.locale.en.grid.locked.Grid', {
    override: 'Ext.grid.locked.Grid',

    config: {
        columnMenu: {
            items: {
                region: {
                    text: 'Region'
                }
            }
        },
        regions: {
            left: {
                menuLabel: 'Locked (left)'
            },
            center: {
                menuLabel: 'Unlocked'
            },
            right: {
                menuLabel: 'Locked (right)'
            }
        }
    }
});

Ext.define("Ext.locale.en.grid.plugin.RowDragDrop", {
    override: "Ext.grid.plugin.RowDragDrop",
    dragText: "{0} row(s) selected"
});
