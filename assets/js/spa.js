const btnSPA = document.getElementById("carregar-projetos");
const spaArea = document.getElementById("spa-area");

if (btnSPA && spaArea) {
  btnSPA.addEventListener("click", () => {
    spaArea.innerHTML = `
      <div class="cards">
        <article>
          <img src="assets/img/educacao.jpg" alt="Crianças em aula">
          <h3>Educação</h3>
          <p>Oficinas de reforço escolar e cursos gratuitos para jovens.</p>
        </article>

        <article>
          <img src="assets/img/meio-ambiente.jpg" alt="Voluntários plantando">
          <h3>Meio Ambiente</h3>
          <p>Mutirões de plantio, hortas urbanas e sustentabilidade comunitária.</p>
        </article>

        <article>
          <img src="assets/img/cultura.jpg" alt="Projeto de cultura">
          <h3>Cultura & Juventude</h3>
          <p>Atividades culturais, dança, teatro e música para inclusão social.</p>
        </article>
      </div>
    `;
  });
}

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
if (toggle) toggle.onclick = () => menu.classList.toggle('active');