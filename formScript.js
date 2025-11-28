<<<<<<< HEAD
const vagas = document.getElementById("vagas");
const prxbtn = document.getElementById("prxbtn");
const carreiras = document.getElementById("carreiras");
const dados = document.getElementById("dados");
const confir = document.getElementById("confir");
const pais = document.getElementById("pais");
const form = document.getElementById("form");

// 🌍 Carregar países
fetch("https://countriesnow.space/api/v0.1/countries")
    .then(r => r.json())
    .then(response => {
        pais.innerHTML = '<option value="">Selecione seu país</option>';
        response.data.forEach(item => {
            pais.innerHTML += `<option value="${item.country}">${item.country}</option>`;
        });
        pais.disabled = false;
    })
    .catch(() => {
        pais.innerHTML = '<option>Erro ao carregar países</option>';
    });

// ➡️ Próxima etapa
prxbtn.onclick = function () {
    if (!vagas.value) {
        alert("Escolha uma vaga!");
        return;
    }
    carreiras.style.display = "none";
    dados.style.display = "block";
    setTimeout(() => dados.style.opacity = 1, 10); // fade-in
};

// 🔒 Validação final
form.onsubmit = function(e) {
    e.preventDefault();

    const nascimento = new Date(document.getElementById("data").value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) idade--;

    if (idade < 18) {
        alert("Você precisa ter 18 anos ou mais para se inscrever.");
        return;
    }

    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Email inválido!");
        return;
    }

    const senha = document.getElementById("senha").value;
    const senhaForte = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (!senhaForte.test(senha)) {
        alert("A senha deve ter:\n- 8 caracteres\n- 1 letra maiúscula\n- 1 letra minúscula\n- 1 número");
        return;
    }

    dados.style.display = "none";
    confir.style.display = "block";
    setTimeout(() => confir.style.opacity = 1, 10); // fade-in
}
=======
const vagas = document.getElementById("vagas");
const prxbtn = document.getElementById("prxbtn");
const carreiras = document.getElementById("carreiras");
const dados = document.getElementById("dados");
const confir = document.getElementById("confir");
const form = document.getElementById("form");

prxbtn.onclick = function () {
    if (!vagas.value) {
        alert("Selecione uma vaga antes de continuar!");
        return;
    }

    carreiras.style.display = "none";
    dados.style.display = "block";
    dados.style.opacity = 0;

    setTimeout(() => {
        dados.style.opacity = 1;
    }, 50);
};

// 🔒 Validação final
form.onsubmit = function(e) {
    e.preventDefault();

    const nascimento = new Date(document.getElementById("data").value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();

    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) idade--;

    if (idade < 18) {
        alert("Você precisa ter 18 anos ou mais para se inscrever.");
        return;
    }

    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Email inválido!");
        return;
    }

    const senha = document.getElementById("senha").value;
    const senhaForte = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if (!senhaForte.test(senha)) {
        alert("A senha deve ter:\n- 8 caracteres\n- 1 letra maiúscula\n- 1 letra minúscula\n- 1 número");
        return;
    }

    dados.style.display = "none";
    confir.style.display = "block";
<<<<<<< HEAD
    setTimeout(() => confir.style.opacity = 1, 10); // fade-in
}
>>>>>>> 0d1557b (commit 1)
=======
    confir.style.opacity = 0;

    setTimeout(() => {
        confir.style.opacity = 1;
    }, 50);
};


const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-botton");
const customText = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
        customText.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customText.innerHTML = "nenhum arquivo escolhido";
    }
});
>>>>>>> 9887f60 (2811)
