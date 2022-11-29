'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); //(method, url, async, login, pass)
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8' );
    request.send();
    
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200 ) {
           console.log(request.response);
            const data = JSON.parse(request.response);

            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
            }

    });
    
    // status error descr https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
    // statusText
    // response
    // readyState

});

