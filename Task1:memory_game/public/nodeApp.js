var cardClick = 0;
var first;
var second;
var cardMatch = 0;
/**
 * this is an object that will hold cards so that it can return the amount of cards
 */
var gameCards = new Object();
gameCards.cards = 0;

var cards = [];
cards[0] = "images/JPEG/AS.jpg";
cards[1] = "images/JPEG/AS.jpg";
cards[2] = "images/JPEG/3C.jpg";
cards[3] = "images/JPEG/3C.jpg";
cards[4] = "images/JPEG/4C.jpg";
cards[5] = "images/JPEG/4C.jpg";
cards[6] = "images/JPEG/AH.jpg";
cards[7] = "images/JPEG/AH.jpg";
cards[8] = "images/JPEG/7D.jpg";
cards[9] = "images/JPEG/7D.jpg";
cards[10] = "images/JPEG/10H.jpg";
cards[11] = "images/JPEG/10H.jpg";
cards[12] = "images/JPEG/2D.jpg";
cards[13] = "images/JPEG/2D.jpg";
cards[14] = "images/JPEG/9C.jpg";
cards[15] = "images/JPEG/9C.jpg";
cards[16] = "images/JPEG/QS.jpg";
cards[17] = "images/JPEG/QS.jpg";
cards[18] = "images/JPEG/KH.jpg";
cards[19] = "images/JPEG/KH.jpg";
cards[20] = "images/JPEG/7C.jpg";
cards[21] = "images/JPEG/7C.jpg";
cards[22] = "images/JPEG/10S.jpg";
cards[23] = "images/JPEG/10S.jpg";
cards[24] = "images/JPEG/2S.jpg";
cards[25] = "images/JPEG/2S.jpg";
cards[26] = "images/JPEG/JS.jpg";
cards[27] = "images/JPEG/JS.jpg";
cards[28] = "images/JPEG/KD.jpg";
cards[29] = "images/JPEG/KD.jpg";
cards[30] = "images/JPEG/JD.jpg";
cards[31] = "images/JPEG/JD.jpg";
cards[32] = "images/JPEG/QD.jpg";
cards[33] = "images/JPEG/QD.jpg";
cards[34] = "images/JPEG/jockerB.jpg";
cards[35] = "images/JPEG/jockerB.jpg";

//shuffles through array
function cardGame(array, numOFboxes) {
  /**
   * we multiply the numberOFboxes by itself to get the accurate number of cards ruturned
   * same with the silcer method so that there is no uneven number of cards returned
   */
  var currentCard = numOFboxes * numOFboxes;
  var slicer = cards.slice(0, numOFboxes * numOFboxes);
  var temporaryCard, randomCard;

  while (currentCard !== 0) {
    //math random returns floating point,math floor used to round that value off

    randomCard = Math.floor(Math.random() * currentCard);
    currentCard -= 1;
    temporaryCard = slicer[currentCard];
    slicer[currentCard] = slicer[randomCard];
    slicer[randomCard] = temporaryCard;
  }
  /**
   * assign the current value of slicer to the gameCards object
   */
  gameCards.cards = slicer;
  return slicer;
}

//function that is applied when card is clicked
function pick(card) {
  if (cardClick == 0) {
    //setup for image that will be clicked
    first = card;
    document.images[card].src = gameCards.cards[card];
    cardClick = 1;
  } else if (cardClick == 1) {
    //debug for two clicks
    if (first === card) return;
    cardClick = 2;
    second = card;
    document.images[card].src = gameCards.cards[card];
    //set to half a second before flip
    timer = setInterval(control, 500);
  } else {
    // alert("click image once!!");
  }
}

//function that checks if the cards match
function control() {
  clearInterval(timer);
  cardClick = 0;
  if (gameCards.cards[second] == gameCards.cards[first]) {
    //if first card is equal to second match them
    cardMatch++;
    if (cardMatch == 6) {
      // alert("WELL DONE!!!! you have matched all the cards!");
      // location.reload();
      //reset
    }
  } else {
    document.images[first].src = "images/DSC100497013.jpg";
    document.images[second].src = "images/DSC100497013.jpg";
    return;
  }
}

function boxes() {
  var index = 0;
  var table = "";
  var numOFboxes = 0;
  var numOFboxes = document.getElementById("squares").value;

  /**
   * This is to make sure user only enters even numbers
   */
  if (numOFboxes % 2 == 0) {
    if (numOFboxes <= 6) {
      var rows = numOFboxes;
      var cols = numOFboxes;
    } else {
      alert("Please enter even number from 2 to 6.");
    }
  } else {
    var rows = 0;
    var cols = 0;
    alert("Please enter an even number");
  }
  /**
   * mix shuffles the cards that are in the grid after they are grabbed
   */
  var mix = cardGame(cards, numOFboxes);
  /**
   * these two loops are the ones that draw the table
   */
  for (var r = 0; r < rows; r++) {
    table += "<tr>";
    for (var c = 0; c < cols; c++) {
      /**
       * card front is called for the number boxes in the table, and it adds a back image and a front image
       */
      var cardFront = `<img src="images/DSC100497013.jpg" onclick="pick(${index++});"/>`;
      table += "<td>" + cardFront + "</td>";
    }
    table += "</tr>";
  }
  /**
   * drawtable draws the table and its contents once the two loops have populated the table
   */
  var drawTable = '<table border=1 class="container">' + table + "</table>";
  /**
   * this statement checks to see if there is an existing table when the user clicks the start button and if there is an existing table it removes that tanle and creats the new one
   */
  if (inptf.hasChildNodes()) {
    inptf.removeChild(inptf.childNodes[0]);
  }
  document.getElementById("inptf").innerHTML += drawTable;
}
