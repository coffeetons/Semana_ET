const hideJumbotron = document.getElementById("jumbo");
const hideIcon =document.getElementById("icon")
    
    function hideJumbo(){
        hideJumbotron.classList.toggle("window-out")
        // hideJumbotron.classList.remove("window")
        hideIcon.classList.toggle("window-out")
        // hideIcon.classList.remove("window")
        
    }