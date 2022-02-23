<div style="margin:auto;text-align:center;width:100%;height:900px;color:#AAAAAA">
	<div style="height:100px"><img style="width:250px" src="_images/_title/plan-vision-logo-big.jpg"/></div>
    <div style="height:150px"></div>
	<div style="font-size:35px">Benutzerhandbuch</div>
	<div style="font-size:45px;color:#777777">Kontakte</div>
    <div style="font-size:35px;color:#F18C18">Admin</div>
    <div style="height:20px"></div>
    <div style="height:160px"><img style="width:160px" src="_images/_title/contacts-admin-logo.png"/></div>
    <div style="height:20px"></div>
    <div style="font-size:25px">Windows / macOS / Linux / iOS / Android</div>
    <div style="font-size:25px">ab Version 8.0</div>
    <div style="height:200px"></div>
    <div style="color:#BBBBBB">
        <div style="font-size:14px">Erstellt von Plan-Vision GmbH</div>
    	<div style="font-size:14px">Version 1.2 &bull; Stand 23.02.2022</div>
    	<div style="font-size:14px">Plan-Vision GmbH &bull; E-Mail: support@plan-vision.com &bull; Web: https://plan-vision.com</div>
    </div>
</div>




<div style="page-break-after: always; break-after: page;"></div>
# Inhaltsverzeichnis

[toc]

# Version

**Aktuelle  Version:** 1.2

**Stand:** 23.02.2022

**Verfasser:** Plan-Vision GmbH

# Beschreibung
Das Modul wir für die Verwaltung von Kontaktdaten genutzt. Im folgenden können Sie die Schritte bei der Erstellung und Bearbeitung von Personen, Unternehmen, Organisationseinheiten usw. lesen. Die angelegten Kontaktdaten können in allen anderen Modulen genutzt werden, z.B. in Verträgen, Flächenbelegungen usw. 

![Indexseite](_images/contacts/index.png)
# Erstellen von Kontakten
## Über das Menü
## Mit rechter Maustaste
# Bearbeiten von Kontakten
# Löschen von Kontakten
# Datenobjekte

| Datenobjekt                                                  | Beschreibung                                 | Verebung von     | Code                                | Tabelle                |
| :----------------------------------------------------------- | :------------------------------------------- | :--------------- | :---------------------------------- | :--------------------- |
| [**Kontakt**](/de/modules/datamodel/contacts/contact)        | Hauptobjekt, enthält alle Kontakte           | -                | contacts.contact                    | VISIONR.pv_cnt_contact |
| [**Person**](/de/modules/datamodel/contacts/person)          | Enthält alle Personentypen                   | Kontakte.Kontakt | contacts.person                     | -                      |
| [Mitarbeiter](/de/modules/datamodel/contacts/employee)       | Enthält interne Mitarbeiter                  | Kontakte.Person  | contacts.person                     | -                      |
| [Extern](/de/modules/datamodel/contacts/employee-external)   | Enthält externe Mitarbeiter                  | Kontakte.Person  | contacts.employee_external          | -                      |
| [Ansprechpartner](/de/modules/datamodel/contacts/contact-person) | Enthält Ansprechpartner                      | Kontakte.Person  | contacts.contact_person             | -                      |
| [Besucher](/de/modules/datamodel/contacts/visitor)           | Enthält Besucher                             | Kontakte.Person  | contacts.visitor                    | -                      |
| [**Unternehmen**](/de/modules/datamodel/contacts/company)    | Enthält alle Unternehmenstypen               | Kontakte.Kontakt | contacts.company                    | -                      |
| [**Gemeinschaft**](/de/modules/datamodel/contacts/community) | Enthält Gementschaften                       | Kontakte.Kontakt | contacts.community                  | -                      |
| [**Team**](/de/modules/datamodel/contacts/team-contact)      | Enthält Teams mit Teammitgliedern und Rollen | Kontakte.Kontakt | contacts.person                     | -                      |
| [**Abteilung**](/de/modules/datamodel/contacts/department)   | Enthält alle Abteilungen                     | -                | contacts.department                 | VISIONR.pv_cnt_dep     |
| [**Synchronisierung Kontakt**](/de/modules/datamodel/contacts/synchronization_contact) | Enthält alle Synchronisationsdaten           | -                | contacts.synchronization_contact    | VISIONR.pv_cnt_synccon |
| [**Synchronisierung Abteilung**](/de/modules/datamodel/contacts/synchronization_department) | Enthält alle Synchronisationsdaten           | -                | contacts.synchronization_department | VISIONR.pv_cnt_syncdep |

Datenobjekte aus anderen Modulen:

| Datenobjekt                                                 | Beschreibung                                                 | Verebung von | Code              | Tabelle                |
| :---------------------------------------------------------- | :----------------------------------------------------------- | :----------- | :---------------- | :--------------------- |
| [**Kostenstelle**](/de/modules/datamodel/costs/cost-center) | Hauptobjekt aus `Modul "Kosten"`, enthält alle Kostenstellen | -            | costs.cost_center | VISIONR.pv_cnt_contact |
| [**Raum**](/de/modules/datamodel/spaces/space)              | Hauptobjekt aus `Modul "Flächenmanagement"`, enthält alle Räume | -            | spaces.space      | VISIONR.pv_spc_spc     |
| [**Arbeitsplatz**](/de/modules/datamodel/spaces/workplace)  | Hauptobjekt aus `Modul "Flächenmanagement"`, enthält alle Arbeitsplätze | -            | spaces.workplace  | VISIONR.pv_spc_wplc    |