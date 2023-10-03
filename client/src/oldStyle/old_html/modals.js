var modal1 = document.getElementById('m1');
var modal2 = document.getElementById('m2');
var modal3 = document.getElementById('m3');


var btn3 = document.getElementById("Bt3");
var btn2 = document.getElementById("Bt2");
var btn1 = document.getElementById("Bt1");


var span1 = document.getElementById("1");
var span2 = document.getElementById("2");
var span3 = document.getElementById("3");
var close1 = document.getElementById("myBtn2");
var close2 = document.getElementById("b2");
var close3 = document.getElementById("myBtn4");


btn1.onclick = function() {
    modal3.style.display = "block";
}

btn2.onclick = function() {
    modal1.style.display = "block";
}

btn3.onclick = function() {
    modal2.style.display = "block";
}

span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}


window.onclick = function(event) {
    if (event.target === modal1 || event.target === close1) {
        modal1.style.display = "none";
    }
    if (event.target === modal2 || event.target === close2) {
        modal2.style.display = "none";
    }
    if (event.target === modal3 || event.target === close3) {
        modal3.style.display = "none";
    }
}