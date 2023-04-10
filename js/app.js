/*this function take the click event from the header .burguer btn and switch the display value of the .menu (from "none" to "grid")*/
var play = document.getElementsByClassName("play__btn");
var pause = document.getElementsByClassName("pause__btn");
/* This function takes the click event on the play__btn/pause__btn and switch the li bg-color */
for (var i = 0; i < play.length; i++) {
    play[i].onclick = function() {
        this.parentElement.querySelector(".audio").play();
        this.style.color = "rgb(250,250,250)";
        this.style.background = "rgb(40,40,40)";
        this.parentElement.parentElement.style.background = "rgba(130,130,130, .4)";
        this.parentElement.parentElement.style.borderBottom = "rgb(200,225,0) 2px solid";
        this.parentElement.parentElement.querySelector(".song").style.color = "rgb(200,225,0)";
    }
}
for (var i = 0; i < pause.length; i++) {
    pause[i].onclick = function() {
        this.parentElement.querySelector(".audio").pause();
        this.parentElement.querySelector(".play__btn").style.color = "rgb(0,0,0)";
        this.parentElement.querySelector(".play__btn").style.background = "whitesmoke";
        this.parentElement.parentElement.style.background = "rgba(130,130,130, .0)";
        this.parentElement.parentElement.style.borderBottom = "gray 2px solid";
        this.parentElement.parentElement.querySelector(".song").style.color = "white";
    }
}