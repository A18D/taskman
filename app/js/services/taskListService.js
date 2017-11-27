'use strict';

taskmanApp.factory('taskListService', [
    () => {
        class TaskListService
        {
            initTaskList(tasks) {
                this.taskListModel = new TaskListModel(tasks);
            }

            get taskList() {
                return this.taskListModel;
            }

            get currentTask() {
                return this.taskListModel.currentTask;
            }

            get currentTaskType() {
                return this.taskListModel.currentTask.taskType
            }
        }

        return new TaskListService();
    }
]);