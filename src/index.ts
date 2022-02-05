import './style.css'
import SeaTurtle from './assets/images/sea-turtle.png'
import Pig from './assets/images/pig.png'

const header = document.createElement('h1')
header.innerHTML = "I am a header... weeee!"
header.classList.add('hello')

const seaTurtleImage = new Image()
seaTurtleImage.src = SeaTurtle

const pigImage = new Image()
pigImage.src = Pig

const body = document.body
body.appendChild(header)
body.appendChild(seaTurtleImage)
body.appendChild(pigImage)

document.title = "Starter project"

export {}