const clubs = {
  "Gituru FC": "https://www.facebook.com/100063632533686",
  "Zetech Titans FC": "https://www.facebook.com/ZUTitansFc",
  "Strathmore University FC": "https://www.facebook.com/search/top?q=Strathmore%20University%20FC%20Kenya",
  "Green Berets FC": "https://www.facebook.com/search/top?q=Green%20Berets%20FC%20Kenya",
  "Dimba Patriots FC": "https://www.facebook.com/search/top?q=Dimba%20Patriots%20FC%20Kenya",
  "Al Azizia FC": "https://www.facebook.com/search/top?q=Al%20Azizia%20FC%20Kenya",
  "SIMBA Apparel FC": "https://www.facebook.com/search/top?q=SIMBA%20Apparel%20FC%20Kenya",
  "KAPA FC": "https://www.facebook.com/search/top?q=KAPA%20FC%20Kenya",
  "Teita Estate FC": "https://www.facebook.com/search/top?q=Teita%20Estate%20FC%20Kenya",
  "Spitfire FC": "https://www.facebook.com/search/top?q=Spitfire%20FC%20Kenya",
  "Bumbani Stars FC": "https://www.facebook.com/search/top?q=Bumbani%20Stars%20FC%20Kenya",
  "Royal Fresh FC": "https://www.facebook.com/search/top?q=Royal%20Fresh%20FC%20Kenya",
  "Congo Boyz FC": "https://www.facebook.com/search/top?q=Congo%20Boyz%20FC%20Kenya",
  "Kahawa United FC": "https://www.facebook.com/search/top?q=Kahawa%20United%20FC%20Kenya",
  "Kibra United SC": "https://www.facebook.com/KibraUnited",
  "Kenya Navy FC": "https://www.facebook.com/search/top?q=Kenya%20Navy%20FC",
  "Equity FC": "https://www.facebook.com/search/top?q=Equity%20FC%20Kenya",
  "Ruiru Hotstars FC": "https://www.facebook.com/search/top?q=Ruiru%20Hotstars%20FC%20Kenya",
  "Young Bulls FC": "https://www.facebook.com/search/top?q=Young%20Bulls%20FC%20Kenya",
  "Gucha Stars FC": "https://www.facebook.com/search/top?q=Gucha%20Stars%20FC%20Kenya",
  "Transfoc FC": "https://www.facebook.com/search/top?q=Transfoc%20FC%20Kenya",
  "ImageSoy United FC": "https://www.facebook.com/search/top?q=ImageSoy%20United%20FC%20Kenya",
  "ImageCompel SC": "https://www.facebook.com/search/top?q=ImageCompel%20SC%20Kenya",
  "Bungoma Superstars FC": "https://www.facebook.com/search/top?q=Bungoma%20Superstars%20FC%20Kenya",
  "Hillside FC": "https://www.facebook.com/search/top?q=Hillside%20FC%20Kenya",
  "Nakuru Bucks FC": "https://www.facebook.com/search/top?q=Nakuru%20Bucks%20FC%20Kenya",
  "GFE 105 FC": "https://www.facebook.com/search/top?q=GFE%20105%20FC%20Kenya",
  "Sigalagala Poly FC": "https://www.facebook.com/search/top?q=Sigalagala%20Poly%20FC%20Kenya",
  "Harvest of Hope Africa FC": "https://www.facebook.com/search/top?q=Harvest%20of%20Hope%20Africa%20FC%20Kenya"
};

// DOM
const clubSelect = document.getElementById("clubs");
const fixtureList = document.getElementById("fixtureList");

// Load clubs into dropdown
Object.keys(clubs).forEach(club => {
  const option = document.createElement("option");
  option.value = club;
  option.textContent = club;
  clubSelect.appendChild(option);
});

// When club selected
clubSelect.addEventListener("change", () => {
  fixtureList.innerHTML = "";
  const club = clubSelect.value;

  if (!club) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${club}</strong><br>
    <a href="${clubs[club]}" target="_blank">Visit Facebook Page</a>
  `;
  fixtureList.appendChild(li);
});

