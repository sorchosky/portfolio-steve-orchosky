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