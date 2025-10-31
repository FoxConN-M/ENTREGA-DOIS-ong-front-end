(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastro-form");
    const modal = document.getElementById("modal");
    const fechar = document.getElementById("fechar-modal");

    const cpfEl = document.getElementById("cpf");
    const telEl = document.getElementById("telefone");
    const cepEl = document.getElementById("cep");

    const applyMaskCPF = (el) => {
      if (!el) return;
      el.addEventListener("input", () => {
        let value = el.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        value = value
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        el.value = value;
      });
    };

    const applyMaskTel = (el) => {
      if (!el) return;
      el.addEventListener("input", () => {
        let value = el.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        value = value
          .replace(/(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
        el.value = value;
      });
    };

    const applyMaskCEP = (el) => {
      if (!el) return;
      el.addEventListener("input", () => {
        let value = el.value.replace(/\D/g, "");
        if (value.length > 8) value = value.slice(0, 8);
        value = value.replace(/(\d{5})(\d{3})$/, "$1-$2");
        el.value = value;
      });
    };

    applyMaskCPF(cpfEl);
    applyMaskTel(telEl);
    applyMaskCEP(cepEl);

    const markError = (el) => el && el.classList.add("erro");
    const clearError = (el) => el && el.classList.remove("erro");

    if (form) {
      const campos = form.querySelectorAll("input, textarea, select");
      campos.forEach((campo) => {
        campo.addEventListener("input", () => {
          if (!campo.value.trim()) {
            markError(campo);
          } else {
            clearError(campo);
          }
        });
      });
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valido = true;
        const campos = form.querySelectorAll("input[required], textarea[required], select[required]");

        campos.forEach((campo) => {
          const value = campo.value.trim();

          if (!value) {
            markError(campo);
            valido = false;
            return;
          }

          const pattern = campo.getAttribute("pattern");
          if (pattern) {
            const re = new RegExp("^" + pattern + "$");
            if (!re.test(value)) {
              markError(campo);
              valido = false;
              return;
            } else {
              clearError(campo);
            }
          } else {
            clearError(campo);
          }
        });

        if (!valido) {
          window.scrollTo({ top: form.offsetTop - 24, behavior: "smooth" });
          const primeiroErro = form.querySelector(".erro");
          if (primeiroErro) primeiroErro.focus();
          alert("Por favor, corrija os campos em destaque.");
          return;
        }

        if (modal) {
          modal.style.display = "flex";
          const btnFechar = document.getElementById("fechar-modal");
          if (btnFechar) btnFechar.focus();
        }

        form.reset();
      });
    }

    if (fechar) {
      fechar.addEventListener("click", () => {
        if (modal) modal.style.display = "none";
        if (form) {
          const primeiro = form.querySelector("input, select, textarea, button");
          if (primeiro) primeiro.focus();
        }
      });
    }

    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && modal && modal.style.display === "flex") {
        modal.style.display = "none";
        if (form) {
          const primeiro = form.querySelector("input, select, textarea, button");
          if (primeiro) primeiro.focus();
        }
      }
    });

    if (modal) {
      modal.addEventListener("click", (ev) => {
        if (ev.target === modal) {
          modal.style.display = "none";
        }
      });
    }
  });
})();
