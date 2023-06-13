// Render #header in DOM
let header = document.getElementById("header");

// Animated hamburger menu
let navbarToggle = document.getElementById("navbarToggle");
let fullNav = document.getElementById("fullNav");
navbarToggle.onclick = function() {
    navbarToggle.classList.toggle("is-active");
    fullNav.classList.toggle("active");
}
'use strict';
// jobListArray.js

// PROJECT ARRAY
const jobList = [
    {
        img: 'img/professional-experience/frog.jpeg',
        title: 'Interaction Designer II',
        company: 'frog',
        dates: 'OCT 2021–APR 2023',
        description: [
            'Designed high-fidelity UI and interaction design for notifications and data visualizations of an enterprise software tool for an oil &amp; gas client',
            ' Led mobile app conceptual interaction design and created customer journey and ecosystem maps for the first iOT offering of an analog home goods client',
            'Collaborate with multifunctional teams & clients as interaction design lead through facilitating and participating in design critiques and presentations'
        ]
    },
    {
        img: 'img/professional-experience/icon.jpeg',
        title: 'Digital Designer',
        company: 'Icon Marketing',
        dates: 'APR 2017–AUG 2020',
        description: [
            'Led and implemented Wordpress and Squarespace websites for seven unique clients in retail and technology, including The U.S. Playing Card Company',
            'Conceptualized and implemented a brand web page service to deliver over 200 custom web pages for retailers of Tempur-Sealy Internationa',
            'Managed the agency&rsquo;s first digital design internship program'
        ]
    },
    {
        img: 'img/professional-experience/lisnr.png',
        title: 'Designer',
        company: 'LISNR',
        dates: 'JAN 2017–MAR 2017',
        description: [
            'Design email templates, web pages, white page & documentation PDFs, online publications, social media graphics, infographics and storyboards',
            'Create print collateral for trade shows to generate new business leads and investors',
            'Perform art direction for the marketing team, as well as communicate brand and design strategy internally and with partnering agencies'
        ]
    },
    {
        img: 'img/professional-experience/rockfish.png',
        title: 'Freelance Designer',
        company: 'Rockfish',
        dates: 'NOV 2016–JAN 2017',
        description: [
            'Create Amazon marketplace and e-commerce graphics for MARS Petcare',
            'Exhibit organization skills for thousands of graphics and appropriately package them for handoff to project management and clients',
            'Illustrate infographics for use in MARS Petcare marketing materials while adhering to their brand guidelines'
        ]
    },
    {
        img: 'img/professional-experience/clubessential.png',
        title: 'UI &amp; UX Designer',
        company: 'Clubessential',
        dates: 'JUN 2015–SEP 2016',
        description: [
            'Creates eye-catching and engaging websites for clients in the private club industry and ensures that all projects are delivered in a timely manner',
            'Liasing with customers via telephone and face-to-face meetings through client discovery calls and design presentations',
            'Collaborates with front end developers and project managers through packaging artwork and giving feedback throughout the development process',
            'Creates various in-house marketing materials for print and web.'
        ]
    },
]

// jobLoop.js

let workExperience = document.getElementById('workExperience');

let workLoop = () => {
    for (let job in jobList) {
        let title = jobList[job].title;
        let company = jobList[job].company;
        let dates = jobList[job].dates;
        let img = jobList[job].img;

        // Render work experience meta information
        let workExperienceItem = document.createElement('div');
        workExperienceItem.classList = 'row work-experience-item';

        workExperienceItem.innerHTML = `
        <div class="col col-12 col-lg-4">
            <div class="row no-gutters work-experience-meta">
                <img src="` + img + `" alt="` + company + ` logo" class="img-fluid work-experience__img">
                <div class="col">
                    <h4>` + title + `</h4>
                    <h5>` + company + `</h5>
                    <h6>` + dates + `</h6>
                </div>
            </div>
        </div>
        `

        // Render description bullets
        let description = jobList[job].description;
        let itemizedDescriptionDiv = document.createElement('div');
        itemizedDescriptionDiv.classList = "col col-12 col-lg-8";
        let itemizedDescription = document.createElement('ul');
        itemizedDescription.classList = 'work-experience__ul';
        let listItem;
        for (let bullet in description) {
            let listItem = document.createElement('li');
            listItem.classList = 'work-experience__li p';
            listItem.innerHTML = description[bullet];
            itemizedDescription.appendChild(listItem);
        }
        itemizedDescriptionDiv.appendChild(itemizedDescription);

        
        workExperience.appendChild(workExperienceItem);
        workExperienceItem.appendChild(itemizedDescriptionDiv);
    }
}

// // pageFade.js

// function fadeInPage() {
//     if (!window.AnimationEvent) { 
//         return; 
//     }
//     const fader = document.getElementById("fader");
//     fader.classList = 'fade-out';
// }

// document.addEventListener('DOMContentLoaded', function() {
//     if (!window.AnimationEvent) { 
//         return; 
//     }
//     let anchors = document.getElementsByTagName('a');
//     for (let i in anchors) {
//         if (anchors[i].hostname !== window.location.hostname || anchors[i].pathname === window.location.pathname) {
//             continue;
//         }
//         anchors[i].addEventListener('click', function(e) {
//             const fader = document.getElementById('fader');
//             let anchor = e.currentTarget;
//             let listener = function() {
//                 window.location = anchor.href;
//                 fader.removeEventListener('animationend', listener);
//             }
//             fader.addEventListener('animationend', listener);
//             e.preventDefault();
//             fader.classList = 'fade-in';
//         });
//     }
// });

// window.addEventListener('pageshow', function (event) {
//     if (!event.persisted) {
//         return;
//     }
//     const fader = document.getElementById('fader');
//     fader.classList.remove('fade-in');
// });

// prevNextProjects.js

// PROJECT LOOP
let prevNextProjects = () => {
    // get id from page
    let body = document.getElementsByTagName('body')[0];
    let pageProjectId = body.id;
    console.log('Page ID: ' + pageProjectId)
    // get corresponding number from projects
    let thisProjectObject = publicProjects.find(project => project.projectId === pageProjectId);
    // This project's index
    let thisProjectIndex = publicProjects.indexOf(thisProjectObject);
    console.log('This project Index: ' + thisProjectIndex);
    
    // get the index before
    let prevProjectIndex;
    if (thisProjectIndex - 1 === -1) {
        // if first in array, use last
        prevProjectIndex = publicProjects.length - 1;
    } else {
        prevProjectIndex = thisProjectIndex - 1;
    }
    console.log('Prev project Index: ' + prevProjectIndex);
        
    // get index after
    let nextProjectIndex;
    if (thisProjectIndex + 1 === publicProjects.length) {
        // if last in array, use 0
        nextProjectIndex = 0;
    } else {
        nextProjectIndex = thisProjectIndex + 1;
    }

    console.log('Next project Index: ' + nextProjectIndex);

    // ######################
    // Render project displays
    // ######################

    let prevNextProjectsDiv = document.getElementById('prevNextProjects');

    let prevProject = publicProjects[prevProjectIndex];
    let nextProject = publicProjects[nextProjectIndex];

    // Previous project
    let prevProjectDiv = document.createElement('div');
    prevProjectDiv.classList = "project-list-item d-block col-12 d-md-flex col-lg-6";
    prevProjectDiv.innerHTML = `
    <a href="` + prevProject.url + `" class="col">
        <img src="` + prevProject.mobileImg + `" alt="U.S. Playing Card" class="img-fluid col-12 d-block d-lg-none project-list-item__img">
        <div class="img-fluid col-8 d-none d-lg-block project-list-item__img" style="background-image: url('` + prevProject.desktopImg + `');">
        </div>
        <div class="project-list-item__text col-12 col-md-8">
            <p class="col-12 text-left eyebrow prev-next-label prev-label">prev</p>
            <h3 class="text-left">` + prevProject.title + `</h3>
            <p class="text-left">`+ prevProject.description +`</p>
        </div>
    </a>
    `

    prevNextProjectsDiv.appendChild(prevProjectDiv);

    // Next project
    let nextProjectDiv = document.createElement('div');
    nextProjectDiv.classList = "project-list-item d-block col-12 d-md-flex col-lg-6";
    nextProjectDiv.innerHTML = `
    <a href="` + nextProject.url + `" class="col">
        <img src="` + nextProject.mobileImg + `" alt="U.S. Playing Card" class="img-fluid col-12 d-block d-lg-none project-list-item__img">
        <div class="img-fluid col-8 d-none d-lg-block project-list-item__img" style="background-image: url('` + nextProject.desktopImg + `');">
        </div>
        <div class="project-list-item__text col-12 col-md-8 align-items-end">
            <p class="col-12 text-right eyebrow prev-next-label next-label">Next</p>
            <h3 class="text-right">` + nextProject.title + `</h3>
            <p class="text-right">`+ nextProject.description +`</p>
        </div>
    </a>
    `

    prevNextProjectsDiv.appendChild(nextProjectDiv);

    console.log('Project length: ' + publicProjects.length);
}

// ##########################
// MiniNav (Process Pages)
// ##########################

function miniNav() {
    // get id from page
    let body = document.getElementsByTagName('body')[0];
    let pageProjectId = body.id;
    console.log('Page ID: ' + pageProjectId)
    // get corresponding number from projects
    let thisProjectObject = publicProjects.find(project => project.projectId === pageProjectId);
    // This project's index
    let thisProjectIndex = publicProjects.indexOf(thisProjectObject);
    console.log('This project Index: ' + thisProjectIndex);

    // get the index before
    let prevProjectIndex;
    if (thisProjectIndex - 1 === -1) {
        // if first in array, use last
        prevProjectIndex = publicProjects.length - 1;
    } else {
        prevProjectIndex = thisProjectIndex - 1;
    }
    console.log('Prev project Index: ' + prevProjectIndex);
        
    // get index after
    let nextProjectIndex;
    if (thisProjectIndex + 1 === publicProjects.length) {
        // if last in array, use 0
        nextProjectIndex = 0;
    } else {
        nextProjectIndex = thisProjectIndex + 1;
    }

    console.log('Next project Index: ' + nextProjectIndex);

    // ######################
    // Render project displays
    // ######################

    let miniNav = document.getElementById('mini-nav');

    let prevProject = publicProjects[prevProjectIndex];
    let nextProject = publicProjects[nextProjectIndex];

    // Get next project with a process book link:
    
    // Render the miniNav
    miniNav.innerHTML = `
    <a class="btn prev-next-link prev-link" href="` + prevProject.url + `"><h6 class="text-left eyebrow prev-next-label prev-label">` + prevProject.title + `</h6></a>
    <a class="btn prev-next-link next-link" href="` + nextProject.url + `"><h6 class=" text-right eyebrow prev-next-label next-label">` + nextProject.title + `</h6></a>
    `;
}

function nextProcess() {
    console.log("Testing nextProcess");
}
// projectArray.js

// PROJECT ARRAY
const projects = [
    {       
        projectId: 'production-optimization-platform',
        title: 'Oil Production Optimization Platform',
        mobileImg: 'img/thumbnails/production-optimization-platform-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/production-optimization-platform-thumb@2x.jpg',
        projectCoverImg: './',
        processCoverImg: './',
        description: 'Contact for details, full case study in progress',
        url: './production-optimization-platform.html',
        isPublic: false,
        featured: false
    },
    {       
        projectId: 'smart-entry',
        title: 'Smart Entry Mobile App',
        mobileImg: 'img/thumbnails/smart-entry-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/smart-entry-thumb@2x.jpg',
        projectCoverImg: 'img/project--smart-entry/smart-entry--project-cover.jpg',
        processCoverImg: 'img/project--smart-entry/smart-entry--project-cover.jpg',
        description: 'Contact for details, full case study in progress',
        url: './smart-entry.html',
        isPublic: false,
        featured: true
    },
    {       
        projectId: 'optum',
        title: 'Optum',
        mobileImg: 'img/thumbnails/optum-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/optum-thumb@2x.jpg',
        projectCoverImg: 'img/project--optum/optum--project-cover@2x.jpg',
        processCoverImg: 'img/project--optum/optum--process-cover.jpg',
        description: 'A new digital healthcare service for life after COVID-19',
        url: './optum.html',
        isPublic: true,
        featured: true
    },
    {
        projectId: 'microsoft',
        title: 'Microsoft',
        mobileImg: 'img/thumbnails/microsoft-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/microsoft-thumb@2x.jpg',
        projectCoverImg: 'img/project--microsoft/microsoft--process-cover@2x.jpg',
        processCoverImg: 'img/project--microsoft/microsoft--process-cover.jpg',
        description: 'A new mixed reality experience for remote creative collaboration',
        url: './microsoft.html',
        isPublic: true,
        featured: true
    },
    {
        projectId: 'construction-junction',
        title: 'Construction Junction',
        mobileImg: 'img/thumbnails/cj-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/cj-thumb@2x.jpg',
        projectCoverImg: 'img/project--construction-junction/cj--process-cover.jpg',
        processCoverImg: 'img/project--construction-junction/cj--process-cover.jpg',
        description: 'Design system and mobile app prototype for inventory management',
        url: './construction-junction.html',
        isPublic: true,
        featured: false
    },
    {
        projectId: 'tempur-pedic',
        title: 'Tempur-Pedic',
        mobileImg: 'img/thumbnails/tempur-pedic-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/tempur-pedic-thumb@2x.jpg',
        projectCoverImg: 'img/project--tempur-pedic/tempur-pedic--project-cover@2x.jpg',
        processCoverImg: 'img/project--tempur-pedic/tempur-pedic--project-cover@2x.jpg',
        description: 'An agency service model to distribute brand landing pages to thousands of retailers',
        url: './tempur-pedic.html',
        isPublic: true,
        featured: false
    },
    {
        projectId: 'uspc',
        title: 'U.S. Playing Card',
        mobileImg: 'img/thumbnails/uspc-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/uspc-thumb@2x.jpg',
        projectCoverImg: 'img/project--uspc/uspc--project-cover@2x.jpg',
        processCoverImg: 'img/project--uspc/uspc--project-cover@2x.jpg',
        description: 'Website to showcase the rich history of America&rsquo;s most beloved playing card brands',
        url: './uspc.html',
        isPublic: true,
        featured: false
    },
    {
        projectId: 'kst',
        title: 'Kelly Strayhorn',
        mobileImg: 'img/thumbnails/kst-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/kst-thumb@2x.jpg',
        projectCoverImg: 'img/project--kelly-strayhorn/kst--project-cover@2x.jpg',
        processCoverImg: 'img/project--kelly-strayhorn/kst--project-cover@2x.jpg',
        description: 'A new digital theater experience to help audiences connect with performers during COVID-19',
        url: './kelly-strayhorn.html',
        isPublic: true,
        featured: false
    }
];

const publicProjects = projects.filter(project => project.isPublic == true);
const featuredProjects = projects.filter(project => project.featured == true);
// projectLoop.js

// PROJECT LOOP
// const projectList = document.getElementById("projectList");
// let projectLoop = () => {
//     for (let project in projects) {
//         // variables for project object properties
//         let title = projects[project].title;
//         let mobileImg = projects[project].mobileImg;
//         let desktopImg = projects[project].desktopImg;
//         let description = projects[project].description;
//         let url = projects[project].url;
//         let isPublic = projects[project].isPublic;

//         // create project li element
//         let projectListItem = document.createElement('li');
//         projectListItem.classList = "project-list-item d-block col-12 d-md-flex col-lg-6";

//         if (isPublic) {
//             // html with project properties
//             projectListItem.innerHTML = `
//             <a href="` + url + `" class="project-list-item__a col-12 p-0">
//                 <img src="` + mobileImg + `" alt="` + title + `" loading="lazy" class="img-fluid col-12 d-block d-lg-none project-list-item__img">
//                 <div class="img-fluid col-8 d-none d-lg-block project-list-item__img" style="background-image: url(` + desktopImg + `);">
//                 </div>
//                 <div class="project-list-item__text col-12 col-md-8">
//                     <h3>` + title + `</h3>
//                     <p>` + description + `</p>
//                 </div>
//             </a>`;
//         } else {
//             // html with project properties
//             projectListItem.classList.add("project--disabled");
//             projectListItem.innerHTML = `
//             <div class="col-12 p-0">
//                 <img src="` + mobileImg + `" alt="` + title + `" loading="lazy" class="img-fluid col-12 d-block d-lg-none project-list-item__img">
//                 <div class="img-fluid col-8 d-none d-lg-block project-list-item__img" style="background-image: url(` + desktopImg + `);">
//                 </div>
//                 <div class="project-list-item__text col-12 col-md-8">
//                     <h3>` + title + `</h3>
//                     <p>` + description + `</p>
//                 </div>
//             </div>`;
//         }
//         // append to #projectList
//         projectList.appendChild(projectListItem);
//     }
// }
// projectLoopMenu.js

// PROJECT LOOP MENU
const projectLoopMenu = document.getElementById("projectLoopMenu");

let i;
for (i = 0; i < 3; i++) {
    let projectLoopMenuItem = document.createElement("a");
    projectLoopMenuItem.classList = "full-nav__project";
    projectLoopMenuItem.setAttribute("href", featuredProjects[i].url);
    if (i == 0) {
        projectLoopMenuItem.classList.add("full-nav__project--featured");
        projectLoopMenuItem.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, .4), rgba(0, 0, 0, 0), rgba(0, 0, 0, .4)), url('" + featuredProjects[i].projectCoverImg + "')";
    } else {
        projectLoopMenuItem.classList.add("full-nav__project--nonfeatured");
        projectLoopMenuItem.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, .7)), url('" + featuredProjects[i].processCoverImg + "')";
    }
    projectLoopMenuItem.innerHTML = `
    <div class="project-text">
        <p>` + featuredProjects[i].title + `</p>
    </div>
    `
    projectLoopMenu.appendChild(projectLoopMenuItem);
}
// scrollRevealFunctions.js

let revealFromBottom = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

ScrollReveal().reveal('.reveal', {
    delay: 300,
    reset: true
});
$(document).ready(function(){
    $('.slick--autoplay').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
        lazyLoad: 'ondemand',
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 2000
    })
});

$(document).ready(function() {
    $('.full-width-slider').slick({
      arrows: true,
      prevArrow: $('.slick-slides__prev'),
      nextArrow: $('.slick-slides__next'),
      autoplay: true,
      autoplaySpeed: 7000,
      centerMode: true,
      lazyLoad: 'ondemand',
      speed: 1000
    });
});

$(document).ready(function() {
    $('.mobile-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        centerMode: true,
        lazyLoad: 'ondemand',
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });
});

$(document).ready(function() {
  $("#loadLast").show();
})