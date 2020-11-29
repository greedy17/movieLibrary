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

function addMovie(){
$("#post").click(function(){
  $.post("http://localhost:3000/api/movies", 
    {
      title: $("#1").val(),
      director: $("#2").val(),
      genre: $("#3").val()
    }, "json")
});
}