window.addEventListener('DOMContentLoaded', function() {

    // Tabs
    
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });
    
    // Timer

    const deadline = '2022-06-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
    

    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');       
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });   

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') =='') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

// const modalTimerId = setTimeout(openModal, 3000);

function showModalByScroll() {

       
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight-1) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // используем классы для карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {

          this.src = src;
          this.alt = alt;
          this.title = title;
          this.descr = descr;
          this.price = price;
          this.parent = document.querySelector(parentSelector);
          this.transfer = 27;
          this.changeToUAH();
          this.classes = classes;

        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement(`div`);

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `          
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>            
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item',
        'big'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        12,
        '.menu .container',
        'menu__item',
        'big'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        '>Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        16,
        '.menu .container',
        'menu__item',
        'big'
    ).render();

//forms

const forms = document.querySelectorAll('form');

const message = {
    loading: 'Loading',
    success: 'Thanks we will contact you',
    failure: 'Something goes wrong..'
};

forms.forEach(item => {
    postData(item);
});

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.textContent = message.loading;
        form.append(statusMessage);


        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        request.setRequestHeader('Content-type', 'application/json');
        const formData = new FormData(form);


        const object = {};
        formData.forEach(function (value, key){
        object[key] = value;
        });

        const json = JSON.stringify(object);
        
        request.send(json);

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
                
            } else {
                statusMessage.textContent = message.failure;
                showThanksModal(message.failure);
            }
        });

    });
}

function showThanksModal (message) {
const prevModalDialog = document.querySelector('.modal__dialog');

prevModalDialog.classList.add('hide');
openModal();

const thanksModal = document.createElement('div');
thanksModal.classList.add('modal__dialog');
thanksModal.innerHtml = `
<div class="modal__content">
<div class="modal__close" data-close>x</div>
<div class="modal__title">${message}</div>
</div>
`;

document.querySelector('.modal').append(thanksModal);
setTimeout(() => {
    thanksModal.remove();
    prevModalDialog.classList.add('show');
    prevModalDialog.classList.remove('hide');
    closeModal();
}, 4000);

}


});


