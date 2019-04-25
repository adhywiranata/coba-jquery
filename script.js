var planets = [
  'Mars',
  'Pluto',
];

for(var i = 0; i < planets.length; i++) {
  $("#planet-list").append("<li>" + planets[i] + "</li>");
}

$("#add-planet").on("click", function() {
  var planetName = $("#planet-name").val();
  $("#planet-list").append("<li>" + planetName + "</li>");
  planets.push(planetName);
});

$("#planet-search").on("keyup", function(event) {
  var searchKeyword = $("#planet-search").val().toLowerCase();
  $("#planet-list").html('');
  for(var i = 0; i < planets.length; i++) {
    if (planets[i].toLowerCase().includes(searchKeyword)) {
      $("#planet-list").append("<li>" + planets[i] + "</li>");
    }
  }
});