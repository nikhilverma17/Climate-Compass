function BackgroundImage(data) {
  let id = 0;
  if (!Array.isArray(data) && data.list[0].weather[0].id) {
    id = data.list[0].weather[0].id;
  }
  function getImageUrl(weatherId) {
    // id classification https://openweathermap.org/weather-conditions
    if (weatherId >= 200 && weatherId < 300) {
      return 'https://i.pinimg.com/originals/1d/51/f6/1d51f66279173a40c2efc536ebe96786.gif'; // thunderstorm
    } else if (weatherId >= 300 && weatherId < 400) {
      return 'https://www.icegif.com/wp-content/uploads/2023/03/icegif-532.gif'; // drizzle
    } else if (weatherId >= 500 && weatherId < 600) {
      return 'https://giffiles.alphacoders.com/105/105191.gif'; // rain
    } else if (weatherId >= 600 && weatherId < 700) {
      return 'https://25.media.tumblr.com/tumblr_mb6jl8AUkU1rha1i6o1_500.gif'; // snow
    } else if (weatherId >= 700 && weatherId < 800) {
      return 'https://i.gifer.com/604.gif'; // strong wind
    } else if (weatherId === 800) {
      return 'https://media.tenor.com/AXST3pQh5r8AAAAd/sunny-day-when-sharks-attack.gif'; // clear day Image
    } else {
      return 'https://media.tenor.com/r0F3-kMPAtwAAAAd/moving-clouds-world-meteorological-day.gif'; // cloudy day
    }
  }

  return getImageUrl(Number(id));
}

export default BackgroundImage;