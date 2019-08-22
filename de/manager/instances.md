<!-- TITLE: Instanzen -->
<!-- SUBTITLE: Verwaltung von mehreren Instanzen im VisionR Manager -->

# Neue Instanz anlegen
# Einstellungen
Die Einstellungen einer Instanz rufen Sie auf, wenn Sie im VisionR Manager die Instanz im linken Bereich markieren und anschließend den Reiter `CONFIG` anklicken.
Die Instanz-Einstellungen werden im `JSON`-Format bearbeitet und gespeichert.

> Die Einstellungen werden am Server im Instanz-Ordner unter `[VisionR-Installation]\apps\[Projektname]\etc\managed.json` gespeichert.

Hier ein Beispiel für Instanz-Einstellungen im `JSON`-Format:

```json
{
		"code": "6_FM",
		"path": "C:\\Plan-Vision\\VisionRServer6\\apps\\FM",
		"autostart": true,
		"server": {
				"memory": "2000",
				"mode": "production",
				"externalAddress": "http://127.0.0.1:8585",
				"https": {
						"enabled": false
				},
				"host": "127.0.0.1",
				"ports": {
						"http": 8585,
						"https": 8449
				},
				"registration": {
						"enabled": true
				},
				"webSocketProxyPort": 7778,
				"chromeDebuggerProxyPort": 7777
		},
		"additional": {
        "login.ldap.active": false,
        "core.import.languages": "en-US,de-DE,hr-HR,en-GB",
        "web.registration.allow": false,
        "office.disable_powershell" : false
    },
    "preload": {
        "disabled": false
    }
}
```

# Konsole
## Eingabe-Bereich
## Log-Bereich
# Starten
# Stoppen
# Import
# Update
# Backup
# CMD
## SHELL