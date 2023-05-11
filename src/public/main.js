document.addEventListener("DOMContentLoaded", () => {
  const processButton = document.getElementById("process-button");
  const responseDiv = document.getElementById("response");
  const uploadForm = document.getElementById("upload-form");
  const confirmationDiv = document.querySelector(".confirmation-container");

  processButton.addEventListener("click", () => {
    responseDiv.innerHTML = "Procesando, espere por favor ...";
    const pagesInput = document.getElementById("pages-input");
    const pages = parseInt(pagesInput.value);

    fetch(`/process/${pages}`)
      .then((response) => response.text())
      .then((data) => {
        responseDiv.innerHTML = "<pre>" + data + "</pre>";
      })
      .catch((error) => {
        console.error(error);
      });
  });

  uploadForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir que el formulario se envíe de manera convencional

    const formData = new FormData(uploadForm);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Mostrar mensaje de confirmación
        response.text().then((message) => {
          confirmationDiv.textContent = message;
        });
        // Limpiar input de archivo para que pueda subir otro
      })
      .catch((error) => {
        console.error(error);
      });
  });
});
