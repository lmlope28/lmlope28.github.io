// create event listener
let isShown = true;

document.getElementById("menu").addEventListener("click", hideShow);

    function hideShow() {

        let navStyleHideShow = document.getElementsByClassName('navStyle')[0];

        let content = document.getElementsByClassName('container-content')[0];

        

        if(isShown) {
            navStyleHideShow.style.display = "none";
            content.style.position = "absolute";
            content.style.left = "50px";
            content.style.width = "calc(100% - 50px)";
            isShown = false;
        }
        
        else{
            navStyleHideShow.style.display = "block";
            content.style.position = "absolute";
            content.style.left = "24vw";
            content.style.width = "calc(100% - 24vw)";
            isShown = true;
        }

        console.log("yay!")
    }