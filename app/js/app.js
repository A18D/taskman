'use strict';

const VIEWS_DIR = 'js/views/';

let taskmanApp = angular.module('taskmanApp', ['ngRoute', 'dndLists']);

taskmanApp.config(function ($routeProvider) {
    $routeProvider
        .when('/task/:taskType', {
            templateUrl: VIEWS_DIR + 'task.html',
            controller: 'taskController'
        });
});