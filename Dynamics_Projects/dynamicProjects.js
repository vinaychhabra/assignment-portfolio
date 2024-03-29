var projects = [
    {
        name: "Purple United",
        description: "Purple United is a kids clothing brand. In this, I have developer magento2 based e-commerce platform with complete theme modificationa and enhanced functionalities",
        link: "https://purpleunited.in",
        technology: "magento2"
    },
    {
        name: "Cohoma Coffee",
        description: "Cohoma Coffee is a coffee brand, for this brand I have build e-commerce platform on magento2.",
        link: "https://cohomacoffee.com",
        technology: "magento2"
    },
    {
        name: "E-signature web App",
        description: "I have build e-signature web app using reactJs. In this user can create his/her e-signature and download.",
        link: "https://e-signature-platform-khu3qxwma-vinaychhabras-projects.vercel.app/",
        technology: "reactJs"
    }
];

function displayProjects(technology) {
    var projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = ''; 

    projects.forEach(function(project) {
        var projectItem = document.createElement('div');
        projectItem.className = 'project-item';

        var projectName = document.createElement('h3');
        projectName.textContent = project.name;

        var projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        var projectLink = document.createElement('a');
        projectLink.textContent = 'View Project';
        projectLink.href = project.link;
        projectLink.target = "_blank";

        projectItem.appendChild(projectName);
        projectItem.appendChild(projectDescription);
        projectItem.appendChild(projectLink);

        projectsContainer.appendChild(projectItem);
    });
}

window.onload = function() {
    displayProjects();
};
document.addEventListener("DOMContentLoaded", function() {
    var tabLinks = document.querySelectorAll('.tab-link');

    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            tabLinks.forEach(function(tab) {
                tab.classList.remove('active');
            });

            link.classList.add('active');
            var targetTabId = link.getAttribute('href').substring(1); 

            var tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });

            var targetContent = document.getElementById(targetTabId);
            targetContent.classList.add('active');

            displayProjects(targetTabId);
        });
    });
});
