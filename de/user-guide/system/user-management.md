<!-- TITLE: Benutzerverwaltung -->
<!-- SUBTITLE: Überblick Benutzerverwaltung -->

Deutsch | [English](/en/user-guide/system/user-management)
*Sie sind hier: [Home](/home/) > [Benutzerhandbuch](/de/user-guide) > [System](/de/user-guide/system) > Benutzerverwaltung*

# Modul "Benutzerverwaltung"

# Übersicht

Die Benutzerverwaltung rufen Sie aus der *Startseite -> Administration -> System -> Benutzerverwaltung* auf.

![Vr Benutzervewaltung Uberblick](_images/user-management/overview.jpg "Vr Benutzervewaltung Uberblick")

# Benutzer bearbeiten

Öffnen Sie die Applikationsmaske und dann klicken Sie auf `Benutzer`. 

![Vr Benutzervewaltung Benutzer](_images/user-management/users.jpg "Benutzervewaltung Benutzer")

Aus der Liste den gewünschten Benutzer auswählen und mit Doppelklick wird der Datensatz aufgemacht. Dann klicken Sie auf den Button `Bearbeiten`. 

![Vr Benutzervewaltung Benutzer Bearbeiten 2](_images/user-management/edit-user-2.jpg "Benutzervewaltung Benutzer Bearbeiten 2")



Alternativ können Sie den Datensatz selektieren, rechter Mausklick und dann `Bearbeiten` auswählen.



![Vr Benutzervewaltung Benutzer Bearbeiten 1](_images/user-management/edit-user-1.jpg "Benutzervewaltung Benutzer Bearbeiten 1")



Hier können Sie schnell die Person und die Benutzergruppe ändern. Falls Sie alle Eigenschaften der Person oder des Benutzers bearbeiten möchten, gehen Sie über den Menübutton ![Vr Menu Button](_images/user-management/menu-button.jpg "Vr Menu Button") auf `Administration`.

![Vr Benutzervewaltung Benutzer Bearbeiten Admin](_images/user-management/user-edit-admin-1.jpg "Vr Benutzervewaltung Benutzer Bearbeiten Admin")

![Vr Benutzervewaltung Benutzer Bearbeiten Admin 2](_images/user-management/user-edit-admin-2.jpg "Vr Benutzervewaltung Benutzer Bearbeiten Admin 2")

Hier können Sie alle Einstellungen des Benutzers bearbeiten. Die wichtigsten sind:

* **Benutzer-ID** - alphanumerische Eingabe für den Benutzernamen, die bei der Anmeldung angefordert wird
* **Passwort** - verdescktes Eingabefeld für das Passwort, welches bei der Anmeldung angefordert wird
* **Benutzerrolle** - hier werden die Benutzerberechtigungen definiert
* **Person** - welche Person zu diesem Benutzerkotno  zugeordnet ist, wichtig für E-Mail-Kommunikation
* **Aktiviert?** - Angabe ob das Benutzerkonto aktiviert ist. Wenn der Wert auf "Nein" eingestellt wird, kann sich der Benutzer mit diesem Benutzernamen mit sofortiger wirkung nicht mehr anmelden

Bei Bedarf können die restlichen Einstellungen genutzt werden.

Mit Klick auf den Menübutton ![Vr Menu Button](_images/user-management/menu-button.jpg "Vr Menu Button")  und dann auf `Auswählen` in dem Feld Benutzerrolle wird die Rollenhierarchie angezeigt und Sie können aus den Benutzerrollen wählen. Alternativ können Sie mit Doppelklick die Auswahlliste aufmachen und eine Benutzerrolle zuweisen ggf. ersetzen. Der Benutzer muss sich danach nur aus- und wieder einloggen. 

Die Eigenschaften der Rolle selbst sehen Sie, wenn Sie die Gruppe öffnen – dafür klicken Sie auf den Menübutton `Bearbeiten`. Sie können in der Gruppe die Berechtigungen einstellen, ggf. welche Berechtigungen diese Gruppe an anderen weiter leitet oder welche sie von anderen übernimmt. Die Erstellung und die Anpassung der Benutzerrolle sind demnächst beschrieben.

# Neuen Benutzer anlegen
In der Tabelle mit den Benutzer klicken Sie auf das Menübutton ![Vr Menu Button](_images/user-management/menu-button.jpg "Vr Menu Button") (oder rechte Maustaste) und dann auf `Neu`. Ein Formular für neues Objekt wird angezeigt. Füllen Sie die oben genannten Pflichtfelder aus und speichern Sie den Datensatz. 

Hier ist es wichtig, dass die Benutzerrolle bereits vorhanden ist und die Person dem Benutzer zugeordnet ist. Es ist wichtig eine Person zuzuordnen, da wichtige Einstellungen, wie z. B. versenden von E-Mail mit den Angaben im Personendatensatz zusammenhängen. 

# Benutzerrolle erstellen
Die Benutzerrolle können Sie direkt in dem Benutzerformular erstellen oder in der Ansicht mit den Benutzerrollen. 
Die Ansicht öffnen Sie mit Klick auf den Button `Benutzerrollen`. In der Baumstruktur sind diese nach Struktur / Vererbung angezeigt. Sie sind in 2 Typen unterteilt: **Vordefiniert** und **Benutzerdefiniert**. Die neuen Rollen erstellen Sie bitte in der Kategorie **benutzerdefiniert**. 
Um eine neue Benutzerrolle zu erstellen: rechter Mausklick und dann auf `Neu`. 

![Vr Benutzervewaltung Benutzerrolle Neu](_images/user-management/user_role-new-1.jpg "Vr Benutzervewaltung Benutzerrolle Neu")



Öffnen Sie die neu zu erstellenden Rolle in Admin- Ansicht, damit Sie alle Felder bearbeiten können.

![Vr Benutzervewaltung Benutzerrolle Neu 2](_images/user-management/user_role-new-2.jpg "Vr Benutzervewaltung Benutzerrolle Neu 2")

![Vr Benutzervewaltung Benutzerrolle Neu 3](_images/user-management/user_role-new-3.jpg "Vr Benutzervewaltung Benutzerrolle Neu 3")

Machen Sie die folgenden Angaben:

* **Name** - wie die Rolle heißt
* **Kategorie** - Bitte wählen Sie hier die Kategorie *benutzerdefiniert* 
* **Vererbt Rechte von** - Hier durch Kombination von den vordefinierten Benutzerrollen können Sie die neue anpassen. 
* **Leitet Rechte weiter an** - An welcher Benutzerrolle diese ihre Rechte weiter leitet.

![Vr Benutzervewaltung Benutzerrolle Neu 4 Kategorie Auswahl](_images/user-management/user_role-new-4.jpg "Vr Benutzervewaltung Benutzerrolle Neu 4 Kategorie Auswahl")


## Vererbung der Rechte

Damit Sie die Benutzerrolle richtig einstellen, müssen Sie aus den vordefinierten Rechte/Rollen kombinieren, damit Sie die Rechte an Ihren Bedürfnisse anpassen. 

> **Beispiel:** *Berlin 1 - OG* - Spezielle Gruppe für die Personengruppe, die das 1 OG in Berlin (aus unserem Demoprojekt) bearbeitet. Diese Gruppe kann nur diesen Plan sehen und bearbeiten. Deshalb wird nur die Rolle **Grafik (schreiben)** zugeordnet. 

![Vr Benutzervewaltung Benutzerrolle Neu Beispiel](_images/user-management/user_role-new-example.jpg "Vr Benutzervewaltung Benutzerrolle Neu Beispiel")

Die vordefinierten Benutzerrollen nach Modul sind in 4 Kategorien unterteilt: 
* Admin
* Lesen
* Öffnen
* Schreiben

Sie können aus der Liste die richtigen auswählen und so die Rechte dieser Gruppe an den jeweiligen Modulen und Modi anpassen. 
Sie müssen auch daran denken, dass jede Gruppe ihre Rechte weitergeben kann. Die Vererbung soll auch stimmen, falls diese Gruppe unter einer anderen Gruppe stehen soll. 
Überlegen Sie gut die Benutzerrechte, bevor Sie diese einspielen. Falls Sie Unterstützung brauchen, wenden Sie sich an unseren Support. 

## Weiterleitung der Rechte

Jede Benutzerrolle kann auch ihre Rechte weitergeben (die umgekehrte Relation der Vererbung). Sie können alle vordefinierten und benutzerdefinierten nutzen, um die gewünschte Benutzerrolle zu erstellen. 
Die Weiterleitung ist ähnlich wie die Vererbung einzustellen. Hier müssen Sie nur daran denken, dass wenn eine Rolle ihre Rechte an einer anderen Rolle weiterleitet, die zweite Rolle fügt direkt sie als Vererbung von den ersten Rolle hinzu. 

# Benutzerrolle anpassen
Wenn Sie die Benutzergruppe bearbeiten möchten, müssen Sie diese Benutzergruppe aufmachen und die Rechte anpassen. 
Dieser Vorgang ist nur von dem Administrator zu machen! Falls Sie nicht sicher sind, bitte keine Änderungen vornehmen. 
Navigieren Sie zu den Benutzerrollen und öffnen Sie die gewünschte Benutzerrolle, die Sie anpassen möchten oder öffnen Sie die Person, deren Benutzerrolle Sie bearbeiten möchten und in dem Feld **Benutzerrolle** `Bearbeiten`. Somit wird die Benutzerrolle in Bearbeitungsmodus in einem Popup-Dialog aufgemacht. 

> **Bemerkung**: Die Änderungen, die Sie in einer Benutzerrolle vornehmen, werden auf alle zugeordneten Benutzerkonten übertragen.

![Vr Benutzervewaltung Benutzer Benutzerrolle Bearbeiten](_images/user-management/user-edit-user_role.jpg "Vr Benutzervewaltung Benutzer Benutzerrolle Bearbeiten")

> **Hinweis** Die Benutzerrollen sind oberhalb beschrieben.

Durch Veränderung der vererbten Rechte, passen Sie die Zugriffsberechtigungen der Benutzerrolle an.