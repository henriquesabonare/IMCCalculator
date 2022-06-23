let resultado = document.querySelector('.result') 

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
function showImcResultOnScreen(namePersonResult, heightPersonResult, weightPersonResult){   
  if(namePersonResult && heightPersonResult && weightPersonResult){
    const person = new Person(namePersonResult, heightPersonResult, weightPersonResult)

    resultado.innerHTML = `<h3>${person.namePerson()}, você possui ${person.heightPerson()} m e ${person.weightPerson()} kgs, seu IMC é ${person.ShowImcResult()}</h3>`

    person.showResultImcStatus()
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
  showResultImcStatus(){
    if(this.ShowImcResult() < 18.5){
      resultado.innerHTML += `<h3>Você esta abaixo do peso.</h3>`
    }else if(this.ShowImcResult() <= 24.9){
      resultado.innerHTML += `<h3>Você esta com o peso normal.</h3>`
    }else if(this.ShowImcResult() <= 29.9){
      resultado.innerHTML += `<h3>Você esta com sobrepeso.</h3>`
    }else if(this.ShowImcResult() <= 39.9){
      resultado.innerHTML += `<h3>Você esta com obesidade.</h3>`
    }else if(this.ShowImcResult() > 40){
      resultado.innerHTML += `<h3>Você esta com obesidade grave.</h3>`
    }else{
      resultado.innerHTML += `<h3>Não foi possível calcular seu IMC</h3>`
    }
    return resultado
  }
}
class Alert extends Person{ // não é a melhor opção para validação, no caso seria receber o objeto e validar se o objeto esta correto ou não
  constructor(name, height, weight){// não recebia o argumento (inputs)
    super(name, height, weight)
  }
  alertInvalidName(){
    if(Number(this.name) || this.name == ''){
      return alert("Digite nome correto")
    }
  }
  alertInvalidHeight(){
    if(Number.isNaN(this.height) || this.height <= 0 || this.height >= 300){
      return alert("Digite altura correta")
    }
  }
  alertInvalidWeight(){
    if(Number.isNaN(this.weight)|| this.weight <= 0 || this.weight >= 300){
      alert("Digite peso correto")
    }
  }
}


