const valor = document.querySelector("#send");

valor.addEventListener("click",function(e){
   
 e.preventDefault();

  const name = document.querySelector("#name");

   const value = name.value;

    calcularMoedas()
   
})
function calcularMoedas(){

    let n = parseFloat(document.querySelector("#name").value);
    
    let moedas = [0.50,0.25,0.10,0.05,0.01];

    let array = []
    let somaQuantidadeMoedas = 0

function contaMoedas(valor){
 
  let quantidademoedas = n.toFixed(2)/valor; 
  
  let numerosInt = parseInt(quantidademoedas)

  n -= numerosInt*valor;

  array.push(numerosInt+" moeda(s) de " +valor*100 + " centavos<br>");

  somaQuantidadeMoedas = somaQuantidadeMoedas + numerosInt
  
}

for(let moeda of moedas){    
  contaMoedas(moeda);

} let text = ""

for(let linha of array){
   text += linha
    
  }

  document.getElementById("titulo").innerHTML = "Total de moedas:"+somaQuantidadeMoedas+"<br>"+"Sendo:"
  document.getElementById("respostadocalculo").innerHTML = text

}