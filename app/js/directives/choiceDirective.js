'use strict';

taskmanApp.directive('choiceTask', [
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

                task.answer.forEach( (answer) => {
                    answer.conformity = false;
                } );

                scope.text = task.text;
                scope.answers = task.answer;
                scope.tips = task.tips;

                scope.choiceAnswer = (confirmAnswer) => {
                    task.answer.forEach( (answer) => {
                        answer.conformity = (confirmAnswer.image == answer.image);
                    } );
                };
            },
            templateUrl: VIEWS_DIR + 'choice-task.html'
        }
    }
]);