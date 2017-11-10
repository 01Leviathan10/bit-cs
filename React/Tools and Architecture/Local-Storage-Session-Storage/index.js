var dugme = document.getElementById("dugme");
dugme.onclick = function() {
    var brojac = localStorage.getItem("brojac");

    if (!brojac) {
        brojac = 0;
    }
    
    // if (typeof(Storage)!=="undefined") {
    //     console.log("browser podrzava storage")
    // }

    

    brojac++;
    document.getElementById("dugme").innerHTML = brojac;
    localStorage.setItem("brojac", brojac);

}
   





 


