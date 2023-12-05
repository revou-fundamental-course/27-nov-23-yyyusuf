function showContent(data, btn, opt) {
    
    var page = document.getElementById(data);
    var btnn = document.getElementById(btn);
    var getElem = document.querySelectorAll(".content-hidden");

    if (page.style.display === "block") {
        page.style.display = "none";
        btnn.blur();
    } else {
        getElem.forEach(function(item) {
            item.style.display = "none";
            })
        page.style.display = "block";
        btnn.focus();
    }
}

function showOptionSelected(data, parent){
    var selected = document.getElementById(data);
    var parent = document.getElementById(parent);
    
    parent.style.display = "none";
    selected.style.display = "block";
}

function showOption(data, parent) {
    var option = document.getElementById(data);
    var parentt = document.getElementById(parent);

    option.style.display = "inline-flex";
    parentt.style.display = "none";
}

function calculate(data){
    console.log(document.getElementById('segitiga-luas-alas').value);
    switch(data){
        case "segitiga-luas-hasil":
            if(document.getElementById('segitiga-luas-alas').value == "" || document.getElementById('segitiga-luas-tinggi').value == ""){
                alert("Salah satu kolom belum diisi");
            }
            else{
                var alas = parseInt(document.getElementById('segitiga-luas-alas').value);
                var tinggi = parseInt(document.getElementById('segitiga-luas-tinggi').value);
                var hasil = document.getElementById('segitiga-luas-hasil');

                hasil.innerHTML = "Luas = ½ x Alas x Tinggi <br> Luas = ½ x "+ alas + " x " + tinggi + "<br> Luas = " + 
                                   (alas * tinggi / 2) ;
            }
        break;

        case "segitiga-keliling-hasil":
            if(document.getElementById('segitiga-keliling-sisia').value == "" || document.getElementById('segitiga-keliling-sisib').value == ""
            || document.getElementById('segitiga-keliling-sisic').value == ""){
                alert("Salah satu kolom belum diisi");
            }
            else{
                var sisia = parseInt(document.getElementById('segitiga-keliling-sisia').value);
                var sisib = parseInt(document.getElementById('segitiga-keliling-sisib').value);
                var sisic = parseInt(document.getElementById('segitiga-keliling-sisic').value);
                var hasil = document.getElementById('segitiga-keliling-hasil');

                hasil.innerHTML = "Keliling = Sisi A + Sisi B + Sisi C <br> Keliling = "+ sisia + " + "+ sisib + " + " + sisic +
                "<br> Keliling = " + (sisia + sisib + sisic) ;
            }
        break;

        case "jajargenjang-luas-hasil":
            if(document.getElementById('jajargenjang-luas-alas').value == "" || document.getElementById('jajargenjang-luas-tinggi').value == ""){
                alert("Salah satu kolom belum diisi");
            }
            else{
                var alas = parseInt(document.getElementById('jajargenjang-luas-alas').value);
                var tinggi = parseInt(document.getElementById('jajargenjang-luas-tinggi').value);
                var hasil = document.getElementById('jajargenjang-luas-hasil');

                hasil.innerHTML = "Luas = Alas x Tinggi <br> Luas = "+ alas + " x " + tinggi + "<br> Luas = " + 
                                   (alas * tinggi) ;
            }
        break;

        case "jajargenjang-keliling-hasil":
            if(document.getElementById('jajargenjang-keliling-sisia').value == "" || document.getElementById('jajargenjang-keliling-sisib').value == ""){
                alert("Salah satu kolom belum diisi");
            }
            else{
                var sisia = parseInt(document.getElementById('jajargenjang-keliling-sisia').value);
                var sisib = parseInt(document.getElementById('jajargenjang-keliling-sisib').value);
                var hasil = document.getElementById('jajargenjang-keliling-hasil');

                hasil.innerHTML = "Keliling = ( 2 x Sisi A ) + (2 x Sisi B) <br> Keliling = ( 2 x "+ sisia + " ) + ( 2 x "+ sisib + " ) <br> Keliling = " + ((2*sisia) + (2*sisib)) ;
            }
        break;

    }

}

function reset(data){
    switch(data){
        case "segitiga-luas-hasil":
            document.getElementById('segitiga-luas-alas').value = "";
            document.getElementById('segitiga-luas-tinggi').value = "";
            document.getElementById('segitiga-luas-hasil').innerHTML = "";
        break;

        case "segitiga-keliling-hasil":
            document.getElementById('segitiga-keliling-sisia').value = "";
            document.getElementById('segitiga-keliling-sisib').value = "";
            document.getElementById('segitiga-keliling-sisic').value = "";
            document.getElementById('segitiga-keliling-hasil').innerHTML = "";
        break;

        case "jajargenjang-luas-hasil":
            document.getElementById('jajargenjang-luas-alas').value = "";
            document.getElementById('jajargenjang-luas-tinggi').value = "";
            document.getElementById('jajargenjang-luas-hasil').innerHTML = "";
        break;

        case "jajargenjang-keliling-hasil":
            document.getElementById('jajargenjang-keliling-sisia').value = "";
            document.getElementById('jajargenjang-keliling-sisib').value = "";
            document.getElementById('jajargenjang-keliling-hasil').innerHTML = "";
        break;
    }
}

function test() {
    alert("Tested!");
}