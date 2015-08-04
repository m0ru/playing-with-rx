
import Cycle from '@cycle/core';
//import CycleDOM from '@cycle/dom';
import CycleDOM from '@cycle/dom';
let {h} = CycleDOM;

function cyclejsMain(drivers) {
    return {
        DOM: drivers.DOM.get('.myinput', 'input')
            .map(ev => ev.target.value)
            .startsWith('')
            .map(name =>
                h('div')
                /*h('div', [
                    h('label', 'Name:'),
                    h('input.myinput', {
                        attributes: {type: 'text'}
                    }),
                    h('p', 'Hello ' + name)
                ])*/
            )
    };
}
let cycleDrivers = {
    DOM: CycleDOM.makeDOMDriver('#helloCycleContainer')
}

Cycle.run(cyclejsMain, cycleDrivers);
