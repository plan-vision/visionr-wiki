<!-- TITLE: Termine synchronisieren -->
<!-- SUBTITLE: Terminsynchronisation über ICS in gemeinsamen IMAP-Postfächer in Outlook/LotusNotes-->

# Beschreibung
VisionR kann Termine mit anderen Systemen (Outlook, LotusNotes, iCloud u.a.) austauschen und synchronisieren.
Der Austausch erfolgt über E-Mail mit angehängtem Termin im `ICS`-Format. Das Format iCaleder ist im Standar [RFC5545](https://tools.ietf.org/html/rfc5545) beschrieben.

# Schnittstellenablauf
## Erstellung eines Termins in VisionR
Ein Termin wird in VisionR z.B. bei der Erstellung einer Raumreservierung generiert. Dieser Termin kann an an die Teilnehmer der Reservierung versendet werden.
Um die Reservierung dem Drittsystem zu übergeben, muss der reservierte Raum ein Postfach (mit `IMAP`- und ggf. `SMTP`-Zugang) eingerichtet worden sein.
Bei erstellung einer neuen Reservierung wird automatich eine E-Mail mit Termin-Anhang im `ICS`-Format an den Veranstalter (Organizer) versendet. Der Raum ist im Termin als Teilnehmer eingetragen.
VisionR generiert eine eindeutige `UID` für den Termin, die bei Stornierung der Reservierung in VisionR gleichzeitig den Termin im Drittsystem absagt.

## Erstellung eines Termins im Drittsystem
Bei Erstellung von Terminen in Outlook, LotusNotes oder iCloud wir automatisch eine E-Mail mit Anhang im `ICS`-Format an die Teilnehmer versendet.
Falls es sich um eine Raumreservierung handelt, muss die Raum-Ressource als Teilnehmer im Termin eingetragen werden.
VisionR liest das Postfach über `IMAP`-Zugang und findet den neuen Termin. Falls die E-Mail-Adresse des Raums in VisionR identifiziert werden kann, wird die Möglichkeit einer Raumreservierung für den angegebenen Zeitraum in der Datenbank geprüft.
Falls der Raum zur angefragten Zeit noch nicht belegt ist, wird eine Bestätigungs-E-Mail mit Terminzusage an den Veranstalter zurückgeschickt.
Falls jedoch der Reaum bereits reserviert wurde wird eine Terminabsage mit entsprechendem Hinweis zurückgesendet.

> Mit Drittsystem ist ein System für die Verarbeitung von Terminen gemeint, wir z.B. Outlook (exchange Server), LotusNotes, iCloud, Google Calendar o.ä.

## Stornierung des Termins
Falls ein Termin abgesagt wird, wird eine E-Mail mit der Absage im `ICS`-format versendet.
Wenn z.B. eine Raumreservierung in VisionR storniert wird, wird die E-Mail mit der Absage an den Veranstalter und an das Raum-Postfach gesendet.
Wenn der Termin im Drittsystem abgesagt wird, wird eine E-Mail an das Raum-Postfach gesendet, falls die Raum-Ressource als Teilnehmer im Termin eingetragen ist.

> Terminabsagen funktionieren nur, wenn bereits bestehende Termine eine eindeutige `UID` haben, die sowohl von VisionR als auch vom Drittsystem erkannt wird.
> Bei der Einrichtung der `ICS`-Schnittstelle muss das Format der `UID` in beiden Richtungen getestet werden.
{.is-warning}
# Technische Voraussetzungen
Um die Schnittstelle für Terminaustausch zwischen VisionR und ein Drittsystem (Outlook, LotusNotes, iCloud) realisieren zu können, müssen auf beiden Seiten Einstellungen vorgenommen werden, die administrative Berechtigungen erfordern.  
## Auf der VisionR-Seite
IN VisionR muss ein geplanter Task mit regelmäßiger Ausführung (z.B. jede 3 Minuten) eingerichten werden. Im geplanten Task wird ein Schnittstellen-Skript aufgeführt, welches die Postfächer von gemeinsamen Ressourcen (meistens Reservierungseinheiten: Besprechungsraum, Konferenzraum o.ä.) nach neuen E-Mail durchsucht. Falls vom Drittsystem neue Termine oder Terminänderungen oder -absagen als E-Mail im ICS-Format enthalten, werden Standardabläufe für Terminbestätigung oder Absage ausgelöst, die eine Antwort-E-Mail generieren.

> Voraussetzung für die Termin-Schnittstelle auf der VisionR-Seite sind Einträge von gültigen E-Mail-Adressen und E-Mail-Postfach-Anmeldeoinformationen für einen IMAP-Zugang notwendig. Diese Informationen werden vom Drittsystem dem VisionR-Administrator zur Verfügung gestellt. Bei Änderungen, z.B. Löschen von Postfächer oder Passwortänderungen der E-Mail-Accounts von Raum-Ressourcen muss der VisionR-Administrator benachrichtigt werden.
{.is-warning}
## In Outlook (Exchange Server)
Im Exchange-Server muss 
## In Lotus Notes