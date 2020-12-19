export default class CalculationResult {
    constructor(left = 0, right = 0, result = 0, error = null) {
        this.left = left;
        this.right = right;
        this.result = result;
        this.error = error;
    }
}
