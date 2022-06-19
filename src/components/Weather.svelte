<script>
    import Container from "./container.svelte";
  
    let weatherpng = "";
    let weatherDayTwoPng = "";
    let weatherDayThreePng = "";
    let temp  = 0;
    let tempDayTwo = 0;
    let tempDayThree = 0;
    let date = "";

    async function fetchStatus() {
      let res;
      let response;
      try {
        response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=035c03fe0d4f46f7b90105115221806&q=Kausen&days=3&aqi=no&alerts=no&hourly=no&hourly_by_zone=no&lang=de&units=m");
        res = await response.json();
        
        //now
        temp = res["current"]["temp_c"];
        weatherpng = res["current"]["condition"]["icon"];

        //day two
        tempDayTwo = res["forecast"]["forecastday"][1]["day"]["maxtemp_c"];
        weatherDayTwoPng = res["forecast"]["forecastday"][1]["day"]["condition"]["icon"];
      
        //day three
        tempDayThree = res["forecast"]["forecastday"][2]["day"]["maxtemp_c"];
        weatherDayThreePng = res["forecast"]["forecastday"][2]["day"]["condition"]["icon"];
        date = res["forecast"]["forecastday"][2]["date"];
      } catch {
        response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=035c03fe0d4f46f7b90105115221806&q=Kausen&days=3&aqi=no");
        res = await response.json();
        
        //now
        temp = res["current"]["temp_c"];
        weatherpng = res["current"]["condition"]["icon"];

        //day two
        tempDayTwo = res["forecast"]["forecastday"][1]["day"]["maxtemp_c"];
        weatherDayTwoPng = res["forecast"]["forecastday"][1]["day"]["condition"]["icon"];
      
        //day three
        tempDayThree = res["forecast"]["forecastday"][2]["day"]["maxtemp_c"];
        weatherDayThreePng = res["forecast"]["forecastday"][2]["day"]["condition"]["icon"];
        date = res["forecast"]["forecastday"][2]["date"];
      }
    }
    fetchStatus();
</script>

<Container>
  <h1 class="font-bold m-4 text-xl">Wetter</h1>
  <p class="mt-2 ml-4 mb-4"><em>Kausen, Rheinland-Pfalz</em></p>
  <slot></slot>
  <div class="float-left bg-gray-600 w-20 ml-4 mt-8 items-center text-center justify-center rounded">
    <p class="font-bold">Heute</p>
    <img class="ml-2" src={weatherpng} alt="">
    <p class="font-bold">{temp}°C</p>
  </div>
  <div class="float-left bg-gray-600 w-20 ml-4 mt-8 items-center text-center justify-center rounded">
    <p class="font-bold">Morgen</p>
    <img class="ml-2" src={weatherDayTwoPng} alt="">
    <p class="font-bold">{tempDayTwo}°C</p>
  </div>
  <div class="float-left bg-gray-600 w-20 ml-4 mt-8 items-center text-center justify-center rounded">
    <p class="font-bold">{date.substring(5).replace(/-/g, ".")}</p>
    <img class="ml-2" src={weatherDayThreePng} alt="">
    <p class="font-bold">{tempDayThree}°C</p>
  </div>
</Container>