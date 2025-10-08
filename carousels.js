function slide(){
    let carouselStyle = `      
    <div id="window2" class="w-50 h-75 bg-dark d-flex align-items-center rounded-3">
    <div id="carouselExample" class="carousel slide w-100">
    <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="IMAGENS/vscodeIcon.png" class="" alt="...">    
    </div>
    <div class="carousel-item">
    <img src="IMAGENS/vscodeIcon.png" class="" alt="...">
    </div>
    <div class="carousel-item">
    <img src="IMAGENS/vscodeIcon.png" class="" alt="...">
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
    </div> 
    </div>
    `;
    
    const carouselPosition = document.
    getElementById("window")
    .insertAdjacentHTML("afterbegin", carouselStyle)
}