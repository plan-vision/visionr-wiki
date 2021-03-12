<!-- TITLE: VisionR Manager-->
<!-- SUBTITLE: Verwaltung von mehreren Instanzen im VisionR Manager -->

# Update / Upgrade

## PostgreSQL Datenbank

Bei Update/Upgrade der Datenbank auf eine neue Version, z. B. von 12 auf 13.2 müssen folgende Schritte befolgt werden

* Backup der Datenbank im pgAdmin 4, Format *".backup"* (z. B. *"VISIONR_7_KUNDE.backup"*)
* Deinstallation der alten PostgreSQL Datenbankversion. Dabei muss zuerst das dazugehörige PostGIS deinstalliert werden
* *ggf. Neustart von Windows - dieser Schritt kann übersprungen werden*
* Installation neue PostgreSQL Version von mitgelieferter *".exe"*-Datei *(z.B. "2. postgresql-13.2-1-windows-x64.exe")*. Einstellungen : Benutzer `postgresql`, Passwort `postgresql`, Pfad `[Laufwerk]\Plan-Vision\PostgreSQL}\13_2`
* Installation des PostGIS-Aufsatzes im gleichen Verzeichnis wie PostgreSQL mit dem gleichen Benutzer. Einstellungen: Template `template_postgis`, Pfad `[gleich wie oben]`, Benutzer `postgis`, Passwort `postgis`
* Die Dateien *"postgresql.conf"* und *"pg_hba.conf"* in das Verzeichnis `[Laufwerk]\Plan-Vision\PostgreSQL}\13_2` mit den mitgelieferten Dateien überschreiben. Vorher können die vorhandenen Dateien durch Umbenennen gesichert werden: *"postgresql.conf.ORIGINAL"* und *"pg_hba.conf.ORIGINAL"*
* Restart vom PostgreSQL Windows-Dienst im Dienste-Manager, damit die Einstellungen in den *".conf"*-Dateien übernommen werden
* Starten von pgAdmin 4 und Erstellung vom Benutzer `VISIONR`, Passwort `plan4vision`, Berechtigungen `alle`
* Für die Datenbank *"template_postgis"* den *"Query Tool"* starten und folgenden SQL-Befehl ausführen: `CREATE EXTENSION IF NOT EXISTS pg_trgm;`
* *"Query Tool"* schließen, mit der rechten Maustaste auf die Datenbank *"template_postgis"* den Befehl `Disconnect Database...` ausführen
* Erstellung einer Datenbank im pgAdmin (z.B. `VISIONR_8_KUNDE`). Einstellungen: Besitzer `VISIONR`, Template `template_postgis`, ggf. Extension per SQL `CREATE EXTENSION IF NOT EXISTS pg_trgm; `
* Datenbankwiederherstellung von der am Anfang erstellten *".backup"*-Datei  (z. B. *"VISIONR_7_KUNDE.backup"*). Die Wiederherstellung starten Sie mit Rechtsklick auf die neue Datenbank und `Restore...`
* Nach Installation des VisionR Servers (bei Update und bei Upgrade) müssen Sie in der *"cmd"*-Konsole folgenden Befehl ausführen: `vrs setup postgre`. bei Fehlermeldungen müssen die PostgreSQL Optionen in *"postgresql.conf"* mit Restart angepasst werden.

## VisionR Server

### Update

Nutzen Sie die gelieferte*".zip"*-Datei im VisionR Manager.

### Upgrade

Nutzen Sie die gelieferte *".exe"*-Datei und installieren Sie den VisionR Server neu. Am besten nutzen Sie den vorhandenen Verzeichnis und lassen die Inhalte dort durch den Installationsvorgang überschreiben.

> **Hinweis:** Wenn die PostgreSQL-Datenbank auf neue Version aktualisiert worden ist, müssen Sie den Befehl `vrs setup postgre` in der *"cmd"*-Konsole ausführen

## Projektverzeichnis

Nutzen Sie die mitgelieferte *".zip"*-Datei mit dem Kundenprojekt, um eine Projektaktualisierung im VisionR Manager für das jeweilige Projekt durchzuführen

## Update der Kundendatenbank

Im VisionR Manager müssen Sie das Projekt im linken Bereich markieren. Danach klicken Sie auf den Button `IMPORT`. Geben Sie `full` ein.

Beim Starten dieses Vorgangs wird die komplette Kundendatenbank durchgelaufen und aktualisiert. Der Vorgang kann mehrere Minuten, sogar bis 1 oder 2 Stunden dauern.

Der Vorgang ist erst abgeschlossen, wenn im oberen Bereich im VisionR Manager folgende Meldungen zu sehen sind:

```
Import MODULES finished! Only your VisionR DB has been updated...
Import MODULES finished! Only your VisionR DB has been updated...
Import FULL finished! Your VisionR system has been updated successfully...
```

Die Aktualisierung des VisionR Systems ist erst nach erscheinen der dritten Meldung vollständig.