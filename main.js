//Current Day of the Week
const currentDay = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayIndex = currentDay.getDay();
const dayName = daysOfWeek[dayIndex];
const dayOfWeek = document.querySelector('[data-testid="currentDay"]');
dayOfWeek.textContent = `${dayName}`;

//Current UTC Time in Milliseconds
function currentTimeUTC() {
  const currentTimeInMilliseconds = new Date().getTime();
  const utcTime = document.querySelector('[data-testid="currentTimeUTC"]');
  utcTime.textContent = `${currentTimeInMilliseconds}`;
}
setInterval(currentTimeUTC, 1000);
