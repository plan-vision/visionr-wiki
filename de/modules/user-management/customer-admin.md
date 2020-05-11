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

# Maske „Benutzerverwaltung“

Die Applikationsmaske des Systemmoduls wird geladen. Links stehen die Objekte und die Filter zur Verfügung. Für die Kundenadministratoren sind in den meisten Fällen die Benutzer und die Benutzerrollen ausreichend, um die Benutzerrechte fein anzupassen.

Die folgende Abbildung zeigt die Tabelle mit den Benutzern. Die Namen und  die Benutzer sind für das Beispiel ausgeblendet. 

![Qooxdoo Applikationsmaske - Benutzertabelle](/uploads/de-administration/de-user_management/vr7-benutzerverwaltung-2.png "Benutzertabelle")

## Benutzer bearbeiten

Aus der Liste den/die gewünschten Benutzer auswählen und mit der rechten Maustaste auf `Bearbeiten` klicken. Das Benutzer-Formularfenster wird geöffnet:

![Qooxdoo Applikationsmaske - Benutzer bearbeiten](/uploads/de-administration/de-user_management/vr7-benutzerverwaltung-3.png "Benutzer bearbeiten")

Alternativ können Sie mit Doppelklick auf eine Zeile die Objektvorschau 

Hier geben Sie die **Benutzer-ID, Passwort, Person und Gruppe** an. Die Gruppe beinhaltet die wirksamen Einstellungen für die Berechtigung. Mit Klick auf den Menübutton in dem Feld **Gruppe** wird die Gruppenhierarchie der vorhandenen Berechtigungen angezeigt:

![Qooxdoo Applikationsmaske - Benutzerverwaltung öffnen](/uploads/de-administration/de-user_management/vr7-benutzerverwaltung-2.png " Benutzerverwaltung öffnen")

Die Eigenschaften der Gruppe sehen Sie, wenn Sie die Gruppe öffnen – dafür klicken Sie auf den Menübutton `Bearbeiten` oder auf `Ansehen`, um die Gruppendetails zu sehen.

![Qooxdoo Applikationsmaske - Benutzerverwaltung öffnen](/uploads/de-administration/de-user_management/vr7-benutzerverwaltung-2.png " Benutzerverwaltung öffnen")

Sie können in der Gruppe die Berechtigungen einstellen, ggf. welche Berechtigungen diese Gruppe an anderen weiterleitet oder welche sie von anderen übernimmt.

## Neue Benutzer anlegen

In der Tabelle mit den Benutzer klicken Sie auf das Menü ![Qooxdoo Applikationsmaske - Menü Button](/uploads/v6/de-allgemein/vr6-menu-button.png "Menü Button") und dann auf `Neu`. Das Formular wird angezeigt. Geben Sie die Daten (Benutzer ID, Passwort, Person und Gruppe) ein und speichern Sie den Datensatz.

## Benutzergruppe erstellen / anpassen
Wenn Sie die Benutzergruppe (Benutzerrolle) bearbeiten möchten, müssen Sie diese Benutzergruppe aufmachen und die Rechte anpassen. 
Dieser Vorgang ist nur von dem Administrator zu machen! Falls Sie nicht sicher sind, bitte keine Änderungen vornehmen. 
Navigieren Sie zu den Benutzerrollen und öffnen Sie diese. Sie können für jede Benutzerrolle die Rechte unterschiedlich mischen, vererben und weitergeben. Bitte wenden Sie Sich an dem Administrator. Die Voreinstellungen werden am besten von Plan Vision GmbH durchgeführt. Diese können jederzeit geändert werden. 
