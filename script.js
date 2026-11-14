// Add verified entries to this array. Each entry should have a reliable source.
const facts = [
 {category:"HIS CHARACTER",title:"The Prophet Muhammad ﷺ was known for his kindness.",quote:"He was gentle in his dealings and encouraged good character.",source:"For a verified hadith about good character, see Sahih al-Bukhari 3559."},
 {category:"HIS LIFE",title:"Prophet Muhammad ﷺ was born in Makkah.",quote:"Traditional seerah accounts place his birth in Makkah in the Year of the Elephant.",source:"Ibn Hisham, Al-Sirah al-Nabawiyyah. Reports differ on the exact calendar date."},
 {category:"HIS TEACHINGS",title:"He emphasized good treatment of neighbours.",quote:"Angel Jibril continued advising him about the neighbour until he thought the neighbour might be given a share of inheritance.",source:"Sahih al-Bukhari 6014; Sahih Muslim 2624."},
 {category:"HIS WORSHIP",title:"He taught the value of consistency in good deeds.",quote:"The deeds most beloved to Allah are those done regularly, even if they are few.",source:"Sahih al-Bukhari 6464; Sahih Muslim 783."},
 {category:"HIS MERCY",title:"The Qur’an describes him as a mercy to the worlds.",quote:"“And We have not sent you, [O Muhammad], except as a mercy to the worlds.”",source:"Qur’an 21:107."}
];
const today=new Date();
document.getElementById("today-date").textContent=today.toLocaleDateString(undefined,{month:"long",day:"numeric",year:"numeric"});
const start=new Date("2026-01-01T00:00:00");
const day=Math.floor((new Date(today.getFullYear(),today.getMonth(),today.getDate())-start)/86400000);
let current=((day%facts.length)+facts.length)%facts.length;
function render(){
 const f=facts[current];
 document.getElementById("category").textContent=f.category;
 document.getElementById("fact-title").textContent=f.title;
 document.getElementById("fact-text").textContent=f.quote;
 document.getElementById("fact-source").textContent="— "+f.source;
 document.getElementById("counter").textContent=`FACT ${current+1} OF ${facts.length}`;
}
document.getElementById("next-fact").addEventListener("click",()=>{current=(current+1)%facts.length;render();});
render();
