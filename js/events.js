//---Option 01 (directly Set on the Html Elements--//
// <button title="hello" onclick="console.log(7)">Click me</button>

//--- Option 02-----//* we will use it */
function red(){
    document.body.style.backgroundColor='red';
}

//--- Option 03-----//
const makeBlue = document.getElementById('make-Blue');
makeBlue.onclick = makeblue;

function makeblue(){
    document.body.style.backgroundColor='blue';
}

//--- Option 03 another-----//
const makePurple = document.getElementById('make-Purple');
makePurple.onclick = function makepurple(){
    document.body.style.backgroundColor='purple';
};


// Option 04 //
const PinkButton = document.getElementById('make-pink');
PinkButton.addEventListener('click',makepink )

function makepink(){
    document.body.style.backgroundColor='pink';
}

// Option 04 another //
const GreenButton = document.getElementById('make-green');
GreenButton.addEventListener('click',function makegreen(){
    document.body.style.backgroundColor='green';
} )

//option 04 final //

const GoldenrodButton = document.getElementById('make-goldenrod').addEventListener('click',function() {
    document.body.style.backgroundColor='goldenrod';
} );
