var activeNavLink = document.querySelectorAll(".no_subcontent");
var selectedNav = document.querySelectorAll(".selected_nav");
var navLink = document.querySelectorAll("#nav_section>.no_subcontent");
var navSection = document.getElementById("nav_section");
var homeButton = document.querySelectorAll("#nav_section>.no_subcontent:nth-child(1)>a");
var firstNavLink = document.querySelector(".no_subcontent:nth-child(1)>a");
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var navbar = document.getElementById("mainnav");
var content = document.getElementById("content");


if ( viewportWidth > 767) {
    firstNavLink.innerHTML = '<img class="home-svg"  src="https://images.shulcloud.com/14479/uploads/home-icon-silhouette-blue.svg">';
    
    for(var i = 0; i < 7; i++){
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
            // navbar.classList.remove("bounceInDown");
            // navbar.classList.add("bounceOut");
        }
    });
    
    
// Clicking on dropdown button:
    var topNav = document.getElementById('topnav');
    // topNav.style.backgroundImage = "url('https://images.shulcloud.com/14479/uploads/greyBurger.png')";
    // topNav.innerHTML = '<button class="drop-down-menu" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu"><svg width="100" height="100" viewBox="0 0 100 100"><path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" /><path class="line line2" d="M 20,50 H 80" /><path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" /></svg></button>';
    
    topNav.onclick = function() {
        if(!topNav.classList.contains('current')) {
        // if(navbar.style.display === 'none';) {
            // alert('current!');
            // topNav.style.backgroundImage="url('https://images.shulcloud.com/14479/uploads/greyX.png')";
            navbar = document.getElementById("mainnav");
            // navbar.style.zIndex = "500";
            // navbar.classList.remove('bounce-out')
            // navbar.style.display = "block";
            navbar.classList.add('bounce-in')
            // topNav.style.backgroundImage = "url('https://images.shulcloud.com/14479/uploads/greyX.png')";
            
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

// templeLogo = document.createElement('img');
// templeLogo.setAttribute('class', 'temple-logo-img');
// templeLogo.setAttribute('src', 'https://images.shulcloud.com/14479/uploads/logo-original.png');
// navbar.appendChild(templeLogo);

// templeSVG = document.createElement('img');
// templeSVG.setAttribute('class', 'temple-logo-SVG');
// templeSVG.setAttribute('src', 'https://images.shulcloud.com/14479/uploads/OldLogoSVG.svg');
// navbar.appendChild(templeSVG);

searchIcon = document.createElement('li');
searchIcon.setAttribute('class', 'search-container');
// searchIcon.innerHTML = '<a href="/search" class="search-submit-button" ><i class="fa fa-search"></i></a>';
searchIcon.innerHTML = '<button onclick="openSearchBar()" class="search-submit-button" ><i class="fa fa-search"></i></button>';
// <form action="" onsubmit="myFunction()"><input class="search-input type="text" placeholder="Search.." name="search"></form>

// searchbar.appendChild(searchBarForm);
// searchbarButton = '';
// searchBarForm.appendChile(searchbarButton);
// searchBarFontAwesome = '';
// searchbarButton.appendChile(searchBarFontAwesome);
ul.appendChild(searchIcon);
// ul.appendChild(searchBar);

templeLogoDiv = document.createElement('div');
templeLogoDiv.setAttribute('class', 'temple-logo-div');
// templeLogoDiv.setAttribute('src', 'https://images.shulcloud.com/14479/uploads/OldLogoSVG.svg');
navbar.appendChild(templeLogoDiv);


//   <div class="search-container">
//     <form action="/action_page.php">
//       <input type="text" placeholder="Search.." name="search">
//       <button type="submit"><i class="fa fa-search"></i></button>
//     </form>
//   </div>

// sideBarLeft = document.getElementById('sidebar_left');
// searchBar = document.createElement('div');
// searchBar.setAttribute('class', 'search-bar search-bar-small');
// searchBar.innerHTML = '<form action="" onsubmit="searchComingSoon()" class="d-flex flex-column justify-content-center align-items-center"><span><input id="search-input" class="search-input search-input-small type="text" placeholder="Search this site.." name="search"><button  class="search-submit-button" type="submit"><i class="fa fa-search"></i></button></span></form>';
// sideBarLeft.appendChild(searchBar);

// templeLogoDiv = document.createElement('div');
// templeLogoDiv.setAttribute('class', 'temple-logo-div');
// // templeLogoDiv.setAttribute('src', 'https://images.shulcloud.com/14479/uploads/OldLogoSVG.svg');
// navbar.appendChild(templeLogoDiv);
// searchInput = document.getElementById('search-input');

// function openSearchBar() {

// if(searchBar.classList.contains('search-bar-small')) {
//         searchBar.classList.remove('search-bar-small');
//         searchBar.classList.add('search-bar-big');
//         searchInput.classList.remove('search-input-small');
//         searchInput.classList.add('search-input-big');
//     } else {
//         searchBar.classList.remove('search-bar-big');
//         searchBar.classList.add('search-bar-small');
//         searchInput.classList.remove('search-input-big');
//         searchInput.classList.add('search-input-small');
//     }
// }

// function searchComingSoon(event) {

//     alert('Search Coming Soon!');
//         event.preventDefault();
// }



// ANIMATED TREE:
// logoLink = document.createElement("div");
// logoLink.setAttribute("id", "nav-logo");
// logoLink.innerHTML = '<iframe  class="brand-logo-iframe" id="brand-logo-iframe" loop="false" src="https://kjh311.github.io/demo/" title="#"></iframe>';
// navbar.appendChild(logoLink);

// TEMPLE NAME NAVBAR:
// templeNameDesktop = document.createElement("div");
// templeNameDesktop.setAttribute("id", "temple-name-desktop");
// templeNameDesktop.innerHTML = '<iframe  id="temple-name-desktop-animation" loop="false"  src="https://kjh311.github.io/Temple_Name_Desktop_Animation/" title="#"></iframe>';
// navbar.appendChild(templeNameDesktop);

// svg = document.createElement('div');
// svg.setAttribute("id", "hebrew-text-div");
// svg.innerHTML = '<svg id="hebrew-text"  xmlns="http://www.w3.org/2000/svg"><image href="https://images.shulcloud.com/14479/uploads/Hebrew.svg"/></svg>';
// navbar.appendChild(svg);

}

// if ( viewportWidth < 1000 && viewportWidth > 768) { 
//     address.innerHTML = "<p class='d-flex justify-content-center flex-column nav-address-mobile'>15727 NE 4th Street<br>'Bellevue, WA 98008<br>(425) 603-9677</p>";
//     ul.appendChild(address);
// }


// MOBILE:
if ( "onhashchange" in window  && window.screen.width < 767) {
    temple_name_mobile = document.createElement('div');
    temple_name_mobile.setAttribute('id', "temple_name_mobile_div")
    // temple_name_moible.innerHTML = '<iframe style="width: 90vw; height: 50px;"  id="temple-name-mobile-animation" loop="false"  src="https://kjh311.github.io/Temple_Name_Mobile/" title="#"></iframe>';
    // temple_name_mobile.innerHTML = '<iframe style="width: 90vw; height: 50px;"  id="temple-name-mobile-animation" loop="false"  src="https://kjh311.github.io/demo/" title="#"></iframe>';
    temple_name_mobile.innerHTML = '<iframe style="width: 90vw; height: 50px;"  id="temple-name-mobile-animation" loop="false"  src="https://kjh311.github.io/Temple_Name_Mobile/" title="#"></iframe>';
    content.appendChild(temple_name_mobile);
    
    
    
    // add search:
    searchMobileLi = document.createElement('li');
    searchMobileLi.setAttribute('class', 'search-mobile-li no_subcontent');
    searchMobileLi.innerHTML = '<a href="#" onclick="openSearchBar()" class="search-mobile-button">Search</a>';
    navSection.appendChild(searchMobileLi);
    
    // Mobile Drop Down Button Change on click:
    // mainnav = document.getElementById('top-nav');
    // topNav = document.getElementById('topnav');
    
    // if (navbar.classList.contains('thatClass')))
    // var displayValue = navbar.style.display;
    // if (displayValue === "block") {
    //     topNav.setAttribute('href', 'https://www.vhv.rs/dpng/d/487-4871907_grey-x-icon-png-transparent-png.png');
    // }
    
    // topNav.addEventListener('click', function(event) {


    //     if(navbar.style.display = "none"){
            
    //         // alert('none!');
    //     } else {
    //         // alert('else!');
    //     }
    // });
    
    
    //     searchMobileLi.addEventListener('click', function(event) {
    //     var isNavBar = navbar.contains(event.target);
    //     var isTopNav = topnav.contains(event.target);

    //     if(!isNavBar && !isTopNav){
    //         navbar.style.display = "none";
    //         // navbar.classList.remove("bounceInDown");
    //         // navbar.classList.add("bounceOut");
    //     }
    // });
}



sideBarLeft = document.getElementById('sidebar_left');
searchBar = document.createElement('div');
searchBar.setAttribute('class', 'search-bar search-bar-small');
// googleSearchCode = "<script async src='https://cse.google.com/cse.js?cx=eeeb731488f7fccf2'></script><div class='gcse-search'></div>"
// searchBar.innerHTML = '<form action="/search" method="GET" role="search class="d-flex flex-column justify-content-center align-items-center"><span><input id="search-input" class="search-input search-input-small type="text" placeholder="Search this site.." name="search"><button  class="search-submit-button" type="submit"><i class="fa fa-search"></i></button></span></form>';
// searchBar.innerHTML = '<script async src="https://cse.google.com/cse.js?cx=eeeb731488f7fccf2"></script><div class="gcse-search"></div>'
// searchBar.innerHTML = '<script async src="https://cse.google.com/cse.js?cx=6cb1f0e9022071fea"></script><div class="gcse-search"></div>'
searchBar.innerHTML='<form action="/search" method="GET" role="search"><input id="search-input" class="search-input search-input-small" autocomplete="off" name="q" placeholder="Search this site.." title="Enter search here type="text"><button  class="search-submit-button" type="submit"><i class="fa fa-search"></i></button></form>'
sideBarLeft.appendChild(searchBar);


searchInput = document.getElementById('search-input');

function openSearchBar() {

if(searchBar.classList.contains('search-bar-small')) {
    navbar.style.display = 'none';
    
        searchBar.classList.remove('search-bar-small');
        searchBar.classList.add('search-bar-big');
        searchInput.classList.remove('search-input-small');
        searchInput.classList.add('search-input-big');
        searchInput.focus();
    } else {
        searchBar.classList.remove('search-bar-big');
        searchBar.classList.add('search-bar-small');
        searchInput.classList.remove('search-input-big');
        searchInput.classList.add('search-input-small');
    }
}

// function searchComingSoon(event) {

//     alert('Search Coming Soon!');
//         event.preventDefault();
// }

// FOOTER:
// .footer_inner>.global_terms_links>a
// var globalTermLinks1 = document.getElementByClassName('global_terms_links>a')[0];
// var globalTermLinks2 = document.getElementByClassName('global_terms_links>a')[1];

// var globalTermsLinks = document.getElementsByClassName("global_terms_links");
// for (var i = 0; i < globalTermsLinks.childNodes.length; i++) {
// //   console.log(globalTermsLinks.item(i));
// //   globalTermsLinks.item(i).classList.add('hover-grow-no-shadow');

// //   globalTermsLinks:nth-child(i).classList.add('hover-grow-no-shadow');

// console.log(globalTermsLinks.item(i));
// console.log(globalTermsLinks[i]);
// console.log(globalTermsLinks:nth-child(i));
// }

//   var className = document.getElementsByClassName('demo');
//   for(var index=0;index < className.length;index++){
//       console.log(className[index].innerHTML);
//   }

// PAGE SPECIFIC:

//     var current = window.location.pathname;
// // homepage
//     if (current == '/') {
//         var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//         var activeNavLink = document.querySelector(".no_subcontent:nth-child(1)");
        
//         if (viewportWidth > 767) {
//             firstNavLink.classList.add('filter-bright');
//             setTimeout(function(){ 
//                     activeNavLink.classList.add('bottom-border');
//                 }, 500);
//         } else {
//             activeNavLink.classList.add('lightest-grey-background');
//         }
//         var selectedNavLink = document.querySelector(".no_subcontent:nth-child(1)");
        
//         setTimeout(function(){
//             selectedNavLink.classList.remove('hvr-underline-from-center');
//         }, 1000);
        
// //   ask     
//         } else if (current == '/about-us' || current == '/vision' || current == '/our-people' || current == '/board'  || current == '/clergy' || current == '/staff' || current == '/our-location' || current == '/kashrut-policy' || current == '/rosen-ritt-library' || current == '/directions' || current == '/our-history' || current == '/wall-of-connections' || current == '/join-our-community' || current == '/visitors' || current == '/contact-us') {
//           var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//             var activeNavLink = document.querySelector(".no_subcontent:nth-child(2)");
//             if (viewportWidth > 767) {
//                 setTimeout(function(){ 
//                         activeNavLink.classList.add('bottom-border');
//                     }, 500);
//             } else {
//                 activeNavLink.classList.add('lightest-grey-background');
//             }
//             var selectedNavLink = document.querySelector(".no_subcontent:nth-child(2)");
            
//             setTimeout(function(){
//                 selectedNavLink.classList.remove('hvr-underline-from-center');
//             }, 1000);
            
// //  pray           
//         } else if (current == '/worship' || current == '/services' || current == '/tefilab' || current == '/shabbat-in-the-park'  || current == '/shabbat-nefesh' || current == '/livestream' || current == '/participate' || current == '/oneg-kiddush' || current == '/bnai-mitzvah' || current == '/yahrzeits') {
//           var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//             var activeNavLink = document.querySelector(".no_subcontent:nth-child(3)");
//             if (viewportWidth > 767) {
//                 setTimeout(function(){ 
//                         activeNavLink.classList.add('bottom-border');
//                     }, 500);
//             } else {
//                 activeNavLink.classList.add('lightest-grey-background');
//             }
//             var selectedNavLink = document.querySelector(".no_subcontent:nth-child(3)");
            
//             setTimeout(function(){
//                 selectedNavLink.classList.remove('hvr-underline-from-center');
//             }, 1000);
// // live
//         // } else if (current == '/tent-city-4') {
//         //   var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//         //     var activeNavLink = document.querySelector(".no_subcontent:nth-child(4)");
//         //     if (viewportWidth > 767) {
//         //         setTimeout(function(){ 
//         //                 activeNavLink.classList.add('bottom-border');
//         //             }, 500);
//         //     } else {
//         //         activeNavLink.classList.add('lightest-grey-background');
//         //     }
//         //     var selectedNavLink = document.querySelector(".no_subcontent:nth-child(4)");
            
//         //     setTimeout(function(){
//         //         selectedNavLink.classList.remove('hvr-underline-from-center');
//         //     }, 1000);
    
// // act        
//         } else if (current == '/tikun-olam' || '/tent-city-4' || current == '/volunteer' || current == '/chavurot-2' || current == '/mitzvah-corps'  || current == '/tikun-olam-2') {
//           var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//             var activeNavLink = document.querySelector(".no_subcontent:nth-child(5)");
//             if (viewportWidth > 767) {
//                 setTimeout(function(){ 
//                         activeNavLink.classList.add('bottom-border');
//                     }, 500);
//             } else {
//                 activeNavLink.classList.add('lightest-grey-background');
//             }
//             var selectedNavLink = document.querySelector(".no_subcontent:nth-child(5)");
            
//             setTimeout(function(){
//                 selectedNavLink.classList.remove('hvr-underline-from-center');
//             }, 1000);
            
// // learn        
//         } else if (current == '/learn' || current == '/tots' || current == '/kids' || current == '/teens'  || current == '/adults') {
//           var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//             var activeNavLink = document.querySelector(".no_subcontent:nth-child(6)");
//             if (viewportWidth > 767) {
//                 setTimeout(function(){ 
//                         activeNavLink.classList.add('bottom-border');
//                     }, 500);
//             } else {
//                 activeNavLink.classList.add('lightest-grey-background');
//             }
//             var selectedNavLink = document.querySelector(".no_subcontent:nth-child(6)");
            
//             setTimeout(function(){
//                 selectedNavLink.classList.remove('hvr-underline-from-center');
//             }, 1000);
            
// // join        
//         } else if (current == '/community' || current == '/membership-form' || current == '/membership' || current == '/interest-groups'  || current == '/judaica' || current == '/sisterhood' || current == '/sisterhood-contact'  || current == '/chavurot') {
//           var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//             var activeNavLink = document.querySelector(".no_subcontent:nth-child(8)");
//             if (viewportWidth > 767) {
//                 setTimeout(function(){ 
//                         activeNavLink.classList.add('bottom-border');
//                     }, 500);
//             } else {
//                 activeNavLink.classList.add('lightest-grey-background');
//             }
//             var selectedNavLink = document.querySelector(".no_subcontent:nth-child(8)");
            
//             setTimeout(function(){
//                 selectedNavLink.classList.remove('hvr-underline-from-center');
//             }, 1000);

// // contribute        
//         } else if (current == '/contribute') {
//           var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//             var activeNavLink = document.querySelector(".no_subcontent:nth-child(8)");
//             if (viewportWidth > 767) {
//                 setTimeout(function(){ 
//                         activeNavLink.classList.add('bottom-border');
//                     }, 500);
//             } else {
//                 activeNavLink.classList.add('lightest-grey-background');
//             }
//             var selectedNavLink = document.querySelector(".no_subcontent:nth-child(8)");
            
//             setTimeout(function(){
//                 selectedNavLink.classList.remove('hvr-underline-from-center');
//             }, 1000);
            
//     }




// ANIMATIONS:
// Green Sock Animation:
gsap.registerPlugin(ScrollTrigger);

// gsap.from(".cloud-wrapper", {
//     // delay: 0.5,
//   duration:0.5, 
//   opacity:0, 
// //   start: "bottom 20%",
//   ease:"linear",
//   stagger: 0.1,
//     scrollTrigger: {
//       trigger:".cloud-wrapper",
//       start: 'top top+=600',
//       markers:false,
//     }
// }) 


gsap.from(".wave", {
//   start: "top 20%",
  duration:1,
  opacity:0,
  ease:"linear", 
    scrollTrigger: {
      trigger:".wave",
      start: 'top top+=500',
      markers:false,
    }
}) 

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
//     delay: 0.5,
//   start: "bottom 50%",
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
//   start: "bottom 60%",
  duration:1, 
//   delay: 0.5,
  opacity:0, 
  ease: "none", 
//   y:15,
  stagger: 0.02,
    scrollTrigger: {
      trigger:".candle-link",
      start: 'top top+=400',
      markers:false
    }
}) 

gsap.from(".stagger-animate", {
//   start: "bottom 60%",
//   delay: 0.5,
  duration:1, 
  opacity:0, 
  ease: "none", 
//   y:15,
  stagger: 0.2,
    scrollTrigger: {
      trigger:".stagger-animate",
      start: 'top top+=500',
      markers:false
    }
}) 

gsap.from(".social-link-div", {
// start: "bottom 60%",
  duration:1, 
  opacity:0, 
  ease: "none", 
//   y:15,
  stagger: 0.2,
    scrollTrigger: {
      trigger:".social-link-div",
    //   start: 'top top+=400',
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



gsap.from(".wrapper1", {
  duration:0.5, 
  opacity:0, 
  ease: "none", 
  stagger: 0.2,
    scrollTrigger: {
      trigger:".wrapper1",
      start: 'top top+=500',
      markers:false
    }
}) 

gsap.from(".wrapper2", {
  duration:0.5, 
  opacity:0, 
  ease: "none", 
//   stagger: 0.2,
    scrollTrigger: {
      trigger:".wrapper2",
      start: 'top top+=500',
      markers:false
    }
}) 
gsap.from(".wrapper3", {
  duration:0.5, 
  opacity:0, 
  ease: "none", 
//   stagger: 0.3,
    scrollTrigger: {
      trigger:".wrapper3",
      start: 'top top+=450',
      markers:false
    }
}) 

gsap.from(".wrapper4", {
  duration:0.5, 
  opacity:0, 
  ease: "none", 
//   stagger: 0.4,
    scrollTrigger: {
      trigger:".wrapper4",
      start: 'top top+=400',
      markers:false
    }
}) 

// background-image
gsap.from(".background-image", {
// start: "bottom 50%",
  duration:0.5, 
  opacity:0, 
  ease: "none", 
  x:-30,
//   stagger: 0.2,
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
    //   end: '+=200',
      markers:false
    }
}) 



