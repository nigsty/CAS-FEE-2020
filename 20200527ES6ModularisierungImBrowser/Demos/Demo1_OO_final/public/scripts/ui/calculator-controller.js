class CalculatorController {
    constructor(calculator) {
        this.calcTemplateCompiled = Handlebars.compile(document.getElementById('calculator-template').innerHTML);
        this.calcContainer = document.getElementById('calculator-container');

        this.calculator = calculator;
    }

    onDivClick(event) {
        if (event.target.dataset.click === 'calculate') {
            const left = document.getElementById('left-input').valueAsNumber;
            const right = document.getElementById('right-input').valueAsNumber;
            this.renderCalcView(this.calculator.div(left, right));
        }
    }

    initEventHandlers() {
        this.calcContainer.addEventListener(
            'click',
            (event) => {
                this.onDivClick(event);
            });
    }

    renderCalcView(result) {
        this.calcContainer.innerHTML = this.calcTemplateCompiled(result);
    }

    calcAction() {
        this.initEventHandlers();
        this.renderCalcView(new CalculationResult());
    }
}
