


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const bots = document.getElementById('bot');
const bt =  document.getElementById('bott');
const input = document.getElementById('input');
const inputs = document.getElementById('inputs');


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.style.background = 'white';
        body.style.color = 'black';
        bots.style.background = 'white';
        bots.style.color = 'black';
        bt.style.color = 'black';
        input.style.background = 'white';
        inputs.style.background = 'white';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        input.style.background = '#16181c';
        inputs.style.background = '#16181c';
        body.style.color = 'white';
        bots.style.background = 'black';
        bots.style.color = 'black';
        body.style.transition = '2s';
    }
});