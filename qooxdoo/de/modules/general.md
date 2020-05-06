<!-- TITLE: Alte Oberflächen (bis einschl. Version 6) für normale Benutzer -->
<!-- SUBTITLE: allgemeines Benutzerhandbuch für Qooxdoo Oberflächen - Alte Oberflächen (bis einschl. Version 6) -->

Deutsch | [English](/qooxdoo/en/modules/general)
*Sie sind hier: [Home](/home) > [Benutzerhandbuch](/de/user-guide) > Alte Oberflächen (bis einschl. Version 6)

# Beschreibung

Diese Dokumentation bezieht sich auf die allgemeinen Objekte, Funktionen und Operationen in dem System VisionR. Alle Module sind identisch aufgebaut und bieten außer den modulspezifischen Objekten und Funktionen auch eine Menge von Funktionalitäten, die von allen Modulen benutzt werden. Beispiele für solche Objekte und Funktionalitäten sind:

•	**Dokumentenmanagement** - die Verwaltung der auf dem Server abgelegten Dokumente / Dateien etc. erfolgt in dem Dokumentenmanagement, das von allen Modulen erreichbar ist.

•	**Berichte** - Berichte, Summen etc. sind allgemein für alle Module gültig 

•	**Geplante Tasks, Druckvorlagen, Export, Import** etc.

Alle VisionR Module, mit Ausnahme des Grafik-Moduls, sind identisch aufgebaut. Die allgemein gültigen Funktionen finden Sie in der Funktionstaste der Applikationsmaske.


## Übersicht

Das VisionR System ist webbasierend. Alle Module können über die Index-Seite abgerufen werden. Starten Sie Ihren Webbrowser und öffnen Sie die Index-Seite. Beispiel:
http://VISIONRSERVER:PORT/index.vsp.

Die Index-Seite ist auf Abbildung 1 dargestellt.

Auf der Index-Seite werden alle vorhandenen Module angezeigt. Zusätzliche Module können nachträglich erworben werden. Mit Klick auf das Modul wird die Applikationsmaske des Moduls geöffnet. Die Applikationsmasken aller alphanummerischen Module sind identisch aufgebaut. Der Aufbau wird nun beschrieben.

![Qooxdoo Index Seite](/uploads/v6/de-allgemein/vr6-index-site.png "Abbildung 1: Index Seite") 


## Applikationsmaske

Die Gleichheit der Applikationsmasken für alle alphanumerischen Module ermöglicht eine einheitliche und intuitive Bedienung.
 
![Qooxdoo Applikationsmaske Übersicht](/uploads/v6/de-allgemein/vr6-applikationsmaske-uebersicht.jpg "Abbildung 2: Applikationsmaske Übersicht") 

Mit dem Öffnen eines Moduls (z.B. „Wartung“) wird die Applikationsmaske mit einigen Statistiken aufgemacht. Die Abbildung 2 zeigt die geöffnete Applikationsmaske mit Grafiken zur „Anzahl Objekte“ und „eingefügten Objekten - 2 Wochen“. Den Zeitraum können Sie über der Grafik mit Klick auf den Pfeil verändern.

Die links dargestellten Buttons sind die Objekte, die für das Modul relevant sind. Mit Klick auf einem dieser Buttons wird die jeweilige Objektgruppe aufgemacht und die Applikationsmaske sieht aus, wie auf Abbildung 3 dargestellt. 
Dieser grundsätzliche Aufbau ist bei allen Modulen gleich. Sie können daher diese Dokumentation zur Erklärung nutzen, auch wenn Sie das Modul nicht besitzen. Die Applikationsmaske wird in einige Bereiche unterteilt. Die einzelnen Bereiche sind im Anschluss näher beschrieben.

In diesem Beispiel ist das Modul Wartung geöffnet und die Objektgruppe Anlagen ausgewählt. Wir haben auf den Button Anlagen ganz oben in dem Navigationsbereich geklickt, um die Objekte abzurufen.

## Aufbau

Der Aufbau der Applikationsmaske wird auf Abbildung 3 gezeigt. Wir haben die Applikationsmaske in 4 Bereichen unterteilt. Diese Bereiche stellen verschiedene Aspekte der VisionR-Logik dar.

Wir werden die Bereiche und die beinhalteten Komponenten im nächsten Kapitel im Detail betrachten. Die Bereiche sind für alle Module gleich definiert, wobei die Daten aus dem jeweiligen Modul angezeigt werden. 

![Qooxdoo Applikationsmaske Funktionsbereiche](/uploads/v6/de-allgemein/vr6-applikationsmaske-funktionsbereiche.jpg "Abbildung 3: Applikationsmaske Funktionsbereiche") 

> **Bemerkung:** Einige Ikonen aus der Funktionsleiste sind modulspezifisch oder beziehen sich auf mehrere Module und werden nur in der Leiste der entsprechenden Module erscheinen. Diese spezifischen Funktionen werden in dem jeweiligen Handbuch des Moduls beschrieben.

Die Bereiche werden nun kurz beschrieben: 

•	**Navigation / Objekte** - Hier werden die Modulobjekte aufgelistet. Mit Klick auf einem Button aus diesem Bereich werden die Objekte in der Tabelle angezeigt und stehen zur Bearbeitung zur Verfügung.

•	**Baumstruktur / Filter** - In der Baumstruktur wird die hierarchische Struktur des Moduls angezeigt. Sie können in dieser Struktur die Objekte aus jeder Ebene aufrufen und mehrere Ebenen kombinieren. Daneben gibt es Filter, mit denen sie Daten (z.B. nach Standort / Gebäude / Stock / Raum / etc.) gefiltert darstellen können. Diese Struktur hat eine eigene Funktionsleiste mit spezifischen Funktionen.

•	**Tabelle** - In der Tabelle werden die Daten angezeigt und bearbeitet. Jede Zeile entspricht einem Objekt. Die Bearbeitung erfolgt direkt in der Tabelle oder in dem Formularfenster. Dieses Formularfenster wird angezeigt, wenn Sie ein Objekt anklicken. Sie können einzelne oder mehrere Objekte bearbeiten.

•	**Leiste** - In dieser Leiste sind die Funktionen, die auf die Objekte anzuwenden sind, sowie auch die Systemfunktionen und Systemmodule.

# Maskenlayout

Das Layout der Applikationsmaske ist auf Abbildung 3 dargestellt. Für unser Beispiel haben wir das Modul „Wartung“ ausgewählt. 

Die Tabelle, in der die Bearbeitung der Daten stattfindet, der größte Bereich des Layouts. Die einzelnen Bereiche sind mit Linien getrennt. Sie können die Größe der Bereiche durch das Ziehen der Trennlinien anpassen. Wenn Sie den Mauszeiger über eine Trennlinie halten, wird diese Linie fett und Sie können diese in eine gewünschte Richtung ziehen. Die Abbildung 4 zeigt eine hervorgehobene Linie. Die Pfeile zeigen welche Trennlinien angepasst werden können.

![Qooxdoo Applikationsmaske / Trennlinien](/uploads/v6/de-allgemein/vr6-applikationsmaske-layout.jpg "Abbildung 4: Applikationsmaske / Trennlinien")  

Wenn der Zeiger über einer vertikalen Trennlinie ist, können Sie mit Klick diese Linie ziehen oder verschieben. Wenn Sie auf die horizontale Linie klicken, wird der Kopf (Überschriften / Index / Logo / Profile / Profile-Einstellungen) ausgeblendet. Die Linie bleibt ganz oben erhalten und mit erneutem Klick wird der Kopf wieder eingeblendet.

Für die Abbildung 4 wurde die Applikationsmasken des Moduls **Verträge** gewählt, um die Ähnlichkeit des Aufbaus der einzelnen Module zu verdeutlichen. Nur die Objekte, die zu bearbeiten / verwalten sind, sind unterschiedlich.


## Navigation

Der Bereich **Navigation**, auf der linken Seite des Layouts, ist der Bereich, wo die Hauptobjekte des Moduls zur Verfügung stehen. Mit Klick werden die Objekte in der Tabelle aufgelistet. Auf der Abbildung 4 ist die Applikationsmaske mit den Verträgen aus dem Modul **Verträge** dargestellt. Alle Objekte können in der Tabelle alphanumerisch direkt bearbeitet, oder einzeln oder mehrfach in der Formularansicht bearbeitet werden.


## Baumansicht

In der Baumansicht werden die Modulobjekte in einer hierarchischen Struktur dargestellt. Dieser Bereich beinhaltet auch zwei Ansichtsmöglichkeiten, aus denen Sie über Registerkarten wählen können. Das ![Home Ikone](/uploads/v6/de-allgemein/vr6-home-ikone.jpg "Home Ikone") Symbol zeigt alle Objekttypen hierarchisch. Dabei werden alle Objekte des Moduls, die zu der ausgewählten Kategorie gehören, aufgelistet - die Darstellung in dem Baum erfolgt nach dem Objekttyp und seinen Untertypen - wie auf Abb. 5 gezeigt.

![Qooxdoo Applikationsmaske - Baumansicht - nach Typ](/uploads/v6/de-allgemein/vr6-applikationsmaske-baum.jpg "Abbildung 5: Applikationsmaske - Baumansicht - nach Typ")  

In diesem Beispiel werden alle technischen Anlagen und deren Untertypen aufgelistet. Mit Klick auf eine Zeile werden diese Objekte in der Tabelle angezeigt (mit STRG- bzw. UMSCHALT-Taste können Sie mehrere Typen auswählen).

Die andere Ansicht ist die Registerkarte mit dem Symbol ![Qooxdoo Applikationsmaske - Baumstruktur Ikone](/uploads/v6/de-allgemein/vr6-baumstruktur-ikone.jpg "Baumstruktur Ikone"). Diese Ansicht nutzt einen hierarchischen Filter und stellt die Daten dementsprechend dar. Die Filter wählen Sie über das Funktionsmenü ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu-button.jpg "Menü Button") der Baumansicht - unter **Hierarchien**. 
Abbildung 6 zeigt die technischen Anlagen, die nach Standort gefiltert sind. Bei der Filterung werden nur die Objekte angezeigt, die den Kriterien entsprechen - in dem Beispiel sind nur die Anlagen gelistet, die einem Gebäude bzw. Standort zugeordnet sind. Alle anderen werden nicht angezeigt.
 
![Qooxdoo Applikationsmaske – Baumansicht](/uploads/v6/de-allgemein/vr6-applikationsmaske-baum2.jpg "Abbildung 6: Applikationsmaske – Baumansicht")

Dazu gibt es eine eigene Suchleiste, die auf allen Objektebenen des Moduls nutzbar ist. So können Sie nicht nur mit den Objekten selbst, sondern auch mit den Objekttypen, Kombinationen aus Objekttypen, Objektebenen, Filtern, gefilterten Daten etc. arbeiten.


## Tabelle

Die Tabelle ist der Bereich, in dem die Bearbeitung der Daten erfolgt. Wenn eine Objektgruppe aus dem Navigationsbereich ausgewählt ist, werden die Objekte aus der Datenbank in der Tabelle angezeigt. Jede Zeile in der Tabelle entspricht einem Objekt, dessen Eigenschaften in den sichtbaren Spalten angezeigt werden. Die Zellen der Tabelle können Sie direkt mit Doppelklick bearbeiten bzw. ansehen, falls die Zelle (entspricht einer Objekteigenschaft) lesbar ist. Sonst erfolgt die Bearbeitung in der Formularansicht. Die Ansicht rufen Sie mit Klick auf  `Bearbeiten` in dem Funktionsmenü  ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu-button.jpg "Menü Button") auf. In der Tabelle können die Daten nach bestimmten Eigenschaften durch Klick auf die Überschrift der Spalte sortiert werden. Zusätzlich stehen mehrere Tabellen-Funktionen zur Verfügung. Diese Funktionen sind in der Leiste über der Tabelle sichtbar – sehen sie den gekennzeichneten Bereich auf Abbildung 3:

Es gibt ein zusätzliches Dropdown-Menü mit Ansichts-/Bearbeitungsfunktionen über der Tabelle rechts oben. Abbildung 7 zeigt die Tabelle mit den beschriebenen Bereichen.

![Qooxdoo Applikationsmaske – Tabellenbereich](/uploads/v6/de-allgemein/vr6-applikationsmaske-tabelle.jpg "Abbildung 7: Tabellenbereich")

Über der Tabelle sind die Ansichtsfunktionen, mit denen Sie die Darstellung der Daten ändern. Wenn Sie den Mauszeiger über einen Button halten, wird durch eine kurze Info angezeigt, was hinter dem Button steckt. Die Ansichten sind wie folgt definiert:

•	  ![Qooxdoo Applikationsmaske - Menü Tabellenansicht](/uploads/v6/de-allgemein/vr6-button-tabellenansicht.jpg "Menü Button Tabellenansicht") **Tabellenansicht** - wenn diese Registerkarte aktiv ist, werden die Daten in tabellarischer Form dargestellt, wie auf Abbildung 7 gezeigt.

•	  ![Qooxdoo Applikationsmaske - Menü Button Seitenansicht](/uploads/v6/de-allgemein/vr6-button-seitenansicht.jpg "Menü Button Seitenansicht") **Seitenansicht** - mit Aktivierung dieser Ansicht werden die Daten in Seiten angezeigt. Die Objekte sind dann in einer Liste dargestellt. Die Abbildung 8 zeigt die Verträge aus der Abbildung 7 in Seiten.

![Qooxdoo Applikationsmaske – Tabellenbereich in Seitenansicht](/uploads/v6/de-allgemein/vr6-applikationsmaske-tabelle-seiten.jpg "Abbildung 8: Tabellenbereich in Seitenansicht")

Über der Liste sind die Funktionen dieser Ansicht. Links können Sie auswählen, wie viele Objekte pro Seite angezeigt werden. Daneben ist die Sortierung - auf der Abbildung ist nach “Name, Vertrags-ID“ geordnet. In der Mitte ist die aktuelle Seite angezeigt und rechts sind die Navigationsknöpfe (Vorwärts, Rückwärts, erste bzw. letzte Seite).

In dieser Ansicht können Sie ein Objekt mit Klick auf die Zeile auswählen oder mit Halten der STRG-Taste und Klick auf die gewünschten Zeilen mehrere Objekte auswählen. Dann können Sie bestimmte Funktionen / Bearbeitungsvorgänge mehrfach (für mehrere Objekte gleichzeitig) ausführen. Die ausgewählten Objekte werden markiert. Die folgende Abbildung 9 zeigt ausgewählte Objekte mit eingeschalteter Vorschau. Die Vorschau schalten Sie mit dem Button ![Qooxdoo Applikationsmaske - Info](/uploads/v6/de-allgemein/vr6-button-info.jpg  "Ifno") rechts über der Tabelle ein. Wenn Sie ein Objekt auswählen, wird das Vorschaufenster angezeigt. Wenn Sie mehrere Objekte ausgewählt haben, wird die Info von dem Objekt angezeigt, über dem der Mauszeiger steht.

![Qooxdoo Applikationsmaske – Seitenansicht mit einigen ausgewählten Objekten und eingeschalteter Vorschau](/uploads/v6/de-allgemein/vr6-applikationsmaske-tabelle-seiten2.jpg "Abbildung 9: Seitenansicht mit einigen ausgewählten Objekten und eingeschalteter Vorschau")

•	  ![Qooxdoo Applikationsmaske - Menü Kachelansicht](/uploads/v6/de-allgemein/vr6-button-kachelansicht.jpg "Menü Button Kachelansicht") **Kachelansicht** - die Daten werden als Kacheln angezeigt. Das Auswählen erfolgt wie bei der Listenansicht. Die Bearbeitung erfolgt in beiden Fällen über das Formular. Die folgende Abbildung (Abb. 10) zeigt dieselben Verträge in Kachel-Ansicht.

![Qooxdoo Applikationsmaske – Kachelansicht der Verträge](/uploads/v6/de-allgemein/vr6-applikationsmaske-tabelle-kacheln.jpg "Abbildung 10: Kachelansicht der Verträge")

Die Wartungsverträge aus dem Gebäude 001 in München (sehen Sie die Baumstruktur links) werden als Preview dargestellt.

Neben den Ansichtsbuttons ist die Objektebene angezeigt, auf der wir uns befinden. In unserem Beispiel aus der Abbildung 7 sind folgende Verträge dargestellt: **Wartung -> Vertrag -> Deutschland -> MUC01-München**.

Das Funktionsmenü steht rechts über der Tabelle, wie auf Abbildung 7 dargestellt. Dieser Bereich besteht aus den folgenden Buttons:

•	  ![Qooxdoo Applikationsmaske - Info](/uploads/v6/de-allgemein/vr6-button-info.jpg  "Ifno") Objektvorschau ein/ausschalten - mit diesem Button schalten Sie die Objektvorschau ein und aus. Wenn sie eingeschaltet ist, werden Objektinformationen in einer Blase direkt über der Tabelle angezeigt, wenn ein Objekt ausgewählt ist. Wenn mehrere oder keine Objekte ausgewählt sind, erscheinen die Objektinformationen, wenn sich der Mauszeiger über einem Objekt befindet. 

•	  ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-baumstruktur-ikone.jpg "Menü Button") **Funktionsmenü** - in diesem Menü sind alle Objektoperationen beinhaltet. Auf der Tabellenebene sind diese Neu, Ansehen, Bearbeiten, Kopieren, Löschen, Archivieren.

>**Bemerkung:** Diese Ikone steht überall für das Funktionsmenü. In der Formularansicht sind diese Funktionen anders als hier, da sie sich auf das aufgemachte Objekt beziehen.

Die Funktionen, die im Funktionsmenü verfügbar sind, können Sie auch mit Rechtsklick aufrufen. So können Sie auf dieselben Funktionen wie im Funktionsmenü zugreifen.

•	  ![Qooxdoo Applikationsmaske - Objekteigenschaften ein- und ausschalten](/uploads/v6/de-allgemein/vr6-button-objekteigenschaften_ein_aus.jpg "Objekteigenschaften ein- und ausschalten") **Objekteigenschaften ein- und ausschalten** - mit Klick auf diesen Button wird die Liste mit allen Objekteigenschaften (die Spalten in der Tabelle) angezeigt. Sie können in dieser Liste alle vorhandenen Objekteigenschaften ein- bzw. ausschalten. Die angeklickte Spalte wird in der Tabelle angezeigt bzw. ausgeblendet. Die folgende Abbildung zeigt die Liste für unsere Testverträge.

![Qooxdoo Applikationsmaske - Objekte ein- und ausschalten](/uploads/v6/de-allgemein/vr6-applikationsmaske-objekte_ein_aus.jpg "Applikationsmaske - Objekte ein- und ausschalten")

>**Bemerkung:** Eine andere Möglichkeit die Objekteigenschaften ein- bzw. auszuschalten besteht über das Objektmenü, das mit der rechten Maustaste aufrufbar ist. Der unterste Eintrag 'sichtbare Eigenschaften' zeigt sowohl alle Eigenschaften des Objekts, als auch die referenzierten Datenobjekte, die mit diesem Objekt verknüpft sind. Die Referenzen können durchgegangen werden und deren Eigenschaften in der Tabelle durch Mausklick sichtbar geschaltet werden. Eigenschaften über mehrere Referenzen (Objektpfade) können in der Tabelle als zusätzliche Spalten angezeigt werden.

>**Beispiel:** Wir wollen das Land und die Stadt des Auftraggebers sichtbar machen. Dafür können wir folgenden Pfad einschalten: **Vertrag -> Auftraggeber -> Stadt -> Name und Vertrag->Auftraggeber->Land->Name->Deutsch**. Da alle Definitionen und Felder in VisionR übersetzbar sind ist hier **Deutsch** auszuwählen (ggf. die gewünschte Sprache).
{.is-info}

Die Bearbeitung der Objekte und andere Funktionen wie Neues Objekt erstellen, Objekt löschen etc. sind in diesem Dokument separat beschrieben.

## Formular

Die Formularansicht ist die Ansicht, in der die Objektdaten in einem Fenster in Form eines Formulars dargestellt sind. So werden die Eigenschaften eines oder mehrerer Objekte bearbeitet. Das Formular rufen Sie ab, wenn Sie ein neues Objekt erstellen oder ein vorhandenes bearbeiten. Auf der Abbildung 11 ist ein Objekt zur Bearbeitung aufgemacht.

![Qooxdoo Applikationsmaske – Formular](/uploads/v6/de-allgemein/vr6-applikationsmaske-formular.jpg "Abbildung 11: Formular")

In dem Formular können Sie den Objektvorschau-Bereich ein- und ausschalten. Mit Klick auf das x oben rechts wird dieser Bereich zugemacht. Über dem Menü mit den Funktionen ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-baumstruktur-ikone.jpg "Menü Button")  können Sie die Vorschau, unter dem Punkt **Übersicht** einschalten. Das Menü ist auf der Abbildung 12 gezeigt.
 
![Qooxdoo Applikationsmaske – Funktionsmenü des Formulars](/uploads/v6/de-allgemein/vr6-applikationsmaske-formular2.jpg "Abbildung 12: Funktionsmenü des Formulars")

Die Funktionen sind in 3 Kategorien unterteilt - **Aktionen, Ansicht, Übersicht.** Die **Aktionen** sind mit den Objekten verbunden. Die **Ansichten** beinhalten die Konfiguration der sichtbaren Felder und deren Anordnung in dem Formular. Diese Ansichten sind anpassbar. Wie diese Ansichten zu definieren und zu speichern sind, wird im nächsten Kapitel beschrieben. Unter den Punkt **Übersicht** schalten Sie die gespeicherten Vorschauen um. Die Vorschau wird in dem Formular über den Objektdaten platziert. Es gibt einige vordefinierten Vorschaumuster, die bestimmte Informationen aus der Datenbank in dem Vorschaubereich in Form eines „Kurzberichts“ darstellen. Die Anzeige im Vorschaubereich kann angepasst werden. Zusätzliche Vorschauvarianten können jederzeit hinzugefügt werden. Die Vorschau dient als vereinfachte Darstellung von Objektinformationen. Beispielhaft wird im Formular bei der Bearbeitung eines Raums, der Standort mit den wichtigsten Raumdaten angezeigt, soweit diese eingegeben sind. Die folgende Abbildung 13 zeigt das Formular für ein Objekt mit eingeschalteter Vorschau, das auch grafisch vorhanden bzw. verknüpft ist. Die Objektvorschau ist in dem Kapitel Ansichten, Punkt Objektvorschau beschrieben.

![Qooxdoo Applikationsmaske – Formularansicht mit eingeschalteter Vorschau](/uploads/v6/de-allgemein/vr6-applikationsmaske-formular3.jpg "Abbildung 13: Aufzug mit eingeschalteter Vorschau - die Geometrie wird als Vorschaubild angezeigt")

Die Formularansicht beinhaltet alle Eigenschaften des Objekts. Diese sind als Eingabefelder in mehrere Registerkarten unterteilt. Ganz links stehen immer die Haupteigenschaften, die zu diesem Objekttyp gehören. Einige Registerkarten kommen aus den verknüpften Modulen. Wenn es eine Verbindung zwischen zwei Module gibt, die miteinander referenziert sind, werden die Eigenschaften in der dazugehörigen Registerkarte angezeigt. Wenn zum Beispiel eine Verknüpfung zwischen **Kontakte** und **Umzüge** besteht, wird eine Registerkarte Umzüge in dem Formular bei Bearbeitung / Erstellung einer Person oder eines Unternehmens oder eines allgemeinen Kontakts angezeigt.

In der Formularansicht sind alle Eigenschaften für das Objekt vorhanden. Wenn Sie ein bestimmtes Feld finden möchten, steht dafür das Suchfeld über den Vorschaubereich zur Verfügung. Mit Klick auf das Ergebnis wird das System Sie auf das Feld leiten.

>**Bemerkung:** Die letzte Registerkarte in der Formularansicht ist bei allen Objekten für die Berechtigungen reserviert. Sie können die Zugriffsberechtigungen in dieser Registerkarte ansehen bzw. bearbeiten.

Mit Klick auf das Vorschaubild, können Sie direkt auf das grafische Objekt zugreifen, falls das Bild mit einem vorhandenen Objekt verknüpft ist. Es wird ein neues Fenster mit der Zeichnung aufgemacht. Der Fokus ist auf dem ausgewählten Objekt und die Informationsblase mit den wichtigsten Daten wird angezeigt. Sie können die Layergruppen umschalten, um verschiedene Darstellungen und Informationen zu bekommen. Die folgende Abbildung 14 zeigt dieses Fenster mit dem ausgewählten Aufzug.
 
![Qooxdoo Applikationsmaske – Der ausgewählte Aufzug auf dem Plan](/uploads/v6/de-allgemein/vr6-applikationsmaske-formular4.jpg "Abbildung 14: Der ausgewählte Aufzug auf dem Plan")

Die Funktionen - Umschaltung der Layergruppen, gespeicherte Ansichten aufrufen, Plan / Ausschnitt exportieren, drucken etc. - sind mit Klick auf dem Button ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-baumstruktur-ikone.jpg "Menü Button")  links aufrufbar. Mit Klick auf den Button ![Qooxdoo Applikationsmaske - Menü Button Bearbeiten](/uploads/v6/de-allgemein/vr6-button-bearbeiten.jpg "Menü Button Bearbeiten") wird der Plan zur Bearbeitung aufgemacht. Sie können dann die Zeichnung direkt bearbeiten, wie in dem grafischen VisionR- Modul.

# Bearbeitung von VisionR Objekten

Die Bearbeitung von VisionR Objekten erfolgt in der Formularansicht oder direkt in der Tabelle. Sie können die Daten direkt bearbeiten, wie in Excel, indem Sie auf die Zelle in der Tabelle klicken. Diese Zelle wird dann zur Bearbeitung aufgemacht und Sie können die Daten eingeben bzw. auswählen oder bearbeiten.
Es gibt einige Eingabefelder-Typen, von denen die Eingabe abhängig ist. Insgesamt unterscheiden wir 4 Eingabefelder-Typen. Diese sind wie folgt beschrieben:

•	**Einfaches Eingabefeld** - in diesen Feldern sind die Eingaben direkt zu machen. Diese Felder sind im Prinzip weiß und Sie können direkt Texte / Zahlen / Daten / Beträge etc. eingeben. Beispiel ist ein Person - Vornamefeld. Sie geben direkt den Vorname als Zeichenkette ein.

> **Bemerkung:** Die einfachen Eingabefelder können unterschiedliche Datentypen erfordern und ggf. wird die Eingabe bei falschem Format nicht angenommen. Sie kriegen eine Benachrichtigung mit dem richtigen Format - zum Beispiel erfordert ein Datum-Feld ein Datum aus dem Kalender in der Form JJJJ-MM-TT hh.mm.ss.000. In diesem Feld wird auch ein Kalender zur Auswahl gestellt. Diesen rufen Sie mit Klick auf das Symbol ganz rechts in dem Feld. Der Kalender wird aufgemacht und Sie können das Datum auswählen. 

•	**Einfaches Eingabefeld mit Übersetzungsmöglichkeit** - diese Felder sind einfache Felder, die übersetzt werden können. Im Prinzip wird das System komplett auf Deutsch und Englisch zur Verfügung gestellt. Es kann an jeder Stelle, an der ein Feld in anderen Sprachen übersetzt werden kann, eine Übersetzung vorgenommen werde. Das komplette System ist also internationalisierbar. Nicht nur die Namen der Felder können übersetzt werden, sondern auch die Daten selbst. So können wir zum Beispiel in der deutschsprachigen Applikationsmaske den Bodenbelag-Typ “Teppich“ eingeben. Wenn wir dann auf Englisch umschalten, würde “floor surface -> carpet“ stehen. Falls Sie dieses Feld in anderer Sprache eingeben möchten, können Sie mit dem Button ![Qooxdoo Sprache Ikone](/uploads/v6/de-allgemein/vr6-icon-sprache.png "Sprache Ikone"), rechts in dem Eingabefeld, die Tabelle mit den freigeschalteten Sprachen aufrufen und dort für die gewünschten Sprachen die Übersetzung eingeben. Falls ein Feld oder Feldname in einer Sprache nicht übersetzt worden ist, wird das Feld in der voreingestellten Sprache (Deutsch/Englisch) angezeigt.

•	**Einfache Auswahllisten** - die einfachen Auswahllisten beinhalten vordefinierte Objekte und Sie können aus diesen Objekten wählen. Diese Objekte sind in den meisten Fällen so vordefiniert, dass keine Änderungen vorgenommen werden sollen. Beispiel dafür ist das Feld MwSt. - die Prozente sind vordefiniert. Auch das Feld Währung oder das Feld Status sind Beispiele. Falls Anpassungen gewünscht sind, können diese vor der Inbetriebnahme des Systems oder ggf. später durch den Administrator realisiert werden.

Zu dieser Gruppe zählen auch die **Ja / Nein** Eingaben.

> **Bemerkung:** Einige dieser Felder sind standardmäßig auf leer gesetzt - d.h. sie sind weder wahr noch falsch

•	**Eingabe von Referenzobjekten** - Einige Felder sind für die Eingabe von vorhandenen Objekten ausgelegt. Mit Klick auf das Feld wird die Liste mit den Objekten aufgemacht, die an dieser Stelle ausgewählt werden können. Diese Liste ist eine kleinere Version der großen Tabelle, die diese Referenzobjekte beinhaltet.

Sie können aus der angezeigten Liste das Objekt direkt auswählen oder die Liste vergrößern, falls sie zu lang ist, indem Sie die Ränder ziehen. Dann können Sie die Spaltenbreite anpassen, Spalten ein- und ausschalten etc., damit Sie das Objekt leichter finden.

Falls diese Auswahl schwer zu treffen ist, können Sie die Tabelle in einem separaten Fenster aufmachen und das gewünschte Objekt, wie gewohnt, finden.

>**Beispiel:** Wir möchten für eine Wartungstätigkeit die Wartungsfirma eingeben. Mit Klick auf das Feld werden alle Kontakte aufgelistet, aber die Auswahl des Unternehmens ist in der langen Liste schwer. Deshalb können wir für jedes Feld von diesem Typ im Auswahlmenü den Button `Auswählen` klicken. Dabei wird die Liste in einem neuen Fenster als Tabelle mit hierarchischer Struktur angezeigt. So können wir die Daten schnell filtern oder nach einem bestimmten Objekt suchen. Die Dropdown-Ansicht ist eine Tabellenansicht. Abbildung 15 zeigt eine Auswahlliste mit den hinterlegten Unternehmen, in der wir die Wartungsfirma für unseren Aufzug finden möchten.
{.is-info}

![Qooxdoo Liste mit Referenzobjekten, die zur Auswahl stehen](/uploads/v6/de-allgemein/vr6-formular-referenzliste_auswahl.png "Abbildung 15: Liste mit Referenzobjekten, die zur Auswahl stehen") 

> **Tipp**: Sie können die Auswahlliste direkt filtern, indem Sie in dem Feld schreiben. Die Daten werden direkt nach Ihren Angaben gefiltert. Sie können die gefilterten Ergebnisse in der Auswahlliste auch sortieren, indem Sie die Spaltenüberschrift anklicken.
>{.is-info}

## Erstellen

Das Erstellen von VisionR-Objekten erfolgt über das Funktionsmenü ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu-button.jpg "Menü Button"), indem Sie auf ![Qooxdoo Applikationsmaske - Menü Button Neu](/uploads/v6/de-allgemein/vr6-button_neu.png "Menü Button Neu") `Neu... ` klicken. Ein neues Fenster wird geöffnet und die Objekte, die zur Auswahl stehen, werden in einer hierarchischen Struktur angezeigt. Wählen Sie den gewünschten Objekttyp bzw. gehen Sie in der Hierarchie tiefer und finden Sie ihn. 


Die folgende Abbildung (Abb. 16) zeigt ein Beispiel - wir erstellen einen neuen Prüfvertrag vom Typ Wartungsvertrag für eine technische Anlage.
![Qooxdoo Neues Objekt über das Funktionsmenü erstellen](/uploads/v6/de-allgemein/vr6-neues_objekt_1.png "Abbildung 16: Neues Objekt über das Funktionsmenü erstellen")

Falls die hierarchische Liste mit den möglichen Objekten zu lang ist, können Sie in der Suchleiste nach dem gewünschten Objekttyp suchen.

Eine andere Möglichkeit ist die Erstellung über das Objektmenü. Dieses Menü rufen Sie mit der rechten Maustaste auf - Abb. 17. Um ein neues Objekt zu erstellen, gehen Sie auf `Neu` und halten Sie den Mauszeiger über den Eintrag, um die Untertypen zu sehen, dann halten Sie den Zeiger auf diesen Untertypen etc., bis Sie den gewünschten Objekttyp gefunden haben. Anschließend klicken Sie auf das Objekt, das Sie erstellen möchten.

![Qooxdoo Neues Objekt über das Funktionsmenü erstellen](/uploads/v6/de-allgemein/vr6-neues_objekt_2.png "Abbildung 17: Neues Objekt erstellen über Objektmenü")

Die Abbildung basiert sich auf den Beispielen oberhalb. Da wir an dieser Stelle die **Wartungsverträge** betrachten, werden hier die Wartungsverträge und ihre Untertypen zur Auswahl angezeigt. Sie können ein Objekt von jedem Typ, d.h. von dem Haupttyp bis zu dem untersten Untertyp, erstellen.

## Bearbeiten

Die Bearbeitung erfolgt ähnlich wie die Erstellung, mit dem Unterschied, dass ein vorhandenes Objekt aufgemacht wird. Sie können die Objekteigenschaften in der Tabelle direkt oder in der Formularansicht bearbeiten. Wenn Sie ein Objekt bearbeiten, müssen Sie am Ende den Bearbeitungsvorgang speichern.

Die Bearbeitung erfolgt folgendermaßen: Objekt auswählen, dann auf den Funktionsbutton ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu-button.jpg "Menü Button") klicken, indem Sie auf ![Qooxdoo Applikationsmaske - Menü Button Bearbeiten](/uploads/v6/de-allgemein/vr6-button-bearbeiten.png "Menü Button Bearbeiten") `Bearbeiten` gehen. Das Objekt wird dann zur Bearbeitung in der Formularansicht (Abb. 11) angezeigt.

Am Schluss müssen Sie die Änderungen speichern - mit Klick auf den Button `Speichern`. Falls alle Pflichtfelder mit Daten gefüllt sind, wird das Objekt gespeichert, sonst werden Sie darauf hingewiesen, dass einige Pflichtfelder immer noch leer sind.

> **Bemerkung:** Sie können die Formularansicht schließen ohne alle Pflichtfelder einzugeben, indem Sie das Formular einfach über dem “X“ oben rechts schließen. So werden die Daten, wie an der Stelle eingegeben, gespeichert.

## Ansehen

Das Ansehen von Objekten ist ein Abruf der Objekteigenschaften in Formularansicht.  Im Unterschied zum Bearbeiten sind die Felder jedoch schreibgeschützt.

Das Ansehen erfolgt folgendermaßen: Objekt auswählen und auf den ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu-button.jpg "Menü Button") ` Funktionsbutton` klicken, in diesem ![Qooxdoo Applikationsmaske - Menü Button Suchen](/uploads/v6/de-allgemein/vr6-button_suchen.png "Menü Button Suchen") `Ansehen` auswählen. Das Objekt wird dann im Lesemodus zum Anschauen in der Formularansicht angezeigt.

## Löschen

Sie löschen ein oder mehrere Objekte über das Funktionsmenü. Wählen Sie das gewünschte Objekt und klicken Sie auf den Button ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu-button.jpg "Menü Button") und dann auf ![Qooxdoo Applikationsmaske - Menü Button Löschen](/uploads/v6/de-allgemein/vr6-button_loeschen.png "Menü Button Löschen") `Löschen`.

Das ausgewählte Objekt wird gelöscht. Sie müssen den Löschvorgang davor bestätigen.

Um mehrere Objekte gleichzeitig zu löschen, wählen Sie die Objekte aus der Tabelle mit Hilfe der `STRG`-Taste oder `UMSCHALTTASTE` aus, ähnlich wie in MS Excel, und dann klicken Sie auf ![Qooxdoo Applikationsmaske - Menü Button Löschen](/uploads/v6/de-allgemein/vr6-button_loeschen.png "Menü Button Löschen").

## Kopieren

Sie können ein oder mehrere Objekte kopieren. In diesem Fall werden die neu erstellten Objekte mit neuer ID-Nummer versehen und alle anderen Objekteigenschaften werden kopiert (je nach Modul und Logik der Verknüpfungen).

Bei dem Kopiervorgang wird das erste Objekt, das kopiert wurde, in der Formularansicht angezeigt. Falls Sie mehrere Kopien gemacht haben, werden die restlichen Kopien oben links angezeigt. Mit den Pfeilen können Sie die Objekte durchstöbern. Die Abbildung 18 zeigt das Kopieren (3 Kopien) eines Prüfvertrags. In der Formularansicht steht oben links die Anzahl der Objekte.

![Qooxdoo Mehrfaches Kopieren eines Objektes](/uploads/v6/de-allgemein/vr6-kopieren_mehrfach.png "Abbildung 18: Mehrfaches Kopieren eines Objektes")

Falls Sie mehrere Objekte bearbeiten, bzw. speichern, werden Sie nach Änderung einer Objekteigenschaft (Eingabefeld) gefragt, ob diese Änderung auch für alle geöffneten Objekten übertragen werden soll.

## Datentypen

In VisionR gibt es unterschiedliche Datentypen, die eingegeben werden bzw. zur Auswahl stehen. Im Allgemeinen unterscheiden wir folgende Datentypen:

### Einfache Zeichenketten mit und ohne Übersetzungsmöglichkeit

In den Feldern, die diesen Eingaben erwarten, können Sie beliebige Textketten eingeben. Falls rechts das ![Qooxdoo Applikationsmaske - Menü Sprachen](/uploads/v6/de-allgemein/vr6-icon-sprache.png "Menü Sprachen") Welt-Zeichen angezeigt ist, kann das Feld auch übersetzt werden. Mit Klick auf dieses Zeichen wird die Sprachentabelle angezeigt und Sie können für die freigeschalteten Sprachen die Übersetzung vornehmen.

### Einfache Auswahllisten

Diese Auswahllisten sind mit vordefinierten Werten versehen. Sie können mit Klick auf das Feld den gewünschten Wert auswählen. Diese Listen sind sehr selten zu ändern, deshalb betrachten wir diese als einfache Auswahllisten. Sie können neue Einträge zum Auswählen erstellen, ähnlich wie bei der Erstellung von Objekten innerhalb des VisionR - Systems.

### Datum und Zeit

Die Felder, die als Eingabe ein Datum und / oder eine Zeit erwarten, sind mit einem Kalender versehen – Abb. 19. Den Kalender rufen Sie mit Klick auf den Button ![Qooxdoo Applikationsmaske - Button Kalendar](/uploads/v6/de-allgemein/vr6-button_kalendar.png "Button Kalendar")  der ganz rechts in dem Feld steht, auf.

![Qooxdoo Applikationsmaske - Kalender zum Datumauswahl](/uploads/v6/de-allgemein/vr6-datum_auswahl_kalendar.png "Abbildung 19: Kalender zum atumauswahl")

Sie können das Datum auch direkt als Text in dem Feld eingeben, aber Sie müssen das Format beachten (TT.MM.JJJJ). Falls Sie ein ungültiges Datum eingeben, wird das richtige Datum daraus berechnet, z.B. - falls 32.03.2016 eingegeben wird, wird das System es als 01.04.2016 erkennen.

Falls die Zeit angegeben werden soll, so ist sie in folgendem Format einzugeben: JJJJ-MM-TT hh.mm.ss.000.

> **Bemerkung:** Falls Datum und / oder Zeit - Daten importiert werden, sollen Sie auf die Formate achten

### VisionR - Objekte / Referenzobjekte

Diese Objekte werden an den Stellen verknüpft, wo Objekte als Eingabe gebraucht sind. Falls ein Feld ein Referenzobjekt als Eingabe erwartet, wird das ausgewählte Objekt an dieser Objekteigenschaft angehängt. So entsteht eine bidirektionale Verbindung zwischen den beiden Objekten, es ist jedoch jedes Objekt ist nur einmal in der Datenbank vorhanden und an dieser Stelle einfach verknüpft.

Wenn Sie auf ein Referenz-Feld klicken, werden die Objekte, die zur Auswahl stehen ggf. gefiltert, in einer Liste angezeigt. Die Liste wird unter dem Feld angezeigt und Sie können aus dieser Liste ein Objekt auswählen.

Falls die Liste zu lang ist, können Sie direkt im Feld schreiben und die Daten in der Liste werden sofort gefiltert. Dazu können Sie mit Klick auf dem Spaltenname die Liste oder sogar die schon gefilterte Liste sortieren. Die folgende Abbildung 20 zeigt ein Beispiel mit einigen eingegeben Buchstaben und einer Sortierung nach Name. In dem Beispiel suchen wir alle Objekte, die “brand“ beinhalten. 
![Qooxdoo Applikationsmaske - Eingabe vom Referenzobjekt mit Sortierung nach Name](/uploads/v6/de-allgemein/vr6-eingabe_referenzobjekt_bsp.png " Abbildung 20: Eingabe vom Referenzobjekt mit Sortierung nach Name")

Im Prinzip haben alle Felder, die als Eingabe ein Objekt erwarten, rechts in dem Feld den ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu_button_grau.png "Menü Button") Funktionsbutton, um die zur Verfügung stehenden Funktionen, die sich auf dieses Objekt beziehen, aufzuführen. Bemerken Sie, dass bei einigen Objekten nur bestimmte Funktionen zur Verfügung stehen - z.B. die Objekttypen sind vordefiniert und können nur angesehen oder ausgewählt werden. Andere Objekte, wie Kontakte, Verträge etc. können auch an der Auswahlstelle gleich erstellt werden, falls sie noch nicht vorhanden sind oder ggf. an der Auswahlstelle gleich bearbeitet werden.

Falls Sie direkt aus der Liste ein Objekt auswählen möchten, klicken Sie auf das Feld und die Liste wird angezeigt. Alternativ können Sie auf den kleinen Pfeil rechts klicken, um die Liste aufzuklappen. Mit Klick auf eine Zeile aus der Liste wird das Objekt festgelegt.

Die andere Möglichkeit ein Referenzobjekt anzugeben ist mittels der ` Auswählen ` -Funktion. Wählen Sie dafür die Option ` Auswählen ` aus dem Funktionsmenü ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu_button_grau.png "Menü Button"). Ein neues Fenster mit den zur Verfügung stehenden Objekten wird angezeigt. Die Anzeige der Daten in diesem Fenster ist gleich der Tabellenansicht von allen VisionR-Modulen. Links steht die Hierarchie und rechts stehen die Daten zur Auswahl, in tabellarischer Form dargestellt. Sie haben alle Funktionen zur Verfügung, um Ihre Auswahl zu treffen oder ggf. die Daten weiter zu bearbeiten. Die folgende Abbildung 21 zeigt ein Beispiel, wo wir das Gebäude einer technischen Anlage auswählen möchten.

![Qooxdoo Applikationsmaske - Eingabe von Referenzobjekt über Auswahl-Funktion](/uploads/v6/de-allgemein/vr6-eingabe_ref_objekt_auswahl_1.png "Abbildung 21: Eingabe von Referenzobjekt über Auswahl-Funktion")

> **Bemerkung:** In dieser Ansicht können Sie Objekte bearbeiten, erstellen, löschen etc. Falls die Auswahl sich auf ein Objekt bezieht, das auch grafisch vorhanden ist, ist die Option “Aus Zeichnung“ eingeblendet.

### Tabelle mit mehreren 	Referenzobjekten

Tabellen, die mehrere Referenzobjekte beinhalten können.

An diesen Stellen werden die mehrfachen Eingabefelder gesetzt, die mehrere Objekte beinhalten können. Das Feld ist eine verkleinerte Version der Tabelle, die aber alle Funktionen zur Verfügung stellt. In dieser Tabelle können Sie neue Objekte verknüpfen (das Objekt ist vorhanden und ist einfach zu verknüpfen - wie im vorherigen Schritt beschrieben) oder gleich erstellen und verknüpfen; vorhandene Objekte bearbeiten und ggf. löschen. Im Endeffekt ist dieses Eingabefeld ein mehrfaches Eingabefeld, wo Sie mehrere Objekte verknüpfen können.

Abbildung 22 zeigt ein Beispiel dafür. In dem Beispiel ist ein Aufzug-Datensatz aufgemacht und die mehrfachen Felder “Leistungen“ sowie auch “Verträge“ sind mit Objekten verknüpft.

![Qooxdoo Applikationsmaske - Mehrfache Eingabefelder](/uploads/v6/de-allgemein/vr6-mehrfache_eingabe_1.png "Abbildung 22: Mehrfache Eingabefelder")

Da hier jeder Vertrag einige Leistungen beinhaltet, können diese Leistungen für die betroffene Anlage direkt eingegeben bzw. verknüpft werden. Die Leistungen sind als mehrfaches Eingabefeld zu betrachten, da ein Vertrag mehrere Leistungen beinhaltet.

Rechts der Tabelle stehen die Buttons für die verschiedenen Ansichten (Kacheln, Liste, Tabelle etc.) und auch der Funktionsbutton ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu_button_grau.png "Menü Button"). Über diesen Button können Sie die Objekte auswählen, die hier verknüpft werden. Mit Klick auf `Hinzufügen` fügen Sie ein neues Objekt hinzu. Das neue Objekt wird direkt aufgemacht und Sie können es mit Daten befüllen. Mit Speichern erscheint das Objekt in der Tabelle.

Die Tabelle selbst bearbeiten Sie wie alle Tabellen im System. Es gibt keine Besonderheiten.

## Zusammenhang der Objekte

Ein wichtiger Punkt im VisionR ist der Zusammenhang der Objekte. Es wird zwar an mehreren Stellen Objekte verknüpft, aber nicht mehrmals erstellt. Diese Verknüpfung beschleunigt den Prozess und schützt vor mehrfacher Datenführung. Da aber einige Objekte an sehr unterschiedlichen Stellen verknüpft werden können, ist es wichtig, den Zusammenhang dieser Objekte gut zu verstehen. Ansonsten können zum Beispiel beim Löschen Objekte gelöscht werden, die an anderen Stellen auch verknüpft sind. Das System wird versuchen, so einen Vorgang nicht zu erlauben, trotzdem ist in einigen Fällen möglich. Der Zusammenhang ist deshalb ein wichtiger Punkt auf den sehr geachtet werden sollte.

Falls ein Objekt an einer Stelle verknüpft ist und von ihm bestimmte Funktionen / Berichte / andere Objekte abhängig sind, kann es nicht einfach gelöscht werden. Das System weist Sie darauf hin, dass zusammenhängende Objekte vorhanden sind und die Verknüpfung zu diesen zuerst entfernt werden soll. Erst nachdem alle Verknüpfungen entfernt wurden, kann das Objekt gelöscht werden.
 
# Zugriffsrechte auf Objektebene
Ein sehr wichtiger Teil des Systems sind die Zugriffsrechte. Die Zugriffsrechte können für jeden Benutzer, jede Gruppe von Benutzern und auf jeder Ebene angepasst werden. Für jedes Objekt im System gibt es eine spezielle Registerkarte in dem Formular, namens Zugriffsrechte - die letzte Registerkarte rechts. Die folgende Abbildung 23 zeigt, wie diese Registerkarte aussieht.

![Qooxdoo Applikationsmaske - Registerkarte mit den Zugriffsrechten](/uploads/v6/de-allgemein/vr6-formuar_zugriffe.png "Abbildung 23: Registerkarte mit den Zugriffsrechten ")

Die Verwaltung der Zugriffsrechte ist ähnlich wie bei Windows. Auf jeder Objektebene bis zu den Objekten selbst können die Zugriffsrechte angepasst werden. So können wir bestimmte Inhalte für bestimmte Benutzer oder Gruppen ausblenden oder nur zum Lesen oder Kopieren zur Verfügung stellen.

Auf dem Beispiel sind 3 Benutzergruppen zu sehen. Die Administratoren und die Benutzergruppe Jeder sind standardmäßig vorhanden. Die dritte Gruppe ist erstellt worden und hat alle Rechte für diese technische Anlage (im Beispiel - Personenaufzug), aber sie ist nicht der Besitzer. Der Besitzer ist in diesem Fall der Administrator.
Falls ein Häkchen aktiviert ist, darf der Benutzer bzw. die Benutzergruppe die aktivierten Operationen ausführen.

Über das Funktionsmenü ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu_button_grau.png "Menü Button") können Sie zusätzliche Gruppe hinzufügen bzw. vorhandene entfernen. Dann können Sie die Zugriffsrechte für diese Gruppe anpassen.

> **Bemerkung:** Sie müssen ausreichende Rechte haben, um neue Benutzergruppen zu definieren, bearbeiten und entfernen. Deshalb ist es zu empfehlen, diese Aufgabe Ihren Administrator zu überlassen.


# Funktionen
Im System VisionR sind zahlreiche Funktionen enthalten. In diesem Kapitel werden die allgemeinen Funktionen und eine Auswahl an spezifischen Funktionen beschrieben. Die Funktionen, die tiefere Systemkenntnisse benötigen, werden in diesem Dokument nicht beschrieben, sondern nach Bedarf von den Administratoren zur Verfügung gestellt. Die hier beschriebenen Funktionen stehen in der Leiste, die auf der Abbildung 3 gezeigt ist.


## Suchen

Die Suchfunktion ist standardmäßig eingeschaltet, kann aber ausgeschaltet werden - mit Klick auf den Button ![Qooxdoo Applikationsmaske - Menü Button Suchen](/uploads/v6/de-allgemein/vr6-button_suchen.png "Menü Button Suchen"). Das Suchfeld wird dann unten angezeigt bzw. ausgeblendet.

Die Suche verläuft nach bestimmten Kriterien, die voreingestellt sind. Sie müssen die Zeichenkette / das Objekt / die Referenz etc., nach der Sie suchen, eingeben und auf den Button ![Qooxdoo Applikationsmaske - Menü Button Suchen](/uploads/v6/de-allgemein/vr6-button_suchen.png "Menü Button Suchen") rechts drucken.

Dann werden die Ergebnisse unten in dem Arbeitsfenster angezeigt. Da im System sehr große Mengen von Daten existieren, ist es nicht immer effizient, nach der eingegebenen Zeichenkette in allen Eigenschaften (Feldern) zu suchen.

Wir können einige Sucharten unterscheiden:

### Einfache Suche

Sie nutzen die einfache Suche, wenn Sie direkt in dem Suchfeld einen Teil vom Namen oder Code oder den ganzen Namen bzw. Code des gesuchten Objekts schreiben. So können wir zum Beispiel nach Aufzügen innerhalb des links in der Baumstruktur ausgewählten Gebäudes 017 suchen, wie auf Abbildung 24 gezeigt.

![Qooxdoo Applikationsmaske - Einfache Suche - im Gebäude 017 in Berlin](/uploads/v6/de-allgemein/vr6-einfache_suche_bsp1.png "Abbildung 24: Einfache Suche - im Gebäude 017 in Berlin")

Hier werden alle Aufzüge in dem Gebäude 017 angezeigt. Diese Suche verläuft standardmäßig in der Spalte *Name*. Um die Suche zu ändern, müssen wir die Spalten und Optionen anpassen.

### Anpassbare Suche

Bei Nutzung der einfachen Suche kann angepasst werden, in welchen Spalten der Suchvorgang laufen soll. Bei der einfachen Suche sind die Suchkriterien standardmäßig die Spalten **Code | Name**. Sie können aber zusätzlichen Spalten einschalten und diese werden beim Ausführen der Suche auch durchsucht.

Um die Spalten zu sehen, in denen die Suche verläuft, klicken Sie auf den Button ![Qooxdoo Applikationsmaske - Menü Button Sucheinstellungen](/uploads/v6/de-allgemein/vr6-button_sucheinsttellungen.png "Menü Button Sucheinstellungen") rechts in dem Suchfeld. Ein neues Fenster (Abb. 25) mit allen Objekteigenschaften wird angezeigt. Sie können sehen, dass Name und Code ausgewählt sind. Wählen Sie die gewünschten Spalten aus und aktivieren Sie diese. Anschließend klicken Sie auf **Schließen** und führen Sie den Suchvorgang aus.
![Qooxdoo Applikationsmaske - Spalten für die Suche auswählen](/uploads/v6/de-allgemein/vr6-suchen_spalten1.png " Abbildung 25: Spalten für die Suche auswählen")

> **Bemerkung:** In dem angezeigten Fenster gibt es oberhalb ebenfalls eine Suchleiste, die der hier beschriebenen ähnlich ist. Sie können die soeben beschriebenen Operationen wieder anwenden. Bemerken Sie auch die Pfeile rechts in den Feldern. Diese weisen darauf hin, dass diese Felder referenzierte Objekte beinhalten und die Suche kann auch in den Eigenschaften dieser Objekte verlaufen. Mit Klick auf den Pfeil wird das Referenzobjekt aufgemacht und seine Eigenschaften werden angezeigt. Wiederum werden Pfeile an seinen referenzierten Eigenschaften angezeigt. Sie können die Felder für die Suche (wiederum eine Art Suche in die Tiefe) aktivieren.

### Kombinierte Suche

Diese Suche ist eine Mischung aus mehreren Suchkriterien. Sie können mehreren einfachen Suchen kombinieren. 
Als Kombination können Sie die Suchkriterien entweder mit `UND` verknüpfen oder mit `ODER`. Wir schildern das anhand eines Beispiels:
**Ausgangssituation**: Wir möchten nach einer Person suchen, deren Name mit bestimmten Buchstaben beginnt, z.B. mit ***Er***. Also als Ergebnis bekommen die folgenden Datensätze (für unsere Beispiele nutzen wir unseres Demoprojekt).

![Qooxdoo Applikationsmaske - Kombinierte Suche Beispiel](/uploads/v6/de-allgemein/vr6-kombisuche_bsp1.png "Kombinierte Suche Beispiel")

Wie wir sehen können sind alle Personen, deren Nachname mit ***Er*** beginnt, aufgelistet. Jetzt möchten wir aber auch die Personen in der Liste haben, deren Nachname auch mit ***Er*** beginnt. Dafür geben wir diese Zeichenkette in dem Suchfeld ein. Dann sehen wir, dass die Suche noch keine Ergebnisse liefert. 

![Qooxdoo Applikationsmaske - Kombinierte Suche Beispiel](/uploads/v6/de-allgemein/vr6-kombisuche_bsp2.png "Kombinierte Suche Beispiel")

Die Suchkriterien werden unter der Suchleiste aufgelistet. Dazwischen steht das Symbol für UND `&`. Das heißt, dass jede neue Suchkette, wonach gesucht wird, wird unten bei den anderen aufgelistet und automatisch wird der `UND`-Operator angewandt. Wir können noch eine dritte, vierte, etc. Suchkette eingeben.
Damit wir die Personen bekommen, deren Nachnamen mit „Er“ oder „Et“ anfangen, müssen wir den Operator `ODER` verwenden. Das Umschalten von `UND` auf `ODER` erfolgt mit Klick, haltend „STRG“-Taste, auf die gewünschten Suchkriterien, die Sie kombinieren möchten. 
In unserem Beispiel klicken wir auf das erste Kriterium und haltend die „STRG“-Taste klicken wir auf das zweite Kriterium. Ein Zeichen `(…)` wird zur Vereinigung bzw. zur Verwendung des `ODER` Operator angezeigt. Mit Klick Sie darauf, schalten Sie die Operatoren um.

![Qooxdoo Applikationsmaske - Kombinierte Suche Beispiel](/uploads/v6/de-allgemein/vr6-kombisuche_bsp3.png "Kombinierte Suche Beispiel")

Jetzt steht das Zeichen `|` drin. Dieses Zeichen steht für logisches `ODER` – also Nachname beginnt mit ***Er*** oder mit ***Et***. 
Mit Klick auf das Zeichen `…` wird der Operator auf `UND` umgestellt. In unserem Beispiel werden keine Ergebnisse gelistet, da der Nachname nicht mit ***Er*** und gleichzeitig ***Et*** anfangen kann. 
So können wir aber mehrere Suchen kombinieren. Die erste Suche bleibt und mit jeder weiteren Suche wird das Suchkriterium erweitert. Mit Klick auf die gewünschten Kästchen wird das Suchkriterium angepasst. 
> **Bemerkung:** Sie können unterschiedliche Suchkriterien mischen, wie z.B. Personen, beginnend mit ***Er*** und Telefon beginnend mit ***7***. Dann wird die Suchleiste so aussehen:

![Qooxdoo Applikationsmaske - Kombinierte Suche Beispiel](/uploads/v6/de-allgemein/vr6-kombisuche_bsp4.png "Kombinierte Suche Beispiel")

### Suche in die Tiefe

Wir können nicht nur die Objekteigenschaften durchsuchen, sondern auch die Eigenschaften der Objekte, die referenziert sind.

Um die Suche anzupassen, klicken Sie auf den Button ![Qooxdoo Applikationsmaske - Menü Button Suche anpassen](/uploads/v6/de-allgemein/vr6-button_suche_anpassen.png "Menü Button Suche anpassen") links in dem Suchfeld. Wieder links werden die Spalte und die Option angezeigt. Standardmäßig ist es das Paar **Name | beginnt mit**, wie folgt gezeigt.

![Qooxdoo Applikationsmaske - Suche in die Tiefe](/uploads/v6/de-allgemein/vr6-suche_tiefe_bsp1.png "Suche in die Tiefe")

Mit Klick auf die Felder links können Sie die Spalte und die Option (**beginnt mit | endet mit | enthält | gleich | beginnt nicht mit | endet nicht mit | enthält nicht | nicht gleich | ist leer | ist nicht leer | ein Wert von | ist kein Wert von**) ändern. Die möglichen Optionen sind von den Eigenschaftstypen abhängig - so werden zum Beispiel für eine Eigenschaft, die das Datum als Eingabe hat, andere Optionen, wie **vor Datum | nach Datum** etc. zur Verfügung gestellt.

Mit Klick auf die Spalte, in der die Suche laufen soll, wird ein Fenster mit den Objekteigenschaften dieser Objektgruppe angezeigt. In unserem Fall sind wir in dem Modul **Wartung** in der Objektgruppe **Technische Anlagen**. D.h. es werden die Eigenschaften (Felder) einer technischen Anlage angezeigt und Sie können aus diesen auswählen.

Ein sehr großer Vorteil des Systems VisionR ist die Suche nicht nur in den Objekteigenschaften, sondern auch in die Tiefe, d.h. auch in den Eigenschaften der verknüpften Objekte. Dann werden die Eigenschaften des verknüpften Objekts angezeigt und Sie können sogar noch tiefer gehen - bis zu der letzten Ebene, wo es keine referenzierten Objekte gibt.

>**Beispiel:** in unserem Gebäude 017 haben wir zurzeit ca. 59 technischen Anlagen (die Anzahl steht in den Klammern hinter dem Gebäude in der Baumstruktur). Die folgende Abbildung 26 zeigt unsere Anlagen. Wir können sehen, dass einige Anlagen das Baujahr 2003 und einige 2002 haben. Wir können die Spalte auf Baujahr ändern und beispielhaft nach Anlagen mit Baujahr 2002 suchen.
{.is-info}

![Qooxdoo Applikationsmaske - Alle technischen Anlagen im Gebäude 017](/uploads/v6/de-allgemein/vr6-suche_tiefe_bsp2.png " Abbildung 26: Alle technischen Anlagen im Gebäude 017")

Die Abbildung 27 zeigt das Ergebnis - Anlagen, die 2002 gebaut wurden. Insgesamt gibt es 19 Anlagen.

![Qooxdoo Applikationsmaske - Alle technischen Anlagen im Gebäude 017, die im Jahr 2002 gebaut sind](/uploads/v6/de-allgemein/vr6-suche_tiefe_bsp3.png „Abbildung 27: Alle technischen Anlagen im Gebäude 017, die im Jahr 2002 gebaut sind")

Wir haben hier auch die Spalte “Errichter“ eingeschaltet. Jetzt machen wir die Suche ein bisschen komplexer - wir wollen alle Anlagen anzeigen lassen, deren Errichter sich in Berlin befindet. Dafür wählen wir die Spalte, in der die Suche laufen wird und dann gehen wir auf das Feld **Errichter  Ort  Name** und wählen diese Eigenschaft. Stellen die Option „beginnt mit“ ein und schreiben Sie in der Suchleiste “Berlin“, wie auf Abbildung 28 dargestellt:

![Qooxdoo Applikationsmaske - Ort des Errichters der Anlage soll gleich “Berlin“ sein](/uploads/v6/de-allgemein/vr6-suche_tiefe_bsp4.png „Abbildung 28: Ort des Errichters der Anlage soll gleich “Berlin“ sein")

Dann sieht das Ergebnis folgendermaßen aus:

![Qooxdoo Applikationsmaske - Alle technischen Anlagen im Gebäude 017, deren Errichter sich in Berlin befindet](/uploads/v6/de-allgemein/vr6-suche_tiefe_bsp5.png „Abbildung 29: Alle technischen Anlagen im Gebäude 017, deren Errichter sich in Berlin befindet")

Sie werden bemerken, dass alle Anlagen, deren Errichter “Dekra“ gewesen ist, nicht mehr in der Liste stehen, da wir eingestellt haben, das Unternehmen Dekra sei in München positioniert. Wenn wir also nach Errichter-Ort gleich “München“ suchen, werden diese als Ergebnisse angezeigt.

### Suche nach Eigenschaft / Feld im Formular

Eine weitere Suchmöglichkeit nach bestimmten Eigenschaften ist auch in der Formularansicht eingebaut. In jedem Formular gibt es oben rechts ein Suchfeld, indem Sie die Eigenschaft eingeben können, nach denen gesucht wird. Die Ergebnisse werden mit jedem weiteren Buchstabe dynamisch berechnet. Mit Auswahl aus der Ergebnisliste wird auf das Feld fokussiert, das diese Eigenschaft repräsentiert.

Suchen wir nun zum Beispiel den Errichter. Dann schreiben wir einfach in das Feld “Errichter“ und mit Klick auf das Ergebnis wird das Feld hervorgehoben - Abb. 30.

![Qooxdoo Applikationsmaske - Suche nach Objekteigenschaft (Eingabefeld)")](/uploads/v6/de-allgemein/vr6-suche_eigenschaft.png „Abbildung 30: Suche nach Objekteigenschaft (Eingabefeld)")

## Filter

Mit Klick auf dem Button ![Qooxdoo Applikationsmaske - Button Filter](/uploads/v6/de-allgemein/vr6-button-filter.png "Button Filter") rufen Sie die gespeicherten Filter. Diese können Sie selber erstellen oder aus vorhandenen wählen bzw. bearbeiten und als neues speichern. Die Bedingung des Filters ist als Ausdruck einzugeben, der direkt die VisionR-Objekte zugreift. 
Das Filtermenü wird mit Klick auf dem Button ![Qooxdoo Applikationsmaske - Button Filter](/uploads/v6/de-allgemein/vr6-button-filter.png "Button Filter") aufgerufen. Sie können ein Filter ein bzw. ausschalten, bearbeiten, löschen oder ein neues erstellen. Die zur Verfügung stehenden Filter werden in diesem Menü aufgelistet. Das Menü mit einem Filter sieht folgendermaßen aus:
![Qooxdoo Applikationsmaske - Filter](/uploads/v6/de-allgemein/vr6-fillter1.png „Filter")
In unserem Beispiel haben wir nur ein Filter, das uns alle Zeichnungen auswählt, die innerhalb der letzten 24 Stunden aktualisiert wurden. Wir anschließend einige Beispiele, um die Filter besser zu beschreiben.

### Aufbau und Eingabefelder des Filters

Das Filter hat einige Bausteine und einige Eingabefelder, die Sie beachten müssen. Die wichtigsten sind auf die folgende Abbildung angezeigt: 
![Qooxdoo Applikationsmaske – Filter Aufbau](/uploads/v6/de-allgemein/vr6-fillter_aufbau.png „Filter Aufbau")

*	Der **Name** ist *optional*, aber es ist sinnvoll einen Namen zu geben, sonst wird nur der Code angezeigt. 
* In dem Feld **Für Objektdefinition** geben Sie die Objektdefinition, wo dieses Filter platziert wird und zum Auswahl zur Verfügung steht, also zu welcher Objektdefinition es gehört. Zum Beispiel, wie hier auf der Abbildung zu sehen ist, steht als Objektdefinition *Zeichnung*. Das heißt, dass das Filter in dem Menü innerhalb des Moduls Grafik bei den Objekten aus Typ Zeichnung angezeigt wird. 
* **Ausdruck**  ist das wichtigste Feld - hier geben wir die Kondition/en, die wir als Filter einsetzen möchten. Zum Beispiel – alle Objekte, deren Aktualisierungszeit innerhalb der letzten 24 Stunden geändert wurde (Beispiel 1 unten). 
*	*Optionale Parameter- Objektdefinitionen* – hier können wir aus vordefinierten Kontext Objekte auswählen, schauen Sie in der Liste und finden Sie das passende aus. Beispiele sind: Periode Datum / Zeit, Datum, Gebäude, Bodenbelag, etc…Diese Parameter helfen uns bei den Ausdrucken, da sie die Syntax sehr vereinfachen. So müssen wir nicht in dem Ausdruck die Parameter explizit beschreiben, sondern einfach durch ***param*** ersetzen. Der Unterschied ist in den Beispielen 1 und 2 zu sehen.

> **Bemerkung:** Die folgenden Beispiele beziehen sich auf Objekte vom Typ Datum, da diese etwas komplizierter sind.

### Beispiele

>**Beispiel 1:** **Wir möchten die Zeichnungen, die innerhalb der letzten 24 Stunden aktualisiert wurden, ausfiltern**.
Wir müssen dieses Filter zuerst erstellen und dann können wir es benutzen oder den anderen Benutzer zur Verfügung zu stellen. Mit Klick auf die Filter-Ikone ![Qooxdoo Applikationsmaske - Button Filter](/uploads/v6/de-allgemein/vr6-button-filter.png "Button Filter") öffnen wir das Menü und danach geben wir `NEU`. Ein Formular wird angezeigt, indem wir die wichtigsten Eingaben machen. Das Formularfenster sieht folgendermaßen aus:

![Qooxdoo Applikationsmaske – Filter](/uploads/v6/de-allgemein/vr6-fillter2.png „Filter")

Wichtig sind die Felder **Ausdruck** und **Für Objektdefinition**, sowie auch der Name. Der Name wird in dem Filtermenü angezeigt. 
*	**Ausdruck:** in unserem Beispiel möchten wir ein Zeitraum setzen. Der Ausdruck bedeutet hier: 
**Filtere Objekte, bei denen die Aktualisierungszeit (update_time) früher als heute minus 1 Tag.**
Wie eine bestimmte Eigenschaft heißt, sehen Sie im System, wenn Sie mit rechter Maustaste auf die Beschriftung der gewünschten Eigenschaft klicken. Zum Beispiel mit Klick auf die Beschriftung **Ausdruck** wird ihnen der Code: ***expression*** angezeigt. Dieser Code geben Sie in dem Ausdruck. Aus dem obigen Beispiel: Aktualisierungszeit hat den Code ***update_time***.
Der Ausdruck sagt: Die Aktualisierungszeit soll nach „dem heutigen Tag minus einen“ also ab gestern. Das $-Zeichen ist der Anfang des Ausdrucks, db.VALUE2VSQL ist die Funktion für die Datenbank. 
Anschließend speichern wir das Filter und es steht zur Verfügung in dem Filtermenü. Falls wir es anwenden, werden nur die Zeichnungen aufgelistet, die innerhalb der letzten 24 Stunden geändert wurden.
{.is-info}

>**Beispiel 2:** **Wir wollen alle Zeichnungen, die innerhalb einer Periode aktualisiert wurden.**
Wir nehmen an, wir wollen alle Zeichnungen, die im Januar 2016 aktualisiert sind. 
Wir erstellen neues Filter und machen die folgenden Angaben:
*	**Name:** Zeichnungen aktualisiert innerhalb einer Periode 
*	Für **Objektdefinition** geben wir Zeichnung, damit das Filter bei den Zeichnungen verfügbar ist.
*	*Parameter-Objektdefinition*: hier geben wir **Kontext Periode-Datum**
*	**Ausdruck:** `update_time > ${db.VALUE2VSQL(param.begin_date)} AND update_time < ${db.VALUE2VSQL(param.end_date)}`
Der Ausdruck bedeutet, dass die Aktualisierungszeit nach dem Beginndatum und vor dem Enddatum sein soll. 
Wir haben hier als Parameter Periode Datum ausgewählt. Dieser Auswahl bewirkt sich auf das Filter gleich beim Ausführen und der Benutzer wird beim Ausführen nach **Begin- und Enddatum** gefragt. Diese Eingaben sind nicht in dem Ausdruck fest kodiert. Beim Aufruf des Filters kann der Benutzer unterschiedliche Periode festlegen.
Die Daten werden übernommen und in dem Ausdruck berücksichtigt. Für unser Beispiel geben wir als Beginndatum 01.01.2016 und als Enddatum 01.02.2016 (hier ist kleiner als Vergleichsoperation angegeben, deshalb 01.02, um 31.01 einzuschließen.
Das Formular sieht wie gezeigt:

![Qooxdoo Applikationsmaske – Filter](/uploads/v6/de-allgemein/vr6-fillter3.png „Filter")

Wenn wir das Filter auswählen, werden wir nach dem Beginn- und Enddatum gefragt. Die Eingabe erfolgt erst bei der Auswahl des Filters. Dann werden die eingegebenen Daten als Parameter übernommen. 
{.is-info}

>**Beispiel 3: Filter ab Datum.**
Wir möchten alle Zeichnungen filtern, die nach einem bestimmten Datum aktualisiert / importiert sind. Dafür wählen wir als Parameter-Objektdefinition *Kontext Datum*.
Diese Optionen setzt **param** in dem Ausdruck mit dem Datum, das beim Ausführen des Filters festgelegt wird. 
Der Ausdruck sieht dann folgendermaßen aus:
`insert_time > ${db.VALUE2VSQL(param.select_date)}`
Der Ausdruck bedeutet, dass die Zeit und Datum der Hinzufügung später als das eingegebene Datum `(param.select_date)` sein soll. 
Die Ergebnisse werden gefiltert und nur diese Zeichnungen in der Tabelle angezeigt, die nach diesem Datum hinzugefügt sind.
{.is-info}

>**Beispiel 4: Filter nach einem Benutzer.**
Wir möchten alle Zeichnungen filtern, die von einem bestimmten Benutzer eingegeben sind. Dafür wählen wir als Parameter-Objektdefinition *Kontext mehrere Benutzer*.
Diese Optionen setzt **param** in dem Ausdruck mit der Person, die beim Ausführen des Filters festgelegt wird. 
Der Ausdruck sieht dann folgendermaßen aus:
`update_by = ${param.select_users[0].id}`
Der Ausdruck bedeutet, dass alle Zeichnungen, die **aktualisiert von** *(update_by)* gleich den angegebenen Benutzer ist. 
Die Ergebnisse werden gefiltert und nur diese Zeichnungen in der Tabelle angezeigt, die von diesem Benutzer aktualisiert sind.
> **Bemerkung:** Sie können die Parameter-Objektdefinition ignorieren und in dem Ausdruck die Angaben machen. Merken Sie, dass dann nur der festkodierte Ausdruck ausgeführt wird mit den gemachten Angaben. Zum Beispiel: `insert_time > ${db.VALUE2VSQL(param.select_date)} – hier können Sie das param.selec_date mit dem Datum in folgendem Format eingeben: YYYY-MM-TT HH:MM:SS:MSS`
Der Ausdruck für *01.02.2016* ist dann – `insert_time > ‘2016-02-01 00:00:00.000‘`. 
Das Ergebnis wird dann alle Zeichnungen liefern, die nach dem *01.02.2016* aktualisiert sind.
{.is-info}

##  Drucken

Das Drucken erfolgt über den Button ![Qooxdoo Applikationsmaske - Button Drucken](/uploads/v6/de-allgemein/vr6-button-drucken.png "Button Drucken") aus der Funktionsleiste. Diese Funktion ist für die Daten, die alphanummerisch dargestellt sind (Tabelle).

Sie haben einige Druckoptionen zur Verfügung:

### Summe anzeigen

Sie können die Summen für die Objekte anzeigen lassen. Falls keine Objekte ausgewählt sind, werden die Summen für alle Objekte gebildet, die sich in dem Arbeitsfenster befinden. Falls Sie nur bestimmte Objekte ausgewählt haben, werden nur die Summen dieser Objekte gebildet und angezeigt. Die folgende Abbildung 31 zeigt die Summen für die ausgewählten Brandmeldeanlagen in dem Gebäude 017 aus unserem Demoprojekt.

![Qooxdoo Applikationsmaske – Summen anzeigen für ausgewählte Daten](/uploads/v6/de-allgemein/vr6-summen1.png „Abbildung 31: Summen anzeigen für ausgewählte Daten")

### Druckansicht

Mit dieser Option werden die Daten (wieder die aus dem obigen Beispiel ausgewählten) in einer passenden Druckansicht verpackt und zum Drucken bereitgestellt - die folgende Abbildung 32 stellt diese Option dar. Hier werden die ausgewählten Objekte in einer Tabelle verpackt und bestimmte Summen, Zahlen etc. unten angezeigt. Sie können mit Klick auf den Button Drucken die vorbereiteten Daten drucken.

![Qooxdoo Applikationsmaske – Druckansicht mit Daten/Auswertungen zum Drucken bereitgestellt](/uploads/v6/de-allgemein/vr6-druckansicht_mit_Daten.png „Abbildung 32: Druckansicht mit Daten/Auswertungen zum Drucken bereitgestellt")

### Druckansicht mit Editor

Dieselbe Option wie zuvor beschrieben mit einem integrierten Editor im Ansichtsfenster, damit Sie Ihre Daten und die Ansicht / die Anordnung etc. direkt vor dem Drucken bearbeiten können.

### Druckansicht Details 

Diese Druckansicht ist eine Erweiterung der normalen Druckansicht mit detaillierter Ansicht der mehrfachen Eigenschaften des Objekts.

Die Objekte in dem System können andere VisionR-Objekte beinhalten. Einige Eigenschaften sind auch mehrfach verknüpft. Bei der normalen Druckansicht werden nur die Objekteigenschaften aufgelistet. In der Ansicht “Details“ werden die verknüpften Objekte in den Zellen detailliert angezeigt.

Die folgende Abbildung 33 zeigt eine detaillierte Druckansicht für einige ausgewählte Verträge.

![Qooxdoo Applikationsmaske - Druckansicht Details](/uploads/v6/de-allgemein/vr6-druckansicht_details.png "Abbildung 33: Druckansicht Details")

Die Leistungen werden in diesem Fall nacheinander aufgelistet. In der allgemeinen Druckansicht, wird die Anzahl Leistungen in der Spalte eingetragen.

### Druckansicht Details mit Editor

Die detaillierte Druckansicht mit eingeschaltetem Editor zur Bearbeitung der Daten / Layout / Schriftarten etc. vor dem Drucken.

## Berichte

Die Berichte rufen Sie mit dem Button ![Qooxdoo Applikationsmaske - Button Berichte](/uploads/v6/de-allgemein/vr6-button-berichte.png "Button Berichte") auf. Die standardmäßigen Berichte können in Kategorien unterteilt werden. Sie können über die Option `bearbeiten` die Berichte anpassen und zusätzliche hinzufügen. Die Berichte sind ein wesentlicher Teil des Systems. Deshalb ist zu empfehlen, die Anpassung und die Erstellung der Berichte dem Administrator zu überlassen.

Sonst kann jeder Benutzer die zur Verfügung stehenden Berichte ausführen. Wir werden hier einige Berichte beispielhaft zeigen. Da die Berichte sich auf die Objekte und Module beziehen, sind unterschiedliche Berichte für die jeweiligen Objekte zur Verfügung gestellt.
Wählen Sie zuerst die Objekte aus, die für den Bericht relevant sind. Klicken Sie auf den Button ![Qooxdoo Applikationsmaske - Button Berichte](/uploads/v6/de-allgemein/vr6-button-berichte.png "Button Berichte") und wählen Sie den gewünschten Bericht.

Falls der Bericht allgemein gültig ist, wird er überall bei allen Objekten erscheinen. Solche Berichte sind zum Beispiel die Systemberichte. Diese sind nicht mit bestimmten Daten oder Objekten verbunden.

Wir beziehen uns nun wieder auf das Beispiel aus dem Modul **Wartung**. Für die Verträge
gibt es die folgenden Berichte:

### Übersicht

Hier sind die Summen und die Darstellung dieser Summen als Kreis- Diagramm dargestellt (2D und 3D oder als Ring).

### Objektvorschau

Dieser Bericht stellt die Daten aus den Objektvorschauen zusammen und stellt diese zur Verfügung bereit. Dann können Sie die Daten ausdrucken.

### Systemberichte

Diese Berichte kommen aus dem System und beziehen sich auf die Systemressourcen - wie Lizenzinformationen und Systeminformationen. Diese Berichte sind sehr hilfreich, wenn man das Verhalten des Systems betrachten will. Deshalb ist diese Aufgabe an den Administrator zu übergeben.

### Geplante Berichte per Email

Diese Berichte werden von dem System an bestimmten Tagen / Daten / Zeiten selbst erstellt und die Ergebnisse per Email an bestimmten Personen (Verteiler) geschickt. Die Anpassung dieser Berichte ist dem Administrator zu überlassen. Die Berichte kommen per E-Mail und werden nach bestimmten Kriterien generiert. Ein gutes Beispiel ist die Kündigung eines Vertrags - ein Bericht wird z.B. 1 Monat vor dem Kündigungsdatum an die zuständigen Personen verschickt, zusammen mit einer Excel-Liste mit allen bald ablaufenden Verträgen. So kann entschieden werden, ob der Vertrag gekündigt oder verlängert wird. Optionen für automatische Kündigung und automatische Verlängerung sind auch vorhanden.

Einige dieser Berichte sind oft kundenspezifisch, deshalb können wir hier nicht alle beschreiben, da die nicht relevanten Berichte für einen Projekt ausgeblendet werden. Sehen Sie in die Berichte, die zu Ihrem Projekt vorhanden sind, oder fragen Sie Ihren Administrator.

## Gruppieren

Die Gruppierung ermöglicht die Filterung der Daten nach bestimmten Kriterien. Diese Kriterien können erweitert werden. Das Gruppieren der Daten erfolgt über den Button ![Qooxdoo Applikationsmaske - Button Gruppieren](/uploads/v6/de-allgemein/vr6-button-gruppieren.png "Button Gruppieren") Gruppieren. Die Gruppieren-Eigenschaften werden zwischen der Baumstruktur und dem Arbeitsbereich angezeigt. 

Mit Klick auf den Button ![Qooxdoo Applikationsmaske - Menü Button Neu](/uploads/v6/de-allgemein/vr6-button_neu.png "Menü Button Neu") können Sie zusätzliche Gruppierungen einschalten.

Wir betrachten das Gruppieren anhand eines Beispiels. Wir möchten alle technischen Anlagen in einem Gebäude, die den Status „aktiv“ haben, gruppieren. Aus diesen möchten wir nur die Anlagen anzeigen, die einer bestimmten Marke entsprechen.

Klicken Sie auf ![Qooxdoo Applikationsmaske - Button Gruppieren](/uploads/v6/de-allgemein/vr6-button-gruppieren.png "Button Gruppieren") `Gruppieren` und dann auf ![Qooxdoo Applikationsmaske - Menü Button Neu](/uploads/v6/de-allgemein/vr6-button_neu.png "Menü Button Neu") `Neu`. In dem angezeigten Fenster klicken Sie auf die Auswahl Eigenschaft, um für die Objektgruppe (in unserem Beispiel - die technischen Anlagen) den Status als Gruppierungskriterium einzugeben - Abbildung 34.

![Qooxdoo Applikationsmaske - Gruppierung definieren](/uploads/v6/de-allgemein/vr6-gruppierung_definieren.png "Abbildung 34: Gruppierung definieren")

Mit Klick auf die Status-Zeile werden in dem Fenster die möglichen Werte angezeigt. Sie müssen aus diesen Werten einen wählen und ihn für die Gruppierung einsetzten. In unserem Fall wir wollen alle Anlagen gruppieren, die Status ***aktiv*** haben. Deshalb wählen wir diesen Status aus.

Das Gruppieren nach Status wird dann in der Gruppierungsspalte erscheinen. Wir fügen noch eine Gruppierung hinzu. Wir klicken auf ![Qooxdoo Applikationsmaske - Menü Button Neu](/uploads/v6/de-allgemein/vr6-button_neu.png "Menü Button Neu") `Neu` und dieses Mal wählen wir die Eigenschaft *Hersteller*. Die Hersteller werden aufgelistet und wir müssen die gewünschten aktivieren. Die Abbildung 35 zeigt den beschriebenen Vorgang.

![Qooxdoo Applikationsmaske - Gruppierung Aufzuege auswaehlen](/uploads/v6/de-allgemein/vr6-gruppierung_hinzufügen.png "Abbildung 35: Weitere Gruppierung hinzufügen - Aufzüge Schindler auswählen.")


Mit Einschalten dieser Gruppierung werden alle aktiven Anlagen der Marke “Schindler“ in dem ausgewählten Gebäude angezeigt. Alle anderen Anlagen werden ausgeblendet – siehe Abbildung 36.



Die Gruppierung heben Sie mit demselben Button ![Qooxdoo Applikationsmaske - Button Gruppieren](/uploads/v6/de-allgemein/vr6-button-gruppieren.png "Button Gruppieren") auf.

## Transformieren von Daten

Mit dieser Funktion können Sie Daten transformieren. Zuerst müssen Sie die Datensätze auswählen, deren Daten transformiert werden sollen.

Mit Klick auf den Button ![Qooxdoo Applikationsmaske - Button Transformieren](/uploads/v6/de-allgemein/vr6-button-transformieren.png "Button Transformieren") wird ein neues Fenster angezeigt und Sie können die ausgewählten Daten ansehen, wie auf Abbildung 37 dargestellt - wir beziehen uns wieder auf die technischen Anlagen.

![Qooxdoo Applikationsmaske - Das Fenster mit den Einstellungen und Funktionen für Datentransformation](/uploads/v6/de-allgemein/vr6-transformieren_einstellungen.png "Abbildung 37: Das Fenster mit den Einstellungen und Funktionen für DatentransformationAbbildung 37: Das Fenster mit den Einstellungen und Funktionen für Datentransformation")

In diesem Fenster geben wir die *Eingangs-* und die *Ausgangseigenschaft*, d.h. wir transformieren eine Eigenschaft nach bestimmten Kriterien. Die Spalten in der Tabelle zeigen sowohl die Eigenschaften der ausgewählten Objekte, als auch die Eingangs- und Ausgangseigenschaften (Spalten) und das Ergebnis. Wir können hier das Ergebnis betrachten und anschließend die Daten transformieren lassen, indem wir den Button `Anwenden` klicken.

Als Beispiel nehmen wir einige Aufzüge aus dem Gebäude 02 in Berlin und möchten diese Aufzüge durchnummerieren. Die Durchnummerierung erfolgt in der Spalte Name und der neue Name soll Typ der Anlage, Hersteller und eine fortlaufende Nummer beinhalten. Die Ausgangseigenschaft ist mit einem ![Qooxdoo Applikationsmaske - Button Ausgangeigenschaft](/uploads/v6/de-allgemein/vr6-button-ausgangeigenschaft.png "Button Ausgangeigenschaft") Pfeil in dem Spaltenname versehen. In unserem Beispiel wird der **Name** stehen, aber Sie können mit Klick auf das Feld jede beliebige Eigenschaft eingeben, sogar in die Tiefe, wie in dem Abschnitt “Suchen“ beschrieben ist.

Einige Operatoren stehen zur Verfügung. Ein Teil davon benötigt Parameter als Eingaben, andere nicht.

Die Operatoren sind: **Lfd.-Nr. am Anfang / Ende verketten | Kopieren | Kopie am Anfang / Ende verketten | Ersetzen | Löschen | Entfernen | Ersetzen mit regulärer Ausdruck | Verketten am Anfang / Ende | Groß- bzw. Kleinschreibung**

Auf der Abbildung 37 ist die Ausgangsspalte **Name** gleich der Eingangsspalte, da diese Spalten dieselbe Eigenschaft repräsentieren.

> **Bemerkung:** Der Operator “Lfd.-Nr. am Anfang / Ende verketten“ nimmt die verlaufenden Nummer und fügt diese am Ende hinzu. Er fängt mit 1, 2, etc.

In der Spalte “Resultat“ werden die Ergebnisse angezeigt, nachdem wir auf „Vorschau aktualisieren“ geklickt haben. Mit Klick auf Anwenden wird die Transformation durchgeführt und die neuen Namen werden gültig.

## Farbliche Hervorhebung

Die farbliche Hervorhebung rufen wir mit dem Button ![Qooxdoo Applikationsmaske - Button Hervorhebung](/uploads/v6/de-allgemein/vr6-button-hervorhebung.png "Button Hervorhebung") auf. Die Daten werden dement sprechend gefärbt. Die Farben, die im System benutzt sind, können auch angepasst werden. Diese Farben bzw. ihren Eigenschaften wie Nutzung, Status etc. werden den Objekten zugeordnet. Bei Hervorhebung werden genau diese Farben benutzt. So kann der Benutzer schnell die Daten erkennen und ggf. auswählen und bearbeiten.

Für die Daten, die eine farbliche Darstellung in der Grafik haben, werden hier genau dieselben Farben benutzt und die Datensätze mit diesen Farben gekennzeichnet - z.B. die Nutzungen der Räume wird bestimmt durch die Farben, mit denen die Raumpolygone gekennzeichnet sind. Dieselben Farben werden bei der Hervorhebung der Räume nach Nutzung benutzt.

Beim Klick auf den Button ![Qooxdoo Applikationsmaske - Button Hervorhebung](/uploads/v6/de-allgemein/vr6-button-hervorhebung.png "Button Hervorhebung") Hervorhebung werden die möglichen Hervorhebungen aufgelistet. Sie müssen eine passende Hervorhebung auswählen und die Daten werden gefärbt. Diese Färbung ist dynamisch und sobald die Daten sich ändern, wird die Farbe auch vom System angepasst.

Der Benutzer muss sich nicht um die Anpassung, Erstellung etc. kümmern. Diese Aufgabe ist dem Administrator zu übergeben, falls Änderungen erwünscht sind.

Es gibt einige Standardhervorhebungen und einige, die objektspezifisch sind. Die standardmäßigen sind die Folgenden:

**Ist archiviert? | Ist aktualisierbar? | Ist löschbar?**

Diese Hervorhebung kann entweder WAHR oder FALSCH sein, deshalb sind hier die falschen **rot** markiert und die wahren **grün**. Alle Abfragen, die WAHR oder FALSCH liefern, sind mit diesen Farben gekennzeichnet, wenn die Hervorhebung aktiv ist.

Die restlichen Hervorhebungen sind von den Objekten abhängig. Wir schildern diese anhand einiger Beispiele. 
>**Beispiel:** wir wollen die Hervorhebung einschalten, um zu sehen welche technischen Anlagen aktiv und welche inaktiv sind. Die Abbildung 38 zeigt dieses Beispiel.![Qooxdoo Applikationsmaske - Hervorhebung - nach Status](/uploads/v6/de-allgemein/vr6-hervorhebung_nach_status_bsp.png "Abbildung 38: Hervorhebung - nach Status")
{.is-info}

In dem Menü gibt es für diese Objekte auch die Hervorhebung **Hat Geometrie?**. Diese Hervorhebung gibt uns an, welche Objekte grafisch im System vorhanden sind und welche nicht. Da wieder die Werte WAHR bzw. FALSCH sein können, werden die Farben **rot** und **grün** benutzt.

Die folgende Abbildung 39 zeigt das Beispiel mit Hervorhebung nach Nutzung der Räume aus unseren Gebäuden. Die Räume sind mit den Farben gekennzeichnet, die ihrer Nutzungen entsprechen. Wenn Sie die Grafik aufmachen und diese Räume anschauen, werden diese in denselben Farben sein.
![Qooxdoo Applikationsmaske - Hervorhebung der Räume nach Nutzung](/uploads/v6/de-allgemein/vr6-hervorhebung_nach_raumnutzung_bsp.png "Abbildung 39: Hervorhebung der Räume nach Nutzung")

Die farbliche Hervorhebung können Sie mit den Buttons ![Qooxdoo Applikationsmaske - Button Hervorhebung](/uploads/v6/de-allgemein/vr6-button-hervorhebung.png "Button Hervorhebung") bzw. ![Qooxdoo Applikationsmaske - Button Hervorhebung Aus](/uploads/v6/de-allgemein/vr6-button-hervorhebung_grau.png "Button Hervorhebung Aus") ein- bzw. ausschalten.

# Systemmodule

Das System VisionR hat einige Funktionen, die aus den Modulen abgeleitet sind. Solche Funktionen werden in den meisten Fällen nicht direkt von dem Benutzer genutzt, sind aber sehr eng mit der Interaktion des Nutzers verbunden. Daher wird der Nutzer oft mit diesen Funktionen konfrontiert.

Die wichtigsten Funktionen, die untrennbarer Teil des Interaktionsprozesses sind, werden hier für den Benutzer beschrieben.

## Dokumentenmanagement

Das Dokumentenmanagement ist ein wichtiger Bestandteil des Systems VisionR. Deshalb ist es nötig zu wissen, wie die Dokumente im Rahmen des Systems gespeichert / aufbewahrt / abzurufen sind.

Immer wieder braucht der Benutzer Dokumente oder Dateien aus dem System oder muss diese im System speichern. Der größte Vorteil des Systems ist der, dass die Dateien / Dokumente einmal zentral auf dem Server gespeichert sind und an jeder Stelle einfach verknüpft werden können. So sind diese Dokumente von überall abrufbar und trotzdem nur einmal im System vorhanden.

Die Dokumente im System VisionR können Versionen haben. Wenn ein Dokument oder eine Datei geändert wurde, kann der Benutzer eine neue Version dieses Dokumentes / dieser Datei erstellen und per Knopfklick alle Verknüpfungen aktualisieren, so dass die neue Datei die Alte ersetzt.

**Das Prinzip** - alle Dokumente werden zentral auf dem Server gelagert. Die Dokumente sind wie alle anderen VisionR Objekte mit entsprechenden Zugriffsrechten versehen. Die Verknüpfung zu einem Dokument oder zu einer Datei wird an der Stelle gemacht, wo diese Verknüpfung nötig ist. Die Dokumente müssen zuerst im System hoch geladen werden und erst dann können sie verknüpft werden. Für die Verwaltung dieser Dokumente bzw. Dateien gib es das **Dokumentenmanagement**.

Das Dokumentenmanagement rufen Sie über die Indexseite oder über den Startbutton  ![Qooxdoo Applikationsmaske - Startbutton VisionR](/uploads/v6/de-allgemein/vr6-button-visionr.png "Startbutton VisionR") **Module -> Dokumentenmanagement.** Ein neues Fenster wird aufgemacht, wo Sie die Dateien und die Dokumente verwalten können. Die Ansicht ist wie bei allen alphanumerischen Modulen - Abbildung 40.

![Qooxdoo Applikationsmaske - Dokumentenmanagement - Übersicht](/uploads/v6/de-allgemein/vr6-dokumentenmanagement_bsp1.png " Abbildung 40: Dokumentenmanagement - Übersicht")

Links ist die Baumstruktur, in der Sie an jeder Stelle ein neues Verzeichnis erstellen können. Die Anordnung dieser Struktur ist von den Wünschen des Kunden anhängig. Am besten wird diese Aufgabe von dem Administrator ausgeführt.

Sie können eigene Verzeichnisse erstellen und die Daten dort lagern oder eine vordefinierte Struktur benutzen. Hier ist zu merken, dass Zugriffsrechte für die Verzeichnisse als auch für die Dateien / Dokumente angepasst werden können.

Die Dateien müssen zuerst hoch geladen werden. Dieser Prozess erfolgt in dieser Maske und erst wenn die Dateien im System vorhanden sind, können sie verknüpft werden.

Auf der Abbildung 40 sind die hoch geladenen Dateien aus dem links ausgewählten Verzeichnis rechts angezeigt. Hier können Sie neue Dateien über das Funktionsmenü ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu-button.jpg "Menü Button")  ![Qooxdoo Applikationsmaske - Menü Button Neu](/uploads/v6/de-allgemein/vr6-button_neu.png "Menü Button Neu") hinzufügen. Sie müssen dann in dem angezeigten Fenster auswählen, ob Sie einen neuen Ordner in dem virtuellen Dateisystem am Server erstellen möchten oder einfach eine Datei hochladen wollen - Abbildung 41.

![Qooxdoo Applikationsmaske - Datei hochladen / Ordner erstellenMenü Button Neu](/uploads/v6/de-allgemein/vr6-dok-datei_hochladen_ordner_erstellen.png " Abbildung 41: Datei hochladen / Ordner erstellen")

Wenn Sie auf **Datei** klicken, wird das Fenster mit dem Dateiauswahl angezeigt. Wählen Sie die gewünschte Datei und laden Sie diese hoch. Dann erscheint sie rechts in dem ausgewählten Ordner.

>**Bemerkung:** An allen Stellen, wo Sie Dokumente verknüpfen möchten, müssen Sie das Dokument aus dem Dokumentenmanagement auswählen. Sie können nur hochgeladene Dateien verknüpfen. Neue Dateien können Sie gleich im Verknüpfungsvorgang hochladen.

## Datenaustausch

Unter **Datenaustausch** werden Datenimporte und Datenexporte verstanden. Die Importe bzw. die Exporte sind ein Bestandteil des Systems und ein großer Vorteil von VisionR.

In den meisten Fällen sind immer Daten vorhanden, die in das System importiert werden sollen. Diese Importe sind nicht immer leicht zu realisieren, besonders wenn die Daten aus verschiedenen Quellen kommen.

Deshalb besteht die Möglichkeit, dass die Importe in VisionR an die Daten angepasst werden, die importiert werden sollen. Diese Anpassung ist nicht kompliziert, aber am Anfang ist es sinnvoll, die Anpassung dem Administrator zu überlassen. Nachdem die Vorlagen für den Importvorgang erstellt bzw. angepasst sind, kann der Benutzer die Daten selber importieren / aktualisieren.

Mit Klick auf den Button ![Qooxdoo Applikationsmaske - Startbutton VisionR](/uploads/v6/de-allgemein/vr6-button-visionr.png "Startbutton VisionR") **Module -> Datenaustausch** wird das Datenaustauschfenster aufgemacht und die gespeicherten Importe und Exporte angezeigt. Falls der Importvorgang schon erstellt bzw. angepasst ist, kann er ausgeführt werden. Dafür wählen Sie den gewünschten Vorgang und klicken Sie auf ![Qooxdoo Applikationsmaske - Button Ausführen](/uploads/v6/de-allgemein/vr6-button-ausfuehren.png "Button Ausführen") `Ausführen`.

Abbildung 42 zeigt unsere Datenaustausch-Vorgänge:

![Qooxdoo Applikationsmaske - Datenaustausch - Übersicht](/uploads/v6/de-allgemein/vr6-datenaustausch_uebersicht.png " Abbildung 42: Datenaustausch - Übersicht")

Wenn der ausgewählte Vorgang ausgeführt wird, werden Raumdaten aus einer **CSV-Datei** importiert.

Die folgende Abbildung 43 zeigt die Formularansicht des Importvorgangs. In dem Feld **Vorlage (als XML)** ist das Skript, das die Daten zuordnet. Das Skript kann über den Button **Bearbeiten** editiert werden.

![Qooxdoo Applikationsmaske - Formularansicht des Importvorgangs](/uploads/v6/de-allgemein/vr6-datenaustausch_formularansicht.png " Abbildung 43: Formularansicht des Importvorgangs")

In dieser Ansicht können Sie die Eigenschaften des Objekts bearbeiten, wie bei allen anderen VisionR-Objekten. Wie auf der Abbildung zu sehen ist, kann der Benutzer hier die Datei ändern, die Kodierung anpassen, das Trennzeichen etc.

Die **Erstellung** eines Vorgangs ist über das ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu-button.jpg "Menü Button") Funktionsmenü   -> ![Qooxdoo Applikationsmaske - Menü Button Neu](/uploads/v6/de-allgemein/vr6-button_neu.png "Menü Button Neu") Neu möglich. Das Formular mit den Eigenschaften wird angezeigt und der Benutzer soll die Datei, Trennzeichen, Skripte etc. eingeben bzw. anpassen. Auf diese Weise werden die Exportvorgänge erstellt.

Die unterstützen Formate für den Import sind: alle gängigen **Excel**-Formate, **.csv** und andere Textformate, sowie auch **XML**.

## Benutzerverwaltung / Zugriffsrechte

Die Benutzerverwaltung bzw. die Zugriffsrechte sind ein wesentlicher Teil des Systems. Nur die Benutzer, die administrative Rechte (einschließlich des Administrators) haben, können die Benutzer oder die Zugriffe verwalten.

Der Administrator verwaltet die Benutzer und ihren Konten. Die Benutzer mit administrativen Rechten können auch die Zugriffsrechte der anderen Benutzer anpassen – so kann zum Beispiel ein Marktführer seinen Mitarbeitern unterschiedliche Berechtigungen und Zugriffsrechte übergeben, so dass diese nur ihre eigenen Aufgabengebiete einsehen können. 

Der Administrator kann anderen Gruppen seine Zugriffsrechte vererben. Diese Gruppen können die Rechte an andere Gruppen vererben. 

Die Zugriffsberechtigung ist folgendermaßen realisiert: Wir geben ein **Beispiel**, um die Vererbung einfacher darzustellen:
>**Beispiel:** Wir haben einige Benutzer mit Zugriffsrechten auf ihre eigenen Aufgaben, z.B. Hausmeister können die Anlagen sehen, für die sie zuständig sind. Darüber gibt es eine Gruppe von Technikern, welche die Anlagen von mehreren Gebäuden überwacht. Diese erben dann die Rechten von den Hausmeistern dieser Anlagen und können alle Anlagen sehen bzw. bearbeiten.
Falls es eine Gruppe über diese Techniker gibt, die alle Anlagen, unabhängig davon wo diese eingebaut sind, betrachten soll, z.B. die Firmenfachkräfte, die die Anlagen hergestellt und eingebaut haben, kann diese Gruppe die Rechte aller untergeordneten Gruppen erben.
{.is-info}

Standardmäßig haben alle VisionR-Objekte eine Registerkarte in der Formularansicht, die die Zugriffe auf das Objekt beinhaltet. Das heißt, dass an allen Objektebenen die Zugriffe anpassbar sind.

## Geplante Tasks

Die geplanten Tasks sind Operationen, die nach einem Plan oder nach bestimmten Kriterien ausgeführt werden.

Ein Beispiel für eine geplante Aufgabe (Task) ist die Auswertung des Systems von Kündigungsdaten von Verträgen, die bald ablaufen, und das Zuschicken einer Benachrichtigung an den zuständigen Personen. Dafür ist sogar keine Anmeldung im System notwendig.

Die Erstellung und die Anpassung von solchen geplanten Aufgaben verbleiben bei den Administratoren.


# Profile und Ansichten

Jeder VisionR-Benutzer hat sein eigenes Profil. Nach dem Einloggen in dem System kann der Benutzer sein Profil anpassen. Diese Anpassungen bleiben gespeichert. Die Einstellungen sind individuell und nur für den Benutzer gültig.

Die Ansichten sind eine neue Eigenschaft der Version 5.x, die es erlaubt, unterschiedliche Ansichten zu definieren und aufrufen. Die Ansichten werden gespeichert und jeder Benutzer kann die gewünschte Ansicht aufrufen und damit arbeiten. Außerdem hat jeder Benutzer die Möglichkeit, selber die Ansicht anzupassen bzw. neue zu definieren.


## Benutzerprofile

Jeder Benutzer hat ein Profil und kann die Einstellungen über den Funktionsbutton  ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu_button_grau.png "Menü Button") aufrufen - Abb. 44.

![Qooxdoo Applikationsmaske - Profileeinstellungen - Login- und eigene Einstellungen](/uploads/v6/de-allgemein/vr6-profileinstellungen_1.png "Abbildung 44: Profileeinstellungen - Login- und eigene Einstellungen")

Der Benutzer kann die Einstellungen selber anpassen oder diese Aufgabe dem Administrator überlassen. Die letzte Registerkarte mit den Programmeinstellungen ist vom Benutzer zu ignorieren, falls dem Benutzer die entsprechenden Kenntnisse fehlen. Diese Einstellungen können einmalig vom Administrator eingestellt werden.

## Ansichten

Die Ansichten sind ein wichtiger Teil für den Benutzer. Die Ansichten können einmalig angepasst werden und von dem Benutzer abgerufen. Der Benutzer kann auch selber die Ansicht anpassen und gegebenenfalls Neue erstellen.

> **Bemerkung:** Die Ansichten sollten nur von fortgeschrittenen Benutzer angepasst werden, da diese für alle Benutzer gültig sind. Falls ein Benutzer eine Ansicht angepasst hat, kann das für die anderen Benutzer nachteilig sein. In solchen Fällen ist es vorteilhaft eine neue Ansicht zu definieren und ggf. zu nutzen, aber die Vorhandenen nicht zu ändern, falls diese Änderungen nicht mit allen Benutzern besprochen sind.

Beispiele für Ansichten:

### Alles 

Alle Felder und Registerkarten sind eingeblendet und der Benutzer kann überall Daten eingeben, falls erforderlich. Diese Ansicht kann für die Benutzer zu komplex werden, die nur einen Teil der Eigenschaften pflegen. Die Felder können über die Suchfunktion schnell erreicht werden. Trotzdem bleiben viele Felder in der Praxis ungepflegt.

![Qooxdoo Applikationsmaske - Formularansicht – Alles](/uploads/v6/de-allgemein/vr6-ansicht-alles-formular.png "Abbildung 45: Formularansicht – Alles")

### Komplexe Ansicht 

In dieser Ansicht werden alle Felder, die nie genutzt werden, einfach ausgeblendet, um die Ansicht zu vereinfachen. Trotzdem gibt es Benutzer, die diese Ansicht zu komplex finden, wenn diese nur einige Daten im System eingeben. (Dieses Szenario ist immer unterschiedlich). Für diese Benutzer erstellen wir die **einfache Ansicht** nur mit den Feldern, die auch regelmäßig bearbeitet werden.

![Qooxdoo Applikationsmaske - Formularansicht - komplex](/uploads/v6/de-allgemein/vr6-ansicht-custom-formular1.png "Abbildung 46: Formularansicht - komplex")

### Einfache Ansicht 

Nur einige Felder sind eingeblendet, um die wichtigsten Daten in der **gewünschten Reihenfolge** einzugeben. Die Anordnung der Felder ist auch anpassbar.

![Qooxdoo Applikationsmaske - Formularansicht - Einfach](/uploads/v6/de-allgemein/vr6-ansicht-einfach-formular1.png " Abbildung 47: Formularansicht - Einfach")

Die Anordnung der Felder in den Registerkarten oder die Verschiebung von Eigenschaften ist bei der Ansicht-Anpassung möglich.

### Ansicht anpassen

Die Ansicht kann der Benutzer folgendermaßen anpassen:

* **Felder ein- bzw. ausblenden** - jedes Feld oder jede Registerkarte (einschließlich ihrer Felder) kann ausgeblendet oder eingeblendet werden. Falls Pflichtfelder ausgeblendet werden sollen, müssen diese Felder in optionale Felder umgewandelt werden.

Um ein Feld auszublenden bzw. anzupassen (Position, Registerkarte, Anordnung etc.), rufen Sie das Funktionsmenü für das Feld mit der rechten Maustaste auf der Feldbeschriftung auf, wie auf der folgenden Abbildung 48 gezeigt ist.

![Qooxdoo Applikationsmaske - Eigenschaft “Händler“ ausblenden](/uploads/v6/de-allgemein/vr6-formular-eigenschaft_ausblenden.png "Abbildung 48: Eigenschaft “Händler“ ausblenden")

In diesem Beispiel benötigen wir den „Händler“ der technischen Anlage nicht und wir werden das Feld einfach ausblenden. Mit der rechten Maustaste werden zuerst die Infos über dem Feld aufgelistet und darunter die Optionen für dieses Feld angezeigt. Wir können das Feld ein / ausblenden | erforderlich Ja / Nein | schreibgeschützt **Ja / Nein | Vor / Nach einer Eigenschaft | Kategorie** auswählen.
Wir können das Feld immer wieder einblenden, falls diese Information gepflegt wird.

* **Reihenfolge bzw. Position der Felder anpassen** - wo genau ein Eigenschaftsfeld positioniert ist, kann der Benutzer selber bestimmen und dazu auch die Kategorie (Registerkarten / Unterkategorien in den jeweiligen Registerkarten) ändern.

Die Position passen Sie an, indem Sie mit rechter Maustaste das Menü aufrufen und für das gewünschte Feld die Option Verschieben nach / vor nutzen (Abbildung 48). In dem neu angezeigten Fenster geben Sie die Eigenschaft ein, die nach bzw. vor dem gewünschten Feld steht. Die Anordnung wird dementsprechend angepasst und das Feld wird an der gewünschten Stelle erscheinen.

> **Bemerkung:** Achten Sie auf die Kategorien, falls Sie eine Eigenschaft verschieben. Die Option “vor bzw. nach“ fügt die Eigenschaft in der Kategorie des ausgewählten Feldes ein.

Das Einschalten von Eigenschaften ist über die Bearbeitung der Ansicht möglich. Dafür klicken Sie auf Durchsuchen und wählen Sie die gewünschte Ansicht, die Sie bearbeiten wollen, und klicken Sie auf bearbeiten. In dem mehrfachen Feld Einstellungen fügen Sie die ausgeblendeten Felder, damit diese wieder sichtbar werden - Abb. 49

![Qooxdoo Applikationsmaske - Eigenschaften einblende](/uploads/v6/de-allgemein/vr6-formular-eigenschaft_einblenden.png " Abbildung 49: Eigenschaften einblenden")

* **Ansicht erstellen**

Wenn Sie Felder ein- und ausblenden, können Sie durch Rechtsklick im rechten Bereich des Formulars den Menüeintrag „Ansicht speichern“ aufrufen. So wird eine neue Ansicht durch Eingabe des gewünschten Ansichtsnamens angelegt.

Stellen Sie also die Felder ein bzw. aus, ordnen Sie dann die Felder und speichern Sie am Ende die neue Ansicht. Die Speicherung erfolgt folgendermaßen: Klicken Sie mit der rechten Maustaste irgendwo im Formular (kann auch auf Feldbeschriftung sein, wie auf Abb. 48). In der Unterkategorie **Formularansicht** sehen Sie die Optionen für Ansichten - sie können die Ansicht wechseln, speichern oder durchsuchen und bearbeiten.

* **Objektvorschau**

Die Objektvorschau ist auf fast allen Ebenen des Systems vorhanden. Überall, wo das Symbol ![Qooxdoo Applikationsmaske - Button Objektvorschau aus](/uploads/v6/de-allgemein/vr6-ikone-objektvorschau_aus.png "Button Objektvorschau aus") steht, heißt es, dass die Vorschau eingeschaltet ist. Mit Klick können Sie sie ausschalten.

Für das Einschalten der Vorschau steht das Symbol ![Qooxdoo Applikationsmaske - Button Objektvorschau ein](/uploads/v6/de-allgemein/vr6-ikone-objektvorschau_ein.png "Button Objektvorschau ein") zur Verfügung.

Eine Vorschau ist überall vorhanden, wo eine tabellarische Ansicht angezeigt wird - die folgenden Abbildungen 50 und 51 zeigen die Vorschau.

![Qooxdoo Applikationsmaske - Objektvorschau eingeschaltet - in der Objekttabelle](/uploads/v6/de-allgemein/vr6-objektvorschau_ein_bsp1.png "Abbildung 50: Objektvorschau eingeschaltet - in der Objekttabelle")

![Qooxdoo Applikationsmaske - Objektvorschau für Eigenschaftstabelle eingeschaltet](/uploads/v6/de-allgemein/vr6-objektvorschau_ein_eigenschaft_tabelle.png "Abbildung 51: Objektvorschau für Eigenschaftstabelle eingeschaltet")


 