function pesquisar() {
let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value
console.log(campoPesquisa);

// se o campoPesquisa for uma string sem nada
if (!campoPesquisa){
  section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo.</p>"
  return
}

  campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados formatados
let resultados = "";
let titulo = "";
let descrição ="";
let tags = ""; 

// Itera sobre cada dado na lista 'dados'
for (let dado of dados) {
  titulo = dado.titulo.toLowerCase()
  descrição = dado.descrição.toLowerCase()
  tags = dado.tags.toLowerCase()
  // Se titulo includes campoPesquisa
  if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
  
    // cria um novo elemento 
  resultados +=`
    <div class="item-resultado">
  <h2>
    <a href="#" target="_blank">${dado.titulo}</a>
  </h2>
  <p class="descricao-meta">${dado.descrição}</p>
  <a href="${dado.link}" target="_blank">mais informações</a>
</div>;`
}

}

if (!resultados) {
  resultados = "<p>Nada foi encotrado</p>"
} 

// Atribui o HTML construído à seção de resultados
section.innerHTML = resultados;
}
