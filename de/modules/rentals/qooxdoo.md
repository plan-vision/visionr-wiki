<!-- TITLE: Mietmanagement alte Oberfläche (bis einschl. Version 6) für normale Benutzer -->
<!-- SUBTITLE: Qooxdoo Oberflächen - Alte Oberflächen (bis einschl. Version 6) -->

Deutsch | [English](/de/modules/rentals/qooxdoo)
*Sie sind hier: [Home](/home) > [Benutzerhandbuch](/de/user-guide) > [Mietmanagement](/de/modules/rentals) > Alte Oberflächen (bis einschl. Version 6)

# Beschreibung

Das Modul **Mietmanagement** wird für die Verwaltung der Mietobjekte, Mietverträge und Konditionen, Mietflächen und Kosten, Dokumente, Zahlungen, Umsätze, Erstellenvon Exposes etc. benutzt. 

Das Modul machen Sie auf, indem Sie über die Indexseite oder über den Startbutton -> Mietmanagement auf, falls Sie schon im System arbeiten. 

![Qooxdoo Index Seite](/uploads/v6/de-mietmanagement/vr6-mietman-besch1.png "Index- Seite") 

# 	Übersicht

Die **Mieteinheit** wird benötigt, um die Räumlichkeiten mit dem **Vertrag** und den Vertragspositionen zu verknüpfen. Eine Mieteinheit kann mehrere Räumlichkeiten beinhalten, kann mehrere Mieteinheiten beinhalten und kann auch einen Teil einer Mieteinheit sein. 
Eine Mieteinheit kann auch **Mietflächen** oder **Belegungen (von Mietflächen)** beinhalten, wenn z.B. die Mietfläche nur teilweise der Raumfläche entspricht. 
Die **Mieteinheit** wird mit einem Vertrag verknüpft und in dem Vertrag kann der Benutzer die Positionen, die Kosten, die Konditionen, die Dokumenten etc. verknüpfen. 
Zu den Mieteinheiten kann der Benutzer Mietkonditionen anhängen und so Preisänderungen planen – ab wann bis wann diese gültig sind, wie ändert sich der Preis etc.
Der **Vertrag** beinhaltet **Positionen**, aus den die Kosten zusammengestellt sind. Sobald Positionen im Vertrag existieren, werden die Kosten aus den Positionen genommen. Falls der Vertrag keine Positionen beinhalten soll, kann der Benutzer die Kosten direkt in dem Feld **Kosten** eingeben. Diese werden pauschal eingetragen. 
Die **Positionen** können beispielsweise die Kaltmiete und die Nebenkosten darstellen. 
Wenn die Positionen, der Vertrag und die Mieteinheiten verknüpft und mit Daten befüllt sind, können die monatlichen Werte Monat / Fläche (die Fläche für den jeweiligen Monat) generiert werden. So können diese anderen Systemen übermittelt werden und bleiben in diesem System protokolliert. 

# Bearbeitung von Mieteinheiten

Die Mieteinheiten können alphanummerisch erstellt werden. Die Mietflächen können auch grafisch erstellt werden. 
In der Tabelle mit den Mieteinheiten klicken Sie auf ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu-button.png "Menü Button")
 **Neu** in dem Funktionsmenü über die Tabelle rechts oder mit rechter Maustaste wieder auf **Neu**. 
![Qooxdoo Mieteinheiten](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh1.png " Mieteinheiten") 

In dem Formular geben Sie die wichtigsten Daten ein, wie:
* **Code ändern** – Ändern Sie den Code nach Ihrem Muster
* Name (optional)
* Mieter und Vermieter (optional) – diese werden im Prinzip im Vertrag festgelegt. 
![Qooxdoo Mieteinheiten](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh2.png "Mieteinheiten")
* Gebäude (optional, aber empfohlen) – geben Sie das Gebäude, damit die Mieteinheit auch in der Baumstruktur angezeigt wird. Ohne Gebäude kann der Benutzer die Einheit in der Tabelle mit allen Mieteinheiten finden. 
* Fall die Mieteinheit anderen Mieteinheiten beinhaltet oder Teil einer übergeordneten Mieteinheit ist, geben Sie die Zugehörigkeit in dem Feld **Gehört zu** und **Enthält Mieteinheiten**.

 
![Qooxdoo Mieteinheiten erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh3.png "Mieteinheiten Gehört zu")
*	**Mietfläche im Vertrag** – hier geben Sie bitte die Fläche der Mieteinheit, die in dem Vertrag definiert ist. Hier muss der Benutzer die Fläche manuell eingeben!
Die Fläche, die aus den verknüpften Räume oder Mietflächen zusammen gerechnet ist, wird in den Feldern **Flächensummer Räume** und **Mietflächensumme Räume** angezeigt. 

 
![Qooxdoo Mieteinheiten erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh4.png "Mieteinheiten Fläche aus dem Vertrag eintragen")
* Räume (optional, aber empfohlen) – geben Sie die Räume, die zu dieser Einheit gehören. So wird die richtige Fläche ermittelt und die Räume mit der Miteinheit verknüpft. So kann der Benutzer die eingetragene Fläche im Vertrag mit der tatsächlich genutzten Fläche vergleichen. 
 
![Qooxdoo Mieteinheiten erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh5.png "Räume hinzufügen")

* Einstellungen – hier sind einige Einstellungen, die in dem Registerkarte **Haupteigenschaften** zu finden sind:

![Qooxdoo Mieteinheiten erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh6.png "Zusätzliche Einstellungen")

o	Vermietbarkeit
 
![Qooxdoo Mieteinheiten erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh7.png "Vermietbarkeit Typ")

o	Flächenzustand
 
![Qooxdoo Mieteinheiten erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh8.png "Flächenzustand")

o	Nutzung
 
![Qooxdoo Mieteinheiten erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh9.png "Nutzung der Mieteinheit")

o	Farbe – frei wählbar – für die grafische Einfärbung

o	Anfangs- und Enddatum 

Anschließend **Speichern** Sie den Vorgang. 



# Bearbeitung von Mietverträgen und Mietpositionen
## Mietverträge

Die Mietverträge beinhalten die Vereinbarungen, die Mietflächen, die Konditionen, die Parteien etc. Der Mietvertrag wird mit der Mieteinheit verknüpft. 
Die **Vertragspositionen** können Daten aus dem Vertrag übernehmen, können aber auch abweichende Angaben haben. Deshalb ist in jeder Vertragsposition auch die Mieteinheit einzutragen.
Klicken Sie auf **Neu**, um einen neuen Vertrag zu erstellen. Geben Sie die wichtigsten Daten ein:
* **Vertrags-ID**
* **Mieter**
* **Vermieter**
* **Name des Vertrags**
* Mieteinheit (optional, aber empfohlen). 
* Vertragsnummer
* In Gebäuden (optional, aber empfohlen, damit der Vertrag auch in der Baumstruktur mit Filter **nach Standort** angezeigt wird.
 
![Qooxdoo Mietvertrag erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietver1.png "Mietvertrag erstellen")

* Laufzeiten - Geben Sie hier die Laufzeiten (Beginn- und Enddatum, die Laufzeit wird berechnet), falls der Vertrag befristet ist, falls nicht, klicken Sie auf **Unbefristet JA**.
* Kündigungsoptionen – darunter sind die Kündigungsoptionen. Geben Sie diese auch ein. 
* Status (optional, aber empfohlen).

 
![Qooxdoo Mietvertrag erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietver2.png "Mietvertrag Laufzeiten und Kündigung")

* Dokumente (optional) – falls Sie den Vertrag eingescannt haben, können Sie das Original einfach hinzufügen. So haben Sie immer eine verknüpfte digitale Kopie des Vertrags zu dem Vertrag im System.
* **Kosten, Zahlungsintervalle, Zahlungsoptionen, Umsatzsteuerpflichtig, Währung**
In dem zweiten Reiter **Kosten** können Sie die Kosten und die Zahlungsoptionen eingeben. 

> **Bemerkung:** Die Kosten können Sie manuell eingeben, aber sobald Positionen in dem Vertrag existieren, werden die Kosten im Vertrag aus den Positionskosten zusammengerechnet. 
 
![Qooxdoo Mietvertrag erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietver3.png "Kosten und Zahlungsintervall festlegen")

Ändern Sie die Optionen, die für Sie wichtig sind. Eine Änderung hier ist gültig auch für alle Positionen, die mit dem Vertrag verknüpft sind. Sobald die Positionen manuell geändert werden, werden die Änderungen aus dem Vertrag die Positionen nicht überschreiben und der Benutzer soll die Positionen manuell anpassen. 
So kann der Benutzer viele mögliche Varianten abdecken.

* **Zahlungen (Kundenspezifisch)**– die Zahlungen kann der Benutzer in der Registerkarte **Zahlungen** anpassen. 
 
![Qooxdoo Mietvertrag erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietver4.png "Zahlungen")

* Anhänge (optional) – hier können Sie Anhänge hochladen und mit dem Vertrag verknüpfen. Dazu können Sie auch die Beginn- und Endzeit für die Anhänge festlegen. 
* Indexierung (optional) – die Indizes geben Sie in dem Reiter **Indexierung**. **Beispiel:** 
 
![Qooxdoo Mietvertrag erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietver5.png "Indixierungen")

* Staffelung (optional) – die Staffelung geben Sie in dem Reiter **Staffelung**
 
![Qooxdoo Mietvertrag erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietver6.png "Staffelungen")

Sie können die Felder anschauen und gegebenenfalls die relevanten Felder ausfüllen.

Anschließend speichern Sie den Vertrag!

## Mietpositionen

Die Mietpositionen sind in dem Vertrag einzugeben. 
Öffnen Sie den gewünschten Vertrag und in dem Reiter **Positionen** fügen Sie Positionen hinzu. 
 
![Qooxdoo Mietpositionen erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietpos1.png "Mietpositionen erstellen")

Der Screenshot zeigt einen Vertag mit 2 schon erstellten Positionen für die Nettomiete und für die Nebenkosten. 
Mit Klick auf **Neu** wird eine neue Position erstellt. Wählen Sie den Typ zuerst. 
 
![Qooxdoo Mietpositionen erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietpos2.png "Typ der Mietposition wählen")

Dann geben Sie in der Position die Daten aus dem Vertrag, die sich zu diesem Typ bezieht. Zum Beispiel die Position vom Typ **Grundmiete**:
 
![Qooxdoo Mietpositionen erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietpos3.png "Mietpositionen Grundmiete Beispiel")

Wichtige Angaben:
* **Typ (Objektdefinition)** – Grundmiete / Nebenkosten
* **Position** – Ändern Sie die Position Code
* **Name** – geben Sie den Positionsname
* Mieteinheit (empfohlen)
* **Sonderleistung ?** 
* **Kosten** – die wichtigste Eingabe sind die Kosten. Diese sind in dem Reiter **Haupteigenschaften** in dem Bereich **Kosten** zu finden. Geben Sie die Kosten aus dem Vertrag und deaktivieren Sie die Option **MwSt. von Vertrag? **, falls die MwSt. aus der Position genommen wird und nicht von Vertrag. So kann der Benutzer Positionen mit unterschiedlichen MwSt. mischen und zu einem Vertrag hinzufügen.
Erstellen Sie analog auch die Position/en für die Nebenkosten. Die schon erstellte Position für die Nebenkosten sieht folgendermaßen aus:
 
![Qooxdoo Mietpositionen erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietpos4.png "Mietposition Nebenkosten Beispiel")

Sobald die Positionen Kosten haben, werden die Kosten im Vertrag überschrieben.
 
![Qooxdoo Mietpositionen erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietpos5.png "Kosten im Vertrag aus den Positionen")

Das Feld ist schon ausgegraut und kann nicht mehr manuell geändert werden. Damit der Benutzer einen Betrag im Vertrag pauschal eintragen kann, soll der Vertrag keine Positionen beinhalten. 

# Bearbeitung von Mietkonditionen
Der Benutzer kann Mietkonditionen für die Mieteinheiten definieren. Sie beinhalten die zukünftigen Preisänderungen. Die Mietkonditionen sind in dem Reiter **Kosten** in der Mieteinheit zu finden.
 
![Qooxdoo Mietkonditionen erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietkond1.png "Mietkonditionen erstellen")

Mit Klick auf **Neu** fügen Sie eine neue Mietkondition ein. Geben Sie den **Name**, ggf. eine Beschreibung und **die Anfang-** und **Enddatum** ein. 
 
![Qooxdoo Mietkonditionen erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mietkond2.png "Mietkonditionen erstellen Einstellungen")

Sie können hier auch Dokumente hochladen. 
An dem Beginndatum wird der neue Preis übernommen.

# Geplante Änderungen

In diesem Modul gibt es auch eine Menge Felder, die von dem Benutzer geplant geändert werden können. 
Solche Felder, in dem man den Wert mit Datum und Uhrzeit planen kann, sind mit dem Symbol ![Qooxdoo Applikationsmaske - Button Historization und geplante Änderungen](/uploads/v6/de-allgemein/vr6-hist_planned_changes_icon.png "Button Historization und geplante Änderungen") gekennzeichnet. Falls dieses Zeichen links vor dem Feld verfügbar ist, kann man den Wert in diesem Feld planen. 
Falls das Symbol so ![Qooxdoo Applikationsmaske - Button Historization](/uploads/v6/de-allgemein/vr6-historization_icon.png "Button Historization") aus sieht, ist dieses Feld nur protokolliert. 

> **Beispiel:**
> Wir möchten die Mehrwehrsteuer für einige Monate ändern. Wir können manuell den Prozentsatz ändern, indem wir alle Positionen (oder Verträge) auswählen und den MwSt.-Satz ändern. Sobald dieser Satz wieder genändert werden muss, muss der Benutzer ihn wieder manuell anpassen. Hier soll der Benutzer auch auf die monatlichen Werte aufpassen, damit diese richtzeitig und mit den richtigen Werten ausgegeben werden. 
> Deshalb ist eine geplante Änderung hier sinnvoll.
![Qooxdoo Geplante Änderung](/uploads/v6/de-mietmanagement/vr6-mietman-gepl_aenderung1.png "Geplante Änderung der MwSt.")
> In dem angezeigtem Fenster können sie die geplanten und die vergangenen Änderungen sehen. Für eine geplante Änderung gehen Sie in dem linken Fenster und klicken Sie auf **Neu** und in dem angezeigten Fenster geben Sie den gewünschten Wert und das Datum.
![Qooxdoo Geplante Änderung](/uploads/v6/de-mietmanagement/vr6-mietman-gepl_aenderung2.png "Geplante Änderung der MwSt. Schritt 1")
![Qooxdoo Geplante Änderung](/uploads/v6/de-mietmanagement/vr6-mietman-gepl_aenderung3.png "Geplante Änderung der MwSt. Schritt 2")
> Und anschließend den neuen Wert eingeben. Am Ende speichern Sie den Vorgang. 
> Wenn das Datum und die Uhrzeit gekommen ist, wird die Änderung vom System durchgeführt. 
{.is-info}

> **Info / Tipp:**
Geplante Änderungen können für unterschiedlichen Objekte erstellt werden. Zum Beispiel so eine Änderung kann man auch in dem Vertrag planen.
{.is-info}
 
![Qooxdoo Geplante Änderung Vertrag](/uploads/v6/de-mietmanagement/vr6-mietman-gepl_aenderung4.png "Geplante Änderung der MwSt. des Vertrags")

> **Bemerkung:** Sobald es eine oder mehr geplante Änderungen für ein Feld existiert, kann der Benutzer dieses Feld nicht bearbeiten. Dafür muss der Benutzer neue geplante Änderung erstellen, damit die Änderung übernommen wird. Eine Änderung kann auch in der Vergangenheit erstellt werden. 

> **Beispiel:**
Das Feld Kosten für die folgende Position lässt sich nicht ändern, weil geplante Änderungen für dieses Feld existieren.
![Qooxdoo Geplante Änderung](/uploads/v6/de-mietmanagement/vr6-mietman-gepl_aenderung5.png "Feld ist wegen geplanter Änderung gesperrt")
{.is-info}

# Monat / Flächen generieren

Eine Zuordnung Monat / Flächen wird vom System an jedem 15. (das Datum kann eingestellt werden) des Monats generiert. Dafür werden die Mieteinheiten mit Status „inaktiv“ ignoriert. 
Sie können auch eine Zuordnung selber erstellen, dann wird der Monat auch in der Baumstruktur erscheinen, falls er noch nicht vom Scheduler erstellt ist (jeweils am 15. des Vormonats). 
Dafür gehen Sie in der Mieteinheiten- Tabelle und wählen Sie die gewünschten Mieteinheiten. Die Mieteinheiten mit Status „inaktiv“ sollen aus der Auswahl weg gelassen. 
 
![Qooxdoo Monatliche Werte](/uploads/v6/de-mietmanagement/vr6-mietman-monat_flaeche1.png "Monat / Fläche generieren")
 
![Qooxdoo Monatliche Werte](/uploads/v6/de-mietmanagement/vr6-mietman-monat_flaeche2.png "Monat / Fläche generieren")

Wenn Sie die Einheiten selektiert haben, klicken Sie auf den Button „Monat / Fläche anlegen“.
 
![Qooxdoo Monatliche Werte](/uploads/v6/de-mietmanagement/vr6-mietman-monat_flaeche3.png "Monat / Fläche generieren")

Wählen Sie in dem neuen Fenster das Jahr und den Monat aus und schauen Sie die Einstellungen an und ändern Sie diese falls nötig. Standardmäßig wird die Option „aus aktuellem Stand“ gesetzt. Sie können diese aber ändern. 
 
![Qooxdoo Monatliche Werte](/uploads/v6/de-mietmanagement/vr6-mietman-monat_flaeche4.png "Monat / Fläche generieren Einstellungen vor dem Generieren")

In diesem Beispiel werden die Daten für den Monat Mai 2020 generiert. 
Anschließend klicken Sie auf 'Ausführen'. 
Die Objekte werden generiert: Der Vorgang kann einige Zeit in Anspruch nehmen.
 
![Qooxdoo Monatliche Werte](/uploads/v6/de-mietmanagement/vr6-mietman-monat_flaeche5.png "Monat / Fläche Daten werden generiert")

Die generierten Objekte werden angezeigt. 
 
![Qooxdoo Monatliche Werte](/uploads/v6/de-mietmanagement/vr6-mietman-monat_flaeche6.png "Monat / Fläche Ergebnis Überblick")

Die monatliche Werte – Zuordnung Monat / Mieteinheit; Monat / Mietfläche und Monat / Raum sind jetzt auch für den angegebenen Monat  sind dann in der Tabelle unter dem Monat zu finden.
 
![Qooxdoo Monatliche Werte](/uploads/v6/de-mietmanagement/vr6-mietman-monat_flaeche7.png "Monatliche Werte Tabelle")

> **Bemerkung:** Hier sind die Werte „Monat / Mieteinheit“ aufgelistet. Mit Klick auf das Häuschen über die Baumstruktur können Sie den Typ ändern. 

![Qooxdoo Monatliche Werte](/uploads/v6/de-mietmanagement/vr6-mietman-monat_flaeche8.png "Monatliche Werte Ansicht / Filter ändern")
