import Calculator from './bl/calculator.js';
import CalculatorController from './ui/calculator-controller.js';

class Bootstrapper {
    static start() {
        const calculator = new Calculator();
        new CalculatorController(calculator).calcAction();
    }
}

// wait until scripts have been loaded
document.addEventListener('DOMContentLoaded', Bootstrapper.start);

