// Preenche a lista de páginas na index
const list = document.getElementById("page-list");

if (list && typeof pages !== "undefined") {
  pages.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="page.html?page=${p.file}">${p.title}</a>`;
    list.appendChild(li);
  });
}

// Carrega conteúdo da página
const params = new URLSearchParams(window.location.search);
const pageFile = params.get("page");

if (pageFile) {
  fetch(`pages/${pageFile}`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("content").innerHTML = html;
      document.getElementById("page-title").innerText =
        pageFile.replace(".html", "");
    })
    .catch(() => {
      document.getElementById("content").innerHTML =
        "<p>Página não encontrada.</p>";
    });
}
