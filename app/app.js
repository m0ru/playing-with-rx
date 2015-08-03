console.log('hello world!');

import Rx from 'rx'

window.Rx = Rx; //for debugging

var btn = document.getElementById('masterbutton');

var clicks = Rx.Observable.fromEvent(btn, 'click')
             .map(() => 1)
             .scan((a,b) => a+b)
             .subscribe((e) => console.log('clicked ' + e + '-times'));


var todoBtn = document.getElementById('todo-button');
var todoText = document.getElementById('todo-text');
window.todoText = todoText;

var addButtonClicks = Rx.Observable.fromEvent(todoBtn, 'click');

var todoItemsAdded  = addButtonClicks.map(() => todoText.value);

// http://cycle.js.org/model-view-intent.html
// https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md
// .reduce(...)
