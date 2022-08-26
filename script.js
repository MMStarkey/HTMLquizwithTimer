// Function to get a countdown timer to display a countdown of 10 minutes

function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

countdown( "countdown-timer", 10, 0 );

//3 questions that each have 1 correct answer - each question is linked to "iscorrect" - each value needs to either be true or false
const Questions = [{
  id: 0,
  q: "What does HTML stand for?",
  a:[{ text: "Hyperlinks and Text Markup Language", isCorrect: false },
  { text: "Hyper Text Markup Language", isCorrect: true },
    { text: "HyperLinks and Texting Language", isCorrect: false },
    { text: "Hyperspeed The Mango Lime", isCorrect: false }
  ]

},
{
  id: 1,
  q: "What is the abbreviation of CSS?",
  a:[{ text: "Cascade Selector Sheets", isCorrect: false, isSelected: false },
  { text: "Color and Style Sheets", isCorrect: false },
  { text: "Cascading Style Sheets", isCorrect: true },
  { text: "A toothbrush", isCorrect: false },
  
  ]

},
{
  id: 2,
  q: "Which HTML tag specifies an internal style sheet?",

  a:[{ text: "<style>", isCorrect: true },
    { text: "<css>", isCorrect: false },
    { text: "<script>", isCorrect: false },
    { text: "style", isCorrect: false }
  ]

}
]

// Set start
var start = true;

//
function iterate(id) {
//Shows the result of the quiz choice

var result = document.getElementsByClassName("result");
result[0].innerText = "";

//Gathering the question to display
const question = document.getElementById("question");

//Showing the Question Text
question.innerText = Questions[id].q;

//Displaying the options to select for the quiz
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;



// Providing the true or false value to the 4 options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

//When the following is selected, the button will display a new color and the others not selected will change to cyan
op1.addEventListener("click", () => {
  op1.style.backgroundColor = "firebrick";
  op2.style.backgroundColor = "cyan";
  op3.style.backgroundColor = "cyan";
  op4.style.backgroundColor = "cyan";
  selected = op1.value;
})

//When the following is selected, the button will display a new color and the others not selected will change to cyan
op2.addEventListener("click", () => {
  op1.style.backgroundColor = "cyan";
  op2.style.backgroundColor = "firebrick";
  op3.style.backgroundColor = "cyan";
  op4.style.backgroundColor = "cyan";
  selected = op2.value;
})

//When the following is selected, the button will display a new color and the others not selected will change to cyan
op3.addEventListener("click", () => {
  op1.style.backgroundColor = "cyan";
  op2.style.backgroundColor = "cyan";
  op3.style.backgroundColor = "firebrick";
  op4.style.backgroundColor = "cyan";
  selected = op3.value;
})

//When the following is selected, the button will display a new color and the others not selected will change to cyan
op4.addEventListener("click", () => {
  op1.style.backgroundColor = "cyan";
  op2.style.backgroundColor = "cyan";
  op3.style.backgroundColor = "cyan";
  op4.style.backgroundColor = "firebrick";
  selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
  if (selected == "true") {
    result[0].innerHTML = "True";
    result[0].style.color = "green";
  } else {
    result[0].innerHTML = "False";
    result[0].style.color = "red";
  }
})
}

if (start) {
iterate("0");
}

const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
  id++;
  iterate(id);
  console.log(id);
}
})
