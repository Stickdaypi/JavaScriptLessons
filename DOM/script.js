"use strict";

// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector("#current").parentNode.parentNode);
// console.log(document.querySelector("[data-current]").nextSibling);
// console.log(document.querySelector("[data-current]").previousSibling);
// console.log(document.querySelector("[data-current]").nextElementSibling);
// console.log(document.querySelector("[data-current]").parentElement);
// console.log(document.querySelector("[data-current]").firstElementChild);
// work with DOM

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node);
}