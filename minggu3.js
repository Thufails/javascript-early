// class InvalidRangeError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'InvalidRangeError'
//         this.code = 409
//         this.message = message
//     }
// }

// // try {
// //     sayHello('Welcome students');
// // } catch (err) {
// //     console.log('Error', err.message);
// // }

// try {
//     let input = window.prompt('Masukkan Angka');
//     //fungsi(123) // error yang tidak di expect / buat / input dari atas
//     if (parseInt(input) > 10) {
//         throw new InvalidRangeError('angka terlalu besar') //kode eror 500 (native)
//     }

//     console.log('Berhasil')
// } catch (error) {
//     if (error instanceof InvalidRangeError) {
//         console.log(`Gagal`, error.name)
//         console.log(`Gagal kode`, error.code)
//         console.log(`Gagal pesan`, error.message)
//     } else {
//         console.log('error biasa', error.message) //maka ini adalah eksekusi eror 18s
//     }
// }

function takeOff(altitude) {
    if (altitude > 10000) {
        throw new Error("Ketinggian terlalu tinggi!");
    } else if (altitude < 0) {
        throw new Error("Ketinggian tidak valid!");
    } else {
        return "Pesawat lepas landas menuju ketinggian " + altitude + " meter.";
    }
}

function flightSimulation(altitude) {
    const altitude = parseInt(prompt('Masukkan Ketinggian Pesawat:'));
    try {
        const message = takeOff(altitude);
        console.log(message);
    } catch (error) {
        console.error(error.message);
    }
}

// flightSimulation(12000);
// flightSimulation(-500);
// flightSimulation(8000);