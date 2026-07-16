var sepet = JSON.parse(localStorage.getItem("sepet")) || [];

document.getElementById("siparisBtn").onclick = function () {

    var adSoyad = document.getElementById("adSoyad").value.trim();
    var telefon = document.getElementById("telefon").value.trim();
    var adres = document.getElementById("adres").value.trim();
    var siparisNotu = document.getElementById("not").value.trim();

    if (adSoyad === "" || telefon === "" || adres === "") {
        alert("Ad soyad, telefon ve adres alanlarını doldur!");
        return;
    }

    if (sepet.length === 0) {
        alert("Sepetin boş!");
        return;
    }

    var mesaj = "Merhaba HKFASHION,%0A%0A";
    mesaj += "Yeni sipariş bilgileri:%0A%0A";
    mesaj += "Ad Soyad: " + adSoyad + "%0A";
    mesaj += "Telefon: " + telefon + "%0A";
    mesaj += "Adres: " + adres + "%0A";

    if (siparisNotu !== "") {
        mesaj += "Sipariş Notu: " + siparisNotu + "%0A";
    }

    mesaj += "%0ASipariş:%0A";

    var toplam = 0;

    for (var i = 0; i < sepet.length; i++) {

        mesaj += "• " + sepet[i].ad;

        if (Number(sepet[i].fiyat) > 0) {
            mesaj += " - " + sepet[i].fiyat + " TL";
            toplam += Number(sepet[i].fiyat);
        }

        mesaj += "%0A";
    }

    if (toplam > 0) {
        mesaj += "%0AToplam: " + toplam + " TL";
    } else {
        mesaj += "%0AFiyat bilgisi için iletişime geçilecek.";
    }

var link =
"https://wa.me/905412098671?text=" + encodeURIComponent(mesaj);

window.open(link, "_blank");
};