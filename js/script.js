// Make an object containg the accomadation data





$("#buttonSubmit").click(function(){
    var ammountOfPeople = document.getElementById("peopleInput").value;
    console.log(ammountOfPeople)

    var data = {
        // Array data in order minimum people, max people, price, minNight, maxNight
        hotel1: [1, 2, 157, 1, 5],
        hostel1: [1, 1, 30, 1, 10],
        motel1: [2, 4, 90, 3, 10],
        house: [1, 4, 240, 2, 15]
    };


    // Find out if the ammount of people matches the following
    if (ammountOfPeople <= data.hotel1[0] && ammountOfPeople >= data.hotel1[1]) {
        console.log("dhsakj");
    } else {
        console.log("Something is wrong")
    };




    // Call the functions
    // howManyPeople(data, ammountOfPeople);




});
