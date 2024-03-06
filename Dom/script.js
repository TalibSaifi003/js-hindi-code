let element =document.getElementById('first');
// element=element.parentNode;
// element.style.color="red";
element.innerText="Hii This is Khan";
element.innerHTML="<i>Hii This is Khan</i>";
// console.log(element);
//Single element Selector
let sel =document.querySelector('#first'); //using select id
sel =document.querySelector('.child'); //using select class
sel=document.querySelector('h1');
// console.log(sel);

//Multi Element Selector

//it's helpfull to select more than one element in Html dom at a time.

let elems =document.getElementsByClassName('child');//this select all the class
elems = document.getElementsByTagName('div'); //it's se;ect all the div tag
//if we want to chnage css
// Array.from(elems).forEach(element=>{
//     console.log(element);
//     element.style.color="blue";
// })
console.log(elems);

// we can also do it with for loop

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color="pink";
    
}