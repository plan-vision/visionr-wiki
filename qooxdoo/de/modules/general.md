<!-- TITLE: Alte Oberflächen (bis einschl. Version 6) für normale Benutzer -->
<!-- SUBTITLE: allgemeines Benutzerhandbuch für Qooxdoo Oberflächen - Alte Oberflächen (bis einschl. Version 6) -->

Deutsch | [English](/qooxdoo/en/modules/general)
*Sie sind hier: [Home](/home) > [Benutzerhandbuch](/de/user-guide) > Alte Oberflächen (bis einschl. Version 6)

# Beschreibung

Diese Dokumentation bezieht sich auf die allgemeinen Objekte, Funktionen und Operationen in dem System VisionR. Alle Module sind identisch aufgebaut und bieten außer den modulspezifischen Objekten und Funktionen auch eine Menge von Funktionalitäten, die von allen Modulen benutzt werden. Beispiele für solche Objekte und Funktionalitäten sind:

•	Dokumentenmanagement - die Verwaltung der auf dem Server abgelegten Dokumente / Dateien etc. erfolgt in dem Dokumentenmanagement, das von allen Modulen erreichbar ist.

•	Berichte - Berichte, Summen etc. sind allgemein für alle Module gültig 

•	Geplante Tasks, Druckvorlagen, Export, Import etc.

Alle VisionR Module, mit Ausnahme des Grafik-Moduls, sind identisch aufgebaut. Die allgemein gültigen Funktionen finden Sie in der Funktionstaste der Applikationsmaske.


## Übersicht


Das VisionR System ist webbasierend. Alle Module können über die Index-Seite abgerufen werden. Starten Sie Ihren Webbrowser und öffnen Sie die Index-Seite. Beispiel:
http://VISIONRSERVER:PORT/index.vsp.

Die Index-Seite ist auf Abbildung 1 dargestellt.

Auf der Index-Seite werden alle vorhandenen Module angezeigt. Zusätzliche Module können nachträglich erworben werden. Mit Klick auf das Modul wird die Applikationsmaske des Moduls geöffnet. Die Applikationsmasken aller alphanummerischen Module sind identisch aufgebaut. Der Aufbau wird nun beschrieben.

![Qooxdoo Index Seite](/uploads/v6/de-allgemein/vr6-index-site.jpg "v6 Index Seite") 

## Applikationsmaske


Die Gleichheit der Applikationsmasken für alle alphanumerischen Module ermöglicht eine einheitliche und intuitive Bedienung.

 
![Qooxdoo Applikationsmaske Übersicht](/uploads/v6/de-allgemein/vr6-applikationsmaske-uebersicht.jpg "v6 Applikationsmaske Übersicht") 


Mit dem Öffnen eines Moduls (z.B. „Wartung“) wird die Applikationsmaske mit einigen Statistiken aufgemacht. Die Abbildung 2 zeigt die geöffnete Applikationsmaske mit Grafiken zur „Anzahl Objekte“ und „eingefügten Objekten - 2 Wochen“. Den Zeitraum können Sie über der Grafik mit Klick auf den Pfeil verändern.

Die links dargestellten Buttons sind die Objekte, die für das Modul relevant sind. Mit Klick auf einem dieser Buttons wird die jeweilige Objektgruppe aufgemacht und die Applikationsmaske sieht aus, wie auf Abbildung 3 dargestellt. 
Dieser grundsätzliche Aufbau ist bei allen Modulen gleich. Sie können daher diese Dokumentation zur Erklärung nutzen, auch wenn Sie das Modul nicht besitzen. Die Applikationsmaske wird in einige Bereiche unterteilt. Die einzelnen Bereiche sind im Anschluss näher beschrieben.

In diesem Beispiel ist das Modul Wartung geöffnet und die Objektgruppe Anlagen ausgewählt. Wir haben auf den Button Anlagen ganz oben in dem Navigationsbereich geklickt, um die Objekte abzurufen.


## Aufbau


Der Aufbau der Applikationsmaske wird auf Abbildung 3 gezeigt. Wir haben die Applikationsmaske in 4 Bereichen unterteilt. Diese Bereiche stellen verschiedene Aspekte der VisionR-Logik dar.

Wir werden die Bereiche und die beinhalteten Komponenten im nächsten Kapitel im Detail betrachten. Die Bereiche sind für alle Module gleich definiert, wobei die Daten aus dem jeweiligen Modul angezeigt werden. 

 ![Qooxdoo Applikationsmaske Funktionsbereiche](/uploads/v6/de-allgemein/vr6-applikationsmaske-funktionsbereiche.jpg "v6 Applikationsmaske Funktionsbereiche") 

> **Bemerkung:** Einige Ikonen aus der Funktionsleiste sind modulspezifisch oder beziehen sich auf mehrere Module und werden nur in der Leiste der entsprechenden Module erscheinen. Diese spezifischen Funktionen werden in dem jeweiligen Handbuch des Moduls beschrieben.

Die Bereiche werden nun kurz beschrieben: 

•	Navigation / Objekte - Hier werden die Modulobjekte aufgelistet. Mit Klick auf einem Button aus diesem Bereich werden die Objekte in der Tabelle angezeigt und stehen zur Bearbeitung zur Verfügung.

•	Baumstruktur / Filter - In der Baumstruktur wird die hierarchische Struktur des Moduls angezeigt. Sie können in dieser Struktur die Objekte aus jeder Ebene aufrufen und mehrere Ebenen kombinieren. Daneben gibt es Filter, mit denen sie Daten (z.B. nach Standort / Gebäude / Stock / Raum / etc.) gefiltert darstellen können. Diese Struktur hat eine eigene Funktionsleiste mit spezifischen Funktionen.

•	Tabelle - In der Tabelle werden die Daten angezeigt und bearbeitet. Jede Zeile entspricht einem Objekt. Die Bearbeitung erfolgt direkt in der Tabelle oder in dem Formularfenster. Dieses Formularfenster wird angezeigt, wenn Sie ein Objekt anklicken. Sie können einzelne oder mehrere Objekte bearbeiten.

•	Leiste - In dieser Leiste sind die Funktionen, die auf die Objekte anzuwenden sind, sowie auch die Systemfunktionen und Systemmodule.
 
