let currentTimeFilter = "qdr:m";
let excludeExpired = false;

// Initiale Einstellungen laden
browser.storage.local.get({ timeFilter: "qdr:m", excludeExpired: false }).then((result) => {
  currentTimeFilter = result.timeFilter;
  excludeExpired = result.excludeExpired;
});

// Bei Änderungen im Popup direkt aktualisieren
browser.storage.onChanged.addListener((changes, area) => {
  if (area === "local") {
    if (changes.timeFilter) currentTimeFilter = changes.timeFilter.newValue;
    if (changes.excludeExpired) excludeExpired = changes.excludeExpired.newValue;
  }
});

// Suchanfragen abfangen und umleiten
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    const query = url.searchParams.get("q");

    // Nur eingreifen, wenn es die Hauptsuche ist
    if (url.pathname === "/search" && query) {
      let queryString = `site:mydealz.de ${query}`;
      
      // Abgelaufene Deals per Google-Operator ausschließen
      if (excludeExpired) {
        queryString += " -abgelaufen";
      }
      
      // tbs Parameter setzen (Zeitfilter + Sortierung nach Datum: sbd:1)
      const timeAndSortFilters = `${currentTimeFilter},sbd:1`;
      const targetUrl = `https://www.google.com/search?q=${encodeURIComponent(queryString)}&tbs=${timeAndSortFilters}`;
      
      return { redirectUrl: targetUrl };
    }
  },
  { urls: ["*://*.mydealz.de/search*"] },
  ["blocking"]
);