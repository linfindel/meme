function checkAnswers(question) {
    var answer = document.getElementById("input").value;
    answer = answer.toLowerCase();

    if (question == 1) {
        if (answer == "1752") {
            setQuestion(2);
        }
    }

    else if (question == 2) {
        if (answer == "france") {
            setQuestion(3);
        }
    }

    else if (question == 3) {
        if (answer == "islam") {
            setQuestion(4);
        }
    }

    else if (question == 4) {
        if (answer == "putin" || answer == "vladimir putin") {
            setQuestion(5);
        }
    }

    else if (question == 5) {
        if (answer == "i love miners" || answer == "i love minors") {
            setQuestion(6);
        }
    }

    else if (question == 6) {
        if (answer == "cheese") {
            setQuestion(7);
        }
    }

    else if (question == 7) {
        if (answer == "amogus") {
            setQuestion(8);
        }
    }

    else if (question == 8) {
        if (answer == "windows") {
            setQuestion(9);
        }
    }

    else if (question == 9) {
        if (answer == "deja vu") {
            setQuestion(10);
        }
    }

    else if (question == 10) {
        if (answer == "f") {
            setQuestion(11);
        }
    }

    easterEggs(answer);
}

let lastKeypressTime = 0;
let bingChilling = false;
const typingSpeedThreshold = 100;

document.body.addEventListener("keypress", () => {
    const currentTime = new Date().getTime();
    const timeSinceLastKeypress = currentTime - lastKeypressTime;

    if (timeSinceLastKeypress < typingSpeedThreshold && !bingChilling) {
        document.getElementById("audio").src = "chill.mp3";
        document.getElementById("input").setAttribute("inert", "true");

        bingChilling = true;

        setTimeout(() => {
            bingChilling = false;
            
            document.getElementById("input").removeAttribute("inert");
            document.getElementById("input").focus();
        }, 1000);
    } else if (!bingChilling) {
        document.getElementById("audio").src = "discord.mp3";
    }

    lastKeypressTime = currentTime;
});

function setQuestion(number) {
    if (number == 2) {
        document.getElementById("audio").src = "correct.mp3";
    }

    if (number - 1 < questions.length) {
        document.getElementById("input").value = "";

        console.log("Next question please...");

        document.getElementById("question-number").innerText = `Question ${number}`;
        document.getElementById("question").innerText = questions[number - 1];
        document.getElementById("input").oninput = function () {checkAnswers(number)};
    }

    else {
        document.getElementById("audio").src = "outro-song.mp3";
        document.getElementById("card").innerHTML = "<h1>Now for your prize...</h1>";

        document.getElementById("santa").style.filter = "blur(500px)";

        setTimeout(() => {
            document.getElementById("card").style.filter = "blur(500px)";

            document.getElementById("audio").src = ""; 
        }, 15200);

        setTimeout(() => {
            document.getElementById("audio").src = "rickroll.mp3";

            document.body.style.backgroundImage = "url('https://c.tenor.com/_4YgA77ExHEAAAAd/rick-roll.gif')";
            document.body.style.backgroundSize = "cover";
        }, 15250);
    }

    if (number == 6) {
        document.getElementById("webcam").style.opacity = "1";
    }

    if (number == 7) {
        document.getElementById("webcam").style.opacity = "0";
    }
}

function easterEggs(answer) {
    document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg";

    if (answer == "amogus") {
        document.getElementById("audio").src = "sus.mp3";
        document.getElementById("santa").src = "https://1000logos.net/wp-content/uploads/2021/09/Among-Us-Symbol.png";

        setTimeout(() => {
            document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg"; 
        }, 4000);
    }

    else if (answer == "sus") {
        document.getElementById("audio").src = "vine-boom.mp3";

        document.getElementById("santa").src = "https://media.tenor.com/IyweQyb3MhIAAAAC/the-rock-sus.gif";

        setTimeout(() => {
            document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg"; 
        }, 1000);
    }

    else if (answer == "i love you" || answer == "i love u") {
        document.getElementById("audio").src = "sexy-sax.mp3";
    }

    else if (answer == "hello your computer has virus") {
        document.getElementById("audio").src = "india.mp3";

        document.getElementById("santa").src = "https://static.theprint.in/wp-content/uploads/2020/06/Arvind-Kumar.jpg?compress=true&quality=80&w=376&dpr=2.6";

        setTimeout(() => {
            document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg"; 
        }, 8000);
    }

    else if (answer == "homophobic") {
        document.getElementById("audio").src = "why-r-u-gay.mp3";

        document.getElementById("santa").src = "https://miro.medium.com/v2/resize:fit:933/1*w4DxUy0PMoqeq25UXfyL0g@2x.jpeg";

        setTimeout(() => {
            document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg"; 
        }, 6000);
    }

    else if (answer == "i love minors" || answer == "i love miners") {
        document.getElementById("audio").src = "fbi.mp3";

        document.getElementById("santa").src = "https://i.ytimg.com/vi/c46_iL2QqOE/hqdefault.jpg";

        setTimeout(() => {
            document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg"; 
        }, 2000);
    }

    else if (answer == "bonk") {
        document.getElementById("audio").src = "bonk.mp3";

        document.getElementById("santa").src = "https://i.ytimg.com/vi/1v0zFknL1wQ/sddefault.jpg";

        setTimeout(() => {
            document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg"; 
        }, 1000);
    }

    else if (answer == "boop") {
        document.getElementById("audio").src = "fnaf-boop.mp3";

        document.getElementById("santa").style.filter = "brightness(0.75) contrast(5000) saturate(500) invert()";

        setTimeout(() => {
            document.getElementById("santa").style.filter = ""; 
        }, 1000);
    }

    else if (answer == "noot noot") {
        document.getElementById("audio").src = "noot.mp3";

        document.getElementById("santa").src = "https://i.kym-cdn.com/entries/icons/original/000/040/642/terrifiednootnoot.jpg";

        setTimeout(() => {
            document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg"; 
        }, 1000);
    }

    else if (answer == "monster") {
        document.getElementById("audio").src = "monsters-inc-bass.mp3";
    }

    else if (answer == "stalk") {
        document.getElementById("audio").src = "door-knocking.mp3";

        document.getElementById("santa").style.filter = "brightness(0.75) contrast(5000) saturate(500) invert()";

        setTimeout(() => {
            document.getElementById("santa").style.filter = ""; 
        }, 5000);
    }

    else if (answer == "i don't know"  || answer == "i dont know" || answer == "idk") {
        document.getElementById("audio").src = "oh-crap.mp3";
    }

    else if (answer == "islam") {
        document.getElementById("audio").src = "islam.mp3";

        document.getElementById("santa").src = "بابا نُويل.jpg";

        setTimeout(() => {
            document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg"; 
        }, 15000);
    }

    else if (answer == "cheese") {
        document.getElementById("audio").src = "cheese.mp3";
    }

    else if (answer == "putin" || answer == "vladimir putin") {
        document.getElementById("audio").src = "wide-putin.mp3";

        document.getElementById("santa").src = "https://media.cnn.com/api/v1/images/stellar/prod/221222182104-putin-1222.jpg?q=w_1110,c_fill";

        setTimeout(() => {
            document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg"; 
        }, 15000);
    }

    else if (answer == "i'm sad" || answer == "im sad") {
        document.getElementById("audio").src = "depression.mp3";
    }

    else if (answer == "france") {
        document.getElementById("audio").src = "france.mp3";

        document.getElementById("santa").src = "père-noël.jpg";

        setTimeout(() => {
            document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg"; 
        }, 15000);
    }

    else if (answer == "windows") {
        document.getElementById("audio").src = "startup.mp3";

        document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg";
    }

    else if (answer == "deja vu") {
        document.getElementById("audio").src = "deja-vu.mp3";

        document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg";
    }

    else if (answer == "chonk") {
        location.href = 'chonk.html';
    }

    else if (answer == "pissing off oliver") {
        document.getElementById("audio").src = "whistle.mp3";

        document.getElementById("santa").src = "https://media.elfontheshelf.com/wp-content/uploads/2020/10/Learn-10-Fun-Facts-About-Santa_2.jpg";
    }
}

const questions = [
    "How old is Santa Claus?",
    "Where does Frosty hide the bodies?",
    "What is a religion that doesn't celebrate Christmas?",
    "Who was so unhappy with their Christmas presents that they invaded another sovereign country two months later?",
    "What festive phrase might a communist mine overseer use to express their admiration for their workers?",
    "I'm taking a festive picture of you. Say cheese.",
    "What is the most common bastardisation of the name of a very merrily memed-upon game?",
    "What is the most popular desktop operating system at Christmas?",
    "What is the festive feeling that you have been here before called?",
    "Type F in chat"
]

const answers = [
    "1752",
    "france",
    "islam",
    "putin",
    "i love miners",
    "cheese",
    "amogus",
    "windows",
    "deja vu",
    "f"
]

async function startVideo() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const videoElement = document.getElementById('webcam');
      videoElement.srcObject = stream;
    } catch (err) {
      console.error('Error accessing the webcam:', err);
    }
}

startVideo();

function cheat(question) {
    if (question == "all") {
        console.log(answers);
    }

    else {
        console.log(answers[question - 1]);
    }
}

document.getElementById("input").addEventListener("blur", () => {
    document.getElementById("input").focus()
})