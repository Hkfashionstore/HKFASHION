document.addEventListener("DOMContentLoaded", function () {
    sepetSayisiniGuncelle();
    kullaniciBilgisiniGoster();
    aramayiHazirla();
});

function sepetiGetir() {
    return JSON.parse(localStorage.getItem("sepet")) || [];
}

function favorileriGetir() {
    return JSON.parse(localStorage.getItem("favoriler")) || [];
}

function sepeteEkle(ad, fiyat) {
    const sepet = sepetiGetir();

    sepet.push({
        ad: ad,
        fiyat: Number(fiyat) || 0
    });

    localStorage.setItem("sepet", JSON.stringify(sepet));

    sepetSayisiniGuncelle();

    alert(ad + " sepete eklendi.");
}

function favoriyeEkle(ad) {
    const favoriler = favorileriGetir();

    if (!favoriler.includes(ad)) {
        favoriler.push(ad);
        localStorage.setItem("favoriler", JSON.stringify(favoriler));
        alert(ad + " favorilere eklendi.");
    } else {
        alert("Bu ürün zaten favorilerde.");
    }
}

function sepetSayisiniGuncelle() {
    const sayac = document.getElementById("cartCount");

    if (!sayac) {
        return;
    }

    const sepet = sepetiGetir();
    sayac.textContent = sepet.length;
}

function filtrele(kategori) {
    const kartlar = document.querySelectorAll(".card");

    kartlar.forEach(function (kart) {
        const kategoriBilgisi =
            kart.getAttribute("data-category") || "";

        if (
            kategori === "hepsi" ||
            kategoriBilgisi.includes(kategori)
        ) {
            kart.style.display = "block";
        } else {
            kart.style.display = "none";
        }
    });
}

function aramayiHazirla() {
    const aramaKutusu = document.getElementById("arama");

    if (!aramaKutusu) {
        return;
    }

    aramaKutusu.addEventListener("input", function () {
        const aranan = aramaKutusu.value
            .toLocaleLowerCase("tr-TR")
            .trim();

        const kartlar = document.querySelectorAll(".card");

        kartlar.forEach(function (kart) {
            const urunAdi = kart.textContent
                .toLocaleLowerCase("tr-TR");

            if (urunAdi.includes(aranan)) {
                kart.style.display = "block";
            } else {
                kart.style.display = "none";
            }
        });
    });
}

function kullaniciBilgisiniGoster() {
    const kullaniciAlani =
        document.getElementById("kullaniciAdi");

    const cikisButonu =
        document.getElementById("cikisBtn");

    const kullanici =
        JSON.parse(localStorage.getItem("girisYapanKullanici"));

    if (kullaniciAlani && kullanici) {
        kullaniciAlani.textContent =
            "Merhaba, " +
            (kullanici.ad || kullanici.kullaniciAdi || "Kullanıcı");
    }

    if (cikisButonu && kullanici) {
        cikisButonu.style.display = "inline-block";
    }

    if (cikisButonu) {
        cikisButonu.addEventListener("click", function () {
            localStorage.removeItem("girisYapanKullanici");
            window.location.reload();
        });
    }
}