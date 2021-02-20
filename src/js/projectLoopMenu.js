// projectLoopMenu.js

// PROJECT LOOP MENU
const projectLoopMenu = document.getElementById("projectLoopMenu");
let i;
for (i = 0; i < 3; i++) {
    let projectLoopMenuItem = document.createElement("a");
    projectLoopMenuItem.classList = "full-nav__project";
    projectLoopMenuItem.setAttribute("href", projects[i].url);
    if (i == 0) {
        projectLoopMenuItem.classList.add("full-nav__project--featured");
        projectLoopMenuItem.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, .7), rgba(0, 0, 0, 0), rgba(0, 0, 0, .7)), url('" + projects[i].projectCoverImg + "')";
    } else {
        projectLoopMenuItem.classList.add("full-nav__project--nonfeatured");
        projectLoopMenuItem.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, .7), rgba(0, 0, 0, 0), rgba(0, 0, 0, .7)), url('" + projects[i].processCoverImg + "')";
    }
    projectLoopMenuItem.innerHTML = `
    <div class="project-text">
        <p>` + projects[i].title + `</p>
    </div>
    `
    projectLoopMenu.appendChild(projectLoopMenuItem);
}