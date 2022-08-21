const hoursMinutesSeconds = document.querySelector('.hours-minutes-seconds')
const amPm = document.querySelector('.am-pm')
const date = document.querySelector('.date')
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const displayContainer = document.querySelector('.display')

const clockElements = Array.from(displayContainer.children)

const weekDays = [ 'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado' ]
const monthNames = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit
const getAmOrPm = hours => hours >= 12 ? 'PM' : 'AM'

const hourAs12Or00 = hours => {
  if (hours === 0) {
    hours = 12
  } else if (hours > 12) {
    hours - 12
  } else {
    hours
  }

  return hours
}

const updateClock = () => {
  const present = new Date()
  const hours = formatTimeUnit(present.getHours())
  const minutes = formatTimeUnit(present.getMinutes())
  const seconds = formatTimeUnit(present.getSeconds()) 
  const weekDay = present.getDay()
  const monthDay = present.getDate()
  const month = present.getMonth()
  const year = present.getFullYear()

  const currentTime = `${hours}:${minutes}:${seconds}`
  const currentDate = `${weekDays[weekDay]} , ${monthDay} de ${monthNames[month]} de ${year}`

  hourAs12Or00(hours)

  amPm.textContent = getAmOrPm(hours)
  hoursMinutesSeconds.textContent = currentTime
  date.textContent = currentDate
}

setInterval(updateClock, 1000)

button1.addEventListener('click', () => clockElements
  .forEach(element => element.classList.add('hidden')))
button2.addEventListener('click', () => clockElements
  .forEach(element => element.classList.remove('hidden')))