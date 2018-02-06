// App selector

const randomPizzasDiv = document.getElementById("randomPizzas");
let pizzaIngredients = {};
let items = document.querySelectorAll('.mover');
let scrollTop = 0;
let documentTop = document.documentElement.scrollTop || document.body.scrollTop;
let phase = 0;
let cols = 8;
let s = 250;

pizzaIngredients.meats = [
    "Pepperoni",
    "Sausage",
    "Fennel Sausage",
    "Spicy Sausage",
    "Chicken",
    "BBQ Chicken",
    "Chorizo",
    "Chicken Andouille",
    "Salami",
    "Tofu",
    "Bacon",
    "Canadian Bacon",
    "Proscuitto",
    "Italian Sausage",
    "Ground Beef",
    "Anchovies",
    "Turkey",
    "Ham",
    "Venison",
    "Lamb",
    "Duck",
    "Soylent Green",
    "Carne Asada",
    "Soppressata Picante",
    "Coppa",
    "Pancetta",
    "Bresola",
    "Lox",
    "Guanciale",
    "Chili",
    "Beef Jerky",
    "Pastrami",
    "Kielbasa",
    "Scallops",
    "Filet Mignon"
];
pizzaIngredients.nonMeats = [
    "White Onions",
    "Red Onions",
    "Sauteed Onions",
    "Green Peppers",
    "Red Peppers",
    "Banana Peppers",
    "Ghost Peppers",
    "Habanero Peppers",
    "Jalapeno Peppers",
    "Stuffed Peppers",
    "Spinach",
    "Tomatoes",
    "Pineapple",
    "Pear Slices",
    "Apple Slices",
    "Mushrooms",
    "Arugula",
    "Basil",
    "Fennel",
    "Rosemary",
    "Cilantro",
    "Avocado",
    "Guacamole",
    "Salsa",
    "Swiss Chard",
    "Kale",
    "Sun Dried Tomatoes",
    "Walnuts",
    "Artichoke",
    "Asparagus",
    "Caramelized Onions",
    "Mango",
    "Garlic",
    "Olives",
    "Cauliflower",
    "Polenta",
    "Fried Egg",
    "Zucchini",
    "Hummus"
];
pizzaIngredients.cheeses = [
    "American Cheese",
    "Swiss Cheese",
    "Goat Cheese",
    "Mozzarella Cheese",
    "Parmesean Cheese",
    "Velveeta Cheese",
    "Gouda Cheese",
    "Muenster Cheese",
    "Applewood Cheese",
    "Asiago Cheese",
    "Bleu Cheese",
    "Boursin Cheese",
    "Brie Cheese",
    "Cheddar Cheese",
    "Chevre Cheese",
    "Haletti Cheese",
    "Jack Cheese",
    "Pepper Jack Cheese",
    "Gruyere Cheese",
    "Limberger Cheese",
    "Manchego Cheese",
    "Marscapone Cheese",
    "Pecorino Cheese",
    "Provolone Cheese",
    "Queso Cheese",
    "Roquefort Cheese",
    "Romano Cheese",
    "Ricotta Cheese",
    "Smoked Gouda"
];
pizzaIngredients.sauces = [
    "Red Sauce",
    "Marinara",
    "BBQ Sauce",
    "No Sauce",
    "Hot Sauce"
];
pizzaIngredients.crusts = [
    "White Crust",
    "Whole Wheat Crust",
    "Flatbread Crust",
    "Stuffed Crust"
];

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// Pulls adjective out of array using random number sent from generator
function getAdj(x) {
    switch (x) {
        case "dark":
            let dark = ["dark", "morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted",
                "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty",
                "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"
            ];
            return dark;
        case "color":
            let colors = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red",
                "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta",
                "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan",
                "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"
            ];
            return colors;
        case "whimsical":
            let whimsy = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing",
                "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy",
                "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked",
                "brainwashed"
            ];
            return whimsy;
        case "shiny":
            let shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise",
                "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
                "metallic"
            ];
            return shiny;
        case "noisy":
            let noisy = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic",
                "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling",
                "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping",
                "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"
            ];
            return noisy;
        case "apocalyptic":
            let apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic",
                "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying",
                "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"
            ];
            return apocalyptic;
        case "insulting":
            let insulting = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow",
                "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous",
                "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless",
                "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed",
                "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide",
                "horrible", "syncophantic", "unhelpful", "bootlicking"
            ];
            return insulting;
        case "praise":
            let praise = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful",
                "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous",
                "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave",
                "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome",
                "majestic", "grand", "stunning"
            ];
            return praise;
        case "scientific":
            let scientific = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
                "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
                "extinct", "galactic"
            ];
            return scientific;
        default:
            let scientific_default = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
                "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
                "extinct", "galactic"
            ];
            return scientific_default;
    }
}

// Pulls noun out of array using random number sent from generator
function getNoun(y) {
    switch (y) {
        case "animals":
            let animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo",
                "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan",
                "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper",
                "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale",
                "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish",
                "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture",
                "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"
            ];
            return animals;
        case "profession":
            let professions = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
                "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor",
                "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot",
                "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"
            ];
            return professions;
        case "fantasy":
            let fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost",
                "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester",
                "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"
            ];
            return fantasy;
        case "music":
            let music = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums",
                "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone",
                "bugle", "trumpet", "sousaphone", "cornet", "stradiletius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor",
                "singer"
            ];
            return music;
        case "horror":
            let horror = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf",
                "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter",
                "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath",
                "fiend", "satanist", "moon", "fullMoon"
            ];
            return horror;
        case "gross":
            let gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm",
                "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance",
                "fluid", "moisture", "garbage", "trash", "bug"
            ];
            return gross;
        case "everyday":
            let everyday = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV",
                "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen",
                "garden", "school", "wallet", "bottle"
            ];
            return everyday;
        case "jewelry":
            let jewelry = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry",
                "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin",
                "costume", "ornament", "treasure"
            ];
            return jewelry;
        case "places":
            let places = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood",
                "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery",
                "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"
            ];
            return places;
        case "scifi":
            let scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
                "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
                "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
                "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"
            ];
            return scifi;
        default:
            let scifi_default = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
                "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
                "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
                "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"
            ];
            return scifi_default;
    }
}

let adjectives = ["dark", "color", "whimsical", "shiny", "noisy", "apocalyptic", "insulting", "praise", "scientific"]; // types of adjectives for pizza titles
let nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"]; // types of nouns for pizza titles

// Generates random numbers for getAdj and getNoun functions and returns a new pizza name
function generator(adj, noun) {
    let adjectives = getAdj(adj);
    let nouns = getNoun(noun);
    let randomAdjective = parseInt(Math.random() * adjectives.length);
    let randomNoun = parseInt(Math.random() * nouns.length);
    let name = "The " + adjectives[randomAdjective].capitalize() + " " + nouns[randomNoun].capitalize();
    return name;
}

// Chooses random adjective and random noun
function randomName() {
    let randomNumberAdj = parseInt(Math.random() * adjectives.length);
    let randomNumberNoun = parseInt(Math.random() * nouns.length);
    return generator(adjectives[randomNumberAdj], nouns[randomNumberNoun]);
}

// These functions return a string of a random ingredient from each respective category of ingredients.
let selectRandomMeat = function () {
    let randomMeat = pizzaIngredients.meats[Math.floor((Math.random() * pizzaIngredients.meats.length))];
    return randomMeat;
};

let selectRandomNonMeat = function () {
    let randomNonMeat = pizzaIngredients.nonMeats[Math.floor((Math.random() * pizzaIngredients.nonMeats.length))];
    return randomNonMeat;
};

let selectRandomCheese = function () {
    let randomCheese = pizzaIngredients.cheeses[Math.floor((Math.random() * pizzaIngredients.cheeses.length))];
    return randomCheese;
};

let selectRandomSauce = function () {
    let randomSauce = pizzaIngredients.sauces[Math.floor((Math.random() * pizzaIngredients.sauces.length))];
    return randomSauce;
};

let selectRandomCrust = function () {
    let randomCrust = pizzaIngredients.crusts[Math.floor((Math.random() * pizzaIngredients.crusts.length))];
    return randomCrust;
};

let ingredientItemizer = function (string) {
    return "<li>" + string + "</li>";
};

// Returns a string with random pizza ingredients nested inside <li> tags
let makeRandomPizza = function () {
    let pizza = "";

    let numberOfMeats = Math.floor((Math.random() * 4));
    let numberOfNonMeats = Math.floor((Math.random() * 3));
    let numberOfCheeses = Math.floor((Math.random() * 2));

    for (let i = 0; i < numberOfMeats; i++) {
        pizza = pizza + ingredientItemizer(selectRandomMeat());
    }

    for (let j = 0; j < numberOfNonMeats; j++) {
        pizza = pizza + ingredientItemizer(selectRandomNonMeat());
    }

    for (let k = 0; k < numberOfCheeses; k++) {
        pizza = pizza + ingredientItemizer(selectRandomCheese());
    }

    pizza = pizza + ingredientItemizer(selectRandomSauce());
    pizza = pizza + ingredientItemizer(selectRandomCrust());

    return pizza;
};

// returns a DOM element for each pizza


// resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves.
function resizePizzas(size, resizableImgs) {
    window.performance.mark("mark_start_resize"); // User Timing API function
    // Changes the value for the size of the pizza above the slider

    // Iterates through pizza elements on the page and changes their widths
    function changePizzaSizes(size) {

        [...resizableImgs].forEach(img => {
            img.style.transform = size === '1' ? 'scale(0.4)' : size === '2' ? 'scale(0.7)' : 'scale(1.1)';
        });

    }

    changePizzaSizes(size);


    (function (size) {
        switch (size) {
            case "1":
                pizzaSize.innerHTML = "Small";
                break;
            case "2":
                pizzaSize.innerHTML = "Medium";
                break;
            case "3":
                pizzaSize.innerHTML = "Large";
                break;
            default:
                console.log("bug in changeSliderLabel");
        }
    })(size);



    // User Timing API is awesome
    window.performance.mark("mark_end_resize");
    window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
    let timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
    console.log("Time to resize pizzas: " + timeToResize[timeToResize.length - 1].duration + "ms");
}


window.performance.mark("mark_start_generating"); // collect timing data


// User Timing API again. These measurements tell you how long it took to generate the initial pizzas
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
let timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");

// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
let frame = 0;

// Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
function logAverageFrame(times) { // times is the array of User Timing measurements from updatePositions()
    let numberOfEntries = times.length;
    let sum = 0;
    for (let i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
        sum = sum + times[i].duration;
    }
    console.log("Average scripting time to generate last 10 frames: " + sum / 10 + "ms");
}

// The following code for sliding background pizzas was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

// Moves the sliding background pizzas based on scroll position
function updatePositions() {
    frame++;
    window.performance.mark("mark_start_frame");

    documentTop = document.documentElement.scrollTop || document.body.scrollTop;
    //if (documentTop > scrollTop + 10) {
    [...items].forEach((item, i) => {
        phase = Math.ceil(Math.random() * -20) + 40;
        item.style.transform = 'translateX(' + 5 * phase * (i % cols) + 'px) translateY(' + (Math.floor(i / cols) * s) + 'px)';
    });


    // User Timing API to the rescue again. Seriously, it's worth learning.
    // Super easy to create custom metrics.
    window.performance.mark("mark_end_frame");
    window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
    if (frame % 10 === 0) {
        let timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
        logAverageFrame(timesToUpdatePosition);
    }
}


function pizzaElementGenerator(i, pizzasDiv) {
    
    pizzasDiv.innerHTML += `\
    <div id="pizza${i+2}" class="randomPizzaContainer" style="width:33.33%; height: 325px;">
                        <div style="width:35%">
                            <img src="images/pizza.png" class="img-responsive">
                        </div>
                        <div style="width:65%">
                            <h4>${randomName()}</h4>
                            <ul>
                               ${makeRandomPizza()}
                            </ul>
                        </div>
                    </div>`;
    return pizzasDiv;
}



// Generates the sliding pizzas when the page loads.
document.addEventListener('DOMContentLoaded', function () {

    // App Selectors
    const movingPizzas = document.getElementById("movingPizzas1");
    const pizzaSize = document.getElementById("pizzaSize");
    const pizzasDiv = document.getElementById("randomPizzas");
    const sizeSlider = document.getElementById('sizeSlider');

    let resizableImgs = [];



    // loop for creating background pizzas
    for (let i = 0; i < 200; i++) {
        let elem = document.createElement('img');
        [elem.className, elem.src, elem.alt] = ['mover', "images/icons/icon-72x72.png", 'pizza' + i];
        elem.style.transform = 'translateX(' + (i % cols) * s + 'px) translateY(' + (Math.floor(i / cols) * s) + 'px)';

        movingPizzas.appendChild(elem);
    }
    items = document.querySelectorAll('.mover');

    // This for-loop actually creates and appends all of the pizzas when the page loads
    for (let i = 2; i < 100; i++) {
        pizzaElementGenerator(i, pizzasDiv);
    }

    resizableImgs = document.querySelectorAll('.img-responsive');

    // move the function from executing in html
    sizeSlider.addEventListener('change', (event) => {
        resizePizzas(event.target.value, resizableImgs);
    });

    // runs updatePositions on scroll
    window.addEventListener('scroll', updatePositions);
});



//TODO uncomment the service worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then(reg => {
            console.log('Service worker registered successfully!');
        })
        .catch(err => {
            console.warn('Error in registeration ', err);
        });
}
