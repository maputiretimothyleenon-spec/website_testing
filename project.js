const hiddenElements = document.querySelectorAll('hidden');
const observer = new IntersectionObserver((entries)=> {entries.forEach((entry)=>{
    if(entry.boundingClientRect.isIntersecting){entry.target.classList.add('show');
    }});});
    hiddenElements.forEach((el)=>observer.observe(el));
document.getElementById("reveal-btn").addEventListener("click", function()
{document.getElementById("memory").classList.add("show");});
const btn = document.getElementById("reveal-btn");
const memory = document.getElementById("memory");
const audio = new Audio("cameramp3.mp3");

btn.addEventListener("click", function(){

    // show memory
    memory.classList.add("show");

    // add glow mode to page
    document.body.classList.add("memory-open");

    // play sound
    audio.play();

});
const blueprintBtn =
document.getElementById("plan-btn");

const cards =
document.querySelectorAll(".dream-card");

const ending =
document.getElementById("blueprint-ending");

blueprintBtn.addEventListener("click", function(){

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("show");

        }, index * 1000);

    });

    setTimeout(() => {

        ending.classList.add("show");

    }, cards.length * 1000);

});
const beginBtn = document.getElementById("begin-btn");
const music = document.getElementById("bg-music");

beginBtn.addEventListener("click", function () {

    // play music
    music.volume = 0.1
    music.currentTime = 0
    music.play();

    // scroll
    document.getElementById("the-plan")
    .scrollIntoView({ behavior: "smooth" });

});

const youBtn = document.getElementById("you-btn");
const meBtn = document.getElementById("me-btn");

const youMessage = document.getElementById("you-message");
const meMessage = document.getElementById("me-message");

youBtn.addEventListener("click", function () {

    youMessage.classList.add("show");

    youMessage.innerHTML = ` YOU <br><br> I don't know every thought that crosses your mind when we're apart.

I don't know every fear you've had to silence, every tear you've had to wipe on your own. I dont know how many times have you wished I could provide you with a shoulder or every difficult day you've carried without telling me.

But I do know this.

I've watched you keep going when everything was screaming STOP.

I've watched your patience stretch further than I ever thought possible.

I've watched you continue believing in US on days when the easier choice was to abandon.

I've watched your strength reveal itself in quiet and many ways.

It still motivates me...

And I admire it more than I probably say.

You always smile. Even when life isn't requring a smile from you.

So when the days feel heavier than you can bear, coz they do. Remember that you're you.

Keep your chin up high. Smile, be Happy. And always know ii got you covered in prayer.

The distance has asked a lot from both of us.

Doubt creeps in.

Things around us change, and we change along with them..

Yet we're are not there to keep track of the changes.

But if there's one thing the distance has shown me, it's how lucky I am to be walking this road with someone like you.

Even from miles away, through the heavy days, the silent communication, you've never stopped feeling like home.
         `;

});

meBtn.addEventListener("click", function () {

    meMessage.classList.add("show");

    meMessage.innerHTML = `ME<br><br> <p><p>A detour doesn’t mean wrong turn.
                It's just another route.<br><br> A “not yet”.. And for us? It's a room to grow. <br><br>
                If you ask me? I hated it. And maybe probably still do, especially on days I wish you'd just be here.<br><br>
                But I can't deny the fact that I've grown. Grown in aspects that i never knew I needed growth in. <br><br>
                And so have you, I mean you've always been better than me in these areas.<br><br>
                The future that once felt blurry is beggining to take shape. Different from what I imagined perhaps. But clearer than before.
                This whole thing(the website) is proof of that.<br><br>
                For the longest time I kept asking myself and God <br>
                <br>Why God?<br><br> Why this route?<br><br> Why this distance?<br><br>Why US?<br><br> 
                But little by little , I think I'm beggining to understand.<br><br>
                Because some things aren't taken from us. They're being prepared for us.
                I've grown to appreciate this detour more and more as time is passing by.<br><br>
                Though if it were my choice, I'd have chosen a path where I'm with you now..<br>
                Without hesitation<br><br>
                And that is precicely why the choice wasn't mine to make.<br><br>
                HIS plans don't stop at today, they reach all the way into FOREVER.</p>
    `;

});

document.getElementById("choice-btn").addEventListener("click", function(){

    document.getElementById("final-choice").classList.add("show");

});
const futureBtn = document.getElementById("future-btn");
const futureMessage = document.getElementById("future-message");

futureBtn.addEventListener("click", function () {

    futureMessage.classList.add("show");

    futureMessage.innerHTML = `
        <p>
            But I’ve stopped needing to know everything.
        </p>

        <p>
            Because not knowing doesn’t mean losing.
            It just means waiting. Something that took a while for me to understand.
        </p>

        <p>
            And waiting doesn’t feel empty anymore.
            Sometimes it feels like trust.
        </p>

        <br>

        <p>
            I still think about the small things.
            Not the big plans.
            Not perfect timelines.
        </p>

        <p>
            Just moments.
            Real ones.
        </p>

        <p> 
            A message that doesn't need overthinking
        </p>

        <br>

        <p>
            A future where distance doesn’t decide how close we feel.
        </p>

        <p>
            A future where you're the first person I see every morning
        </p>

        <br>

        <p>
            Even if it looks different from what we imagined…
            You'll still be in it.
        </p>
    `;
});