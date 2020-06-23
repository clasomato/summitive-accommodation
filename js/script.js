// Make an object containg the accomadation data





$('#buttonSubmit').click(function () {
  // Global Variables
  var ammountOfPeople = document.getElementById('peopleInput').value
  var nightsToStay = document.getElementById('nightsToStay').value
  var userMaxPriceInput = document.getElementById('userMaxPriceInput').value

  // Data object contaning the hotels/motels/hostels/house data
  var data = {
    // Array data in order minimum people, max people, price, minNight, maxNight
    hotel1: [1, 2, 157, 1, 5],
    hostel1: [1, 1, 30, 1, 10],
    motel1: [2, 4, 90, 3, 10],
    house: [1, 4, 240, 2, 15]
  }

  // Function that checks if the ammount of people is available
  function calaulateAmmontOfPeople (data) {
    var ammountOfPeopleData = {
      hotel1: false,
      hostel1: false,
      motel1: false,
      house: false
    }
    // Find out if the ammount of people matches the following
    if (ammountOfPeople >= data.hotel1[0] && ammountOfPeople <= data.hotel1[1]) {
      ammountOfPeopleData.hotel1 = true
    } else {
      console.log('false')
    }

    if (ammountOfPeople >= data.hostel1[0] && ammountOfPeople <= data.hostel1[1]) {
      ammountOfPeopleData.hostel1 = true
    } else {
      console.log('false')
    }

    if (ammountOfPeople >= data.motel1[0] && ammountOfPeople <= data.motel1[1]) {
      ammountOfPeopleData.motel1 = true
    } else {
      console.log('false')
    }

    if (ammountOfPeople >= data.house[0] && ammountOfPeople <= data.house[1]) {
      ammountOfPeopleData.house = true
    } else {
      console.log('false')
    }

    return ammountOfPeopleData
  }

  // Calculating if there are prices in the range
  function calculateMaxPrice (data) {
    var priceData = {
      hotel1: false,
      hostel1: false,
      motel1: false,
      house: false
    }

    if (userMaxPriceInput <= data.hotel1[2]) {
      priceData.hotel1 = true
    } else {
      console.log('false')
    }

    if (userMaxPriceInput <= data.hostel1[2]) {
      priceData.hostel1 = true
    } else {
      console.log('false')
    }

    if (userMaxPriceInput <= data.motel1[2]) {
      priceData.motel1 = true
    } else {
      console.log('false')
    }

    if (userMaxPriceInput <= data.house[2]) {
      priceData.house = true
    } else {
      console.log('false')
    }

    return priceData
  }

  // This function calcualtes nights
  function calaulateNights (data) {
    var nightData = {
      hotel1: false,
      hostel1: false,
      motel1: false,
      house: false
    }

    if (nightsToStay >= data.hotel1[3] && nightsToStay <= data.hotel1[4]) {
      nightData.hotel1 = true
    }

    if (nightsToStay >= data.hostel1[3] && nightsToStay <= data.hostel1[4]) {
      nightData.hostel1 = true
    }

    if (nightsToStay >= data.motel1[3] && nightsToStay <= data.motel1[4]) {
      nightData.motel1 = true
    }

    if (nightsToStay >= data.house[3] && nightsToStay <= data.house[4]) {
      nightData.house = true
    }

    return nightData
  }


  function calculateTotals (availablePlaces, availablePriceRange, availableNights) {
    var totalavailability = {
      hotel1: false,
      hostel1: false,
      motel1: false,
      house: false
    }

    if (availablePlaces.hotel1 === true && availablePriceRange.hotel1 === true && availableNights.hotel1 === true) {
      console.log('dsdas')
      totalavailability.hotel1 = true
    }

    if (availablePlaces.hostel1 === true && availablePriceRange.hostel1 === true && availableNights.hostel1 === true) {
      console.log('dsdas')
      totalavailability.hostel1 = true
    }

    if (availablePlaces.motel1 === true && availablePriceRange.motel1 === true && availableNights.motel1 === true) {
      console.log('dsdas')
      totalavailability.motel1 = true
    }

    if (availablePlaces.house === true && availablePriceRange.house === true && availableNights.house === true) {
      console.log('dsdas')
      totalavailability.house = true
    }

    return totalavailability
  }

  // Calling the calcualtion functions
  calaulateAmmontOfPeople(data)
  calculateMaxPrice(data)
  calaulateNights(data)

  var availablePlaces = calaulateAmmontOfPeople(data)
  var availablePriceRange = calculateMaxPrice(data)
  var availableNights = calaulateNights(data)
  console.log(availablePlaces)
  console.log(availablePriceRange)
  console.log(availableNights)

  // Calling the total function
  calculateTotals(availablePlaces, availablePriceRange, availableNights)

  var totalAvailablePlaces = calculateTotals(availablePlaces, availablePriceRange, availableNights)

  console.log(totalAvailablePlaces)

  if (totalAvailablePlaces.hotel1 === true) {
    var testVar = document.getElementById('hotel')
    testVar.innerHTML = 'hotel available'
  }

})
