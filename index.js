console.log("eksternal js")

// comment 1 line

/*
    comment lebih dari 1 line
*/

// variable Var
/*
        bersifat global scope 
        bisa di ressign dan redeclare
        bisa hoisting
*/
var nama = "Rafi"
console.log(nama)

//reasssign
var nama = "rafi edit"
console.log(nama)
    //redeclare
var nama = "rafi declare"
console.log(nama)
    //hoisting
address = "Jember"
var address
console.log(address)

// variable let
/*
        bersifat lokal scope & unique
        bisa di ressign 
        tidak bisa redeclare (nama variable tidak bisa sama)
        tidak bisa hoisting
*/
let age;
console.log(age)
    //reassign
age = 21
console.log(age)
    // redeclare
    // let age = 21;

// apa itu scope : semua yang ada didalam { }
let luarscope = "ini diluar scope"

function abc() {
    let dalamscope = "ini didalam scope"
    console.log(luarscope)
    console.log(dalamscope)
}
abc();

// variable const (egois)
/*
        bersifat lokal scope & unique
        hanya bisa diassign sekali
        harus ada valuenya
        tidak bisa redeclare (nama variable tidak bisa sama)
        tidak bisa hoisting
        case sensitives
*/
const NAMA_CONST = "Rafi"

var provinsi = "Jawa Timur";

switch (provinsi) {
    case "Jawa Tengah":
        console.log("Solo merupakan kota di Jawa Tengah");
        break;
    case "Jawa Barat":
        console.log("Bandung merupakan kota di Jawa Tengah");
        break;
    case "Bali":
        console.log("Kuta merupakan kota di Bali");
        break;
    case "Jawa Timur":
        console.log("Jember merupakan kota di Jawa Timur");
        break;
    default:
        console.log("Bukan Termasuk Jawa Timur");
}