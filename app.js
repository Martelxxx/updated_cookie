// <<=== All Variable Declarations  ===>>

const content = document.querySelector('#content');
const content2 = document.querySelector('#content2');
let btn = document.querySelector('#btn');
let muteButton = document.querySelector('#mute');
let articleElement = document.querySelector('article');
let footerElement = document.querySelector('footer'); 
let headerElement = document.querySelector('header'); 
let asideElement = document.querySelector('aside');

let inputField = document.createElement('input');

let imgElement = document.createElement('img'); // Create an image element
imgElement.src = 'assets/Honk/logo.png'; // Set the source of the image

headerElement.appendChild(imgElement); // Append the image to the header
imgElement.style.width = '30px'; // Set the width of the image
imgElement.style.height = '30px'; // Set the height of the image

let imgElement2 = document.createElement('img'); // Create an image element
imgElement2.src = 'assets/silhouette2.png'; // Set the source of the image

asideElement.appendChild(imgElement2); // Append the image to the header
imgElement2.style.width = '200px'; // Set the width of the image
imgElement2.style.height = '200px'; // Set the height of the image

asideElement.style.position = 'relative';

let circle = document.createElement('div');
//circle.style.width = '50px';
//circle.style.height = '65px';
circle.style.backgroundColor = 'black';
circle.style.borderRadius = '50%';
circle.style.position = 'absolute';
circle.style.top = '39%';
circle.style.left = '50%';
circle.style.transform = 'translate(-50%, -50%)';
asideElement.appendChild(circle);

let sound = new Audio('assets/fart.mp3');
let sound2 = new Audio('assets/bite.mp3');
let sound3 = new Audio('assets/alert.wav');
let sound4 = new Audio('assets/radiation.wav');

let cookies = ['Chocolate Chip Cookie', 'Sugar Cookie', 'Oatmeal Cookie', 'Cookie Dough', 'Peanut Butter Cookie'];

let randomNumber = Math.floor(Math.random() * cookies.length);
let randomCookie = cookies[randomNumber];
let alertShown = false;
let btnClicked = false;

let counter1 = document.querySelector('#counter1');
let counter2 = document.querySelector('#counter2');
let counter3 = document.querySelector('#counter3');
let counter4 = document.querySelector('#counter4');
let counter5 = document.querySelector('#counter5');

let newButton6Created = true;
let newButton7Created = false;
let newButton8Created = false;
let newButton9Created = false;
let newButton10Created = false;
let newButton11Created = false;

let clickCount1 = 0;
let clickCount2 = 0;
let clickCount3 = 0;
let clickCount4 = 0;
let clickCount5 = 0;
let autoCookie = 0;

let newButton1; // Chocolate Chip Button
let newButton2; // Sugar Cookie Button
let newButton3; // Oatmeal Cookie Button
let newButton4; // Cookie Dough Button
let newButton5; // Choose For Me Button
let newButton6; // Try Again Button
let newButton7; // Vomit Button
let newButton8; // Vomit Button
let newButton9; // Vomit Button
let newButton10; // Vomit Button
let newButton11; // Vomit Button
let newButton12; // Try Again Button
let newButton13; // Choose For Me Button
let newButton14; // Continue Button
let newButton15; // Get Up Button
let newButton16; // Run Button
let newButton17; // Respondcr1 Button

// <<=== All Function Declarations  ===>>

//imgElement2.style.display = 'none';
btn.style.display = 'none';
warning.style.display = 'none';
inputField.style.display = 'none'; // Initially hide the input field
footerElement.appendChild(inputField); // Add the input field to the footer

function onClick() {
    warning.style.display = 'none';
    btn.style.display = 'none';
    content.style.color = 'white';
    content.style.fontSize = '30px';
    content.style.fontWeight = 'bold';
    content.innerHTML = 'What kind of Cookie do you want?';
    content.style.display = 'flex';
    content.style.justifyContent = 'center';
    content.style.alignItems = 'center';
    content.style.position = 'absolute';
    content.style.bottom = 'unset';
    content.style.top = '0';
    content.style.left = '50%'; // Add this
    content.style.transform = 'translateX(-50%)'; // Add this

    newButton1 = document.createElement('button');
    newButton1.innerHTML = 'Chocolate Chip Cookie';
    newButton1.classList.add('cookie1');
    newButton1.style.margin = '10px'; // Add this
    articleElement.appendChild(newButton1);
    
    newButton2 = document.createElement('button');
    newButton2.innerHTML = 'Sugar Cookie';
    newButton2.classList.add('cookie2');
    newButton2.style.margin = '10px'; // Add this
    articleElement.appendChild(newButton2)

    newButton3 = document.createElement('button');
    newButton3.innerHTML = 'Oatmeal Cookie';
    newButton3.classList.add('cookie3');
    newButton3.style.margin = '10px'; // Add this
    articleElement.appendChild(newButton3)

    newButton4 = document.createElement('button');
    newButton4.innerHTML = 'Cookie Dough';
    newButton4.classList.add('cookie4');
    newButton4.style.margin = '10px'; // Add this
    articleElement.appendChild(newButton4)

    newButton5 = document.createElement('button');
    newButton5.innerHTML = 'Peanut Butter Cookie';
    newButton5.classList.add('cookie5');
    newButton5.style.margin = '10px'; // Add this
    articleElement.appendChild(newButton5)

    newButton13 = document.createElement('button');
    newButton13.innerHTML = 'Choose For Me!';
    newButton13.classList.add('cookie6');
    articleElement.appendChild(newButton13)

    articleElement.style.backgroundImage = 'url(assets/jars.png)';
    document.body.style.backgroundSize = 'flex';

    newButton1.addEventListener('click', ChocolateChip);
    newButton2.addEventListener('click', SugarCookie);
    newButton3.addEventListener('click', OatmealCookie);
    newButton4.addEventListener('click', CookieDough);
    newButton5.addEventListener('click', PeanutButterCookie);
    newButton13.addEventListener('click', ChooseForMe);
    newButton13.addEventListener('mouseover', function() {
        if (!alertShown) {
        alert('Double to click to confirm your desire for randomness!')
        alertShown = true;
        }
    });
}

function ChocolateChip() {
    content.innerHTML = 'Click the Cookie as fast as you can for 10 seconds!!';
    content.style.display = 'flex';
    newButton1.innerHTML = '';
    newButton1.style.backgroundImage = 'url(assets/chocolateChip.png)';
    newButton1.style.backgroundSize = 'cover';
    newButton1.style.width = '250px';
    newButton1.style.height = '250px';
    newButton1.style.border = 'none';
    newButton1.style.outline = 'none';
    newButton1.style.borderRadius = '50%';
    newButton1.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
    newButton2.style.display = 'none';
    newButton3.style.display = 'none';
    newButton4.style.display = 'none';
    newButton5.style.display = 'none';
    newButton13.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    newButton6.style.bottom = '5.5%';
    newButton6.style.position = 'absolute';
    newButton6.style.right = '33%';
    footerElement.appendChild(newButton6);
    if (clickCount1 > 9) {
        newButton1.style.display = 'none';
        content.innerHTML = 'You ate too many cookies and now you are sick!';
        articleElement.style.backgroundImage = 'url(assets/bed.png)';
        newButton14 = document.createElement('button');
        newButton14.innerHTML = 'Continue...';
        newButton14.classList.add('continue');
        newButton14.style.bottom = '5.5%';
        newButton14.style.position = 'absolute';
        newButton14.style.left = '30%';
        footerElement.appendChild(newButton14);
        newButton14.addEventListener('click', newWorld);
    }

    newButton1.addEventListener('click', ccScore);
    newButton6.addEventListener('click', reload);
    newButton1.addEventListener('click', function() {
        sound2.play();
});
}

function SugarCookie() {
    content.innerHTML = 'Click the Cookie as fast as you can for 10 seconds!!';
    content.style.display = 'flex';
    newButton2.innerHTML = '';
    newButton2.style.backgroundImage = 'url(assets/sugar.png)';
    newButton2.style.backgroundSize = 'cover';
    newButton2.style.width = '250px';
    newButton2.style.height = '250px';
    newButton2.style.border = 'none';
    newButton2.style.outline = 'none';
    newButton2.style.borderRadius = '50%';
    newButton2.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
    newButton1.style.display = 'none';
    newButton3.style.display = 'none';
    newButton4.style.display = 'none';
    newButton5.style.display = 'none';
    newButton13.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    newButton6.style.bottom = '5.5%';
    newButton6.style.position = 'absolute';
    newButton6.style.right = '33%';
    footerElement.appendChild(newButton6);
    if (clickCount2 > 11) {
        newButton2.style.display = 'none';
        content.innerHTML = 'You ate too many cookies and now you are sick!';
        articleElement.style.backgroundImage = 'url(assets/bed.png)';
        newButton14 = document.createElement('button');
        newButton14.innerHTML = 'Continue...';
        newButton14.classList.add('continue');
        newButton14.style.bottom = '5.5%';
        newButton14.style.position = 'absolute';
        newButton14.style.left = '30%';
        footerElement.appendChild(newButton14);
        newButton14.addEventListener('click', newWorld2);
    }

    newButton2.addEventListener('click', scScore);
    newButton6.addEventListener('click', reload);
    newButton2.addEventListener('click', function() {
        sound2.play();
});
}

function OatmealCookie() {  
    content.innerHTML = 'Click the Cookie as fast as you can for 10 seconds!!';
    content.style.display = 'flex';
    newButton3.innerHTML = '';
    newButton3.style.backgroundImage = 'url(assets/oatmeal.png)';
    newButton3.style.backgroundSize = 'cover';
    newButton3.style.width = '250px';
    newButton3.style.height = '250px';
    newButton3.style.border = 'none';
    newButton3.style.outline = 'none';
    newButton3.style.borderRadius = '50%';
    newButton3.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
    newButton1.style.display = 'none';
    newButton2.style.display = 'none';
    newButton4.style.display = 'none';
    newButton5.style.display = 'none';
    newButton13.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    newButton6.style.bottom = '5.5%';
    newButton6.style.position = 'absolute';
    newButton6.style.right = '33%';
    footerElement.appendChild(newButton6);
    if (clickCount3 > 8) {
        newButton3.style.display = 'none';
        content.innerHTML = 'You ate too many cookies and now you are sick!';
        articleElement.style.backgroundImage = 'url(assets/bed.png)';
        newButton14 = document.createElement('button');
        newButton14.innerHTML = 'Continue...';
        newButton14.classList.add('continue');
        newButton14.style.bottom = '5.5%';
        newButton14.style.position = 'absolute';
        newButton14.style.left = '30%';
        footerElement.appendChild(newButton14);
        newButton14.addEventListener('click', newWorld3);
    }

    newButton3.addEventListener('click', ocScore);
    newButton6.addEventListener('click', reload);
    newButton3.addEventListener('click', function() {
        sound2.play();
});
}

function CookieDough() {
    content.innerHTML = 'Click the dough as fast as you can for 10 seconds!!';
    content.style.display = 'flex';
    newButton4.innerHTML = '';
    newButton4.style.backgroundImage = 'url(assets/dough.png)';
    newButton4.style.backgroundSize = 'cover';
    newButton4.style.width = '250px';
    newButton4.style.height = '250px';
    newButton4.style.border = 'none';
    newButton4.style.outline = 'none';
    newButton4.style.borderRadius = '50%';
    newButton4.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
    newButton1.style.display = 'none';
    newButton2.style.display = 'none';
    newButton3.style.display = 'none';
    newButton5.style.display = 'none';
    newButton13.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    newButton6.style.bottom = '5.5%';
    newButton6.style.position = 'absolute';
    newButton6.style.right = '33%';
    footerElement.appendChild(newButton6);

    if (clickCount4 > 4) {
        newButton4.style.display = 'none';
        content.innerHTML = 'You ate too many cookies and now you are sick!';
        articleElement.style.backgroundImage = 'url(assets/bed.png)';
        newButton14 = document.createElement('button');
        newButton14.innerHTML = 'Continue...';
        newButton14.classList.add('continue');
        newButton14.style.bottom = '5.5%';
        newButton14.style.position = 'absolute';
        newButton14.style.left = '30%';
        footerElement.appendChild(newButton14);
        newButton14.addEventListener('click', newWorld4);
    }

    newButton4.addEventListener('click', cdScore);
    newButton6.addEventListener('click', reload);
    newButton4.addEventListener('click', function() {
        sound2.play();
});
}

function PeanutButterCookie() {
    content.innerHTML = 'Click the Cookie as fast as you can for 10 seconds!!';
    content.style.display = 'flex';
    newButton5.innerHTML = '';
    newButton5.style.backgroundImage = 'url(assets/peanut.png)';
    newButton5.style.backgroundSize = 'cover';
    newButton5.style.width = '250px';
    newButton5.style.height = '250px';
    newButton5.style.border = 'none';
    newButton5.style.outline = 'none';
    newButton5.style.borderRadius = '50%';
    newButton5.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
    newButton1.style.display = 'none';
    newButton2.style.display = 'none';
    newButton3.style.display = 'none';
    newButton4.style.display = 'none';
    newButton13.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    newButton6.style.bottom = '5.5%';
    newButton6.style.position = 'absolute';
    newButton6.style.right = '33%';
    footerElement.appendChild(newButton6);
    if (clickCount5 > 7) {
        newButton5.style.display = 'none';
        content.innerHTML = 'You ate too many cookies and now you are sick!';
        articleElement.style.backgroundImage = 'url(assets/bed.png)';
        newButton14 = document.createElement('button');
        newButton14.innerHTML = 'Continue...';
        newButton14.classList.add('continue');
        newButton14.style.bottom = '5.5%';
        newButton14.style.position = 'absolute';
        newButton14.style.left = '30%';
        footerElement.appendChild(newButton14);
        newButton14.addEventListener('click', newWorld5);
    }

    newButton5.addEventListener('click', pbScore);
    newButton6.addEventListener('click', reload);
    newButton5.addEventListener('click', function() {
        sound2.play();
    });
}

function ChooseForMe() {
    if (randomNumber === 0) {
        newButton13.addEventListener('click', ChocolateChip);
    } else if (randomNumber === 1) {
        newButton13.addEventListener('click', SugarCookie);
    } else if (randomNumber === 2) {
        newButton13.addEventListener('click', OatmealCookie);
    } else if (randomNumber === 3) {
        newButton13.addEventListener('click', CookieDough);
    } else if (randomNumber === 4) {
        newButton13.addEventListener('click', PeanutButterCookie);
    }
}

setInterval(function() {
    if (clickCount1 > 9 && !newButton7Created) {
        newButton7 = document.createElement('button');
        articleElement.appendChild(newButton7);
        newButton7.innerHTML = '';
        newButton7.style.backgroundImage = 'url(assets/vomit.png)';
        newButton7.style.width = '250px';
        newButton7.style.height = '250px';
        newButton7.style.backgroundSize = 'cover';
        newButton7.style.textAlign = 'center';
        newButton7.style.alignItems = 'center';
        newButton7.style.color = 'white';
        newButton7.style.display = 'flex';
        newButton7.style.fontSize = '50px';
        newButton7.style.fontWeight = 'bold';
        newButton7.style.border = 'none';
        newButton7.style.outline = 'none';
        newButton7.style.borderRadius = '50%';
        newButton7Created = true;
    }
    if (clickCount2 > 11 && !newButton8Created) {
        newButton8 = document.createElement('button');
        articleElement.appendChild(newButton8);
        newButton8.innerHTML = '';
        newButton8.style.backgroundImage = 'url(assets/vomit.png)';
        newButton8.style.width = '250px';
        newButton8.style.height = '250px';
        newButton8.style.backgroundSize = 'cover';
        newButton8.style.textAlign = 'center';
        newButton8.style.alignItems = 'center';
        newButton8.style.color = 'white';
        newButton8.style.display = 'flex';
        newButton8.style.fontSize = '50px';
        newButton8.style.fontWeight = 'bold';
        newButton8.style.border = 'none';
        newButton8.style.outline = 'none';
        newButton8.style.borderRadius = '50%';
        newButton8Created = true;
    }
    if (clickCount3 > 8 && !newButton9Created) {
        newButton9 = document.createElement('button');
        articleElement.appendChild(newButton9);
        newButton9.innerHTML = '';
        newButton9.style.backgroundImage = 'url(assets/vomit.png)';
        newButton9.style.width = '250px';
        newButton9.style.height = '250px';
        newButton9.style.backgroundSize = 'cover';
        newButton9.style.textAlign = 'center';
        newButton9.style.alignItems = 'center';
        newButton9.style.color = 'white';
        newButton9.style.display = 'flex';
        newButton9.style.fontSize = '50px';
        newButton9.style.fontWeight = 'bold';
        newButton9.style.border = 'none';
        newButton9.style.outline = 'none';
        newButton9.style.borderRadius = '50%';
        newButton9Created = true;
    }
    if (clickCount4 > 4 && !newButton10Created) {
        newButton10 = document.createElement('button');
        articleElement.appendChild(newButton10);
        newButton10.innerHTML = '';
        newButton10.style.backgroundImage = 'url(assets/vomit.png)';
        newButton10.style.width = '250px';
        newButton10.style.height = '250px';
        newButton10.style.backgroundSize = 'cover';
        newButton10.style.textAlign = 'center';
        newButton10.style.alignItems = 'center';
        newButton10.style.color = 'white';
        newButton10.style.display = 'flex';
        newButton10.style.fontSize = '50px';
        newButton10.style.fontWeight = 'bold';
        newButton10.style.border = 'none';
        newButton10.style.outline = 'none';
        newButton10.style.borderRadius = '50%';
        newButton10Created = true;
    }
    if (clickCount5 > 7 && !newButton11Created) {
        newButton11 = document.createElement('button');
        articleElement.appendChild(newButton11);
        newButton11.innerHTML = '';
        newButton11.style.backgroundImage = 'url(assets/vomit.png)';
        newButton11.style.width = '250px';
        newButton11.style.height = '250px';
        newButton11.style.backgroundSize = 'cover';
        newButton11.style.textAlign = 'center';
        newButton11.style.alignItems = 'center';
        newButton11.style.color = 'white';
        newButton11.style.display = 'flex';
        newButton11.style.fontSize = '50px';
        newButton11.style.fontWeight = 'bold';
        newButton11.style.border = 'none';
        newButton11.style.outline = 'none';
        newButton11.style.borderRadius = '50%';
        newButton11Created = true;
    }
}, 1000);

function ccScore() {
    clickCount1++;
    counter1.innerHTML = clickCount1;
    counter1.display = 'flex';
    counter1.style.color = 'white';
    counter1.style.fontSize = '90px';
    counter1.style.fontWeight = 'bold'
    newButton6.style.display = 'none';
    articleElement.appendChild(counter1);
    counter1.style.justifyContent = 'center';
    counter1.style.alignItems = 'center';
    counter1.style.position = 'absolute';
    counter1.style.bottom = '0';
    counter1.style.top = 'unset';
    let newWidth = 5.55 * clickCount1; 
    let newHeight = 7.22 * clickCount1; 
    circle.style.width = newWidth + 'px'; 
    circle.style.height = newHeight + 'px'; 
    circle.style.transition = 'width 0.5s ease, height 0.5s ease';

// The rest of your code...
    console.log(newWidth, newHeight); // Log the new size to the console
}

function scScore() {
    clickCount2++;
    counter2.innerHTML = clickCount2;
    counter2.display = 'flex';
    counter2.style.color = 'white';
    counter2.style.fontSize = '90px';
    counter2.style.fontWeight = 'bold'
    newButton6.style.display = 'none';
    articleElement.appendChild(counter2);
    counter2.style.justifyContent = 'center';
    counter2.style.alignItems = 'center';
    counter2.style.position = 'absolute';
    counter2.style.bottom = '0';
    counter2.style.top = 'unset';
    let newWidth = 5.55 * clickCount1; 
    let newHeight = 7.22 * clickCount1; 
    circle.style.width = newWidth + 'px'; 
    circle.style.height = newHeight + 'px'; 
    circle.style.transition = 'width 0.5s ease, height 0.5s ease';
}

function ocScore() {
    clickCount3++;
    counter3.innerHTML = clickCount3;
    counter3.display = 'flex';
    counter3.style.color = 'white';
    counter3.style.fontSize = '90px';
    counter3.style.fontWeight = 'bold'
    newButton6.style.display = 'none';
    articleElement.appendChild(counter3);
    counter3.style.justifyContent = 'center';
    counter3.style.alignItems = 'center';
    counter3.style.position = 'absolute';
    counter3.style.bottom = '0';
    counter3.style.top = 'unset';
}

function cdScore() {
    clickCount4++;
    counter4.innerHTML = clickCount4;
    counter4.display = 'flex';
    counter4.style.color = 'white';
    counter4.style.fontSize = '90px';
    counter4.style.fontWeight = 'bold'
    newButton6.style.display = 'none';
    articleElement.appendChild(counter4);
    counter4.style.justifyContent = 'center';
    counter4.style.alignItems = 'center';
    counter4.style.position = 'absolute';
    counter4.style.bottom = '0';
    counter4.style.top = 'unset';
}

function pbScore() {
    clickCount5++;
    counter5.innerHTML = clickCount5;
    counter5.display = 'flex';
    counter5.style.color = 'white';
    counter5.style.fontSize = '90px';
    counter5.style.fontWeight = 'bold'
    newButton6.style.display = 'none';
    articleElement.appendChild(counter5);
    counter5.style.justifyContent = 'center';
    counter5.style.alignItems = 'center';
    counter5.style.position = 'absolute';
    counter5.style.bottom = '0';
    counter5.style.top = 'unset';
}

function newWorld() {
    content.innerHTML = 'Suddenly you wake up and you are in a different place!';
    newButton7.style.display = 'none';
    counter1.style.display = 'none';
    articleElement.style.backgroundImage = 'url(assets/lights.png)';
    newButton14.style.display = 'none';
    newButton15 = document.createElement('button');
    newButton15.innerHTML = 'Get Up!';
    newButton15.classList.add('cr1');
    newButton15.style.margin = '10px';
    newButton15.style.bottom = '4.3%';
    newButton15.style.position = 'absolute';
    newButton15.style.left = '30%';
    footerElement.appendChild(newButton15);
    newButton15.addEventListener('click', continueingResolution);
}

function newWorld2() {
    content.innerHTML = 'Suddenly you wake up and you are in a different place!';
    newButton8.style.display = 'none';
    counter2.style.display = 'none';
    articleElement.style.backgroundImage = 'url(assets/lights.png)';
    newButton14.style.display = 'none';
    newButton15 = document.createElement('button');
    newButton15.innerHTML = 'Get Up!';
    newButton15.classList.add('cr1');
    newButton15.style.margin = '10px';
    newButton15.style.bottom = '4.3%';
    newButton15.style.position = 'absolute';
    newButton15.style.left = '30%';
    footerElement.appendChild(newButton15);
    newButton15.addEventListener('click', continueingResolution);
}

function newWorld3() {  
    content.innerHTML = 'Suddenly you wake up and you are in a different place!';
    newButton9.style.display = 'none';
    counter3.style.display = 'none';
    articleElement.style.backgroundImage = 'url(assets/lights.png)';
    newButton14.style.display = 'none';
    newButton15 = document.createElement('button');
    newButton15.innerHTML = 'Get Up!';
    newButton15.classList.add('cr1');
    newButton15.style.margin = '10px';
    newButton15.style.bottom = '4.3%';
    newButton15.style.position = 'absolute';
    newButton15.style.left = '30%';
    footerElement.appendChild(newButton15);
    newButton15.addEventListener('click', continueingResolution);
}

function newWorld4() {
    content.innerHTML = 'Suddenly you wake up and you are in a different place!';
    newButton10.style.display = 'none';
    counter4.style.display = 'none';
    articleElement.style.backgroundImage = 'url(assets/lights.png)';
    newButton14.style.display = 'none';
    newButton15 = document.createElement('button');
    newButton15.innerHTML = 'Get Up!';
    newButton15.classList.add('cr1');
    newButton15.style.margin = '10px';
    newButton15.style.bottom = '4.3%';
    newButton15.style.position = 'absolute';
    newButton15.style.left = '30%';
    footerElement.appendChild(newButton15);
    newButton15.addEventListener('click', continueingResolution);
}

function newWorld5() {
    content.innerHTML = 'Suddenly you wake up and you are in a different place!';
    newButton11.style.display = 'none';
    counter5.style.display = 'none';
    articleElement.style.backgroundImage = 'url(assets/lights.png)';
    newButton14.style.display = 'none';
    newButton15 = document.createElement('button');
    newButton15.innerHTML = 'Get Up!';
    newButton15.classList.add('cr1');
    newButton15.style.margin = '10px';
    newButton15.style.bottom = '4.3%';
    newButton15.style.position = 'absolute';
    newButton15.style.left = '30%';
    footerElement.appendChild(newButton15);
    newButton15.addEventListener('click', continueingResolution);
}

function continueingResolution() {
    newButton15.style.display = 'none';
    articleElement.style.backgroundImage = 'url(assets/a51.png)';
    content.innerHTML = 'You get up and there is a man in a suit sitting in front of you.';
    newButton16 = document.createElement('button');
    newButton16.innerHTML = 'Run!';
    newButton16.classList.add('cr2');
    newButton16.style.margin = '10px';
    newButton16.style.bottom = '4.3%';
    newButton16.style.position = 'absolute';
    newButton16.style.left = '46%';
    footerElement.appendChild(newButton16);
    newButton17 = document.createElement('button');
    newButton17.innerHTML = 'Respond';
    newButton17.classList.add('cr3');
    newButton17.style.bottom = '5.5%';
    newButton17.style.position = 'absolute';
    newButton17.style.left = '30%';
    footerElement.appendChild(newButton17);
    content2.innerHTML = 'He asks you how many cookies did you eat?';
    content2.style.fontSize = '30px';
    newButton17.addEventListener('click', function() {
        newButton16.style.display = 'none';
        inputField.style.display = 'block';
        inputField.placeholder = 'Enter cookies eaten';
});
newButton16.addEventListener('click', run) 
}

function run() {
    content.innerHTML = 'You try to run but more suits appear and you are caught!';
    articleElement.style.backgroundImage = 'url(assets/run.png)';
    newButton16.style.display = 'none';
    content2.innerHTML = 'Last time; How many cookies did you eat?';
}

function reload() {
    location.reload();
}

// <<=== All Event Listeners  ===>>

btn.addEventListener('click', onClick);
btn.addEventListener('click', function() {
    sound.play();
});

btn.addEventListener('mouseover', function() {
    risky.innerHTML = '!! You will encounter elements that, when excessively consumed, pose risks to the well-being of children !!';
    risky.style.animation = 'flash 3s infinite';
    risky.style.display = 'space-around';
    risky.style.fontSize = '30px';
    risky.style.justifyContent = 'center';
    risky.style.alignItems = 'center';
    risky.style.position = 'absolute';
    risky.style.bottom = '0';
    risky.style.top = 'unset';
    margin = 'center';
    });
btn.addEventListener('mouseout', function() {
    risky.innerHTML = '';
});
muteButton.addEventListener('click', function() {
    sound.load();
    sound2.load();
    sound3.load();
    sound4.load();
    sound4.play();
    warning.style.display = 'block';
    btn.style.display = 'block';
    muteButton.style.display = 'none';
    muteLabel.style.display = 'none';
});

btn.addEventListener('mouseover', function() {
    if (!btnClicked) {
    sound3.play();
    sound4.pause();
    }
});  
btn.addEventListener('mouseout', function() {
   if (!btnClicked) {
    sound3.pause();
   sound4.play();
   }
}); 
btn.addEventListener('click', function() {
    sound3.pause();
    sound4.pause();
    btnClicked = true;
});

// <<=== Misc  ===>>


// Increment the counter and adjust the size of the circle
