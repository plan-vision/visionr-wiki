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

> **Bemerkung:**: Die einfachen Eingabefelder können unterschiedliche Datentypen erfordern und ggf. wird die Eingabe bei falschem Format nicht angenommen. Sie kriegen eine Benachrichtigung mit dem richtigen Format - zum Beispiel erfordert ein Datum-Feld ein Datum aus dem Kalender in der Form JJJJ-MM-TT hh.mm.ss.000. In diesem Feld wird auch ein Kalender zur Auswahl gestellt. Diesen rufen Sie mit Klick auf das Symbol ganz rechts in dem Feld. Der Kalender wird aufgemacht und Sie können das Datum auswählen. 

•	**Einfaches Eingabefeld mit Übersetzungsmöglichkeit** - diese Felder sind einfache Felder, die übersetzt werden können. Im Prinzip wird das System komplett auf Deutsch und Englisch zur Verfügung gestellt. Es kann an jeder Stelle, an der ein Feld in anderen Sprachen übersetzt werden kann, eine Übersetzung vorgenommen werde. Das komplette System ist also internationalisierbar. Nicht nur die Namen der Felder können übersetzt werden, sondern auch die Daten selbst. So können wir zum Beispiel in der deutschsprachigen Applikationsmaske den Bodenbelag-Typ “Teppich“ eingeben. Wenn wir dann auf Englisch umschalten, würde “floor surface -> carpet“ stehen. Falls Sie dieses Feld in anderer Sprache eingeben möchten, können Sie mit dem Button ![Qooxdoo Sprache Ikone](/uploads/v6/de-allgemein/vr6-icon-sprache.png "Sprache Ikone"), rechts in dem Eingabefeld, die Tabelle mit den freigeschalteten Sprachen aufrufen und dort für die gewünschten Sprachen die Übersetzung eingeben. Falls ein Feld oder Feldname in einer Sprache nicht übersetzt worden ist, wird das Feld in der voreingestellten Sprache (Deutsch/Englisch) angezeigt.

•	**Einfache Auswahllisten** - die einfachen Auswahllisten beinhalten vordefinierte Objekte und Sie können aus diesen Objekten wählen. Diese Objekte sind in den meisten Fällen so vordefiniert, dass keine Änderungen vorgenommen werden sollen. Beispiel dafür ist das Feld MwSt. - die Prozente sind vordefiniert. Auch das Feld Währung oder das Feld Status sind Beispiele. Falls Anpassungen gewünscht sind, können diese vor der Inbetriebnahme des Systems oder ggf. später durch den Administrator realisiert werden.

Zu dieser Gruppe zählen auch die **Ja / Nein** Eingaben.

> **Bemerkung:**: Einige dieser Felder sind standardmäßig auf leer gesetzt - d.h. sie sind weder wahr noch falsch

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

> **Bemerkung:**: Sie können die Formularansicht schließen ohne alle Pflichtfelder einzugeben, indem Sie das Formular einfach über dem “X“ oben rechts schließen. So werden die Daten, wie an der Stelle eingegeben, gespeichert.

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

### **Einfache Zeichenketten mit und ohne Übersetzungsmöglichkeit**

In den Feldern, die diesen Eingaben erwarten, können Sie beliebige Textketten eingeben. Falls rechts das ![Qooxdoo Applikationsmaske - Menü Sprachen](/uploads/v6/de-allgemein/vr6-icon-sprache.png "Menü Sprachen") Welt-Zeichen angezeigt ist, kann das Feld auch übersetzt werden. Mit Klick auf dieses Zeichen wird die Sprachentabelle angezeigt und Sie können für die freigeschalteten Sprachen die Übersetzung vornehmen.

### **Einfache Auswahllisten**

Diese Auswahllisten sind mit vordefinierten Werten versehen. Sie können mit Klick auf das Feld den gewünschten Wert auswählen. Diese Listen sind sehr selten zu ändern, deshalb betrachten wir diese als einfache Auswahllisten. Sie können neue Einträge zum Auswählen erstellen, ähnlich wie bei der Erstellung von Objekten innerhalb des VisionR - Systems.

### **Datum und Zeit** 

Die Felder, die als Eingabe ein Datum und / oder eine Zeit erwarten, sind mit einem Kalender versehen – Abb. 19. Den Kalender rufen Sie mit Klick auf den Button ![Qooxdoo Applikationsmaske - Button Kalendar](/uploads/v6/de-allgemein/vr6-button_kalendar.png "Button Kalendar")  der ganz rechts in dem Feld steht, auf.

![Qooxdoo Applikationsmaske - Kalender zum Datumauswahl](/uploads/v6/de-allgemein/vr6-datum_auswahl_kalendar.png "Abbildung 19: Kalender zum atumauswahl")

Sie können das Datum auch direkt als Text in dem Feld eingeben, aber Sie müssen das Format beachten (TT.MM.JJJJ). Falls Sie ein ungültiges Datum eingeben, wird das richtige Datum daraus berechnet, z.B. - falls 32.03.2016 eingegeben wird, wird das System es als 01.04.2016 erkennen.

Falls die Zeit angegeben werden soll, so ist sie in folgendem Format einzugeben: JJJJ-MM-TT hh.mm.ss.000.

> **Bemerkung:**: Falls Datum und / oder Zeit - Daten importiert werden, sollen Sie auf die Formate achten

### **VisionR - Objekte / Referenzobjekte**

Diese Objekte werden an den Stellen verknüpft, wo Objekte als Eingabe gebraucht sind. Falls ein Feld ein Referenzobjekt als Eingabe erwartet, wird das ausgewählte Objekt an dieser Objekteigenschaft angehängt. So entsteht eine bidirektionale Verbindung zwischen den beiden Objekten, es ist jedoch jedes Objekt ist nur einmal in der Datenbank vorhanden und an dieser Stelle einfach verknüpft.

Wenn Sie auf ein Referenz-Feld klicken, werden die Objekte, die zur Auswahl stehen ggf. gefiltert, in einer Liste angezeigt. Die Liste wird unter dem Feld angezeigt und Sie können aus dieser Liste ein Objekt auswählen.

Falls die Liste zu lang ist, können Sie direkt im Feld schreiben und die Daten in der Liste werden sofort gefiltert. Dazu können Sie mit Klick auf dem Spaltenname die Liste oder sogar die schon gefilterte Liste sortieren. Die folgende Abbildung 20 zeigt ein Beispiel mit einigen eingegeben Buchstaben und einer Sortierung nach Name. In dem Beispiel suchen wir alle Objekte, die “brand“ beinhalten. 
![Qooxdoo Applikationsmaske - Eingabe vom Referenzobjekt mit Sortierung nach Name](/uploads/v6/de-allgemein/vr6-eingabe_referenzobjekt_bsp.png " Abbildung 20: Eingabe vom Referenzobjekt mit Sortierung nach Name")

Im Prinzip haben alle Felder, die als Eingabe ein Objekt erwarten, rechts in dem Feld den ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu_button_grau.png "Menü Button") Funktionsbutton, um die zur Verfügung stehenden Funktionen, die sich auf dieses Objekt beziehen, aufzuführen. Bemerken Sie, dass bei einigen Objekten nur bestimmte Funktionen zur Verfügung stehen - z.B. die Objekttypen sind vordefiniert und können nur angesehen oder ausgewählt werden. Andere Objekte, wie Kontakte, Verträge etc. können auch an der Auswahlstelle gleich erstellt werden, falls sie noch nicht vorhanden sind oder ggf. an der Auswahlstelle gleich bearbeitet werden.

Falls Sie direkt aus der Liste ein Objekt auswählen möchten, klicken Sie auf das Feld und die Liste wird angezeigt. Alternativ können Sie auf den kleinen Pfeil rechts klicken, um die Liste aufzuklappen. Mit Klick auf eine Zeile aus der Liste wird das Objekt festgelegt.

Die andere Möglichkeit ein Referenzobjekt anzugeben ist mittels der ` Auswählen ` -Funktion. Wählen Sie dafür die Option ` Auswählen ` aus dem Funktionsmenü ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu_button_grau.png "Menü Button"). Ein neues Fenster mit den zur Verfügung stehenden Objekten wird angezeigt. Die Anzeige der Daten in diesem Fenster ist gleich der Tabellenansicht von allen VisionR-Modulen. Links steht die Hierarchie und rechts stehen die Daten zur Auswahl, in tabellarischer Form dargestellt. Sie haben alle Funktionen zur Verfügung, um Ihre Auswahl zu treffen oder ggf. die Daten weiter zu bearbeiten. Die folgende Abbildung 21 zeigt ein Beispiel, wo wir das Gebäude einer technischen Anlage auswählen möchten.

![Qooxdoo Applikationsmaske - Eingabe von Referenzobjekt über Auswahl-Funktion](/uploads/v6/de-allgemein/vr6-eingabe_ref_objekt_auswahl_1.png "Abbildung 21: Eingabe von Referenzobjekt über Auswahl-Funktion")

> **Bemerkung:**: In dieser Ansicht können Sie Objekte bearbeiten, erstellen, löschen etc. Falls die Auswahl sich auf ein Objekt bezieht, das auch grafisch vorhanden ist, ist die Option “Aus Zeichnung“ eingeblendet.

### **Tabelle mit mehreren 	Referenzobjekten**

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

> **Bemerkung:**: Sie müssen ausreichende Rechte haben, um neue Benutzergruppen zu definieren, bearbeiten und entfernen. Deshalb ist es zu empfehlen, diese Aufgabe Ihren Administrator zu überlassen.
 

