window.onload = function(){

    var navigation = document.getElementById('navbar__list');
navigation.addEventListener('click' , function() {
    event.preventDefault()
});

     document.getElementById('navhome').addEventListener('click', (event)=> {
       event.preventDefault();
       document.getElementById("myhome").scrollIntoView();
      });
      
      document.getElementById('navabout').addEventListener('click', (e)=> {
        e.preventDefault();
        document.getElementById("abouts").scrollIntoView();
      });

      document.getElementById("navhobbies").addEventListener('click',(e)=>{
        e.preventDefault();
        document.getElementById("hobbies").scrollIntoView();
      });

      document.getElementById('navcontact').addEventListener('click', (e)=> {
        e.preventDefault();
        document.getElementById("contacts").scrollIntoView();
      });
      
}