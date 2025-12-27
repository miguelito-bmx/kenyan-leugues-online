const clubs = {
 const clubs = [
  { name: "Gituru FC", logo: "G", league: "Div1", zone: "A" },
  { name: "Zetech Titans FC", logo: "Z", league: "Div1", zone: "B" },
  { name: "Strathmore University FC", logo: "S", league: "Div1", zone: "A" },
  { name: "Kibra United SC", logo: "K", league: "Div1", zone: "B" },
  { name: "Ruiru Hotstars FC", logo: "R", league: "Div2", zone: "" },
  { name: "Gucha Stars FC", logo: "G", league: "Regional", zone: "" },
  { name: "Nakuru Bucks FC", logo: "N", league: "Div1", zone: "A" },
  { name: "Bumbani Stars FC", logo: "B", league: "Div2", zone: "" },
  { name: "Young Bulls FC", logo: "Y", league: "Div2", zone: "" },
  { name: "Kenya Navy FC", logo: "N", league: "Div1", zone: "B" },
  { name: "Equity FC", logo: "E", league: "Div1", zone: "A" },
  { name: "ImageSoy United FC", logo: "I", league: "Div1", zone: "B" },
  { name: "ImageCompel SC", logo: "I", league: "Div2", zone: "" },
  { name: "Bungoma Superstars FC", logo: "B", league: "Regional", zone: "" },
  { name: "Hillside FC", logo: "H", league: "Div2", zone: "" },
  { name: "GFE 105 FC", logo: "G", league: "Div1", zone: "A" },
  { name: "Sigalagala Poly FC", logo: "S", league: "Div1", zone: "B" },
  { name: "Harvest of Hope Africa FC", logo: "H", league: "Regional", zone: "" },
  { name: "Al Azizia FC", logo: "A", league: "Div1", zone: "A" },
  { name: "SIMBA Apparel FC", logo: "S", league: "Div2", zone: "" },
  { name: "KAPA FC", logo: "K", league: "Div2", zone: "" },
  { name: "Teita Estate FC", logo: "T", league: "Regional", zone: "" },
  { name: "Spitfire FC", logo: "S", league: "Div2", zone: "" },
  { name: "Royal Fresh FC", logo: "R", league: "Div2", zone: "" },
  { name: "Congo Boyz FC", logo: "C", league: "Div2", zone: "" },
  { name: "Kahawa United FC", logo: "K", league: "Div1", zone: "B" },
  { name: "Black Vultures Nairobi FC", logo: "B", league: "Div2", zone: "" },
  { name: "Kibera Saints FC", logo: "K", league: "Div2", zone: "" },
  { name: "Mwatate United FC", logo: "M", league: "Div2", zone: "" },
  { name: "Commercial FC Nairobi", logo: "C", league: "Regional", zone: "" },
  { name: "FISA Nairobi FC", logo: "F", league: "Regional", zone: "" },
  { name: "Vihiga United FC", logo: "V", league: "Div1", zone: "A" }
];
 const grid = document.getElementById("clubsGrid");
const clubSearch = document.getElementById("clubSearch");
const leagueSelect = document.getElementById("leagueSelect");
const zoneSelect = document.getElementById("zoneSelect");

function displayClubs(filteredClubs) {
  grid.innerHTML = "";
  filteredClubs.forEach(club => {
    const card = document.createElement("div");
    card.className = "club-card";
    card.innerHTML = `
      <div class="club-logo">${club.logo}</div>
      <div class="club-name">${club.name}</div>
      <div class="club-league">${club.league} ${club.zone ? '- ' + club.zone : ''}</div>
    `;
    grid.appendChild(card);
  });
}

// Initial display
displayClubs(clubs);

// Add filter events
[clubSearch, leagueSelect, zoneSelect].forEach(el => {
  el.addEventListener("input", () => {
    const searchText = clubSearch.value.toLowerCase();
    const leagueFilter = leagueSelect.value;
    const zoneFilter = zoneSelect.value;

    const filtered = clubs.filter(club => {
      const matchesName = club.name.toLowerCase().includes(searchText);
      const matchesLeague = leagueFilter ? club.league === leagueFilter : true;
      const matchesZone = zoneFilter ? club.zone === zoneFilter : true;
      return matchesName && matchesLeague && matchesZone;
    });

    displayClubs(filtered);
  });
});


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

