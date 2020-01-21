<!-- TITLE: Administratorenhandbuch -->
<!-- SUBTITLE: Administrative Aufgaben im VisionR System -->

Deutsch | [English](/en/admin-guide)
*Sie sind hier: [Home](/home) > Administratorenhandbuch*
# Installation
## Installtion Datenbank
## Installation VisionR Server ab v. 7x 

> **Bemerkung**: Die folgende Anleitung bezieht sich auf eine komplett neue Installation von VisionR Server 7x. Falls Sie Migration von einer älteren Version auf v. 7x. durchführen möchten, schauen Sie in dem Abschnitt `Migration`. 

Stellen Sie sicher, dass Sie administrative Rechte haben, bevor Sie die Installationsdatei ausführen. Am besten klicken Sie auf die Datei mit der rechten Maustaste und führen Sie sie als "Administrator" aus.

## Migration VisionR Server auf v. 7x

> **Bemerkung**: Falls Sie eine Migration durchführen möchten, müssen Sie auf jeden Fall vor der Installation der Version 7x oder nach der Instalaltion und vor dem ersten Start die alte Version von dem VisionR Server entweder löschen oder umbenennen / dekativieren. Falls Sie sie vor der Installation machen, vergessen Sie nicht das Unterverzeichnis `Aps` zu sichern. Da sind die Projektdaten!!!

Die Schritte, die Sie folgen können:

1. Deaktivieren Sie den alten Dienst - öffnen Sie die Windows Dienste (Services) und deaktivieren Sie den Dienst `VisionR Server Manager 6`. 
![v7 Installation VR Migration 1](/uploads/de-administration/de-installation/v7-Installation_VR_Migration_1.png "v7 Installation VR Migration 1")
![v7 Installation VR Migration 2](/uploads/de-administration/de-installation/v7-Installation_VR_Migration_2.png "v7 Installation VR Migration 2")

Anschließend auf `Übernehmen` klicken. Der Dienst ist somit deaktiviert. 

2. Erstellen Sie einen neuen Ordner für die Installation der Version 7. **Beispiel** - wir erstellen ein neues Verzeichnis auf der gleichen Festplatte, wo die Installation von v.6x war. Die alte Installation behalten wir noch bis wir nicht alles zum Laufen gebracht haben. 
![v7 Installation VR Migration 3](/uploads/de-administration/installation/v7-Installation_VR_Migration_3.png "v7 Installation VR Migration 3")

3. Dann gehen Sie in dem Ordner `VisionRServer6`, falls Sie die Version 6 hatten. Wählen Sie das Verzeichnis `Aps` aus und kopieren Sie dieses in dem neu erstellten Ordner für die Version 7. 
![v7 Installation VR Migration 4](/uploads/de-administration/de-installation/v7-Installation_VR_Migration_4.png "v7 Installation VR Migration 4")
Fügen Sie die Daten in dem neuen Ordner.
![v7 Installation VR Migration 5](/uploads/de-administration/de-installation/v7-Installation_VR_Migration_5.png "v7 Installation VR Migration 5")

4. Sichern Sie, dass LibreOffice keine laufende Instanz hat. Öffnen Sie den Task-Manager und schauen Sie nach dem Prozess `soffice` und stoppen Sie diese Prozesse.
![v7 Installation VR Migration 6](/uploads/de-administration/de-installation/v7-Installation_VR_Migration_6.png "v7 Installation VR Migration 6")

5. Benennen Sie den Ordner der alten Version um, damit keine Komponente aus der alten Version mehr ausführbar sind. 
**Bemerkung**: Alternativ können Sie die alte Installation löschen, wenn Sie sicher sind, dass Sie die alle Daten gesichert haben. Falls Sie nicht sicher sind, behalten Sie die alte Installation mit umbenanntem Ordner bis Sie die Migration erfolgreich abschließen.  
![v7 Installation VR Migration 7](/uploads/de-administration/de-installation/v7-Installation_VR_Migration_7.png "v7 Installation VR Migration 7")

6. Gehen Sie fort mir der Installation, wie in dem Abschnitt `Installation VisionR Server ab v. 7x` beschrieben ist. 

7. Falls die Installtion erfolgreich war und Sie den Server gestartet haben, können Sie die alte Version sichern oder ggf. löschen. 

## Einspielen von Projektdaten
# Updates
## Update vom Applikationsserver
### Dienst und ggf. LibreOffice stoppen
Bevor Sie die neue Applikation aktualisieren, müssen Sie den VisionR Manager 6 Dienst stoppen und am besten auch den LibreOffice-Prozess beenden, damit die Daten überschreiben werden. Sonst wird der Ordner blockiert und die Installation wird unterbrochen. 
1. Drucken Sie die Windows-Taste und schreiben Sie "Dienste" / "Services". Finden Sie den VisionR Manager 6 Dienst und beenden ihn.

![2019 09 04 12 30 48 Visionrdienstbeenden](/uploads/de-administration/2019-09-04-12-30-48-visionrdienstbeenden.png "2019 09 04 12 30 48 Visionrdienstbeenden")

2. Finden Sie In dem Task-Manager den LibreOffice-Prozess und beenden ihn. Falls Sie in der Registerkarte "Details" gehen, müssen Sie den Prozess soffice.bin / soffice.exe beenden. 

![2019 09 04 13 07 47 Libreoffice Beenden](/uploads/de-administration/2019-09-04-13-07-47-libreoffice-beenden.png "2019 09 04 13 07 47 Libreoffice Beenden")

### Update von VisionR Server inkl. Manager
Nachdem den VisionR Manager Dienst gestoppt ist und der LibreOffice-Prozess beendet ist, installieren Sie die beigelieferte Installationsdatei als Administrator. Die Datei hat folgendes Format ***VisionR-Server-Setup-V.v.vvv-DatumUhrzeit.exe***. 
Die Datein werden mit den neueren überschrieben und Sie können den Manager-Dienst wieder starten. 
Das Update ist noch nicht fertig. 

### ZIP-Datei mit Projektdaten einspielen
Nachdem der Server und der Manager aktualiasiert sind, können Sie die Kundendatei hochladen und das Kundensystem aktualisieren. 
Öffnen Sie den Server - http://localhost:8282 (Standardmäßig) und stoppen Sie die Serverinstanz mit dem Button **KILL**. Sie muss gestoppt werden, damit die kundenspezifische ZIP-Datei hochgeladen wird. 
Klicken Sie auf **UPDATE** und laden Sie die ZIP-Datei hoch. 

![2019 09 04 13 07 47 Zip Datei Hochladen](/uploads/de-administration/2019-09-04-13-07-47-zip-datei-hochladen.png "2019 09 04 13 07 47 Zip Datei Hochladen")

Nachdem die Datei komplett hochgeladen ist, muss der Importvorgang gestartet werden. 

### Datenbank-Update mit `import full`
Wenn die ZIP-Datei hochgeladen ist, starten Sie die Serverinstanz mit dem Button **RUN**. Warten Sie bis der Server erfolgreich gestartet ist und klicken Sie auf dem Button **IMPORT** und als Option geben Sie ***full***

*Bemerkung*: Dieser Vorgang kann mehr als 30 Minuten dauern. Sie werden benachrichtigt, wenn der Importvorgang abgeschlossen ist. 

## Update von PostgreSQL
Bevor Sie die Datenbank aktualisieren, wäre es sinnvoll eine Sicherung zu machen. Die Sicherung können Sie mit dem VisionR Manager, mit dem Tool pgAdmin 4, oder mit dem Befehl **pg_dump dbname > outfile** machen. 
Empfohlen wird die Sicherung über den VisionR Manager. 
Öffnen Sie die Manager-Seite - http://localhost:8282 (Standardmäßig) und wählen Sie die Serverinstanz aus der Liste links. Dann Klicken Sie auf den Button **BACKUP** und aus den angezeigten Optionen wählen Sie **CLONE**. 
Mögliche Backup-Optionen:

*	PROJ – Sicherung nur von dem Projekt
*	DEPS – Nur die Abhängigkeiten werden gesichert
*	FULL – Kombination aus PROJ und DEPS
*	DB – Sicherung der Datenbank
*	UPLOAD – Sicherung der hochgeladenen Dokumente / Dateien
*	CLONE – Sicherung vom Projekt, Abhängigkeiten, Datenbank und Hochgeladene Daten (PROJ + DEPS +DB + UPLOAD) 
*	INSTALL – alle zusammen (FULL als Kombination wird nicht mitgesichert)
*	SERVER – nur der Server wird gesichert. 

Warten Sie bis die Sicherung erstellt wird. 
Damit die Datenbank aktualisiert wird, müssen Sie den PostgreSQL-Dienst zuerst stoppen. Dafür öffnen Sie die Dienste und finden Sie den postgreSQL Eintrag und beenden Sie diesen Dienst. 

![2019 09 04 13 07 47 Zip Postgresql Dienst Beenden](/uploads/de-administration/2019-09-04-13-07-47-zip-postgresql-dienst-beenden.png "2019 09 04 13 07 47 Zip Postgresql Dienst Beenden")

Dann installieren Sie die neue PostgreSQL-Datei, die Sie heruntergeladen haben oder von uns bekommen haben. 
Nach der Installation überprüfen Sie, ob die Rolle "VISIONR" erstellt ist, ob die geometrische Erweiterung PostGIS richtig eingelstellt ist und ob die Datenbank diese Erweiterung als Vorlage hat. Für mehrere Informationen bitte in der Installationsanleitung nachschauen. 
Sie können jetzt die Datenbank wiederherstellen. Sie haben wieder die drei Möglichkeiten - über den Manager, mit dem Tool pgAdmin 4 oder mit dem Befehl **pg_restore**. 
Die Wiederherstellung der Datenbank ist auch in der Installationsanleitung beschrieben. 

Wiederherstellung über den Manager - öffnen Sie die Manager-Seite - http://localhost:8282 (Standardmäßig) und stoppen Sie die Serverinstanz mit dem Befehl **KILL**. Wenn der Server gestoppt ist, klicken Sie auf den Button **UPDATE**. Wählen Sie die Datei aus und laden sie hoch. Der Server wird überprüfen, ob die Datei auch / nur Datenbanksicherung beinhaltet und wird Ihnen danach fragen, ob Sie die Datenbank wiederherstellen möchten. Geben Sie **YES**. 

## Kommandos im Manager
* Sequences angleichen - `nach Version 6.9.612`


```java
.import core.database.fix_sequences -v -t 7200
```


* "Forms" zurücksetzen nach Import - `nach Version 6.9.230`

```java
require("dev/reset")
```

* Import zeichnungsvorlagen manuell - `nach Version 6.9.218`

```java
.import spaces.after.graphics.TEMPLATE_FLOOR_PLAN_EN_V2 data -k -z
.import spaces.after.graphics.TEMPLATE_FLOOR_PLAN_DE_V2 data -k -z
```

* Einstellungen für LibreOffice als `JSON` in `CONFIG`, wenn der Dienst nicht gestartet werden kann - `nach Version 6.9.206`

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

# Benutzerverwaltung
* [Benutzerverwaltung](/de/admin-guide/user-management)