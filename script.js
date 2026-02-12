// 1. DATA: This is your deck of cards. 
// Every card has a photo name and one of your 100 reasons.
const data = [
{ text: "you have ethereal eyes", img: "photo (81).jpg" },
{ text: "you're worth it", img: "photo (82).jpg" },
{ text: "you deserve it", img: "photo (83).jpg" },
{ text: "you're like a princess", img: "photo (84).jpg" },
{ text: "you're pretty", img: "photo (91).jpg" },
{ text: "you're the best person I've ever met", img: "photo (88).jpg" },
{ text: "you're hot", img: "photo (45).jpg" },
{ text: "you're sexy", img: "photo (36).jpg" },
{ text: "you're elegant", img: "photo (34).jpg" },
{ text: "you're absolutely gorgeous", img: "photo (46).jpg" },
{ text: "you have the prettiest lips", img: "photo (53).jpg" },
{ text: "you have the softest hands", img: "photo (72).jpg" },
{ text: "you're my dream girl", img: "photo (71).jpg" },
{ text: "you're everything I could ever wish for, and then some more", img: "photo (69).jpg" },
{ text: "you're charming", img: "photo (68).jpg" },
{ text: "you mean everything to me", img: "photo (66).jpg" },
{ text: "you're the best thing that ever happened to me", img: "photo (62).jpg" },
{ text: "you have stunning hips", img: "photo (75).jpg" },
{ text: "you feel like home", img: "photo (65).jpg" },
{ text: "your warmth comforts me in ways you can't imagine", img: "photo (67).jpg" },
{ text: "you're my queen", img: "photo (79).jpg" },
{ text: "do I even need a reason?", img: "photo (74).jpg" },
{ text: "you look extremely huggable", img: "photo (20).jpg" },
{ text: "you look extremely kissable", img: "photo (19).jpg" },
{ text: "you're kind", img: "photo (15).jpg" },
{ text: "you're nice to others", img: "photo (13).jpg" },
{ text: "you feel deeply", img: "photo (12).jpg" },
{ text: "candid shots of you are pretty asf too", img: "photo (76).jpg" },
{ text: "you complete me", img: "photo (70).jpg" },
{ text: "you've improved me more than anyone else this year", img: "photo (61).jpg" },
{ text: "you help me with my problems", img: "photo (58).jpg" },
{ text: "you don't judge me", img: "photo (27).jpg" },
{ text: "you're gentle", img: "photo (14).jpg" },
{ text: "you're like a deity", img: "photo (64).jpg" },
{ text: "you're my goddess", img: "photo (57).jpg" },
{ text: "you get genuinely happy for others", img: "photo (51).jpg" },
{ text: "you're my best friend", img: "photo (47).jpg" },
{ text: "you care about me", img: "photo (44).jpg" },
{ text: "you make me realise my mistakes", img: "photo (43).jpg" },
{ text: "you help me with my emotions", img: "photo (41).jpg" },
{ text: "who couldn't love you?", img: "photo (38).jpg" },
{ text: "you notice the little things", img: "photo (37).jpg" },
{ text: "you deserve all the love in the world", img: "photo (52).jpg" },
{ text: "you're pure", img: "photo (55).jpg" },
{ text: "you value me", img: "photo (25).jpg" },
{ text: "you're always right", img: "photo (21).jpg" },
{ text: "you have the best thighs", img: "photo (40).jpg" },
{ text: "you're loyal", img: "photo (29).jpg" },
{ text: "you make the rest of the world go quiet", img: "photo (31).jpg" },
{ text: "you make my heart skip a beat every time", img: "photo (32).jpg" },
{ text: "loving you is the easiest thing I've ever done", img: "photo (42).jpg" },
{ text: "you have the best curves ever made", img: "photo (77).jpg" },
{ text: "you have terrifyingly fast and accurate intuition", img: "photo (7).jpg" },
{ text: "you're patient with me, even when I make mistakes", img: "photo (6).jpg" },
{ text: "you've turned me into a writer, artist and much more", img: "photo (3).jpg" },
{ text: "every inch of you is perfect", img: "photo (1).png" },
{ text: "I'm addicted to you", img: "photo (18).jpg" },
{ text: "your voice does things to my nervous system", img: "photo (56).jpg" },
{ text: "I'd worship the ground you walk on", img: "photo (33).jpg" },
{ text: "you're the peace I've searched for my whole life", img: "photo (2).jpg" },
{ text: "you heal parts of me I didn't know were broken", img: "photo (1).jpg" },
{ text: "if I had a flower for every time you made me smile, I could walk through my garden forever", img: "photo (1).gif" },
{ text: "every love song suddenly makes sense now", img: "photo (8).jpg" },
{ text: "you're divine", img: "photo (10).jpg" },
{ text: "you're heaven", img: "photo (11).jpg" },
{ text: "if beauty was a religion, you'd be the only deity", img: "photo (48).jpg" },
{ text: "God spent extra time sculpting you", img: "photo (78).jpg" },
{ text: "you understand me", img: "photo (59).jpg" },
{ text: "I'd burn every ship for you", img: "photo (35).jpg" },
{ text: "you've never made me feel unseen", img: "photo (80).jpg" },
{ text: "you tell me the little things in your life", img: "photo (85).jpg" },
{ text: "you don't snitch", img: "photo (86).jpg" },
{ text: "you're an excellent listener", img: "photo (95).jpg" },
{ text: "you made me love dogs", img: "photo (16).jpg" },
{ text: "golgappe jaise gaal the aapke-", img: "photo (26).jpg" },
{ text: "you're sweet", img: "photo (97).jpg" },
{ text: "you always come back", img: "photo (98).jpg" },
{ text: "I wanna marry you someday even if it sounds impossible", img: "photo (7).jpg" },
{ text: "you're art in motion", img: "photo (5).jpg" }

];

let shuffledData = data.sort(() => Math.random() - 0.5);
let currentCount = 0;
let cardIndex = 0;

const container = document.getElementById('stack-container');
const counter = document.getElementById('counter');

function createCard(index) {
    if (index >= shuffledData.length) return null;

    const card = document.createElement('div');
    card.className = 'polaroid';
    
    const randomRot = Math.floor(Math.random() * 10) - 5;
    card.style.transform = `rotate(${randomRot}deg)`;

    card.innerHTML = `
        <img src="${shuffledData[index].img}" draggable="false">
        <div class="reason">${shuffledData[index].text}</div>
    `;

    const hammer = new Hammer(card);

    // FIX: Tells the phone to let us swipe in every direction (up, down, left, right)
    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    hammer.on('pan', (e) => {
        // FIX: This stops the phone from trying to refresh or scroll the page
        if (e.pointerType === 'touch') e.preventDefault(); 
        
        card.style.transition = 'none';
        card.style.transform = `translate(${e.deltaX}px, ${e.deltaY}px) rotate(${e.deltaX / 10}deg)`;
    });

    hammer.on('panend', (e) => {
        card.style.transition = 'transform 0.5s ease-out';
        
        if (Math.abs(e.deltaX) > 100 || Math.abs(e.deltaY) > 100) {
            card.style.transform = `translate(${e.deltaX * 5}px, ${e.deltaY * 5}px) rotate(${e.deltaX / 5}deg)`;
            
            setTimeout(() => {
                card.remove();
                currentCount++;
                updateCounter();
                addNewCard();
            }, 300);
        } else {
            card.style.transform = `rotate(${randomRot}deg)`;
        }
    });

    return card;
}

function updateCounter() {
    if (currentCount < shuffledData.length) {
        counter.innerText = `${currentCount + 1} / ${shuffledData.length}`;
    } else {
        counter.innerText = "100 / 100";
        container.innerHTML = "<h2 style='color:white; text-align:center;'>I love you sm Manya ❤️</h2>";
    }
}

function addNewCard() {
    const newCard = createCard(cardIndex);
    if (newCard) {
        container.prepend(newCard);
        cardIndex++;
    }
}

addNewCard();
addNewCard();