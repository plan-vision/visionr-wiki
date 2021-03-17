<!-- TITLE: Web-CAD -->
<!-- SUBTITLE: Web-CAD (Grafik) ist ein VisionR Modul für Bearbeitung von CAD-Plänen -->

Deutsch | [English](../../../en/modules/graphics) | *Sie sind hier: [Home](../../../home) > [Benutzerhandbuch](../user-guide) > Web-CAD (Grafik)*

# Übersicht
Öffnen Sie die das Web-CAD (Grafik) Modul.

![Indexseite](_images/graphics/index.png)

Aus dem Baum wählen Sie den Standort / Gebäude aus und aus der Übersicht wählen Sie die gewünschte Zeichnung aus. Mit Doppelklick machen Sie die Zeichnung auf. 

![2019 10 08 12 04 12 Window](_images/graphics/window.png "2019 10 08 12 04 12 Window")

Mit Klick auf die Übersicht wird der Plan im **Lesemodus** aufgemacht. Mit Klick auf Bearbeiten wird der Plan im **Bearbeitungsmodus** aufgemacht.

![2019 10 08 12 04 12 Ubersicht](_images/graphics/ubersicht.jpg "2019 10 08 12 04 12 Ubersicht")

## **Zeichnung in Lesemodus**

Im Lesemodus können Sie den Plan ansehen, die Referenzobjekte bearbeiten, Plan Drucken oder Exportieren und Informationen aus der Zeichnung anzeigen lassen.  Sie können in diesem Modus die Objekte auswählen und ihre Eigenschaften bearbeiten. Jedoch können Sie die Zeichnung nicht bearbeiten, d. h. die zeichnerischen Operationen sind deaktiviert.  Dieser Modus ist für die schnelle Übersicht, Auswertung und Druck gedacht. 

Die Ansichten wechseln Sie in dem Menü links oben. 

![2019 10 08 15 54 51 Lesemodus Ansichten](_images/graphics/lesemodus-ansichten.png "2019 10 08 15 54 51 Lesemodus Ansichten")

Auf der rechten Seite sind die Druck- und Export-Funktionen.

![2019 10 08 16 04 13 Lesemodus Export Print](_images/graphics/lesemodus-export-print.jpg "2019 10 08 16 04 13 Lesemodus Export Print")

Diese Funktionen stehen auch in dem Bearbeitungsmodus zur Verfügung und werden dann separat in Details beschrieben. 

## **Zeichnungen in Bearbeitungsmodus**

In diesem Modus sind alle zeichnerische Funktionen vorhanden, wie auch alle Optionen, Funktionen und Bearbeitungsmöglichkeiten der referenzierten Objekte. Dafür öffnen Sie die Zeichnung in Lesemodus und dann klicken Sie auf den Button 'Zeichnung' bearbeiten - siehe Abbildung oben.

> **Bemerkung**: Sie müssen zuerst die Zeichnung in Lesemodus aufmachen. Der Button `Bearbeiten` in orangen Farbe ist für die Eigenschaften des importierten Plans zu bearbeiten, wie z. B. Zeichnungsname, importierte Dokumente, Code, Kategorie etc. Die Bearbeitung der Zeichnungseigenschaften ist in dem Abschnitt für die administrativen Benutzer beschrieben [hier](/de/modules/de-grafik/admin).

![Vr Graphics De De Edit Mode Overview](_images/graphics/edit-mode-overview.jpg "Vr Graphics De De Edit Mode Overview")

### Ansichtsleiste

Die **Ansichtsleiste** beinhaltet drei Bereichen:
*  *Zeichnung* : welche Zeichnung gerade Sie bearbeiten
*  *Layergruppen* : hier wählen Sie aus vordefinierten Layergruppen. Eine Layergruppe beinhaltet die Layer-Einstellungen ( *sichtbar / auswählbar / editierbar / aktiv* ) sind und die Einfärbung der Daten nach bestimmten Kriterien. Die Layergruppen sind standardmäßig vordefiniert. 
> **Beispiel:** *Raumnutzung nach DIN 277* - die Räume werden nach der hinterlegten Nutzung eingefärbt. Die Nutzung entspricht den DIN 277 Normen.

Die Layergruppen sind [hier](***) beschrieben.
*  *Gespeicherte Ansichten* : Sie können bestimmte Ansichten speichern und wieder aufrufen. 

### Funktionsleiste

Die **Funktionsleiste** beinhaltet alle zeichnerische Objekte, Operationen und Funktionen. Hier sind alle Tools für Bearbeitung der Grafik positioniert. Details: [hier](/de/modules/de-grafik/toolbar).

### Zeichnungsleiste

Die **Zeichnungsleiste** beinhaltet die Buttons `Bearbeiten`, `Löschen`, `Aktualisieren`, `Abbrechen`, `Speichern`. Details: [hier](/de/modules/de-grafik/).

## Layergruppen

Die Layergruppe beinhaltet die Einstellungen der eingeschalteten Layer. Die Layer sind standardmäßig versteckt, können nach Bedarf sichtbar gemacht werden und ggf. bearbeitet. 
Die vordefinierten Layergruppen sind nach Themen unterteilt, können aber immer wieder erweitert. 

![Vr Graphics De De Layergroups](_images/graphics/layergroups.jpg "Vr Graphics De De Layergroups")

Auf die Abbildung ist die aktive Layergruppe *Raumnutzung nach DIN 277 (Vorgabe)* und die Räume sind nach den eingegebenen Nutzungen eingefärbt. Diese Layergruppe ist als Vorgabe gesetzt. 
In dieser Layergruppe sind die **Räume** auswählbare Objekte, weil die Raumnutzungen in dem Raum festgelegt werden. 

Eine Layergruppe hat folgende Eigenschaften:

* Welche Layer sind *sichtbar*
* Welche Layer sind *auswählbar* - nur Objekte aus diesen Layer werden beim Auswahl selektiert. 
* Welche Layer sind in *Fangmodus* - der Fangmodus ist ein wichtiges Tool für präzises Zeichnen. Objekte, die Fangmodus aktiv haben, werden beim Zeichnen gefangen. 
* Welche Layer sind *editierbar* - nur Objekte aus diesen Layer können editiert werden. 
* Welcher Layer ist *aktiv* - wenn neue Objekte gezeichnet werden, unabhängig von dem Typ, werden diese auf dem aktiven Layer gespeichert. Hat man keinen aktiven Layer in der Layergruppe, werden die neu gezeichneten Objekte nicht gespeichert.
* Was für *Stil* hat der aktive Layer (für Admins) - der aktive Layer kann einen benutzerdefinierten Stil haben, sodass die Objekte unterschiedlich oder nach bestimmten Kriterien angezeigt werden.

### Beispiele vordefinierter Layergruppen

> **CAD:** Hier werden nur die Objekte aus der importieren Zeichnung angezeigt. Die reine CAD Zeichnung ist ein bisschen bereinigt, um bessere Ansicht für ein CAFM System zu erzielen. Auf der Abbildung sind Bemaßungen, Achsen etc. ausgeblendet. Dies können jederzeit wieder eingeschaltet werden. Auf der linken Seite sind die Layer angezeigt. Alle *A-..* Layer sind in dieser Layergruppe sichtbar, auswählbar und editierbar. Das heißt, dass mit dem Auswahltool alle sichtbare Objekte ausgewählt und bearbeitet werden können. 

![Vr Graphics De De Cad Layergroup](_images/graphics/cad-layergroup.jpg "Vr Graphics De De Cad Layergroup")

> **BGF:** *Voraussetzung: Modul "Flächenmanagement"* 
> Hier wird nur das Geschoss auswählbar und editierbar sein, das über die CAD Zeichnung gezeichnet sind. Das Geschosspolygon gibt uns die gesamte Geschossfläche und deshalb ist diese Layergruppe dafür vordefiniert. BGF - Brutto Geschoss Fläche. Das Geschosspolygon wird zuerst auf die Zeichnung gezeichnet, weil er den kompletten Plan umfasst. Die Räume, die auf das Geschosspolygon gezeichnet sind, werden automatisch zu dem Geschoss durch die Überlappung zugeordnet. 

Auf der linken Seite sind wieder die Layer angezeigt. Die Layer-Konfiguration ist wie folgt:
* **sichbar** - alle Wände, Möbel, Anlagen wie Aufzüge, Rolltreppen, Türe, Fenster, Sanitär etc. - die Zeichnung soll ziemlich sauber für das Zeichnen von dem BGF Polygon aussehen.
* **auswählbar** - nur das Geschosspolygon, das auf dem Layer *FM-Polygon-BGF* gezeichnet ist. Dieser Layer ist standardmäßig für die FM (Facility Management) BGF vorgesehen. 
* **editierbar** - nur das Geschosspolygon, das auf dem Layer *FM-Polygon-BGF* gezeichnet ist. Theoretisch kann man mehrere Geschosspolygone haben, aber es macht keinen Sinn.
* **Fangmodus** - Alle Wände sind mit aktivem Fangmodus, weil nur diese spielen eine Rolle beim Zeichnen eines Geschoss-Polygones
* **Layer aktiv** -  *FM-Polygon-BGF* ist als aktiv gesetzt. Neu gezeichnete Objekte werden auf diesem Layer gespeichert. Deshalb ist diese Layergruppe die passende, wenn Sie BGF Polygon zeichnen.

![Vr Graphics De De Bgf Layergroup](_images/graphics/bgf-layergroup.jpg "Vr Graphics De De Bgf Layergroup")

> **Raum:** *Voraussetzung: Modul "Flächenmanagement"* 
> Hier werden nur die Räume auswählbar und editierbar sein, die über die CAD Zeichnung gezeichnet sind. Diese Räume sind mit einem Raumdatensatz verknüpft. Die Räume werden hier "gelb" gefärbt, damit der Benutzer besseren Überblick hat, wo noch keine Räume gezeichnet sind. Die Räume sind als Polygone gezeichnet und sind ein bisschen durchsichtlich. 

Auf der linken Seite sind wieder die Layer angezeigt. Die Layer-Konfiguration ist wie folgt:
* **sichtbar** - alle Wände, Möbel, Anlagen wie Aufzüge, Rolltreppen, Türe, Fenster, Sanitär etc. - die Zeichnung soll ziemlich sauber für das Zeichnen von Räumen aussehen.
* **auswählbar** - nur die Räume, die auf dem Layer *FM-Polygon-Raum* gezeichnet sind. Dieser Layer ist standardmäßig für die FM (Facility Management) Räume vorgesehen. Deshalb werden nur Objekte aus diesem Layer ausgewählt.
* **editierbar** - nur die Räume, die auf dem Layer *FM-Polygon-Raum* gezeichnet sind. Vorgesehen ist, dass nur diese Objekte in dieser Layergruppe zu bearbeiten sind. 
* **Fangmodus** - Alle Wände sind mit aktivem Fangmodus, weil nur diese spielen eine Rolle beim Zeichnen eines Raumes
* **Layer aktiv** -  *FM-Polygon-Raum* ist als aktiv gesetzt. Neu gezeichnete Objekte werden auf diesem Layer gespeichert. Deshalb ist diese Layergruppe die passende, wenn Sie Räume zeichnen.

![Vr Graphics De De Space Layergroup](_images/graphics/space-layergroup.jpg "Vr Graphics De De Space Layergroup")

> **Arbeitsplatz:** *Voraussetzung: Modul "Flächenmanagement"* 
> Hier werden nur die Arbeitsplätze auswählbar und editierbar sein, die über die CAD Zeichnung gezeichnet sind. Dazu sind die Personen, die auf diese Arbeitsplätze sitzen angezeigt. Diese Arbeitsplätze sind mit einem Arbeitsplatz-Datensatz verknüpft. Die APs liegen innerhalb bestimmten Räume. Deshalb ist es wichtig, dass der Raum gezeichnet ist, dann der Arbeitsplatz, damit diese Zuordnung gewährleistet ist. Die Arbeitsplätze werden standardmäßig in dieser Layergruppe "lila" gezeigt. Sie sind als Polygone über die Möbel (Tisch und Stuhl) gezeichnet und sind ein bisschen durchsichtlich. 

Auf der linken Seite sind wieder die Layer angezeigt. Die Layer-Konfiguration ist wie folgt:
* **sichtbar** - alle Wände, Möbel, Anlagen wie Aufzüge, Rolltreppen, Türe, Fenster, Sanitär etc. - die Zeichnung soll ziemlich sauber für das Zeichnen von Arbeitsplätze aussehen.
* **auswählbar** - nur die Arbeitsplätze, die auf dem Layer *FM-Arbeitsplatz* gezeichnet sind. Dieser Layer ist standardmäßig für die FM (Facility Management) Arbeitsplätze vorgesehen. Deshalb werden nur Objekte aus diesem Layer ausgewählt.
* **editierbar** - nur die Arbeitsplätze, die auf dem Layer *FM-Arbeitsplatz* gezeichnet sind. Vorgesehen ist, dass nur diese Objekte in dieser Layergruppe zu bearbeiten sind. 
* **Fangmodus** - Alle Möbel sind mit aktivem Fangmodus, weil nur diese spielen eine Rolle beim Zeichnen eines Arbeitsplatzes
* **Layer aktiv** -  *FM-Arbeitsplatz* ist als aktiv gesetzt. Neu gezeichnete Objekte werden auf diesem Layer gespeichert. Deshalb ist diese Layergruppe die passende, wenn Sie Arbeitsplätze zeichnen.

![Vr Graphics De De Workplace Layergroup](_images/graphics/workplace-layergroup.jpg "Vr Graphics De De Workplace Layergroup")

# Zeichnung bearbeiten
Die Zeichnungen, die Sie bearbeiten können, müssen zuerst als Vektorgrafik (GXF, DWG, PDF, EPS, SVG etc.) importiert sein. Der Importvorgang ist in dem Abschnitt für die Administratoren beschrieben. 

Nachdem Sie die Zeichnung in Bearbeitungsmodus aufgemacht haben, wählen Sie ggf. die richtige Layergruppe, damit Sie die passende Objekte bearbeiten können. 

> **Beispiel:** Falls das Modul **Flächenmanagement** vorhanden ist, können beispielweise neue Objekte vom Typ "Raum" direkt erstellt werden. Diese werden auf den Layer *FM-Polygon-Raum* gespeichert. Dafür steht die Layergruppe *Raum* zur Verfügung. Dazu können Sie auch die Layergruppe *Raumnutzung nach DIN 277* nutzen.

Für das Auswählen, die Bearbeitung und das Zeichnen steht die Funktionsleiste zur Verfügung. Die detailierte Beschreibung finden Sie [hier](/de/modules/de-grafik/toolbar).

![Vr Graphics De De Function Bar](_images/graphics/function-bar.jpg "Vr Graphics De De Function Bar")

Die Leiste ist in folgenden Bereichen unterteilt:
1. Auswahltools
2. Zeichnen / Modifikation : Verschieben, Drehen, Skalieren
3. Transformieren
4. Ansichten / Navigation
5. Funktionen




