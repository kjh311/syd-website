var activeNavLink = document.querySelectorAll(".no_subcontent");
var selectedNav = document.querySelectorAll(".selected_nav");
var navLink = document.querySelectorAll("#nav_section>.no_subcontent");
var navSection = document.getElementById("nav_section");
var homeButton = document.querySelectorAll("#nav_section>.no_subcontent:nth-child(1)>a");
var firstNavLink = document.querySelector(".no_subcontent:nth-child(1)>a");
var homeNavLi = document.querySelector(".no_subcontent:nth-child(1)>a");
var homeNav = document.querySelector(".no_subcontent:nth-child(1)");
var askNavLi = document.querySelector(".no_subcontent:nth-child(2)>a");
var prayNavLi = document.querySelector(".no_subcontent:nth-child(3)>a");
var playNavLi = document.querySelector(".no_subcontent:nth-child(4)>a");
var actNavLi = document.querySelector(".no_subcontent:nth-child(5)>a");
var learnNavLi = document.querySelector(".no_subcontent:nth-child(6)>a");
var joinNavLi = document.querySelector(".no_subcontent:nth-child(7)>a");
var donateNavLi = document.querySelector(".no_subcontent:nth-child(8)>a");
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var navbar = document.getElementById("mainnav");
var content = document.getElementById("content");

// var askSubLinks = "<ul><li><a href='/vision'>Our Vision</a></li></ul>";
// homeNav.appendChild(askSubLinks);


// TOOLTIPS:
homeNavLi.setAttribute('data-toggle', 'tooltip');
homeNavLi.setAttribute('title', 'Home Page');
homeNavLi.setAttribute('data-placement', 'top');

askNavLi.setAttribute('data-toggle', 'tooltip');
askNavLi.setAttribute('data-html', 'true');
askNavLi.setAttribute('delay', '3200');
askNavLi.setAttribute('title', 'Our Vision, Our People, Board of Directors, Clergy, Staff, Our Location, Directions, Join our Community, Contact Us');
askNavLi.setAttribute('data-placement', 'top');

prayNavLi.setAttribute('data-toggle', 'tooltip');
prayNavLi.setAttribute('title', 'Livestream, Participate, Sponsor an Oneg or Kiddush Luncheon, B-Mitzvah Process, Yahrzeits');
prayNavLi.setAttribute('data-placement', 'top');

playNavLi.setAttribute('data-toggle', 'tooltip');
playNavLi.setAttribute('title', 'TBT Committees, Sisterhood, Contact Sisterhood');
playNavLi.setAttribute('data-placement', 'top');

actNavLi.setAttribute('data-toggle', 'tooltip');
actNavLi.setAttribute('title', 'Social Action, Combate Homelessness, Fight Hunger, Racial Equality, Gun Responsibility, Immigrant Rights, Pride at TBT, Volunteer, Mitzvah Corp, Environmental Justice, Covid 19');
actNavLi.setAttribute('data-placement', 'top');

learnNavLi.setAttribute('data-toggle', 'tooltip');
learnNavLi.setAttribute('title', 'Lifelong Learning, Tots, Kids, Teens, Adults, B-Mitzvah Process');
learnNavLi.setAttribute('data-placement', 'top');

joinNavLi.setAttribute('data-toggle', 'tooltip');
joinNavLi.setAttribute('title', 'Join, Connect, Membership, Interest Groups, Judaica Shop');
joinNavLi.setAttribute('data-placement', 'top');

donateNavLi.setAttribute('data-toggle', 'tooltip');
donateNavLi.setAttribute('title', 'Donate to TBT');
donateNavLi.setAttribute('data-placement', 'top');

// homeNavLi.classList.add('tooltip');
// var toolTipText1 = "<span class='tooltiptext'>Tooltip text</span>";
// homeNavLi.appendChild(toolTipText1);


if ( viewportWidth > 767) {
    firstNavLink.innerHTML = '<img class="home-svg"  src="https://images.shulcloud.com/14479/uploads/home-icon-silhouette-blue.svg">';
    
    for(var i = 0; i < 8; i++){
        navLink[i].classList.add("hvr-underline-from-center");
    }
}

if ( viewportWidth < 767) { 
    firstNavLink.innerHTML += 'Home';
}



navbar = document.getElementById("mainnav");

// var bottomBorder = '<hr>';
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
            // navbar.style.display = 'none';
            // topNav.style.backgroundImage = "url('https://images.shulcloud.com/14479/uploads/greyBurger.png')";
        }
    }






// Dynamically add stuff in navbar
// DESKTOP:
if ( "onhashchange" in window  && window.screen.width > 767) {
    // window.onload = function() {


navbar.style.padding = "75px 0 0 0";

ul  = document.createElement("ul");
ul.setAttribute("id", "navbar-top-links");

navbar.appendChild(ul);

address = document.createElement("li");
address.setAttribute("id", "nav-address");
address.setAttribute("class", "navbar-top-links");

address.innerHTML = "15727 NE 4th Street • Bellevue, WA 98008 • (425) 603-9677";
// address.innerHTML = "'15727 NE 4th Street ' + <span class="d-none d-md-block"> + '•' + </span><br class="d-block d-md-none" /> + ' Bellevue, WA 98008 • (425) 603-9677'";
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
ul.appendChild(searchIcon);


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
    
    
    // temple_name_mobile.innerHTML "<h1>TEMPLE B'NAI TORAH</h1>";
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
            activeNavLink.classList.add('lightest-grey-background');
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
                activeNavLink.classList.add('lightest-grey-background');
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
                activeNavLink.classList.add('lightest-grey-background');
            }
            var selectedNavLink = document.querySelector(".no_subcontent:nth-child(3)");
            
            setTimeout(function(){
                selectedNavLink.classList.remove('hvr-underline-from-center');
            }, 1000);
// live
        } else if (current == '/live') {
          var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            var activeNavLink = document.querySelector(".no_subcontent:nth-child(4)");
            if (viewportWidth > 767) {
                setTimeout(function(){ 
                        activeNavLink.classList.add('bottom-border');
                    }, 500);
            } else {
                activeNavLink.classList.add('lightest-grey-background');
            }
            var selectedNavLink = document.querySelector(".no_subcontent:nth-child(4)");
            
            setTimeout(function(){
                selectedNavLink.classList.remove('hvr-underline-from-center');
            }, 1000);
    
// act        
        } else if (current == '/tikun-olam' || current =='/environmental-justice' || current =='/homelessness' || current == '/volunteer' || current == '/chavurot-2' || current == '/mitzvah-corps'  || current == '/tikun-olam-2' || current == '/fighting-hunger' || current == '/racial-equality'  || current == '/gun-responsibility' || current == '/immigrant-rights' || current == '/pride' || current == '/vaccine') {
          var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            var activeNavLink = document.querySelector(".no_subcontent:nth-child(5)");
            if (viewportWidth > 767) {
                setTimeout(function(){ 
                        activeNavLink.classList.add('bottom-border');
                    }, 500);
            } else {
                activeNavLink.classList.add('lightest-grey-background');
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
                activeNavLink.classList.add('lightest-grey-background');
            }
            var selectedNavLink = document.querySelector(".no_subcontent:nth-child(6)");
            
            setTimeout(function(){
                selectedNavLink.classList.remove('hvr-underline-from-center');
            }, 1000);
            
// join        
        } else if (current == '/community' || current == '/membership-form' || current == '/membership' || current == '/interest-groups'  || current == '/judaica' || current == '/sisterhood' || current == '/sisterhood-contact'  || current == '/chavurot') {
          var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            var activeNavLink = document.querySelector(".no_subcontent:nth-child(7)");
            if (viewportWidth > 767) {
                setTimeout(function(){ 
                        activeNavLink.classList.add('bottom-border');
                    }, 500);
            } else {
                activeNavLink.classList.add('lightest-grey-background');
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
                activeNavLink.classList.add('lightest-grey-background');
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



