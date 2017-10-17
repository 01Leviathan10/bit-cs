// 'use strict'
// var samoglasnici = function (string) {
//     var kaunter = 0;
//     var str = string.toLowerCase();
//     for (var i = 0; i < str.length; i++) {
//         var element = str[i];
//         if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") {
//             kaunter++;
//         }

//     }
//     return kaunter
// }
// // console.log(samoglasnici('AWDAWDhabfuyrbfuybrfuetvrf'));

// var print = function (a) {
//     console.log(a);
// }
// var spajanjeNiza = function (niz1, niz2) {
//     var niz3 = [];
//     var brojac = 0;
//     if (niz1.length === niz2.length) {
//         for (var i = 0; i < niz1.length * 2; i += 2) {
//             niz3[i] = niz1[brojac];
//             niz3[i + 1] = niz2[brojac];
//             brojac++;
//         }
//     }
//     else if (niz1.length > niz2.length) {
//         var brojac = 0;
//         var brojac2 = 0;
//         while (niz2[brojac2]) {
//             niz3[brojac] = niz1[brojac2];
//             niz3[brojac + 1] = niz2[brojac2];
//             brojac += 2;
//             brojac2++;
//         }
//         for (var i = 0; i < niz1.length - niz2.length; i++) {
//             niz3[brojac] = niz1[brojac2];
//             brojac++;
//             brojac2++;

//         }
//     }


//     else {
//         var brojac = 0;
//         var brojac2 = 0;
//         while (niz1[brojac2]) {
//             niz3[brojac] = niz1[brojac2];
//             niz3[brojac + 1] = niz2[brojac2];
//             brojac += 2;
//             brojac2++;
//         }
//         for (var i = 0; i < niz2.length - niz1.length; i++) {
//             niz3[brojac] = niz2[brojac2];
//             brojac++;
//             brojac2++;

//         }
//     }
//     return niz3;
// }
// // print(spajanjeNiza([1,2,3,4,5],["a","b","c"]));

function funrotate(arrey, number) {

    var store = [];
    for (var i = number, j = 0; i < arrey.lenght; i++) {
        store[j] = arrey[i];
        j++;
    }
    for (var i = 0; i < number; i++) {

        store[j] = arrey[i];
        j++;
    }
    return store;


}

console.log(funrotate([1, 2, 3, 4, 5], 3))


