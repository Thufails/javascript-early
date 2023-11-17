// // Mendefinisikan URL API
// const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

// // Mendapatkan data Pokemon dari API
// async function getPokemonData(pokemonName) {
//     const response = await fetch(apiUrl + pokemonName);
//     const data = await response.json();
//     return data;
// }

// // Menampilkan data yang diinginkan
// async function displayPokemonInfo(pokemonName) {
//     try {
//         const pokemonData = await getPokemonData(pokemonName);

//         // Menampilkan nama Pokemon
//         console.log("Nama Pokemon:", pokemonData.name);

//         // Menampilkan URL Pokemon
//         console.log("URL Pokemon:", pokemonData.species.url);

//         // Menampilkan abilities
//         console.log("Abilities:");
//         pokemonData.abilities.forEach((ability) => {
//             console.log(ability.ability.name);
//         });

//         // Menampilkan effect_changes
//         console.log("Effect Changes:");
//         pokemonData.abilities.forEach((ability) => {
//             ability.effect_changes.forEach((effectChange) => {
//                 console.log(effectChange.name);
//             });
//         });
//     } catch (error) {
//         console.error("Terjadi kesalahan:", error);
//     }
// }

// // Menggunakan fungsi untuk menampilkan data Pokemon
// const pokemonName = "pikachu";
// displayPokemonInfo(pokemonName);

const BankAccount = require('./bank_account');

// Membuat instance BankAccount
const myAccount = new BankAccount();

// Simulasi transaksi asynchronous
async function jalan() {
    try {
        const depositAmount = parseFloat(window.prompt('Masukkan jumlah deposit:'));
        if (!isNaN(depositAmount)) {
            const depositResult = await myAccount.deposit(depositAmount);
            console.log(`Deposit ${depositAmount} berhasil. Saldo sekarang: ${depositResult}`);
        } else {
            console.log('Jumlah deposit tidak valid.');
        }

        const withdrawAmount = parseFloat(window.prompt('Masukkan jumlah penarikan:'));
        if (!isNaN(withdrawAmount)) {
            const withdrawResult = await myAccount.withdraw(withdrawAmount);
            console.log(`Penarikan ${withdrawAmount} berhasil. Saldo sekarang: ${withdrawResult}`);
        } else {
            console.log('Jumlah penarikan tidak valid.');
        }
    } catch (error) {
        console.error(error);
    }
}

// // Menjalankan simulasi transaksi
// jalan();