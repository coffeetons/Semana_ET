function mostrar(secao) {
  const secoes = document.querySelectorAll(".section");
  secoes.forEach((s) => s.classList.add("inactive"));
  document.querySelector(`.section.${secao}`).classList.remove("inactive");

  const conteudo = document.getElementById("conteudo");

  if (secao === "data") {
    conteudo.innerHTML = `
      <h2>🎉 Festa de 50 anos – Sidney Curcio</h2>
      <p><strong>Data:</strong> 04 de outubro de 2025<br>
      <strong>Horário:</strong> Das 20h à 1h<br>
      <strong>Local:</strong> Clube Primeiro de Maio – Av. Portugal, 79, Centro, Santo André/SP</p>
    `;
  }

  if (secao === "traje") {
    conteudo.innerHTML = `
      <h2>👔 Traje</h2>
      <p>A festa será descontraída, noturna e cheia de estilo!<br>
      Sinta-se livre para vestir algo que te faça sentir bem, com elegância e conforto.<br><br>
      Sugestão: Traje esporte fino com um toque de azul ou prata, se quiser entrar no clima.</p>
    `;
  }

  if (secao === "presente") {
    conteudo.innerHTML = `
      <h2>🎁 Presente</h2>
      <p>Sua presença já é um grande presente!<br><br>
      Mas, se quiser me homenagear de uma forma especial, estou realizando um sonho de viagem.<br>
      Caso deseje contribuir com uma cota simbólica, em breve disponibilizarei aqui um link seguro.<br><br>
      <em>Com carinho, Sidney 💙</em>
    `;
  }

  if (secao === "presenca") {
    conteudo.innerHTML = `
      <h2>✅ Confirmação de Presença</h2>
      <p>Preencha abaixo para confirmar sua presença na festa:</p>

      <form id="formPresenca">
        <input type="hidden" name="_subject" value="Confirmação de Presença – Festa Sidney 50 anos">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">

        <label for="quantidade">Quantas pessoas vão comparecer?</label>
        <select id="quantidade" name="quantidade" onchange="gerarCamposConvidados()" required>
          <option value="">Selecione</option>
          <option value="1">1 pessoa</option>
          <option value="2">2 pessoas</option>
          <option value="3">3 pessoas</option>
          <option value="4">4 pessoas</option>
        </select>

        <div class="guest-fields" id="camposConvidados" style="margin-top: 20px;"></div>

        <button type="button" id="enviar" onclick="resetarEEnviar()" disabled>Confirmar Presença</button>
      </form>
    `;

    gerarCamposConvidados();
  }
}

function gerarCamposConvidados() {
  const quantidade = document.getElementById("quantidade")?.value;
  const container = document.getElementById("camposConvidados");
  const btnEnviar = document.getElementById("enviar");

  if (!container || !btnEnviar) return;

  container.innerHTML = "";

  if (!quantidade || quantidade === "") {
    btnEnviar.disabled = true; // desabilita o botão se nada selecionado
    return;
  }

  for (let i = 1; i <= quantidade; i++) {
    const label = document.createElement("label");
    label.textContent = `Nome do convidado ${i}:`;

    const input = document.createElement("input");
    input.type = "text";
    input.className = "campo";
    input.name = `Convidado ${i}`;
    input.required = true;
    input.style.marginBottom = "10px";

    container.appendChild(label);
    container.appendChild(input);
  }

  btnEnviar.disabled = false; // habilita o botão só depois que os campos forem criados
}

function mudarCor(cor) {
  const box = document.getElementById("conteudo");
  box.style.backgroundColor = cor;
  const image = document.getElementById("icon");
  image.style.backgroundColor = cor;
  const corpo = document.getElementById("body");
  corpo.style.backgroundColor = cor;
}

function mudarAltura() {
  const lugar = document.getElementsByClassName("section");
  for (let i = 0; i < lugar.length; i++) {
    lugar[i].style.alignItems = "flex-start";
    const contesudo = document.getElementById("conteudo");
    contesudo.style.top = "25%";
  }
}

function resetarEEnviar() {
  const campos = document.querySelectorAll(".campo");
  let camposVazios = 0;

  campos.forEach((campo) => {
    if (campo.value.trim() === "") {
      camposVazios++;
    }
  });

  if (camposVazios > 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha todos os campos antes de confirmar.",
    });
    return;
  }

  const form = document.getElementById("formPresenca");
  const formData = new FormData(form);

  fetch("https://formsubmit.co/ajax/cinquentarei@gmail.com", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        Swal.fire({
          title: "Presença Confirmada!",
          text: "Te espero dia 04/10!",
          icon: "success",
        }).then(() => {
          mostrar("data");
        });
      } else {
        throw new Error("Erro no envio");
      }
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Ocorreu um erro ao enviar. Tente novamente mais tarde.",
      });
    });
}
function botaoIcon() {
  secao = "data";
  cor = "#007bbf";
  mostrar(secao);
  mudarCor(cor);
}
