class CalculatorController {
    constructor(calculator) {
        this.calcTemplateCompiled = Handlebars.compile(document.getElementById('calculator-template').innerHTML);
        this.calcContainer = document.getElementById('calculator-container');

        this.calculator = calculator;
    }

    initEventHandlers() {
        this.calcContainer.addEventListener(
            'click',
            (event) => {

                // target.dataset.click => 'calculate'
                // left => 'left-input' . valueAsNumber;
                // right => 'right-input' . valueAsNumber;
            });
    }

    renderCalcView(result) {
        this.calcContainer.innerHTML = this.calcTemplateCompiled(result);
    }

    calcAction() {
        this.initEventHandlers();
        //this.renderCalcView(); // new CalculationResult()
    }
}
