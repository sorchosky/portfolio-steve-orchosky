// projectArray.js

// PROJECT ARRAY
const projects = [
    {       
        projectId: 'production-optimization-platform',
        title: 'Oil Production Optimization Platform',
        mobileImg: 'img/thumbnails/frog-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/frog-thumb@2x.jpg',
        projectCoverImg: './',
        processCoverImg: './',
        description: 'Enterprise app for managing and optimizing electrical submersible oil pumps',
        url: './production-optimization-platform.html',
        isPublic: true,
        featured: false
    },
    {       
        projectId: 'smart-entry',
        title: 'Smart Entry Mobile App',
        mobileImg: 'img/thumbnails/frog-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/frog-thumb@2x.jpg',
        projectCoverImg: './',
        processCoverImg: './',
        description: 'Mobile app companion for an iOT smart door',
        url: './smart-entry.html',
        isPublic: true,
        featured: false
    },
    {       
        projectId: 'optum',
        title: 'Optum',
        mobileImg: 'img/thumbnails/optum-thumb--mobile@2x.jpg',
        desktopImg: 'img/thumbnails/optum-thumb@2x.jpg',
        projectCoverImg: 'img/project--optum/optum--project-cover.jpg',
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
        projectCoverImg: 'img/project--microsoft/microsoft--process-cover.jpg',
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
        featured: true
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
        description: 'Website to showcase the rich history of America’s most beloved playing card brands',
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
        featured: true
    }
];

const publicProjects = projects.filter(project => project.isPublic == true);
const featuredProjects = projects.filter(project => project.featured == true);