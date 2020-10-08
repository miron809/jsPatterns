const car = {
  wheels: 4,

  init() {
    console.log(`I have ${this.wheels} and my owner is ${this.owner}`)
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Dmytro'
  }
})

carWithOwner.init()

console.log(carWithOwner.__proto__ === car)
