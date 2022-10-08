function setCount(ano, mes, dia, horas, minutos, segundos){
   
    let count = new  Date(ano, (mes - 1), dia, horas, minutos, segundos).getTime()



let x = setInterval(()=>{
    let now = new Date().getTime()
    let nowTime = count - now

    let days = Math.floor(nowTime/(1000 * 60 * 60 * 24))
    let hours = Math.floor((nowTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((nowTime % (1000 * 60 * 60))/ (1000 * 60))
    let seconds = Math.floor((nowTime % (1000 * 60)) / 1000)

    let countDays = document.querySelector('.dias span:nth-of-type(2)')
    let countHours = document.querySelector('.horas span:nth-of-type(2)')
    let countMinutes = document.querySelector('.minutos span:nth-of-type(2)')
    let countSeconds = document.querySelector('.segundos span:nth-of-type(2)')

    

    

    countDays.innerText = days
    countHours.innerText = hours < 10 ? `0${hours}` : hours
    countMinutes.innerText = minutes < 10 ? `0${minutes}` : minutes
    countSeconds.innerText = seconds < 10 ? `0${seconds}` : seconds

    if(nowTime <= 0){
        countDays.innerText = '0'
        countHours.innerText = '0'
        countMinutes.innerText = '0'
        countSeconds.innerText = '0'
        clearInterval(x)
    }

},1000)
}

document.querySelector('#informar').addEventListener('click', e =>{
    e.preventDefault()
    const data = document.querySelector('input[type="date"]')
    const time = document.querySelector('input[type="time"]')
    if(!data.value || !time.value){
        return alert('Preencha a data e hora corretamente')
    }
    
    const arrData = data.value.split('-')
    const arrtime = time.value.split(':')
    const arr = [...arrData, ...arrtime, '0']
    const arrNumber = arr.map(e => Number(e))

    setCount(arrNumber[0], arrNumber[1], arrNumber[2], arrNumber[3], arrNumber[4], arrNumber[5])
})


//Button modal

const buttonActiveModal = document.querySelector('.inscreva-se button')
const divContainerModal = document.querySelector('.modal-container')

buttonActiveModal.addEventListener('click', e =>{
    e.preventDefault()
    divContainerModal.classList.toggle('active')
})

document.addEventListener('click', e =>{
    console.log(e.target.classList)
    if(e.target.classList[0] === 'exit' || e.target.classList[0] === 'modal-container'){
    divContainerModal.classList.toggle('active')

    }
})

document.querySelector('#enviar').addEventListener('click', e =>{
    e.preventDefault()
    divContainerModal.classList.toggle('active')

})