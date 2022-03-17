
// --------------------------------------------------------------SELECT ELEMENTS-------------------------------------------------->

let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let inpspeed = document.getElementById("slotspeed")
let stopbtn = document.querySelectorAll('button')[1]
let startbtn = document.querySelector("button")
let quote = document.getElementById("quoteId")
let resultAnim = document.getElementById("resultDivId")
let resultSpan = document.getElementById("resultSpanId")

// -------------------------VARIABLES--------------------
let timesrun = 0
let winvalue1;
let winvalue2;
let winvalue3;


let values = [
    "♣" , "♤" , "♠", "♡" ,"🂿" ,"♥" ,"♦","♢","♧" 
    
]


// ----------------------------------------------------GETTING RANDOM VALUES (VALUE , QUOTES)--------------------------------------->


function getRandomValue(){
    
    return values[Math.floor(Math.random() * 8)]
}

let quoteLines = ["<h1><span>“He's </span><span> Still </span><span> Alive. </span><span> They </span><span> Hit </span><span> Him </span><span> With </span><span> 5 </span><span> Shots </span><span> And </span><span> He's </span><span> Still </span><span> Alive ”</span></h1>",
"<h1><span>“Some </span><span> Day,</span><span> And</span><span> That</span><span> Day</span><span> May</span><span> Never</span><span> Come,</span><span> I</span><span> Will</span><span> Call</span><span> Upon</span><span> You</span><span> To</span><span> Do</span><span> A</span><span> Service</span><span> For Me.”</span></h1>",
"<h1><span>“ I </span><span> Know </span><span> It </span><span> Was </span><span> You </span><span>, </span><span> Fredo. </span><span> You </span><span> Broke </span><span> My </span><span> Heart. </span><span> You </span><span> Broke </span><span> My </span><span> Heart! ”</span></h1>",
"<h1><span>“My</span><span> Father</span><span> Assured</span><span> Him</span><span> That</span><span> Either</span><span> His</span><span> Brains</span><span> Or</span><span> His </span><span>Signature</span><span> Would</span><span> Be</span><span> On </span><span>The </span><span>Contract.”</span> </h1>"


]
function getRandomQuote(){
    
    return quoteLines[Math.floor(Math.random() * 4)]
}


// ----------------------------------------------------------START BUTTON FUNCTIONALITY------------------------------------------->


startbtn.addEventListener("click",startbtnfunc);
function startbtnfunc(e){
    
    console.log("MACHINE IS ON")
    quote.innerHTML=getRandomQuote()
    // ----------------START CHANGING VALUES----------------------------------
    
    var interval = setInterval( () => {
        timesrun++;
        if(timesrun==200){
            clearInterval(interval);
            return;
            
        }
        value1.innerText = getRandomValue();
        value2.innerText = getRandomValue();
        value3.innerText = getRandomValue();
        
    },1000)
    
    
    inpspeed.onchange = function(ev){
        console.log('value changed',ev.target.value)
        document.documentElement.style.setProperty('--speed',ev.target.value)
    }

    // ---------------------START SPINNING ANIMATION-------------------------
    var styles = `
    @keyframes slotspin {
        0% {
          transform: translateY(-120%);
        }
        100% {
          transform: translateY(120%);
        }
      }
    //   for quotes
      @keyframes fade-in {
        100% {
          opacity: 1;
          filter: blur(0);
        }
      }
      .quote{
          display:flex;
          margin-bottom: 0px;

      }
      
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

resultSpan.innerText = 'RESULTS'
    
}

// --------------------------------------------------------STOP BUTTON FUNCTIONALITY---------------------------------------------->

stopbtn.addEventListener('click',stopbtnfunc);

function stopbtnfunc(ev){
    timesrun = 199;
    console.log(" The results are here");

    //----------- STOP SPINNING ANIMATION-----------------------
    styles = `
    @keyframes slotspin {
        
      }`
    

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

    // -------------------RESULTS--------------------------------
    winvalue1 = value1.innerText;
    winvalue2 = value2.innerText;
    winvalue3 = value3.innerText;
    
    
    console.log(winvalue1)
    console.log(winvalue2)
    console.log(winvalue3)
    
    
    if(winvalue1 == winvalue2 && winvalue1 == winvalue3){
        console.log("100 points for my dear friend")
        resultSpan.innerText = "YOU WON"
    //     var results = `
    // .resultAnim span{
    //     padding-left: 110px;



    // }
    // `
    var resultDiv = document.createElement("style")
    resultDiv.innerText = results
    document.head.appendChild(resultDiv)

    }
    else if(winvalue1==winvalue2 || winvalue2==winvalue3){
        console.log("50 points bruhh")
        resultSpan.innerText = "YOU WON"
    //     var results = `
    // .resultAnim span{
    //     padding-left: 0px;



    // }
    // `
    var resultDiv = document.createElement("style")
    resultDiv.innerText = results
    document.head.appendChild(resultDiv)
        
        
        
    }
    else{
        console.log("better luck next time buddy")
        resultSpan.innerText = 'YOU LOST'
    //     var results = `
    // .resultAnim span{
    //     padding-left:110px;



    // }
    // `
    var resultDiv = document.createElement("style")
    resultDiv.innerText = results
    document.head.appendChild(resultDiv)
        
    }

    


}
    
    
    


