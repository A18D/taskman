'use strict';

taskmanApp.directive('inputTask', [
    'taskListService',
    (taskListService) => {
        return {
            restrict: 'E',
            scope: {
                tipsLevel: '=',
                showHint: '=',
                clickTips: '='
            },
            link(scope, elem, attr) {
                let task = taskListService.currentTask;

                // Добавим поле в которое будет записываться значение пользователя
                let confirmAnswer = [];
                task.answer.forEach( (answer) => {
                    confirmAnswer.push({
                        answer,
                        conformity: ''
                    });
                } );
                task.answer = confirmAnswer;

                scope.text = task.text;
                scope.template = task.template.split(':?');
                scope.answers = task.answer;
                scope.tips = task.tips;

            },
            templateUrl: VIEWS_DIR + 'input-task.html'
        }
    }
]);