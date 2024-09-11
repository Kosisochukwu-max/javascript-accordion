const answers=document.getElementById("answers");
const plus=document.getElementById("plus-sign");
const minus=document.getElementById("minus-sign");const container=document.getElementById("sub-container");
const section=document.getElementById("container")
const on=document.getElementById("on");
const off=document.getElementById("off");
function accordionup() {
    // this is how to use css in js
    minus.style.display="none";
    plus.style.display="inline";
    answers.style.display="none"
}
function accordiondown() {
    // this is how to use css in js
    minus.style.display="inline";
    plus.style.display="none";
    answers.style.display="block";
}
function darkmode() {
    on.style.display="inline";
    off.style.display="none";
    container.style.backgroundColor="gray"
    section.style.backgroundColor="black"
}
function lightmode() {
    on.style.display="none";
    off.style.display="inline";
    container.style.backgroundColor=" rgb(247, 242, 242)"
    section.style.backgroundColor="black"
}