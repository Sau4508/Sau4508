console.log("welcome to my spotyfy");
//initialize the variable
let songIndex =0;
let audioElement= new Audio('1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myPrograssBar=document.getElementById('myPrograssBar');
let gif=document.getElementById('gif');

let songs =[
    {songName:"salam-e-ishq",filePath:"song/mp3",coverPath:"cover/1.jpg"},
    {songName:"salam-e-ishq",filePath:"song/mp3",coverPath:"cover/1.jpg"},
    {songName:"salam-e-ishq",filePath:"song/mp3",coverPath:"cover/1.jpg"},
    {songName:"salam-e-ishq",filePath:"song/mp3",coverPath:"cover/1.jpg"},
    {songName:"salam-e-ishq",filePath:"song/mp3",coverPath:"cover/1.jpg"},
    {songName:"salam-e-ishq",filePath:"song/mp3",coverPath:"cover/1.jpg"},
    {songName:"salam-e-ishq",filePath:"song/mp3",coverPath:"cover/1.jpg"},
    {songName:"salam-e-ishq",filePath:"song/mp3",coverPath:"cover/1.jpg"},
]
//listen to Event
document.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;



    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myPrograssBar.value =progress;
})
