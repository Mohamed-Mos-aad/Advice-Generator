var adviceButton = document.querySelector('#adviceBtn');
// var advice = [];


async function startAdvice()
{
    var advices = await fetch(`https://api.adviceslip.com/advice`);
    var advice = await advices.json();
    document.querySelector('#adviceId').innerHTML = `#${advice.slip.id}`;
    document.querySelector('#advice').innerHTML = `${advice.slip.advice}`;
}

startAdvice();

adviceButton.addEventListener('click' , function()
{
    async function startAdvice()
    {
        var advices = await fetch(`https://api.adviceslip.com/advice`);
        var advice = await advices.json();
        document.querySelector('#adviceId').innerHTML = `# ${advice.slip.id}`;
        document.querySelector('#advice').innerHTML = `“${advice.slip.advice}”`;
    }
    startAdvice();
})