'use strict';

taskmanApp.directive('taskListCoins', [
    'taskListService',
    (taskListService) => {
        return {
            restrict: 'E',
            link(scope, elem, attr) {
                scope.coins = taskListService.taskList.coins;
            },
            templateUrl: VIEWS_DIR + 'task-list-coins.html'
        }
    }
]);
