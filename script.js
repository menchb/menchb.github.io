const main = document.querySelector("main");
const tabs = document.querySelectorAll("div");
const overviewTab = document.querySelector("#overview");
const educTab = document.querySelector("#education");
const constructionNotice = document.querySelector("#constructionNotice");

function displayNotice() {
    tabs.forEach((tab) => {
        tab.style.display = "none";
    });
    constructionNotice.style.display = "block";
}

function displayOverview() {
    tabs.forEach((tab) => {
        tab.style.display = "none";
    });
    overviewTab.style.display = "block";
}

function displayEducation(){
    tabs.forEach((tab) => {
        tab.style.display = "none";
    });
    educTab.style.display = "block";
}

const sections = document.querySelectorAll("section")

function expandDetails(paramId) {
    sections.forEach((detail) => {
        detail.style.display = "none";
    });
    var sectionToExpand = document.querySelector(`#${paramId}`);
    sectionToExpand.style.display = "block";
}

