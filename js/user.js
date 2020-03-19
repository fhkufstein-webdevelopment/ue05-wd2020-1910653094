$(document).ready(function() {

    var userListBody = $('.userList tbody');
    var anzahlUser = 1;

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

        anzahlUser++;//ich füge einen User hinzu
        var newUser = document.getElementById('username').value;//ich bekomme die Eingabe vom User (seinen Username)
        userListBody.push(newUser);//ich füge diesen Username meiner Userliste hinzu

        var table = document.getElementById('UserTable');//Hier bekomme ich die User Tabelle
        var newRow = table.insertRow(-1);//ich füge eine neue Reihe der user Tabelle hinzu (an der Stelle -1 damit diese am Ende der tabelle hinzugefügt wird)
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        //Hier füge ich drei Columns meine Reihe hinzu

        newCell1.innerHTML = anzahlUser;//Erste Column steht die Position des Users
        newCell2.innerHTML = newUser;//Zweite Column steht der Username
        newCell3.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button>";
        //Dritte Column ist der Löschen Button

        document.getElementById("formular").reset();//ich reste die tabelle damit die neue Reihe sichtbar wird


        return false;
    });


    $(document).on('click','.deleteTrigger',function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here
        if (confirm('Sind Sie sicher das Sie den User löschen wollen?')) {//Es wird ein Confirm Window erstellt
            $(this).parents("tr").remove();//ich bekomme das <tr> element von dem angeclickten Button und lösche es
            //So wird das ganze <tr> gelöscht (also die ganze Zeile)
            anzahlUser--;
        }


        var table = document.getElementById('UserTable');
        for (var i=0, row; row = table.rows[i]; i++) {//ich gehe alle reihen meiner User Tabelle durch
            for (var j = 0, col; col=row.cells[j]; j++) {//ich gehe alle Cells meiner Reihe durch
                if (j===0 && i!==0) {
                    col.innerHTML = i;
                }
            }
        }
        //Zeile 67-74 damit die Reihenfolge bleibt (sonst verschwindet z.B. User 2 und es gibt User 1 und dann User 3)
    });

    //maybe some code follows here

});