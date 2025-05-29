const endDate = new Date("29may,2025 20 :00:00").getTime();
const startDate = new Date().getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distanseCoverd = now - startDate;
  const distancePending = endDate - now;
  //calculate  date,time,days
  //1day=24*60*60*1000 ms

  const oneDayInMillis = 24 * 60 * 60 * 1000;
  const oneHourInMillis = 60 * 60 * 1000;
  const oneMinInMillis = 60 * 1000;
  const oneSecInMillis = 1000;
  const days = Math.floor(distancePending / oneDayInMillis);

  const hrs = Math.floor((distancePending % oneDayInMillis) / oneHourInMillis);

  const mins = Math.floor(
    (distancePending % (60 * 60 * 1000)) / oneMinInMillis
  );

  const secs = Math.floor((distancePending % oneMinInMillis) / oneSecInMillis);

  ////populate in UI

  document.getElementById("days").innerHTML = days;
  document.getElementById("hour").innerHTML = hrs;
  document.getElementById("minuts").innerHTML = mins;
  document.getElementById("seconds").innerHTML = secs;

  ///calculate width % for progrss bar\

  const totalDistance = endDate - startDate;
  const percentageDistance = (distanseCoverd / totalDistance) * 100;

  // set width for progress bar

  document.getElementById("progress-bar").style.width =
    percentageDistance + "%";

  if (distancePending < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("progress-bar").style.width = "100%";
  }
}

let x = setInterval(updateTimer, 1000);
