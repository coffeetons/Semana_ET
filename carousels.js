function slide() {
  var carouselPosition = document.getElementById("window");
  let carouselStyle = `
    <div id="window2"
         class="carousel-dark slideWidth slideHeight bg-dark border border-dark-subtle border-5"
         style="max-height: 70vh; display: flex; flex-direction: column;">

      <!-- Cabeçalho -->
      <div class="header w-100 bg-gray98 d-flex justify-content-between align-items-center">
        <p class="p-2 m-0">Ambientes de Desenvolvimento Integrado</p>
        <button style="border: 0" class="bg-gray98 p-2">
          <i class="fa-solid fa-circle-xmark fa-2xl" style="color: #e11b05;" onclick="removeWindow()"></i>
        </button>
      </div>

      <!-- Carousel -->
      <div id="carouselExample" class="carousel slide w-100 flex-grow-1" style="overflow: hidden;">
        <div class="carousel-inner h-100">

          <!-- SLIDE 1 -->
          <div class="carousel-item active h-100">
            <div class="scroll-area p-4 text-center text-light">
              <h1 class="text-danger mb-3">Ambientes de desenvolvimento integrados</h1>
              <p>No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas nós temos os ambientes de desenvolvimento.</p>
              <p>Os ambientes de desenvolvimento integrados ou IDEs (Integrated Development Environment) são programas que usamos para programar, seja para fazer sites, programas, código, etc.</p>
              <p>No Curso de DS nós usamos 4 ambientes de desenvolvimento.</p>
            </div>
          </div>

          <!-- SLIDE 2 -->
          <div class="carousel-item h-100">
            <div class="scroll-area p-4 text-center text-light">
              <h1 class="text-danger mb-3">Ambientes de desenvolvimento integrados</h1>
              <p>No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas nós temos os ambientes de desenvolvimento.</p>
              <div class="img d-flex justify-content-center my-3">
                <img src="IMAGENS/vscodeIcon.png" class="img-fluid" style="height: 10dvh;" alt="...">
              </div>
              <p>Os ambientes de desenvolvimento integrados ou IDEs (Integrated Development Environment) são programas que usamos para programar, seja para fazer sites, programas, código, etc.</p>
              <p>No Curso de DS nós usamos 4 ambientes de desenvolvimento.</p>
            </div>
          </div>

          <!-- SLIDE 3 -->
          <div class="carousel-item h-100">
            <div class="scroll-area p-4 text-center text-light">
              <h1 class="text-danger mb-3">Ambientes de desenvolvimento integrados</h1>
              <p>No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas nós temos os ambientes de desenvolvimento.</p>
              <div class="img d-flex justify-content-center my-3">
                <img src="IMAGENS/vscodeIcon.png" class="img-fluid" style="height: 10dvh;" alt="...">
              </div>
              <p>Os ambientes de desenvolvimento integrados ou IDEs (Integrated Development Environment) são programas que usamos para programar, seja para fazer sites, programas, código, etc.</p>
              <p>No Curso de DS nós usamos 4 ambientes de desenvolvimento.</p>
            </div>
          </div>
        </div>

        <!-- Controles -->
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

    <style>
      /* Área de rolagem interna */
      .scroll-area {
        max-height: 60vh;
        overflow-y: auto;
        scrollbar-gutter: stable;
      }

      /* Scrollbar visível e discreta */
      .scroll-area::-webkit-scrollbar {
        width: 8px;
      }
      .scroll-area::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 4px;
      }
      .scroll-area::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.6);
      }
    </style>
  `;

  carouselPosition.insertAdjacentHTML("afterbegin", carouselStyle);
}

function removeWindow() {
  const child = document.getElementById("window");
  child.removeChild(child.firstElementChild);
}
