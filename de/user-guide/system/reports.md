<!-- TITLE: Berichte-->
<!-- SUBTITLE: Überblick Administration Berichte -->

Deutsch | [English](/en/user-guide/system/reports)
*Sie sind hier: [Home](/home/) > [Benutzerhandbuch](/de/user-guide) > [System](/de/user-guide/system) > Berichte*

# Berichte

## Allgemeine Beschreibung

Das  Modul  "Berichte"  ist  Teil  jeder  VisionR  Installation  und  kann  als  leistungsfähiges Werkzeug zur Analyse und Evaluierung der gespeicherten Daten eingesetzt werden. Ein Set  von  Standard-Berichten ist  verfügbar.  Benutzerdefinierte  Berichte  können  leicht  als Summenübersichten, Diagramme, Tabellenansichten usw. erstellt  werden. Automatisch generierte  Berichte  können  als  E-Mail-Anhänge  bei  geplanten  Tasks  mit  verschickt werden. Berichte über die Inhalte externer Datenbanken können erstellt werden, wenn die Datenbanken  im  VisionR  Modul  "Kern"  beschrieben  sind.  Datenexporte  können  in verschiedenen Formaten durchgeführt werden mit Hilfe der VisionR Stylesheet Sprache (VSL).

## Berichtstypen
* Excel-Vorlagen
* HTML-Berichte
* VSP-Berichte

# Vorlagen für Excel-Berichte

## Schleifen

### Schleifen (Loops) mit jt:forEach

| &lt;jt:forEach items="${object}" var="pos"&gt; |                     |
| ---------------------------------------------- | ------------------- |
| Beispielobjekt: ${pos}                         |                     |
|                                                | &lt;/jt:forEach&gt; |

### Neue Seite für jeden Datensatz

| &lt;jt:forEach items="${object}" var="pos" onLoopProcessed="${PAGEBREAK}"&gt; |                     |
| ------------------------------------------------------------ | ------------------- |
| Beispielobjekt: ${pos}                                       |                     |
|                                                              | &lt;/jt:forEach&gt; |



