let inp = document.getElementById("search");
let inf = document.getElementById("inf");
let btn = document.getElementById("btn");

var bosses = [{
    forNavn : "Ceremonial",
    etterNavn : "Beast",
    stilling : "Boss Enemy",
    info : "loves grass",
    bildet : "https://thephrasemaker.com/wp-content/uploads/2026/03/Ceremonial-Beast-Turn-1-1024x683.jpg"
}, 
{
    forNavn : "Kin",
    etterNavn : "Priest",
    stilling : "Boss Enemy/enemies",
    info : "has slaves",
    bildet : "https://staticg.sportskeeda.com/editor/2026/03/6f45e-17732007438547-1920.jpg"
}, 
{
    forNavn : "Vantom",
    stilling : "Goo",
    info : "black goo with way to much dmg",
    bildet : "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:240,cw:1440,ch:1080,q:80,w:1440/3HLXngNLr8n3sGGNxZZqeJ.jpg"
}, 
{
    forNavn : "Soul",
    etterNavn : "Fysh",
    stilling : "Boss Enemy + Fish",
    info : "fish",
    bildet : "https://thephrasemaker.com/wp-content/uploads/2026/03/Slay-the-Spire-2-Soul-Fysh-Turn-1-1024x683.jpg"
}, 
{
    forNavn : "Waterfall",
    etterNavn : "Giant",
    stilling : "Boss enemy/ water nourishment",
    info : "good to bath in it",
    bildet : "https://images.squarespace-cdn.com/content/v1/6694c7917c956c53964034d9/bf69adf7-8b2f-4fde-8acd-4d4d37146c70/Screenshot+2026-03-07+224639.png"
}, 
];

btn.addEventListener("click", function () {
  let value = inp.value;
  
  bosses.forEach(boss => {
    if (boss.forNavn === value) {
        console.log(boss.forNavn);
        
        document.getElementById("forNavn").innerText = boss.forNavn
        document.getElementById("etterNavn").innerText = boss.etterNavn
        document.getElementById("bildet").src = boss.bildet
        document.getElementById("stilling").innerText = boss.stilling
        document.getElementById("info").innerText = boss.info
        console.log(document.getElementById("bildet"));
    }
  });
})