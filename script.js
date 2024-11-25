let quize = [
    {
        "question": "What is the capital of France?",
        ans1: "Paris",
        ans2: "London",
        ans3: "Berlin",
        ans4: "Madrid",
        currect: "Paris"
    },
    {
        "question": "What is the capital of Germany?",
        ans1: "Berlin",
        ans2: "Munich",
        ans3: "Hamburg",
        ans4: "Frankfurt",
        currect: "Berlin"
        },
        {
            "question": "What is the capital of Italy?",
            ans1: "Rome",
            ans2: "Milan",
            ans3: "Venice",
            ans4: "Florence",
            currect: "Rome"
            },
            {
                "question": "What is the capital of Spain?",
                ans1: "Madrid",
                ans2: "Barcelona",
                ans3: "Seville",
                ans4: "Valencia",
                currect: "Madrid"
                }
]

let myques = document.getElementById('my-ques')

// console.log(myques)
// console.log(myques.textContent)

let textopa = document.getElementById('text-op-a')
let textopb = document.getElementById('text-op-b')
let textopc = document.getElementById('text-op-c')
let textopd = document.getElementById('text-op-d')
// console.log(textopa)
// console.log(textopb)
// console.log(textopc)
// console.log(textopa.innerText)
// console.log(textopb.innerText)
// console.log(textopc.innerText)

let subBtn = document.getElementById('sub-btn')

let currentQuestion = 0
let score = 0

// console.log(quize[currentQuestion].question)
// console.log(quize[currentQuestion].ans1)
// console.log(quize[currentQuestion].ans2)
// console.log(quize[currentQuestion].ans3)
// console.log(quize[currentQuestion].ans4)

myques.textContent = quize[currentQuestion].question
textopa.textContent = quize[currentQuestion].ans1
textopb.textContent = quize[currentQuestion].ans2
textopc.textContent = quize[currentQuestion].ans3
textopd.textContent = quize[currentQuestion].ans4

let checkedOrNot = document.querySelectorAll('.answer')
console.log(checkedOrNot)

// subBtn.addEventListener("click",()=>{
//     checkedOrNot.forEach((answer)=>{
//         console.log(answer.checked)
//       })
// })

subBtn.addEventListener("click",()=>{
    let checkedAns = document.querySelector('input[type="radio"]:checked')
    // console.log(checkedAns.nextElementSibling.textContent)
    if (checkedAns == null) {
        alert("Please checked Answer")
    }
    if(checkedAns.nextElementSibling.textContent === quize[currentQuestion].currect){
        score += 1
    }
    checkedAns.checked = false
    currentQuestion += 1
    if (currentQuestion < quize.length) {
        myques.textContent = quize[currentQuestion].question
        textopa.textContent = quize[currentQuestion].ans1
        textopb.textContent = quize[currentQuestion].ans2
        textopc.textContent = quize[currentQuestion].ans3
        textopd.textContent = quize[currentQuestion].ans4
        // checkedAns.checked = false
    }
    else{
        alert("Your score is " + score + "/" + quize.length)
        location.reload()
    }
})


                            //    importants                         

1//location.reload()

2//     checkedOrNot.forEach((answer)=>{
//         console.log(answer.checked)
//       })

3// let checkedAns = document.querySelector('input[type="radio"]:checked')

4// console.log(checkedAns.nextElementSibling.textContent)

