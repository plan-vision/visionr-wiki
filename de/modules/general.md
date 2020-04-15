<!-- TITLE: Neue Oberflächen mit Forms (ab Version 7) -->
<!-- SUBTITLE: llgemeines Benutzerhandbuch für Qooxdoo Oberflächen - Neue Oberflächen mit Forms (ab Version 7) -->

Deutsch | [English](/en/modules/general)
*Sie sind hier: [Home](/home) > [Benutzerhandbuch](/de/user-guide) > Neue Oberflächen mit Forms (ab Version 7)* 

# Beschreibung
Alle allgemeine Funktionen, wie z.B. Datensätze bearbeiten, Suchen, Filtern, Ansichten, Sortierungen etc., werden hier beschrieben. 

# Übersicht Applikationsmaske
Rufen Sie die Indexseite auf, indem Sie die folgende Adresse in dem Browser eingeben:

*http://SERVERNAME/forms*

Nachdem Sie Sich eingeloggt haben, wird die Indexseite geladen. Die Indexseite sieht ab dem Version 7.0 folgendermaßen aus:

![Forms Login Seite](/uploads/de-allgemein/v7-DE-login.png "Forms Login Seite")

Die Index-Seite wird geladen. 

![Forms Index Seite](/uploads/de-allgemein/v7-DE-index_site.png "Forms Index Seite")

Alle alphanumerische Module haben gleich aufgebaute Ansicht. Links stehen immer die Objekte aus dem Modul, daneben ist die hierarchische Struktur, damit die Daten besser und effizienter gefiltert und dargestellt werden. Rechts werden die Daten in tabellarischer Form (standardmäßig) dargestellt. 

**Beispiel:** *Kontakte*
![Forms Applikationsmaske Kontakte](/uploads/de-allgemein/v7-DE-Kontakte_Uebersicht.png "Forms Kontakte Applikationsmaske")


In dieser Ansicht können Sie die Datensätze direkt in der Tabelle bearbeiten oder in der Formularansicht aufmachen und bearbeiten. Die Bearbeitung wird separat beschrieben. 
# Anzeigen
Das System hat mehrere vordefinierten Anzeigen. Die Standardanzeige ist die Tabelle. Da werden die Daten bezüglich der ausgewählten Filter in einer Tabelle angezeigt. Die mögliche Ansichten sind: 

* Tabelle
* Liste
* Kacheln
* Spalten

Die Ansichten sind aus dem Menü oben rechts aufrufbar, wie auf die folgende Abbildung gezeigt ist. 

**Beispiel:** *Tabelle*
![Forms Anzeige Tabelle](/uploads/de-allgemein/v7-DE-Kontakte_Anzeigen_Tabelle.png "Forms Anzeige Tabelle")

**Beispiel:** *Liste*
![Forms Anzeige Liste](/uploads/de-allgemein/v7-DE-Kontakte_Anzeigen_Liste.png "Forms Anzeige Liste")

**Beispiel:** *Kacheln*
![Forms Anzeige Kacheln](/uploads/de-allgemein/v7-DE-Kontakte_Anzeigen_Kachen.png "Forms Anzeige Kacheln")

**Beispiel:** *Spalten*
![Forms Anzeige Spalten](/uploads/de-allgemein/v7-DE-Kontakte_Anzeigen_Spalten.png "Forms Anzeige Spalten")

## Anzeige anpassen

In der Standardansicht (die Tabelle) entpricht eine Zeile einem Datensatz. Die Spalten stellen die sichtbaren Eigenschaften dieser Objektgruppe dar. Sie können diese Ansicht anpassen, indem Sie selber bestimmen können, welche Spalten (Eigenschaften) sichtbar sind. 
Die Standardspalten sind vordefiniert und werden angezeigt. Sie haben aber die Möglichkeit diese Ansicht anzupassen und bestimmte Spalten ausschalten ggf. hinzufügen. Die Ansicht bleibt dann für diese Objektdefinition und Benutzer gespeichert. 

### Spalte hinzufügen

Damit Sie eine Spalte hinzufügen können, klicken Sie mit der rechten Maustaste auf die Überschrift der Tabelle und wählen Sie die Option 'Spalte einblenden'. 
![Forms Spalte hinzufügen](/uploads/de-allgemein/v7-DE-Spalte_hinzufuegen.png "Forms Eigenschaft in der Tabelle (Spalte) hinzufügen")

Wählen Sie die Eigenschaft, die Sie hinzufügen möchten. Falls diese Eigenschaft nicht eingeschaltet ist, wird sie als Spalte angezeigt. Klicken Sie anschließend auf 'Bestätigen'. Die Spalte wird in der Tabelle angezeigt.
![Forms Spalte hinzufügen 2](/uploads/de-allgemein/v7-DE-Spalte_hinzufuegen2.png "Forms Eigenschaft auswählen")

Sie können Die Spalte links oder recht ziehen und an der gewünschten Position verschieben. 
![Forms Spalte hinzufügen 3](/uploads/de-allgemein/v7-DE-Spalte_hinzufuegen3.png "Forms Spalte positionieren")

### Spalte ausblenden
Mit rechter Mausklick auf die Überschrift der Tabelle klicken und dann auf 'Ausblenden' klicken!
![Forms Spalte ausblenden](/uploads/de-allgemein/v7-DE-Spalte_ausblenden.png "Forms Spalte ausblenden")

# Hierarchie

Die Hierachie hilft Ihnen die Daten besser darzustellen und die Daten nach bestimmten (vordefinierten) Krieterien zusammenzufassen. 
Die Hierachie wählen Sie aus dem Menü über die Hierarchie selbst. 

![Forms Hierarchie wechseln](/uploads/de-allgemein/v7-DE-Hierarchie_Wechseln.png "Forms Hierarchie wechseln")

Deaktivieren, Ein- und Ausschalten machen Sie über das Funktionsmenü -> Hierarchie. 

![Forms Hierarchie](/uploads/de-allgemein/v7-DE-Hierarchie.png "Forms Hierarchie ein- und ausblenden / Hierarchie auswählen")

> **Bemerkung:** Auf dem Screenshot sind die Personen nach Abteilung sortiert. Die folgende Abbildung zeigt die selben Daten nach *Standort* sortiert.

![Forms Hierarchie nach Standort](/uploads/de-allgemein/v7-DE-Hierarchie_nach_Standort.png "Forms Hierarchie nach Standort")

> **Bemerkung:** Die Hierarchien sind in zwei Typen unterteilt - *ungefiltert* und *gefiltert*. *Gefilterte* Hierarchien zeigen nur die Ebenen, die tatsächlich mit Daten verknüpft sind. Sonst werden sie nicht gezeigt. Bei den *ungefilterten* (alle anderen) werden die Ebenen dargestellt, unabhängig davon, ob sie Daten beinhalten.

## Hierarchie wechseln

Die Hierarchie wechseln Sie mit Auswahl einer anderen Hierarchie aus dem Menü darüber. Alle vordefinierten Hierararchien für die ausgewählte Objektgruppe werden gezeigt. Die Abbildungen darüber zeigen einie Beispiele dafür. 


## Hierarchie ein- und ausblenden, ein- und ausschalten

Sie können die Hierarchie *ausblenden* und *einblenden* oder komplett *aus-* und gegebenenfalls *einschalten*. 

> **Ausblenden**

![Forms Hierarchie ausblenden](/uploads/de-allgemein/v7-DE-Hierarchie_Ausblenden.png "Forms Hierarchie ausblenden")

> **Bemerkung / Info:** Die ausgeblendete Hierarchie ist weiterhin aktiv. Die aktiven Kriterien sind über die Tabelle gezeigt und Sie können diese direkt auswählen und die Daten filtern.
>{.is-info}

> **Einblenden**

![Forms Hierarchie einblenden](/uploads/de-allgemein/v7-DE-Hierarchie_Einblenden.png "Forms Hierarchie einblenden")

> **Ausschalten**

In dem selben Menü haben Sie die Option, die Hierarchie auszuschalten. Klicken Sie auf die Option und die Hierarchie wird komplett ausgeblendet und die Daten werden nicht mehr nach diesen Krieterien gefiltert sein.  

> **Einschalten**

Um die Hierarchie wieder aktiv und sichtbar machen, wählen Sie aus dem Menü eine Hierarchie, die aktiviert werden muss. Die Struktur wird geladen. 

![Forms Hierarchie einschalten](/uploads/de-allgemein/v7-DE-Hierarchie_Einschalten.png "Forms Hierarchie einschalten")

![Forms Hierarchie einschalten 2](/uploads/de-allgemein/v7-DE-Hierarchie_Einschalten2.png "Forms Hierarchie wählen")

Die Hierarchie wird gezeigt und sieht wieder so aus:

![Forms Hierarchie](/uploads/de-allgemein/v7-DE-Hierarchie.png "Forms Hierarchie nach dem Einschalten")

# Filter
Auf der linken Seite sind auch Filters eingebaut. Sie können die Filter nutzen, um die Daten in der Tabelle schnell filtern zu können. Die Filter sind unterschiedlich für die unterschiedlichen Objekte. Auf den nächsten Screenshot sind die Kontakte ausgewählt und die Filter darunter beziehen sich auf diese Objektdefinition.

**Beispiel:** *Kontakte*
![Forms Filter Kontakte](/uploads/de-allgemein/v7-DE-Filter_Kontakte.png "Forms Filter Kontakte")

Die Daten werden nach den angegebenen Kriterien gefilter und angezeigt. 

**Beispiel:** *Personen*
![Forms Filter Personen](/uploads/de-allgemein/v7-DE-Filter_Personen.png "Forms Filter Personen")

Bei den Personen sind mehrere Filter vordefiniert, wie: 
* Objekttyp
* Personal-ID
* Name
* Vorname
* Telefon
* Abteilung
* Kostenstelle
* Gebäude / Raum
* Status
* Erstellungsdatum

**Beispiel:** *Personen mit aktiven Filter 'Objektdefinition = Mitarbeiter'*
![Forms Filter Personen Beispiel Mitarbeiter](/uploads/de-allgemein/v7-DE-Filter_Personen2.png "Forms Filter Personen Beispiel Mitarbeiter")

# Suchen / Gruppieren
Sie haben neben den Filtern auch die Suchfunktion. Sie können von einfachen bis sehr komplexen Suchen in die Tiefe durchführen. 
Die Suchfunktion rufen Sie mit Klick auf dem Button 'Suchen' oben rechts über den Arbeitsbereich (Tabelle / Liste / Kacheln / Spalten). 
![Forms Suchtutton](/uploads/de-allgemein/v7-DE-Suchbutton.png "Forms Suchen")

## Einfache Suche
![Forms Suchtutton](/uploads/de-allgemein/v7-DE-Suchleiste_einfach.png "Forms Suchen")

In dem Feld geben Sie die Zeichenkette, nach der gesucht wird. 

**Beispiel:** wir suchen nach einer oder mehreren Person/en mit Nachname 'Mustermann'. 
![Forms Einfache Suche 'Mustermann'](/uploads/de-allgemein/v7-DE-Suchleiste_einfach_Mustermann.png "Forms Einfache Suche 'Mustermann'")

> **Bemerkung:** Jede Suche wird über die Tabelle in 'oranger' Farbe angezeigt. Falls Sie eine zusätzliche Suche danach durchlaufen lassen, wird diese Suche oben hinzugefügt. Sie können so mehrere Suchkriterien nacheinander anwenden oder unterschiedliche Kriterien kombinieren. 

> **Bemerkung UND / ODER:** Wenn Sie mehrere Suchkriterien kombinieren möchten, müssen Sie den Operator richtig wählen. Vordefiniert ist der Operator 'UND'. Also jede Zeichenkette, die Sie eingeben wird hinzugefügt. Falls Sie den Operator 'ODER' nutzen möchten, müssen Sie ihn bei den Kriterien ändern. 

### Und 

Das nächste Beispiel zeigt den Operator 'UND'. Wir möchten alle Personen finden, die 'Daniel' heißen. 

**Beispiel:** wir suchen nach einer oder mehreren Person/en mit Vorname 'Daniel'. 
**Schritt 1:**
![Forms Beispiel einfache Suche](/uploads/de-allgemein/v7-DE-Suchleiste_einfach_Daniel.png "Forms Beispiel einfache Suche Schritt 1")
Die Suche liefert 2 Ergebnisse. Jetzt fügen wir einfach neue Suche für den Nachname des Herren, damit wir den richtigen finden.
**Schritt 2:** wir suchen nach der Zeichenkette 'Wil', um das Ergebnis zu verfeinern. 
![Forms Beispiel einfache Suche 2](/uploads/de-allgemein/v7-DE-Suchleiste_einfach_Daniel1.png "Forms Beispiel einfache Suche Schritt 2")

So können Sie weitere Suchkriterien hinzufügen.

> **Bemerkung:** Wenn Sie die erste Suche durchführen, wird das Suchkriterium oben 'orange' markiert. D.h. dieses Kriterium wird bei nächster Suche ersetzt. Damit dieser nicht aktiv ist, klicken Sie einfach daneben. Mit Klick darauf wird er aktiv und Sie können es ersetzen, indem Sie neue Suchkette eingeben. Falls es nicht aktiv ist, wird die Suche mit 'UND' hinzugefügt.

> **Bemerkung:** Wenn Sie nach Personen oder Kontakten suchen, können Sie direkt nach den folgenden Mustern suchen:
* 'Vorname Name'
* 'Name Vorname'
* 'Name, Vorname'

**Beispiel:** Das gleiche Ergebnis wie oben in einem Schritt. Mögliche Suche wäre: 'williams dan' / 'williams, dan' / 'daniel wil'
![Forms Beispiel Suche einer Person mit Vor und Nachname](/uploads/de-allgemein/v7-DE-Suchleiste_einfach_Daniel3.png "Forms Beispiel Suche einer Person mit Vor und Nachname")

### Oder

Sie können den Operator 'UND' an jeder Stelle mit 'ODER' ersetzen und so Ihre Suche noch verfeinern. Standardmäßig ist 'UND' gesetzt. Damit Sie ihn ersetzen, wählen Sie die Suchkriterien mit Halten der STRG-Taste und dann klicken Sie auf Button '<...>' auf der rechten Seite. Dieser Klick wird den Operator auf 'ODER' umstellen. 
Falls der Operator 'ODER' ist, können Sie auf dieser Weise ihn wieder auf 'UND' umstellen. 

Das nächste Beispiel zeigt den Vorgang.

**Beispiel:** wir suchen nach Personen mit Nachname 'Daniel' und nach Personen mit Vorname 'Angelika'. Wir möchten alle Personen, die Angelika oder Daniel heißen, auflisten.  
Diese Suche wird keine Ergebnisse liefern, da der Operator noch 'UND' ist. 
![Forms Suche ODER](/uploads/de-allgemein/v7-DE-Suchleiste_einfach_ODER.png "Forms einfache Suche mit 'ODER' Operator")

Wir ändern den Operator. Das Ergebnis sieht so aus:
![Forms Suche ODER](/uploads/de-allgemein/v7-DE-Suchleiste_einfach_ODER1.png "Forms einfache Suche mit 'ODER' Operator")

> **Bemerkung:** Die Suchkriterien können Sie frei kombinieren. Sie können ein Kriterium löschen oder mit anderem Operator verknüpfen. 

## Erweiterte Suche

Die erweiterte Suche bietet Ihnen die Möglichkeit, selber zu bestimmen, welches Feld durchgesucht wird. Sie haben die Möglichkeit verknüpfte Objekte und deren Felder durchzusuchen - die so genannte 'Suche in die Tiefe'.


Zum **Beispiel** möchten nach Personen suchen, die eine bestimmte Abteilung haben. Dieser Vorgang kann auch mit 'Gruppieren' nach Abteilung erledigt werden.

Klicken Sie auf das Suchsymbol und dann auf die drei Punkte -> 'Suchen nach', um das Suchfenster aufzumachen. 
![Forms Suche erweitert](/uploads/de-allgemein/v7-DE-Suchleiste_erweitert.png "Forms erweiterte Suche")

In dem angezeigten Fenster geben Sie die Eigenschaft, die Sie durchsuchen möchten.
![Forms Suche erweitert 1](/uploads/de-allgemein/v7-DE-Suchleiste_erweitert1.png "Forms erweiterte Suche - Eigenschaft wählen")

Dann entscheiden Sie, ob Sie die gesamte Eigenschaft durchsuchen möchten oder nur bestimmten Spalten / Eigenschaften.
![Forms Suche erweitert 2](/uploads/de-allgemein/v7-DE-Suchleiste_erweitert2.png "Forms erweiterte Suche Eigenschaft wählen Schritt 2")

Falls die Suche einer bestimmten Spalte erwünscht ist, klicken Sie auf das '+' Symbol und wählen Sie aus der Eigenschaftsliste der darüberliegenden Eigenschaft.
![Forms Suche erweitert 3](/uploads/de-allgemein/v7-DE-Suchleiste_erweitert3.png "Forms erweiterte Suche Optional in die Tiefe dieser Eigenschaft suchen")

Geben Sie die Suchkette, wonach gesucht wird.
![Forms Suche erweitert 4](/uploads/de-allgemein/v7-DE-Suchleiste_erweitert4.png "Forms erweiterte Suche Zeichenkette und Operator eingeben")

Das Ergebniss sieht so aus.
![Forms Suche erweitert 5](/uploads/de-allgemein/v7-DE-Suchleiste_erweitert5.png "Forms erweiterte Suche Ergebnis")

> **Bemerkung:** Die mögliche Operationen, die zur Verfügung stehen. 

![Forms Suche erweitert 6](/uploads/de-allgemein/v7-DE-Suchleiste_erweitert6.png "Forms erweiterte Suche mögliche Operatoren")


## Suche zurücksetzen / leeren

Damit Sie die Suche zurücksetzen oder leeren, müssen Sie die Suchkriterien schliessen - mit Klick auf 'x'. Die Suche wird zurcükgesetzt.


## Suche anpassen

Sie haben die Möglichkeit die Suche anzupassen. Standardmäßig sind die wichtigsten Eigenschaften wie 'Code' , 'Name' etc. in der Suche einbezogen, aber Sie können die Suchfelder auch selber anpassen. Dafür steht die Option 'Anpassen'.
![Forrms Suche anpassen](/uploads/de-allgemein/v7-DE-Suchleiste_erweitert.png "Forms Suche anpassen")

In dem angezeigten Fenster geben Sie die gewünschte Eigenschaft ein und fügen Sie diese ein. Sie können mehrere Eigenschaften hinzufügen, damit Sie die Felder explizit bestimmen, die durchgesucht werden. Diese Anpassung wird gespeichert und die Zeichenkette, die Sie in dem Feld eingeben, wird in den von Ihnen festgelegten Feldern gesucht.

![Forms Suche anpassen](/uploads/de-allgemein/v7-DE-Suche_anpassen.png "Forms Suche anpassen - Sucheinstellungen")

> **Bemerkung:** Falls eine Eigenschaft ein verknüpftes Objekt ist, können Sie auch Eigenschaften dieses Objektes einbeziehen. Dafür wählen Sie die gewünschte Eigenschaft aus oder falls diese Eigenschaft wiederum ein verknüpftes Objekt ist, können Sie nach Bedarf auch tiefer suchen. 

Wählen Sie die Eigenschaft zuerst:
![Forms Suche anpassen 1](/uploads/de-allgemein/v7-DE-Suche_anpassen_bsp1.png "Forms Suche anpassen - Eigenschaft wählen")

Wählen Sie welche Eigenschaft der Eigenschaft durchgesucht werden soll:
![Forms Suche anpassen 2](/uploads/de-allgemein/v7-DE-Suche_anpassen_bsp1.png "Forms Suche anpassen - Eigenschaft von der ausgewählten Eigenschaft wählen")

So wird in die Tiefe gesucht, zum Beispiel wir suchen alle Personen, die in irgendeinem Gebäude sitzen, das sich in Deutschland befindet. Theoretisch können wir es so formulieren - "Wir suchen alle Personen durch und geben diese aus, die eine Gebäudezuordnung haben, wobei Gebäude.Land.Name = Deutschland ist."

Screenshots comming soon...

## Gruppieren

Die Funktion gruppiert die Daten nach einem dem ausgewählten Kriterium. Sie können die schon gruppierten Daten leicht in einer Tabelle aufrufen und bearbeiten oder weiter gruppieren oder durchsuchen.

**Beispiel:** Gruppierung der Kontakte nach 'Name' und Auswahl einen Teil dieser Gruppierung. 

Auswahl der Eigenschaft:
![Forms Beispiel Gruppierung nach Name](/uploads/de-allgemein/v7-DE-Suche_gruppieren.png "Forms Beispiel Gruppierung nach Name")
Ergebniss der Gruppierung zum Auswählen:
![Forms Beispiel Gruppierung nach Name 1](/uploads/de-allgemein/v7-DE-Suche_gruppieren1.png "Forms Beispiel Gruppierung nach Name - Ergebnisse in Zahlen")
Auswahl der Gruppen:
![Forms Beispiel Gruppierung nach Name 2](/uploads/de-allgemein/v7-DE-Suche_gruppieren2.png "Forms Beispiel Gruppierung nach Name - Auswahl der Gruppen")
Das Ergebniss:
![Forms Beispiel Gruppierung nach Name 3](/uploads/de-allgemein/v7-DE-Suche_gruppieren3.png "Forms Beispiel Gruppierung nach Name - Ergebnis nach der Auswahl")

# Neues Objekt erstellen
Ein neues Objekt erstellen Sie mit der Option `Neu` in dem Menü oben rechts über die Tabelle oder in dem Menü, das Sie mit der rechten Maustaste über die angezeigte Tabelle aufrufen können. 

![Forms Neues Objekt](/uploads/de-allgemein/v7-DE-Neues_Objekt_1.png "Forms Neues Objekt")

Die mögliche Objekttypen werden angezeigt (nur falls mehrere Typen zur Verfügung stehen). 

**Beispiel:** Erstellen eine neue Person. Mit Klick auf `Neu` werden die folgenden Objekttypen zur Auswahl angeboten. 
![Forms Neues Objekt 2](/uploads/de-allgemein/v7-DE-Neues_Objekt_2.png "Forms Neues Objekt - Typ wählen")

Nachdem Sie den Type ausgewählt haben, können Sie mit der Dateneingabe fortfahren. Nachdem Sie die Eingaben gemacht haben, können Sie den Datensatz speichern.
![Forms Neues Objekt 3](/uploads/de-allgemein/v7-DE-Neues_Objekt_3.png "Forms Neues Objekt - Eingaben machen")

# Bearbeiten
Die Bearbeitung erfolgt in der Formularansicht oder direkt in der Zelle in der Tabelle, falls Sie die Daten in der Tabelle anzeigen lassen. Die Ansichten sind in dem Abschnitt 'Anzeigen' beschrieben.
Standardmäßig ist die Ansicht 'Tabelle' aktiv und die Datensätze werden als Zeilen angezeigt. Die Spalten sind die Eigenschaften und diese können Sie bearbeiten. 

Damit Sie einen Datensatz zur Bearbeitung aufmachen, klicken Sie auf der Tabellenzeile und dann mit Doppelklick (alternativ wählen Sie den Datensatz und mir rechter Maustaste rufen Sie das Menü auf und dann wählen Sie die Option`Bearbeiten`) öffnen Sie den Überblick der Datensatz. Die wichtigsten Informationen werden angezeigt.
![Forms Datensatz bearbeiten](/uploads/de-allgemein/v7-DE-Bearbeiten_Formular.png "Forms Datensatz bearbeiten")

![Forms Datensatz bearbeiten Variante 2](/uploads/de-allgemein/v7-DE-Bearbeiten_Formular_Variante2.png "Forms Datensatz bearbeiten Variante 2")
Sie können hier direkt ein Dokument / eine Datei oder einen Unterschfirt hochladen und mit dem Objekt verknüpfen. Dafür steht die Option 'Hochladen'.  In dem Angezeigtem Fenster können Sie per Drag & Drop die Datei hochladen. Der Button `Hinzufügen` bietet Ihnen die unterschiedlichen Optionen. 

Unabhängig ob Sie die Bearbeitung in der Tabelle oder in der Formularansicht machen, gibt es einige Feldertypen, die wir hier kurz beschreiben.

## Feldertypen

Jedes Feld ist mit einem Symbol gekennzeichnet, damit Sie den Typ erkennen. Die verknüpften Auswahlfelder sind mit dem Menüsymbol gekennzeichnet. 

### Textfelder

Die Textfelder sind einfache Eingabefelder. 
![Forms Textfeld](/uploads/de-allgemein/v7-DE-Bearbeiten_Formular_Textfeld.png "Forms Textfeld")

Hier können Sie einfache Zeichenketten eingeben. 

### Datumsfelder

Das Datum können Sie über das Kalendarsymbol eingeben (alternativ mit Doppelklick auf dem Feld) oder direkt in dem Feld in der richtigen Format. Das Format hängt auch von der aktiven Sprache - z.B. wenn das System auf Deutsch bedient wird, wird das Datumformat TTMMJJJJ sein. Wenn das System auf US Englisch bedient wird, ist das Format MMTTJJJ etc. 

![Forms Textfeld](/uploads/de-allgemein/v7-DE-Bearbeiten_Formular_Datumsfeld.png "Forms Datumsfeld")

### Verknüpfte Auswahlfelder

In diesem Feld können Sie ein VisionR Objekt verknüpfen. Das Obejkt muss zuerst vorhanden sein und Sie können dieses in dem Feld auswählen. Falls das Objekt noch nicht erstellt ist, können Sie dieses direkt an der Stelle erstellen. 

**Beispiel:** In dem Objekt `Person` ist das Feld `Gebäude` ein Auswahlfeld. Falls wir auf das Feld klicken, werden alle Gebäude aufgelistet, die zu der ausgewählten Liegenschaft gehören. Falls die Liegenschaft nicht ausgewählt ist, werden alle angezeigt. 
![Forms Auswahlfeld 1](/uploads/de-allgemein/v7-DE-Bearbeiten_Formular_Auswahlfeld_1.png "Forms Auswahlfeld 1")

> **Bemerkung:** Die Auswahlfelder sind sehr oft gefiltert angezeit. Z.B. falls ein Gebäude ausgewählt ist, dann werden nur die Räume zur Auswahl zur Verfügung gestellt, die zu diesem Gebäude gehören. Falls die Etage des Gebäude vor dem Raum gewählt wird, werden nur Räume aus diesem Geschoss angezeigt.

Falls das Objekt nicht vorhanden ist, können Sie es direkt über das `Menü -> Neues Objekt` erstellen. Die Option `Auswählen` werden die Objekte, die hier verknüpft werden können,  in einer separaten Tabelle aufgemacht und Sie können das gewünschte Objekt aus der Tabelle wählen. 
![Forms Auswahlfeld 2](/uploads/de-allgemein/v7-DE-Bearbeiten_Formular_Auswahlfeld_2.png "Forms Auswahlfeld 2")

> **Bemerkung:** Die angezeigte Tabelle ist identisch mit der Tabelle `Gebäude`, die in dem Modul `Flächenmanagement` aufrufbar ist.  

 
### Tabellen

Es gibt eine spezielle Eingabe in dem System. Es gibt Felder, die eine mehrfache Eingabe erlauben. Dann werden die verknüpften Datensätze als kleine *Tabelle* gezeigt. 

**Beispiel:** In dem Objekt `Raum` ist das Feld `Personen` ein mehrfaches Auswahlfeld, also eine Tabelle - in einem Raum können mehrere Personen sitzen. Hier werden mehrere Objekte verknüpft. Hier ist der Raumdatensatz aufgemacht und in der Registerkarte *Belegung* ist die Tabelle mit den Personen. 
![Forms Datenfeld Tabelle 1](/uploads/de-allgemein/v7-DE-Bearbeiten_Formular_Tabelle_1.png "Forms Datenfeld Tabelle - Datensatz finden")

Mit Klick auf das Feld werden die Personen aufgelistet. Sie können direkt die gewünschte Person auswählen und danach mit dem Button `+` den Auswahl hinzufügen. Die Person erscheint in der Tabelle. So können Sie weitere Personen hinzufügen. Falls die Person nicht vorhanden ist, können Sie sie direkt über das Menü -> `Neues Objekt` erstellen. 
![Forms Datenfeld Tabelle 2](/uploads/de-allgemein/v7-DE-Bearbeiten_Formular_Tabelle_2.png "Forms Datenfeld Tabelle - Datensatz hinzufügen")

![Forms Datenfeld Tabelle 3](/uploads/de-allgemein/v7-DE-Bearbeiten_Formular_Tabelle_3.png "Forms Datenfeld Tabelle - noch einen Datensatz hinzufügen")

> **Bemerkung:** Wenn eine Person mit einem Raum veknüpft wird, wird diese Person in der Tabelle `Personen` in dem Objekt `Raum` auch erscheinen. Falls ich die Person zu dem Raum hinzufüge, wird die Person- Raum zuordnung in dem Datensatz `Person` automatisch erstellt.

## Bearbeitung in Formularansicht

Mit Klick auf den Button `Bearbeiten` wird der Datensatz in Formularansicht aufgemacht. Sie können die Felder bearbeiten. 
![Forms Datensatz bearbeiten 1](/uploads/de-allgemein/v7-DE-Bearbeiten_Formular_1.png "Forms Datensatz bearbeiten")

Die Formularansicht ist in **Registerkarten** und Bereiche innerhalb dieser Registerkarten unterteilt. Diese Gruppierung ist nach den Eigenschaften der verknüpften Felder. Die wichtigste sind immer in der Registerkarte `Haupteigenschaften`. 
Falls Sie ein Feld (Eigenschaft) nicht finden, können Sie den Such-Button unten nutzen. Dieser ist für Suchen von Eigenschaften innerhalb des Objektes. Das System wird Sie zu dem Feld weitergeleitet. 

Die Bearbeitung erfolgt direkt in den Felder, falls Sie ein Pflichtfeld nicht ausgefüllt haben, wird das System Ihnen benachrichtigen und Sie können das Objekt nicht speichern, bis Sie die erforderlichen Angaben nicht gemacht haben. Die Pflichfelder kann man anpassen. 

Machen Sie die gewünschten Angaben hinsichtlich des Feldtyps. Anschließend speichern Sie den Datensatz.  Die Feldertypen sind oben beschrieben. 

> **Bemerkung:** Wenn Sie ein Objekt bearbeiten bzw. erstellen, können Sie jedes verknüpftes Objekt mit Doppelklick zur Bearbeitung aufmachen. Die Vorgehensweise ist komplett identisch mit der hier beschriebenen. 

## Mehrfachbearbeitung

Sie können mehrere Objekte gleichzeitig in der Formularansicht bearbeiten. Dafür wählen Sie die gewünschen Objekte aus und dann klicken Sie auf `Bearbeiten`. Die Objekte werden alle gleichzeitig aufgemacht und Sie können Änderungen für ein Objekt oder für alle durchführen. 

Wählen Sie die gewünschten Objekte aus - Sie können mit dem Mauszeiger über die Zellen ziehen und alle darunterliegenden Zeilen werden ausgewählt. Alternativ, können Sie die Zeilen mit Halten der STRG Taste einzeln zu der Auswahl hinzufügen oder mit der Umschaltetaste protionsweise.

![Forms Mehrfachbearbeitung 1](/uploads/de-allgemein/v7-DE-Bearbeiten_mehrfach_1.png "Forms Mehrfachbearbeitung - Datensätze auswählen")

Dann klicken Sie auf `Bearbeiten` und die ausgewählten Datensätze werden in der Formularansicht angezeigt. Oben in der Mitte steht die Anzahl Objekte und Sie können diese einzeln aufrufen und bearbeiten. Sie können einen Datensatz bearbeiten und die Änderungen auf allen Datensätze übertragen. Somit können Sie eine Änderung für alle Datensätze in einem Schritt durchführen. 
![Forms Mehrfachbearbeitung 2](/uploads/de-allgemein/v7-DE-Bearbeiten_mehrfach_2.png "Forms Mehrfachbearbeitung - Datensätze in Formularansicht aufmachen")

**Beispiel:** Wir ordnen die Personen eine Kostenstelle zu. Damit wir nicht jeder Person einzeln aufmachen und mit der gleichen Kostenstelle verknüpfen, machen wir die Zuordnung in einem Schritt.  
![Forms Mehrfachbearbeitung 3](/uploads/de-allgemein/v7-DE-Bearbeiten_mehrfach_3.png "Forms Mehrfachbearbeitung - Eigenschaft ändern")

Anschließend speichern wir den Vorgang. Das System fragt, ob die Änderungen nur für die geänderten Datensätze sind oder die Änderung soll für alle Datensätze durchgeführt werden. 
![Forms Mehrfachbearbeitung 4](/uploads/de-allgemein/v7-DE-Bearbeiten_mehrfach_4.png "Forms Mehrfachbearbeitung - Änderung übertragen")

## Bearbeitung in der Tabelle

Die andere Variante Datensetze / Datenfelder zu bearbeiten ist direkt in der Tabelle. Wählen Sie die gewünschte Zelle und dann mit `Eingabetaste` machen Sie genau diese Zelle = Objekteigenschat = Feld in der Formularansicht auf. Abhängig von dem Typ der Eigenschaft können Sie Ihre Eingaben direkt in der Zelle machen.

**Beispiel:** Textfeld
![Forms Zelle in der Tabelle bearbeiten](/uploads/de-allgemein/v7-DE-Bearbeiten_Tabelle_1.png "Zelle (Text) in der Tabelle bearbeiten")

**Beispiel:** Auswahlfeld
![Forms Zelle in der Tabelle bearbeiten 2](/uploads/de-allgemein/v7-DE-Bearbeiten_Tabelle_2.png "Zelle (verknüpftes Objekt) in der Tabelle bearbeiten")

**Beispiel:** Tabelle
![Forms Zelle in der Tabelle bearbeiten 3](/uploads/de-allgemein/v7-DE-Bearbeiten_Tabelle_3.png "Zelle (Tabelle) in der Tabelle bearbeiten")

# Datei / Dokument hochladen
Sie können Dateien unabhängig von der Format hochladen. Viele gängige Formate werden unterstützt und werden von System erkannt und angezeigt, wie z.B. PDF, MS Word und Excel, Bilder, Texte etc.. Sonst können auch Dateien hinzugefügt werden, die danach auf dem Server zentral gespeichert bleiben. 

Die einfachere Variante eine Datei hochzuladen ist mit 'Drag & Drop', wenn der gewünschte Datensatz in Lesemodus (Übersicht) aufgemacht ist. 
Finden Sie den gewünschten Datensatz und mit Doppelklick auf die Zeile in der Tabelle wird die Übersicht angezeigt. 

![Forms Datensatz bearbeiten](/uploads/de-allgemein/v7-DE-Bearbeiten_Formular.png "Forms Datensatz bearbeiten")

Klicken Sie danach auf 'Hochladen' und ziehen Sie die Datei in das angezeigten 'Drag & Drop' - Fenster oder Benutzen Sie die Optionen in dem Menü 'Hinzufügen'. 

![Forms Datei hochladen](/uploads/de-allgemein/v7-DE-Datei_hochladen.png "Forms Datei hochladen")

Falls Sie mit 'Hinzufügen' Dateien hochladen und verknüpfen möchten, wird ein Explorer Fenster aufgemacht und Sie können die gewünschten Datei/en auswählen und hochladen. 

![Forms Datei hochladen 1](/uploads/de-allgemein/v7-DE-Datei_hochladen1.png "Forms Datei wählen")

> **Bemerkung:** Sie können hier mehrere Dateien in einem Rutsch hochladen. 

Dann müssen Sie den Vorgang bestätigen. Eine Übersicht der Dateien wird angezeigt und Sie können nur bestimmte oder alle bestätigen. 

![Forms Datei hochladen 2](/uploads/de-allgemein/v7-DE-Datei_hochladen2.png "Forms Datei hochladen - hochgeladene Dateien bestätigen")

Dann erscheinen die Datein in der Vorschau und mit Klick auf eine Datei / Bild wird die Datei aufgemacht und zum Herunterladen zur Verfügung gestellt. 

![Forms Datei hochladen 3](/uploads/de-allgemein/v7-DE-Datei_hochladen3.png "Forms Datei hochladen - Ergebnis / Vorschau / Download")

# Unterschift verknüpfen
Das System unterstützt auch Unterschrifte. Sie können Sich digital unterschreiben und direkt diesen Unterschied mit einem Datensatz verknüpfen - zum Beispiel bei einer Schlüsselausgabe oder Rückgabe, Verträge, Leistungen etc.
Die Option ist für jeden Datensatz vorhanden und wird bei der 'Datei hochladen' Option platziert. 
Öffnen Sie den gewünschten Datensatz und klicken Sie auf 'Hochladen'. Aus dem Menü 'Hinzufügen' wählen Sie die Option 'Unterschrift'.

![Forms Datei hochladen](/uploads/de-allgemein/v7-DE-Datei_hochladen.png "Forms Datei hochladen")

![Forms Unterschrift hochladen](/uploads/de-allgemein/v7-DE-Unterschrift_hochladen.png "Forms Unterschrift hochladen")

Unterschreiben Sie mit dem Maus / Finger je nach benutztem Gerät (PC, Tablet, Smartphone, Unterschriftenpad) und bestätigen Sie die Unterschrift. Dann müssen Sie nochmal die Auswahl bestätigen und die Unterschrift wird in der Vorschau angezeigt. Mit Klick auf die verknüpften Dokumenten / Dateien werden diese in einer Vorschaugalerie gezeigt. 

![Forms Unterschrift hochladen 1](/uploads/de-allgemein/v7-DE-Unterschrift_hochladen1.png "Forms Unterschrift hochladen - das Ergebnis")





