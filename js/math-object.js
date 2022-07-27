
var randomNum = Math.floor((Math.random() *18) +1);

var el =document.getElementById('intro');

el.innerHTML = '<h2>random number</h2><p>' +randomNum + '</p>';