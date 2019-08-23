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
| Ebene          | Datenobjekt                     | Beschreibung                                                                     | Vererbung von    |
| ------------- |:----------------------------|:--------------------------------------------------------------|:-------------------:|
| 1                  | ***Kontakt***                 |  Hauptobjekt, enthält alle Kontakte                                   | -                          |
| 2                  | **Person**                       |   Vererbung von Kontakt, enthält alle Personentypen       | Kontakte.Kontakt |
| 3                  | Mitarbeiter                       |   Vererbung von Person, enthält interne Mitarbeiter         | Kontakte.Person |
| 3                  | Extern                               |   Vererbung von Person, enthält externe Mitarbeiter        | Kontakte.Person |
| 3                  | Ansprechpartner              |   Vererbung von Person, enthält Ansprechpartner           | Kontakte.Person |
| 3                  | Besucher                           |   Vererbung von Person, enthält Besucher                        | Kontakte.Person |
| 2                  | **Unternehmen**           |    Vererbung von Kontakt                                                 | Kontakte.Kontakt |
| 2                  | **Gemeinschaft**           |    Vererbung von Kontakt                                                 | Kontakte.Kontakt |
| 2                  | **Team**                         |    Vererbung von Kontakt                                                 | Kontakte.Kontakt |


