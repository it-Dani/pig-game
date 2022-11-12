alert("نحوه بازی :تاس بریزید و امتیاز خود را ذخیره کنید ، هرکه زودتر به 100 رسید برده ، مبادا با حریص بودن تمام امتیازات خود را به باد دهید ، تاس شماره 1 تمام امتیازات را پاک میکند و نوبت را عوض میکند. موفق باشید !")
const diceimage = document.getElementsByClassName("dice-img")[0];
const scoreplayerone = document.querySelector(".score-pl1");
const scoreplayertwo = document.querySelector(".score-pl2");
let currentplayerone = document.querySelector(".cu-score-point1");
let currentplayertwo = document.querySelector(".cu-score-point2");

currentscore = 0;
let activeplayer = 1;
//این متغیر برای این است که بین بازیکنان چنج کنیم و عدد داخل متغیر نسبت به کلاس شما قابل متغیر هست
//برای مثال کلاس من پلیر یک و دو هست برای همین از عدد یک استفاده کردم

isplaying = true;
document.getElementsByClassName("toss")[0].addEventListener("click",()=>{
    if(isplaying){
        const dice = Math.trunc(Math.random()*6)+1;
        diceimage.classList.remove("hidden");
        diceimage.src = `img/dice-${dice}.jpg`;
    
        if (dice !== 1) {
            currentscore += dice;
            document.querySelector(`.cu-score-point${activeplayer}`).textContent = currentscore;
        } else {
            switchplayer();
        }    
    }
})

const switchplayer = ()=>{
    currentscore = 0;
    document.querySelector(`.cu-score-point${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 1 ? 2 : 1;
    //بلوک کد پایین دقیقا کار کد بالا با علامت سئوال را انجام میدهد
    //if (activeplayer == 1) {
    //    activeplayer = 2;
    //} else {
    //    activeplayer = 1;
    //}

    document.getElementsByClassName("player-1")[0].classList.toggle("active");
    document.getElementsByClassName("player-2")[0].classList.toggle("active");
}
let totalscore = [0,0,0];
//چون شمارش آرایه ها از صفر شروع میشود اینجا از سه صفر استفاده شده تا ایندکس یک و دو با متغیر کارنت اسکور برابر شود. در غیر این صورت شمارش آرایه میشود صفر و یک و پلیر دو را حساب نمیکند.
document.getElementsByClassName("hold-btn")[0].addEventListener("click" , ()=>{
    if(isplaying){
        totalscore[activeplayer] += currentscore ; 
        document.getElementById(`score-pl${activeplayer}`).innerHTML = totalscore[activeplayer];
        if (totalscore[activeplayer] >= 100) {
            document.getElementsByClassName(`player-${activeplayer}`)[0].classList.add("player-winner");
            diceimage.classList.add("hidden");
            isplaying = false;
        }
        switchplayer();
    }
})
document.getElementsByClassName("start-btn")[0].addEventListener("click" , ()=>{
    isplaying = true;
    totalscore[0,0,0]  ;
    scoreplayerone.innerHTML = 0;
    scoreplayertwo.innerHTML = 0;
    currentplayerone.innerHTML = 0;
    currentplayerone.innerHTML = 0;
    activeplayer = 1
    document.getElementsByClassName("player-1")[0].classList.remove("player-winner");
    document.getElementsByClassName("player-1")[0].classList.add("active");
    document.getElementsByClassName("player-2")[0].classList.remove("player-winner");
    document.getElementsByClassName("player-2")[0].classList.remove("active");
})

function alertdice(){
    alert("this is dice number");
}

