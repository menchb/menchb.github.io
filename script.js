const constructionNotice = document.querySelector("#constructionNotice");

function displayNotice() {
    tabs.forEach((tab) => {
        tab.style.display = "none";
    });
    constructionNotice.style.display = "block";
}

