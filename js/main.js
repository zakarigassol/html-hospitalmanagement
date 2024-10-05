$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        var data = $("form").serializeArray()
        console.log(data[0].value);

        $('#alert').addClass('alert alert-success');
        $('#alert').text(`Message by ${data[1].value} , successfully sent`)

        this.reset();
    });
});