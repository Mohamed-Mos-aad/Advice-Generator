// Variables
var advice;
var x;
// Mean Function
function generateAdvice()
{
    x = Math.round(Math.random()*10);
    switch(x)
    {
        case(1):
        advice = "It is easy to sit up and take notice, what's difficult is  getting up and taking action.";
        break;
        case(2):
        advice = "If you don't know the situation fully, you can't offer an informed opinion.";
        break;
        case(3):
        advice = "Life is not so much what you accomplish as what you overcome.";
        break;
        case(4):
        advice = "If you support, guide, and lead others, if you make contributions to their lives, you will reap the best rewards.";
        break;
        case(5):
        advice = "Luck happens when hard work and timing and talent intersect.";
        break;
        case(6):
        advice = "You never know what the future will bring, so always make the best use of the present.";
        break;
        case(7):
        advice = "Sometimes the one thing you need for growth is the one thing you are most afraid to do.";
        break;
        case(8):
        advice = "Learn how to listen. You can't learn anything when you're talking.";
        break;
        case(9):
        advice = "The delusion that life's supposed to be fair is the source of much unhappiness.";
        break;
        case(10):
        advice = "Don't put yourself above anyone or anything; work hard in silence and let success make the noise.";
        break;
    }
    document.getElementById("advice").innerHTML = advice;
    var i;
    if(x<10)
    {
        i = x + 1;
    }
    else
    {
        i = x;
    }
    document.getElementById("adviceNum").innerHTML = "#"+i;
}