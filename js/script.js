// Make an object containg the accomadation data





$('#buttonSubmit').click(function () {
  // Global Variables
  var ammountOfPeople = document.getElementById('peopleInput').value
  var nightsToStay = document.getElementById('nightsToStay').value


  var data = {
    // Array data in order minimum people, max people, price, minNight, maxNight
    hotel1: [1, 2, 157, 1, 5],
    hostel1: [1, 1, 30, 1, 10],
    motel1: [2, 4, 90, 3, 10],
    house: [1, 4, 240, 2, 15]
  }

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
      console.log(ammountOfPeopleData.hotel1)
    }

    if (ammountOfPeople >= data.hostel1[0] && ammountOfPeople <= data.hostel1[1]) {
      ammountOfPeopleData.hostel1 = true
      console.log(ammountOfPeopleData.hostel1)
    }

    if (ammountOfPeople >= data.motel1[0] && ammountOfPeople <= data.motel1[1]) {
      ammountOfPeopleData.motel1 = true
      console.log(ammountOfPeopleData.motel1)
    }

    if (ammountOfPeople >= data.house[0] && ammountOfPeople <= data.house[1]) {
      ammountOfPeopleData.house = true
      console.log(ammountOfPeopleData.house)
    }

    return ammountOfPeopleData;
  }

  calaulateAmmontOfPeople(data)

})
