// select the root node
const root = document.querySelector("body");
// select the last child of the root node
const lastChild=root.lastElementChild;
// select all the children of the body element
const allTheChildren=root.children;
// select the next sibling of the h2 node
const nextSibling=document.querySelector("h2").nextElementSibling;
// select the parent element of the h1 node
const parentElementOfh1=document.querySelector("h1").parentElement;
console.log(root,lastChild, nextSibling,parentElementOfh1);
