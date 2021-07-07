var activeNavLink = document.querySelectorAll(".no_subcontent");
// var mainNav = document.getElementById('mainnav');
var selectedNav = document.querySelectorAll(".selected_nav");
var navLink = document.querySelectorAll("#nav_section>.no_subcontent");
var navSection = document.getElementById("nav_section");
var homeButton = document.querySelectorAll("#nav_section>.no_subcontent:nth-child(1)>a");
var firstNavLink = document.querySelector(".no_subcontent:nth-child(1)>a");
var homeNavLi = document.querySelector(".no_subcontent:nth-child(1)>a");
var homeNav = document.querySelector(".no_subcontent:nth-child(1)");
var askNavLi = document.querySelector(".no_subcontent:nth-child(2)>a");
var askNav = document.querySelector(".no_subcontent:nth-child(2)");
var prayNavLi = document.querySelector(".no_subcontent:nth-child(3)>a");
var playNavLi = document.querySelector(".no_subcontent:nth-child(4)>a");
var actNavLi = document.querySelector(".no_subcontent:nth-child(5)>a");
var learnNavLi = document.querySelector(".no_subcontent:nth-child(6)>a");
var joinNavLi = document.querySelector(".no_subcontent:nth-child(7)>a");
var donateNavLi = document.querySelector(".no_subcontent:nth-child(8)>a");
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var navbar = document.getElementById("mainnav");
var navSection = document.getElementById('nav_section');
var content = document.getElementById("content");


// NAVBAR DROPDOWNS:
//DESKTOP:

for(var i = 1; i < 7; i++){
    navLink[i].classList.add('drop-down');
    var dropdownContent = document.createElement('div');
    dropdownContent.setAttribute('class', 'dropdown-content');
    dropdownContent.setAttribute('id', 'dropdown-content-'+i);
    navLink[i].appendChild(dropdownContent);

}

for(var i = 0; i < 8; i++){
    navLink[i].classList.add('drop-down-'+i);
}

askNavLi.classList.add('dropbtn');
askNavLi.classList.add('dropbtn-1');
prayNavLi.classList.add('dropbtn');
prayNavLi.classList.add('dropbtn-2');
playNavLi.classList.add('dropbtn');
playNavLi.classList.add('dropbtn-3');
actNavLi.classList.add('dropbtn');
actNavLi.classList.add('dropbtn-4');
learnNavLi.classList.add('dropbtn');
learnNavLi.classList.add('dropbtn-5');
joinNavLi.classList.add('dropbtn');
joinNavLi.classList.add('dropbtn-6');

// if ( viewportWidth > 767) {


var askInner = document.getElementById('dropdown-content-1')
askInner.innerHTML = "<a href='/about-us'>About Us</a><a href='/vision'>Our Vision</a><a href='/our-people'>Our People</a><a href='/board'>Board of Directors</a><a href='/clergy'>Clergy</a><a href='/staff'>Staff</a><a href='/our-location'>Our Location</a><a href='/directions'>Directions</a><a href='/our-history'>Our History</a><a href='/membership-form'>Join our Community</a><a href='/contact-us'>Contact Us</a>";


var prayInner = document.getElementById('dropdown-content-2')
prayInner.innerHTML = "<a href='/worship'>Worship</a><a href='/livestream'>Livestream</a><a href='/participate'>Participate</a><a href='/oneg-kiddush'>Sponsor an Oneg or Kiddush Luncheon</a><a href='/bnai-mitzvah'>B-Mitzvah Process</a><a href='/yahrzeits'>Yahrzeits</a>";


var playInner = document.getElementById('dropdown-content-3')
playInner.innerHTML = "<a href='/live'>Live</a><a href='/chavurot-2'>TBT Committees</a><a href='/interest-groups'>Interest Groups</a><a href='/sisterhood'>Sisterhood</a>"


var actInner = document.getElementById('dropdown-content-4')
actInner.innerHTML = "<a href='/tikun-olam'>Social Action</a><a href='/homelessness'>Combat Homelessness</a><a href='/fighting-hunger'>Fight Hunger</a><a href='/racial-equality'>Racial Equality</a><a href='/gun-responsibility'>Gun Responsibility</a><a href='/immigrant-rights'>Immigrant Rights</a><a href='/pride'>Pride at TBT</a><a href='/mitzvah-corps'>Mitzvah Corp</a><a href='/environmental-justice'>Environmental Justice</a><a href='/vaccine'>Vaccine Awareness</a><a href='/volunteer'>Volunteer</a>";


var learnInner = document.getElementById('dropdown-content-5')
learnInner.innerHTML = "<a href='/learn'>Lifelong Learning</a><a href='/tots'>Tots</a><a href='/kids'>Kids</a><a href='/teens'>Teens</a><a  href='/adults'>Adults</a><a href='/bnai-mitzvah'>B-Mitzvah Process</a>"

var joinInner = document.getElementById('dropdown-content-6')
joinInner.innerHTML = "<a href='/community'>Community</a><a href='/membership-form'>Connect</a><a href='/membership'>Membership</a><a  href='/judaica'>Judaica Shop</a>"


// }


// MOBILE DROPDOWN:
if( viewportWidth < 767) {
    askInner.classList.add('dropdown-closed');
    prayInner.classList.add('dropdown-closed');
    playInner.classList.add('dropdown-closed');
    actInner.classList.add('dropdown-closed');
    learnInner.classList.add('dropdown-closed');
    joinInner.classList.add('dropdown-closed');
    
    var links = document.getElementsByClassName("dropbtn");
        for (var i = 0; i < links.length; i++) {
          links[i].removeAttribute("href");
          
        }
        
        var askLink = document.getElementsByClassName("dropbtn-1")[0];
        var prayLink = document.getElementsByClassName("dropbtn-2")[0];
        var playLink = document.getElementsByClassName("dropbtn-3")[0];
        var actLink = document.getElementsByClassName("dropbtn-4")[0];
        var learnLink = document.getElementsByClassName("dropbtn-5")[0];
        var joinLink = document.getElementsByClassName("dropbtn-6")[0];
        
        askLink.addEventListener("click", function(){
            if(askInner.classList.contains('dropdown-closed')){
                   askInner.classList.remove('dropdown-closed');
                   askInner.classList.add('dropdown-open');
            } else {
                 askInner.classList.remove('dropdown-open');
                 askInner.classList.add('dropdown-closed');
            }
            if(prayInner.classList.contains('dropdown-open')){
                prayInner.classList.remove('dropdown-open');
                prayInner.classList.add('dropdown-closed');
            }
             if(playInner.classList.contains('dropdown-open')){
                playInner.classList.remove('dropdown-open');
                playInner.classList.add('dropdown-closed');
            }
             if(actInner.classList.contains('dropdown-open')){
                actInner.classList.remove('dropdown-open');
                actInner.classList.add('dropdown-closed');
            }
             if(learnInner.classList.contains('dropdown-open')){
                learnInner.classList.remove('dropdown-open');
                learnInner.classList.add('dropdown-closed');
            }
             if(joinInner.classList.contains('dropdown-open')){
                joinInner.classList.remove('dropdown-open');
                joinInner.classList.add('dropdown-closed');
            }
          });
          
          prayLink.addEventListener("click", function(){
            if(prayInner.classList.contains('dropdown-closed')){
                   prayInner.classList.remove('dropdown-closed');
                   prayInner.classList.add('dropdown-open');
            } else {
                 prayInner.classList.remove('dropdown-open');
                 prayInner.classList.add('dropdown-closed');
            }
            if(askInner.classList.contains('dropdown-open')){
                askInner.classList.remove('dropdown-open');
                askInner.classList.add('dropdown-closed');
            }
             if(playInner.classList.contains('dropdown-open')){
                playInner.classList.remove('dropdown-open');
                playInner.classList.add('dropdown-closed');
            }
             if(actInner.classList.contains('dropdown-open')){
                actInner.classList.remove('dropdown-open');
                actInner.classList.add('dropdown-closed');
            }
             if(learnInner.classList.contains('dropdown-open')){
                learnInner.classList.remove('dropdown-open');
                learnInner.classList.add('dropdown-closed');
            }
             if(joinInner.classList.contains('dropdown-open')){
                joinInner.classList.remove('dropdown-open');
                joinInner.classList.add('dropdown-closed');
            }
          });
          
          playLink.addEventListener("click", function(){
            if(playInner.classList.contains('dropdown-closed')){
                   playInner.classList.remove('dropdown-closed');
                   playInner.classList.add('dropdown-open');
            } else {
                 playInner.classList.remove('dropdown-open');
                 playInner.classList.add('dropdown-closed');
            }
            if(askInner.classList.contains('dropdown-open')){
                askInner.classList.remove('dropdown-open');
                askInner.classList.add('dropdown-closed');
            }
             if(prayInner.classList.contains('dropdown-open')){
                prayInner.classList.remove('dropdown-open');
                prayInner.classList.add('dropdown-closed');
            }
             if(actInner.classList.contains('dropdown-open')){
                actInner.classList.remove('dropdown-open');
                actInner.classList.add('dropdown-closed');
            }
             if(learnInner.classList.contains('dropdown-open')){
                learnInner.classList.remove('dropdown-open');
                learnInner.classList.add('dropdown-closed');
            }
             if(joinInner.classList.contains('dropdown-open')){
                joinInner.classList.remove('dropdown-open');
                joinInner.classList.add('dropdown-closed');
            }
          });
          
          actLink.addEventListener("click", function(){
            if(actInner.classList.contains('dropdown-closed')){
                   actInner.classList.remove('dropdown-closed');
                   actInner.classList.add('dropdown-open');
            } else {
                 actInner.classList.remove('dropdown-open');
                 actInner.classList.add('dropdown-closed');
            }
            if(askInner.classList.contains('dropdown-open')){
                askInner.classList.remove('dropdown-open');
                askInner.classList.add('dropdown-closed');
            }
             if(playInner.classList.contains('dropdown-open')){
                playInner.classList.remove('dropdown-open');
                playInner.classList.add('dropdown-closed');
            }
             if(prayInner.classList.contains('dropdown-open')){
                prayInner.classList.remove('dropdown-open');
                prayInner.classList.add('dropdown-closed');
            }
             if(learnInner.classList.contains('dropdown-open')){
                learnInner.classList.remove('dropdown-open');
                learnInner.classList.add('dropdown-closed');
            }
             if(joinInner.classList.contains('dropdown-open')){
                joinInner.classList.remove('dropdown-open');
                joinInner.classList.add('dropdown-closed');
            }
          });
          
          learnLink.addEventListener("click", function(){
            if(learnInner.classList.contains('dropdown-closed')){
                   learnInner.classList.remove('dropdown-closed');
                   learnInner.classList.add('dropdown-open');
            } else {
                 learnInner.classList.remove('dropdown-open');
                 learnInner.classList.add('dropdown-closed');
            }
            if(askInner.classList.contains('dropdown-open')){
                askInner.classList.remove('dropdown-open');
                askInner.classList.add('dropdown-closed');
            }
             if(playInner.classList.contains('dropdown-open')){
                playInner.classList.remove('dropdown-open');
                playInner.classList.add('dropdown-closed');
            }
             if(prayInner.classList.contains('dropdown-open')){
                prayInner.classList.remove('dropdown-open');
                prayInner.classList.add('dropdown-closed');
            }
             if(actInner.classList.contains('dropdown-open')){
                actInner.classList.remove('dropdown-open');
                actInner.classList.add('dropdown-closed');
            }
             if(joinInner.classList.contains('dropdown-open')){
                joinInner.classList.remove('dropdown-open');
                joinInner.classList.add('dropdown-closed');
            }
          });
          
          joinLink.addEventListener("click", function(){
            if(joinInner.classList.contains('dropdown-closed')){
                   joinInner.classList.remove('dropdown-closed');
                   joinInner.classList.add('dropdown-open');
            } else {
                 joinInner.classList.remove('dropdown-open');
                 joinInner.classList.add('dropdown-closed');
            }
            if(askInner.classList.contains('dropdown-open')){
                askInner.classList.remove('dropdown-open');
                askInner.classList.add('dropdown-closed');
            }
             if(playInner.classList.contains('dropdown-open')){
                playInner.classList.remove('dropdown-open');
                playInner.classList.add('dropdown-closed');
            }
             if(prayInner.classList.contains('dropdown-open')){
                prayInner.classList.remove('dropdown-open');
                prayInner.classList.add('dropdown-closed');
            }
             if(learnInner.classList.contains('dropdown-open')){
                learnInner.classList.remove('dropdown-open');
                learnInner.classList.add('dropdown-closed');
            }
             if(actInner.classList.contains('dropdown-open')){
                actInner.classList.remove('dropdown-open');
                actInner.classList.add('dropdown-closed');
            }
          });
    
    
}

// for(var i = 0; i < 8; i++){
//         navLink[i].classList.add("hvr-underline-from-center");
//     }


// var askSubMenu = document.createElement('div');

// askSubMenu.setAttribute('class', 'ask-sub-menu');
// askSubMenu.setAttribute('class', 'sub-menu');

// askSubMenu.setAttribute('class', 'sub-menu-collapse');
// .sub-menu-collapse
// askSubMenu.setAttribute('class', 'd-flex');
// askSubMenu.setAttribute('class', 'flex-colunn');
// askSubMenu.setAttribute('id', 'ask-sub-menu');
// askSubMenu.innerHTML = "<ul class='sub-menu-ul' id='ask-sub-menu-ul><li class='sub-menu-li'><a href='/vision' class='sub-menu-a'>Our Vision</a></li></ul>"
// askSubMenu.innerHTML = "<a href='/vision' class='sub-menu-a'>Our Vision</a>"
// var askSubMenuInnerHTML = "<ul class='sub-menu-ul' id='ask-sub-menu-ul'></ul>"
// askSubMenu.innerHTML = askSubMenuInnerHTML;
// var askLi = "<li class='sub-menu-li'>"
// askSubMenuInnerHTML.appendChild(askLi);
// var askLink1 = "<a href='/vision' class='sub-menu-a'>Our Vision</a>"
// askLi.innerHTML = askLink1;
// askNav.appendChild(askSubMenu);

// askNavLi.onmouseover = function(){
//     askSubMenu.classList.remove('sub-menu-collapse')
// };
// askNavLi.onmouseout = function(){ 
//     askSubMenu.classList.add('sub-menu-collapse')
// };

// var askSubMenu = "<div class='ask-sub-menu sub-menu' id='ask-sub-menu'><ul class='sub-menu-ul' id='ask-sub-menu-ul><li class='sub-menu-li'><a href='/vision' class='sub-menu-a'>Our Vision</a></li></ul></div>"



// navbar.classList.add('navbar')
// navSection.classList.add('navbar-nav')
// askNav.classList.add('nav-item');
// askNav.classList.add('dropdown');
// askNavLi.classList.add('nav-link')
// askNavLi.classList.add('dropdown-toggle')
// askNavLi.setAttribute('id', 'navbarDropdown')
// askNavLi.setAttribute('role', 'button')
// askNavLi.setAttribute('data-toggle', 'dropdown')
// askNavLi.setAttribute('aria-haspopup', 'true')
// askNavLi.setAttribute('aria-expanded', 'false')
// var dropMenu = document.createElement('div');
// dropMenu.setAttribute('class', 'dropdown-menu');
// dropMenu.setAttribute('aria-labelledby', 'navbarDropdown');
// askNavLi.appendChild(dropMenu)
// dropMenu.innerHTML = "<a class='dropdown-item' href='#'>Action</a>"




// var askSubMenu = "<div class='dropdown-menu' aria-labelledby='navbarDropdown'><a class='dropdown-item' href='#'>Action</a><a class='dropdown-item' href='#'>Another action</a><div class='dropdown-divider'></div><a class='dropdown-item' href='#'>Something else here</a></div>"
// askNavLi.appendChild(askSubMenu);

// <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //   Dropdown
        // </a>


// TOOLTIPS:
// homeNavLi.setAttribute('data-toggle', 'tooltip');
// homeNavLi.setAttribute('title', 'Home Page');
// homeNavLi.setAttribute('data-placement', 'top');

// askNavLi.setAttribute('data-toggle', 'tooltip');
// askNavLi.setAttribute('data-html', 'true');
// askNavLi.setAttribute('delay', '3200');
// askNavLi.setAttribute('title', 'Our Vision, Our People, Board of Directors, Clergy, Staff, Our Location, Directions, Join our Community, Contact Us');
// askNavLi.setAttribute('data-placement', 'top');

// prayNavLi.setAttribute('data-toggle', 'tooltip');
// prayNavLi.setAttribute('title', 'Livestream, Participate, Sponsor an Oneg or Kiddush Luncheon, B-Mitzvah Process, Yahrzeits');
// prayNavLi.setAttribute('data-placement', 'top');

// playNavLi.setAttribute('data-toggle', 'tooltip');
// playNavLi.setAttribute('title', 'TBT Committees, Sisterhood, Contact Sisterhood');
// playNavLi.setAttribute('data-placement', 'top');

// actNavLi.setAttribute('data-toggle', 'tooltip');
// actNavLi.setAttribute('title', 'Social Action, Combate Homelessness, Fight Hunger, Racial Equality, Gun Responsibility, Immigrant Rights, Pride at TBT, Volunteer, Mitzvah Corp, Environmental Justice, Covid 19');
// actNavLi.setAttribute('data-placement', 'top');

// learnNavLi.setAttribute('data-toggle', 'tooltip');
// learnNavLi.setAttribute('title', 'Lifelong Learning, Tots, Kids, Teens, Adults, B-Mitzvah Process');
// learnNavLi.setAttribute('data-placement', 'top');

// joinNavLi.setAttribute('data-toggle', 'tooltip');
// joinNavLi.setAttribute('title', 'Join, Connect, Membership, Interest Groups, Judaica Shop');
// joinNavLi.setAttribute('data-placement', 'top');

// donateNavLi.setAttribute('data-toggle', 'tooltip');
// donateNavLi.setAttribute('title', 'Donate to TBT');
// donateNavLi.setAttribute('data-placement', 'top');





if ( viewportWidth > 767) {
    firstNavLink.innerHTML = '<img class="home-svg"  src="https://images.shulcloud.com/14479/uploads/home-icon-silhouette-blue.svg">';
    
    // for(var i = 0; i < 8; i++){
    //     navLink[i].classList.add("hvr-underline-from-center");
    // }
}

if ( viewportWidth < 767) { 
    firstNavLink.innerHTML += 'Home';
}



navbar = document.getElementById("mainnav");

var blueHr = document.createElement("hr");
blueHr.setAttribute("class", "blue-hr");

content.appendChild(blueHr);


    // close mobile navbar on click
    document.addEventListener('click', function(event) {
        var isNavBar = navbar.contains(event.target);
        var isTopNav = topnav.contains(event.target);

        if(!isNavBar && !isTopNav){
            navbar.style.display = "none";
        }
    });
    
    
// Clicking on dropdown button:
    var topNav = document.getElementById('topnav');

    topNav.onclick = function() {
        if(!topNav.classList.contains('current')) {
            navbar = document.getElementById("mainnav");
            navbar.classList.add('bounce-in')
        } else {

        }
    }



// Dynamically add stuff in navbar
// DESKTOP:
if ( "onhashchange" in window  && window.screen.width > 767) {


navbar.style.padding = "75px 0 0 0";

ul  = document.createElement("ul");
ul.setAttribute("id", "navbar-top-links");

navbar.appendChild(ul);

address = document.createElement("li");
address.setAttribute("id", "nav-address");
address.setAttribute("class", "navbar-top-links");

address.innerHTML = "15727 NE 4th Street • Bellevue, WA 98008 • (425) 603-9677";

ul.appendChild(address);

facebook = document.createElement("a");
facebook.setAttribute("href", "https://www.facebook.com/TempleBnaiTorah/");
facebook.setAttribute("id", "facebook-nav-icon");
facebook.setAttribute("class", "navbar-top-links");
facebook.innerHTML= '<li><i class="fa fa-facebook-official" style="font-size:30px"></i></li>';
ul.appendChild(facebook);

youtube = document.createElement("a");
youtube.setAttribute("href", "https://www.youtube.com/channel/UCAI8ituiK8qcOwQIdV7wVdw");
youtube.setAttribute("id", "youtube-nav-icon");
youtube.setAttribute("class", "navbar-top-links");
youtube.innerHTML= '<li><i class="fa fa-youtube" style="font-size:30px"></i></li>';
ul.appendChild(youtube);

events = document.createElement("a");
events.setAttribute("href", "/events");
events.setAttribute("id", "events-nav");
events.setAttribute("class", "navbar-top-links-text");
events.innerHTML= 'Events';
ul.appendChild(events);


myAccountButton = document.createElement("a");
myAccountButton.setAttribute("href", "/member");
myAccountButton.setAttribute("id", "my-account-nav");
myAccountButton.setAttribute("class", "navbar-top-links-text");
myAccountButton.innerHTML= 'My Account';
ul.appendChild(myAccountButton);

searchIcon = document.createElement('li');
searchIcon.setAttribute('class', 'search-container');
searchIcon.innerHTML = '<button onclick="openSearchBar()" class="search-submit-button" ><i class="fa fa-search fa-search-1"></i></button>';
// ul.appendChild(searchIcon);


templeLogoDiv = document.createElement('div');
templeLogoDiv.setAttribute('class', 'temple-logo-div');
navbar.appendChild(templeLogoDiv);


}


// MOBILE:
if ( "onhashchange" in window  && window.screen.width < 767) {
    temple_name_mobile = document.createElement('div');
    temple_name_mobile.setAttribute('id', "temple_name_mobile_div")
    var templeNameP = document.createElement('p');
    templeNameP.setAttribute('class', 'temple-name-p');
    templeNameP.innerHTML = "TEMPLE B'NAI TORAH";
    temple_name_mobile.appendChild(templeNameP);
    
    
    content.appendChild(temple_name_mobile);
    
    
    // add search:
    searchMobileLi = document.createElement('li');
    searchMobileLi.setAttribute('class', 'search-mobile-li no_subcontent');
    searchMobileLi.innerHTML = '<a href="#" onclick="openSearchBar()" class="search-mobile-button">Search</a>';
    navSection.appendChild(searchMobileLi);
}



sideBarLeft = document.getElementById('sidebar_left');
searchBar = document.createElement('div');
searchBar.setAttribute('class', 'search-bar search-bar-small d-flex justify-content-center');
searchBar.innerHTML='<form action="/search" method="GET" role="search" class=" d-flex justify-content-center align-items-center"><input id="search-input" class="search-input search-input-small" autocomplete="off" name="q" placeholder="Search this site.." title="Enter search here type="text"><button id="search-submit-button-bottom"  class="search-submit-button-bottom search-button-small" type="submit"><i class="fa fa-search"></i></button></form>'
sideBarLeft.appendChild(searchBar);


searchInput = document.getElementById('search-input');
searchSubmit = document.getElementById('search-submit-button-bottom');


function openSearchBar() {

if(searchBar.classList.contains('search-bar-small')) {
    navbar.style.display = 'none';
    
        searchBar.classList.remove('search-bar-small');
        searchBar.classList.add('search-bar-big');
        searchInput.classList.remove('search-input-small');
        searchInput.classList.add('search-input-big');
        searchSubmit.classList.remove('search-button-small');
        searchSubmit.classList.add('search-button-big');
        searchInput.focus();
    } else {
        searchBar.classList.remove('search-bar-big');
        searchBar.classList.add('search-bar-small');
        searchInput.classList.remove('search-input-big');
        searchInput.classList.add('search-input-small');
        searchSubmit.classList.add('search-button-small');
        searchSubmit.classList.remove('search-button-big');
    }
}







// #nav_section>.no_subcontent:nth-child(3)>a 

// PAGE SPECIFIC:
    var current = window.location.pathname;
// homepage
    if (current == '/') {
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        var activeNavLink = document.querySelector(".no_subcontent:nth-child(1)");
        
        if (viewportWidth > 767) {
            firstNavLink.classList.add('filter-bright');
            setTimeout(function(){ 
                    activeNavLink.classList.add('bottom-border');
                }, 500);
        } else {
            // activeNavLink.classList.add('lightest-grey-background');
            activeNavLink.classList.remove('bottom-border');
        }
        var selectedNavLink = document.querySelector(".no_subcontent:nth-child(1)");
        
        setTimeout(function(){
            selectedNavLink.classList.remove('hvr-underline-from-center');
        }, 1000);
        
// //   ask     
        } else if (current == '/about-us' || current == '/vision' || current == '/our-people' || current == '/board'  || current == '/clergy' || current == '/staff' || current == '/our-location' || current == '/kashrut-policy' || current == '/rosen-ritt-library' || current == '/directions' || current == '/our-history' || current == '/wall-of-connections' || current == '/join-our-community' || current == '/visitors' || current == '/contact-us') {
          var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            var activeNavLink = document.querySelector(".no_subcontent:nth-child(2)");
            if (viewportWidth > 767) {
                setTimeout(function(){ 
                        activeNavLink.classList.add('bottom-border');
                    }, 500);
            } else {
                // activeNavLink.classList.add('lightest-grey-background');
                // activeNavLink.declaration.setProperty("color", "white", "important")
                activeNavLink.classList.remove('bottom-border');
            }
            var selectedNavLink = document.querySelector(".no_subcontent:nth-child(2)");
            
            setTimeout(function(){
                selectedNavLink.classList.remove('hvr-underline-from-center');
            }, 1000);
            
// //  pray           
        } else if (current == '/worship' || current == '/services' || current == '/tefilab' || current == '/shabbat-in-the-park'  || current == '/shabbat-nefesh' || current == '/livestream' || current == '/participate' || current == '/oneg-kiddush' || current == '/bnai-mitzvah' || current == '/yahrzeits') {
          var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            var activeNavLink = document.querySelector(".no_subcontent:nth-child(3)");
            if (viewportWidth > 767) {
                setTimeout(function(){ 
                        activeNavLink.classList.add('bottom-border');
                    }, 500);
            } else {
                // activeNavLink.classList.add('lightest-grey-background');
                activeNavLink.classList.remove('bottom-border');
            }
            var selectedNavLink = document.querySelector(".no_subcontent:nth-child(3)");
            
            setTimeout(function(){
                selectedNavLink.classList.remove('hvr-underline-from-center');
            }, 1000);
// play
        } else if (current == '/live' || current == '/sisterhood' || current == '/sisterhood-contact' || current == '/interest-groups' || current == '/chavurot-2') {
          var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            var activeNavLink = document.querySelector(".no_subcontent:nth-child(4)");
            if (viewportWidth > 767) {
                setTimeout(function(){ 
                        activeNavLink.classList.add('bottom-border');
                    }, 500);
            } else {
                // activeNavLink.classList.add('lightest-grey-background');
                activeNavLink.classList.remove('bottom-border');
            }
            var selectedNavLink = document.querySelector(".no_subcontent:nth-child(4)");
            
            setTimeout(function(){
                selectedNavLink.classList.remove('hvr-underline-from-center');
            }, 1000);
    
// act        
        } else if (current == '/tikun-olam' || current =='/environmental-justice' || current =='/homelessness' || current == '/volunteer'  || current == '/mitzvah-corps'  || current == '/tikun-olam-2' || current == '/fighting-hunger' || current == '/racial-equality'  || current == '/gun-responsibility' || current == '/immigrant-rights' || current == '/pride' || current == '/vaccine') {
          var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            var activeNavLink = document.querySelector(".no_subcontent:nth-child(5)");
            if (viewportWidth > 767) {
                setTimeout(function(){ 
                        activeNavLink.classList.add('bottom-border');
                    }, 500);
            } else {
                // activeNavLink.classList.add('lightest-grey-background');
                // actNavLi.classList.add('dark-blue');
                // activeNavLink.style.color = "blue";
                // actNavLi.style.color = "blue";
                // askNavLi.classList.add('brightness-filter');
                activeNavLink.classList.remove('bottom-border');
            }
            var selectedNavLink = document.querySelector(".no_subcontent:nth-child(5)");
            
            setTimeout(function(){
                selectedNavLink.classList.remove('hvr-underline-from-center');
            }, 1000);
            
// learn        
        } else if (current == '/learn' || current == '/tots' || current == '/kids' || current == '/teens'  || current == '/adults') {
          var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            var activeNavLink = document.querySelector(".no_subcontent:nth-child(6)");
            if (viewportWidth > 767) {
                setTimeout(function(){ 
                        activeNavLink.classList.add('bottom-border');
                    }, 500);
            } else {
                // activeNavLink.classList.add('lightest-grey-background');
                activeNavLink.classList.remove('bottom-border');
            }
            var selectedNavLink = document.querySelector(".no_subcontent:nth-child(6)");
            
            setTimeout(function(){
                selectedNavLink.classList.remove('hvr-underline-from-center');
            }, 1000);
            
// join        
        } else if (current == '/community' || current == '/membership-form' || current == '/membership'  || current == '/judaica'  || current == '/chavurot') {
          var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            var activeNavLink = document.querySelector(".no_subcontent:nth-child(7)");
            if (viewportWidth > 767) {
                setTimeout(function(){ 
                        activeNavLink.classList.add('bottom-border');
                    }, 500);
            } else {
                // activeNavLink.classList.add('lightest-grey-background');
                activeNavLink.classList.remove('bottom-border');
            }
            var selectedNavLink = document.querySelector(".no_subcontent:nth-child(7)");
            
            setTimeout(function(){
                selectedNavLink.classList.remove('hvr-underline-from-center');
            }, 1000);

// contribute        
        } else if (current == '/contribute') {
          var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            var activeNavLink = document.querySelector(".no_subcontent:nth-child(8)");
            if (viewportWidth > 767) {
                setTimeout(function(){ 
                        activeNavLink.classList.add('bottom-border');
                    }, 500);
            } else {
                // activeNavLink.classList.add('lightest-grey-background');
                activeNavLink.classList.remove('bottom-border');
            }
            var selectedNavLink = document.querySelector(".no_subcontent:nth-child(8)");
            
            setTimeout(function(){
                selectedNavLink.classList.remove('hvr-underline-from-center');
            }, 1000);
            
    }




// ANIMATIONS:
// Green Sock Animation:
gsap.registerPlugin(ScrollTrigger);



gsap.from(".blue-wave-link", {
//   start: "bottom 50%",
  duration:1, 
  opacity:0, 
  ease: "none", 
  y:15,
  stagger: 0.2,
    scrollTrigger: {
      trigger:".blue-wave-link",
      start: 'top top+=700',
      markers:false
    }
}) 



gsap.from(".google-calendar", {
  duration:1, 
  opacity:0, 
  ease: "none", 
  x:100,
    scrollTrigger: {
      trigger:".google-calendar",
      start: 'top top+=400',
      markers:false
    }
}) 

gsap.from(".candle-link", {
  duration:1, 
  opacity:0, 
  ease: "none", 
  stagger: 0.02,
    scrollTrigger: {
      trigger:".candle-link",
      start: 'top top+=400',
      markers:false
    }
}) 

gsap.from(".stagger-animate", {
  duration:1, 
  opacity:0, 
  ease: "none", 
  stagger: 0.2,
    scrollTrigger: {
      trigger:".stagger-animate",
      start: 'top top+=500',
      markers:false
    }
}) 

gsap.from(".social-link-div", {
  duration:1, 
  opacity:0, 
  ease: "none", 
  stagger: 0.2,
    scrollTrigger: {
      trigger:".social-link-div",
      markers:false
    }
}) 

gsap.from(".cloud-links-ul", {
  duration:0.5, 
  opacity:0, 
  ease: "none", 
  y:-30,
    scrollTrigger: {
      trigger:".cloud-links-ul",
      start: 'top top+=500',
      markers:false
    }
}) 



// background-image
gsap.from(".background-image", {
  duration:0.5, 
  opacity:0, 
  ease: "none", 
  x:-30,
    scrollTrigger: {
      trigger:".background-image",
      start: 'top top+=500',
      markers:false
    }
}) 



gsap.from(".link-wrapper-wrapper", {
    
  duration:0.5, 
  opacity:0, 
  ease: "none", 
  x:-30,
    scrollTrigger: {
      trigger:".link-wrapper-wrapper",
      start: 'top top+=400',
      markers:false
    }
}) 



// NAVBAR DROPDOWN
// navbar.classList.add('collapse');
// navbar.classList.add('navbar-collapse');
// navSection.classList.add('navbar-nav');
// navSection.classList.add('mr-auto');
// var askNav = document.querySelectorAll("#nav_section>.no_subcontent");
// var prayNav = document.querySelector(".no_subcontent:nth-child(3)");
// var playNav = document.querySelector(".no_subcontent:nth-child(4)");
// var actNav = document.querySelector(".no_subcontent:nth-child(5)");
// var learnNav = document.querySelector(".no_subcontent:nth-child(6)");
// var joinNav = document.querySelector(".no_subcontent:nth-child(7)");

// askNavLi.classList.add('dropdown');
// askNavLi

// askNav.classList.add('dropdown');
// for(var i =0; i < askNav.length; i++){
//     navLink.classList.add('nav-item');
//     console.log('add class nav-item')
// }

// window.onload = function() {
// var navLink = document.getElementsByClassName("no_subcontent"),

//     // var buttons = document.getElementsByClassName("buttonSubmit"),
//         len = navLink !== null ? navLink.length : 0,
//         i = 0;
//     for(i; i < len; i++) {
//         navLink[i].className += "nav-item"; 
//     }
// }


// prayNav.classList.add('dropdown');

// <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>


// var askSubMenu = "<div class='ask-sub-menu sub-menu' id='ask-sub-menu'><ul class='sub-menu-ul' id='ask-sub-menu-ul><li class='sub-menu-li'><a href='/vision' class='sub-menu-a'>Our Vision</a></li></ul></div>"



