<!-- TITLE: Benutzerverwaltung -->
<!-- SUBTITLE: Überblick Benutzerverwaltung -->

Deutsch | [English](/en/admin-guide)
*Sie sind hier: [Home](/home/) > [Administratorenhandbuch](/de/admin-guide) > Benutzerverwaltung*

# Übersicht

Die Benutzerverwaltung rufen Sie aus der *Startseite -> Administration -> Benutzerverwaltung* auf.

![Vr Benutzervewaltung Uberblick](/uploads/administration/vr-benutzervewaltung-uberblick.jpg "Vr Benutzervewaltung Uberblick")
 
# Benutzer bearbeiten

Öffnen Sie die Applikationsmaske und dann klicken Sie auf `Benutzer`. 

![Vr Benutzervewaltung Benutzer](/uploads/administration/vr-benutzervewaltung-benutzer.jpg "Vr Benutzervewaltung Benutzer")

Aus der Liste den gewünschten Benutzer auswählen und mit Doppelklick wird der Datensatz aufgemacht. Klicken Sie auf den Button `Bearbeiten`. Alternativ können Sie den Datensatz selektieren, rechter Mausklick und dann `Bearbeiten` auswählen.

![Vr Benutzervewaltung Benutzer Bearbeiten 2](/uploads/administration/vr-benutzervewaltung-benutzer-bearbeiten-2.jpg "Vr Benutzervewaltung Benutzer Bearbeiten 2")

![Vr Benutzervewaltung Benutzer Bearbeiten 1](/uploads/administration/vr-benutzervewaltung-benutzer-bearbeiten-1.jpg "Vr Benutzervewaltung Benutzer Bearbeiten 1")

Sie können hier auf die schnelle die Person und die Benutzergruppe ändern. Falls Sie alle Einstellungen bearbeiten möchten, gehen Sie über den Menübutton ![Vr Menu Button](/uploads/administration/vr-menu-button.jpg "Vr Menu Button") auf `Administration`.

![Vr Benutzervewaltung Benutzer Bearbeiten Admin](/uploads/administration/vr-benutzervewaltung-benutzer-bearbeiten-admin.jpg "Vr Benutzervewaltung Benutzer Bearbeiten Admin")

![Vr Benutzervewaltung Benutzer Bearbeiten Admin 2](/uploads/administration/vr-benutzervewaltung-benutzer-bearbeiten-admin-2.jpg "Vr Benutzervewaltung Benutzer Bearbeiten Admin 2")

Hier können Sie alle Einstellungen des Benutzers bearbeiten. Die wichtigsten sind:

* Benutzer-ID - die Zeichenkette, mit der der Benutzer sich an meldet.
* Passwort
* Benutzerrolle - hier werden die wirksamen Einstellungen für die Berechtigungen definiert.
* Person - welche Person zu diesem Benutzerkotno  zugeordnet ist
* Aktiviert? - ob das Benutzerkonto aktiviert ist.

Bei Bedarf schauen Sie die restlichen Einstellungen und ändern Sie diese gegebenenfalls. 

Mit Klick auf den Menübutton ![Vr Menu Button](/uploads/administration/vr-menu-button.jpg "Vr Menu Button")  und dann auf `Auswählen` in dem Feld Benutzerrolle wird die Rollenhierarchie angezeigt und Sie können aus den Benutzerrollen wählen. Alternativ können Sie mit Doppelklick die Auswahlliste aufmachen und eine Benutzerrolle zuweisen ggf. ersetzen. Der Benutzer muss sich danach nur aus- und wieder einloggen. 

Die Eigenschaften der Rolle selbst sehen Sie, wenn Sie die Gruppe öffnen – dafür klicken Sie auf den Menübutton `Bearbeiten`. Sie können in der Gruppe die Berechtigungen einstellen, ggf. welche Berechtigungen diese Gruppe an anderen weiterleitet oder welche sie von anderen übernimmt. Die Erstellung und die Anpassung der Benutzerrolle ist demnächst beschrieben.

# Neue Benutzer anlegen
In der Tabelle mit den Benutzer klicken Sie auf das Menü   und dann auf Neu. Das Formular wird angezeigt. Geben Sie die Daten (Benutzer ID, Passwort, Person und Gruppe) ein und speichern Sie den Datensatz. Siehe Bilder vom Punkt 2. 


# Benutzerrolle erstellen
Die Benutzerrolle können Sie direkt in dem Benutzerformular erstellen oder in der Ansicht mit den Benutzerrollen. 
Die Ansicht öffnen Sie mit Klick auf den Button `Benutzerrollen`. In der Baumstruktur sind diese nach Struktur / Vererbung angezeigt. Sie sind in 2 Typen unterteilt: **Vordefiniert** und **Benutzerdefiniert**. Die neuen Rollen erstellen Sie bitte in der Kategorie **benutzerdefiniert**. 
Um eine neue Benutzerrolle zu erstellen: rechter Mausklick und dann auf `Neu`. 

![Vr Benutzervewaltung Benutzerrolle Neu](/uploads/administration/vr-benutzervewaltung-benutzerrolle-neu.jpg "Vr Benutzervewaltung Benutzerrolle Neu")

Öffnen Sie die neu zu erstellenden Rolle in Admin- Ansicht, damit Sie alle Felder bearbeiten können.

![Vr Benutzervewaltung Benutzerrolle Neu 2](/uploads/administration/vr-benutzervewaltung-benutzerrolle-neu-2.jpg "Vr Benutzervewaltung Benutzerrolle Neu 2")

![Vr Benutzervewaltung Benutzerrolle Neu 3](/uploads/administration/vr-benutzervewaltung-benutzerrolle-neu-3.jpg "Vr Benutzervewaltung Benutzerrolle Neu 3")

Machen Sie die folgenden Angaben:

> * **Name** - wie die Rolle heißt
> * **Kategorie** - Bitte wählen Sie hier die Kategorie *benutzerdefiniert* 
> * **Vererbt Rechte von** - Hier durch Kombination von den vordefinierten Benutzerrollen können Sie die neue anpassen. 
> * **Leitet Rechte weiter an** - An welcher Benutzerrolle diese ihre Rechte weiter leitet.
> 
![Vr Benutzervewaltung Benutzerrolle Neu 4 Kategorie Auswahl](/uploads/administration/vr-benutzervewaltung-benutzerrolle-neu-4-kategorie-auswahl.jpg "Vr Benutzervewaltung Benutzerrolle Neu 4 Kategorie Auswahl")
{.is-info}

## Vererbung der Rechte

Damit Sie die Benutzerrolle richtig einstellen, müssen Sie aus den vordefinierten Rechte/Rollen kombinieren, damit Sie die Rechte an Ihren Bedürfnisse anpassen. 

> **Beispiel:** *Berlin 1 - OG* - Spezielle Gruppe für die Personengruppe, die das 1 OG in Berlin (aus unserem Demoprojekt) bearbeitet. Diese Gruppe kann nur diesen Plan sehen und bearbeiten. Deshalb wird nur die Rolle **Grafik (schreiben)** zugeordnet. 
> 
![Vr Benutzervewaltung Benutzerrolle Neu Beispiel](/uploads/administration/vr-benutzervewaltung-benutzerrolle-neu-beispiel.jpg "Vr Benutzervewaltung Benutzerrolle Neu Beispiel")
{.is-info}

# Benutzerrolle anpassen
Wenn Sie die Benutzergruppe bearbeiten möchten, müssen Sie diese Benutzergruppe aufmachen und die Rechte anpassen. 
Dieser Vorgang ist nur von dem Administrator zu machen! Falls Sie nicht sicher sind, bitte keine Änderungen vornehmen. 
Navigieren Sie zu den Benutzerrollen und öffnen Sie die gewünschte Benutzerrolle, die Sie anpassen möchten oder öffnen Sie die Person, deren Benutzerrolle Sie bearbeiten möchten und in dem Feld **Benutzerrolle** `Bearbeiten`. So werden Sie direkt die Benutzerrolle zur Bearbeitung aufgemacht. 

> **Bemerkung**: Die Änderungen, die Sie in einer Benutzerrolle vornehmen, werden auf alle zugeordneten Benutzerkontos übertragen.

![Vr Benutzervewaltung Benutzer Benutzerrolle Bearbeiten](/uploads/administration/vr-benutzervewaltung-benutzer-benutzerrolle-bearbeiten.jpg "Vr Benutzervewaltung Benutzer Benutzerrolle Bearbeiten")

> Die Auswahl einer bestimmten Benutzerrolle aus der Liste mit den Benutzerrollen wird als Beispiel für die Erstellung einer neuen Rolle benutzt. {.is-info}

Durch Ändern der Rechte, die von dieser Benutzergruppe geerbt sind, werden die Rechte angepasst. 
Sie müssen auch daran denken, dass jede Gruppe ihre Rechte weitergeben kann. Überlegen Sie gut die Benutzerrechte, bevor Sie diese einspielen. Falls Sie Unterstützung brauchen, wenden Sie sich an unseren Support. 

