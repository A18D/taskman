'use strict';

taskmanApp.directive('taskListPoints', [
    'taskListService',
    (taskListService) => {
        return {
            restrict: 'E',
            link(scope, elem, attr) {
                scope.points = taskListService.taskList.points;
            },
            templateUrl: VIEWS_DIR + 'task-list-points.html'
        }
    }
]);
