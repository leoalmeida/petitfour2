/**
 * Created by LeonardoAlmeida on 13/05/16.
 */
$(document).ready (function(){
    $("#success-alert").hide();
    $("#myWish").click(function showAlert() {
        $("#success-alert").alert();
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
            $("#success-alert").alert('close');
        });
    });
});
