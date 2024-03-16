const btnShow = document.querySelector(".btn-show");
const btnClose = document.querySelector(".btn-closse");

const mobileMenu = document.getElementById("mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");

const form = document.querySelector(".needs-validation");

btnShow.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);

function toggleModal() {
  mobileMenu.classList.toggle("mobile-menu");
}

function sendEmail(name, correo, description) {
  const body = `<strong>Nombre:</strong> ${name} <br> <strong>Email:</strong> ${correo} <br><br><br> ${description}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "noexistuser16@gmail.com",
    Password: "B44BC470E8E728C1A7DA1EA669E01BA0669B",
    To: "noexistuser16@gmail.com",
    From: "noexistuser16@gmail.com",
    Subject: "Desarrollo web - Actividad 2",
    Body: body,
  }).then((message) => {
    console.log(message);
    if (message === "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfulyy",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Somethings went wrong",
        icon: "error",
      });
    }
  });
}

form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      const dataForm = new FormData(event.currentTarget);
      const name = dataForm.get("name")?.toString();
      const email = dataForm.get("email")?.toString();
      const description = dataForm.get("description")?.toString();

      sendEmail(name, email, description);
    }
    form.classList.add("was-validated");
  },
  false
);
