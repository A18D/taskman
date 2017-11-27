'use strict';

taskmanApp.controller('taskController', [
    '$scope', '$routeParams', '$location', 'taskListService', 'timerService',
    function ($scope, $routeParams, $location, taskListService, timerService) {
        const SHOW_RESULT_TIME = 1000;

        let currentTask = taskListService.currentTask;
        let taskList = taskListService.taskList;

        $scope.getTaskView = () => VIEWS_DIR + $routeParams['taskType'] + '.html';
        $scope.getStatusView = () => VIEWS_DIR + 'status.html';

        $scope.confirmAction = false;
        $scope.tipsLevel = taskList.tipsLevel;

        $scope.confirmTask = () => {
            $scope.result = currentTask.confirm();
            $scope.confirmAction = true;

            if (!$scope.result) {
                // Нужно остаться на текущей странице, чтобы пользователь изменил ответ на верный
                if ( !taskList.answerTipsLevel() ) {
                    taskList.upTipsLevel();
                    $scope.tipsLevel = taskList.tipsLevel;
                }

                setTimeout(() => {
                    $scope.$apply(() => {
                        $scope.confirmAction = false;
                    });
                }, SHOW_RESULT_TIME);
            } else {
                // Дан правильный ответ
                timerService.stop();

                taskList.upPoints();
                taskList.upCoins();
                taskList.nextTask();

                setTimeout(() => {
                    $scope.$apply(() => {
                        $location.path( 'task/' + taskListService.currentTaskType )
                    });
                }, SHOW_RESULT_TIME);
            }
        };

        // Вспомонательные переменные для отображения подсказок
        let showHint = [];
        for (let i = 0; i < currentTask.tips.length; i++) {
            showHint.push(false);
        }
        $scope.showHint = showHint;

        $scope.clickTips = (numberHint) => {
            currentTask.useTips();

            if ( taskList.rangeTipsLevel() ) {
                numberHint--;
            }

            if ( !$scope.showHint[numberHint] ) {
                $scope.showHint[numberHint] = true;
                $scope.tipsLevel = taskList.tipsLevel;

                taskList.openTipsLevel = numberHint + 1;
            }
        };
    }
]);