let weltext = document.querySelector(".welcome")
let button=document.querySelector(".button")
// localStorage.clear()
let overlay=document.querySelector(".overlay")
button.addEventListener("click",function(){
let intro = document.querySelector(".intro")
intro.style.display="flex"
let introButton = document.querySelector(".introbutton") 
introButton.addEventListener("click",function(){
    let input = document.querySelector("input") 

if (input.value==""||input.value==null){
    weltext.textContent="Unknown"
}
else{weltext.textContent=input.value;
}
intro.remove()
})
document.querySelector(".game-music").play()
overlay.remove()
})
//##############################################################################//
//##############################################################################//
//##############################################################################//
//##############################################################################//
//##############################################################################//
//##############################################################################//
let blocksContainer=document.querySelector(".bot-area");
let blocks = Array.from(blocksContainer.children);
let orderRange = Array.from(Array(blocks.length).keys());
let tries = document.querySelector(".tries")

shuffle(orderRange)
blocks.forEach((block,index)=>{
    block.style.order=orderRange[index]
block.addEventListener("click",function(){
    flip(block)
})
})

function flip(selectedblock){
    selectedblock.classList.add("flip")
            
            let flipped=blocks.filter(el=>el.classList.contains("flip"))
            if (flipped.length===2){
               stopclicking()
               matched(flipped[0],flipped[1])

               } 
            }
    

function stopclicking (){
    blocksContainer.classList.add("no-clicking")
    setTimeout(()=>{
        blocksContainer.classList.remove("no-clicking")
    },1000)
}

function matched(firstblock,secondblock){
if (firstblock.dataset.technology === secondblock.dataset.technology){
    firstblock.classList.remove("flip")
    secondblock.classList.remove("flip")
    firstblock.classList.add("matched")
    secondblock.classList.add("matched")
    document.querySelector(".success-sound").play()
    let matchedblocks=blocks.filter(function(el){
        return el.classList.contains("matched") 
    })
    if(matchedblocks.length==20)
   {let oldScore=localStorage.getItem("score")
   oldScore=oldScore ? [oldScore]:[];
   oldScore.push(tries.innerHTML)
   localStorage.setItem("score",oldScore);
   if(weltext.textContent!=="Unknown"){
   let oldData=localStorage.getItem("names");
    oldData=oldData ? [oldData]:[];
    oldData.push(weltext.textContent);
    localStorage.setItem("names",oldData)
       }
       let winnerBlock = document.querySelector(".winner-block");
       winnerBlock.style.display="block";
        document.querySelector(".winneraudio").play();

}

}
else{
    tries.innerHTML = (parseInt(tries.innerHTML)) + 1;
    
    document.querySelector(".failure-sound").play();


    setTimeout(() => {

        firstblock.classList.remove('flip');
        secondblock.classList.remove('flip');

        if(tries.innerHTML == "5" ){
            let gameover=document.querySelector(".game-over")
            gameover.style.display="flex";
            document.querySelector(".over-sound").play()

            }
  
      }, 1000);
    }
}
function shuffle (arr){
    
   let temp,random;
    for(let current=arr.length;current>0;current--){
        random=Math.floor(Math.random()*current);
        temp=arr[current];
        arr[current]=arr[random];
        arr[random]=temp
    }
    return arr
}
let result=document.querySelector(".result")
let oldData=localStorage.getItem("names").split(",")
let oldScore=localStorage.getItem("score").split(",")
for(let i =0;i<oldData.length;i++){
    let list = document.createElement("li")
    let ulist=document.createElement("ul")
    let span = document.createElement("span")
    span.innerHTML=`Tries = ${oldScore[i]}`
    
    list.innerHTML=`Player: ${oldData[i]} `
    list.appendChild(span)
    ulist.appendChild(list)
    result.appendChild(ulist)
}
