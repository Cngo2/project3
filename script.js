function message(){
  function myEventFunction(){
    alert('Welcome to my Page!');
  }
  var a1 = document.getElementById("header");

  a1.addEventListener('click', myEventFunction);
  a1.addEventListener('click',function(){
  	console.log('Thanks for clicking!');
  	a1.style.background = 'rgb(199,217,7)';
  	a1.style.color = 'rgb(28,25,15)';
  });
}
window.addEventListener('load', message);