window.onload = function(){

    var navigation = document.getElementById('navbar__list');
navigation.addEventListener('click' , function() {
    event.preventDefault()
});

     document.getElementById('navhome').addEventListener('click', (event)=> {
       event.preventDefault();
       document.getElementById("homes1").scrollIntoView();
      });
      
      document.getElementById('navabout').addEventListener('click', (e)=> {
        e.preventDefault();
        document.getElementById("abouts2").scrollIntoView();
      });

      document.getElementById("navhobbies").addEventListener('click',(e)=>{
        e.preventDefault();
        document.getElementById("hobbies3").scrollIntoView();
      });

      document.getElementById('navcontact').addEventListener('click', (e)=> {
        e.preventDefault();
        document.getElementById("contacts4").scrollIntoView();
      });
      
}
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};