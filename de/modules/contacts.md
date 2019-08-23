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
| Ebene 1 | Ebene 2 | Ebene 3 | Datenobjekt                                                                                                             | Beschreibung                                                                  | Verebung von      | Code                                                | Tabelle                              |
|:---------:|:---------:|:---------:|:-----------------------------------------------------------------------------------------|:------------------------------------------------------------|:--------------------|:--------------------------------------|:-----------------------------|
| **X**     |              |               | [**Kontakt**](/de/modules/datamodel/contacts/contact)                             |  Hauptobjekt, enthält alle Kontakte                                         | -                            | contacts.contact                            | VISIONR.pv_cnt_contact   |
|               | **X**    |               | [**Person**](/de/modules/datamodel/contacts/person)                                |   Enthält alle Personentypen                                                    | Kontakte.Kontakt  | contacts.person                             | -                                        |
|               |              | X            | [Mitarbeiter](/de/modules/datamodel/contacts/employee)                            |   Enthält interne Mitarbeiter                                                    | Kontakte.Person    | contacts.person                             | -                                        |
|               |              | X            | [Extern](/de/modules/datamodel/contacts/employee-external)                      |   Enthält externe Mitarbeiter                                                   | Kontakte.Person    | contacts.employee_external          | -                                        |
|               |              | X            | [Ansprechpartner](/de/modules/datamodel/contacts/contact-person)           |   Enthält Ansprechpartner                                                       | Kontakte.Person    | contacts.person                             | -                                        |
|               |              | X            | [Besucher](/de/modules/datamodel/contacts/visitor)                                       |   Enthält Besucher                                                                  | Kontakte.Person    | contacts.person                             | -                                        |
|               | **X**    |               | [**Unternehmen**](/de/modules/datamodel/contacts/company)                  |    Enthält alle Unternehmenstypen                                         | Kontakte.Kontakt  | contacts.person                             | -                                        |
|               | **X**    |               | [**Gemeinschaft**](/de/modules/datamodel/contacts/community)               |    Enthält Gementschaften                                                      | Kontakte.Kontakt  | contacts.person                             | -                                        |
|               | **X**    |               | [**Team**](/de/modules/datamodel/contacts/team-contact)                          |    Enthält Teams mit Teammitgliedern und Rollen                  | Kontakte.Kontakt  | contacts.person                             | -                                        |
| **X**     |              |               | [**Abteilung**](/de/modules/datamodel/contacts/department)                     |  Enthält alle Abteilungen                                                        | -                            | contacts.department                     | VISIONR.pv_cnt_dep         |
| **X**     |              |               | [**Synchronisierung Kontakt**](/de/modules/datamodel/contacts/synchronisation)    |  Enthält alle Synchronisationsdaten                       | -                            | contacts.synchronization_contact | VISIONR.pv_cnt_synccon  |

Datenobjekte aus anderen Modulen:

| Ebene 1 | Ebene 2 | Ebene 3 | Datenobjekt                                                                                         | Beschreibung                                                                                                | Verebung von      | Code                                        | Tabelle                              |
|:---------:|:---------:|:---------:|:----------------------------------------------------------------------|:--------------------------------------------------------------------------------------|:--------------------|:---------------------------------|:----------------------------|
| **X**     |              |               | [**Kostenstelle**](/de/modules/datamodel/costs/cost-center)  |  Hauptobjekt aus `Modul "Kosten"`, enthält alle Kostenstellen                       | -                           | costs.cost_center                     | VISIONR.pv_cnt_contact  |
| **X**     |              |               | [**Raum**](/de/modules/datamodel/spaces/space)                    |  Hauptobjekt aus `Modul "Flächenmanagement"`, enthält alle Räume           | -                          | spaces.space                            | VISIONR.pv_spc_spc        |
| **X**     |              |               | [**Arbeitsplatz**](/de/modules/datamodel/spaces/workplace)  |  Hauptobjekt aus `Modul "Flächenmanagement"`, enthält alle Arbeitsplätze | -                          | spaces.workplace                     |  VISIONR.pv_spc_wplc     |