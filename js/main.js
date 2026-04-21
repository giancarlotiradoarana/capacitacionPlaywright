
function show(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showSubForm(id) {
    document.querySelectorAll('#examplesForm form').forEach(f => f.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function submitForm() {
    let first = document.getElementById('firstName').value;
    let last = document.getElementById('lastName').value;

    if (!first || !last) {
        document.getElementById('formResult').innerText = 'Completa los campos obligatorios';
        return;
    }

    document.getElementById('formResult').innerText = 'Formulario enviado correctamente';
}

function showFormMessage() {
    document.getElementById('exampleMessage').innerText = 'Formulario enviado correctamente';
}

setTimeout(() => {
    let btn = document.getElementById('dynamicBtn');
    if (btn) btn.style.background = 'red';
}, 3000);
function showMessage(msg, isError = false) {
    const el = document.getElementById("exampleMessage");
    el.innerText = msg;
    el.style.color = isError ? "red" : "green";
}

// LOGIN
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;

    if (!email || !pass) {
        return showMessage("Completa todos los campos", true);
    }

    showMessage("Login exitoso");
}

function validateTextBox() {
    const name = document.getElementById("nameText").value.trim();
    const email = document.getElementById("emailText").value.trim();
    const msg = document.getElementById("textBoxMessage");

    // Reset estilo
    msg.style.color = "red";

    // Validaciones
    if (!name) {
        msg.innerText = "El nombre es obligatorio";
        return;
    }

    if (!email) {
        msg.innerText = "El email es obligatorio";
        return;
    }

    // Validación simple de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        msg.innerText = "Email inválido";
        return;
    }

    // Éxito
    msg.style.color = "#22c55e";
    msg.innerText = "Datos enviado correctamente";
}







// REGISTER
function handleRegister(e) {
    e.preventDefault();
    const pass = document.getElementById("regPass").value;
    const pass2 = document.getElementById("regPass2").value;

    if (pass !== pass2) {
        return showMessage("Las contraseñas no coinciden", true);
    }

    showMessage("Registro exitoso");
}

// PAYMENT
function handlePayment(e) {
    e.preventDefault();
    const card = document.getElementById("cardNumber").value;

    if (card.length < 16) {
        return showMessage("Tarjeta inválida", true);
    }

    showMessage("Pago procesado correctamente");
}

// CONTACT
function handleContact(e) {
    e.preventDefault();
    const msg = document.getElementById("contactMsg").value;

    if (msg.length < 5) {
        return showMessage("Mensaje muy corto", true);
    }

    showMessage("Mensaje enviado");
}

// SURVEY
function handleSurvey(e) {
    e.preventDefault();
    const age = document.getElementById("surveyAge").value;

    if (age < 18) {
        return showMessage("Debes ser mayor de edad", true);
    }

    showMessage("Encuesta enviada");
}

// BOOKING
function handleBooking(e) {
    e.preventDefault();
    const people = document.getElementById("bookPeople").value;

    if (people <= 0) {
        return showMessage("Cantidad inválida", true);
    }

    showMessage("Reserva realizada");
}

function showForm(formName) {
    const forms = document.querySelectorAll(".form-box");
    forms.forEach(f => f.style.display = "none");

    document.getElementById("form-" + formName).style.display = "block";

    // limpiar mensaje al cambiar
    document.getElementById("exampleMessage").innerText = "";
}
function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("active");
}
