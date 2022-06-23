function namePerson(){ 
  let namePerson = document.querySelector("#name").value
  return namePerson
}
function heightPerson(){
  let height = parseFloat(document.querySelector("#height").value)
  return height
}
function weightPerson(){
  let weight = parseFloat(document.querySelector("#weight").value)
  return weight
}

function alertInvalidName(name){
  if(Number(name) || name == ''){
    alert("Digite nome correto")
  }
}
function alertInvalidHeight(height){
  if(Number.isNaN(height) || height <= 0 || height >= 300){
    alert("Digite altura correta")
  }
}
function alertInvalidWeight(weight){
  if(Number.isNaN(weight)|| weight <= 0 || weight >= 300){
    alert("Digite peso correto")
  }
}
function ShowImcResultOnScreen(namePersonResult, heightPersonResult, weightPersonResult){
  if(namePersonResult && heightPersonResult && weightPersonResult){

    const person = new Person(namePersonResult, heightPersonResult, weightPersonResult)

    resultado.innerHTML = `<h3>${person.namePerson()}, você possui ${person.heightPerson()} m e ${person.weightPerson()} kgs, seu IMC é ${person.ShowImcResult()}</h3>`

      if(person.ShowImcResult() < 18.5){
        resultado.innerHTML += `<h3>Você esta abaixo do peso.</h3>`
      }else if(person.ShowImcResult() >=18.5 || person.ShowImcResult() <= 24.9){
        resultado.innerHTML += `<h3>Você esta com o peso normal.</h3>`
      }else if(person.ShowImcResult() >=25 || person.ShowImcResult() <= 29.9){
        resultado.innerHTML += `<h3>Você esta com sobrepeso.</h3>`
      }else if(person.ShowImcResult() >=30 || person.ShowImcResult() <= 39.9){
        resultado.innerHTML += `<h3>Você esta com obesidade.</h3>`
      }else if(person.ShowImcResult() > 40){
        resultado.innerHTML += `<h3>Você esta com obesidade grave.</h3>`
      }else{
        resultado.innerHTML += `<h3>Não foi possível calcular seu IMC</h3>`
      }
    }
}

class Person {
  constructor(name, height, weight){
    this.name = name
    this.height = height
    this.weight = weight
  }
  namePerson(){
    return this.name
  }
  heightPerson(){
    return this.height/100
  }
  weightPerson(){
    return this.weight
  }

  #calculaIMC(){
    return this.weightPerson() / (this.heightPerson())** 2
  }
  ShowImcResult(){
    return this.#calculaIMC().toFixed(2)
  }
}
let resultado = document.querySelector('.result')

