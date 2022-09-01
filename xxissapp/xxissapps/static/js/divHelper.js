export const d1Div = function(e){
    const wrapper =  document.querySelector('.q-1-wrapper');
    const span = document.querySelector('.w-1');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        const header = document.querySelector('.byo-title');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });
        header.classList.add('hide-object');
        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');
    });
};

export const d2Div = function(e){
    const wrapper2 =  document.querySelector('.q-2-1');
    const wrapper2s2 =  document.querySelector('.q-2-2');
    const span2 = document.querySelector('.w-2');

    span2.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper2.classList.remove('hide-object');
        wrapper2.classList.add('display-object');
        wrapper2s2.classList.remove('hide-object');
        wrapper2s2.classList.add('display-object');
    });
};

export const d3Div = function(e){
    const wrapper =  document.querySelector('.q-4-1');
    const span = document.querySelector('.w-3');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');
    });
};

export const d4Div = function(e){
    const wrapper =  document.querySelector('.q-5');
    const span = document.querySelector('.w-4');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');

        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');
    });
};

export const d5Div = function(e){
    const wrapper =  document.querySelector('.q-6');
    const span = document.querySelector('.w-5');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');
    });
};

export const d6Div = function(e){
    const wrapper =  document.querySelector('.q-7');
    const span = document.querySelector('.w-6');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');
    });
};

export const d7Div = function(e){
    const wrapper =  document.querySelector('.q-8-b');
    const span = document.querySelector('.w-7');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');
    });
};

export const d8Div = function(e){
    const wrapper =  document.querySelector('.q-9-wrapper');
    const span = document.querySelector('.w-8');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');
    });
};

export const d9Div = function(e){
    const wrapper =  document.querySelector('.q-10-wrapper');
    const span = document.querySelector('.w-9');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');
    });
};

export const d10Div = function(e){
    const wrapper =  document.querySelector('.q-11-wrapper');
    const span = document.querySelector('.w-10');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');
    });
};

export const d11Div = function(e){
    const wrapper =  document.querySelector('.q-12-wrapper');
    const span = document.querySelector('.w-11');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');
    });
};

export const d12Div = function(e){
    const wrapper =  document.querySelector('.q-13-wrapper');
    const wrapper2 = document.querySelector('.q-13-2-wrapper');
    const span = document.querySelector('.w-12');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');

        wrapper2.classList.remove('hide-object');
        wrapper2.classList.add('display-object');
    });
};

export const d13Div = function(e){
    const wrapper =  document.querySelector('.q-14-wrapper');
    const wrapper2 =  document.querySelector('.q-14-2-wrapper');
    const span = document.querySelector('.w-13');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');

        wrapper2.classList.remove('hide-object');
        wrapper2.classList.add('display-object');
    });
};

export const d14Div = function(e){
    const wrapper =  document.querySelector('.q-15-wrapper');
    const wrapper2 =  document.querySelector('.q-15-2-wrapper');
    const span = document.querySelector('.w-14');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');

        wrapper2.classList.remove('hide-object');
        wrapper2.classList.add('display-object');
    });
};

export const d15Div = function(e){
    const wrapper =  document.querySelector('.q-14-wrapper');
    const wrapper2 =  document.querySelector('.q-14-2-wrapper');
    const span = document.querySelector('.w-13');

    span.addEventListener('click', function(){
        const allDiv = document.getElementsByTagName('div');
        [...allDiv].forEach((d) => {
            if(d.classList.contains('display-object')){
                d.classList.remove('display-object');
                d.classList.add('hide-object');
            };
        });

        wrapper.classList.remove('hide-object');
        wrapper.classList.add('display-object');

        wrapper2.classList.remove('hide-object');
        wrapper2.classList.add('display-object');
    });

    const div15 = document.querySelector('.w-15');
    div15.addEventListener('click', logResults);
};

const nonSel = 'A item was not selected';
export const logResults = function(){
    // HIDE ALLL OTHER WRAPPERS LOGIC
    const allDiv = document.getElementsByTagName('div');
    [...allDiv].forEach((d) => {
        if(d.classList.contains('display-object')){
            d.classList.remove('display-object');
            d.classList.add('hide-object');
        };
    });
    // DISPLAY FORM FOR UI
    document.querySelector('.byo-final-results').classList.remove('hide-object');
    document.querySelector('.byo-final-results').classList.add('display-object');

    // SLIDE ONE SELECTION
    const selItem = document.querySelectorAll('.slide-1-opt');
    const s = [...selItem].filter((s) => s.dataset.selected=='true');
    if(s.length >= 1){
        document.querySelector('.n-1-span').textContent = s[0].textContent;
    } else{
        document.querySelector('.n-1-span').textContent = nonSel;
    };

    // SLIDE TWO SELECTION
    const selItem2 = document.querySelectorAll('.slide-2-opt');
    const s2 = [...selItem2].filter((s) => s.dataset.selected=='true');
    if(s2.length >= 1){
        document.querySelector('.n-2-span').textContent = s2[0].textContent;
    } else{
        document.querySelector('.n-2-span').textContent = nonSel;
    };

    // SLIDE THREE SELECTION
    const selItem3 = document.querySelectorAll('.slide-3-opt');
    const s3 = [...selItem3].filter((s) => s.dataset.selected=='true');
    if(s3.length >= 1){
        document.querySelector('.n-3-span').textContent = s3[0].textContent;
    } else{
        document.querySelector('.n-3-span').textContent = nonSel;
    };

    // SLIDE 4 SELECTION
    const selItem4 = document.querySelectorAll('.slide-4-opt');
    const s4 = [...selItem4].filter((s) => s.dataset.selected=='true');
    if(s4.length >= 1){
        document.querySelector('.n-4-span').textContent = s4[0].textContent;
    } else{
        document.querySelector('.n-4-span').textContent = nonSel;
    };

    // SLIDE 6 SELECTION
    const selItem6 = document.querySelectorAll('.slide-6-opt');
    const s6 = [...selItem6].filter((s) => s.dataset.selected=='true');
    if(s6.length >= 1){
        document.querySelector('.n-6-span').textContent = s6[0].textContent;
    } else{
        document.querySelector('.n-6-span').textContent = nonSel;
    };

    // SLIDE 7 SELECTION
    const selItem7 = document.querySelectorAll('.slide-7-opt');
    const s7 = [...selItem7].filter((s) => s.dataset.selected=='true');
    if(s7.length >= 1){
        document.querySelector('.n-7-span').textContent = s7[0].textContent;
    } else{
        document.querySelector('.n-7-span').textContent = nonSel;
    };
    
    // SLIDE 8 SELECTION
    const selItem8 = document.querySelectorAll('.slide-8-opt');
    const s8 = [...selItem8].filter((s) => s.dataset.selected=='true');
    if(s8.length >= 1){
        document.querySelector('.n-8-span').textContent = s8[0].textContent;
    } else{
        document.querySelector('.n-8-span').textContent = nonSel;
    };
    
    // SLIDE 10 SELECTION
    const selItem10 = document.querySelectorAll('.slide-10-opt');
    const s10 = [...selItem10].filter((s) => s.dataset.selected=='true');
    if(s10.length >= 1){
        document.querySelector('.n-10-span').textContent = s10[0].textContent;
    } else{
        document.querySelector('.n-10-span').textContent = nonSel;
    };

    // SLIDE 11 SELECTION
    const selItem11 = document.querySelectorAll('.slide-11-opt');
    const s11 = [...selItem11].filter((s) => s.dataset.selected=='true');
    if(s11.length >= 1){
        document.querySelector('.n-11-span').textContent = s11[0].textContent;
    } else{
        document.querySelector('.n-11-span').textContent = nonSel;
    };

    // SLIDE 11 SELECTION
    const selItem12 = document.querySelectorAll('.slide-12-opt');
    const s12 = [...selItem12].filter((s) => s.dataset.selected=='true');
    const selItem121 = document.querySelectorAll('.slide-12-1-opt');
    const s121 = [...selItem121].filter((s) => s.dataset.selected=='true');
    if(s12.length >= 1 && s121.length >=1){
        document.querySelector('.n-12-span').textContent = s12[0].textContent;
    } else{
        document.querySelector('.n-12-span').textContent = nonSel;
    };
;}