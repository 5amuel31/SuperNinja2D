const ninja = document.querySelector('.ninja');
const inimigo = document.querySelector('.inimigo');

const jump = () => {
    ninja.classList.add('jump');

    setTimeout(() => {
     ninja.classList.remove('jump');
    }, 500 );
}

const loop = setInterval(() => {
   
    const inimigoposition = inimigo.offsetLeft;
    const ninjaposition = +window.getComputedStyle(ninja).bottom.replace('px', '')

    console.log(ninjaposition);
    
    if (inimigoposition <= 50 && inimigoposition > 0 && ninjaposition < 80) {
        

        inimigo.style.animation = 'none';
        inimigo.style.left = `${inimigoposition}px`;

        inimigo.style.animation = 'none';
        inimigo.style.bottom = `${ninjaposition}px`;

        ninja.src = './imagens/rip2.png';
        ninja.style.width = '120px';
        ninja.style.marginLeft = '-30px';

    }

   }, 10 );

document.addEventListener('keydown', jump);