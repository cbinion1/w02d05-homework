console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
$( document ).ready(function() {
    console.log( "ready!" );
});
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  
  // 2. append the section to the body of the DOM.

  // 3. use a for loop to iterate over the lands array that does the following:
// $("body").append("<section id=middleEarth></section>");{

 let middleEarth = document.createElement('section');
  
  middleEarth.setAttribute('id', 'middle-earth');
  
  document.body.appendChild(middleEarth);

    for (let i = 0; i < lands.length; i++) {
       
        let place = document.createElement('article');
       
        place.setAttribute('id', lands[i]);
       
        middleEarth.appendChild(place);

        let nameOfLand = document.createElement('h1');
       
        nameOfLand.innerHTML = lands[i];
       
        place.appendChild(nameOfLand);
    }
};
  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section


// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.

let allTheHobbits = document.createElement('section');
    
    allTheHobbits.setAttribute('id', 'the-shire');

    let shireRef = document.getElementById('the-shire');
    
     shireRef.appendChild(allTheHobbits);

    hobbits.sort();

    for (let i = 0; i < hobbits.length; i++) {
    
        let hobbit = document.createElement('article');
    
        hobbit.setAttribute('class', 'hobbit');
    
        hobbit.setAttribute('id', hobbits[i]);
    
        allTheHobbits.appendChild(hobbit);

        let thisHobbit = document.createElement('h1');
    
        thisHobbit.innerHTML = hobbits[i];
    
        hobbit.appendChild(thisHobbit);
  }

  // 2. give each hobbit a class of "hobbit"

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
  let emptyDiv = document.createElement('div');
   
    emptyDiv.setAttribute('id', 'the-ring');
   
    emptyDiv.innerHTML = "The ring";

    let frodoRing = document.getElementsByClassName('hobbit')[0];
   
    frodoRing.appendChild(emptyDiv);

  // 2. add the ring as a child of Frodo

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor
let allTheBaddies = document.createElement('section');
   
    allTheBaddies.setAttribute('id', 'mordor');

    let mordorRef = document.getElementById('mordor');
   
    mordorRef.appendChild(allTheBaddies);

    for (let i = 0; i < baddies.length; i++) {
   
        let badGuy = document.createElement('article');
   
        badGuy.setAttribute('class', 'baddy');
   
        badGuy.setAttribute('id', baddies[i]);
   
        allTheBaddies.appendChild(badGuy);

        let thisBaddy = document.createElement('h1');
   
        thisBaddy.innerHTML = baddies[i];
   
        badGuy.appendChild(thisBaddy);
    }


  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append them to Mordor
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor

let allTheBuddies = document.createElement('aside');
    
    allTheBuddies.setAttribute('id', 'mordor');

    let mordorRef = document.getElementById('mordor');
    
    mordorRef.appendChild(allTheBuddies);

    for (let i = 0; i < buddies.length; i++) {
    
        let goodGuy = document.createElement('article');
    
        goodGuy.setAttribute('class', 'buddy');
    
        goodGuy.setAttribute('id', buddies[i]);
    
        allTheBuddies.appendChild(goodGuy);

        let thisBuddy = document.createElement('h1');
    
        thisBuddy.innerHTML = buddies[i];
    
        goodGuy.appendChild(thisBuddy);
    }

  // 2. display an unordered list of buddies in the aside

  // 3. give each of the buddies a class of "buddy"

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell

let leaveShire = document.querySelector('#the-shire section');
 
    document.getElementById('rivendell').appendChild(leaveShire);
}

function beautifulStranger() {
 
    console.log('Beautiful stranger');

    for (let i = 0; i < buddies.length; i++) {
 
        if(buddies[i] === 'Strider') {
 
            buddies[i] = buddies[i].replace('Strider', "Aragorn");
 
            let thisBuddy = document.getElementById('Strider');
 
            thisBuddy.childNodes[0].innerHTML = buddies[i];
        }
    }

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"

let leaveMordor = document.querySelector('#mordor aside');
  
    leaveMordor.id = "moving";
  
    document.getElementById('rivendell').appendChild(leaveMordor);

    let fellowText = document.createElement('h1');
  
    fellowText.innerHTML = "The Fellowship";

    let theFellowShip = document.createElement('div');
  
    theFellowShip.setAttribute('id', 'the-fellowship');
  
    theFellowShip.appendChild(fellowText);

    document.getElementById('middle-earth').appendChild(theFellowShip);

    let hobbitGroup = document.querySelector('#rivendell section').getElementsByTagName('article');
  
    let buddiesGroup = document.querySelector('#rivendell aside').getElementsByTagName('article');

    for (let i = hobbitGroup.length - 1; i >= 0; i--) {
  
        alert(`${hobbitGroup[i].childNodes[0].innerHTML} joined your Party!`);
  
        document.getElementById('the-fellowship').appendChild(hobbitGroup[i]);
    }

    for (let i = buddiesGroup.length - 1; i >= 0; i--) {
  
        alert(`${buddiesGroup[i].childNodes[0].innerHTML} joined your Party!`);
  
        document.getElementById('the-fellowship').appendChild(buddiesGroup[i]);
    }


  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'

  // 2. add an h1 with the text 'The Fellowship' to this new div

  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'

  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  // 2. add a div with an id of 'mount-doom' to Mordor

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
