// Get the main projects div
var projectsDiv = document.getElementById("projects");

for (let i = 0; i < PROJECTS.length; i++) {
    var currentproject = PROJECTS[i];

    // Create div
    var projectDiv = document.createElement("div");
    projectDiv.style = "display: inline-block; width: 300px; margin: 10px";

    // Create h3
    var tittle = document.createElement("h3");
    var titleNode = document.createTextNode(currentproject.tittle);
    tittle.appendChild(titleNode);

    // Create link
    var link = document.createElement("a");
    link.href = currentproject.link;
    link.target = "_blank"; // Opens the link in a new tab

    // Create image and add to the link
    var image = document.createElement("img");
    image.src = "./images/" + currentproject.img;
    image.style = "width: 180px; height:100px; cursor: pointer;";

    link.appendChild(image);

    // Create p
    var p = document.createElement("p");
    var pNode = document.createTextNode(currentproject.description);
    p.appendChild(pNode);

    // Append elements to the project div
    projectDiv.appendChild(tittle);
    projectDiv.appendChild(link); // Use the link instead of the image directly
    projectDiv.appendChild(p);

    // Append project div to the main projects div
    projectsDiv.appendChild(projectDiv);
}
