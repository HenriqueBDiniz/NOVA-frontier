const vagas = document.getElementById("vagas");
const prxbtn = document.getElementById("prxbtn");
const carreiras = document.getElementById("carreiras");
const dados = document.getElementById("dados");
const confir = document.getElementById("confir");
const pais = document.getElementById("pais");
const form = document.getElementById("form");

/* ==========================
   FUNÇÕES PARA ERROS
========================== */

function mostrarSpanErro(inputId, mensagem) {
    const input = document.getElementById(inputId);
    const span = input.nextElementSibling; 

    span.style.display = "flex";
    span.querySelector(".icon-erro").textContent = "!";
    span.childNodes[2].textContent = " " + mensagem;
}

function esconderSpanErro(inputId) {
    const input = document.getElementById(inputId);
    const span = input.nextElementSibling;

    span.style.display = "none";
}

/* ==========================
   AVANÇAR PRIMEIRA ETAPA
========================== */

prxbtn.onclick = function () {
    if (!vagas.value) {
        mostrarSpanErro("vagas", "Selecione uma vaga");
        return;
    }

    esconderSpanErro("vagas");

    carreiras.style.display = "none";
    dados.style.display = "block";
    dados.style.opacity = 0;

    setTimeout(() => {
        dados.style.opacity = 1;
    }, 50);
};


/* ==========================
   ENVIO DO FORM
========================== */
form.onsubmit = function (e) {
    e.preventDefault();

    let temErro = false;

    /* ==========================
       VALIDAR NOME
    ========================== */
    const nome = document.getElementById("nome").value.trim();
    if (nome.length < 2) {
        mostrarSpanErro("nome", "Nome muito curto");
        temErro = true;
    } else esconderSpanErro("nome");


    /* ==========================
       VALIDAR SOBRENOME
    ========================== */
    const sobrenome = document.getElementById("sobrenome").value.trim();
    if (sobrenome.length < 2) {
        mostrarSpanErro("sobrenome", "Sobrenome inválido");
        temErro = true;
    } else esconderSpanErro("sobrenome");


    /* ==========================
       VALIDAR EMAIL
    ========================== */
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        mostrarSpanErro("email", "Email inválido");
        temErro = true;
    } else esconderSpanErro("email");


    /* ==========================
       VALIDAR SENHA
    ========================== */
    const senha = document.getElementById("senha").value;
    const senhaForte = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if (!senhaForte.test(senha)) {
        mostrarSpanErro("senha", "Senha fraca");
        temErro = true;
    } else esconderSpanErro("senha");


    /* =============== VALIDAR IDADE ===================== */
    const nascimento = new Date(document.getElementById("data").value);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();

    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) idade--;

    if (idade < 18) {
        mostrarSpanErro("data", "Você deve ter 18+");
        temErro = true;
    } else esconderSpanErro("data");


    /* ==========================
       CANCELA ENVIO SE TIVER ERROS
    ========================== */
    if (temErro) return;


    /* ==========================
       MOSTRAR CONFIRMAÇÃO
    ========================== */
    dados.style.display = "none";
    confir.style.display = "block";
    confir.style.opacity = 0;

    setTimeout(() => {
        confir.style.opacity = 1;
    }, 50);
};


/* ==========================
   UPLOAD DE ARQUIVO
========================== */
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-botton");
const customText = document.getElementById("custom-text");

customBtn.addEventListener("click", function () {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
        customText.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        customText.innerHTML = "nenhum arquivo escolhido";
    }
});
