'use strict';

class DragAndDropTaskModel extends TaskModel
{
    constructor(task) {
        super(task);
    }

    confirm() {
        let result = true;

        this.answer.forEach( (answer) => {
            result = result && ( answer.sign == answer.conformity );
        });

        return result;
    }
}