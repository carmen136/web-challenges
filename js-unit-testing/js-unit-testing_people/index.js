

export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map(person => {
    return `${person.firstName} ${person.lastName}`;
  });
  }

export function getNameAndAge(people) {
  return people.map(person => {
    return `${person.lastName} (${person.age})`;
  });
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
  }


export function getPeopleNamesOlderThan(people, age) {
  return people
  .filter((person) => person.age > age)
  .map((person) => `${person.firstName} ${person.lastName}`)
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName)
}


export function findPersonById(people, id) {
  return people.filter((person) => person.id === id)
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age )
}

export function getFullNamesSortedByAge(people) {
  return people
  .toSorted((personA, personB) => personA.age - personB.age)
  .map((person) => person.lastName)
}



