function checkAnswers(question) {
    var answer = document.getElementById(`q${question}`).value;

    if (question == 1) {
        if (answer == "1752") {
            setQuestion(2);
        }
    }

    else if (question == 2) {
        if (answer == "lorem") {
            setQuestion(3);
        }
    }

    easterEggs(answer);
}

document.body.addEventListener("keypress", () => {
    document.getElementById("audio").src = "discord-join.mp3";
});

function setQuestion(number) {
    console.log("Next question please...");

    document.getElementById("question-number").innerText = `Question ${number}`;
    document.getElementById("question").innerText = questions[number - 1];
    document.getElementById(`q${number - 1}`).oninput = `checkAnswers(${number})`;
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

    else if (answer == "i love minors") {
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

    else if (answer == "putin") {
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
    ""
]