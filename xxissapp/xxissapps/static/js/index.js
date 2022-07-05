'use strict';
console.log('JavaScript is running \^~^/');

import * as help from './helper.js';

const carDot1 = document.querySelector('.img-1-dot');
const carDot2 = document.querySelector('.img-2-dot');
const carDot3 = document.querySelector('.img-3-dot');
const carDot4 = document.querySelector('.img-4-dot');
const supportBtn = document.querySelector('.sprt');
const supportModal = document.querySelector('.c-form');
const closeModalBtn = document.querySelector('.modal-close');
const htmlBody = document.getElementsByTagName('html')[0];
const pageBody = document.getElementsByTagName('body')[0];
const formWrapper = document.querySelector('.c-form-wrapper');

if(carDot1){
    carDot1.addEventListener('click', function(){
        console.log('heard 1')
        const allImgs = document.querySelectorAll('.crsl');
        allImgs.forEach((e) =>{
            e.classList.remove('display-object');
            e.classList.add('hide-object');
        })
        const img =  document.querySelector('.crsl-img1');
        img.dataset.display = 'true';
        img.classList.remove('hide-object');
        img.classList.add('display-object');
    })
}

if(carDot2){
    carDot2.addEventListener('click', function(){
        console.log('heard 2')
        const allImgs = document.querySelectorAll('.crsl');
        allImgs.forEach((e) =>{
            e.classList.remove('display-object');
            e.classList.add('hide-object');
            e.dataset.display = 'false';
        })
        const img =  document.querySelector('.crsl-img2');
        img.dataset.display = 'true';
        img.classList.remove('hide-object');
        img.classList.add('display-object');
    })
}

if(carDot3){
    carDot3.addEventListener('click', function(){
        console.log('heard 3')
        const allImgs = document.querySelectorAll('.crsl');
        allImgs.forEach((e) =>{
            e.classList.remove('display-object');
            e.classList.add('hide-object');
            e.dataset.display = 'false';
        })
        const img =  document.querySelector('.crsl-img3');
        img.dataset.display = 'true';
        img.classList.remove('hide-object');
        img.classList.add('display-object');
    })
}

if(carDot4){
    carDot4.addEventListener('click', function(){
        console.log('heard 4')
        const allImgs = document.querySelectorAll('.crsl');
        allImgs.forEach((e) =>{
            e.classList.remove('display-object');
            e.classList.add('hide-object');
            e.dataset.display = 'false';
        })
        const img =  document.querySelector('.crsl-img4');
        img.dataset.display = 'true';
        img.classList.remove('hide-object');
        img.classList.add('display-object');
    })
}

// DISPLAY FORM
if(supportModal){
    supportBtn.addEventListener('click', function(){
        supportModal.classList.remove('hide-object');
        supportModal.classList.add('display-object');

        // DISABLING SCROLL AFFECT WHEN MODAL IS PRESENT
        htmlBody.classList.add('disable-scroll');

        // ADD BLUR AFFECT
        formWrapper.classList.add('c-form-blur');

        // TEXT CONTENT ADJUSTMENT AFTER CLIENT HAS SELECTED AN OPTION
        const inputAdjust = document.querySelector('.selected-item');
        const selectOpt = document.querySelectorAll('.selectoptions');
        
        selectOpt.forEach((e) =>{
            console.log('running for each')
            e.addEventListener('change', function(){
                console.log('heyy')
                e.dataset.selecteditem = 'true';
                e.options[e.selectedIndex].value;
            })
        })
    });
};

// CLOSE MODAL BOX
if(closeModalBtn){
    closeModalBtn.addEventListener('click', function(){
        supportModal.classList.remove('display-object');
        supportModal.classList.add('hide-object');
        // REINSERT SCROLL AFFECT
        htmlBody.classList.remove('disable-scroll');
        
        // ADD BLUR AFFECT
        formWrapper.classList.remove('c-form-blur');
    });
};

// CUSTOMER SHOPPING CART

const addToCart = document.querySelector('.p-o-btn');

function onLoadCartQuan(){
    let prodNumbers = localStorage.getItem("itemNum");
    
    if(prodNumbers){
        document.querySelector('.cart-quant').textContent = prodNumbers;
    }

}

if(addToCart){
    addToCart.addEventListener('click', function(){
        console.log('added to cart');
    
        // trying to fetch item from storage if no values/keys will return NUN - reason for creating guard clause
        let prodNumbers = localStorage.getItem('itemNum');
        prodNumbers = parseInt(prodNumbers);
    
        // runs if value is true and completes algo
        if(prodNumbers){
            localStorage.setItem('itemNum', prodNumbers + 1);
            document.querySelector('.cart-quant').textContent =  prodNumbers + 1;
        }  else{
            // runs when nothing is storage, set first input to 1;
            localStorage.setItem('itemNum', 1);
            document.querySelector('.cart-quant').textContent = 1;
        }
    });
}

// ADD-ONS DIVS
const dropDownMenu = document.querySelectorAll('.drop-down--ad-ons');
const openDropDownMenu = document.querySelectorAll('.open-drop-down')


if(openDropDownMenu){
    openDropDownMenu.forEach((e) => {
        e.addEventListener('click', function(){
            if (e.dataset.rv == 'roam'){
                help.generateAddOns1();
                const close = document.querySelector('.close-roam');
                const div = document.querySelector('.roamx')
                close.addEventListener('click', function(){
                    div.classList.add('hide-object');
                    div.classList.add('remove-height');
                })
            }
            if (e.dataset.rv == 'coyote'){
                help.generateAddOns2();
                const close = document.querySelector('.close-coyote');
                const div = document.querySelector('.coyotex')
                close.addEventListener('click', function(){
                    div.classList.add('hide-object');
                    div.classList.add('remove-height');
                })
            }
            if (e.dataset.rv == 'sparta'){
                help.generateAddOns3();
                const close = document.querySelector('.close-sparta');
                const div = document.querySelector('.spartax')
                close.addEventListener('click', function(){
                    div.classList.add('hide-object');
                    div.classList.add('remove-height');
                })
            }
        })
    });
};

if(dropDownMenu){
    const closeAddOnsMenu = document.querySelectorAll('.close-drop-box');

    closeAddOnsMenu.forEach((e) => {
        console.log(e);
    })
};

// MAKE PAYMENT FROM DASHBOARD
const payBtn = document.querySelector('.payment-btn');
if(payBtn){
    const payBox = document.querySelector('.payment-box');
    payBtn.addEventListener('click', function(){
        console.log('heard a click');
        payBox.classList.remove('hide-object');
        payBox.classList.add('display-object');
    })
}

const payBtnB = document.querySelector('.mke-pymt-btn');
if(payBtnB){
    const payBox = document.querySelector('.payment-box');
    payBtnB.addEventListener('click', function(){
        payBox.classList.remove('display-object');
        payBox.classList.add('hide-object');
    })
}

const closePaymentBox = document.querySelector('.payment-box');
const closePaymentBoxBtn = document.querySelector('.close-payment-box');
if(closePaymentBoxBtn){
    closePaymentBoxBtn.addEventListener('click', function(){
        console.log('hey there i heard a click');
        closePaymentBox.classList.remove('display-object');
        closePaymentBox.classList.add('hide-object');
    })
}

// COLOR SELECTION - ALL PRODUCTS PAGE
const availColors = document.querySelectorAll('.c-color');

if(availColors){
    availColors.forEach((e) =>{
        e.addEventListener('click', function(){
            
            // REMOVE FROM ALL CLASSES
            availColors.forEach((e) => {
                e.classList.remove('bl-o-cl-selected');
            });

            // ADD SELECT FEATURE
            e.classList.add('bl-o-cl-selected');
        });
    });
};

const cartQuan = document.querySelector('.cart-quant');

if(cartQuan){
    onLoadCartQuan();
}