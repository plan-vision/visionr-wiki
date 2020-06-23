<!-- TITLE: Benutzerverwaltung für Kundenadministrator-->
<!-- SUBTITLE: Verwaltung der Benutzer und Zuordnung der Benutzerrollen -->

Deutsch | [English](/en/modules/user-management)
*Sie sind hier: [Home](/home) > [Benutzerhandbuch](/de/user-guide)  > [Benutzerverwaltung](/de/modules/user-management) > Benutzerverwaltung Kundenadministrator*

# Allgemeine Beschreibung

Die Benutzerverwaltung rufen Sie aus der Indexseite, indem Sie die Option **Administration** -> **System** auswählen. Dann werden die Systemmodule angezeigt. Klicken Sie auf ***Benutzerverwaltung***, wie auf dem Screenshot gezeigt ist.

![Qooxdoo Applikationsmaske - Benutzerverwaltung öffnen](/uploads/de-administration/de-user_management/vr7-benutzerverwaltung-1.png "Benutzerverwaltung öffnen")

Die Benutzer können unterschiedliche Benutzerrollen haben und der Kundenadministrator kann diese Rollen anpassen und vergeben. 
Eine Benutzerrolle kann unterschiediche Zugriffe auf unterschidlichen Ebenen haben. Die Benutzerrollen können vererbt werden und sowohl auch können sie auch weitergeleitet werden. So wird der Zugriff sogar auf Objektebene verfeinert werden. 

Voreingestellt sind die Zugriffe für ** Lesen / Schreiben / Verwalten (Administrieren)** pro Modul vordefiniert. Eine Mischung dieser vordefinierten Zugriffsrollen definiert eine neue Benutzerrolle, die ihre Rechte weitergeben kann. 

> **Beispiel:** Eine Benutzerrolle wird erstellt für die Bearbeitung der Flächen - **Schreibrechte** für das Modul **Flächenmanagement** wird die Bearbeitung ermöglichen. Darüber können wir eine neue Rolle erstellen, die diese erbt und dazu können wir zum Beispiel die **Schreibrechte** für das Modul **Inventar** hinzufügen. Dann hat die neue Gruppe die Rechte von beiden. Die beiden Benutzerrollen leiten ihre Rechte an eine Obergruppe, z.B. **Kundenadministrator**, der alle Rechte von allen Untergruppen erbt. So können Sie hierarchisch die Benutzerrechte vergeben und bis auf ein bestimmtes Objektfeld verfeinern. 
{.is-info}

# Allgemein

Die Applikationsmaske des Systemmoduls wird geladen. Links stehen die Objekte und die Filter zur Verfügung. Für die Kundenadministratoren sind in den meisten Fällen die Benutzer und die Benutzerrollen ausreichend, um die Benutzerrechte fein anzupassen.

Die folgende Abbildung zeigt die Tabelle mit den Benutzern. Die Namen und  die Benutzer sind für das Beispiel ausgeblendet. 

![Qooxdoo Applikationsmaske - Benutzertabelle](/uploads/de-administration/de-user_management/vr7-benutzerverwaltung-2.png "Benutzertabelle")

# Benutzer bearbeiten

Aus der Liste den/die gewünschten Benutzer auswählen und mit der rechten Maustaste auf `Bearbeiten` klicken. Das Benutzer-Formularfenster wird geöffnet:

![Qooxdoo Applikationsmaske - Benutzer bearbeiten](/uploads/de-administration/de-user_management/vr7-benutzerverwaltung-3.png "Benutzer bearbeiten")

Alternativ können Sie mit Doppelklick auf eine Zeile die Objektvorschau aufmachen und dann auf `Bearbeiten` klicken. Das Formular wird aufgemacht. 

![Qooxdoo Applikationsmaske - Benutzer bearbeiten](/uploads/de-administration/de-user_management/vr7-benutzerverwaltung-4.png "Benutzer bearbeiten")

Die wichtigsten Eingaben sind die **Benutzer-ID, Passwort, Person und Benutzerrolle**. Dazu werden die Sitzungen auch protokolliert. Die **Benutzerrolle** beinhaltet die wirksamen Einstellungen für die Berechtigungen. 
Mit Klick auf den Menübutton in dem Feld **Benutzerrolle** können Sie die Benutzerrolle ändern:

![Qooxdoo Applikationsmaske - Benutzer bearbeiten](/uploads/de-administration/de-user_management/vr7-benutzerverwaltung-5.png "Benutzer bearbeiten")

> **Bemerkung:** Alle Benutzerrollen werden aufgelistet, sowohl die einfachsten wie *Lesen / Schreiben / Admin* bis auf die schon erstellten Benutzerrollen. So können Sie jede Benutzerrolle erben und weiter anpassen.
 
Die Eigenschaften der Rolle sehen Sie, wenn Sie die Rolle öffnen – dafür klicken Sie auf den Menübutton `Bearbeiten` oder auf `Details`, um die Rollendetails zu sehen.

![Qooxdoo Applikationsmaske - Benutzerrolle Details](/uploads/de-administration/de-user_management/vr7-benutzerverwaltung-6.png "Benutzerrolle Details")

Sie können in der Rolle die Berechtigungen einstellen, ggf. welche Berechtigungen diese Rolle an anderen weiterleitet oder welche sie von anderen übernimmt. Die Vererbung können Sie in der Untertabelle *Struktur* anpassen. Dazu kann die Benutzerrolle ihre Rechte weiterleiten. 
Wenn Sie die Benutzerrolle aufmachen, können Sie auch alle Benutzer dieser Gruppe sehen. Aus Datenschutzgründen sind die Screenshots ohne reelle Personen und Gruppen zu sehen. 

# Neue Benutzer anlegen

In der Tabellenansicht mit den Benutzer klicken Sie auf das Menü ![Qooxdoo Applikationsmaske - Menü Button](/uploads/de-ikonen/vr7-button-menu.png "Menü Button") und dann auf `Neu`. Wählen Sie **Benutzer** aus.
Das Formular wird angezeigt. Geben Sie die Daten (Benutzer ID, Passwort, Person und Benutzerrolle) ein und speichern Sie den Datensatz. 
Alternativ können Sie mit rechter Maustaste das Menü aufrufen und dann `Neu` auswählen.

![Qooxdoo Applikationsmaske - Neuen Benutzer anlegen](/uploads/de-administration/de-user_management/vr7-benutzerverwaltung-7.png "Neuen Benutzer anlegen")

# Benutzergruppe erstellen / anpassen

Wenn Sie die Benutzergruppe (Benutzerrolle) bearbeiten möchten, müssen Sie diese Benutzergruppe aufmachen und die Rechte anpassen. 
Dieser Vorgang ist nur von dem Administrator zu machen! Falls Sie nicht sicher sind, bitte keine Änderungen vornehmen. 
Navigieren Sie zu den Benutzerrollen und öffnen Sie diese. Sie können für jede Benutzerrolle die Rechte unterschiedlich mischen, vererben und weitergeben. Bitte wenden Sie Sich an dem Administrator. Die Voreinstellungen werden am besten von Plan Vision GmbH durchgeführt. Diese können jederzeit geändert werden. 
