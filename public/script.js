async function search() {
  const sector = document.getElementById("sector").value.trim();
  const country = document.getElementById("country").value.trim();
  const results = document.getElementById("results");

  if (!sector || !country) {
    results.innerHTML = "<p class='loading'>Enter both fields.</p>";
    return;
  }

  results.innerHTML = "<p class='loading'>Thinking…</p>";

  const res = await fetch("/api/investors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ sector, country })
  });

  const data = await res.json();

  results.innerHTML = data.investors.map(inv => `
    <div class="result-card">
      <div class="name">${inv.name}</div>
      <div class="reason">${inv.reason}</div>
    </div>
  `).join("");
}
