function renderCard(m, index) {
    let container = document.getElementById("container");
    const card = document.createElement("div");
    card.classList.add("peli");

    card.innerHTML = `
    <div class="peli">
                    <div >
                        <img src="${m.fotoc}" class="portada">
                    </div>
        
                    <div class="adentro">

                        <div class="calif">
                            <div class="rtn">
                                <h2> Ratings: </h2>
                            </div>
        
                            <div class="estrellitas">
                                <img src="./iconos/yellow_fill_star.png" class="star">
                                <img src="./iconos/yellow_fill_star.png" class="star">
                                <img src="./iconos/yellow_fill_star.png" class="star">
                                <img src="./iconos/yellow_fill_star.png" class="star">
                                <img src="./iconos/yellow_outline_star.png" class="star">
                            </div>
                        </div>
                        
                        <div class="grd">
                            <img src="./iconos/baseline_bookmark_border_white_48dp.png" class="gurd">
                        </div>
    
                    </div>
                </div>
                `
;

card.addEventListener("click", function () {
    renderBanner(m);
});

container.appendChild(card);
}


function renderBanner(m) {
    let bannerContainer = document.getElementById("banner-container");
    bannerContainer.innerHTML = "";

    bannerContainer.innerHTML = `
    <div class="principal">

    <div class="lulu">

    <div class="fotol">
                <image class="fotoo" src= " ${m.fotob} "></image>

            </div>

        <div class="interior">

        
    <div class="titulolulu">
    <h1> <strong> ${m.titulo}</strong> </h1> 
    <h5> ${m.rating}</h5>
</div>



<div class="contenido">
    <p> ${m.descripcion1} </p> &nbsp;
    <p> ${m.descripcion2} </p>
</div>



<div class="btn">
   <button class="botoncitoplay"> <img src="./iconos/baseline_play_arrow_white_48dp.png" class="play"> <strong> Play </strong></button>
    <button class="botoncitosave"> <strong> Save </strong><img src="./iconos/baseline_bookmark_border_white_48dp.png" class="save"> </button>
    <h4> ${m.edad}</h4> 
</div>

</div>
        </div>

        
    </div>

`;
}


function renderCard2(m, index) {
    let container = document.getElementById("container2");
    const card = document.createElement("div");
    card.classList.add("peli");

    card.innerHTML = `
    <div class="peli">
                    <div >
                        <img src="${m.fotoc}" class="portada">
                    </div>
        
                    <div class="adentro">

                        <div class="calif">
                            <div class="rtn">
                                <h2> Ratings: </h2>
                            </div>
        
                            <div class="estrellitas">
                                <img src="./iconos/yellow_fill_star.png" class="star">
                                <img src="./iconos/yellow_fill_star.png" class="star">
                                <img src="./iconos/yellow_fill_star.png" class="star">
                                <img src="./iconos/yellow_fill_star.png" class="star">
                                <img src="./iconos/yellow_outline_star.png" class="star">
                            </div>
                        </div>
                        
                        <div class="grd">
                            <img src="./iconos/baseline_bookmark_border_white_48dp.png" class="gurd">
                        </div>
    
                    </div>
                </div>
                `
;

card.addEventListener("click", function () {
    renderBanner(m);
});

container.appendChild(card);
}




renderBanner(movies[0]);

for (let i = 0; i < firstLineMovies.length; i++) {
    renderCard(firstLineMovies[i], i);
}

for (let i = 0; i < secondLineMovies.length; i++) {
    renderCard2(secondLineMovies[i], i);
}