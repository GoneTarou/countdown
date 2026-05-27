import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    targetTime: String
  }

  connect() {
    this.updateCountdown()

    this.timer = setInterval(() => {
      this.updateCountdown()
    }, 1000)
  }

  disconnect() {
    clearInterval(this.timer)
  }

  updateCountdown() {
    const target = new Date(this.targetTimeValue)
    const now = new Date()

    const diff = target - now

    if (diff <= 0) {
      this.element.innerHTML = "🎉 Time Up!"
      clearInterval(this.timer)
      return
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    this.element.innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s`
  }
}