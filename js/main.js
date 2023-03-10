var adviceButton = document.querySelector('#adviceBtn');
var advice = [];


function startAdvice()
{
    var advices = new XMLHttpRequest();
    advices.open('GET' ,`https://api.adviceslip.com/advice`);
    advices.send();
    advices.addEventListener('readystatechange' , function() {
        if(advices.readyState == 4)
        {
            advice = JSON.parse(advices.response);
            document.querySelector('#adviceId').innerHTML = `#${advice.slip.id}`;
            document.querySelector('#advice').innerHTML = `${advice.slip.advice}`;
        }
    })
}

startAdvice();

adviceButton.addEventListener('click' , function()
{
    var advices = new XMLHttpRequest();
    advices.open('GET' ,`https://api.adviceslip.com/advice`);
    advices.send();
    advices.addEventListener('readystatechange' , function() {
        if(advices.readyState == 4)
        {
            advice = JSON.parse(advices.response);
            document.querySelector('#adviceId').innerHTML = `#${advice.slip.id}`;
            document.querySelector('#advice').innerHTML = `${advice.slip.advice}`;
        }
    })
})