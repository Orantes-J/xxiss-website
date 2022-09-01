const msgBox = document.querySelector('.msgBoxUC');
export const successMsg = function(e){
    console.log('ruuuunnnnning')
    msgBox.classList.remove('hide-object');
    msgBox.classList.add('display-object');
    msgBox.innerHTML = 
    `
    <p class="tf1">Message was sent <i class="fa-solid fa-check"></i></p>
    `
};