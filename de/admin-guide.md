<!-- TITLE: Administratorenhandbuch -->
<!-- SUBTITLE: Administrative Aufgaben im VisionR System -->

Deutsch | [English](/en/admin-guide)
*Sie sind hier: [Home](/home) > Administratorenhandbuch*
# Installation
## Installtion Datenbank
## Installation VisionR Server
## Einspielen von Projektdaten
# Updates
## Update vom Applikationsserver
### Dienst und ggf. LibreOffice stoppen
### Update von VisionR Server inkl. Manager
### ZIP-Datei mit Projektdaten einspielen
### Datenbank-Update mit `import full`
## Update von PostgreSQL
## Kommandos im Manager
* Sequences angleichen - `nach Version 6.9.611`


```java
.import core.fix_sequences -v -t 7200
```


* "Forms" zurücksetzen nach Import - nach `Version 6.9.230`

```java
require("dev/reset")
```

* Import zeichnungsvorlagen manuell - nach `Version 6.9.218`

```java
.import spaces.after.graphics.TEMPLATE_FLOOR_PLAN_EN_V2 data -k -z
.import spaces.after.graphics.TEMPLATE_FLOOR_PLAN_DE_V2 data -k -z
```

* Einstellungen für LibreOffice als `JSON` in `CONFIG`, wenn der Dienst nicht gestartet werden kann - nach `Version 6.9.206`

```json
{ additional:
	{"office.disable_powershell" : true}
}
```

* Ausführen nach vollständigem Import mit `import full` - `nach Version 6.9.132`

```java
.import share/documents/script/misc/full-tables-fix-datetime.vsc -v -t 14400
```

* Ausführen nach vollständigem Import - `nach Version 6.0.0`

```java
.import share/documents/script/misc/full-tables-fix.vsc -v -t 14400
```

*  SQL in PostgresqL ausführen vor dem Import - `vor Version 6.x`

```sql
CREATE EXTENSION IF NOT EXISTS pg_trgm;
```

# Sicherungen
Eine Sicherung von VisionR muss unter Windows als geplannter Task angelegt werden, der ein Skript in einer `BAT`-Datei ausführt.  Es gibt zwei Möglichkeiten die Projektrelevanten daten zu sichern:
## Sicherung durch mit "vrs backup"
## Sicherung der Datenbank und der Projekt-Dateien
### Datenbank-Sicherung
Für die Sicherung der Datenbank muss eine `BAT`-Datei mit folgendem Inhalt angelegt werden, die von einem geplanten Task regelmäßig ausgeführt wird (z.B. täglich, wöchentlich oder monatlich).

```batchfile
set hour=%time:~0,2%
if "%hour:~0,1%" == " " set hour=0%hour:~1,1%
echo hour=%hour%
set min=%time:~3,2%
if "%min:~0,1%" == " " set min=0%min:~1,1%
echo min=%min%
set secs=%time:~6,2%
if "%secs:~0,1%" == " " set secs=0%secs:~1,1%
echo secs=%secs%

set year=%date:~-4%
echo year=%year%
set month=%date:~3,2%
if "%month:~0,1%" == " " set month=0%month:~1,1%
echo month=%month%
set day=%date:~0,2%
if "%day:~0,1%" == " " set day=0%day:~1,1%
echo day=%day%

set datetimef=%year%%month%%day%_%hour%%min%%secs%

echo datetimef=%datetimef%

SET PGDUMP=D:\Plan-Vision\PostgreSQL\10\bin\pg_dump.exe
SET DBNAME=VISIONR_6_FM
SET DBUSER=VISIONR
SET PGPASSWORD=plan4vision
SET SCHEMA1=visionr
SET SCHEMA2=visionrg
SET SCHEMA3=visionre
SET DUMP=D:\Backup\%DBNAME%-full-%datetimef%.backup
%PGDUMP% -F c -v -U %DBUSER% -n %SCHEMA1% -n %SCHEMA2% -n %SCHEMA3% -f %DUMP% %DBNAME%
```

Bei täglicher Ausführung des Datenbank-Backups kann die Anzahl der letzten Sicherungen eingeschränkt werden. Dazu kann folgendes Skript als Grundlage dienen:

```batchfile
@echo off
set hour=%time:~0,2%
if "%hour:~0,1%" == " " set hour=0%hour:~1,1%
echo hour=%hour%
set min=%time:~3,2%
if "%min:~0,1%" == " " set min=0%min:~1,1%
echo min=%min%
set secs=%time:~6,2%
if "%secs:~0,1%" == " " set secs=0%secs:~1,1%
echo secs=%secs%

set year=%date:~-4%
echo year=%year%
set month=%date:~3,2%
if "%month:~0,1%" == " " set month=0%month:~1,1%
echo month=%month%
set day=%date:~0,2%
if "%day:~0,1%" == " " set day=0%day:~1,1%
echo day=%day%

set datetimef=%year%%month%%day%_%hour%%min%%secs%

echo datetimef=%datetimef%

SET PGDUMP=D:\Plan-Vision\PostgreSQL\10\bin\pg_dump.exe
SET DBNAME=VISIONR_6_FM
SET DBUSER=VISIONR
SET PGPASSWORD=plan4vision
SET SCHEMA1=visionr
SET SCHEMA2=visionrg
SET SCHEMA3=visionre
SET DUMP=D:\Backup\\%DBNAME%-full-daily.backup

del /f %DUMP%.14
move /y %DUMP%.13 %DUMP%.14
del /f %DUMP%.13
move /y %DUMP%.12 %DUMP%.13
del /f %DUMP%.12
move /y %DUMP%.11 %DUMP%.12
del /f %DUMP%.11
move /y %DUMP%.10 %DUMP%.11
del /f %DUMP%.10
move /y %DUMP%.09 %DUMP%.10
del /f %DUMP%.09
move /y %DUMP%.08 %DUMP%.09
del /f %DUMP%.08
move /y %DUMP%.07 %DUMP%.08
del /f %DUMP%.07
move /y %DUMP%.06 %DUMP%.07
del /f %DUMP%.06
move /y %DUMP%.05 %DUMP%.06
del /f %DUMP%.05
move /y %DUMP%.04 %DUMP%.05
del /f %DUMP%.04
move /y %DUMP%.03 %DUMP%.04
del /f %DUMP%.03
move /y %DUMP%.02 %DUMP%.03
del /f %DUMP%.02
move /y %DUMP%.01 %DUMP%.02
del /f %DUMP%.01
move /y %DUMP% %DUMP%.01

%PGDUMP% -F c -v -U %DBUSER% -n %SCHEMA1% -n %SCHEMA2% -n %SCHEMA3% -f %DUMP% %DBNAME%
```

### Datei-Sicherung
Die Dateien (hochgeladene Dokumente oder spezifische Kundenskripte müssen vom Verzeichnis `[VisionR Installation]\apps\[Projektordner]\*` gesichert werden.

# Server umziehen
# Projekt kopieren
# VisionR Manager
## Den Manager neu starten
Als Administrator können Sie den VisionR Manager Dienst neu starten.
Mehr erfahren Sie [hier](/de/manager/restart).
## Update VisionR Server
Sie können den Version von VisionR Server über den VisionR Manager ohne direkten Dateizugriff aktualisieren.
Mehr erfahren Sie [hier](/de/manager/update).
## Instanzen
Mit VisionR Manager als Hauptdienst können Sie mehrere Projekt-Instanzen verwalten (einrichten, stoppen, starten), die eigene jeweils eine eigene Datenbank besitzen.
Über anlegen neuer Instanzen, starten, stoppen usw. erfahren Sie mehr [hier](/de/manager/instances).
# Kommandos in CMD
## Administration mit "vrs"
## Verbindung zum Server mit "vr"
# VisionR Skript ausführen
VisionR Skripte im Format VSC oder VScript erlauben die Ausführung von verschiedenen administrativen Aufgaben: Datenbankänderungen, E-Mail-Zugriff, Berichte usw. 
Sie können auf einem separaten Link (normalerweise http://serveradresse/vsc.vsp) Skripte zu Testzwecken ausführen und parallel die Ergebnisse im Instanz-Log betrachten.
Mehr erfahren Sie [hier](/de-DE/admin-guide/vsc).
# Schnittstellen
## LDAP
* [LDAP Schnittstellen](/de/admin-guide/interfaces/ldap)
## Datenbank über JDBC
* [Datenbankzugriff](/de/admin-guide/interfaces/database) - PostgreSQL, ORACLE, MSSQL Server usw.
## E-Mail
* [Termine synchronisieren](/de/admin-guide/interfaces/email/ics)
## Dateien
* [CSV](/de/admin-guide/interfaces/files/csv)
* [Excel](/de/admin-guide/interfaces/files/excel)
## SAP
* [SAP Schnittstelle](/de/admin-guide/interfaces/sap)