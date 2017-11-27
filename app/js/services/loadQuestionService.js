'use strict';

const QUESTIONS_FILE = '/data/questions.json';

taskmanApp.factory('loadQuestionService', [
    '$http', '$q',
    ($http, $q) => {
        return {
            getData() {
                let deferred = $q.defer();

                $http({method: 'GET', url: QUESTIONS_FILE})
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.reject(response.status);
                    });

                return deferred.promise;
            }
        };
    }
]);