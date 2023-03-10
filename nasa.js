
import { myKey } from "./myJSModule.js";

let btn = document.querySelector('.btn');
let divPic = document.querySelector('.divPic');
let divText = document.querySelector('.divText');
let dateText = document.querySelector('.date');
let divVideo = document.querySelector('.video');


//shows random picture button container after seeing the Today's Picture container
function showDiv() {
    let showC2 = document.querySelector('.textContainer2')
    showC2.style.display = "block";
}

function showVideo() {

    divVideo.style.display = "block";
}

// Originally wanted to show the video html tag once the conditional statements
//sees that it is indeed not an image it will execute this function
//to show the video
/*function showVideoRan() {

    divVideoRan.style.display = "block";
}*/
// Originally after clicking the button again it will remove the video html tag
//so it doesn't stay if the next media type from the random button
//is an image and not a video
/*function hideVideoRan() {

    divVideoRan.style.display = "none";
}*/


btn.addEventListener('click', myFunc);
async function myFunc(){
    //let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY `);
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${myKey} `);
    let parasedRes = await response.json();
    dateText.innerHTML = parasedRes.date + "<br>" + parasedRes.title;
    if(parasedRes.media_type == "image")
    {
        divPic.src = parasedRes.url;
    }else{
        showVideo();
        divVideo.src = parasedRes.url;
    }
    divText.innerHTML = parasedRes.explanation;
    showDiv();
}


let btnRan = document.querySelector('.btn2');
let divPicRan = document.querySelector('.divPic2');
let divTextRan = document.querySelector('.divText2');
let dateTextRan = document.querySelector('.date2');
//let divVideoRan = document.querySelector('.video');

btnRan.addEventListener('click', myFuncRan);

async function myFuncRan(){
    let yearDate = Math.floor(Math.random() * (2022 - 1996 + 1) + 1996);
    let monthDate = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    let maxDays = funDayMax(monthDate);

    let monthDay = Math.floor(Math.random() * (maxDays - 1 + 1) + 1);

    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${myKey}&date=${yearDate}-${monthDate}-${monthDay}&thumbs=True`);
    let parasedRes = await response.json();
    if(parasedRes.media_type == "image")
    {
        dateTextRan.innerHTML = parasedRes.date + "<br>" + parasedRes.title;
        divPicRan.src = parasedRes.url;
        divTextRan.innerHTML = parasedRes.explanation;
        //console.log(parasedRes);
    }else{
        //repeats the function until image is retrieved 
        myFuncRan();
    }



}

//switch checking of the month
// to return max number of days a month can have
// this is not including leap years
function funDayMax(Date) {
    let maxDays;

    switch(Date){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return maxDays = 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return maxDays = 30;
        case 2:
            return 28;
    }

}