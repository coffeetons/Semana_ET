function slide() {
  var carouselPosition = document.getElementById("window");
  let carouselStyle = `      
    <div id="window2" class="carousel-dark slideWidth slideHeight bg-dark border border-dark-subtle border-5">
                <div class="header w-100 bg-gray98 d-flex justify-content-between align-items-center">
                    <p class="p-2 m-0">Ambientes de Desenvolvimento Integrado</p>
                    <button style="border: 0" class="bg-gray98 p-2">
                        <i class="fa-solid fa-circle-xmark fa-2xl" style="color: #e11b05;" onclick="removeWindow()">
                        </i>
                    </button>
                </div>            
                <div id="carouselExample" class="carousel slide w-100 h-100 d-flex ">
                                <div class="carousel-inner align-content-center  justify-content-around">
                                    <div class="carousel-item text-center active h-100" style="padding: 6% 10%; margin-bottom: 50px;
                                    " >
                                    <div class="" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                            <h1 class="text-danger text-center">Ambientes de desenvolvimento integrados</h1>
                                            <p class="text-light text-size">
                                            No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas
                                            nós temos os ambiente de
                                            desenvolvimento.
                                        </p>
                                        <p class="text-light text-size">
                                            Os ambientes de desenvolvimento integrados ou IDEs (integrated Development Environment),
                                            são programas que usamos para
                                            programar, seja para fazer sites, programas, código e etc.
                                        </p>
                                        <p class="text-light text-size">
                                            No Curso de DS nós usamos 4 ambientes de desenvolvimento
                                        </p>
                                    </div>
                                    </div>
                                    <div class="carousel-item" style="padding: 0px 10%;">
                                        <div class="d-flex w-100 h-100 align-items-center justify-content-center flex-column">
                                            <img src="" alt="">
                                            <h1 class="text-danger text-center">Ambientes de desenvolvimento integrados</h1>
                                            <p class="text-light text-size">
                                                No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas
                                                nós temos os ambiente de
                                                desenvolvimento.
                                            </p>
                                                <div class="img h-100 d-flex w-50 d-flex justify-content-center ">
                                                    <img src="IMAGENS/vscodeIcon.png" 
                                                    class="img-fluid"
                                                    style="height: 10dvh;"
                                                    alt="...">
                                                </div>
                                            <p class="text-light text-size">
                                                Os ambientes de desenvolvimento integrados ou IDEs (integrated Development Environment),
                                                são programas que usamos para
                                                programar, seja para fazer sites, programas, código e etc.
                                            </p>
                                            <p class="text-light text-size">
                                                No Curso de DS nós usamos 4 ambientes de desenvolvimento
                                            </p>
                                    </div>
                                    </div>
                                    <div class="carousel-item" style="padding: 0px 10%;">
                                        
                                        <div class="d-flex w-100 h-100 align-items-center justify-content-center flex-column">
                                            <img src="" alt="">
                                            <h1 class="text-danger text-center">Ambientes de desenvolvimento integrados</h1>
                                            <p class="text-light text-size">
                                                No curso de Desenvolvimento de Sistemas ou "DS" nós usamos várias ferramentas e delas
                                                nós temos os ambiente de
                                                desenvolvimento.
                                            </p>
                                            <div class="img h-100 d-flex w-50 d-flex justify-content-center ">
                                                <img src="IMAGENS/vscodeIcon.png" class="img-fluid" style="height: 10dvh;" alt="...">
                                            </div>
                                            <p class="text-light text-size">
                                                Os ambientes de desenvolvimento integrados ou IDEs (integrated Development Environment),
                                                são programas que usamos para
                                                programar, seja para fazer sites, programas, código e etc.
                                            </p>
                                            <p class="text-light text-size">
                                                No Curso de DS nós usamos 4 ambientes de desenvolvimento
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
    `;

  carouselPosition.insertAdjacentHTML("afterbegin", carouselStyle);
}
function removeWindow() {
  const child = document.getElementById("window");
  child.removeChild(child.firstElementChild);
}
