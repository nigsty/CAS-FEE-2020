import CalculationResult from './calculation-result.js';

export default class Calculator {
    constructor() {
    }

    div(left, right) {
        let result = NaN;
        let error = 0;
        if (right !== 0) {
            result = left / right;
        } else {
            error = new Error("Div by Zero");
        }
        return new CalculationResult(left, right, result, error);
    }
}
