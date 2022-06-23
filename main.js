function showResultsOnButtonClick(){
  let namePersonResult = namePerson()
   alertInvalidName(namePersonResult)

  let heightPersonResult = heightPerson()
    alertInvalidHeight(heightPersonResult)

  let weightPersonResult = weightPerson()
  alertInvalidWeight(weightPersonResult)

  ShowImcResultOnScreen(namePersonResult, heightPersonResult, weightPersonResult)
}


