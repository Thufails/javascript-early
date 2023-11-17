// const endpoint = 'https://jsonplaceholder.typicode.com/users/'

// /* Async/await */
// async function user(id) {
//     let response = await fetch(endpoint + id)
//     response = response.json
//     console.log(response)
// }

// user(3)


// url - pokemon abilities
const url = "https://pokeapi.co/api/v2/ability/";

// fetch untuk mengirim permintaan GET ke URL
fetch(url)
    // rantai promise, ketika resnponse dari permintaan telah diteirma
    .then((response) => {
        if (!response.ok) {
            throw new Error("Permintaan tidak berhasil. Kode status: " + response.status);
        }
        return response.json();
    })
    .then((data) => {
        // Loop melalui daftar abilities dan mencetak nama dan effect_changes
        data.results.forEach((ability) => {
            fetch(ability.url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Permintaan tidak berhasil. Kode status: " + response.status);
                    }
                    return response.json();
                })
                .then((abilityData) => {
                    console.log("Nama Ability:", abilityData.name);
                    console.log("Effect Changes:", abilityData.effect_changes);
                    console.log("-".repeat(50));
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    })
    .catch((error) => {
        console.error("Error:",  error);    
    });


// abstraction
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        // metode abstraksi 
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} menggonggong!`);
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} mengeong!`);
    }
}

const myDog = new Dog('Dogy');
const myCat = new Cat('Meowgy');

myDog.makeSound();
myCat.makeSound();