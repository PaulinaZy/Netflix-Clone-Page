const tabs = document.querySelectorAll(".tab-item");
const tabsContent = document.querySelectorAll(".tab-content-item");
const tabContent1 = document.querySelector("#tab-1-content");
const tabContent2 = document.querySelector("#tab-2-content");
const tabContent3 = document.querySelector("#tab-3-content");
const tab1 = document.querySelector("#tab-1");
const tab2 = document.querySelector("#tab-2");
const tab3 = document.querySelector("#tab-3");

// Listen for tab click
tabs.forEach(x => {
    x.addEventListener("click", selectItem)
})


//Function for selecting item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add red border\
    this.classList.add("tab-border");
    //grab content item from DOM & gicing it a class show
    let contentID = `#${this.id}-content`;
    document.querySelector(contentID).classList.add("show");
}

//function to remove border

function removeBorder() {
    tabs.forEach(x => x.classList.remove("tab-border"));
}

//function to remove show class
function removeShow() {
    tabsContent.forEach(x => x.classList.remove("show"));
}