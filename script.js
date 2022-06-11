const main = document.querySelector("main");
const tabs = document.querySelectorAll("div");
const overviewTab = document.querySelector("#overview");
const educTab = document.querySelector("#education");
const constructionNotice = document.querySelector("#constructionNotice");

function displayNotice() {
    tabs.forEach((tab) => {
        tab.classList.add("hide");
    });
    constructionNotice.classList.remove("hide");
}

function displayOverview() {
    tabs.forEach((tab) => {
        tab.classList.add("hide");
    });
    overviewTab.classList.remove("hide");
}

function displayEducation(){
    tabs.forEach((tab) => {
        tab.classList.add("hide");
    });
    educTab.classList.remove("hide");
}

const sections = document.querySelectorAll("section")

function expandDetails(paramId) {
    sections.forEach((detail) => {
        detail.style.display = "none";
    });
    var sectionToExpand = document.querySelector(`#${paramId}`);
    sectionToExpand.style.display = "";
}

