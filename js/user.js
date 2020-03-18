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

        var newUser = document.getElementById('username').value;
        userListBody.push(newUser);
        var length = userListBody.length;

        var table = document.getElementById('UserTable');
        var newRow = table.insertRow(-1);
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);

        newCell1.innerHTML = length;
        newCell2.innerHTML = newUser;
        newCell3.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button>";

        document.getElementById("formular").reset();
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