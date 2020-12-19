export default function div(left, right) {
    let result = NaN;
    let error = 0;
    if (right !== 0) {
        result = left / right;
    } else {
        error = new Error("Div by Zero");
    }
    return {left, right, result, error};
}
