<!-- TITLE: Admin Grafik -->
<!-- SUBTITLE: Modul "Grafik" für Bearbeitung von CAD-Zeichnungen -->

<!--  ![Grafik Admin](\_images\_title\graphics.png) -->

# Admin Grafik

## Zeichnung importieren

Bevor Sie eine Zeichnung im System importieren, stellen Sie sicher, dass die folgenden Anforderungen erfüllt sind:

·     Zeichnung muss in Meter sein. Prüfen Sie den Maßstab vor dem Import – unbedingt zu beachten! 

·     Versuchen Sie möglichst saubere Zeichnung zu importieren, damit Sie sich die Nacharbeit sparen. Vor allem überprüfen Sie zusammenhängende Objekte wie Blöcke - optional

·     Stellen Sie sicher, dass alle Layer und Objekte, die importiert werden müssen, ein und nicht gefroren sind.

Wenn die Zeichnung vorbereitet ist, klicken Sie auf das Menübutton und dann auf **Ausführen** -> **Zeichnung importieren**

![Neue Zeichnung importieren](\_images\graphics\graphics-admin-import-01.png)

In dem angezeigtem Fenster ändern Sie ggf. den **Code**, wählen Sie die **Kategorie** aus, z.B. *Fürth*, und geben Sie einen Namen (optional) an.

![Eingabe Name und Kategorie / Import neuer Zeichnung](\_images\graphics\graphics-admin-import-02.png)

Anschließend fügen Sie die zu importierenden Datei folgendermaßen hinzu:

Mit Klick auf das ![Neues Objekt Button](\_images\graphics\visionr-add-button.png) Zeichen wird ein neues Dokument erstellt, mit dem Sie die hochgeladene Datei verknüpfen können.

**Bemerkung: Ein neues Dokument im System heißt es ein neues Objekt vom Typ Dokument. Dieses Objekt kann mit einer Datei verknüpft werden. Die Datei bleibt beibehalten und über Versionierung / Aktualisierung des Dokumentes kann der Benutzer jedes Dokument aktualisieren, ohne ältere Versionen und Dateien zu verlieren bzw. löschen. Ein Dokument kann mit beliebiger Datei verknüpft werden. Das Hochladen der Datei erfolgt nur einmal und diese Datei kann mit mehreren Dokumenten verknüpft sein. Eine hochgeladene Datei wird als Dokument im System gekennzeichnet.**

So wählen Sie in dem Feld **Dokument** das Dokument aus. Falls die Datei hochgeladen ist, geben Sie den Namen in dem Feld und wählen Sie sie aus. Falls noch nicht hochgeladen, klicken Sie auf **Auswählen** oder **Neues Objekt**.

Mit Auswählen wird das virtuelle Dateisystem aufgemacht und Sie finden das Dokument und wählen es aus. Hier können Sie auch neues erstellen und Datei hochladen. Dazu können Sie **Ordner** in dem virtuellen System erstellen und so die hochgeladenen Dateien besser ordnen.  

![Neues Dokument - Datei hinzufügen / hochladen](\_images\graphics\graphics-admin-import-03.png)

Die Option **Neues Objekt** gibt die Möglichkeit direkt die Datei hochzuladen mit einigen vereinfachten Einstellungen, wie den *Ordner* ändern. Das machen Sie mit Doppelklick auf das Feld oder über das Optionsmenü rechts. 

![Datei hinzufügen](\_images\graphics\graphics-admin-import-04.png)

Die alternative Variante mit **Auswählen**:

![Datei hochladen über Auswählen](\_images\graphics\graphics-admin-import-05.png)

Sie können in dem angezeigten Fenster zu dem gewünschten Ordner navigieren und dort die Datei mit der Option **Neu** hochladen und direkt auswählen.

![Virtuelles Dateisystem - Datei in einem bestimmten Ordner hochladen](\_images\graphics\graphics-admin-import-06.png)

Dann nutzen Sie die Option **Drag & Drop** oder **Hinzufügen**

![graphics-admin-import-07](\_images\graphics\graphics-admin-import-07.png)

Wählen Sie die hochgeladene Datei aus.

Wenn das Dokument verknüpft ist, können Sie den Importvorgang ausführen. Es gibt einige Optionen vor dem Import, die Sie anpassen können, wie:

·     Skalierungsfaktor

·     Abrundungswinkel

·     Zum Nullpunkt zentrieren?

·     Verschiebung X / Y

·     Groß / Kleinschreibung

·     Synchronisieren? – falls aktiv, die Zeichnung wird mit Klick auf **Aktualisieren** mit dem importierten Dokument synchronisiert, falls diese Option aktiv ist. 

·     Alte Objekte bei Aktualisierung ersetzten? -Ältere Inhalte werden gelöscht, falls diese Option aktiv ist.

·     Zuordnungsgruppe – welche Objekte aus welchem Layer auf welchen verschoben werden.

·     Layer-Zuordnung – beim Import können Sie die Layer und die Objekte nach Bedarf zuordnen. Die Zuordnungstabelle muss aber davor definiert sein.

Bestätigen Sie die Auswahl und das Dokument wird zum Import verknüpft. Sie können mehrere Zeichnungen / Dateien gleichzeitig importieren.

![Importierte Zeichnung aktualisieren](\_images\graphics\graphics-admin-import-08.png)

Anschließend führen Sie den Importvorgang aus.

![Aktualisierung der Zeichnung ausführen](\_images\graphics\graphics-admin-import-09.png)

Nach dem Import wird die Zeichnung angezeigt. Jedoch ist die erste Darstellung der Zeichnung manchmal verwirrend, da alle Layers ein sind und alle mögliche Objekte werden angezeigt. Standardmäßig sind die Texte in VisionR mit dynamischer Größe, deshalb werden diese nach dem Zoomfaktor angepasst. 

**Bemerkung: Um einen sauberen Import zu bekommen, müssen Sie die Zeichnung davor analysieren und ggf. bereinigen, vor allem den richtigen Maßstab zu setzen (muss in Meters sein).**

**Bemerkung: Standardmäßig wird eine Zeichnungsvorlage geliefert, die Sie nutzten können. Sie können die Vorlage kopieren und ggf. anpassen. Als Vorlage kann auch jede beliebige Zeichnung aus dem System genutzt werden. Die Vorlage ist praktisch eine leere Zeichnung mit vordefinierten Layers und Ansichten. Diese werden einfach auf die neue Zeichnung übertragen und können genutzt werden, um die Objekte richtig zu platzieren. Aufgrund dieser Einstellungen wird die Zeichnung dementsprechend angezeigt. Mehr dazu unter *Vorlagen und Layerzuordnungen***.

### Zeichnung aktualisieren

Jede Zeichnung kann in einem späteren Zeitpunkt aktualisiert werden, wie zum Beispiel wenn eine neuere Version der Zeicnung vorhanden ist. Die Aktualisierung erfolgt in einigen Schritten, identisch zu dem Importvorgang. 
Die Frage an dieser Stelle ist: **wann soll eine Zeichnunge aktualisiert werden?**. Falls Sie Änderungen in der Zeichnung vorgenommen haben und zwar in den CAD Objekten, dann ist eine Aktualisierung durch neuere Datei nicht immer vorteilhaft. So werden neuere Objekte verloren, falls die Synchronisation aktiv ist. Oder es könnte auch gut sein, dass alte Objekte nicht gelöscht werden und doppelt vorkommen. 
Deshalb können Sie überlegen, wann eine Aktualisierung nötig ist und wie diese durchzuführen ist. 
**Tipp: Sobald Sie die Funktion *Layer zuordnen!* nutzen, werden bei Aktualisierung die neuere Objekte aus dem neuen Plan auf die Layer kommen, die in der Zeichnung definiert sind. Vermutlich sind dies unterschiedlich als die Vorgabelayer. Deshalb imporieren / aktualisieren Sie die Zeichnung ohne Layerzuordnung und dann können Sie die neuen und die alten Objekte vergleichen und die nicht mehr benötigten löschen. Die alten werden auf dem VisionR A- Layer liegen und die neuen auf einem neuen Layer. **

 Wählen Sie zuerst die Zeichnung / en, die Sie aktualisieren möchten und mit rechter Maustaste rufen Sie das Menü **Bearbeiten**. Wichtig ist es, dass Sie die Zeichnung als Objekt bearbeiten, nicht den Inhalt der Zeichnung als Plan.

![Zeichnung zum Aktualisieren auswählen](\_images\graphics\graphics-admin-update-01.png)

In dem Eigenschaftsfenster klicken Sie auf **Dokumente** und wählen Sie das gewünschte Dokument, das Sie ersetzen möchten. 

![Dokument zur Aktualisierung auswählen](\_images\graphics\graphics-admin-update-02.png)

Mit der rechte Maustaste wählen Sie die Option **Bearbeiten**, um das Dokument aufzumachen und die Datei zu aktualisieren.

![graphics-admin-update-03](\_images\graphics\graphics-admin-update-03.png)

Dann haben Sie die Option **Version Hochladen!** oder über **Auswählen** die Datei zu ersetzen. 

![Neue Version der Datei / neue Datei hochladen](\_images\graphics\graphics-admin-update-04.png)

Fügen Sie die Datei hinzu. Drag & Drop Funktion ist auch vorhanden.

![Neue Version der Datei / neue Datei hochladen](\_images\graphics\graphics-admin-update-05.png)

Sobald die Datei hochgeladen ist, schließen Sie die Fenster bis Sie zurück bei den Dokumenten in der Zeichnung sind:

![Wieder in Einstellungen der Zeichnung zurückkehren](\_images\graphics\graphics-admin-update-02.png)

Falls Die Option *Synchronisieren?* aktiv ist, können Sie die Zeichnung aktualisieren. Sonst werden die Änderungen aus diesem Dokument nicht übernommen. 

**Bemerkung: Sie können hier mehrere Dokumente verknüpft haben und nur diese synchronisieren, die Sie tatsächlich brauchen. Zum Beispiel haben Sie Elektropläne auch in der Zeichnung importiert (aus anderer Datei). Diese haben sich geändert durch eine Umbau und Sie müssen nur diese ersetzen. Dann lassen Sie die Datei mit den Plänen synchronisieren und den Plan nicht.**

Sobald Sie das angepasst haben, können Sie die Aktualisierung starten:

![Aktualisierung ausführen](\_images\graphics\graphics-admin-update-run.png)

## Vorlagen und Layerzuordnungen

### Vorlagen

Sie können jede beliebige Zeichnung als Vorlage nutzen oder selber eine eigene Vorlage erstellen oder die von Plan-Vision GmbH vordefinierte nutzen und ggf. erweitern. 

Die **Vorlage** ist eine Zeichnung, von der die Layers und die Ansichten kopiert werden. Wenn diese Einstellungen schon für eine Zeichnung gemacht sind, kann diese als Vorlage genutzt werden. Diese können Sie direkt beim Import nutzen und die Layers und die Ansichten werden kopiert.

Damit die Ansichten dann auch sauber sind, müssen die Objekte auf die richtigen Layers zugeordnet werden, z.B. alle Türe auf Layer, der passen für Türe ist. Dafür steht die Option **Layerzuordnung**, wo Sie die Zuordnungen definieren können.

Die deutsche Vorlage (die Layers sind auf Deutsch definiert) von Plan-Vision sieht folgendermaßen aus:

![Vorlage Zeichnung de-DE](\_images\graphics\graphics-admin-import-10.png)

Die Systemvorlage ist eine leere Zeichnung mit den richtigen Layers und Ansichten. Die Layers sind in der Vorlage fongendermaßen definiert:

·     A- Layers – alle Layers, die mit **A-** an fangen, sind für die Objekte aus dem Architektenplan gedacht – die Objekte aus der zu importierten Zeichnung sollen auf diesen zugeordnet werden.

·     FM- Layers – alle Layers, die mit **FM-** an fangen, werden genutzt, um die FM-Objekte drauf zu speichern. Diese werden erst im VisionR für die neuen Objete genutzt. 

Falls Sie eigene Ansichten bauen möchten, müssen Sie diese auch in der Vorlage erstellen oder:

**Bemerkung: Jede Zeichnung kann als Vorlage genutzt werden. Dazu werden die Layer und die Ansichten dieser Zeichnung übernommen.**

### Layerzuordnungen

Der Benutzer kann unterschiedliche Layerzuordnungen definieren und diese beim Import oder später anwenden. 

Eine Layerzuordnung beinhaltet das Paar **VON** und **NACH** Layers, wo Sie eingeben können, welcher Layer auf welchen übertragen wird. Dazu gibt es auch Optionen wie **VON-Layer entfernen?** etc.. Die Zuordnungen erfassen Sie in einer Zuordnungsgruppe. Sie können mehrere Zuordnungsgruppen haben, z.B. für Zeichnungen mit unterschiedlichen Layerstrukturen.

Eine neue Zuordnungsgruppe erstellen Sie folgendermaßen: 

Öffnen Sie die Admin Maske für das Modul Grafik. 

![Neue Layerzuordnung erstellen - Schritt 01](\_images\graphics\graphics-admin-import-11.png)

 Dann klicken Sie auf **Layerzuordnungen**.

Die Tabelle mit den Zuordnungen wird angezeigt sobald eine Zuordnungsgruppe mit Layerzuordnungen existiert. Die folgende Abbildung zeigt eine Zuordnungsgruppe mit einigen Zuordnungen. 

![Neue Layerzuordnung erstellen - Schritt 02](\_images\graphics\graphics-admin-import-12.png)

Sie können in der Tabelle direkt neue Zuordnungen zu dieser Gruppe erstellen oder Sie müssen zuerst eine neue Gruppe erstellen und drin definieren Sie die Layerzuordnungen.

**Neue Zuordnungsgruppe** erstellen Sie mit rechter Maustaste über die Baumstruktur links der Tabelle.

 ![Neue Layerzuordnung erstellen - Schritt 03](\_images\graphics\graphics-admin-import-13.png)

In dem angezeigten Fenster geben Sie den Namen und fügen Sie die gewünschten Layerzuordnungen hinzu. Sie können immer wieder Layerzuordnungen hinzufügen, auch im Nachhinein. 

![Neue Layerzuordnung erstellen - Schritt 04](\_images\graphics\graphics-admin-import-14.png) 

Geben Sie den VON und den NACH Layer ein und speichern Sie die Zuordnung. Sie können die Gruppe beim Import oder auch später nutzen. 

![Neue Layerzuordnung erstellen - Schritt 05](\_images\graphics\graphics-admin-import-15.png)

Fügen Sie andere Zuordnungen hinzu. 

Ein Beispiel von vollständiger Zuordnungsgruppe ist in der Abbildung davor zu sehen. 

Alternativ können Sie die *Zuordnungsgruppe* und *Layerzuordnungen* direkt beim Import erstellen und anwenden. Diese wird für spätere Nutzung gespeichert. 

 ![graphics-admin-import-16](\_images\graphics\graphics-admin-import-16.png)

In dem angezeigten Fenster mit den zur Verfügung stehenden Zuordnungsgruppen können Sie über das Funktionsmenü direkt neue Zuordnungsgruppe erstellen. Folgen Sie dann die Schritte von oben.
