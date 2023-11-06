class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
        }
    }
}

// Creiamo due utenti
const user1 = new User("Alice", "Smith", 30, "New York");
const user2 = new User("Bob", "Johnson", 25, "Los Angeles");

// Eseguiamo il confronto tra le età
console.log(user1.compareAge(user2)); // Alice è più vecchio di Bob
