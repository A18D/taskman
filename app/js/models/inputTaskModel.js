'use strict';

class InputTaskModel extends TaskModel
{
    constructor(task) {
        super(task);
    }

    confirm() {
        let result = true;

        this.answer.forEach( (answer) => {
            result = result && ( answer.answer == answer.conformity );
        });

        return result;
    }
}