!function(e,s){"function"==typeof define&&define.amd?define([],s):"object"==typeof exports?module.exports=s():e.AccessibleEssentials=s()}(this,function(){"use strict";var e=function(){for(var e=document.getElementsByClassName("access-select"),s=function(s){for(var t=e[s],n=t.querySelector(".access-select__chosen-option"),i=t.getElementsByClassName("access-select__input"),c=function(e){var s=i[e];document.addEventListener("click",function(e){var i=t.contains(e.target);n.contains(e.target)&&(n.classList.contains("list-is-open")?n.classList.remove("list-is-open"):n.classList.add("list-is-open")),i||n.classList.remove("list-is-open"),s.checked&&(n.innerHTML=s.value)}),s.addEventListener("focus",function(){n.classList.add("list-is-open")}),s.addEventListener("keydown",function(e){9===e.keyCode&&n.classList.remove("list-is-open")})},o=0;o<i.length;o++)c(o)},t=0;t<e.length;t++)s(t)};return function(){e()}});