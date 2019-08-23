<!-- TITLE: Modul Kontakte -->
<!-- SUBTITLE: Modul für Personen, Unternehmen, Organisationseinheiten usw. -->

Deutsch | [English](/en/modules/contacts)
*Sie sind hier: [Home](/home) > [Benutzerhandbuch](/de/user-guide) > Modul Kontakte*

# Bedienung
## Normale Benutzer
* Modul Kontakte für [normale Benutzer](/de/modules/contacts/user)
## Modul Admin 
* Modul Kontakte für [Admins](/de/modules/contacts/admin)
## Alte Oberfläche
* Modul Kontakte auf [alten Oberflächen](/de/modules/contacts/qooxdoo)
# Datenmodel
## Moduldiagramm
(In Arbeit...)
## Datenobjekte
| Ebene 1 | Ebene 2 | Ebene 3 | Datenobjekt                        | Beschreibung                                                                     | Vererbung von    |
|:---------:|:---------:|:---------:|:------------------------------|:--------------------------------------------------------------|:-------------------|
| **X**       |                 |                  | **Kontakt**                |  Hauptobjekt, enthält alle Kontakte                                   | -                          |
|                 | **X**       |                  | **Person**                  |   Vererbung von Kontakt, enthält alle Personentypen       | Kontakte.Kontakt |
|                 |                 | X               | Mitarbeiter                   |   Vererbung von Person, enthält interne Mitarbeiter         | Kontakte.Person |
|                 |                 | X               | Extern                           |   Vererbung von Person, enthält externe Mitarbeiter        | Kontakte.Person |
|                 |                 | X               | Ansprechpartner          |   Vererbung von Person, enthält Ansprechpartner           | Kontakte.Person |
|                 |                 | X               | Besucher                       |   Vererbung von Person, enthält Besucher                        | Kontakte.Person |
|                 | **X**       |                  | **Unternehmen**        |    Vererbung von Kontakt                                                 | Kontakte.Kontakt |
|                 | **X**       |                  |**Gemeinschaft**         |    Vererbung von Kontakt                                                 | Kontakte.Kontakt |
|                 | **X**       |                  | **Team**                       |    Vererbung von Kontakt                                                 | Kontakte.Kontakt |
| **X**       |                 |                  | **Abteilung**                |  Hauptobjekt, enthält alle Abteilungen                           | -                          |
| **X**       |                 |                  | **Synchronisation**      |  Hauptobjekt, enthält alle Synchronisationsdaten          | -                          |

Datenobjekte aus anderen Modulen:

| Ebene 1 | Ebene 2 | Ebene 3 | Datenobjekt                        | Beschreibung                                                                     | Vererbung von    |
|:---------:|:---------:|:---------:|:------------------------------|:--------------------------------------------------------------|:-------------------|
| **X**       |                 |                  | **Kostenstelle**                |  Hauptobjekt, enthält alle Kostenstellen                    | -                          |