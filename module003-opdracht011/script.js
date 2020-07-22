let myBtn = document.getElementById ('mybutton');
let myBack = document.getElementById ('myBackground');

//element.addEventListener('click', function, useCaption)
myBtn.element.addEventListener('click', function() {
    alert("I am an alert box!")
});


myBack.element.addEventListener('click', function() {
    document.getElementsByClassName('blue-background').classList.add("red-background");
});