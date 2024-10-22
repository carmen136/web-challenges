export function getAnimal(animal) {
    if(animal === undefined) {
        return "I do not like animals at all!"
    } else if(animal === "dogs") {
        return "I like dogs!"
    } else if(animal === "cats") {
        return "I totally love cats!"
    } else {
    return `I like ${animal}s`}
}


console.log(getAnimal("dogs"))
console.log(getAnimal("cats"))
console.log(getAnimal())
console.log(getAnimal("snake"))