const clubs = {
  "Gituru FC": [
    "Gituru FC vs Al Azizia – 2 : 1",
    "Mathare Youth B vs Gituru FC – 1 : 1"
  ],
  "Al Azizia": [
    "Al Azizia vs Gituru FC – 1 : 2",
    "Al Azizia vs Githurai AllStars – Upcoming"
  ],
  "Githurai AllStars": [
    "Githurai AllStars vs Al Azizia – Upcoming"
  ]
};

const clubSelect = document.getElementById("clubs");
const fixtureList = document.getElementById("fixtureList");

// Load clubs
Object.keys(clubs).forEach(club => {
  const option = document.createElement("option");
  option.value = club;
  option.textContent = club;
  clubSelect.appendChild(option);
});

// Show fixtures
clubSelect.addEventListener("change", () => {
  fixtureList.innerHTML = "";
  const selectedClub = clubSelect.value;

  if (!selectedClub) return;

  clubs[selectedClub].forEach(match => {
    const li = document.createElement("li");
    li.textContent = match;
    fixtureList.appendChild(li);
  });
});
