const main = document.querySelector("main");
const tabs = document.querySelectorAll("div");
const overviewTab = document.querySelector("#overview");
const educTab = document.querySelector("#education");
const skillsTab = document.querySelector("#skills");
const skillSections = document.querySelectorAll("#skills section");
const projectsTab = document.querySelector("#projects");
const constructionNotice = document.querySelector("#constructionNotice");

function displayNotice() {
    tabs.forEach((tab) => {
        tab.classList.add("hide");
    });
    skillSections.forEach((section) =>{
        section.classList.add("hide");
    });
    constructionNotice.classList.remove("hide");
}

function displayOverview() {
    tabs.forEach((tab) => {
        tab.classList.add("hide");
    });
    skillSections.forEach((section) =>{
        section.classList.add("hide");
    });
    overviewTab.classList.remove("hide");
}

function displayEducation(){
    tabs.forEach((tab) => {
        tab.classList.add("hide");
    });
    skillSections.forEach((section) =>{
        section.classList.add("hide");
    });
    educTab.classList.remove("hide");
}

function displaySkills(){
    tabs.forEach((tab) => {
        tab.classList.add("hide");
    });
    skillsTab.classList.remove("hide");

    skillSections.forEach((section) =>{
        section.classList.remove("hide");
    });
}

function displayProjects(){
    tabs.forEach((tab) => {
        tab.classList.add("hide");
    });
    skillSections.forEach((section) =>{
        section.classList.add("hide");
    });
    projectsTab.classList.remove("hide");
}

const sections = document.querySelectorAll("section")
const tds = document.querySelectorAll("td")
function expandDetails(tdClass, sectionId) {
    
    // Close all other details
    sections.forEach((detail) => {
        detail.classList.add("hide");
    });
    tds.forEach((td) => {
        td.classList.remove("expanded");
    })

    // Expand the specified details
    var tdToExpand = document.querySelectorAll(`.${tdClass}`);
    tdToExpand.forEach((singleTd) => {
        singleTd.classList.add("expanded");  
    });
    var sectionToExpand = document.querySelector(`#${sectionId}`);
    sectionToExpand.classList.remove("hide");
}