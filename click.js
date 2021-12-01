const stats = document.querySelector('.stats'); //counting number

const startBtn = document.getElementById('start');
const clickBtn = document.getElementById('click');

let userName = prompt("Enter Your name: ");

const winScore = 10;
let count = 0;

clickBtn.addEventListener('click',() => {
    count++;

    stats.textContent = count;
});

startBtn.addEventListener('click', () => {
    start();
});

const start = () => {
    count = 0;
    stats.textContent = count;

    clickBtn.removeAttribute('disabled');

    startCounting();
}

const startCounting = () => {
    setTimeout(() => {
        if(isWin()){
            stats.textContent = 'Well Done! ' + userName +', You Won!';
        }
        else{
            stats.textContent = 'Ooops! '+userName+ ', You Lost!';
        }
        clickBtn.setAttribute('disabled', true);
    },2000);
};

const isWin = () => {
    if(count >= winScore){
        return true;
    }
    else{
        return false;
    }
}