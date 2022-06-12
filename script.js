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

