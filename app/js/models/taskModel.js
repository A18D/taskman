'use strict';

class TaskModel
{
    constructor(task) {
        Object.assign(this, task);

        this.hintActive = false;
    }

    useTips() {
        this.hintActive = true;
    }

    confirm() {
        return false;
    }

    get lastNumberHint() {
        return this.tips.length;
    }

    get taskType() {
        return this.type;
    }

    get tipsActive() {
        return this.hintActive;
    }

    static dragAndDrop(task) {
        return new DragAndDropTaskModel(task);
    }

    static choice(task) {
        return new ChoiceTaskModel(task);
    }

    static input(task) {
        return new InputTaskModel(task);
    }
}