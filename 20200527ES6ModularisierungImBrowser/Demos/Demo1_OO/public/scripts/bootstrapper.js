class Bootstrapper {
    static start() {
        new CalculatorController().calcAction();
    }
}

// wait until scripts have been loaded
document.addEventListener('DOMContentLoaded', Bootstrapper.start);

