/*global define*/

define(
    ["../controllers/MCTTableController"],
    function (MCTTableController) {
        "use strict";

        function MCTTable($timeout) {
            return {
                restrict: "E",
                templateUrl: "platform/features/table/res/templates/mct-data-table.html",
                controller: ['$scope', '$timeout', '$element', MCTTableController],
                scope: {
                    headers: "=",
                    rows: "=",
                    enableFilter: "=?",
                    enableSort: "=?"
                },
            };
        }

        return MCTTable;
    }
);
