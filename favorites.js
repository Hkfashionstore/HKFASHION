var favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];

var alan = document.getElementById("favoriAlani");

function favorileriGoster() {

    alan.innerHTML = "";

    if (favoriler.length == 0) {

        alan.innerHTML = `
        <div class="card">

            <h3>❤️ Favoriniz Yok</h3>

            <p>Henüz favorilere ürün eklemediniz.</p>

            <a href="index.html">
                <button>Alışverişe Devam Et</button>
            </a>

        </div>
        `;

        return;

    }

    for (var i = 0; i < favoriler.length; i++) {

        alan.innerHTML += `
        <div class="card">

            <h3>${favoriler[i]}</h3>

            <button onclick="favoriSil(${i})">
                🗑️ Favoriden Sil
            </button>

        </div>
        `;

    }

}

function favoriSil(index){

    favoriler.splice(index,1);

    localStorage.setItem(
        "favoriler",
        JSON.stringify(favoriler)
    );

    favorileriGoster();

}

favorileriGoster();