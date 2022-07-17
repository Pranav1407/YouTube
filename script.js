var menu = document.querySelector(".ham");
var sidebar = document.querySelector(".sidebar");
var contents = document.querySelector(".contents");
menu.onclick=function()
{
    sidebar.classList.toggle("small-sidebar");
    contents.classList.toggle("large-contents");
}
sidebar.onmouseover=function()
{
    sidebar.classList.toggle("scrollbar");
}
