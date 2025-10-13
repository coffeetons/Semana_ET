let index = 0;
// oiii
function slide(botaoPressionado) {
  var carouselPosition = document.getElementById("window");
  
  let carouselStyle = "";
  index++;
// ?test to see if the code in the repo is correct

  if (botaoPressionado.id === "ide") {
    carouselStyle = `
          <div id="window${index}" class="carousel-dark slideWidth slideHeight bg-dark border border-dark-subtle border-5"
            style="max-height: 70vh; display: flex; flex-direction: column;">
            <div class="header w-100 bg-gray98 d-flex justify-content-between align-items-center">
              <p class="p-2 m-0">Ferramentas Utilizadas em DS</p>
              <button style="border: 0" class="bg-gray98 ">
                <img src="fontawesome/circle-xmark-solid-full.svg" alt="" class="icon3" onclick="removeWindow('window${index}')">
              </button>
              </div>
            <div id="carouselExample" class="carousel slide w-100 flex-grow-1" style="overflow: hidden;">
              <div class="carousel-inner h-100">
                <!--? SLIDE 1 -->
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
                <!--? SLIDE 2 -->
                <div class="carousel-item h-100" style="padding: 0px 9%; overflow: scroll;">
                  <div class="scroll-area p-4 text-center text-light">
                    <h1 class="text-98 mb-3 mt-3">Desenvolvimento Web utilizando o Visual Studio Code</h1>
            
                    <h3 id="sub">Desenvolvimento web</h3>
                    <p>Visual Studio Code ou VS Code foi a ferramenta que utilizamos para o desenvolvimento web, que estudamos na
                      matéria de PRE.</p>
                    <p>Onde nós fizemos páginas utilizando componentes das tags html, estilização CSS e lógica com o JavaScript.</p>
                    <div id="web" class="d-flex flex-row justify-content-center flex-wrap">
                      <div id="card" class="d-flex flex-column 98 rounded-2 p-2">
                        <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                          <img src="fontawesome/html5-brands-solid-full (1).svg" class="icon rounded-circle" alt="web stack">
                          <figcaption class="">HTML</figcaption>
                        </div>
                      </div>
                      <div id="card2" class="d-flex flex-column 98 rounded-2 p-2">
                        <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                          <img src="fontawesome/css3-alt-brands-solid-full.svg" class="icon rounded-circle" alt="web stack">
                          <figcaption class="">CSS</figcaption>
                        </div>
                      </div>
                      <div id="card3" class="d-flex flex-column rounded-2 p-2 align-items-center ">
                        <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                          <img src="fontawesome/square-js-brands-solid-full.svg" class="icon rounded-circle" alt="web stack">
                          <figcaption class="">JavaScript</figcaption>
                        </div>
                      </div>
                    </div>
                    <h3></h3>
                    <p>Ao longo do aprendizado também passamos a utilizar frameworks de estilização para facilitar o desenvolvimento
                      das páginas web</p>
                    <p></p>
                    <div id="frameworks" class="d-flex flex-row justify-content-center flex-wrap">
                      <div id="card" class="d-flex flex-column rounded-2 p-2 align-items-center">
                        <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                          <img class="icon" src="fontawesome/bootstrap-brands-solid-full.svg" alt="button">
                          <figcaption class="">Bootstrap</figcaption>
                        </div>
                      </div>
                      <div id="card" class="d-flex flex-column rounded-2 p-2 align-items-center">
                        <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                          <img class="icon rounded-circle" src="IMAGENS/sweetalert.jpg" alt="button">
                          <figcaption class="">Sweetalert</figcaption>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--? SLIDE 3 -->
                <div class="carousel-item h-100" style="padding: 0px 9%; overflow: scroll;">
                  <div class="scroll-area p-4 text-center text-light d-flex flex-column align-items-center">
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
                          <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                            <img class="icon" src="IMAGENS/portugolIcon.webp" alt="button">
                            <figcaption class="">Portugol</figcaption>
                          </div>
                        </div>
                        <p>IDE utilizado no primeiro e segundo bimestre do ano para desenvolvermos a lógica de programação</p>
                      <div id="cardConsole1" class="d-flex flex-column rounded-2 p-2 align-items-center">
                        <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                          <img class="icon" src="IMAGENS/vsstudioIcon.png" alt="button">
                          <figcaption class="">Visual Studio code</figcaption>
                        </div>
                      </div>
                      <p>IDE utilizada no segundo, terceiro e quarto bimestre para o desenvolvimento de código na lingua C#</p> 
                    <div id="cardConsole3" class="d-flex flex-column rounded-2 p-2 align-items-center">
                      <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                        <img class="icon" src="IMAGENS/pycharm-icon.svg" alt="button">
                        <figcaption class="">Pycharm</figcaption>
                      </div>
                    </div>
                    <p>IDE utilizada no terceiro e quatro bimestre para o desenvolvimento de códigos em python</p>
                    </div>
                    
                   
                  </div>
                </div>
                <!--? SLIDE 4 -->
                <div class="carousel-item h-100" style="padding: 0px 9%; overflow: scroll;">
                  <div class="scroll-area p-4 text-center text-light d-flex flex-column align-items-center">
                    <h1 class="text-98 mb-3 mt-3">Introdução à Banco de Dadods</h1>
                    <p>A última IDE que nós usamos foi a do SQL Server Managment Studio ou SSMS, para criar bancos, tabelas, exibições enquanto vinculando esse banco com aplicações na matéria de BDI (banco de dados I)</p>
                    <div id="cardAll3" class="w-auto d-flex flex-column align-content-center justify-content-center">
                      <div class="border border-5 rounded-3 flex-wrap align-self-center" style="border-color: #818181 !important;">
                        <img src="IMAGENS/sqlstudioIcon.webp" class="icon m-1" alt="">
                        <figcaption>SSMS</figcaption>
                      </div><br>
                      <div class="d-flex align-content-center justify-content-center flex-column flex-wrap">
                        <div class=" border border-5 rounded-3 mb-3 p-2 flex-column flex-wrap" style="border-color: #818181 !important;">
                          <img src="fontawesome/database-solid-full.svg" alt="ilustração de um banco de dados" class="icon2">
                          <figcaption>Ilustração de um banco de dados</figcaption>
                        </div>
                      </div>
                      <p>Nesse IDE foi utilizada a linguagem SQL para todas as tarefas citadas</p>
                    </div>               
                  </div>
                </div>
                    <!--? SLIDE 5 -->
                    <div class="carousel-item h-100" style="padding: 0px 9%; overflow: scroll;">
                      <div class="scroll-area p-4 text-center text-light d-flex flex-column align-items-center">
                        <h1 class="text-98 mb-3 mt-3">Design Digital</h1>
                        <p>Além da programação que temos, também não podemos esquecer do aspecto visual, com o curso de Desenvolvimento de Sistemas oferecendo aulas de design digital com o Photoshop C6 </p>
                        <div id="cardAll3" class="w-auto d-flex flex-column align-content-center justify-content-center">
                          <div class="border border-5 rounded-3 flex-wrap align-self-center p-2" style="border-color: #818181 !important;">
                            <img src="IMAGENS/Adobe_Photoshop_CS6_icon.svg.webp" class="icon m-1 rounded-1" alt="Photoshop C6">
                            <figcaption>Photoshop C6</figcaption>
                          </div>
                          <p class=" mt-4 text-center">e a alternativa desse software</p>
                          <div class="d-flex align-content-center justify-content-center flex-column flex-wrap">
                            <div class=" border border-5 rounded-3 mb-3 py-1 px-2 flex-column flex-wrap" style="border-color: #818181 !important;">
                              <img src="IMAGENS/photopea.webp" alt="Photopea" class="icon2 rounded-1">
                              <figcaption>Photopea</figcaption>
                            </div>
                          </div>
                          <p>Esses softwares pode ser usados para ambas criação e manipulação de imagens, sendo usados nas aulas de Design Digital</p>
                        </div>
                      </div>
                    </div>
                    <!--? SLIDE 6 -->
                    <div class="carousel-item h-100" style="padding: 0px 9%; overflow: scroll;">
                      <div class="scroll-area p-4 text-center text-light d-flex flex-column align-items-center">
                        <h1 class="text-98 mb-3 mt-3">Fundamentos da Informática</h1>
                        <p>Nas aulas de Fundamento da Informática (FIF), nós utilizamos os programas do pacote Office, especificamente os programas Microsoft Excel e Microsoft Word</p>
                        <p>Esses softwares foram usados para criar documentos e planilhas interativas, seja com um documento seguindo as normas ABNT ou com uma planilha dinâmica </p>
                        <div id="fif" class="d-flex flex-row justify-content-center flex-wrap">
                          <div id="cardfif1" class="d-flex flex-column 98 rounded-2 p-2">
                            <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                              <img src="IMAGENS/word.webp" class="icon rounded-circle" alt="web stack">
                              <figcaption class="">Microsoft Word</figcaption>
                            </div>
                          </div>
                          <div id="cardfif2" class="d-flex flex-column 98 rounded-2 p-2">
                            <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                              <img src="IMAGENS/excel.webp" class="icon rounded-circle" alt="web stack">
                              <figcaption class="">Microsoft Excel</figcaption>
                            </div>
                          </div>
                        </div>
                        <p>E agora fora das aplicações também foram apresentados para a sala os conceitos de infraestrutura, prompt de comando (CMD) e diferente sistemas operacionais</p>
                        <div id="web" class="d-flex flex-row justify-content-center flex-wrap">
                          <div id="card" class="d-flex flex-column 98 rounded-2 p-2">
                            <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                              <img src="fontawesome/network-wired-solid-full.svg" class="icon rounded-circle" alt="web stack">
                              <figcaption class="">infraestrutura</figcaption>
                            </div>
                          </div>
                          <div id="card2" class="d-flex flex-column 98 rounded-2 p-2">
                            <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                              <img src="IMAGENS/cmd.png" class="icon rounded-circle" alt="web stack">
                              <figcaption class="">CMD</figcaption>
                            </div>
                          </div>
                          <div id="card3" class="d-flex flex-column rounded-2 p-2 align-items-center ">
                            <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                              <img src="fontawesome/ubuntu-brands-solid-full.svg" class="icon rounded-circle" alt="web stack">
                              <figcaption class="">Linux Ubuntu</figcaption>
                            </div>
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
          <div id="window${index}" class="carousel-dark slideWidth slideHeight bg-dark border border-dark-subtle border-5"
            style="max-height: 70vh; display: flex; flex-direction: column;">
            <div class="header w-100 bg-gray98 d-flex justify-content-between align-items-center">
              <p class="p-2 m-0">Ferramentas Utilizadas em DS</p>
              <button style="border: 0" class="bg-gray98 ">
                <img src="fontawesome/circle-xmark-solid-full.svg" alt="" class="icon3" onclick="removeWindow('window${index}')">
              </button>
            </div>
            <div id="carouselExample" class="carousel slide w-100 flex-grow-1" style="overflow: hidden;">
              <div class="carousel-inner h-100">
                <!--? SLIDE 1 -->
                <div class="carousel-item active h-100" style="padding: 0px 9%; overflow:scroll ;">
                  <div class="scroll-area p-4 text-center text-light">
                    <h1 class="text-98 mb-3">Eventos e Oportunidades na ETEC</h1>
                    <p>Ao longo do ano foram apresentados vários eventos e oportunidades como:</p>
                    <div class="d-flex w-100 align-items-center justify-content-center">
                      <div class="d-flex flex-column w-100 align-items-center">
                        <ul>
                          <li>Semana da Informática</li>
                          <li>Venturus/Tic Em Trilhas</li>
                          <li>Semana da ETEC</li>
                        </ul>
                      </div>
                    </div>
                    <p>Com esses eventos sendo exclusivos para as ETECs, algo que você não irá ver em outras escolas</p>
                  </div>
                </div>
                <!--? SLIDE 2 -->
                <div class="carousel-item h-100" style="padding: 0px 9%; overflow: scroll;">
                  <div class="scroll-area p-4 text-center text-light">
                    <h1 class="text-98 mb-3 mt-3">Semana da Informática - Dashboard</h1>
                    <img src="IMAGENS/imagee.png"class="rounded-4 border border-5 border-dgray98 mx-4" style="width: 75%; height: 50%;" alt="">
                    <figcaption class="mx-4">Dashboard da Semana da Informática</figcaption>
                    <p>A Semana da Informática é um evento onde as turmas de Desenvolvimento de Sistemas e Informática da Internet se reunem para apresentar e criar seus projetos</p>
                    <p>A decisão da turma de DS escolheu criar um Dashboard utilizando o Microsoft Excel</p>
                    
                  </div>
                </div>
                <!--? SLIDE 3 -->
                <div class="carousel-item h-100" style="padding: 0px 9%; overflow: scroll;">
                  <div class="scroll-area p-4 text-center text-light d-flex flex-column align-items-center">
                    <h1 class="text-98 mb-3 mt-3">Venturus/Tic em Trilhas</h1>
                    <p>No terceiro bimestre nós tivemos a oportunidade de competir em uma competição de criar projetos da Venturus</p>
                    <div id="cardAll3" class="d-flex align-content-center justify-content-center p-2">
                      <div class="border border-5 rounded-3 flex-wra p-2 flex-wrap " style="border-color: #818181 !important;">
                        <img src="IMAGENS/venturus.png" class="" style="width: 75%; height: 75%;" alt="">
                      </div><br>
                    </div>
                    <figcaption>Venturus - Empresa responsável </figcaption>
                    <p>Para entrar nessa competição era necessário completar os cursos do Tic em Trilhas, os cursos de Desenvolvimento Web e Lógica de Programação Web</p>
                    <div id="console">
                      <div id="cardConsole1" class="d-flex flex-column rounded-2 p-2 align-items-center">
                        <div class="border border-5 rounded-3 flex-wrap p-2" style="border-color: #818181 !important;">
                          <img class="icon" src="IMAGENS/tic.png" style="" alt="button">
                          <figcaption class="">Tic em Trilhas</figcaption>
                        </div>
                      </div>
                      <p>O Tic em Trilhas é uma plataforma de cursos públicos com certificados </p>
                      <div id="cardConsole1" class="d-flex flex-column rounded-2 p-2 align-items-center">
                          <img style="width: 75%; height: 50%;" class="border border-5 rounded-3" style="border-color: #818181;" src="IMAGENS/image.png" alt="button">
                          <figcaption class="width: 75%">Dialexus - Projeto de um grupo da turma que concorreu na competição</figcaption>
                      </div>
                      <p>Esse é um dos projetos apresentados na competição, o projeto Dialexus é um de outros 2 que competirão</p>
                    </div>
                  </div>
                </div>
                <!--? SLIDE 4 -->
                <div class="carousel-item h-100" style="padding: 0px 9%; overflow: scroll;">
                  <div class="scroll-area p-4 text-center text-light d-flex flex-column align-items-center">
                    <div class="d-flex flex-row justify-content-center align-content-center align-items-center ">
                      <h1 class="text-98 mb-3 mt-2 me-2">Semana da </h1>
                      <h1 class="text-dgray98">Etec</h1>
                    </div> 
                    <p>O evento que está ocorrendo agora!</p>
                    <p>Semana onde as turmas das escolas da ETEC abrem as portas para outas escolas e para apresentarem seus projetos</p>
                    <div id="cardAll3" class="w-auto d-flex flex-column align-content-center justify-content-center">
                     <p>E o que você está vendo agora junto com os outros sites nessa sala são os nossos projetos da semana da ETEC
                     </p>
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
    `;}

  carouselPosition.insertAdjacentHTML("afterbegin", carouselStyle);
}

function removeWindow(windowId) {
  const windowElement = document.getElementById(windowId);
  windowElement.remove();
}
