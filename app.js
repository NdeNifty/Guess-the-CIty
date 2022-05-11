const qwerty = document.getElementById('qwerty'); 
const phrase1 = document.getElementById('phrase');
const startbutton = document.getElementById('overlay');
let missed = 0;

function resetbtn() {
  startbutton.style.display = 'none';
}

const phrases = [
  'DOUALA',
  'LAGOS',
  'BANJUL',
  'DAKAR',
  'CAPE TOWN',
  'NAIROBI',
  'NEW YORK',
  'LISBON',
  'CHARLESTON',
  'QUEBEC',
  'CAIRO',
  'PARIS',
  'NEW DELHI',
  'WUHAN',
  'ADDIS ABABA',
  'ACCRA',
  'LONDON',
  'KINGSTON UPON HULL',
  'SAO PAOLO',
  'BUENOS AIRES',
  'FREETOWN',
  'BUDAPEST',
  'TOKYO',
  'MOSCOW',
  'KYIV',
  'BANGKOK',
  'INSTANBUL',
  'HONG KONG',
  'KOUALA LAMPUR',
  'LAS VEGAS',
  'LOS ANGELES',
  'AMSTAERDAM',
  'SEOUL',
  'BARCELONA',
  'PRAGUE',
  'SYDNEY',
  'TAIPEI CITY',
  'MILAN',
  'DUBLIN',
  'VIENNA',
  'TORONTO',
  'SAN FRANCISCO',
  'MEXICO CITY',
  'NEW MEXICO',
  'RIO DE JANEIRO',
  'SAINT PETERSBURG',
  'MELBOURNE',
  'JESRUSALEM',
  'STOCKHOLM',
  'ZURICH',
  'ABU DHABI',
  'BERLIN',
  'WINDHOEK',
  'KAMPALA',
  'LIBREVILLE',
  'ABIDJAN'
];

function getRandomPhraseAsArray(arr) {
  const hint = document.getElementById('banner').children;
  const randomphrase = phrases[Math.floor(Math.random() * arr.length)];
  if (randomphrase == 'DOUALA'){
    hint[2].innerHTML = 'Economic Capital of Cameroon';
  }
  else if (randomphrase == 'LAGOS'){
    hint[2].innerHTML = 'The former capital of Nigeria';
  } 
  else if (randomphrase == 'BANJUL'){
    hint[2].innerHTML = 'This city is found in the smiling coast of Africa';
  } 
  else if (randomphrase == 'DAKAR'){
    hint[2].innerHTML = 'This city has the African Renaisance monument';
  } 
  else if (randomphrase == 'CAPE TOWN'){
    hint[2].innerHTML = 'The table Mountains are found in this city';
  } 
  else if (randomphrase == 'NEW YORK'){
    hint[2].innerHTML = 'The Empire State Building is found in this town';
  } 
  else if (randomphrase == 'LISBON'){
    hint[2].innerHTML = 'This town is home to Fado music';
  } 
  else if (randomphrase == 'CHARLESTON'){
    hint[2].innerHTML = 'This town in South Carolina is home to the oldest oak trees in America';
  } 
  else if (randomphrase == 'QUEBEC'){
    hint[2].innerHTML = 'This town produces in alot of maple syrup';
  } 
  else if (randomphrase == 'PARIS'){
    hint[2].innerHTML = 'The city of love';
  } 
  else if (randomphrase == 'WUHAN'){
    hint[2].innerHTML = 'The town holds the pyramids of Giza';
  } 
  else if (randomphrase == 'NEW DELHI'){
    hint[2].innerHTML = 'This is the second most popular city of the world';
  } 
  else if (randomphrase == 'ACCRA'){
    hint[2].innerHTML = 'The capital of Ghana';
  } 
  else if (randomphrase == 'LONDON'){
    hint[2].innerHTML = 'A clock know as Big Ben is found in this town';
  } 
  else if (randomphrase == 'KINGSTON UPON HULL'){
    hint[2].innerHTML = 'A port city in the east of Yorkshire';
  } 
  else if (randomphrase == 'SAO PAOLO'){
    hint[2].innerHTML = "Brazil's financail center";
  } 
  else if (randomphrase == 'BUENOS AIRES'){
    hint[2].innerHTML = 'Capital of Argentina';
  } 
  else if (randomphrase == 'FREETOWN'){
    hint[2].innerHTML = 'The largest city in Sierra Leone';
  } 
  else if (randomphrase == 'BUDAPEST'){
    hint[2].innerHTML = 'The capital of Hungary';
  } 
  else if (randomphrase == 'MOSCOW'){
    hint[2].innerHTML = 'This city has a popular spot called Red Square';
  } 
  else if (randomphrase == 'TOKYO'){
    hint[2].innerHTML = 'The worlds largest metropolis';
  } 
  else if (randomphrase == 'KYIV'){
    hint[2].innerHTML = 'The former capital of Nigeria';
  } 
  else if (randomphrase == 'BANGKOK'){
    hint[2].innerHTML = 'The former capital of Nigeria';
  } 
  else if (randomphrase == 'INSTANBUL'){
    hint[2].innerHTML = 'It was the capital of both the Byzantine Empire and the Ottoman Empire';
  } 
  else if (randomphrase == 'HONG KONG'){
    hint[2].innerHTML = 'This state is homw to a statue know as Big Buddha ';
  } 
  else if (randomphrase == 'KOUALA LAMPUR'){
    hint[2].innerHTML = 'This city is has the Petronas Towers';
  } 
  else if (randomphrase == 'LAS VEGAS'){
    hint[2].innerHTML = 'This city is known for its Casinos';
  } 
  else if (randomphrase == 'LOS ANGELES'){
    hint[2].innerHTML = 'This city is home to Hollywood';
  } 
  else if (randomphrase == 'AMSTERDAM'){
    hint[2].innerHTML = 'This City is also known as the Sin City of Europe';
  } 
  else if (randomphrase == 'SEOUL'){
    hint[2].innerHTML = 'This city is the has the  futuristic Dongdaemun Design Plaza';
  } 
  else if (randomphrase == 'BARCELONA'){
    hint[2].innerHTML = 'This city has Pedralbes Monastery';
  } 
  else if (randomphrase == 'PRAGUE'){
    hint[2].innerHTML = 'The capital of Czech Republic';
  } 
  else if (randomphrase == 'SYDNEY'){
    hint[2].innerHTML = 'This city in Asia is one of the first cities to see the new Year';
  } 
  else if (randomphrase == 'TAIPEI CITY'){
    hint[2].innerHTML = 'The capital of Taiwan';
  } 
  else if (randomphrase == 'MILAN'){
    hint[2].innerHTML = 'This city has the  Duomo Cathedral and the  opera La Scala';
  } 
  else if (randomphrase == 'DUBLIN'){
    hint[2].innerHTML = 'The town is the "Home" of Guinness';
  } 
  else if (randomphrase == 'VIENNA'){
    hint[2].innerHTML = 'This city is known as the City of Music';
  } 
  else if (randomphrase == 'TORONTO'){
    hint[2].innerHTML = 'The largest city in Canada';
  } 
  else if (randomphrase == 'SAN FRANCISCO'){
    hint[2].innerHTML = 'This city has the golden gate bride and the golden gate park';
  } 
  else if (randomphrase == 'MEXICO CITY'){
    hint[2].innerHTML = 'This City has the Frida Kahlo house and is one of the oldest citeies in North America';
  } 
  else if (randomphrase == 'SANTA FE'){
    hint[2].innerHTML = 'The capital of New Mexico';
  } 
  else if (randomphrase == 'RIO DE JANERO'){
    hint[2].innerHTML = 'This City has a statue called Christ The Redeemer';
  } 
  else if (randomphrase == 'SAINT PETERSBURG'){
    hint[2].innerHTML = 'The cultural capital of Russia';
  } 
  else if (randomphrase == 'MELBOURNE'){
    hint[2].innerHTML = 'The black box for planes was invented in this city';
  } 
  else if (randomphrase == 'JERUSALEM'){
    hint[2].innerHTML = 'This city is significant to the Abrahamaic Religions';
  } 
  else if (randomphrase == 'STOCKHOLM'){
    hint[2].innerHTML = 'This city has the first open air mesuem in the world';
  } 
  else if (randomphrase == 'ZURICH'){
    hint[2].innerHTML = 'This city if famous for its banks and its luxurious chocolates. The first letter of this city is the second letter of its country';
  } 
  else if (randomphrase == 'ABU DHABI'){
    hint[2].innerHTML = 'The name of this arabic city translates to "Father of Gazelle"';
  } 
  else if (randomphrase == 'BERLIN'){
    hint[2].innerHTML = 'The third and fourth letter of this city are R & L';
  } 
  else if (randomphrase == 'WINDHOEK'){
    hint[2].innerHTML = 'The capital city of Namibia';
  } 
  else if (randomphrase == 'KAMPALA'){
    hint[2].innerHTML = 'The capital of Uganda';
  } 
  else if (randomphrase == 'LIBREVILLE'){
    hint[2].innerHTML = 'The largest City in Gabon';
  } 
  else if (randomphrase == 'ABIDJAN'){
    hint[2].innerHTML = 'This city has the Musee des Civilisations';
  } 
   

  const splitrandomphrase = randomphrase.split("");
  return splitrandomphrase;
}

const newsplitphrase = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(newsplitphrase);

console.log(newsplitphrase);
function addPhraseToDisplay(newsplitphrase) {
  // do stuff any arr that is passed in, and add to `#phrase ul`
  newsplitphrase.forEach(function (character) {
    const ul = document.getElementById("phrase");
    const newli = document.createElement('li');

    newli.appendChild(document.createTextNode(character));
    ul.appendChild(newli);

    if (character !== ' ') {
      newli.setAttribute('class', 'letter');

    } else if (character === ' ') {
      newli.setAttribute('class', 'space');
    }
  });
}

const letter = document.getElementsByClassName('letter');
function checkLetter(selectedbutton) {

  const letterarray = Array.from(letter);

  let match = null;

  //loops through one single time
  for (let i = 0; i < letterarray.length; i++) {
    const maskedphrase = letterarray[i];
    if (maskedphrase.innerHTML == selectedbutton) {
      maskedphrase.classList.add('show');
      match = maskedphrase.innerHTML;
      console.log(match);
    }
  } /*............................The loops end ........................................................*/
  return match;
} //end of checkletter function

//Event Listener
const keyboard = document.getElementsByClassName('keyrow');
for (const keyrow of keyboard) {
  keyrow.addEventListener('click', event => {
    if (event.target.tagName == 'BUTTON') {
      //add chosen class to keyboard
      event.target.setAttribute('class', 'chosen');
      //disable the button
      event.target.setAttribute('disabled', 'true');
      //get the value of the button clicked
      const selectedbutton = event.target.innerHTML;
      console.log(selectedbutton);
      // call the CheckLetter function
      const letterfound = checkLetter(selectedbutton);
      //Check the value of letter found
      if (letterfound === null) {
        //remove a blue heart
        const blueheart = document.querySelectorAll('.tries img');
        blueheart[missed].src = 'images/lostHeart.png';
        missed += 1;
      }
    }
    checkWin();
  });
}

function checkWin() {
  var correctLetter = document.getElementsByClassName('show');
  var overlay = document.getElementById('overlay');
  var overlaychildren = document.getElementById('overlay').children;
  if (correctLetter.length == letter.length){
  console.log('You Won');
  overlay.style.display = 'block';
    overlay.setAttribute('class', 'win');
    overlaychildren[0].innerHTML = 'Congratulations You Won';
    overlaychildren[1].innerHTML = 'Play Again';
  }
  else if (missed >= 5) {
    console.log("You Lost");
    overlay.style.display = 'block';
    overlay.setAttribute('class', 'lose');
    overlaychildren[0].innerHTML = 'Sorry You Lost';
    overlaychildren[1].innerHTML = 'Try Again';
  }

}
