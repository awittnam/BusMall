
//var for images 1-25

var imagesArray = [];
//var displayedImages = []  //need counter so image can be reused after two cycles
//var lastShown = [];
//var counter = 0;
//var list = document.getDocumentById('list')
//var counter = 0;

function Product(name, path, shown, clicks, canDisplay) {
  this.name = name;
  this.path = path;
  this.shown = shown;
  this.clicks = clicks;
  this.canDisplay = canDisplay;
}

var bag = new Product ('bag', 'img/bag.jpg');
var banana = new Product ('banana', 'img/banana.jpg');
var bathroom = new Product ('bathroom', 'img/bathroom.jpg');
var boots = new Product ('boots', 'img/boots.jpg');
var breakfast = new Product ('breakfast', 'img/breakfast.jpg');
var bubblegum = new Product ('bubblegum', 'img/bubblegum.jpg');
var chair = new Product ('chair', 'img/chair.jpg');
var cthulhu = new Product ('cthulhu', 'img/cthulhu.jpg');
var dogduck = new Product ('dogduck', 'img/dogduck.jpg');
var dragon = new Product ('dragon', 'img/dragon.jpg');
var pen = new Product ('pen', 'img/pen.jpg');
var petsweep = new Product ('petsweep', 'img/petsweep.jpg');
var scissors = new Product ('scissors', 'img/scissors.jpg');
var shark = new Product ('shark', 'img/shark.jpg');
var sweep = new Product ('sweep', 'img/sweep.jpg');
var tauntaun = new Product ('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Product ('unicorn', 'img/unicorn.jpg');
var usb = new Product ('usb', 'img/usb.gif');
var watercan = new Product ('watercan', 'img/watercan.jpg');
var wineglass = new Product ('wineglass', 'img/wineglass.jpg');

imagesArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass);

function randomImageIndex() {
  var randomImage = Math.floor(Math.random() * imagesArray.length)
  return imagesArray[randomImage];
  }

function randomGenImg() {
  var randomPortOne = document.getElementById('imageOne');
  var randomImageOne = randomImageIndex();
  randomPortOne.setAttribute('src', randomImageOne.path);
}
randomGenImg();

//function to randomly generate pic,

//then place image into holding array

//and track clicks













// imageOne.addEventListener('click', function() {
//   trackClicks(first);
//   randomizeImages();
// });
//
// imageTwo.addEventListener('click', function() {
//   trackClicks(first);
//   randomizeImages();
// });
//
// imageThree.addEventListener('click', function() {
//   trackClicks(first);
//   randomizeImages();
// });
//
// function trackClicks(image) {
//   counter++;
//   console.log('Total clicks: ', counter);
//   image.clicks = image.clicks + 1;
// }
//
// function tallyClicks() {
//   results.style.visibility = 'visible';
//
//   for(var i=0; i < timeOut.length; i++) {
//     imgArr.push(timeOut[i]);
//   }
//
//   for(var j=0; j < imgArr.length; j++) {
//     if(imgArr[j].clicks > 0); {
//       var tally = document.createElement('p');
//       tally.innerHTML = 'Product: ' + imgArr[j].name + ' Shown: ' + imgArr[j].shown + 'Clicked: ' + imgArr[j].clicks;
//       results.appendChild(tally);
//     }
//   }
// }
//
// //checks if the counter has reached 25, and if it has tallyClicks is called.
// function randomizeImages(){
//   if(counter >= 25){
//     tallyClicks();
//   }
//
//   //gets a random number to use as the index number to select a product object from imgArr
//   var randomIndex = getRandNum();
//   first = imgArr[randomIndex];
//   console.log('first is ', first.name);
//
//   //updates the selected object, incrementing the shown property and setting the canShow counter.  Then it's pushed into timeOutand spliced out of imgArr.
//   first.show += 1;
//   first.canShow = 2;
//   timeOut.push(first);
//   imgArr.splice(randomIndex, 1);
//
//   randomIndex = getRandNum();
//   second = imgArr[randomIndex];
//   console.log('second is ', second.name);
//   second.canShow = 2;
//   timeOut.push(second);
//   imgArr.splice(randomIndex, 1);
//
//   randomIndex = getRandNum();
//   third = imgArr[randomIndex];
//   console.log('third is ')
// }
