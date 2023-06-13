//Escreva uma função JavaScript para verificar se uma `entrada` é um array ou não.
function verificarArray(entrada) {
    return Array.isArray(entrada);
}

console.log(verificarArray([10, 20, 30])); // vai retornar true
console.log(verificarArray("ABC")); //  vai retornar false

//Escreva uma função JavaScript para clonar um array.
function clonarArray(arr) {
    return arr.slice();
}
var original = [10, 20, 30, 40, 50];
var clone = clonarArray(original);

console.log(clone); // vai clonar o array "original"


//Escreva uma função JavaScript para obter o primeiro elemento de um array. Passar um parâmetro 'n' retornará os primeiros 'n' elementos do array.
function obterPrimeirosElementos(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
}
  var arrPri = [10, 20, 30, 40, 50];

  console.log(obterPrimeirosElementos(arrPri, 2)); //Vai retornar os 2 primeiros elementos do array, no caso "10" e "20".

//Escreva uma função JavaScript para obter o último elemento de um array. Passar um parâmetro 'n' retornará os últimos 'n' elementos do array.
function obterUltimosElementos(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(Math.max(array.length - n, 0));
    }
}
  var arrUlt = [10, 20, 30, 40, 50];

console.log(obterUltimosElementos(arrUlt, 2)); //Vai retornar os dois ultimos elementos do array, no caso "50" e "40".


//Escreva um programa JavaScript simples para unir todos os elementos de um array em uma string.
function unirArrayEmString(array) {
    return array.join('');
}
var arrEmSt = [1, 2, 3];
console.log(unirArrayEmString(arrEmSt));


//Escreva um programa JavaScript que aceite um número como entrada e insira traços (-) entre cada dois números pares. Por exemplo, se você aceitar 025468, a saída deve ser 0-254-6-
function inserirTracosEntrePares(numeroPar) {
    var numeroString = numeroPar.toString();
    var resultado = '';
  
    for (var i = 0; i < numeroString.length; i++) {
      resultado += numeroString[i];
  
      if (numeroString[i] % 2 === 0 && numeroString[i + 1] % 2 === 0) {
        resultado += '-';
      }
    }
    return resultado;
}
var numeroPar = 24541689;

console.log(inserirTracosEntrePares(numeroPar)); //Vai retornar "2-4541-6-89"


//Escreva um programa JavaScript para localizar o item mais frequente de um array.
function encontrarItemMaisFrequente(arrFreq) {
    var frequencia = {};
    var itemMaisFrequente;
    var maiorFrequencia = 0;
  
    for (var i = 0; i < arrFreq.length; i++) {
      var elemento = arrFreq[i];
      frequencia[elemento] = (frequencia[elemento] || 0) + 1;
  
      if (frequencia[elemento] > maiorFrequencia) {
        maiorFrequencia = frequencia[elemento];
        itemMaisFrequente = elemento;
      }
    }
    return itemMaisFrequente;
}
var arrFreq = [1, 4, 2, 4, 4, 7, 5, 4, 6, 2, 5];

console.log(encontrarItemMaisFrequente(arrFreq)); //Vai Retornar o número 4, por ser o mais frequente

  
//Escreva um programa JavaScript para remover itens duplicados de um array (ignore a diferenciação entre maiúsculas e minúsculas).
function removerDuplicatas(array) {
    var unicoArray = [];
  
    for (var i = 0; i < array.length; i++) {
      var currentItem = array[i].toLowerCase();//Ignora a diferenciação de minúsculas e maiúsculas.
  
      if (!unicoArray.includes(currentItem)) {
        unicoArray.push(currentItem);
      }
    }
    return unicoArray;
}
var array = ['Joana', 'Sthefanny', 'sthefanny', 'Midiã', 'Joana', 'midiã', 'felipe', 'Matheus'];
var arraySemDp = removerDuplicatas(array);

console.log(arraySemDp); //Vai mostrar ['joana', 'sthefanny', 'midiã', 'felipe', 'matheus'].


//Existem dois arrays com valores individuais, escreva um programa JavaScript para calcular a soma de cada valor de índice individual dos arrays fornecidos.
function calcularSomaIndices(array1, array2) {
    var resultado = [];
    var tamanhoMaximo = Math.max(array1.length, array2.length);
  
    for (var i = 0; i < tamanhoMaximo; i++) {
      var valor1 = array1[i] || 0;
      var valor2 = array2[i] || 0;
      var soma = valor1 + valor2;
  
      resultado.push(soma);
    }
    return resultado;
}
var array1 = [10, 20, 30, 40, 50];
var array2 = [1, 2, 3, 4, 5, 6, 7];

var resultado = calcularSomaIndices(array1, array2);
console.log(resultado); //Vai mostrar [11, 22, 33, 44, 55, 6, 7]


//Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console.
var vetorPilha = [10, 20, 30, 40, 50];
var vetorAdiciona = [60, 70];

vetorPilha.push(...vetorAdiciona); //Adiciona ao vetorPilha o vetorAdiciona

console.log(vetorPilha); //Vai mostrar [10, 20, 30, 40, 50, 60, 70]