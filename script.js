var sepet = JSON.parse(localStorage.getItem("sepet")) || [];

function sepeteEkle(urun, fiyat) {
    sepet.push({
        ad: urun,
        fiyat: fiyat
    });

    localStorage.setItem("sepet", JSON.stringify(sepet));

    var sayac = document.getElementById("cartCount");

    if (sayac) {
        sayac.innerHTML = sepet.length;
    }
console.log(sepet.length);
    alert(urun + " sepete eklendi!");
}

function filtrele(kategori) {
    var kartlar = document.getElementsByClassName("card");

    for (var i = 0; i < kartlar.length; i++) {
        var kartKategori =
            kartlar[i].getAttribute("data-category") || "";

        if (
            kategori === "hepsi" ||
            kartKategori.includes(kategori)
        ) {
            kartlar[i].style.display = "block";
        } else {
            kartlar[i].style.display = "none";
        }
    }
}

window.onload = function () {
    var sayac = document.getElementById("cartCount");

    if (sayac) {
        sayac.innerHTML = sepet.length;
    }

    var arama = document.getElementById("arama");

    if (arama) {
        arama.onkeyup = function () {
            var yazilan = arama.value.toLowerCase();
            var kartlar = document.getElementsByClassName("card");

            for (var i = 0; i < kartlar.length; i++) {
                var baslik = kartlar[i].getElementsByTagName("h3")[0];

                if (
                    baslik &&
                    baslik.innerHTML.toLowerCase().includes(yazilan)
                ) {
                    kartlar[i].style.display = "block";
                } else {
                    kartlar[i].style.display = "none";
                }
            }
        };
    }
};var favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];

function favoriyeEkle(urun){

    favoriler.push(urun);

    localStorage.setItem("favoriler", JSON.stringify(favoriler));

    alert(urun + " favorilere eklendi ❤️");

}var kullanici = localStorage.getItem("hkKullanici");
var giris = localStorage.getItem("girisYapildi");

if(giris === "evet" && kullanici){

    document.getElementById("kullaniciAdi").innerHTML =
    "👋 Merhaba, " + kullanici;

}var cikisBtn = document.getElementById("cikisBtn");

if(giris === "evet" && kullanici){

    document.getElementById("kullaniciAdi").innerHTML =
    "👋 Merhaba, " + kullanici;

    cikisBtn.style.display = "inline-block";

    cikisBtn.onclick = function(){

        localStorage.removeItem("girisYapildi");

        alert("Çıkış yapıldı.");

        location.reload();

    };

}var sayac = document.getElementById("cartCount");

if (sayac) {
    sayac.innerHTML = sepet.length;
}