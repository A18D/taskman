'use strict';

class TaskFactory
{
    constructor(task) {
        switch (task.type) {
            case TaskFactory.dragAndDropType:
                return TaskModel.dragAndDrop(task);
            case TaskFactory.choiceType:
                return TaskModel.choice(task);
            case TaskFactory.inputType:
                return TaskModel.input(task);
        }
    }

    static get dragAndDropType() {
        return 'dragAndDrop';
    }

    static get choiceType() {
        return 'choice';
    }

    static get inputType() {
        return 'input';
    }
}