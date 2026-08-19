/* =========================================
   LOVE WEBSITE - MAIN JAVASCRIPT
========================================= */


/* =========================================
   SURPRISE SELECTION
========================================= */

function selectSurprise(type) {

    const cards =
        document.querySelectorAll(".surprise-card");

    let selectedCard = null;


    cards.forEach(function (card) {

        if (
            type === "camera" &&
            card.classList.contains("camera-card")
        ) {
            selectedCard = card;
        }


        if (
            type === "bouquet" &&
            card.classList.contains("bouquet-card")
        ) {
            selectedCard = card;
        }


        if (
            type === "letter" &&
            card.classList.contains("envelope-card")
        ) {
            selectedCard = card;
        }

    });


    /* Click animation */

    if (selectedCard) {

        selectedCard.classList.add("clicked");

    }


    /* =====================================
       CAMERA
    ===================================== */

    if (type === "camera") {

        setTimeout(function () {

            window.location.href =
                "memories.html";

        }, 700);

        return;
    }


    /* =====================================
       BOUQUET
    ===================================== */

    if (type === "bouquet") {

        setTimeout(function () {

            window.location.href =
                "bouquet.html";

        }, 700);

        return;
    }


    /* =====================================
       LETTER
    ===================================== */

    if (type === "letter") {

        setTimeout(function () {

            window.location.href =
                "letter.html";

        }, 700);

        return;
    }

}


/* =========================================
   LETTER OPENING
========================================= */

function openLetter() {

    const envelope =
        document.getElementById("letterEnvelope");

    const hint =
        document.getElementById("openHint");

    const content =
        document.getElementById("letterContent");


    if (!envelope || !content) {

        return;

    }


    /* Open envelope */

    envelope.classList.add("open");


    /* Hide instruction */

    if (hint) {

        hint.classList.add("hide");

    }


    /* Show letter */

    setTimeout(function () {

        content.classList.add("show");

        startTypewriter();

    }, 1000);

}


/* =========================================
   TYPEWRITER LETTER
========================================= */

function startTypewriter() {

    const textElement =
        document.getElementById("typewriterText");


    if (!textElement) {

        return;

    }


    /* Prevent running twice */

    if (textElement.dataset.started === "true") {

        return;

    }


    textElement.dataset.started = "true";


    const message =  `My love, Dhruval,

Sometimes I sit and think about how one ordinary day, on 7th August 2023, became the beginning of something that would mean so much to me.

And look at us now...

Three years of us.

Three years of laughing over the stupidest things, making memories that nobody else would understand, fighting over little things, getting angry, saying things we don't mean, and somehow finding our way back to each other every single time.

We have never been perfect.

We are both a little crazy, a little stubborn, and honestly, our egos can be bigger than our love sometimes. But somehow, whenever it comes to you, my anger doesn't stay for long. My ego disappears. Because no matter how angry I am, deep down, I never want a life where you aren't a part of it.

I still remember that time when we were in the same college.

We could fight at night and act like we were never going to talk again... and then the next morning, we would see each other in college and somehow everything felt okay again.

Maybe that's what makes us different.

We don't always know how to love perfectly, but we keep choosing each other.

You have seen so many versions of me.

The happy me.
The angry me.
The overthinking me.
The stubborn me.
The emotional me.

And somehow, you became the person with whom I can be all of them.

You became my comfort without even trying.

You became a part of my everyday life so naturally that now I can't imagine my future without thinking of you somewhere in it.

There are so many memories between us that I could never put all of them into one letter.

But if I had to choose one thing I want you to remember, it would be this:

I am so grateful that it was you.

Out of all the people in this world, somehow our paths crossed.

And out of all the days I could have lived, I got to spend some of the most beautiful ones with you.

I don't know what the future will look like.

I don't know how many more silly fights we'll have, how many times we'll annoy each other, or how many times we'll say "I'm done" and then end up laughing together again.

But I know one thing.

I want to keep making those memories with you.

I want more mornings with you.
More random conversations.
More stupid jokes.
More photographs.
More celebrations.
More fights that we forget the next day.
More moments where I look at you and think, "I'm so lucky this is my person."

And if life ever gets difficult, I hope we remember how far we've already come.

Because three years aren't just three years.

They're thousands of little moments that became our story.

Dhruval...

If I could ask you for only one thing from the future, it wouldn't be flowers, gifts, or anything expensive.

It would simply be this:

Will you stay with me for the rest of our lives?

Will you keep choosing me, even on the difficult days?

Will you grow with me, laugh with me, fight with me, forgive me, annoy me, and still hold my hand through everything?

Because if I get to choose my person again and again...

I will always choose you.

Thank you for being a part of my life.
Thank you for all the memories.
Thank you for staying through the beautiful days and the difficult ones.

And most importantly...

Thank you for being you.

I love you, Dhruval.

More than I know how to explain.
More than this little letter could ever hold.

And maybe one day, years from now, we'll look back at this little website and smile at how young we were...

and I'll still be sitting beside you thinking,

"I'd choose you all over again."

Forever yours,
♡`;


    let index = 0;


    function typeCharacter() {

        if (index < message.length) {

            textElement.textContent +=
                message.charAt(index);

            index++;

            setTimeout(
                typeCharacter,
                45
            );

        }

    }


    typeCharacter();

}


/* =========================================
   PAGE LOADED
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Our Little Story website loaded ♡"
        );

    }
);
/* =========================================
   HIDDEN MESSAGES
========================================= */

const hiddenMessages = {

    1:
        "I still get butterflies when I think about us. ♡",

    2:
        "You became my favourite person without even realizing it.",

    3:
        "Even after all our silly fights, I would still choose you.",

    4:
        "Some of my favourite memories are the ones where we did absolutely nothing.",

    5:
        "You have seen every version of me, and somehow you are still here. ♡",

    6:
        "If I could relive one part of my life, I would choose our little moments again.",

    7:
        "You are not just a chapter in my story. You became part of the story itself.",

    8:
        "Three years later, and my heart still says you. ♡"

};


let foundMessages = new Set();


function showHiddenMessage(number) {

    const popup =
        document.getElementById("messagePopup");

    const popupMessage =
        document.getElementById("popupMessage");

    popupMessage.textContent =
        hiddenMessages[number];

    popup.classList.add("show");


    const heart =
        document.querySelector(
            ".heart-message-" + number
        );

    if (heart) {

        heart.classList.add("found");

    }


    foundMessages.add(number);


    document.getElementById("messageCount")
        .textContent =
        foundMessages.size;


    if (foundMessages.size === 8) {

        document
            .getElementById("messagesNext")
            .classList.add("ready");

    }

}


function closeHiddenMessage() {

    document
        .getElementById("messagePopup")
        .classList.remove("show");

}


function goToFinalQuestion() {

    window.location.href =
        "question.html";

}