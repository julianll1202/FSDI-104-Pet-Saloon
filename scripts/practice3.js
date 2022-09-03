//JS selectors
//ID return one element
let inputName = document.getElementById("petName");
console.log(inputName);

//Class returns a collection elements
let links = document.getElementsByClassName("link");
for(let i=0; i<links.length; i++) {
    links[i].setAttribute("target","_blank");
    links[i].style.display="none";
}
console.log(links);

//Tag returns a collection of elements
let inputs = document.getElementsByTagName("input");
console.log(inputs);
for(let i = 0; i<inputs.length; i++){
    inputs[i].style.display="none";
}

//Query
let home = document.querySelector("nav a.link");
console.log(home);

//Hiding the select using querySelector
let select = document.querySelector("main div select");
console.log(select);
select.style.display = "none";