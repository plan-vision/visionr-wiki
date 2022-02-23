<div style="margin:auto;text-align:center;width:100%;height:900px;color:#AAAAAA">
	<div style="height:100px"><img style="width:250px" src="_images/_title/plan-vision-logo-big.jpg"/></div>
    <div style="height:150px"></div>
	<div style="font-size:35px">Benutzerhandbuch</div>
	<div style="font-size:45px;color:#777777">Schließmanagement</div>
    <div style="font-size:35px">Browser / App</div>
    <div style="height:20px"></div>
    <div style="height:160px"><img style="width:160px" src="_images/_title/keys-app-logo.png"/></div>
    <div style="height:20px"></div>
    <div style="font-size:25px">Windows / macOS / Linux / iOS / Android</div>
    <div style="font-size:25px">ab Version 8.0</div>
    <div style="height:200px"></div>
    <div style="color:#BBBBBB">
        <div style="font-size:14px">Erstellt von Plan-Vision GmbH</div>
    	<div style="font-size:14px">Version 1.2 &bull; Stand 23.02.2022</div>
    	<div style="font-size:14px">Plan-Vision GmbH &bull; E-Mail: support@plan-vision.com &bull; Web: https://plan-vision.com</div>
    </div>
</div>






<div style="page-break-after: always; break-after: page;"></div>

# Inhaltsverzeichnis

[toc]

# Version

**Aktuelle  Version:** 1.2

**Stand:** 23.02.2022

**Verfasser:** Plan-Vision GmbH

# Schließmanagement - App

## Allgemein

Das vorliegende Dokument beschreibt die Nutzung vom Modul Schließmanagement  für normale Benutzer auf einem Desktop-Computer (PC, Laptop oder Mac). Die Nutzung auf einem mobilen Gerät (Tablet PC, Smartphone)  ist auch möglich. Mobile Geräte können speziell für digitale Unterschriften mit dem Finger oder einem digitalen Stift bei Schlüsselausgaben und -Rücknahmen eingesetzt werden. Die Dokumentation für die App "Schlüssel" ist mit Fokus auf die dynamischen Veränderungen erstellt worden. Die Verwaltung der Stammdaten (neue Schließanlagen, neue Aufbewahrungsorte, grafische Verknüpfungen usw.) ist im Abschnitt [Admin Schließmanagement](../admin/keys) beschrieben.

## Beschreibung

Das VisionR-Modul Schließmanagement oder "Schlüssel" wird für die Verwaltung von den Schließungen in Gebäuden oder für Fahrzeuge eigesetzt. Es wird sowohl für die Verwaltung von Stammdaten wie Schließanlagen, Zylinder, Schlüssel, Karten, Schlüsselbunde, Aufbewahrungsorte usw., als auch als Tool für die Unterstützung dynamischer Veränderungen wie Schlüsselausgaben- und -Rücknahmen, Ein- und Ausbau von Zylindern, Bestellungen von neuen Schlüsseln und Zylindern. In einer Schließmatrix werden die Zuordnungen zwischen Zylinder und Schlüssel/Karten visualisiert. Digitale Unterschriften an einem mobilen Gerät sind möglich. Eingebaute Zylinder können per Mausklick oder Link im Web-CAD-Plan visualisiert werden. Die Daten im Modul Schließmanagement werden revisionssicher aufbewahrt. Jegliche Veränderungen, die den Status der Schlüssel/Karten und Zylinder betreffen, werden historisiert.

Features im Überblick:

* Schlüssel-, Karten- und Zylinder-**Detailinformationen** aufrufen
* Schlüssel oder Karten **ausgeben** und **zurücknehmen**
* **Zylinder-Einbau** und **-Ausbau** dokumentieren
* **Schlüsselprotokoll** mit Ausgaben und Rücknahmen aufrufen
* **Daten durchsuchen**, z. B. welche Schlüssel hat aktuell eine bestimmte Person
* **Datenauswertungen**, z. B. monatlicher Schlüsselbestand pro Gebäude
* **Grafische Visualisierung** von Schließkreisen oder verbauter Zylinder mit Matrix im Geschossplan

## Einstieg

Wenn Sie mobile VisionR App nutzen, werden Sie nach der Anmeldung automatisch auf die VisionR-Indexseite umgeleitet. Bei Nutzung des Browsers auf dem Desktopcomputer können die normalen Benutzer das Modul entweder über die Hauptadresse von VisionR auf der Registerkarte `Apps` *(siehe Bild 1)* oder direkt über den Link `https://[VisionR-Adresse]/forms#/main/keys` aufrufen.

![Index Seite](_images/keys/index.png)

*Bild 1: Einstieg über die VisionR-Indexseite*

## Administration

Administrative Aufgaben, wie z. B. Erstellen neuer Schließanlagen, Schlüssel- und Zylinderdefinitionen, Schließmatrix usw. sind im Abschnitt [Admin Schließmanagemen](../admin/keys) beschrieben.

# Übersicht

## Anfang

Bei Aufruf der App Schließmanagement wird automatisch die Liste mit Schlüsseln aufgemacht (siehe Bild 2).

![Index Seite](_images/keys/begin.png)

*Bild 2: Maske "Anfang"*

Im Datenbereich werden die Schlüssel standardmäßig eingefärbt nach Status angezeigt. Die aktuelle Hierarchie in der Baumansicht ist *Nach Gebäude*. Es werden sowohl Schlüssel als auch Karten angezeigt. In der mobilen Ansicht wird standardmäßig eine Liste , in der Desktopversion eine Tabellenansicht angezeigt.

> **Hinweis:** Bei Klick auf eine Liegenschaft oder ein Gebäude in der Baumansicht werden die Daten in der Tabelle automatisch gefiltert.

Nutzen Sie die Einträge im Hauptmenü, um andere Daten in der Tabelle anzeigen zu lassen.

## Bedienung allgemein

Der Button mit den drei Strichen ![Menü-Button](_images/common/button-menu-22.png)oben links öffnet das Hauptmenü. Das Menü ist auf mobilen Geräten aus Platzgründen automatisch versteckt. In der Desktopversion wird das Hauptmenü automatisch angezeigt. Abwechselndes Klicken auf den`Menü`-Button zeigt oder verbirgt das Menü, je nachdem welcher der aktuelle Status ist. Der `Menü`-Button ist auf allen Masken verfügbar. Durch Klick auf einen Menüeintrag in der Liste öffnen Sie die entsprechende Maske mit den in diesem Dokument beschriebenen Funktionalitäten. Der Name der aktiven Maske wird in orangener Farbe hervorgehoben.

![Zur Index](_images/keys/menu-off.png)

*Bild 3: Hauptmenü über die drei Striche neben dem Logo ein/aus* 

Ein Klick auf die Ikone ![Logo](_images/common/visionr-logo-22.png) neben den drei Strichen oben links führt zur VisionR-Indexseite. Wenn Sie das Modul Schließmanagement verlassen und zur Indexseite springen möchten, müssen Sie auf den Button mit dem Häkchen zur Bestätigung klicken (siehe Bild 3). Bei Abbrechen bleiben Sie auf der aktuellen Maske.

![Zur Index](_images/keys/go-to-index.png)

*Bild 4: Zur Indexseite zurückkehren* 

Bei Klick auf den `Home`-Button ganz unten links wird ein Menu mit den vorhandenen Apps angezeigt. Dieser Button ist nur in der Desktop App sichtbar. Mobil muss der Klick auf das Logo oben links verwendet werden. Bei Klick auf einen Menüeintrag werden Sie zur gewünschten App umgeleitet. Vorher muss das Verlassen der aktuellen App bestätigt werden (siehe Bild oben).

![Zur Index](_images/keys/home-menu.png)

*Bild 5: Eine andere App direkt aufrufen*

# Detailinformationen aufrufen

## Detailansicht

In der Tabelle können Sie mit Doppelklick auf eine Zeile die Detailinformationen zum angeklickten Datensatz in einem Popup anzeigen lassen. Alternativ können Sie einen Datensatz in der Tabelle oder Liste auswählen und auf die `Leertaste` auf der Tastatur drücken.

Sie Können auch mehrere Datensätze gleichzeitig markieren: entweder durch Rechteckauswahl in der Tabelle oder durch setzen der Häkchen am Beginn der jeder Zeile oder durch die Tastenkombination `Strg + A` (alles auswählen). Bei der Mehrfachauswahl können Sie die `Leertaste` zum Aufruf der Detailansicht nutzen. Alternativ gehen Sie auf den Button `Details` ![Button Details](_images/common/button-details-22.png) in der unteren rechten Ecke der Tabelle. Eine dritte Möglichkeit ist die Nutzung der Option `Details` im Datenkontextmenü, welches entweder mit Maus-Rechtsklick oder auf die drei Striche oben rechts unter der Personenikone geöffnet wird.

![Zur Index](_images/keys/key-details.png)

*Bild 6: Details-Ansicht eines Schlüssels mit Doppelklick auf die Zeile*

## Bearbeiten

Wenn Sie ein Datensatz mit Doppelklick oder über das Kontextmenü in der Details-Ansicht geöffnet haben, steht der Button `Bearbeiten` ![Button Details](_images/common/button-edit-text-22.png) zur Verfügung. Um den Datensatz im Bearbeitungsmodus zu öffnen können Sie entweder diesen Button nutzen oder in der Tabelle durch Aufruf des Kontextmenüs bei markiertem Datensatz auf den Eintrag `Bearbeiten` gehen. Das Kontextmenü ist immer entweder mit Rechtsklick oder auf die drei Striche unter der Personenikone erreichbar.

![Zur Index](_images/keys/key-edit.png)

*Bild 7: Bearbeitungsmodus eines Schlüssels*

## Admin-Modus

![Zur Index](_images/keys/key-admin-from-details.png)

*Bild 8: Admin-Modus über Kontextmenü in "Details" oder "Bearbeiten" öffnen*

![Zur Index](_images/keys/key-admin.png)

*Bild 9: Admin-Modus eines Schlüssels*

# Schlüssel/Karte ausgeben und zurücknehmen

## Ausgabe

Sie können eine Schlüssel ausgeben, nur wenn dieser den passenden Status hat. Bei aktuell vergebenen oder verlorenen/vernichteten Schlüsseln ist der Button für die Ausgabe nicht vorhanden.

Öffnen Sie auf einen Schlüssel mit dem Status *"im Depot"* (erkennbar an der grünen Einfärbung in der Tabelle oder Liste) mit Doppelkick. In der Details-Ansicht ist der Button `Ausgabe` sichtbar, falls Sie die notwendigen Zugriffsrechte für Schlüsselausgaben besitzen.

> **Hinweis:** Der Button `Ausgabe` ist auch im Bearbeitungsmodus verfügbar.

![Zur Index](_images/keys/issue-from-details.png)

*Bild 10: Schlüssel in der Details-Ansicht ausgeben*

Bei Klick auf den Button `Asgabe` wird ein Popup-Dialog mit Angaben zu beabsichtigten Schlüsselausgabe zu sehen. Foilgende Eingabefelder stehen zur Verfügung:

* **Person** (Pflichtfeld) Sie müssen die Person entweder durch Suchen im Dropdown-Feld oder durch Doppelklick in der erweiterten Auswahltabelle finden und auswählen.
* **Ausgabedatum** (Pflichtfeld) Hier wird automatisch das aktuelle Datum und die aktuelle Uhrzeit eingetragen. Die Eingabe können Sie bei Bedarf ändern.
* **Bemerkung Ausgabe** Das Feld kann für Notizen bei der Ausgabe genutzt werden.
* **Gewünschtes Rücknahmedatum** Dieses Feld müssen Sie mit Datum/Uhrzeit füllen, falls der Schlüssel nur temporär ausgegeben und zu einem fest definierten Zeitpunkt wieder zurückgenommen werden muss. Das Feld wird in wöchentlichen E-Mail-Benachrichtigungen für anstehende Schlüsselrücknahmen genutzt.
* **Unterschrift** Bei der Ausgabe können Sie den Schlüsselempfänger unterschreiben lassen, falls ein Tablet PC, Smartphone (oder ggf. Unterschriften-Pad) genutzt werden kann. Dazu gehen Sie auf den Pluszeichen mit dem Kreis und wählen Sie im Popup die Option `Unterschrift`, wenn Sie dort den Button `+ Hinzufügen` anklicken.
* **Sprache des Protokolls** und **Druckformat** werden für die Erstellung des Ausgabeprotokolls genutzt, welches am Ende des Vorgang automatisch generiert wird.

![Zur Index](_images/keys/issue-1.png)

*Bild 11: Person und ggf. Datum/Uhrzeit oder Notizen eingeben*

![Zur Index](_images/keys/issue-sign-1.png)

*Bild 12: Hochladen einer Unterschrift (1)*

![Zur Index](_images/keys/issue-sign-2.png)

*Bild 13: Hochladen einer Unterschrift (2)*

Nach Ausfüllen aller Eingabefelder und ggf. Hochladen der Unterschrift gehen Sie auf den Button `Ausführen` rechts unten im Popup-Dialog. Ein Ausgabeprotokoll wir automatisch generiert und kann heruntergeladen und bei Bedarf ausgedruckt und auf Papier unterschrieben werden.

![Zur Index](_images/keys/issue-protocol.png)

*Bild 14: Protocol zum `Herunterladen` nach Klick auf `Ausführen`*

## Rücknahme

Die Rücknahme eines Schlüssels erfolgt ähnlich wie die bereits beschriebene *Ausgabe*.

Sie können eine Schlüssel ausgeben, nur wenn dieser den passenden Status hat. Bei aktuell nicht vergebenen Schlüsseln ist der Button für die Rücknahme nicht vorhanden.

Öffnen Sie auf einen Schlüssel mit dem Status *"ausgegeben"* (erkennbar an der roten Einfärbung in der Tabelle oder Liste) mit Doppelkick. In der Details-Ansicht ist der Button `Rücknahme` sichtbar, falls Sie die notwendigen Zugriffsrechte für Schlüsselrücknahmen besitzen.

![Zur Index](../admin/_images/keys/return-from-details.png)

*Bild 15: Schlüssel in der Details-Ansicht zurücknehmen*