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

    easterEggs(answer);
}

document.body.addEventListener("keypress", () => {
    document.getElementById("audio").src = "discord.mp3";
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

        setTimeout(() => {
            document.getElementById("card").style.filter = "blur(500px)";

            document.getElementById("audio").src = ""; 
        }, 15200);

        setTimeout(() => {
            document.getElementById("audio").src = "rickroll.mp3";
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
    if (answer == "amogus") {
        document.getElementById("audio").src = "sus.mp3";
    }

    else if (answer == "sus") {
        document.getElementById("audio").src = "vine-boom.mp3";
    }

    else if (answer == "i love you" || answer == "i love u") {
        document.getElementById("audio").src = "sexy-sax.mp3";
    }

    else if (answer == "hello your computer has virus") {
        document.getElementById("audio").src = "india.mp3";
    }

    else if (answer == "homophobic") {
        document.getElementById("audio").src = "why-r-u-gay.mp3";
    }

    else if (answer == "i love minors" || answer == "i love miners") {
        document.getElementById("audio").src = "fbi.mp3";
    }

    else if (answer == "bonk") {
        document.getElementById("audio").src = "bonk.mp3";
    }

    else if (answer == "boop") {
        document.getElementById("audio").src = "fnaf-boop.mp3";
    }

    else if (answer == "noot noot") {
        document.getElementById("audio").src = "noot.mp3";
    }

    else if (answer == "monster") {
        document.getElementById("audio").src = "monsters-inc-bass.mp3";
    }

    else if (answer == "stalk") {
        document.getElementById("audio").src = "door-knocking.mp3";
    }

    else if (answer == "i don't know"  || answer == "i dont know" || answer == "idk") {
        document.getElementById("audio").src = "oh-crap.mp3";
    }

    else if (answer == "islam") {
        document.getElementById("audio").src = "islam.mp3";
    }

    else if (answer == "cheese") {
        document.getElementById("audio").src = "cheese.mp3";
    }

    else if (answer == "putin" || answer == "vladimir putin") {
        document.getElementById("audio").src = "wide-putin.mp3";
    }

    else if (answer == "i'm sad" || answer == "im sad") {
        document.getElementById("audio").src = "depression.mp3";
    }

    else if (answer == "france") {
        document.getElementById("audio").src = "france.mp3";
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
]

const answers = [
    "1752",
    "france",
    "islam",
    "putin",
    "i love miners",
    "cheese",
    "amogus"
]

async function startVideo() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const videoElement = document.getElementById('videoElement');
      videoElement.srcObject = stream;
    } catch (err) {
      console.error('Error accessing the webcam:', err);
    }
}

startVideo();