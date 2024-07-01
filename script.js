"use strict";

const myBody = document.body;
const myBgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const myMenu = myBody.querySelector(".myMenu");
const myMenuItems = myMenu.querySelectorAll(".myMenu__item");
const myMenuBorder = myMenu.querySelector(".myMenu__border");
let myActiveItem = myMenu.querySelector(".active");

function myClickItem(myItem, myIndex) {
    myMenu.style.removeProperty("--myTimeOut");
    if (myActiveItem == myItem) return;
    if (myActiveItem) {
        myActiveItem.classList.remove("active");
    }
    myItem.classList.add("active");
    myBody.style.backgroundColor = myBgColorsBody[myIndex];
    myActiveItem = myItem;
    myOffsetMenuBorder(myActiveItem, myMenuBorder);
}

function myOffsetMenuBorder(myElement, myMenuBorder) {
    const myOffsetActiveItem = myElement.getBoundingClientRect();
    const myLeft = Math.floor(myOffsetActiveItem.left - myMenu.offsetLeft - (myMenuBorder.offsetWidth - myOffsetActiveItem.width) / 2) + "px";
    myMenuBorder.style.transform = `translate3d(${myLeft}, 0, 0)`;
}

myOffsetMenuBorder(myActiveItem, myMenuBorder);

myMenuItems.forEach((myItem, myIndex) => {
    myItem.addEventListener("click", () => myClickItem(myItem, myIndex));
});

window.addEventListener("resize", () => {
    myOffsetMenuBorder(myActiveItem, myMenuBorder);
    myMenu.style.setProperty("--myTimeOut", "none");
});
