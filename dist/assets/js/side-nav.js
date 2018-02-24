window.addEventListener('load',function(){
    var menuicon = document.getElementById('menuicon');
    if(menuicon){
        //menuicon.addEventListener('click', openNav, false);
        menuicon.addEventListener('click', toggle_menu, true);
    }
});


function toggle_menu() {
    var sidenav = document.getElementById('mySidenav');
    var main_content = document.getElementById('main');
    if (sidenav.style.display === 'none') {
        sidenav.style.display = 'block';
        main_content.style.marginLeft = "250px";
    } else {
        sidenav.style.display = 'none';
        main_content.style.marginLeft = "0px";
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}