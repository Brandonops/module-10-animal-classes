class Animal {
    constructor(name, birthday, species) {
        this.name = name,
        this.birthday = new Date(birthday),
        this.species = species,
        this.noise = 'grunt'
    }

    speak() {
        return `${this.name} says ${this.noise}`
    }

    getAge() {
        let day = new Date()
        let actualAge = Math.abs(this.birthday.getFullYear() - day.getFullYear())
        return actualAge
    }
}



class Dog extends Animal {
    constructor(name, birthday, species) {
        super(name, birthday, species)
        this.noise = 'woof'
    }
}

class Cat extends Animal {
    constructor(name, birthday, species) {
        super(name, birthday, species)
        this.noise = 'meow'
    }
}

class Bird extends Animal {
    constructor(name, birthday, species) {
        super(name, birthday, species)
        this.noise = 'tweet'
    }
}

// const nelson = new Dog('nelson', '10-10-2021', 'dog')
// console.log(nelson)


module.exports = {Animal, Dog, Cat, Bird}