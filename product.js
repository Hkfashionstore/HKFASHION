const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const urunler = {
    1: {
        ad: "Prada Kahverengi Gözlük",
        fiyat: "Fiyat için iletişime geçin",
        resim: "https://picsum.photos/500/500?random=11",
        aciklama: "Şık ve kaliteli Prada kahverengi gözlük."
    }
};

if (urunler[id]) {

    document.getElementById("urunResim").src =
        urunler[id].resim;

    document.getElementById("urunAd").innerHTML =
        urunler[id].ad;

    document.getElementById("urunFiyat").innerHTML =
        urunler[id].fiyat;

    document.getElementById("urunAciklama").innerHTML =
        urunler[id].aciklama;

    document.getElementById("ekleBtn").onclick = function () {

        var sepet = JSON.parse(localStorage.getItem("sepet")) || [];

        sepet.push({
            ad: urunler[id].ad,
            fiyat: 0
        });

        localStorage.setItem("sepet", JSON.stringify(sepet));

        alert("Ürün sepete eklendi!");

    };

}var yorumlar =
JSON.parse(localStorage.getItem("yorumlar_" + id)) || [];

function yorumlariGoster(){

    var alan = document.getElementById("yorumlar");

    alan.innerHTML = "";

    if(yorumlar.length === 0){

        alan.innerHTML =
        '<p style="color:#888;margin-top:15px;">Henüz yorum yapılmamış.</p>';

        return;
    }

    for(var i = 0; i < yorumlar.length; i++){

        var yildiz = "";

        for(var j = 0; j < yorumlar[i].puan; j++){
            yildiz += "⭐";
        }

        alan.innerHTML += `
        <div class="comment">

            <div class="comment-stars">
                ${yildiz}
            </div>

            <p>${yorumlar[i].metin}</p>

        </div>
        `;
    }

}

document.getElementById("yorumBtn").onclick = function(){

    var metin =
    document.getElementById("yorumMetni").value.trim();

    var puan =
    Number(document.getElementById("puan").value);

    if(metin === ""){

        alert("Yorum alanını boş bırakma!");

        return;
    }

    yorumlar.push({
        metin: metin,
        puan: puan
    });

    localStorage.setItem(
        "yorumlar_" + id,
        JSON.stringify(yorumlar)
    );

    document.getElementById("yorumMetni").value = "";

    yorumlariGoster();

    alert("Yorumunuz eklendi!");

};

yorumlariGoster();