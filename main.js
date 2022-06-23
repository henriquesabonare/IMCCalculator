function showResultsOnButtonClick(){
  let namePersonResult = namePerson()
  let heightPersonResult = heightPerson()
  let weightPersonResult = weightPerson()

  showImcResultOnScreen(namePersonResult, heightPersonResult, weightPersonResult)

  const alert = new Alert()
  alert.alertInvalidName()
  alert.alertInvalidHeight()
  alert.alertInvalidWeight()
  
}


