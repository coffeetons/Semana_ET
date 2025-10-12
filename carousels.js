let index = 0;
// oiii
function slide(botaoPressionado) {
  var carouselPosition = document.getElementById("window");
  
  let carouselStyle = "";
  index++;

  if (botaoPressionado.id === "ide") {
    carouselStyle = `
          <div id="window${index}" class="carousel-dark slideWidth slideHeight bg-dark border border-dark-subtle border-5"
            style="max-height: 70vh; display: flex; flex-direction: column;">
            <div class="header w-100 bg-gray98 d-flex justify-content-between align-items-center">
              <p class="p-2 m-0">Ambientes de Desenvolvimento Integrado</p>
              <button style="border: 0" class="bg-gray98 ">
                <img src="fontawesome/circle-xmark-solid-full.svg" alt="" class="icon3" onclick="removeWindow('window${index}')">
              </button>
              </div>
            <div id="carouselExample" class="carousel slide w-100 flex-grow-1" style="overflow: hidden;">
              <div class="carousel-inner h-100">
                <!-- SLIDE 1 -->
                <div class="carousel-item active h-100" style="padding: 0px 9%; overflow:scroll ;">
                  <div class="scroll-area p-4 text-center text-light">
                    <h1 class="text-98 mb-3">Ambientes de desenvolvimento integrados</h1>
                    <p>No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas nós temos os
                      ambientes de desenvolvimento.</p>
                    <p>Os ambientes de desenvolvimento integrados ou IDEs (Integrated Development Environment) são programas que
                      usamos para programar, seja para fazer sites, programas, código, etc.</p>
                    <p>Ao longo do curso foram utilizados 5 ambientes, são eles:</p>
                    <ul class="d-flex flex-wrap justify-content-around">
                      <li class="mx-2"> <img class="icon" src="IMAGENS/vscodeIcon.png" alt="button">
                        <h6 class="px-2">Visual Studio Code</h6>
                      </li>
                      <li class="mx-2"> <img class="icon" src="IMAGENS/portugolIcon.webp" alt="button">
                        <h6 class="px-2">Portugol Studio </h6>
                      </li>
                      <li class="mx-2"> <img class="icon" src="IMAGENS/pycharm-icon.svg" alt="button">
                        <h6 class="px-2">PyCharm </h6>
                      </li>
                      <li class="mx-2"> <img class="icon" src="IMAGENS/sqlstudioIcon.webp" alt="button">
                        <h6 class="px-2">SSMS</h6>
                      </li>
                      <li class="mx-2"> <img class="icon" src="IMAGENS/vsstudioIcon.png" alt="button">
                        <h6 class="px-2">Visual Studio </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- SLIDE 2 -->
                <div class="carousel-item h-100" style="padding: 0px 9%; overflow: scroll;">
                  <div class="scroll-area p-4 text-center text-light">
                    <h1 class="text-98 mb-3 mt-3">Desenvolvimento Web utilizando o Visual Studio Code</h1>
            
                    <h3 id="sub">Desenvolvimento web</h3>
                    <p>Visual Studio Code ou VS Code foi a ferramenta que utilizamos para o desenvolvimento web, que estudamos na
                      matéria de PRE.</p>
                    <p>Onde nós fizemos páginas utilizando componentes das tags html, estilização CSS e lógica com o JavaScript.</p>
                    <div id="web" class="d-flex flex-row justify-content-center flex-wrap">
                      <div id="card" class="d-flex flex-column 98 rounded-2 p-2">
                        <img src="fontawesome/html5-brands-solid-full (1).svg" class="icon rounded-circle" alt="web stack">
                        <figcaption class="">HTML</figcaption>
                      </div>
                      <div id="card2" class="d-flex flex-column 98 rounded-2 p-2">
                        <img src="fontawesome/css3-alt-brands-solid-full.svg" class="icon rounded-circle" alt="web stack">
                        <figcaption class="">CSS</figcaption>
                      </div>
                      <div id="card3" class="d-flex flex-column rounded-2 p-2 align-items-center ">
                        <img src="fontawesome/square-js-brands-solid-full.svg" class="icon rounded-circle" alt="web stack">
                        <figcaption class="">JavaScript</figcaption>
                      </div>
                    </div>
                    <h3></h3>
                    <p>Ao longo do aprendizado também passamos a utilizar frameworks de estilização para facilitar o desenvolvimento
                      das páginas web</p>
                    <p></p>
                    <div id="frameworks" class="d-flex flex-row justify-content-center flex-wrap">
                      <div id="card" class="d-flex flex-column rounded-2 p-2 align-items-center">
                        <img class="icon" src="fontawesome/bootstrap-brands-solid-full.svg" alt="button">
                        <figcaption class="">Bootstrap</figcaption>
                      </div>
                      <div id="card" class="d-flex flex-column rounded-2 p-2 align-items-center">
                        <img class="icon rounded-circle" src="IMAGENS/sweetalert.jpg" alt="button">
                        <figcaption class="">Sweetalert</figcaption>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- SLIDE 3 -->
                <div class="carousel-item h-100" style="padding: 0px 9%; overflow: scroll;">
                  <div class="scroll-area p-4 text-center text-light">
                    <h1 class="text-98 mb-3 mt-3">Desenvolvimento de aplicações console</h1>
                    <p>esses são os IDEs que utilizamos para fazer códigos</p>
                    <div id="cardAll3" class="w-auto d-flex align-content-center justify-content-center">
                      <div class="border border-5 rounded-3 flex-wrap" style="border-color: #818181 !important;">
                        <img src="IMAGENS/portugolIcon.webp" class="icon m-1" alt="">
                        <img src="IMAGENS/vsstudioIcon.png"  class="icon m-2" alt="">
                        <img src="IMAGENS/pycharm-icon.svg"  class="icon m-2" alt="">
                      </div>
                    </div>
                      <div id="console">
                        <div id="cardConsole1" class="d-flex flex-column rounded-2 p-2 align-items-center">
                          <img class="icon" src="IMAGENS/portugolIcon.webp" alt="button">
                          <figcaption class="">Portugol</figcaption>
                        </div>
                        <p>IDE utilizado no primeiro e segundo bimestre do ano para desenvolvermos a lógica de programação</p>
                      <div id="cardConsole1" class="d-flex flex-column rounded-2 p-2 align-items-center">
                        <img class="icon" src="IMAGENS/vsstudioIcon.png" alt="button">
                        <figcaption class="">Visual Studio code</figcaption>
                      </div>
                      <p>IDE utilizada no segundo, terceiro e quarto bimestre para o desenvolvimento de código na lingua C#</p> 
                    <div id="cardConsole3" class="d-flex flex-column rounded-2 p-2 align-items-center">
                      <img class="icon" src="IMAGENS/pycharm-icon.svg" alt="button">
                      <figcaption class="">Pycharm</figcaption>
                    </div>
                    <p>IDE utilizada no terceiro e quatro bimestre para o desenvolvimento de códigos em python</p>
                    </div>
                    
                   
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
    `;
  }else if (botaoPressionado.id === "diario") {
    carouselStyle = `
      <div id="window${index}"
      class="carousel-dark slideWidth slideHeight bg-dark border border-dark-subtle border-5"
      style="max-height: 70vh; display: flex; flex-direction: column;">
        <div class="header w-100 bg-gray98 d-flex justify-content-between align-items-center">
          <p class="p-2 m-0">Ambientes de Desenvolvimento Integrado</p>
          <button style="border: 0" class="bg-gray98 p-2">
            <i class="fa-solid fa-circle-xmark fa-2xl" style="color: #e11b05;" onclick="removeWindow('window${index}')"></i>
          </button>
        </div>
        <div id="carouselExample" class="carousel slide w-100 flex-grow-1" style="overflow: hidden;">
          <div class="carousel-inner h-100">
            <!-- SLIDE 1 -->
            <div class="carousel-item active h-100">
              <div class="scroll-area p-4 text-center text-light">
                <h1 class="text-danger mb-3">RODRIGOOOOOOOO</h1>
                <p>No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas nós temos os ambientes de desenvolvimento.</p>
                <p>Os ambientes de desenvolvimento integrados ou IDEs (Integrated Development Environment) são programas que usamos para programar, seja para fazer sites, programas, código, etc.</p>
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
              </div>
            </div>
            <!-- SLIDE 3 -->
            <div class="carousel-item h-100">
              <div class="scroll-area p-4 text-center text-light">
                <h1 class="text-danger mb-3">Ambientes de desenvolvimento integrados</h1>
                <p>No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas nós temos os ambientes de desenvolvimento.</p>
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
    `}else if (botaoPressionado.id === "brasil") {
      carouselStyle = `
        <div id="window${index}"
        class="carousel-dark slideWidth slideHeight bg-dark border border-dark-subtle border-5"
        style="max-height: 70vh; display: flex; flex-direction: column;">
          <div class="header w-100 bg-gray98 d-flex justify-content-between align-items-center">
            <p class="p-2 m-0">YURIIIIIII</p>
            <button style="border: 0" class="bg-gray98 p-2">
              <i class="fa-solid fa-circle-xmark fa-2xl" style="color: #e11b05;" onclick="removeWindow('window${index}')"></i>
            </button>
          </div>
          <div id="carouselExample" class="carousel slide w-100 flex-grow-1" style="overflow: hidden;">
            <div class="carousel-inner h-100">
              <!-- SLIDE 1 -->
              <div class="carousel-item active h-100">
                <div class="scroll-area p-4 text-center text-light">
                  <h1 class="text-danger mb-3">YURIIIIIIIIIII</h1>
                  <p>No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas nós temos os ambientes de desenvolvimento.</p>
                  <p>Os ambientes de desenvolvimento integrados ou IDEs (Integrated Development Environment) são programas que usamos para programar, seja para fazer sites, programas, código, etc.</p>
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
                </div>
              </div>
              <!-- SLIDE 3 -->
              <div class="carousel-item h-100">
                <div class="scroll-area p-4 text-center text-light">
                  <h1 class="text-danger mb-3">Ambientes de desenvolvimento integrados</h1>
                  <p>No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas nós temos os ambientes de desenvolvimento.</p>
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
      `}else if (botaoPressionado.id === "corinthians") {
        carouselStyle = `
          <div id="window${index}"
          class="carousel-dark slideWidth slideHeight bg-dark border border-dark-subtle border-5"
          style="max-height: 70vh; display: flex; flex-direction: column;">
            <div class="header w-100 bg-gray98 d-flex justify-content-between align-items-center">
              <p class="p-2 m-0">HUGOOOOOOOOO SOUZAAAAAAAAAAA</p>
              <button style="border: 0" class="bg-gray98 p-2">
                <i class="fa-solid fa-circle-xmark fa-2xl" style="color: #e11b05;" onclick="removeWindow('window${index}')"></i>
              </button>
            </div>
            <div id="carouselExample" class="carousel slide w-100 flex-grow-1" style="overflow: hidden;">
              <div class="carousel-inner h-100">
                <!-- SLIDE 1 -->
                <div class="carousel-item active h-100">
                  <div class="scroll-area p-4 text-center text-light">
                    <h1 class="text-danger mb-3">HUGOOOOOOOOO SOUZAAAAAAAAAAA</h1>
                    <p>No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas nós temos os ambientes de desenvolvimento.</p>
                    <p>Os ambientes de desenvolvimento integrados ou IDEs (Integrated Development Environment) são programas que usamos para programar, seja para fazer sites, programas, código, etc.</p>
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
                  </div>
                </div>
                <!-- SLIDE 3 -->
                <div class="carousel-item h-100">
                  <div class="scroll-area p-4 text-center text-light">
                    <h1 class="text-danger mb-3">Ambientes de desenvolvimento integrados</h1>
                    <p>No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas nós temos os ambientes de desenvolvimento.</p>
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
        `}

  carouselPosition.insertAdjacentHTML("afterbegin", carouselStyle);
}

function removeWindow(windowId) {
  const windowElement = document.getElementById(windowId);
  windowElement.remove();
}
