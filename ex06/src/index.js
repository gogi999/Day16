const firstName = (firstName) => {
    return firstName.toUpperCase();
}

const lastName = (lastName) => {
    return lastName.toLowerCase();
}

console.log(firstName("Goran"));
console.log(lastName("Petrovic"));

module.exports = {
    firstName,
    lastName
}
