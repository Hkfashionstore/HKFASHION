var sepet = JSON.parse(localStorage.getItem("sepet")) || [];

var alan = document.getElementById("sepetAlani");

function sepetiGoster() {

    alan.innerHTML = "";

    if (sepet.length == 0) {

        alan.innerHTML = `
        <div class="card">
            <h3>🛒 Sepetiniz Boş</h3>
            <p>Henüz ürün eklemediniz.</p>

            <a href="index.html">
                <button>Alışverişe Devam Et</button>
            </a>
        </div>
        `;

        return;
    }

    var toplam = 0;

    for (var i = 0; i < sepet.length; i++) {

        toplam += Number(sepet[i].fiyat);

        alan.innerHTML += `
        <div class="card">

            <h3>${sepet[i].ad}</h3>

            <p class="price">
                ${sepet[i].fiyat == 0 ? "Fiyat için iletişime geçin" : sepet[i].fiyat + " TL"}
            </p>

            <button onclick="urunSil(${i})">
                🗑️ Sepetten Sil
            </button>

        </div>
        `;
    }

    alan.innerHTML += `
    <div class="card">

        <h2>Toplam</h2>

        <p class="price">
            ${toplam == 0 ? "Fiyat için iletişime geçin" : toplam + " TL"}
        </p>

<a href="checkout.html">
<button>
📦 Siparişi Tamamla
</button>
</a>

    </div>
    `;

}

function urunSil(index){

    sepet.splice(index,1);

    localStorage.setItem("sepet",JSON.stringify(sepet));

    sepetiGoster();

}

function siparisVer(){

    if(sepet.length==0){

        alert("Sepetiniz boş!");

        return;

    }

    var mesaj="Merhaba HKFASHION,%0A%0ASipariş vermek istiyorum:%0A";

    for(var i=0;i<sepet.length;i++){

        mesaj += "• " + sepet[i].ad + "%0A";

    }

    window.open(
    "https://wa.me/905412098671?text="+mesaj,
    "_blank"
    );

}

sepetiGoster();