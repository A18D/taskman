'use strict';

taskmanApp.directive('dndTask', [
    'taskListService',
    function (taskListService) {
        return {
            restrict: 'E',
            scope: {
                tipsLevel: '=',
                showHint: '=',
                clickTips: '='
            },
            link(scope, elem, attr) {
                let task = taskListService.currentTask;

                scope.text = task.text;
                scope.answers = task.answer;
                scope.tips = task.tips;

                // Drag and drop
                let choices = [],
                    conformity = [];

                task.answer.forEach( (answer, index) => {
                    choices.push( { text: answer.sign } );
                    conformity.push( { text: '' } );
                    scope.answers[index].conformity = '';
                });

                scope.choices = choices;
                scope.conformity = conformity;

                scope.dropCallback = (index, item, answer) => {
                    if (!answer.conformity) {
                        answer.conformity = item.text;

                        return item;
                    }

                    return false;
                };

                scope.clickCallback = (answer) => {
                    if (answer.conformity) {
                        scope.choices.push( {text: answer.conformity} );
                        answer.conformity = '';
                    }
                };
            },
            templateUrl: VIEWS_DIR + 'dnd-task.html'
        };
    }
]);