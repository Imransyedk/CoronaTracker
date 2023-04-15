var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="5px";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");
let deaths=document.createElement("div");
deaths.setAttribute("id","deaths");
let confirmed=document.createElement("div");
confirmed.setAttribute("id","confirmed");
let recovered=document.createElement("div");
recovered.setAttribute("id","confirmed");



div.append(input,button,active);
document.body.append(div);
div.append(input,button,deaths);
document.body.append(div);
div.append(input,button,confirmed);
document.body.append(div);
div.append(input,button,recovered);
document.body.append(div);


async function foo(){
let res=document.getElementById("country").value;
console.log(res);
let url=`https://api.covid19api.com/total/dayone/country/${res}`;
let res1=await fetch(url);
let res2=await res1.json();
let index=res2.length-1;
console.log(res2[index]);
console.log(res2[index].Active);
console.log(res2[index].Deaths);
console.log(res2[index].Confirmed);
console.log(res2[index].Recovered);
active.innerHTML=`Total Active cases:${res2[index].Active}`;
deaths.innerHTML=`Total Deaths cases:${res2[index].Deaths}`;
confirmed.innerHTML=`Total Confirmed cases:${res2[index].Confirmed}`;
recovered.innerHTML=`Total Recovered cases:${res2[index].Recovered}`;

}