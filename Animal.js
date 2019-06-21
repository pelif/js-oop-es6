class Animal {
    say() {
        console.log('')
    }
}

class Bird extends Animal {
    say() {
        console.log('Bird Sound')
    }
}

class Parrot extends Bird {
    say() {
        console.log('Parrot Sound')
    }
}

const animal = new Animal()
const bird = new Bird()
const parrot = new Parrot()

animal.say()
bird.say()
parrot.say()
