/*
document - mostra o domento, no caso é o documento html no qual este arquivo foi linkado
querySelector - é um atributo do document, nele você cpnsegue pegar um determinado objeto no html, no caso pelo seu seletor, uq pode ser classe ou id
 */

// const é um tipo de variavel no qual se é constante, ou seja, nao vai ser alterada
// let vai ser alterada
//var declara uma variavel apenas
const botaoTrailer = document.querySelector('.botao-trailer');

const modal = document.querySelector(".modal");

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
});

