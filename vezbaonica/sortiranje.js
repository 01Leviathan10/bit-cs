let prviBroj = 2;
let drugiBroj = 0;
let treciBroj = 365;

if (prviBroj > drugiBroj && prviBroj > treciBroj) {
    if (drugiBroj > treciBroj) {
        console.log("Najveci broj je: " + prviBroj + " Zatim ide: " + drugiBroj + " Najmanji je: " + treciBroj);
    } else {
        console.log("Najveci broj je: " + prviBroj + " Zatim ide: " + treciBroj + " Najmanji je: " + drugiBroj);
    }
};

if (drugiBroj > prviBroj && drugiBroj > treciBroj) {
    if (prviBroj > treciBroj) {
        console.log("Najveci broj je: " + drugiBroj + " Zatim ide: " + prviBroj + " Najmanji je: " + treciBroj);
    } else {
        console.log("Najveci broj je: " + drugiBroj + " Zatim ide: " + treciBroj + " Najmanji je: " + prviBroj);
    }
}
if (treciBroj > prviBroj && treciBroj > drugiBroj) {
    if (prviBroj>drugiBroj) {
        console.log("Najveci broj je: " + treciBroj + " Zatim ide: " + prviBroj + " Najmanji je: " + drugiBroj);
    }
    else {
        console.log("Najveci broj je: " + treciBroj + " Zatim ide: " + drugiBroj + " Najmanji je: " + prviBroj);
    }
}
