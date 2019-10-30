const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.getElementsByTagName('a');
nav[0].innerText = 'Service';
nav[1].innerText = 'Product';
nav[2].innerText = 'Vision';
nav[3].innerText = 'Features';
nav[4].innerText = 'About';
nav[5].innerText = 'Contact';

let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = 'DOM <br> Is <br> Awesome';

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';
ctaImg.alt = 'Code Snippet';

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerText = 'Get Started';

let mainTopH4Tag = document.querySelectorAll('.top-content h4');
mainTopH4Tag[0].innerText ='Features';
mainTopH4Tag[1].innerText = 'About';

let mainTopPTag = document.querySelectorAll('.top-content p');
mainTopPTag[0].innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainTopPTag[1].innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let middleImg = document.querySelector('.middle-img');

middleImg.src = 'img/mid-page-accent.jpg';
middleImg.alt ='Image of code snippets across the screen';

let mainBotH4Tag = document.querySelectorAll('.bottom-content .text-content h4');
mainBotH4Tag[0].innerText = 'Service';
mainBotH4Tag[1].innerText = 'Product';
mainBotH4Tag[2].innerText = 'Vision';

let mainBotPTag = document.querySelectorAll('.bottom-content .text-content p');
mainBotPTag[0].innerText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainBotPTag[1].innerText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainBotPTag[2].innerText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let contactH4Tage = document.querySelector('.contact h4');
contactH4Tage.innerText = 'Contact';

let contactPTag = document.querySelectorAll('.contact p');
contactPTag[0].innerHTML = '123 Way 456 Street <br> Somewhere, USA';
contactPTag[1].innerText = '1 (888) 888-8888';
contactPTag[2].innerText = 'sales@greatidea.io';

let footerPTag = document.querySelector('footer p');
footerPTag.innerText = 'Copyright Great Idea! 2018';

const newATag = document.createElement('a');
const mainNav = document.querySelector('header nav');
newATag.innerText ='Apple';
mainNav.prepend(newATag);

const nav2 = document.createElement('a');
nav2.innerText = 'Banana';

mainNav.appendChild(nav2);
for(let i = 0; i < nav.length; i++) {
  nav[i].style.color = 'green';
}