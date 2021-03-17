<!-- TITLE: VisionRScript-->
<!-- SUBTITLE: VScript or VSC in the VisionR system -->

# VScript

## Data selects

### SELECT()

SELECT() is applied to *objectdef* objects from the database schema. it uses the VSQL Syntax with all SQL standard features, supporting additionaly paths, e.g. *person.building.city LIKE '%example%'*.

This function return an array with the result set. If there are no result set, the object holding the rust is an empty array. You can check if the result is empty as follows:
* if(sel.is_empty) ...
* if(sel.size == 0) ...

```
var sel = db.contacts.person.SELECT("is_ended=0 AND name=:NAME AND first_name=:FNAME");
sel["NAME"] = "Mustermann";
sel["FNAME"] = "Max";
sel.is_cached = false; // default true
sel.is_access_enabled = true; // default true

if(!sel.is_empty) {
	java.log.warn("Person Mustermann, Max found with id="+sel[0].id);
}
```

### DATA()
### INSTANCES[]
### selectWhere()

## Create new objects

```
var n = new db.contacts.person();
n.name = "Mustermann";
n.first_name = "Max";
n.status = db.contacts.status_employee.INSTANCES["employee"];
n.commit();
```

## Loops

```
for(var e : sel) {
	var p = e.person;
	if(p != null && p.name == "Mustermann")
		java.log.warn("Person "+OBJSTR(p)+" with personal id "+p.personal_id+" found!");
}
```

## VSC files

## Run in the browser

## "vscript" in the Database