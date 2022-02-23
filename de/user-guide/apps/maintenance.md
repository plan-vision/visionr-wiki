<div style="margin:auto;text-align:center;width:100%;height:900px;color:#AAAAAA">
	<div style="height:100px"><img style="width:250px" src="_images/_title/plan-vision-logo-big.jpg"/></div>
    <div style="height:150px"></div>
	<div style="font-size:35px">Benutzerhandbuch</div>
	<div style="font-size:45px;color:#777777">Instandhaltung</div>
    <div style="font-size:35px">Browser / App</div>
    <div style="height:20px"></div>
    <div style="height:160px"><img style="width:160px" src="_images/_title/maintenance-app-logo.png"/></div>
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

  

# Beschreibung

Das Modul **Instandhaltung** wird für die Instandhaltung und für die Verwaltung der Wartungsverträge verwendet. Dieses Modul kann auch innerhalb der Grafik benutzt werden. Die Verwaltung / Bearbeitung der Daten selbst kann auch über die standardisierte Applikationsmaske erfolgen. Ist das Modul Grafik vorhanden, können die Objekte grafisch dargestellt und verwaltet werden. Die Verknüpfungen der grafischen Objekte können auch innerhalb der Grafik erfolgen. Falls das Modul Grafik nicht vorhanden ist, können die Daten über die Applikationsmaske in tabellarischer Ansicht angegeben und bearbeitet werden.

 **Bemerkung:** *Für die grafische Bearbeitung und Nutzung des Moduls **Instandhaltung** wird das Modul **Grafik** benötigt. Stellen Sie sicher, dass das Grafik- Modul installiert ist und Sie Zugriff auf die dazugehörigen Zeichnungen haben.*

 Im Grunde genommen wird dieses Modul eingesetzt, um die Instandhaltung der Anlagen und ihren Bauteile, wie Aufzüge, Feuerlöscher, Rolltreppen, Brandschutztüren etc. zu verwalten. Die Instandhaltung beinhaltet den ganzen Prozess - von der Pflege der Anlagen selbst (welche vorhanden sind, wo diese sich befinden, wann sie geprüft werden und etc.), die Abschließung von Wartungsverträgen zu diesen Anlagen, Festlegen von Wartungsleistungen, Checklisten, automatische Erinnerungen und Benachrichtigungen, Planen von Wartungsvorgängen, Protokollierung der geleisteten Tätigkeiten, Verwaltung dieser Verträge und vieles mehr.

Mit Kombination mit der Grafik können die Objekte grafisch dargestellt werden. Diese Objekte zeichnen Sie ganz normal wie in dem Benutzerhandbuch des Moduls **Grafik** beschrieben ist. Ist das Modul **Instandhaltung** installiert, werden zusätzliche Objekte in dem Menü mit den zeichnerischen Operationen eingefügt. Diese stehen dann zur Verfügung und können gleich benutzt werden. Die Anlagen, die gewartet werden müssen, zeichnen Sie normal als Polygon, Linie, Punkt (z.B. Aufzug als Polygon - Typ technische Anlage mit Nutzung Aufzug). Wenn das Wartungsdatum angegeben oder generiert ist, wird der Wartungstermin auf dem Plan angezeigt. So können Sie direkt auf dem Plan sehen, welche Anlagen / Objekte gewartet werden sollen und wann diese Wartungen stattfinden sollen. 

Das Zeichnen von Objekten ist für die Darstellung relevant. Die Referenzobjekte können auch beim Zeichnen miterstellt werden. So wird das grafische Objekt mit dem Datensatz direkt verknüpft. 

Sie können die Objekte zuerst zeichnen und erst später können Sie die Datensätze erstellen und verknüpfen. 

Selbstverständlich können die Objekte auch importiert werden und dann mit den grafischen Objekten verknüpft werden.

 

# Übersicht

Öffnen Sie die Applikationsmaske des Moduls **Instandhaltung**. Links sind die wichtigsten Objekte als Buttons dargestellt. Die Daten sind in tabellarischer Form rechts dargestellt. Die mehrfache Bearbeitung erfolgt in der Formularansicht, aber Sie können die Datensätze auch direkt in der Tabelle bearbeiten. Die Applikationsmaske ist auf die folgende Abbildung gezeigt.

![oveview](_images\maintenance\oveview.png)

Die Objekte, die links abgebildet sind, sind die wichtigsten für einen Wartungsprozess und sind wie folgt definiert: 

* **Anlagen** - Sie können über diese Maske die Anlagen verwalten - neue definieren, bearbeiten, löschen. Dazu können Sie auch den Status angeben bzw. ändern.

* **Anlagenbauteile** – Sie können hier Bauteile definieren, die zu einer Anlage oder einem Bauteil gehören. So können Sie Wartungstermine für bestimmte Bauteile definieren.

* **Verträge** - Verwaltung der Wartungsverträge. Hier können Sie die einzelnen Verträge ansehen, bearbeiten, löschen etc. Die Vertragsdaten werden hier erfasst – Begin- und Enddatum, zugehörige Leistungen und Anlagen, Vertragsparteien und Vertragskonditionen etc. 

* **Leistungen** - Verwaltung der Leistungen. Diese Leistungen sind mit einem oder mehreren Verträge verknüpft (Leistungen können auch ohne Vertrag definiert werden, z.B. wenn die Wartung von einer interner Person durchzuführen ist) und beschreiben den Wartungsprozess und die  Wartungsschritte für bestimmten Anlagen oder Anlagenbauteile. Die Leistungen beinhalten die einzelnen Schritte, die durchzuführen sind, sowohl die Wartungsintervalle, die zuständigen Personen, die technischen Dokumente etc. 

> **Beispiel** einer Leistung ist die Wartung eines Aufzugs (der gesamte Prozess). 

* **Prüfmeldungen** – Die Prüfmeldungen sind ein Bindeglied zwischen Leistung und Tätigkeit. Sie werden auf dem Plan angezeigt und weisen auf einen Prüftermin hin. Mit der Erstellung der Prüfmeldung wird auch eine zugehörige Tätigkeit mit erstellt, die alle wichtigen Informationen aus der Leistung beinhaltet. Drin ist auch das Prüfprotokoll. Diese Meldungen werden auf für den Ablauf des Wartungsprozess benutzt. Falls Sie das Modul **Workflows** haben, können diese Abläufe sehr präzis eingestellt werden.

* **Tätigkeiten** - Verwaltung der Tätigkeiten. Eine oder mehrere Tätigkeiten können zu einer Leistung gehören. Die Tätigkeiten werden aufgrund der Leistung für jeden Termin erstellt. Die Person, die die Prüfung (Wartung) macht, kann aus dieser Tätigkeit die Checkliste aufrufen und abhacken. Dann wird ein Prüfprotokoll erstellt und drin wird für diese Prüfung alles protokolliert. Falls das Modul **Zeiterfassung** vorhanden ist, können diese Tätigkeiten für die Zeiterfassung direkt benutzt werden. Die Prüfer können die Zeiten angeben oder mittels „Start“ und „Stop“ Funktion die Zeiten verfolgen und protokollieren. 

* **Protokolle -**  in dem Prüfprotokoll werden die einzelnen Prüfschritte beschrieben und protokolliert. Der Überblick über die vergangenen Prüfungen ist auch vorhanden.

* **Personen** - Verwaltung der Personen. Ob Dienstleister oder Verwalter - hier werden die Personen gepflegt. Diese Verknüpfung führt direkt zu den Kontaktdaten – genau wenn Sie das Modul Kontakte > Personen öffnen.

* **Unternehmen** - Verwaltung der Unternehmer. 

* **Räume** - Verwaltung der Räume. Über diese Maske können Sie auch die Räume verwalten (alphanumerisch), die im Projekt vorhanden sind. Die Anlagen sind sowieso in unterschiedlichen Räumen, die in unterschiedlichen Gebäuden sein können etc. Die Grafik ist hier vom großen Vorteil, da die Objekte grafisch besser zu erkennen sind und leichter verwaltet werden können.

* **Gebäude** - Verwaltung der Gebäude. Wie in dem Modul Flächenmanagement > Gebäude

* **Liegenschaften** - Verwaltung der Liegenschaften.

Mit Klick auf einen Button links wird die ausgewählte Objektgruppe angezeigt. Die Objekte selbst werden rechts in der Tabelle angezeigt. Die einzelnen Zeilen sind die Objekte und diese können Sie bearbeiten.

Der Arbeitsprozess kann in einigen Schritten unterteilt werden. Die Buttons auf der linken Seite entsprechen einigermaßen diesen Schritten. Grob gesehen ist jeder Button für bestimmten Operationen bestimmt. Je nach Arbeitsweise variieren die möglichen Arbeitsschritte. Die Objekte *Personen, Unternehmen, Räume, Gebäude, Liegenschaften* sind zur Verwaltung dieser Objekte und müssen nicht ständig gepflegt werden, nur Änderungen an den jeweiligen Objekten.

## Zusammenhang / Vorgehensweise 

Die Objekte in dem Modul **Instandhaltung** sind wie werden wie folgt miteinander verknüpft:

Die **Anlagen** oder die **Anlagenbauteile** werden gewartet. Die Wartungen sind in **Verträgen** erfasst und jeder Wartungsvertrag beinhaltet unterschiedliche **Leistungen**, die erbracht werden. Jede **Leistung** entspricht eine Wartungsposition aus dem Vertrag und kann unterschiedliche **Prüfprotokolle** und **Prüfintervalle** haben. 

**Bemerkung**: Falls das Modul **Helpdesk** auch vorhanden ist, werden **Tätigkeiten** für die daraus resultierenden Prüfungen generiert, die alle Schritte und Prüfprotokolle aus der Leistung übernehmen. Die **Tätigkeiten** können bestimmten **Personen / Kontakte / Teams / Unternehmen** zugeordnet werden, die für die Durchführung zuständig sind. In Bezug auf die hinterlegten Wartungsintervalle werden die Termine automatisch erstellt und für jeden Termin wird eine Tätigkeit erstellt, die alle Prüfschritte aus dem **Prüfprotokoll** beinhaltet. In dem Prüfprotokoll kann man **Checklisten** hinterlegen, die die zuständige Person auch vor Ort ausfüllen kann. 

Die Vorgehensweise hier ist von dem Benutzer abhängig und vor allem von der Logik, die abzubilden ist. Die Schritte werden wir nach unseren Vorstellungen beschreiben. Wir fangen mit den Anlagen, dann die Wartungsverträge zu diesen Anlagen, dann die Leistungen, die Prüfprotokolle und Prüfintervalle.

# Technische Anlagen / Bauteile

Sie können entweder eine technische Anlage erstellen oder einen Bauteil, der zu einer technischen Anlage gehört, falls dieser Bauteil separat gewartet wird. Die Vorgehensweisen sind identisch. Die erstellte Anlage kann als Bauteil einer anderen Anlage zugeordnet werden oder als einzelne Anlage der als Anlage, die anderen Bauteile beinhaltet. 

Oft kommt es vor, dass eine technische Anlage aus unterschiedlichen Bauteilen besteht, die unterschiedlichen Wartungen unterliegen. Deshalb können für diese Bauteile separate Wartungsleistungen erstellt werden ohne den gesamten Überblick zu verlieren. 

Klicken Sie auf die Tabelle mit den Anlagen.

![Technische Anlagen in dem Gebäude 017](_images\maintenance\items_table.png)

Diese Anlagen sind nach Standort gefiltert. Diese Filterung wenden Sie auf die Struktur an. Mehrere Filter sind vorhanden und können erweitert werden. In unserem Beispiel ist nach Standort gefiltert - die Anlagen sind in dem Gebäude 17 in Berlin.

Neue Anlage erstellen Sie, indem Sie mit der rechten Maustaste auf **Neu** oder in dem Funktionsmenü ![menu_icon](_images\maintenance\menu_icon.png) auf **Neu** klicken. 

In dem angezeigten Fenster geben Sie den Code und ggf. auch den Namen (Name ist optional). Wir nehmen als Beispiel einen Personenaufzug und geben in dem Name-Feld **Personenaufzug 123**. Wir können direkt an der Stelle auch den **Artikel** eingeben. Der Artikel ist sehr nützlich, falls wir mehrere Anlagen von diesem Typ haben. In dem Artikel können Sie alle Merkmale definieren und diese werden an die zugehörigen Anlagen übertragen. 

![Beispiel Personenaufzug](_images\maintenance\example_elevator-01.png)

Falls der Artikel noch nicht im System ist, kann direkt an dieser Stelle erstellt und verknüpft werden. 

Mit Doppelklick auf dem Feld, dann mit rechter Maustaste **Neu** oder auf die Option *Neues Objekt* erstellen Sie direkt ein neues Objekt, in diesem Fall einen Artikel.

![Beispiel Personenaufzug Artikel hinzufügen](_images\maintenance\example_elevator-02.png)

Machen Sie die nötigen Angaben und speichern Sie den Artikel.

> **Beispiel**: Aufzug KONE Model AC123B098

![Beispiel Aufzug KONE](_images\maintenance\example_elevator-kone-01.png)

Geben Sie weitere Informationen wie **Typ / Modell, Seriennummer, Maße** etc.  

Falls die technische Anlage gezeichnet ist und mit dem grafischen Objekt verknüpft ist, werden die Anlageinformationen auch im Plan sichtbar und die Ortung wird aus der Grafik genommen – in welchen Raum, Geschoss und Gebäude etc.

Die Ortung können wir auch direkt in der Anlage eingeben.

![Beispiel Aufzug KONE 2](_images\maintenance\example_elevator-kone-02.png) 
Anschließend speichern wir die Anlage!

![Beispiel Aufzug KONE 3](_images\maintenance\example_elevator-kone-03.png)

## Anlagebauteile

Die Anlagebauteile erstellen Sie wie die Anlage mit dem Unterschied, dass Sie in dem Feld **Gehört zu** die Anlage eintragen, zu der dieser Anlagebauteil gehört. 

In dem Feld *enthält* können Sei eine andere Anlage als Bauteil der zu erstellenden Anlage definieren. 

Diese Eingaben finden Sie im Bereich *Struktur* in dem Reiten *Haupteigenschaften*.

![Anlage als Anlagebauteil definieren](_images\maintenance\item_part_of.png)


# Wartungsverträge

Mit Klick auf den Button **Verträge** links rufen Sie die Wartungsverträge ab. Diese Verträge sind für die Wartungen angepasst und haben Abweichungen im Vergleich zu den normalen Verträgen. 

Die folgende Abbildung zeigt unseres Demoprojekt mit einigen Wartungsverträgen in Berlin, Gebäude 17.

![Verträge Überblick](_images\maintenance\contracts_overview.png)

Um einen Vertrag zu erstellen, klicken Sie auf **Neu** mit der rechter Maustaste. Alternativ über das **Funktionsmenü**.

Wählen Sie den Typ aus:

![Einen neuen Vertrag erstellen](_images\maintenance\contracts_new.png)

Wichtigste Eingaben:

* **Name** - Steht meistens als Vertragsname im Vertag
* **Kunde** - für wen ist diese Leistung erbracht? Meisten ist der Auftraggeber (nicht immer)
* **Wartungsfirma** – die Firma, die Wartung durchführt, meisten Auftragnehmer
* **Vertragsnummer** – steht im Vertrag (nicht immer)
* **Laufzeiten**
	* *Beginndatum* – ab wann der Vertrag aktiv ist.
	* *Enddatum* – bis wann der Vertrag gültig ist. Hier kommen auch Mechanismen bei Ablauf
* **Kündigung**
	* *Kündigungsfrist* – Eingabe Tage, Monate, Jahre möglich.
	* *Kündigungsdatum* wird automatisch berechnet
	* *Bei Ablauf* – Aktion, die beim Ablauf durchgeführt wird – z.B. automatische Verlängerung / Kündigung
	* *Verlängerung um…* - falls automatische Verlängerung gewünscht ist, kann es hier definiert werden.
* **Dokumente** (optional, aber empfohlen) – es ist empfohlen den Vertrag als Dokument hochzuladen, dann haben Sie den Ursprungsvertrag auch im System und kann bei Bedarf aufgemacht werden.  
* **Positionen** – die wichtigsten Daten kommen in den Positionen – die so genannten Leistungen. Die Leistungen beinhalten die Wartungsintervalle, die Wartungstypen, die Checkprotokolle und die Wartungsdaten. Da unterschiedliche Wartungsleistungen an unterschiedlichen Tagen durchgeführt werden können, müssen die Leistungen aus dem Vertrag gut erfasst werden. Diese sind in den meisten Fällen separat im Vertrag beschrieben. 
* **Kosten** - die Kosten können Sie im Feld **Kosten** nur dann pauschal eingeben, falls Sie keine Positionen haben. Sobald es eine oder mehrere Positionen gibt, werden die Kosten aus diesen Positionen summiert. Das Feld ist dann nicht mehr zu ändern.

> **Beispiel**:  Wartungsvertrag für den Personenaufzug 123 von KONE

![Beispiel Wartungsvertrag Aufzug KONE](_images\maintenance\contracts_example_elevator_kone.png)

* **Name** - Wartungsvertrag KONE Aufzüge, da zum Beispiel mehrere KONE Aufzüge von der Firma gewartet werden. 
* **Kunde** - Plan Vision GmbH
* **Wartungsfirma** – in dem Fall KONE, kann auch andere Firma sein. 
* **Vertragsnummer**
* **Beginn – und Enddatum**
* **Kündigungsfrist** – 3 Monate
* **Bei Ablauf** - automatische Verlängerung
* **Verlängerung um** - 1 Jahr
* **Positionen**
	* Sicherheitsprüfung Kabine und Antrieb - monatlich
	* Wartung Kabine –1 Mal jährlich
	* Wartung Maschine –1 Mal jede 2 Jahre

> **Bemerkung**: Wie die Positionen zu erstellen sind und was für Informationen Sie drin eingeben, schauen Sie den nächsten Abschnitt **Leistungen**. Die Leistungen können Sie direkt im Vertrag erstellen – Neues Objekt in der Tabelle Leistungen im Vertrag (Reiter „Positionen“) – dann wird die Leistung direkt mit diesem Vertrag verknüpft. Sie können die Leistungen separat erstellen und dann mit Vertrag verknüpfen.

# Leistungen

Die Leistungen können Sie abrufen, indem Sie auf den Button **Leistungen** links klicken. Diese werden in dem Arbeitsfenster angezeigt. Die folgende Abbildung zeigt unseres Demoprojekt mit einigen vorhandenen Leistungen.

![Leistungen Überblick](_images\maintenance\activities_overview.png)

> **Bemerkung**: Die Leistungen können Sie hier über die Applikationsmaske -> Leistungen erstellen oder Sie können die Leistungen direkt in der Registerkarte “Positionen“ bei den Verträgen erstellen. Unabhängig davon, werden sie hier auch aufgelistet. Damit aber die hier generierten Leistungen zu einem Vertrag gebunden werden, müssen diese in dem Vertrag selbst eingetragen oder bei der Erstellung / Bearbeitung der Leistung/en , mit den Vertrag verknüpft werden.

In der Tabelle klicken Sie mit der rechten Maustaste auf **Neu**. Alternativ über das Funktionsmenü. In dem angezeigten Fenster machen Sie Ihre Eingaben. Die *orange* gelisteten Felder unten sind noch leere Pflichtfelder, die Sie befüllen müssen.

Wichtigste Eingaben:
* **Name** -  Kurze Name was die Leistung ist 
* **Vertrag** - Sie können hier direkt den Vertrag eingeben, falls er schon erstellt ist. 
* **Inventar** – die Technische Anlage, die mit dieser Leistung verknüpft wird
* **Leistungszeiten** – hier geben Sie den Wartungsintervall, das Beginndatum (falls der Vertrag verknüpft ist, wird das Datum aus dem Vertrag übernommen, kann aber im Nachhinein geändert werden). Die **Leistungszeiten** sind unbedingt einzutragen. In diesen Zeiten geben Sie wann die Leistung beginnt, *den* *Wartungsintervall*, *den Leistungstyp* (sehr wichtig), *Verantwortlicher* und *Workflow*.
* **Kosten** - die Kosten für diese Leistung – meistens im Vertrag angegeben. 
* **Zeiten** hier geben Sie die Zeitperiode für die die Wartungstermine generiert werden. Diese Zeiten können von den Vertragszeiten abweichend sein und sie geben exakt wann der erste Termin wird und bis wann Termine generelle für diese Leistung erstellt werden können. Diese Eingaben finden Sie im dem Reiter *Zeiten*.
* **Checklisten / Standardprüfprotokoll**

![Neue Leistung erstellen](_images\maintenance\activities_new.png)

Falls der Vertrag verknüpft ist, wird die Leistung als Position zu diesem Vertrag hinzugefügt. So können Sie hier die Leistungen zu Verträgen zuordnen. Diese Zuordnung ist andersrum auch möglich – in dem Vertrag fügen Sie diese Leistung hinzu.

Bespiel: 

![Beispiel Leistung Aufzug KONE](_images\maintenance\activities_example_elevator_kone-1.png)

**Bemerkung**: *Bei Erstellung einer neuer Leistung ist das Wartungsintervall standardmäßig auf 1 Monat gesetzt. Ändern Sie dieses falls nötig. Sobald ein Vertrag ausgewählt ist, werden die Daten aus dem Vertrag übernommen, können aber danach geändert werden. So können Sie eine Leistung oder Prüfung doch anders planen als vordefiniert.*
Die Leistungszeiten sehen dann folgendermaßen aus:

![Beispiel Leistungszeiten Aufzug KONE](_images\maintenance\activities_example_elevator_kone-2.png)

Die Kosten geben wir in dem Feld **Kosten** ein:

![Beispiel Kosten in der Leistung Aufzug](_images\maintenance\activities_example_elevator_kone-3.png)

Die Zeitangaben für das Generieren:

![Beispiel Zeitangaben in der Leistung Aufzug KONE](_images\maintenance\activities_example_elevator_kone-4.png)

## Prüfmeldungen

**Die Prüfmeldungen** sind ein wichtiger Bestandteil des Wartungsprozesses. 
Wenn die Leistungen erfasst sind und die Daten und Intervalle richtig gepflegt sind, werden **Prüfmeldungen** zu diesen Daten erstellt. Diese **Prüfmeldungen** beinhalten den Termin und die einzelnen Schritte, die abzuhacken sind (Prüfprotokoll). 
Mit dem Generieren der **Prüfmeldung** (im Prinzip wird vom System automatisch generiert, aber Sie können auch abweichend und manuell Prüfmeldungen (Termine) extra erstellen und verteilen.
**Die Prüfmeldungen** kommen aus dem Modul **Helpdesk** und sind speziell für die Wartung. Diese werden auch automatisch vom System auf der technischen Anlage im Plan platziert, so dass der Benutzer direkt auf dem Plan sehen kann, wann und welche Anlage zu warten ist. Ein Symbol wird angezeigt. 
**Beispiel: (Demoprojekt)**

![Prüfmeldung auf dem Plan](_images\maintenance\check_noticies.png)Die Prüfdaten werden auch angezeigt. In diesem Beispielbild sind diese versteckt. 
Bemerkung: Die Prüfmeldung ist die Anbindestelle von Leistung / Prüfung / Tätigkeit / Prüfprotokoll.
Für jeden Termin wird eine Prüfmeldung erstellt und zu dieser Prüfmeldung werden die Daten angehängt und es wird eine zugehörige Tätigkeit erstellt, die das Prüfprotokoll beinhaltet. In der Tätigkeit drin macht der Techniker seine Eingaben und abarbeitet die Checkliste. Sobald er die Tätigkeit auf „abgeschlossen“ gesetzt hat, wird die Meldung als „erledigt“ gesetzt. Davor müssen alle Checkeinträge abgehackt werden. Das Protokoll bleibt an diesem Termin angehängt. So können Auswertungen der alten Protokolle gemacht werden. 

## Checklisten und Prüfprotokolle

### Checklisten

Die Checklisten erstellen wir direkt in den Leistungen, da diese zu einer Leistung gehören müssen. 
Die Checklisten beschreiben die einzelnen Schritte für die Prüfungen und werden in den meisten Fällen in dem Vertrag / in den Vertragsleistung oder in der technischen Dokumentation der Anlage beschrieben. Die Intervalle, die zuständigen Personen und die Kosten sind in der Leistung. 
Sobald Sie eine Leistung aufmachen, klicken Sie auf den Reiter *Checklisten*.
In dem Feld **Standard-Prüfprotokoll** können Sie ein neues Protokoll (als Standard) erstellen oder ein aus der vorhandenen wählen, falls es für anderen Anlagen identisch ist. Ein Standard-Prüfprotokoll kann mit mehreren Leistungen verknüpft werden. Dann werden Tätigkeiten mit Checklisten für jeden Prüftermin erstellt und diese werden dann von den Prüfern abgehackt. 

**Beispiel**: Auswahl eines vorhandenen Standard-Prüfprotokolls:

![Vorhandene Checkliste auswählen](_images\maintenance\check_noticies_check_protocol_example.png)

Ein **neues** Standard-Prüfprotokoll:

![Neue Checkliste erstellen](_images\maintenance\check_protocol_new.png)

Eingaben:

* **Name** – benennen Sie das Protokoll vernünftig.
* **Fügen** Sie die einzelnen Einträge hinzu. 

![Positionen zu einer Checkliste hinzufügen](_images\maintenance\check_protocol-positions-1.png)

Mit Klick auf **Neues Objekt** wird eine Liste mit schon vorhandenen Einträgen angezeigt. Sie können einen Eintrag direkt mit mehreren Standard-Prüfprotokollen verknüpfen. Falls Sie den Eintrag nicht finden, erstellen Sie ihn. 

Z.B. Der Eintrag „Auf Funktion prüfen“ ist für viele Prüfungen gleich.

![Vorhandene Position wählen](_images\maintenance\check_protocol-positions-2.png)

Sonst mit rechter Maustaste und dann Neu (oder über das Funktionsmenü oben rechts) erstellen Sie einen neuen Eintrag – z.B. Seilprüfung.

![Neue Position erstellen](_images\maintenance\check_protocol-positions-3.png)

Anschließend speichern Sie den Eintrag. Sie können hier auch Bilder hochladen, Beschreibung eingeben etc. 
Anschließend wählen Sie den neu erstellten Eintrag.

![Auswahl neu erstellter Position](_images\maintenance\check_protocol-positions-4.png)

Dann ist er auch mit dem Standard-Prüfprotokoll verknüpft.

![Position mit Prüfprotokoll verknüpfen](_images\maintenance\check_protocol-positions-5.png)

Anschließend speichern Sie die Leistung, wenn Sie alle Einträge zu dem Standard-Prüfprotokoll hinzugefügt haben und es mit der Leistung verknüpft haben.

![Leistung / Checkliste speichern](_images\maintenance\check_protocol-positions-6.png)

### Prüfprotokolle

Die Prüfprotokolle werden pro Termin (oder manuell bei Bedarf) aus dem Standard-Prüfprotokoll kopiert und erstellt. Drin werden alle Prüfeinträge zum Abhacken kopiert und der Prüfer kann dann diese bearbeiten. 

Die Prüfprotokolle werden dann gespeichert und als Prüfprotokolle für jede Prüfung als Geschichte gespeichert. Diese können nach dem Abschließen nicht mehr bearbeitet werden. Der Administrator kann das aber auch im Nachhinein, falls es nötig ist. 

So abarbeiten die Prüfer die Wartungen (Prüfungen). Nachdem sie alle Positionen abgehackt haben, kann die Tätigkeit (auch als Termin zu betrachten) abgeschlossen werden und dann wird das Protokoll auch als erledigt gesetzt. 

##  Generierte Meldungen / Termine / Tätigkeiten

**Die Meldungen** als Anbindestelle zwischen Leistung und Tätigkeit werden vom System generiert. 

Die **Tätigkeiten** beinhalten alle Informationen aus der Leistung / Anlage / Prüfprotokoll für die bestimmten Termine. Sobald ein Prüftermin generiert wird, werden diese Daten übernommen und der Prüfer muss nur die Tätigkeit, die ihm zugeordnet ist, erledigen. In dem **Prüfprotokoll** stehen die einzelnen Schritte, die durchzuführen sind. 

Die Termine / Tätigkeiten werden gemäß den Leistungsdaten generiert – (Beginn und Enddatum in dem Reiter „Daten“). Mit dem Generieren von Prüfmeldungen werden auch Tätigkeiten pro Meldung auch miterstellt. Zusätzliche Tätigkeiten zu einer Meldung/Termin können händisch hinzugefügt / kopiert werden. 

Das System generiert Termine/Meldungen für eine gewisse Zeitperiode im Voraus, z.B. 3 Monate, 1 Jahr, 5 Jahre, etc. Diese Zeit kann angepasst werden. 

Die Prüfer können die Leistungsdaten nicht ändern, dafür können aber die Tätigkeitsdaten abweichend bearbeiten. Ein Prüfprotokoll wird für jede Wartung/Prüfung/Tätigkeit hinterlegt und protokolliert. 

## Manuell erstellte Meldungen / Termine / Tätigkeiten

**Meldungen** können manuell erstellt werden, wenn die Termine händisch zu generieren sind. Z.B. Extra Wartungstermine sind gewünscht, die nicht im dem Wartungsvertrag beschrieben sind. Diese Option ist in der Leistung zu finden:

![Prüfmeldung/en manuell erstellen](_images\maintenance\manually_created_notifications-1.png)

Sie müssen nur den Zeitraum für die Erstellung neuer Meldungen eintragen. Diese Periode soll mit den Leistungsdaten passen, also muss innerhalb der eingetragenen Zeitperiode in der Leistung sein, damit das System die Termine / Meldungen generiert. 

![manually_created_notifications-2](_images\maintenance\manually_created_notifications-2.png)

**Tätigkeiten** werden mit den Prüfmeldungen mit erstellt. Manchmal sind diese aber nicht ausreichend und zusätzliche Tätigkeit wird für diesen Termin extra gebraucht. 

**Tätigkeiten** können auch analog zu den Leistungen manuell erstellt werden, falls eine oder mehrere zusätzlichen Leistungen benötigt sind – z.B. die Prüfung / Wartung kann nicht von einer Person durchgeführt werden und eine identische Tätigkeit kann für den zweiten Techniker erstellt werden (oder kopiert werden). Sie können dann in der Prüfmeldung, in der Tabelle mit den Tätigkeiten, einfach neue erstellen oder vorhandene kopieren und bearbeiten, z.B. eine andere Person zuweisen, abweichende Prüfzeiten etc.  

**Weitere Option**: Die Tätigkeiten für bestimmten Leistungen (diese sollen ausgewählt werden) können generiert werden, falls wir extra Termine gebraucht sind oder falls Prüftermine nach Bedarf stattfinden sollen. Das machen Sie mit der Funktion **Prüfmeldungen generieren!**

![Prüfmeldungen / Tätigkeiten generieren](_images\maintenance\manually_created_notifications-3.png)

Um Prüfmeldungen/Tätigkeiten zu generieren (nicht manuell erstellen), öffnen Sie die Leistungen und wählen Sie die gewünschten Leistungen, für die die Tätigkeiten generiert werden sollen.

Die Anzahl generierter Prüfmeldungen/Tätigkeiten ist von den folgenden Angaben abhängig:

* **Wartungsvertrag und Leistung** - ab wann und wie lange läuft der Vertrag
* **Leistungsdaten / Wartungsintervall und Wartungsintervall-Einheit** - wann und wie oft im Rahmen dieser Leistung die Tätigkeit ausgeführt wird.

So, zum Beispiel, bei einem Vertrag (ab 01.01.2020 bis 01.01.2022- 2 Jahre), Leistung mit Wartungsintervall 1 Monat, werden 24 Meldungen und Tätigkeiten generiert, da der Vertrag erst in 2 Jahren abläuft und jeden Monat die Wartung durchzuführen ist. Das heißt für jeden Monat eine Prüfmeldung und Tätigkeit. Setzen wir das Intervall auf 3 Monate, werden dann insgesamt 8 Prüfmeldungen und Tätigkeiten erstellt.

Um die Tätigkeiten generieren zu lassen, wählen Sie die gewünschte/n Leistung/n und klicken Sie auf den Button **Prüfmeldungen generieren!**. 

# Instandhaltung und Web-CAD Modul

Falls das Grafik-Web-CAD vorhanden ist, können Sie die Anlagen direkt in dem Plan zeichnen.

Die **Verträge, die Leistungen, die Meldungen** erstellen und bearbeiten wir wie oben beschrieben. Mit dem Zeichnen einer Anlage können wir an der Stelle auch die Anlage erstellen. Das Modul **Instandhaltung** brauchen wir nicht aufzumachen, da die Verbindung von der Grafik zu den Instandhaltungsobjekten vorhanden ist. Das ist ein Vorteil von VisionR, da alle Objekte, die mit anderen Objekten zusammenhängen, an der Stelle erstellt/bearbeitet etc. werden können, wo diese gebraucht sind.

## Neue Anlage im Plan zeichnen

Öffnen Sie die Maske der Grafik, indem Sie auf den Web-CAD Button in der Index-Seite klicken. Logen Sie sich ein und navigieren Sie zu der gewünschten Zeichnung.

Öffnen Sie die Zeichnung in der Ansicht „Technische Anlagen“. Dann klicken Sie auf „Bearbeiten“, um die Zeichnung zu bearbeiten. 

![Technische Anlagen auf dem Plan](_images\maintenance\new_item_in_webcad-1.png)

Die technischen Anlagen werden rot gezeigt, damit diese gut zu sehen sind. 

Damit wir eine Anlage erstellen, klicken wir auf das **Plus Zeichen**, dann auf „Polygon“ falls die Anlage als Polygon gezeichnet wird (Technische Anlage als Linie oder Punkt ist auch möglich). Beispiel – Feuerlöscher oder Brandmelder sind am besten als Punkt mit Bildzeichen darzustellen, Aufzüge z.B. als Polygone. Das ist Geschmackssache.

![Neue technische Anlage im Plan erstellen](_images\maintenance\new_item_in_webcad-2.png)

Sie können hier auch Bauteile auch zeichnen – z.B. innerhalb einer großen Anlage gibt es extra Bauteile, die unterschiedliche Wartungen und Wartungsintervalle haben. Sie können einmal die große Anlage zeichnen und drauf den Bauteil.

Wenn Sie mit dem Zeichnen fertig sind, speichern Sie die Anlage oder die Geometrie, falls die Anlage im System vorhanden ist. Dann verknüpfen Sie nur die Geometrie mit der vorhandenen Anlage. In diesem Fall soll das Häkchen deaktiviert sein.

![Neue Anlage ohne Referenzobjekt erstellen](_images\maintenance\new_item_in_webcad-3.png)

Nachdem das grafische Objekt gespeichert ist, kann es mit der schon erstellten Anlage verknüpft werden.

Wählen Sie das Objekt und klicken Sie auf **Bearbeiten** (Geometrie). In dem angezeigten Fenster unter der Registerkarte *Daten* geben Sie die Anlage. Die Referenzdaten werden darunter aufgelistet und Sie können sie an dieser Stelle auch bearbeiten.

![Referenzobjekt verknüpfen](_images\maintenance\new_item_in_webcad-4.png)

Somit ist das grafische Objekt mit der Anlage verknüpft. Jetzt können Sie die Anlage auch von der Applikationsmaske des Moduls **Instandhaltung** aufrufen und auf die Zeichnung anzeigen lassen.

Falls die Anlage (das Referenzobjekt) miterstellt wird, wird die Verknüpfung automatisch erfolgen. Die Anlage wird erstellt und Sie müssen die Daten einpflegen. 

## Anlage im Plan anzeigen

Ist die Anlage gezeichnet und mit dem Referenzobjekt verknüpft, können wir die Anlage auf die Zeichnung anzeigen lassen.

Sobald die Anlage in dem Modul **Instandhaltung** aufgemacht wird, wird eine Übersicht angezeigt und falls die Anlage auch mit grafischem Objekt verknüpft ist, wird es in der Übersicht erkennbar. 

![Überblick der Anlage mit Ausschnitt aus der Grafik](_images\maintenance\item_in_plan-1.png)

Mit Klick auf den Grafikausschnitt wird der Plan aufgemacht und die Anlage ist ausgewählt.

![Anlage im Plan aufmachen](_images\maintenance\item_in_plan-2.png)

Unabhängig von der Arbeitsweise sind die Details der Anlagen aufrufbar. Sie können das grafische Objekt aufmachen und in dem Formular alle Daten ansehen bzw. bearbeiten, sowie über die Applikationsmaske des Moduls in tabellarischer Form.

## Zusätzliche Funktionalitäten

Sind die Anlagen erstellt bzw. auch gezeichnet, die Verträge, die Leistungen, die einzelne Tätigkeiten auch erstellt und verknüpft, werden die Verträge der Anlagen vom System beobachtet und nach vordefinierten Kriterien bewertet.

Eine solche Bewertung ist zum Beispiel das Wartungsdatum und die automatische Platzierung der Prüfmeldungen.

Zusätzlich gibt es eine automatische Funktion zu Benachrichtigung der zuständigen Personen - alle Verträge, Leistungen werden vom Server überprüft und Termine werden mit allen Daten, wie Checklisten, Bemerkungen, Verantwortlicher etc. generiert. Dazu werden die Personen benachrichtigt – z.B. der Prüfer bekommt eine E-Mail Nachricht mit seinen Aufgaben. Die Verwalter bekommen z.B. einmal in der Woche werden diese Termine mit den Anlagen in einer Excel-Liste verpackt, deren Wartung innerhalb der nächsten 2 Wochen stattfindet. Diese Liste wird an einigen Personen / Verteiler per Email automatisch geschickt. Eine Anmeldung in dem System ist dafür gar nicht erforderlich. Die Zeiten können von dem Benutzer angepasst werden.

So kann zum Beispiel das Wartungspersonal benachrichtigt werden, wann und welche

Anlagen zu überprüfen sind. Auch können Termine festgelegt werden, die auch per E-Mail verschickt werden können.

> **Info:** Mit der mobilen App kann die Arbeit von jedem Gerät auch unterwegs erledigt werden. So zum Beispiel kann das Wartungspersonal unterwegs nach dem Wartungstermin den Status ändern oder Bemerkung hinzufügen, sowie auch vor Ort alle Daten der Anlage aufrufen. Die Checklisten kann der Prüfer auch vor Ort direkt bearbeiten. Dazu besteht auch die Möglichkeit vor Ort eine Störmeldung zu erstellen, eine Bestellung zu fordern etc., falls nötig. Sogar mit Foto, Bemerkung, Dokument etc.. Dazu gibt es auch die Möglichkeit vor Ort nach Beheben einer Störung eine Benachrichtigung an den beteiligten zu verschicken.

# Troubleshooting

Die gewünschte Person ist nicht in der Auswahlliste vorhanden.

Wahrscheinliche Ursache ist, dass die Person nicht in dem VisionR System vorhanden ist. Sie können die Personen sehen, indem Sie auf das Modul **Kontakte** aufmachen. Suchen Sie nach der Person und fügen Sie sie hinzu, falls nötig.

Die erstellte Anlage lässt sich in dem grafischen Modul nicht anzeigen.

Stellen Sie sicher, dass das erstellte Objekt auch *Geometrie* hat (also wirklich gezeichnet ist) und verknüpft ist. Sie können die Eigenschaft *Geometrie* in der Anlage finden und sehen, ob das Feld leer ist. Falls es leer ist, heißt es, dass das Objekt nicht gezeichnet ist, oder das gezeichnete Objekt nicht mit dem Referenzobjekt verknüpft ist.