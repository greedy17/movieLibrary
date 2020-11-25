function getMovies(){
  $(function(){
    $.ajax({
      type: 'GET',
      url: "http://localhost:3000/api/movies",
      dataType: 'json',
      success: function(){
        $('.library').html('');
      }
    })
    .then(function(data){
      $.each(data, function(index, value){
        $('.library').append(
          '<tr>' +
          '<div>' + '<td>' + "Movie: " + value.title + '</td>' + '</div>' +
          '<div>' + '<td>' + "Director: " + value.director + '</td>' + '</div>' +
          '<div>' + '<td>' + "Genre: " + value.genre + '</td>' + '</div>' +
          '<div>' + '<td>' + '<button>Update</button>' + '</td>' + '</div>' +
          '</tr>'
        );
      });
    });
  });
}
getMovies();
function searchMovies(){
  $(function(){
    $("#input").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
}
function addMovie(){ //tony says this function might not work right by now it is declared
// $("#post").click(function(){ //making a listener (could comment this line out and make a valid api) (everytime addmovie is called it's making a listener)
//line above is a working method now. listener may not be working the way it should be (onsubmit)
  let title = $("#1").val();
  let director = $("#2").val();
  let genre = $("#3").val();
  let data = {
    title: title, 
    director: director, 
    genre: genre,
  }
  $.ajax({
    url:"http://localhost:3000/api/movies", 
    dataType: "json",
    data: data,
    type: "post",
    success: function(data, textStatus, jQxhr){
      console.log(data);
      //call a success function
    }
});
}