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