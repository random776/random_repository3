(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.getElementById("message-list"),a=document.getElementById("message-input");document.getElementById("send-button").onclick=async()=>{const o=a.value;await fetch("/send",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:o})})};setInterval(async()=>{const s=await(await fetch("/messages")).json();c.innerHTML="";for(const r of s){const n=document.createElement("li");n.textContent=r,c.appendChild(n)}},1e3);
