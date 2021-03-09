<!-- TITLE: Sicherungen-->
<!-- SUBTITLE: Sicherungen der Datenbank und der Projektdateien im VisionR System -->

Deutsch | [English](/en/system-admin-guide/backup)
*Sie sind hier: [Home](/home) > [Administratorenhandbuch](/de/system-admin-guide) > Sicherungen*

# Sicherungen

Eine Sicherung von VisionR muss unter Windows als geplanter Task angelegt werden, der ein Skript in einer `BAT`-Datei ausführt.  Im folgenden sind drei separate Möglichkeiten zur Sicherung der projektrelevanten Daten beschrieben.

## Sicherung im VisionR Manager

Öffnen Sie den VisionR Manager in einm Browser Ihrer Wahl durch aufrufen des Links `http://localhost:8282`. Eine sichere Verbindung mit SelfSignet-Zertifikat ist normalerweise unter `https://localhost:8283` möglich.

>  **Hinweis:** Die Portangaben 8282 und 8283 sind die Standartwerte bei der Installation oder beim Aufruf des Kommandos `vrs setup manager` in der Windows "cmd"-Konsole. Falls abweichende Ports eingegeben wurden, müssen Sie die Einstellungen prüfen, um den richtigen Port für den Aufruf des VisionR Manages benutzen zu können. 

Wählen Sie eine Instanz im linken Bereich aus. Klicken Sie auf den Button `BACKUP`. Geben Sie z.B. `CLONE` als Option ein. Somit wird die Datenbank, als auch die Projektdateien einschließlich Upload-Verueichnis in eine ZIP-Datei gesichert, die am Ende des Sicherungsvorgangs gespeichert werden kann. Diese Datei kann für die komplette Wiederherstellung des Kundenprojektes genutzt werden.

## Sicherung mit "vrs backup"

Eine Siecherung kann in der "cmd"-Windows Konsole durchgefürt werden.

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
