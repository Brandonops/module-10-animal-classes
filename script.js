const fs = require('fs');
const {Animal, Dog, Cat, Bird} = require('./Animal')

//Question 1 & 2: Passing arguments and reading file
const content =  fs.readFileSync(process.argv[2], 'utf-8')

//Question 3: splitting the string to an array
let data = content.split("\n")
data.shift()
data = data.map(item => item.slice(1,-1).split('","'))


//Question 4: creating objects from data
const animals = data.map((row) => {
    switch(row[2]) {
        case 'dog':
            return new Dog(row[0], row[1], row[2])
        case 'cat':
            return new Cat(row[0], row[1], row[2])
        case 'bird':
            return new Bird(row[0], row[1], row[2])
        default:
            return new Animal(row[0], row[1], row[2])

    }
})




//Question 5: 
animals.forEach(animal => {
    const animalSpeak = animal.speak()
    const animalAge = animal.getAge()
    animal.speak = animalSpeak
    animal.age = animalAge
})

//FInd most frequent group
const groupedAnimals = {}

animals.forEach((animal) => {
    if (!groupedAnimals[animal.species]) {
        groupedAnimals[animal.species] = []
    }

    groupedAnimals[animal.species].push(animal)
})

const species = Object.keys(groupedAnimals)
species.sort((a, b) => {
    return groupedAnimals[a].length < groupedAnimals[b].length ? 1: -1
})

const mostFreqGroup = groupedAnimals[species[0]]


mostFreqGroup.sort((a,b) => {
    if (a.birthday === b.birthday) {
        return 0;
    } else if ( a.birthday < b.birthday) {
        return -1
    } else {
        return 1
    }
})



console.log(species)
console.log(mostFreqGroup)