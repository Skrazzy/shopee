// src/lib/utils.js

export function startCountdown() {
    // Contagem regressiva principal (1 hora)
    const hoursElement = document.querySelector('.countdown-hours')
    const minutesElement = document.querySelector('.countdown-minutes')
    const secondsElement = document.querySelector('.countdown-seconds')
  
    if (hoursElement && minutesElement && secondsElement) {
      let hours = 1
      let minutes = 0
      let seconds = 0
  
      function updateDisplay() {
        hoursElement.textContent = hours.toString().padStart(2, '0')
        minutesElement.textContent = minutes.toString().padStart(2, '0')
        secondsElement.textContent = seconds.toString().padStart(2, '0')
      }
  
      let countdownInterval = null
  
      // Limpa intervalo anterior se existir
      if (window._countdownInterval) {
        clearInterval(window._countdownInterval)
      }
  
      countdownInterval = setInterval(() => {
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          clearInterval(countdownInterval)
          // Reinicia o countdown quando chegar a zero
          hours = 1
          minutes = 0
          seconds = 0
        }
        updateDisplay()
      }, 1000)
  
      // Salva referência do intervalo
      window._countdownInterval = countdownInterval
  
      updateDisplay()
    }
  
    // Contagem regressiva de urgência (1 hora)
    const urgentElement = document.querySelector('.countdown-urgent')
    if (urgentElement) {
      let hours = 1
      let minutes = 0
      let seconds = 0
  
      function updateUrgentDisplay() {
        urgentElement.textContent = 
          `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      }
  
      let urgentInterval = null
  
      // Limpa intervalo anterior se existir
      if (window._urgentInterval) {
        clearInterval(window._urgentInterval)
      }
  
      urgentInterval = setInterval(() => {
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          clearInterval(urgentInterval)
          // Reinicia o countdown quando chegar a zero
          hours = 1
          minutes = 0
          seconds = 0
        }
        updateUrgentDisplay()
      }, 1000)
  
      // Salva referência do intervalo
      window._urgentInterval = urgentInterval
  
      updateUrgentDisplay()
    }
  }
  
  // Função para garantir que os intervalos são limpos quando o componente é desmontado
  export function clearCountdowns() {
    if (typeof window !== 'undefined') {
      if (window._countdownInterval) {
        clearInterval(window._countdownInterval)
        window._countdownInterval = null
      }
      if (window._urgentInterval) {
        clearInterval(window._urgentInterval)
        window._urgentInterval = null
      }
    }
  }
  
  export function generateRandomTime() {
    const hours = Math.floor(Math.random() * 24)
    const minutes = Math.floor(Math.random() * 60)
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  }
  
  export function formatReviewDate() {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    
    const time = generateRandomTime()
    const day = yesterday.getDate().toString().padStart(2, '0')
    const month = (yesterday.getMonth() + 1).toString().padStart(2, '0')
    const year = yesterday.getFullYear()
    
    return `${day}/${month}/${year} ${time}`
  }