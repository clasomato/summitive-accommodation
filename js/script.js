function globalFunction () {
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
    }

    if (ammountOfPeople >= data.hostel1[0] && ammountOfPeople <= data.hostel1[1]) {
      ammountOfPeopleData.hostel1 = true
    }

    if (ammountOfPeople >= data.motel1[0] && ammountOfPeople <= data.motel1[1]) {
      ammountOfPeopleData.motel1 = true
    }

    if (ammountOfPeople >= data.house[0] && ammountOfPeople <= data.house[1]) {
      ammountOfPeopleData.house = true
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

    if (data.hotel1[2] <= userMaxPriceInput) {
      priceData.hotel1 = true
    }

    if (data.hostel1[2] <= userMaxPriceInput) {
      priceData.hostel1 = true
    }

    if (data.motel1[2] <= userMaxPriceInput) {
      priceData.motel1 = true
    }

    if (data.house[2] <= userMaxPriceInput) {
      priceData.house = true
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
      console.log('Hotel Available')
      totalavailability.hotel1 = true
    }

    if (availablePlaces.hostel1 === true && availablePriceRange.hostel1 === true && availableNights.hostel1 === true) {
      console.log('Hostel Available')
      totalavailability.hostel1 = true
    }

    if (availablePlaces.motel1 === true && availablePriceRange.motel1 === true && availableNights.motel1 === true) {
      console.log('Motel Available')
      totalavailability.motel1 = true
    }

    if (availablePlaces.house === true && availablePriceRange.house === true && availableNights.house === true) {
      console.log('House Available')
      totalavailability.house = true
    }

    return totalavailability
  }

  function printResultsToDom (totalAvailablePlaces) {
    console.log(totalAvailablePlaces)

    // var testHotelDom = document.getElementById('hotel22')
    if (totalAvailablePlaces.hotel1 == true) {
      // testHotelDom.innerHTML = 'hotel available'

      $('#hotelCard').show()
    }

    if (totalAvailablePlaces.hostel1 == true) {
      // var testHostelDom = document.getElementById('hostel')
      // testHostelDom.innerHTML = 'hotel available'

      $('#hostelCard').show()
    }

    if (totalAvailablePlaces.motel1 == true) {
      // var testMotelDom = document.getElementById('motel')
      // testMotelDom.innerHTML = 'motel available'

      $('#motelCard').show()
    }

    if (totalAvailablePlaces.house == true) {
      // var testHouseDom = document.getElementById('house')
      // testHouseDom.innerHTML = 'house available'

      $('#houseCard').show()
    }

    if (totalAvailablePlaces.hotel1 == false && totalAvailablePlaces.hostel1 == false && totalAvailablePlaces.motel1 == false && totalAvailablePlaces.house == false) {
      alert('No places available')
      $('#finalStep').hide()
      $('#step4').hide(200)
      $('#step3').hide(200)
      $('#step2').hide(200)
      $('#step1').show()
    }
  }

  // Calling the calcualtion functions
  calaulateAmmontOfPeople(data)
  calculateMaxPrice(data)
  calaulateNights(data)

  var availablePlaces = calaulateAmmontOfPeople(data)
  var availablePriceRange = calculateMaxPrice(data)
  var availableNights = calaulateNights(data)

  // Calling the total function
  calculateTotals(availablePlaces, availablePriceRange, availableNights)
  var totalAvailablePlaces = calculateTotals(availablePlaces, availablePriceRange, availableNights)

  // Calling the function that writes the results to the dom
  printResultsToDom(totalAvailablePlaces)
}

// Transition JS
$('#step1Button').click(function () {
  $('#step1').hide()
  $('#step2').show(300)
})

$('#step2Button').click(function () {
  $('#step2').hide()
  $('#step3').show(300)
})

$('#step3Button').click(function () {
  $('#step4').show(300)
  $('#step3').hide()
})

$('#step4Button').click(function () {
  $('#finalStep').show(300)
  $('#step4').hide()
  globalFunction()
})

// Modal Toggles
// Hotel Toggles
$('#hotelViewButton').click(function () {
  // Shows the hotel modal
  $('#modalHotel').fadeIn(300)

  // Runs the mapbox api to make the hotel map
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhc29tYXRvIiwiYSI6ImNrYjczZjNzeTAxdXkycWtjZXZqMW93bjMifQ.GKDp48PUnWCG9OBFMkN-_Q';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [174.775391, -41.287870], // starting position [lng, lat]
    zoom: 12 // starting zoom
  })

  var marker = new mapboxgl.Marker()
  .setLngLat([174.777146, -41.284550])
  .addTo(map)
})

$('#closeHotelModalButton').click(function () {
  $('#modalHotel').fadeOut(300)
})

// Hostel Toggles
$('#hostelViewButton').click(function () {
  $('#modalHostel').fadeIn(300)

  mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhc29tYXRvIiwiYSI6ImNrYjczZjNzeTAxdXkycWtjZXZqMW93bjMifQ.GKDp48PUnWCG9OBFMkN-_Q';
  var map = new mapboxgl.Map({
    container: 'mapHostel',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [174.775391, -41.287870], // starting position [lng, lat]
    zoom: 12 // starting zoom
  })

  var marker = new mapboxgl.Marker()
  .setLngLat([174.783922, -41.293146])
  .addTo(map)
})

$('#closeHostelModalButton').click(function () {
  console.log('click2')
  $('#modalHostel').fadeOut(300)
})

// Motel Toggles
$('#motelViewButton').click(function () {
  $('#modalMotel').fadeIn(300)

  mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhc29tYXRvIiwiYSI6ImNrYjczZjNzeTAxdXkycWtjZXZqMW93bjMifQ.GKDp48PUnWCG9OBFMkN-_Q';
  var map = new mapboxgl.Map({
    container: 'mapMotel',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [174.775391, -41.287870], // starting position [lng, lat]
    zoom: 12 // starting zoom
  })

  var marker = new mapboxgl.Marker()
  .setLngLat([174.771652, -41.297508])
  .addTo(map)
})

$('#closeMotelModalButton').click(function () {
  console.log('click2')
  $('#modalMotel').fadeOut(300)
})

// House Toggles
$('#houseViewButton').click(function () {
  $('#houseModal').fadeIn(300)

  mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhc29tYXRvIiwiYSI6ImNrYjczZjNzeTAxdXkycWtjZXZqMW93bjMifQ.GKDp48PUnWCG9OBFMkN-_Q';
  var map = new mapboxgl.Map({
    container: 'mapHouse',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [174.775391, -41.287870], // starting position [lng, lat]
    zoom: 12 // starting zoom
  })

  var marker = new mapboxgl.Marker()
  .setLngLat([174.785740, -41.293788])
  .addTo(map)
})

$('#closeHouseModalButton').click(function () {
  console.log('Houseclick2')
  $('#houseModal').fadeOut(300)
})

// Slideshow JS
// Hotel Slideshow
function hotelSlideshow () {
  $('#hotelSlide2').hide()
  $('#hotelSlide3').hide()

  var slideIndex = 1
  var slideNextButton = document.getElementById('hotelSlideNext')
  var slideBackButton = document.getElementById('hotelSlideBack')

  slideNextButton.addEventListener('click', event => {
    slideIndex = slideIndex + 1
    console.log(slideIndex)
    slideCheck()
  })

  slideBackButton.addEventListener('click', event => {
    slideIndex = slideIndex - 1
    console.log(slideIndex)
    slideCheck()
  })

  console.log('zzz')
  console.log(slideIndex)

  function slideCheck () {

    if (slideIndex === 1) {
      $('#hotelSlide1').show()
      $('#hotelSlide2').hide()
      $('#hotelSlide3').hide()
    }

    if (slideIndex === 2) {
      $('#hotelSlide1').hide()
      $('#hotelSlide2').show()
      $('#hotelSlide3').hide()
    }

    if (slideIndex === 3) {
      $('#hotelSlide1').hide()
      $('#hotelSlide2').hide()
      $('#hotelSlide3').show()
    }

    if (slideIndex === 4) {
      slideIndex = 1
    }

    if (slideIndex === 0) {
      slideIndex = 3
    }
  } // function slideCheck ends
}

// Hostel Slideshow
function hostelSlideshow () {
  $('#hostelSlide2').hide()
  $('#hostelSlide3').hide()

  var slideIndex = 1
  var slideNextButton = document.getElementById('hostelSlideNext')
  var slideBackButton = document.getElementById('hostelSlideBack')

  slideNextButton.addEventListener('click', event => {
    slideIndex = slideIndex + 1
    console.log(slideIndex)
    slideCheck()
  })

  slideBackButton.addEventListener('click', event => {
    slideIndex = slideIndex - 1
    console.log(slideIndex)
    slideCheck()
  })

  console.log('zzz')
  console.log(slideIndex)

  function slideCheck () {

    if (slideIndex === 1) {
      $('#hostelSlide1').show()
      $('#hostelSlide2').hide()
      $('#hostelSlide3').hide()
    }

    if (slideIndex === 2) {
      $('#hostelSlide1').hide()
      $('#hostelSlide2').show()
      $('#hostelSlide3').hide()
    }

    if (slideIndex === 3) {
      $('#hostelSlide1').hide()
      $('#hostelSlide2').hide()
      $('#hostelSlide3').show()
    }

    if (slideIndex === 4) {
      slideIndex = 1
    }

    if (slideIndex === 0) {
      slideIndex = 3
    }
  } // function slideCheck ends
}

// Motel Slideshow
function motelSlideshow () {
  $('#motelSlide2').hide()
  $('#motelSlide3').hide()

  var slideIndex = 1
  var slideNextButton = document.getElementById('motelSlideNext')
  var slideBackButton = document.getElementById('motelSlideBack')

  slideNextButton.addEventListener('click', event => {
    slideIndex = slideIndex + 1
    console.log(slideIndex)
    slideCheck()
  })

  slideBackButton.addEventListener('click', event => {
    slideIndex = slideIndex - 1
    console.log(slideIndex)
    slideCheck()
  })

  console.log('zzz')
  console.log(slideIndex)

  function slideCheck () {
    if (slideIndex === 1) {
      $('#motelSlide1').show()
      $('#motelSlide2').hide()
      $('#motelSlide3').hide()
    }

    if (slideIndex === 2) {
      $('#motelSlide1').hide()
      $('#motelSlide2').show()
      $('#motelSlide3').hide()
    }

    if (slideIndex === 3) {
      $('#motelSlide1').hide()
      $('#motelSlide2').hide()
      $('#motelSlide3').show()
    }

    if (slideIndex === 4) {
      slideIndex = 1
    }

    if (slideIndex === 0) {
      slideIndex = 3
    }
  } // function slideCheck ends
}

// House modal
function houseSlideshow () {
  $('#houseSlide2').hide()
  $('#houseSlide3').hide()

  var slideIndex = 1
  var slideNextButton = document.getElementById('houseSlideNext')
  var slideBackButton = document.getElementById('houseSlideBack')

  slideNextButton.addEventListener('click', event => {
    slideIndex = slideIndex + 1
    console.log(slideIndex)
    slideCheck()
  })

  slideBackButton.addEventListener('click', event => {
    slideIndex = slideIndex - 1
    console.log(slideIndex)
    slideCheck()
  })

  console.log('zzz')
  console.log(slideIndex)

  function slideCheck () {
    if (slideIndex === 1) {
      $('#houseSlide1').show()
      $('#houseSlide2').hide()
      $('#houseSlide3').hide()
    }

    if (slideIndex === 2) {
      $('#houseSlide1').hide()
      $('#houseSlide2').show()
      $('#houseSlide3').hide()
    }

    if (slideIndex === 3) {
      $('#houseSlide1').hide()
      $('#houseSlide2').hide()
      $('#houseSlide3').show()
    }

    if (slideIndex === 4) {
      slideIndex = 1
    }

    if (slideIndex === 0) {
      slideIndex = 3
    }
  } // function slideCheck ends
}

hotelSlideshow()
hostelSlideshow()
motelSlideshow()
houseSlideshow()

// Back buttons
$('#step2BackButton').click(function () {
  $('#step2').hide(300)
  $('#step1').show()
})

$('#step3BackButton').click(function () {
  $('#step3').hide(300)
  $('#step2').show()
})

$('#step4BackButton').click(function () {
  $('#step4').hide(300)
  $('#step3').show()
})

$('#finalStepBackButton').click(function () {
  $('#finalStep').hide(300)
  $('#step4').show()
})



// Booking Process
// $('#something').click(function () {
//   $('#bookingPortal').show(300)
// })

$('#formCheckNext').click(function () {
  bookingFormCheck()
})

function bookingFormCheck () {
  var bookingFName = document.getElementById('fName').value
  var bookingLName = document.getElementById('lName').value
  var bookingEmail = document.getElementById('email').value
  var bookingPhone = document.getElementById('phoneNumber').value

  var bookingCheck = {
    fName: false,
    lName: false,
    email: false,
    phone: false
  }

  function openPaymentPortal () {
    $('#paymentPortal').show(300)
  }

  if (bookingFName !== '') {
    bookingCheck.fName = true
  }

  if (bookingLName !== '') {
    bookingCheck.lName = true
  }

  if (bookingEmail !== '') {
    bookingCheck.email = true
  }

  if (bookingPhone !== '') {
    bookingCheck.phone = true
  }

  console.log(bookingCheck)




  if (bookingCheck.fName === true && bookingCheck.lName === true && bookingCheck.email === true && bookingCheck.phone === true) {
    openPaymentPortal()
    console.log('huzzah!')
  } else {
    alert('You have no filled in all the fields!')
  }
}

// Booking bookingPortal
$('#hotelBookNow').click(function () {
  $('#bookingPortal').show(300)
})

$('#bookingExitButton').click(function () {
  $('#bookingPortal').hide(300)
})

$('#paymentExitButton').click(function () {
  $('#paymentPortal').hide(300)
})

function meals () {
  function hotelMeals () {
    var hotelDinner = ['steak', 'Dinner Buffet']
    var str = '<ul>'

    hotelDinner.forEach(function (hotelDinner) {
      str += '<li>' + hotelDinner + '</li>'
    })

    str += '</ul>'
    document.getElementById('hotelDinnerMenuContainer').innerHTML = str

  } // Hotel meals ENDS

  function hostelMeals () {
    var hostelBreakfast = {
      eggs: 21,
      broc: 39,
      BreakfastBuffe: 50
    }

    var hostelDinner = {
      Steak: 80,
      DinnerBuffe: 90
    }
  } // Hostel Meals ENDS

  function motelMeals () {
    var motelBreakfast = {
      eggs: 21,
      broc: 39,
      BreakfastBuffe: 50
    }

    var motelDinner = {
      Steak: 80,
      DinnerBuffe: 90
    }
  } // Motel Meals ENDS

  function houseMeals () {
    var houseBreakfast = {
      eggs: 21,
      broc: 39,
      BreakfastBuffe: 50
    }

    var houseDinner = {
      Steak: 80,
      DinnerBuffe: 90
    }
  } // House Meals ENDS

  // Calling the diffrent esstablishment functions
  hotelMeals()
  hostelMeals()
  motelMeals()
  houseMeals()
}

meals()
