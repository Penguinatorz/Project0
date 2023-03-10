let pizzaJoke = document.querySelector('.jokeText');
let delievJoke = document.querySelector('.delievText');
let btnJoke = document.querySelector('.btnJoke');


btnJoke.addEventListener('click', jokeFunc);

function jokeFunc() {
    let numRan = Math.floor(Math.random() * (2022 - 2012 + 1) + 1);
    console.log(numRan);
    switch (numRan) {
        case 1:
            pizzaJoke.innerHTML = "I’m going to open a restaurant that only serves crabs and pizza.";
            delievJoke.innerHTML = "I’ll call it the Crust Station.";
            break;
        case 2:
            pizzaJoke.innerHTML = "I’m going to open a restaurant that only serves crabs and pizza.";
            delievJoke.innerHTML = "I’ll call it the Crust Station.";
            break;
        case 3:
            pizzaJoke.innerHTML = "What’s a pizza maker’s favorite song?";
            delievJoke.innerHTML = "“Slice, Slice Baby.”";
            break;
        case 4:
            pizzaJoke.innerHTML = "What are you if can’t decide what kind of pizza to get?";
            delievJoke.innerHTML = "You’re indeSLICEsive.";
            break;
        case 5:
            pizzaJoke.innerHTML = "What do you call a fake pizza?";
            delievJoke.innerHTML = "A pepperphony pizza.";
            break;
        case 6:
            pizzaJoke.innerHTML = "Wood fired pizza?";
            delievJoke.innerHTML = "How’s pizza gonna get a job now?";
            break;
        case 7:
            pizzaJoke.innerHTML = "What do you call it when a tired dad makes pizza?";
            delievJoke.innerHTML = "Papa Yawns Pizza.";
            break;
        case 8:
            pizzaJoke.innerHTML = "Why does the mushroom always get invited to pizza parties?";
            delievJoke.innerHTML = "Because he’s such a fungi!";
            break;
        case 9:
            pizzaJoke.innerHTML = "Why was the pizzeria desperate for business?";
            delievJoke.innerHTML = "Because they kneaded the dough.";
            break;
        case 10:
            pizzaJoke.innerHTML = "If pizza could talk, what would it say?";
            delievJoke.innerHTML = "Probably lots of cheesy things.";
            break;

    }

}