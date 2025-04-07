Ext.define("Ext.locale.en.grid.column.Groups", {
    override: "Ext.grid.column.Groups",

    config: {
        groupSummaryTpl: "Summary ({name})",
        summaryTpl: "Summary ({store.data.length})"
    },
    text: "Group"
});
