'use strict';

taskmanApp.controller('mainController', [
    '$scope', '$location', 'loadQuestionService', 'taskListService',
    function ($scope, $location, loadQuestionService, taskListService) {
        loadQuestionService.getData().then((tasks) => {
            taskListService.initTaskList(tasks.question);
            $location.path( 'task/' + taskListService.currentTaskType );
        });
    }
]);