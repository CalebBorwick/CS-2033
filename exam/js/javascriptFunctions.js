
function covidFunc(){
    var covid = document.getElementById("covid");
    covid.style.display= "none";
}


function scroll(){
    var t = window.scrollY;
    var banner = document.getElementById("banner");
    var m = -1;
    var b= 0.25;
    newy=m*t + b;
    banner.style.backgroundPosition=newy+"px";

    var header = document.getElementById("bannerText");
    var sticky = header.offsetTop;


    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");

  } else {
        header.classList.remove("sticky");
  }
    
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var s4 = document.getElementById("s4");
    var s5 = document.getElementById("s5");

    var t1 = s1.offsetTop-110;
    var t2 = s2.offsetTop-110;
    var t3 = s3.offsetTop-110;
    var t4 = s4.offsetTop-110;
    var t5 = s5.offsetTop-110;
    
    if (t >t5){
        document.title = "Stephen & Sons - References"
    }
    else if (t >t4){
        document.title = "Stephen & Sons - Account"
    }
    else if (t >t3){
        document.title = "Stephen & Sons - Services"
    }
    else if (t >t2){
        document.title = "Stephen & Sons - Slogan"
    }
    else if (t >t1){
        document.title = "Stephen & Sons - About"

    }
    else{
        document.title = "Stephen & Sons - Welcome"
    }
}

function login(){
    var username = document.getElementById("usernameLogin");
    var password = document.getElementById("passwordLogin");
    if (username.value=="user2033" && password.value=="letmein"){
        alert("Welcome back!");
    }
    else{
        var login = document.getElementById("login");
        login.classList.toggle("animation");
    }

}

function register(){
    var username = document.getElementById("usernameReg");
    var password = document.getElementById("passwordReg");
    var passConf = document.getElementById("confrimPassword");
    var regExp = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/;
    if (username.value.length<11 &&username.value.length>5 && 
        password.value.length>4 && password.value == passConf.value&&
       regExp.test(password.value)){
            alert("Welcome aboard!")
    }
    else{
        var register = document.getElementById("register");
        register.classList.toggle("animation");
    }
}

function switchLogToReg(){
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    if (login.style.display=="block"){
        login.style.display='none';
        register.style.display='block';
    }
    else if (login.style.display=="none"){
        login.style.display='block';
        register.style.display='none';
    }
    

}

