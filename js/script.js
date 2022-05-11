//movie api url
$(".submit").click(function () {
  let userInput = $(".searchInput").val();
  console.log(userInput);

  let movieAPI = `https://api.themoviedb.org/3/search/movie?api_key=73fd371dd4dae96ea8f80a479504448a&language=en-US&query=${userInput}&page=1&include_adult=false`;
  fetch(movieAPI)
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
    for (let i = 0; i < data.results.length; i++) {
      console.log(i);
    console.log(data.results[i].title);
      $(".main").append(`<img src="${randomGif}">`);
    }
  })

  //movie poster url
  //https://image.tmdb.org/t/p/w500${moviePosterData}

  //declare global variables

  //include a click handler for search bar

  //save user input for city
  //save user input for state

  //update movie api

  //add fetch request using movie api

  //then with function that returns an api response in json

  //then with function that displays data to page
  //loop over data to show multiple movies
});
  
