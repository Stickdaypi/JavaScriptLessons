"use strict";
let messages = [

{text: "Hello", from: "John"},
{text: "World", from: "Peter"},
{text: "Data", from: "Sana"}

];

let readMessages = new WeakSet();

readMessages.add(messages[0]);

// readMessages.add(messages[1]);

readMessages.add(messages[0]);

messages.shift();

console.log(readMessages.has(messages[0]));