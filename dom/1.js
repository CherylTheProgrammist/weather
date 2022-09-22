const container = document.createElement("div")
const body = document.getElementsByTagName("body")
container.classList.add("container")
document.body.appendChild(container)


const container1 = document.createElement("div")
container1.classList.add("container1")
container.appendChild(container1)

const tops = document.createElement("div")
tops.classList.add("tops")
container1.appendChild(tops)

const topsT = document.createElement("div")
topsT.classList.add("topsT")
tops.appendChild(topsT)



const d = new Date();
let time = d.toDateString();
const Dates = document.createElement("p")
Dates.classList.add("Dates")
topsT.appendChild(Dates)
Dates.innerText = time
const locall = document.createElement("p")
locall.classList.add("locall")
topsT.appendChild(locall)
locall.innerText = "Ulaanbaatar"
locall.style.fontStyle = "oblique";
const locIcon = document.createElement("img")
locIcon.classList.add("locIcon")
tops.appendChild(locIcon)
locIcon.src = './../images/localization_icon.svg'


const middle = document.createElement("div")
middle.classList.add("middle")
container1.appendChild(middle)
const img1 = document.createElement("img")
img1.classList.add("img1")
middle.appendChild(img1)
img1.src = './../images/Day Sun.png'

const celcius = document.createElement("p")
celcius.classList.add("celcius")
middle.appendChild(celcius)
celcius.innerText = "26°"

const sunny = document.createElement("p")
sunny.classList.add("sunny")
middle.appendChild(sunny)
sunny.innerText = "Sunny"


const bottom = document.createElement("div")
bottom.classList.add("bottom")
container1.appendChild(bottom)

const button1 = document.createElement("button")
button1.classList.add("button1")
button1.innerText = "change mode"
bottom.appendChild(button1)
button1.addEventListener("click", myFunction()) 
function myFunction() {
    // container1.style.backgroundColor = "#17202e" 
    // locall.innerText.style.backgroundColor= "white"
    // celcius.innerText.style.backgroundColor = "white"
    sunny.innerText = "Clear"
    
}







