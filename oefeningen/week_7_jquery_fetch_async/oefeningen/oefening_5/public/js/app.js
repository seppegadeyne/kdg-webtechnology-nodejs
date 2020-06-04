setTabContent(document.querySelector(".active a"));

document.querySelectorAll(".navi_sec a").forEach(link => link.addEventListener("click",setActiveMenu));

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function createCell(txt) {
  let cell = document.createElement("td");
  cell.append(txt);
  return cell;
}

async function loadWeatherData() {
  let result = await fetch("data/weather.json");
  let entry = await result.json();
  let data = entry.main;
  document.getElementById("weatherdata").append(
    createCell(data.temp),
	createCell(data.temp_min),
	createCell(data.temp_max),
	createCell(data.pressure),
	createCell(data.sea_level),
	createCell(data.grnd_level),
	createCell(data.humidity)
  );
}

async function setTabContent(link) {
  let tab = link.textContent;
  let content = document.querySelector('#content');
  content.classList.add('loading');
  let result = await fetch(tab.toLowerCase() + '.html');
  content.innerHTML = await result.text();
  if(tab === 'Home'){
    await loadWeatherData();
    await sleep(1000);
  }
  content.classList.remove('loading');
}

 function setActiveMenu(event) {
  let li = event.target.closest('li');
  if (li.classList.contains('active')) return;

  document.querySelector('.active').classList.remove('active');
  li.classList.add('active');

  setTabContent(event.target);
}