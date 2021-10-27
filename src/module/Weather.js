import axios from "axios";
import useAsync from "../module/useAsync";
import MainContainer from "../container/MainContainer";
import Error from "../component/Error";
import Loading from "../component/LoadingComp";
const WEATHER_API_KEY = "ffc012cd698a9beca9d896a3efcc1576";

/** 현지 시각 표기로 변경 => 오전 00시 00분*/
const convertTime = (_sec) => {
  var date = new Date(_sec * 1000);
  var timestr = date.toLocaleTimeString();
  return timestr;
};
export default function Weaher({ unit, city_name }) {
  unit ? (unit = "metric") : (unit = "imperial");
  const getData = async () => {
    let current_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${WEATHER_API_KEY}&units=${unit}`;
    let forecast_url = `https://api.openweathermap.org/data/2.5/onecall?lat=37.5683&lon=126&exclude=current,minutely,alerts,hourly&appid=ffc012cd698a9beca9d896a3efcc1576&units=metric`;

    const data = Promise.all([axios.get(current_url), axios.get(forecast_url)])
      .then(
        axios.spread((...responses) => {
          const current_res = responses[0].data;
          const forecast_res = responses[1].data.daily;
          const dataArray = [];
          const forecastArray = [];

          forecast_res.forEach(function (data, index) {
            forecastArray.push({
              max: Math.round(data.temp.max),
              min: Math.round(data.temp.min),
              main: data.weather[0].main
            });
          });
          dataArray.push({
            main: current_res.weather[0].main,
            city: current_res.name,
            temp: Math.round(current_res.main.temp),
            humidity: current_res.main.humidity,
            pressure: current_res.main.pressure,
            visibility: current_res.visibility,
            sunrise: convertTime(current_res.sys.sunrise),
            sunset: convertTime(current_res.sys.sunset),
            feels_like: Math.round(current_res.main.feels_like),
            wind_dir: current_res.wind.deg,
            wind_speed: current_res.wind.speed,
            cloud: current_res.clouds.all,
            forecastArray: [...forecastArray]
          });
          return dataArray;
        })
      )
      .catch(function (error) {
        console.log(error.response.status);
        if (error.response.status === 400) {
          return error.response.status;
        }
      });

    return data;
  };

  const [wstate, fetchData] = useAsync(getData, [city_name]);
  const { loading, data, error } = wstate;
  if (error) return <Error />;
  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <>
      <MainContainer wstate={wstate} fetchData={fetchData} />
    </>
  );
}
