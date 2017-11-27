'use strict';

taskmanApp.directive('taskTimer', [
    'timerService',
    (timerService) => {
        return {
            restrict: 'E',
            link(scope, elem, attr) {
                scope.hours = timerService.hours;
                scope.minutes = timerService.minutes;
                scope.seconds = timerService.seconds;

                timerService.start( (hours, minutes, seconds) => {
                    scope.$apply( () => {
                        scope.hours = hours;
                        scope.minutes = minutes;
                        scope.seconds = seconds;
                    } );
                } );
            },
            templateUrl: VIEWS_DIR + 'task-timer.html'
        };
    }
]);