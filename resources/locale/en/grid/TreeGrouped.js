Ext.define("Ext.locale.en.grid.TreeGrouped", {
    override: "Ext.grid.TreeGrouped",

    config: {
        groupSummaryTpl: "Summary ({name})",
        summaryTpl: "Summary ({store.data.length})"
    }
});
