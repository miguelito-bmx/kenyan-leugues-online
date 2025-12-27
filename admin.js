// ------------------------
// Step 7a: Admin Login
// ------------------------
// ------------------------
// Step 7a: Admin Login
// ------------------------
const ADMIN_PASSWORD = "bigmax"; // your chosen admin password

const loginBtn = document.getElementById("loginBtn");
const adminPass = document.getElementById("adminPass");
const adminContent = document.getElementById("adminContent");
const loginSection = document.getElementById("loginSection");

loginBtn.addEventListener("click", () => {
  if(adminPass.value === ADMIN_PASSWORD) {
    loginSection.style.display = "none";
    adminContent.style.display = "block";
  } else {
    alert("Wrong password!");
  }
});

// ------------------------
// Step 7b: GitHub API Setup
// ------------------------

// Replace these with your GitHub repo info
const GITHUB_USERNAME = "BruceMiguel"; // your GitHub username
const REPO_NAME = "kenya-leagues";     // your existing repo
const BRANCH = "main";                 // usually "main" branch
const TOKEN = "YOUR_PERSONAL_ACCESS_TOKEN"; // you need to generate this

});// ------------------------
// Step 7b: Add Club
// ------------------------

// Replace these with your repo info
const GITHUB_USERNAME = "YOUR_USERNAME"; // your GitHub username
const REPO_NAME = "kenya-leagues";      // your repo name
const BRANCH = "main";                   // branch name
const TOKEN = "YOUR_PERSONAL_ACCESS_TOKEN"; // keep this secret

// Function to get current clubs.json content
async function getClubsJson() {
  const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/data/clubs.json`;
  const res = await fetch(url, {
    headers: {
      "Authorization": `token ${TOKEN}`,
      "Accept": "application/vnd.github.v3+json"
    }
  });
  const data = await res.json();
  const content = atob(data.content); // decode base64
  return { content: JSON.parse(content), sha: data.sha };
}

// Function to update clubs.json
async function updateClubsJson(newData, sha) {
  const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/data/clubs.json`;
  const body = {
    message: "Update clubs via admin panel",
    content: btoa(JSON.stringify(newData, null, 2)), // encode base64
    sha: sha,
    branch: BRANCH
  };
  await fetch(url, {
    method: "PUT",
    headers: {
      "Authorization": `token ${TOKEN}`,
      "Accept": "application/vnd.github.v3+json"
    },
    body: JSON.stringify(body)
  });
}

// Add Club Button
document.getElementById("addClubBtn").addEventListener("click", async () => {
  const name = document.getElementById("clubName").value;
  const logo = document.getElementById("clubLogo").value;
  const league = document.getElementById("clubLeague").value;
  const zone = document.getElementById("clubZone").value;

  if(!name || !logo) {
    alert("Please fill all required fields!");
    return;
  }

  try {
    const { content, sha } = await getClubsJson();
    content.push({ name, logo, league, zone });
    await updateClubsJson(content, sha);
    alert("Club added successfully!");
    document.getElementById("clubName").value = "";
    document.getElementById("clubLogo").value = "";
  } catch (err) {
    console.error(err);
    alert("Error updating clubs. Check console.");
  }
});


