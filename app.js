window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sounds")
    const pads = document.querySelectorAll(".pads div")
    const bubbles = document.querySelector(".bubbles")
    const colors = [
        "cadetblue",
        "rgb(235, 64, 12)",
        "rgb(73, 38, 170)",
        "rgb(207, 238, 70)",
        "rgb(22, 206, 46)",
        "rgb(20, 19, 19)"
    ]

    pads.forEach((pad, index) => {
        pad.addEventListener("click", () => {
            pad.style.animation = 'pop 1s ease'
            sounds[index].currentTime = 0
            sounds[index].play()
            createBubble(index)
        })    
    })

    const createBubble = index => {
        const bubble = document.createElement("div")
        bubbles.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener("animationend", function() {
            bubbles.removeChild(this)
        })
    }
})