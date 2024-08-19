function hentData(){
    $.get("http://localhost:8080/?navn=Per", function(data){
        $("#hallo").html=data;
        }
    )
}