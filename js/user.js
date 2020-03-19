$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here

        var newUser = document.getElementById('username').value;//ich bekomme die Eingabe vom User (seinen Username)
        userListBody.push(newUser);//ich füge diesen Username meiner Userliste hinzu
        var length = userListBody.length;//ich bekomme die länge von meiner Userliste (wie viele User es gibt)

        var table = document.getElementById('UserTable');//Hier bekomme ich die User Tabelle
        var newRow = table.insertRow(-1);//ich füge eine neue Reihe der user Tabelle hinzu (an der Stelle -1 damit diese am Ende der tabelle hinzugefügt wird)
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        //Hier füge ich drei Columns meine Reihe hinzu

        newCell1.innerHTML = length;//Erste Column steht die Position des Users
        newCell2.innerHTML = newUser;//Zweite Column steht der Username
        newCell3.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button>";
        //Dritte Column ist der Löschen Button (funktionniert noch nicht aus irgendeinem Grund)

        document.getElementById("formular").reset();//ich reste die tabelle damit die neue Reihe sichtbar wird


        return false;
    });


    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here

        /*var lastRow = userListBody.length;
        console.log(lastRow);
        document.getElementById('UserTable').deleteRow(lastRow);

        //userListBody.pop;
        //console.log(userListBody.length);
        userListBody.slice(0,userListBody.length); //!updated nicht die länge
        console.log(userListBody.length);
        document.getElementById("formular").reset();*/

    });

    //maybe some code follows here

});