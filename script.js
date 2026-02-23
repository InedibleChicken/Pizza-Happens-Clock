function showTime() {
  const options = {
    timeZone: 'America/New_York',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  };
  document.getElementById('currentTime').textContent =
    new Date().toLocaleString('en-US', options);
}

showTime();
setInterval(showTime, 1000);
