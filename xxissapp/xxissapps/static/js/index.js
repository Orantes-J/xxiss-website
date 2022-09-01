'use strict';
console.log('JavaScript is running \^~^/');

// ALL IMPORTS
import * as help from './helper.js';
import * as chat from './liveChat.js';
import * as email from './success.js';
import * as displayD from './divHelper.js';

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
        const selectDiv = document.getElementById("trailer-options");
        
        selectDiv.addEventListener('change', function(){
            let strUser = selectDiv.value;
            inputAdjust.value = strUser;
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

// if(addToCart){
//     addToCart.addEventListener('click', function(){
//         console.log('added to cart');
    
//         // trying to fetch item from storage if no values/keys will return NUN - reason for creating guard clause
//         let prodNumbers = localStorage.getItem('itemNum');
//         prodNumbers = parseInt(prodNumbers);
    
//         // runs if value is true and completes algo
//         if(prodNumbers){
//             localStorage.setItem('itemNum', prodNumbers + 1);
//             document.querySelector('.cart-quant').textContent =  prodNumbers + 1;
//         }  else{
//             // runs when nothing is storage, set first input to 1;
//             localStorage.setItem('itemNum', 1);
//             document.querySelector('.cart-quant').textContent = 1;
//         }
//     });
// }

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
const payBtn = document.querySelectorAll('.payment-btn');
if(payBtn){
    const payBox = document.querySelector('.payment-box');
    payBtn.forEach((btn) => {
        btn.addEventListener('click', function(){
            payBox.classList.remove('hide-object');
            payBox.classList.add('display-object');
        });
    });
};

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
            const colorInput = document.querySelector(`.rv-color-inp-${e.dataset.selectedinp}`);
            // dynamic value
            const formInt = e.dataset.selectedinp;
            e.classList.add('bl-o-cl-selected');
            colorInput.setAttribute('value', e.dataset.color);
            // console.log(`${e.dataset.color}${e.dataset.selectedinp} <- result for which input`);
        });
    });
};

const cartQuan = document.querySelector('.cart-quant');

if(cartQuan){
    onLoadCartQuan();
}

// SIGNED IN VS SIGNED OUT ACCOUNT PURCHASE
const notSignedinBtn = document.querySelectorAll('.n-s-i')
const notcustMSignIn = document.querySelector('.testScen');

notSignedinBtn.forEach((btn) => {
    btn.addEventListener('click', function(e){
        e.preventDefault();
        btn.textContent = '';
        btn.insertAdjacentHTML('afterbegin', "<a href='/customer-login-page' target='_blank' rel'noopener noreferrer' class='testScen'>Create An Account! </a>");
    })
});

const testScen = document.querySelectorAll('.testScen');
if(testScen){
    testScen.forEach((e) => function(){
        console.log('heard a click line 267');
    })
}

// LIVE CHAT FUNCTION
const livechatC = document.querySelector('.l-chat');

if(livechatC){
    livechatC.addEventListener('click', function(e){
        chat.liveChat();
    });
};

// UNDER CONSTRUCTION FORM SUBMISSION FUNCTIONALITY

const unEmail = document.querySelector('.u-btn-sub');

if(unEmail){
    unEmail.addEventListener('click', function(e){
        email.successMsg();
    });
}

// PAGE NUMBERS FOR BYO TRAILER
const pageNums = document.querySelectorAll('.s-n');

pageNums.forEach((e) => {
    e.addEventListener('click', function(){
        // IF E HAS A S-N-B-A THEN REMOVE
        pageNums.forEach((a) => {
            if(a.classList.contains('s-n-b-a')){
                a.classList.remove('s-n-b-a');
                a.classList.add('s-n')
            }
        });
        e.classList.remove('s-n');
        e.classList.add('s-n-b-a');
    })
})

// SPAN GENERTES NEW IMAGES WHEN CLICKED 
// FIRST SECTION
const span1 = document.querySelector('.r-span');
const rvImgDiv = document.querySelector('.r-i-w-t');
const span2 = document.querySelector('.f-span');
const fImgDiv = document.querySelector('.f-i-w-t');
const miniImg1 = document.querySelector('.m-i-s-1');
const miniImg2 = document.querySelector('.m-i-s-2');
const miniImg3 = document.querySelector('.m-i-s-3');
// SECOND SECTION - 
const span3 = document.querySelector('.r-span-2');
const rvImgDiv2 = document.querySelector('.r-i-w-t-2');
const span4 = document.querySelector('.f-span-2');
const fImgDiv2 = document.querySelector('.f-i-w-t-2');
const miniImg4 = document.querySelector('.m-i-s-3');
const miniImg5 = document.querySelector('.m-i-s-4');
const miniImg6 = document.querySelector('.m-i-s-5');

if(span1){
    // rv button
    span3.addEventListener('click', function(){
        span4.classList.remove('b-t')
        span3.classList.add('b-t');

        fImgDiv2.classList.add('hide-object');
        fImgDiv2.classList.remove('f-i-w-2');

        rvImgDiv2.classList.remove('hide-object');
        rvImgDiv2.classList.add('r-i-w-2');
    });

    // floor plan button
    span4.addEventListener('click', function(){

        if(span2.classList.contains('b-t')){
            span2.classList.remove('b-t');
        }


        span3.classList.remove('b-t')
        span4.classList.add('b-t');

        rvImgDiv2.classList.add('hide-object');
        rvImgDiv2.classList.remove('r-i-w-2');

        fImgDiv2.classList.remove('hide-object');
        fImgDiv2.classList.add('f-i-w-2');
    });
    miniImg4.addEventListener('click', function(){
        const roamer = document.querySelector('.r-img');
        roamer.src = "/static/images/xxiss-trailer-svg-2.jpg";
    });
    miniImg5.addEventListener('click', function(){
        const roamer = document.querySelector('.r-img');
        roamer.src = "/static/images/xxiss-trailer-svg-3.jpg";
    });
    miniImg6.addEventListener('click', function(){
        const roamer = document.querySelector('.r-img');
        roamer.src = "/static/images/xxiss-carousel-holder-4.jpg";
    });

    // FIRST SECTION 
    span1.addEventListener('click', function(){
        span2.classList.remove('b-t')
        span1.classList.add('b-t');
        fImgDiv.classList.add('hide-object');
        fImgDiv.classList.remove('f-i-w');
        rvImgDiv.classList.remove('hide-object');
        rvImgDiv.classList.add('r-i-w');
    });
    span2.addEventListener('click', function(){
        // REMOVE FROM OTHER
        if(span4.classList.contains('b-t')){
            span4.classList.remove('b-t');
        }

        span1.classList.remove('b-t')
        span2.classList.add('b-t');

        rvImgDiv.classList.add('hide-object');
        rvImgDiv.classList.remove('f-i-w-2');
        rvImgDiv.classList.remove('f-i-w');
        
        fImgDiv.classList.remove('hide-object');
        fImgDiv.classList.add('f-i-w');
    });
    miniImg1.addEventListener('click', function(){
        const roamer = document.querySelector('.r-img');
        roamer.src = "/static/images/xxiss-trailer-svg-2.jpg";
    });
    miniImg2.addEventListener('click', function(){
        const roamer = document.querySelector('.r-img');
        roamer.src = "/static/images/xxiss-trailer-svg-3.jpg";
    });
    miniImg3.addEventListener('click', function(){
        const roamer = document.querySelector('.r-img');
        roamer.src = "/static/images/xxiss-carousel-holder-4.jpg";
    });
};

// admin create order funxtions
const xModalBtn = document.querySelector('.fa-xmark');
const createnewOrderDiv = document.querySelector('.create-new-order-wrapper');
const createneworderBtn = document.querySelector('.crt-n-ord-wrapper');

createneworderBtn.addEventListener('click', function(){
    createnewOrderDiv.classList.remove('hide-object');
    createnewOrderDiv.classList.add('display-object');
})

xModalBtn.addEventListener('click', function(){
    createnewOrderDiv.classList.remove('display-object');
    createnewOrderDiv.classList.add('hide-object');
})

// REFERESH PAGE IF SENSES A MESSAGE FROM PYTHON
const succMsg = document.querySelector('.success-msg-wrapper');

if(succMsg){
    setTimeout(() => {
        location.reload()
    }, '1500')         
}


// CLICK EVENTS TO DISPLAY PROPER WRAPPER
if(document.querySelector('.g-q-byo')){
    help.highLightSel();
    displayD.d1Div();
    displayD.d2Div();
    displayD.d3Div();
    displayD.d4Div();
    displayD.d5Div();
    displayD.d6Div();
    displayD.d7Div();
    displayD.d8Div();
    displayD.d9Div();
    displayD.d10Div();
    displayD.d11Div();
    displayD.d12Div();
    displayD.d13Div();
    displayD.d14Div();
    displayD.d15Div();
}

// help.screenLoader();