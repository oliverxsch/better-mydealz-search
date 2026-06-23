# Better Mydealz Search

Eine leichtgewichtige Firefox-Erweiterung, die die oft ungenaue native Mydealz-Suche durch eine präzise **Google Site-Search** ersetzt. 

Anstatt sich durch irrelevante oder uralte Ergebnisse zu wühlen, leitet dieses Add-on deine Suchanfrage auf Mydealz automatisch an Google weiter – gefiltert auf die letzten Wochen/Monate und strikt nach Veröffentlichungsdatum sortiert.

## ✨ Features
* **Automatische Umleitung:** Tippe ganz normal in die Mydealz-Suchleiste, die Erweiterung erledigt den Rest.
* **Zeitfilter:** Wähle über das Erweiterungs-Icon (Popup), ob du Deals der letzten Woche, des letzten Monats oder des letzten Jahres sehen willst.
* **Abgelaufene Deals ausblenden:** Ein einfacher Schalter im Popup entfernt alle als "abgelaufen" markierten Deals aus den Google-Ergebnissen.
* **Dark Mode:** Das Einstellungs-Popup passt sich automatisch dem Theme deines Browsers an.

---

## 💻 Installation (Desktop / PC)

Da die Erweiterung (noch) nicht im offiziellen Mozilla Add-on Store ist, kannst du sie als temporäres Add-on laden:

1. Lade dir dieses Repository als `.zip`-Datei herunter (Grüner Button `Code` -> `Download ZIP`) und entpacke sie.
2. Öffne Firefox und tippe in die Adressleiste: `about:debugging`
3. Klicke links auf **Dieser Firefox**.
4. Klicke auf den Button **Temporäres Add-on laden...**.
5. Wähle die `manifest.json` Datei aus dem entpackten Ordner aus.
6. Fertig! Pinne dir das Icon der Erweiterung oben in die Leiste, um die Einstellungen aufzurufen.

---

## 📱 Installation (Android via Firefox Nightly)

Um eigene, unsignierte Erweiterungen auf dem Smartphone zu installieren, benötigst du die **Firefox Nightly** App aus dem Google Play Store.

### Schritt 1: Installationsdatei (.xpi) erstellen
1. Lade dir dieses Repository als `.zip`-Datei herunter (Grüner Button `Code` -> `Download ZIP`).
2. Benenne die Endung der Datei von `.zip` in **`.xpi`** um (z. B. `wetter-mydeal.xpi`).
3. Kopiere diese Datei auf dein Android-Smartphone.

### Schritt 2: Signatur-Zwang in Nightly deaktivieren
1. Öffne Firefox Nightly auf dem Smartphone.
2. Tippe in die Adressleiste `about:config` ein und drücke Enter.
3. Suche oben rechts nach `xpinstall.signatures.required`.
4. Stelle den Wert durch Antippen von `true` auf **`false`** um.
5. Schließe die Firefox Nightly App einmal komplett.

### Schritt 3: Erweiterung installieren
1. Öffne Firefox Nightly, tippe unten rechts auf die drei Punkte und gehe zu **Einstellungen**.
2. Scrolle ganz nach unten und tippe auf **Über Firefox Nightly**.
3. Tippe **5- bis 7-mal schnell hintereinander** auf das Firefox-Logo oben, bis die Meldung "Debug-Menü aktiviert" erscheint.
4. Gehe einen Schritt zurück in die Einstellungen.
5. Wähle den nun neuen Menüpunkt **Erweiterung aus Datei installieren**.
6. Wähle deine `wetter-mydeal.xpi` vom Handyspeicher aus.
7. Das Einstellungsmenü der Erweiterung findest du nun ganz normal im Browser-Menü unter dem Punkt "Erweiterungen".
