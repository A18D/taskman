'use strict';

class ChoiceTaskModel extends TaskModel
{
    constructor(task) {
        super(task);
    }

    confirm() {
        let result = false;

        this.answer.forEach( (answer) => {
            if (answer.right && answer.right == answer.conformity) {
                result = true;
            }
        });

        return result;
    }
}