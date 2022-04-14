let audio = document.getElementById("audio");
let capa = document.getElementById("music");

var playP = 0;

var title = document.getElementById("title");

var musicas=[
    {title:'Lovely Day',artist:'Bill Withers',src:'./musics/Bill Withers - Lovely Day (Official Audio)_1.mp3',img:'./images/capas/bill_withers.jpg'},
    {title:'Chanel',artist:'Frank Ocean',src:'./musics/Frank Ocean - Chanel.mp3',img:'./images/capas/frank_ocean.jpg'},
    {title:'Estrelar',artist:'Marcos Vale',src:'./musics/Marcos Valle - Estrelar.mp3',img:'./images/capas/marcos_valle.jpg'},
    {title:'Stay With Me',artist:'Miki Matsubara',src:'./musics/Miki Matsubara - Saty With Me.mp3',img:'./images/capas/miki_matubara.jpg'}
];

var count = 0;
//botões play e pause
function playPause(){
    let image = document.getElementById("playPause");
    if(playP==0){
        audio.play();
        image.setAttribute("src" , "./images/controls/pausa_icon.png");
        playP+=1;
    }
    else{
        audio.pause();
        image.setAttribute("src", "./images/controls/reproduzir_icon.png");
        playP-=1;
    }
}

//pulae ou voltar de música
function pular(){
    if (count<musicas.length){
        count+=1;
        capa.setAttribute("src", musicas[count].img);
        audio.setAttribute("src",musicas[count].src);
        title.innerHTML=musicas[count].artist+ " - " +musicas[count].title;}
    else{
        count=0;
        capa.setAttribute("src", musicas[0].img);
        audio.setAttribute("src",musicas[0].src);
        title.innerHTML=musicas[0].artist+ " - " +musicas[0].title;}
    console.log(count);
    image.setAttribute("src","./images/controls/reproduzir_icon.png");
    }
function voltar(){
    if (count>=0){
        count-=1;
        capa.setAttribute("src",musicas[count].img);
        audio.setAttribute("src",musicas[count].src);
        title.innerHTML=musicas[count].artist+ " - " +musicas[count].title;}
    else{
        count=musicas.length-1;
        capa.setAttribute("src", musicas[count].img);
        audio.setAttribute("src",musicas[count].src);
        title.innerHTML=musicas[count].artist+ " - " +musicas[count].title;}
    console.log(count);
    image.setAttribute("src","./images/controls/reproduzir_icon.png");
    }
//pular ou voltar 15s
function pular15(){
    audio.currentTime+=15;}
function voltar15(){
    audio.currentTime-=15;}
