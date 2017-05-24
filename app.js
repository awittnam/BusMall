'use strict'
//var for images 1-25

var imagesArray = [];
var displayedImages = []  //need counter so image can be reused after two cycles
var lastShown = [];
var counter = 0;
var list = document.getDocumentById('list')

//these three will be the three shown at one time
var imageOne = document.getElementById('imageOne')
var imageTwo = document.getElementById('imageTwo')
var imageThree = document.getElementById('imageThree')
var results = document.getElementById('results')

var first;
var second;
var third;
var counter = 0;

function product(name, path, shown, clicks, canDisplay) {
  this.name = name
  this.path = path
  this.shown = shown
  this.clicks = clicks
  this.canDisplay = canDisplay
}

var bag = new ImageOption ('bag', './img/bag.jpg');
var banana = new ImageOption ('banana', './img/banana.jpg');
var bathroom = new ImageOption ('bathroom', './img/bathroom.jpg');
var boots = new ImageOption ('boots', './img/boots.jpg');
var breakfast = new ImageOption ('breakfast', './img/breakfast.jpg');
var bubblegum = new ImageOption ('bubblegum', './img/bubblegum.jpg');
var chair = new ImageOption ('chair', './img/chair.jpg');
var cthulhu = new ImageOption ('cthulhu', './img/cthulhu.jpg');
var dogduck = new ImageOption ('dogduck', './img/dogduck.jpg');
var dragon = new ImageOption ('dragon', './img/dragon.jpg');
var pen = new ImageOption ('pen', './img/pen.jpg');
var petsweep = new ImageOption ('petsweep', './img/petsweep.jpg');
var scissors = new ImageOption ('scissors', './img/scissors.jpg');
var shark = new ImageOption ('shark', './img/shark.jpg');
var sweep = new ImageOption ('sweep', './img/sweep.jpg');
var tauntaun = new ImageOption ('tauntaun', './img/tauntaun.jpg');
var unicorn = new ImageOption ('unicorn', './img/unicorn.jpg');
var usb = new ImageOption ('usb', './img/usb.gif');
var watercan = new ImageOption ('watercan', './img/watercan.jpg');
var wineglass = new ImageOption ('wineglass', './img/wineglass.jpg');

imagesArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan);

imageOne.addEventListener('click', function() {
  trackClicks(first);
  randomizeImages();
});

imageTwo.addEventListener('click', function() {
  trackClicks(first);
  randomizeImages();
});

imageThree.addEventListener('click', function() {
  trackClicks(first);
  randomizeImages();
});

function trackClicks(image) {
  counter++;
  console.log('Total clicks: ', counter);
  image.clicks = image.clicks + 1;
}

function tallyClicks() {
  results.style.visibility = 'visible';

  for(var i=0; i < timeOut.length; i++) {
    imgArr.push(timeOut[i]);
  }

  for(var j=0; j < imgArr.length; j++) {
    if(imgArr[j].clicks > 0); {
      var tally = document.createElement('p');
      tally.innerHTML = 'Product: ' + imgArr[j].name + ' Shown: ' + imgArr[j].shown + 'Clicked: ' + imgArr[j].clicks;
      results.appendChild(tally);
    }
  }
}

//checks if the counter has reached 25, and if it has tallyClicks is called.
function randomizeImages(){
  if(counter >= 25){
    tallyClicks();
  }

  //gets a random number to use as the index number to select a product object from imgArr
  var randomIndex = getRandNum();
  first = imgArr[randomIndex];
  console.log('first is ', first.name);

  //updates the selected object, incrementing the shown property and setting the canShow counter.  Then it's pushed into timeOutand spliced out of imgArr.
  first.show += 1;
  first.canShow = 2;
  timeOut.push(first);
  imgArr.splice(randomIndex, 1);

  randomIndex = getRandNum();
  second = imgArr[randomIndex];
  console.log('second is ', second.name);
  second.canShow = 2;
  timeOut.push(second);
  imgArr.splice(randomIndex, 1);

  randomIndex = getRandNum();
  third = imgArr[randomIndex];
  console.log('third is ')
}
