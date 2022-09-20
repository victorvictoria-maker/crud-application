// this file handles the jqeury that alerts
$('#add_user').submit(function(event) {
    alert('Data added successfully!');
});

$('#update_user').submit(function(event) {
    event.preventDefault();

    let userArray = $(this).serializeArray();
    let data = {};

    $.map(userArray, function(n, i) {
        data[n['name']] =  n['value'];
    });
    
    let request = {
        // "url": `http://localhost:3000/api/users/${data.id}`,
       // https://crud-user-management-app.herokuapp.com/
        "url": `https://crud-user-management-app.herokuapp.com/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    };
    console.log(request.url);

    $.ajax(request).done(function(response) {
        alert("Data Updated Successfully");
    });

});

if(window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        let id = $(this).attr("data-id");

        let request = {
            // "url": `http://localhost:3000/api/users/${id}`,
           // https://crud-user-management-app.herokuapp.com/
            "url": `https://crud-user-management-app.herokuapp.com/api/users/${id}`,
            "method": "DELETE"
        };

        if(confirm("Do you really want to delete this user?")) {
            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully");
                location.reload();
            });
        }
    });
};