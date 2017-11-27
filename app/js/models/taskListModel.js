'use strict';

class TaskListModel
{
    constructor(tasks) {
        this.numberTask = 0;
        this.lastTask = tasks.length - 1;

        this.rawTask = tasks;
        this.task = {};

        this.point = 0;
        this.coin = 0;

        this.hintLevel = 0;
        this.openHintLevel = 0;

        this._loadTask();
    }

    static get maxHintLevel() {
        return 3;
    }

    static get defaultPoints() {
        return 10;
    }

    set openTipsLevel(hintLevel) {
        this.openHintLevel = hintLevel;
    }

    get openTipsLevel() {
        return this.openHintLevel;
    }

    get tipsLevel() {
        if (!this.hintLevel) {
            return 1;
        }

        return this.hintLevel;
    }

    get coins() {
        return this.coin;
    }

    get points() {
        return this.point;
    }

    get currentTask() {
        return this.task;
    }

    answerTipsLevel() {
        return (this.hintLevel == TaskListModel.maxHintLevel);
    }

    rangeTipsLevel() {
        return (this.hintLevel > this.task.lastNumberHint);
    }

    upTipsLevel() {
        if (this.openHintLevel) {
            this.hintLevel = this.openHintLevel + 1;
        } else  {
            this.hintLevel++;
        }

        if ( this.hintLevel > TaskListModel.maxHintLevel ) {
            this.hintLevel = 0;
        }
    }

    nextTask() {
        this._upNumberTask();
        this._loadTask();
    }

    upCoins() {
        if (!this.task.tipsActive) {
            this.coin = this.point / TaskListModel.defaultPoints;
        }
    }

    upPoints() {
        if (!this.task.tipsActive) {
            this.point += TaskListModel.defaultPoints;
        }
    }

    _upNumberTask() {
        this.numberTask++;

        if (this.numberTask > this.lastTask) {
            this.numberTask = 0;
            this.point = 0;
            this.coin = 0;
        }
    }

    _loadTask() {
        if ( this.rawTask[ this.numberTask] ) {
            this.task = new TaskFactory( this.rawTask[this.numberTask] );
        }
    }
}