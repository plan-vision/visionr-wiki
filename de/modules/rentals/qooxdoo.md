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
![Qooxdoo Mieteinheiten](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh2" Mieteinheiten")
* Gebäude (optional, aber empfohlen) – geben Sie das Gebäude, damit die Mieteinheit auch in der Baumstruktur angezeigt wird. Ohne Gebäude kann der Benutzer die Einheit in der Tabelle mit allen Mieteinheiten finden. 
* Fall die Mieteinheit anderen Mieteinheiten beinhaltet oder Teil einer übergeordneten Mieteinheit ist, geben Sie die Zugehörigkeit in dem Feld **Gehört zu** und **Enthält Mieteinheiten**.

 
![Qooxdoo Mieteinheiten erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh3.png " Mieteinheiten Gehört zu")
*	**Mietfläche im Vertrag** – hier geben Sie bitte die Fläche der Mieteinheit, die in dem Vertrag definiert ist. Hier muss der Benutzer die Fläche manuell eingeben!
Die Fläche, die aus den verknüpften Räume oder Mietflächen zusammen gerechnet ist, wird in den Feldern **Flächensummer Räume** und **Mietflächensumme Räume** angezeigt. 

 
![Qooxdoo Mieteinheiten erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh4.png " Mieteinheiten Fläche aus dem Vertrag eintragen")
* Räume (optional, aber empfohlen) – geben Sie die Räume, die zu dieser Einheit gehören. So wird die richtige Fläche ermittelt und die Räume mit der Miteinheit verknüpft. So kann der Benutzer die eingetragene Fläche im Vertrag mit der tatsächlich genutzten Fläche vergleichen. 
 
![Qooxdoo Mieteinheiten erstellen](/uploads/v6/de-mietmanagement/vr6-mietman-mieteinh5.png „Räume hinzufügen“)
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
