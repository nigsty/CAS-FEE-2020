import div from '../bl/calculator.js';

let calcTemplateCompiled;
let calcContainer;

function onDivClick(event) {
    if (event.target.dataset.click === 'calculate') {
        const left = document.getElementById('left-input').valueAsNumber;
        const right = document.getElementById('right-input').valueAsNumber;
        renderCalcView(div(left, right));
    }
}

function initEventHandlers() {
    calcTemplateCompiled = Handlebars.compile(document.getElementById('calculator-template').innerHTML);
    calcContainer = document.getElementById('calculator-container');
    calcContainer.addEventListener('click', onDivClick);
}

function renderCalcView(result) {
    calcContainer.innerHTML = calcTemplateCompiled(result);
}

document.addEventListener(
    'DOMContentLoaded',
    () => {
        initEventHandlers();
        renderCalcView( { left: 0, right: 0, result: 0 } );
    });
