let jokeIndex = 0;
//109 Jokes
const jokes = [
    ["Why did the banana go to the doctor?", "It wasn’t peeling well."],
    ["What do you call a factory that makes okay products?", "A satisfactory."],
    ["What’s brown and sticky?", "A stick."],
    ["Why don’t elephants chew gum?", "They do, just not in public."],
    ["Why was the math teacher late?", "He took the rhombus."],
    ["What do you call a boomerang that doesn’t come back?", "A stick."],
    [
        "Why did the music teacher go to jail?",
        "Because she got caught with the wrong notes.",
    ],
    [
        "Why did the student eat his homework?",
        "Because his teacher said it was a piece of cake.",
    ],
    ["Why don’t seagulls fly over the bay?", "Because then they’d be bagels."],
    ["What do you call a snowman with a six-pack?", "An abdominal snowman."],
    ["Why did the frog take the bus to work today?", "His car got toad."],
    ["What do you call two birds in love?", "Tweethearts."],
    ["Why don’t crabs give to charity?", "Because they’re shellfish."],
    ["What lights up a soccer stadium?", "A match."],
    ["Why don’t ants ever get sick?", "Because they have tiny ant-bodies."],
    ["What do you call a cow with no legs?", "Ground beef."],
    ["Why did the stadium get hot after the game?", "Because all the fans left."],
    ["Why don’t vampires like Taylor Swift?", "She has bad blood."],
    ["What kind of shoes do ninjas wear?", "Sneakers."],
    ["Why was the computer cold?", "It left its Windows open."],
    ["Why did the teddy bear say no to dessert?", "Because it was stuffed."],
    ["What’s a pirate’s favorite letter?", "You think it’s R, but it’s the C."],
    [
        "Why don’t skeletons go trick-or-treating?",
        "Because they have no body to go with.",
    ],
    ["What’s a cat’s favorite color?", "Purr-ple."],
    ["Why did the cookie go to the doctor?", "It was feeling crumbly."],
    ["What’s a cow’s favorite holiday?", "Moo Year’s Eve."],
    ["Why do chickens sit on eggs?", "Because they don’t have chairs."],
    ["Why did the picture go to jail?", "Because it was framed."],
    ["What do you call a belt made of watches?", "A waist of time."],
    ["Why couldn’t the pirate learn the alphabet?", "Because he got lost at C."],
    ["What do you call a group of musical whales?", "An orca-stra."],
    ["What do you call a bear caught in the rain?", "A drizzly bear."],
    ["Why did the orange stop?", "Because it ran out of juice."],
    ["Why are ghosts bad liars?", "Because you can see right through them."],
    ["What’s a skeleton’s least favorite room in the house?", "The living room."],
    ["Why did the coffee call the police?", "It got mugged."],
    ["What do you call a bee that can’t make up its mind?", "A maybe."],
    ["Why couldn’t the bicycle find its way?", "Because it lost its bearings."],
    [
        "What do you call a rooster staring at a pile of lettuce?",
        "A chicken Caesar salad.",
    ],
    ["Why do cows have hooves instead of feet?", "Because they lactose."],
    ["What’s a snake’s favorite subject in school?", "Hiss-tory."],
    ["Why did the cookie cry?", "Because his mom was a wafer so long."],
    [
        "Why can’t your nose be 12 inches long?",
        "Because then it would be a foot.",
    ],
    ["What did the policeman say to his belly button?", "You’re under a vest."],
    [
        "Why did the grape stop in the middle of the road?",
        "Because it ran out of juice.",
    ],
    ["What did one ocean say to the other?", "Nothing, they just waved."],
    ["Why are skeletons so calm?", "Because nothing gets under their skin."],
    ["What do you call an alligator wearing a vest?", "An investigator."],
    [
        "Why did the horse chew with its mouth open?",
        "Because it had bad stable manners.",
    ],
    ["What do you call a magical dog?", "A labracadabrador."],
    ["Why did the cow jump over the moon?", "The farmer had cold hands."],
    ["Why did the scarecrow get promoted?", "He was outstanding in his field."],
    ["What do you call a dinosaur that’s sleeping?", "A dino-snore."],
    ["Why did the tomato blush?", "Because it saw the salad dressing."],
    ["What do you call a pig that does karate?", "A pork chop."],
    ["Why don’t cannibals eat clowns?", "Because they taste funny."],
    ["What do you call a broken pencil?", "Pointless."],
    [
        "Why did the golfer bring two pairs of pants?",
        "In case he got a hole in one.",
    ],
    ["What do you call a fish wearing a crown?", "A kingfish."],
    ["Why don’t cows ever have any money?", "Because the farmers milk them dry."],
    ["What did one hat say to the other?", "You stay here, I’ll go on ahead."],
    ["Why did the barber win the race?", "He took a short cut."],
    [
        "Why don’t some couples go to the gym?",
        "Because some relationships don’t work out.",
    ],
    ["What do you call a bee that’s having a bad hair day?", "A frizzbee."],
    ["Why don’t melons get married?", "Because they cantaloupe."],
    ["What’s a vampire’s favorite fruit?", "A blood orange."],
    ["Why did the stadium get so hot?", "All the fans left."],
    ["What do you call a sleeping bull?", "A bulldozer."],
    ["What do you call a camel with three humps?", "Pregnant."],
    ["Why don’t dogs chase cats anymore?", "They’re paws-itively over it."],
    ["Why don’t football players get hot?", "Because they have so many fans."],
    ["Why did the gym close down?", "It just didn’t work out."],
    ["Why did the cow cross the road?", "To get to the udder side."],
    ["What did the baby corn say to the mama corn?", "Where’s popcorn?"],
    ["What’s a baker’s favorite type of joke?", "Kneady ones."],
    ["Why did the man fall into the well?", "Because he couldn’t see that well."],
    ["Why don’t oranges play basketball?", "Because they’re bad at dribbling."],
    ["What’s a cat’s favorite dessert?", "Mice cream."],
    ["Why do bees have sticky hair?", "Because they use honeycombs."],
    ["Why did the skeleton go to the party alone?", "He had no body to go with."],
    ["What do you call a fly with no wings?", "A walk."],
    ["What do you call a fish that can’t swim?", "A fish out of water."],
    ["Why did the barber bring a ladder?", "To reach new heights."],
    ["Why don’t skeletons fight each other?", "They don’t have the guts."],
    ["Why couldn’t the bicycle stand up by itself?", "It was two tired."],
    ["What do you call cheese that isn’t yours?", "Nacho cheese."],
    [
        "Why did the scarecrow win an award?",
        "Because he was outstanding in his field.",
    ],
    ["What do you call fake spaghetti?", "An impasta."],
    ["What happens when you go to the bathroom in France?", "European."],
    [
        "Why couldn’t the leopard play hide and seek?",
        "Because he was always spotted.",
    ],
    ["Why don’t oysters donate to charity?", "Because they’re shellfish."],
    ["How does a penguin build its house?", "Igloos it together."],
    [
        "Why did the golfer bring two pairs of pants?",
        "In case he got a hole in one.",
    ],
    [
        "Why can’t you hear a pterodactyl in the bathroom?",
        "Because it has a silent pee.",
    ],
    ["Why did the math book look sad?", "Because it had too many problems."],
    ["What did the zero say to the eight?", "Nice belt!"],
    ["Why did the tomato turn red?", "Because it saw the salad dressing."],
    ["What’s orange and sounds like a parrot?", "A carrot."],
    ["Why do ducks have feathers?", "To cover their butt quacks."],
    ["Why don’t eggs tell jokes?", "They’d crack each other up."],
    ["Why did the coffee file a police report?", "It got mugged."],
    ["Why don’t scientists trust atoms?", "Because they make up everything."],
    ["What do you call a fish with no eyes?", "Fsh."],
    ["What do you call a can opener that doesn’t work?", "A can’t opener."],
    ["How do trees access the internet?", "They log in."],
    ["Why did the computer go to the doctor?", "It caught a virus."],
    ["What do you call a bear with no teeth?", "A gummy bear."],
    ["Why did the chicken join a band?", "Because it had the drumsticks."],
];
const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";
    const avatar = document.createElement("div");
    avatar.className = "fas fa-robot message-avatar";
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = messageText;
    messageDiv.append(avatar, contentDiv);
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
}

function appendUserMessage() {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message user-message";
    const avatar = document.createElement("div");
    avatar.className = "fas fa-smile message-avatar";
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = "Tell me a joke!";
    messageDiv.append(contentDiv, avatar);
    chatContent.appendChild(messageDiv);
}

appendBotMessage(
    "Hello! I am the Dad Joke Bot, here to make you laugh. Let me think of a joke.",
);

function requestJoke() {
    appendUserMessage();
    if (jokeIndex >= jokes.length) {
        appendBotMessage("Sorry, I'm out of jokes for now!");
        return;
    }
    const jokeButton = document.getElementById("requestJokeButton");
    jokeButton.style.display = "none";
    setTimeout(function () {
        appendBotMessage("Ok, got one.");
    }, 1500);
    setTimeout(function () {
        appendBotMessage(jokes[jokeIndex][0]);
    }, 2250);
    setTimeout(function () {
        appendBotMessage(jokes[jokeIndex][1]);
        jokeIndex++;
        jokeButton.style.display = "inline-block";
    }, 4000);
}
