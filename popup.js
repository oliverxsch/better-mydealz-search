document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('timeRange');
  const checkbox = document.getElementById('excludeExpired');

  // Lade gespeicherte Einstellungen (Standard: Monat, nicht ausblenden)
  browser.storage.local.get({ timeFilter: 'qdr:m', excludeExpired: false }).then((result) => {
    select.value = result.timeFilter;
    checkbox.checked = result.excludeExpired;
  });

  // Speichere Änderungen sofort
  select.addEventListener('change', () => {
    browser.storage.local.set({ timeFilter: select.value });
  });

  checkbox.addEventListener('change', () => {
    browser.storage.local.set({ excludeExpired: checkbox.checked });
  });
});