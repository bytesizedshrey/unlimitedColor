//generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBG,1000)
    }
    function changeBG(){
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)


console.log(randomColor());

