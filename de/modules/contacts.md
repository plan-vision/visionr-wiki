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
| Ebene 1 | Ebene 2 | Ebene 3 | Datenobjekt                                                                                                             | Beschreibung                                                                                                     | Vererbung von    |
|:---------:|:---------:|:---------:|:-----------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------|:-------------------|
| **X**       |                 |                  | [**Kontakt**](/de/modules/datamodel/contacts/contact)                             |  Hauptobjekt, enthält alle Kontakte                                                                   | -                          |
|                 | **X**       |                  | [**Person**](/de/modules/datamodel/contacts/person)                                |   Vererbung von Kontakt, enthält alle Personentypen                                       | Kontakte.Kontakt |
|                 |                 | X               | [Mitarbeiter](/de/modules/datamodel/contacts/employee)                            |   Vererbung von Person, enthält interne Mitarbeiter                                         | Kontakte.Person |
|                 |                 | X               | [Extern](/de/modules/datamodel/contacts/employee-external)                      |   Vererbung von Person, enthält externe Mitarbeiter                                        | Kontakte.Person |
|                 |                 | X               | [Ansprechpartner](/de/modules/datamodel/contacts/contact-person)           |   Vererbung von Person, enthält Ansprechpartner                                            | Kontakte.Person |
|                 |                 | X               | [Besucher](/de/modules/datamodel/contacts/visitor)                                       |   Vererbung von Person, enthält Besucher                                                       | Kontakte.Person |
|                 | **X**       |                  | [**Unternehmen**](/de/modules/datamodel/contacts/company)                  |    Vererbung von Kontakt                                                                                 | Kontakte.Kontakt |
|                 | **X**       |                  | [**Gemeinschaft**](/de/modules/datamodel/contacts/community)               |    Vererbung von Kontakt                                                                                 | Kontakte.Kontakt |
|                 | **X**       |                  | [**Team**](/de/modules/datamodel/contacts/team-contact)                          |    Vererbung von Kontakt                                                                                 | Kontakte.Kontakt |
| **X**       |                 |                  | [**Abteilung**](/de/modules/datamodel/contacts/department)                     |  Hauptobjekt, enthält alle Abteilungen                                                            | -                          |
| **X**       |                 |                  | [**Synchronisation**](/de/modules/datamodel/contacts/synchronisation)    |  Hauptobjekt, enthält alle Synchronisationsdaten                                            | -                          |

Datenobjekte aus anderen Modulen:

| Ebene 1 | Ebene 2 | Ebene 3 | Datenobjekt                        | Beschreibung                                                                     | Vererbung von    |
|:---------:|:---------:|:---------:|:------------------------------|:------------------------------------------------------------|:-------------------|
| **X**       |                 |                  | [**Kostenstelle**](/de/modules/datamodel/costs/cost-center)                         |  Hauptobjekt aus `Modul "Kosten"`, enthält alle Kostenstellen                          | -                          |
| **X**       |                 |                  | [**Raum**](/de/modules/datamodel/spaces/space)                                          |  Hauptobjekt aus `Modul "Flächenmanagement"`, enthält alle Räume               | -                          |
| **X**       |                 |                  | [**Arbeitsplatz**](/de/modules/datamodel/spaces/workplace)                        |  Hauptobjekt aus `Modul "Flächenmanagement"`, enthält alle Arbeitsplätze     | -                          |