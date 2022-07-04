<!-- TITLE: VisionR Manager-->
<!-- SUBTITLE: Verwaltung von mehreren Instanzen im VisionR Manager -->

# Import Skripte Beispiele

## Objekt finden / erstellen

Beispiel: Leasingvertrag finden / gesucht wird nach Vertragsnummer. Falls nicht gefunden wird der Vertrag erstellt und mit Name und Vertragsnummer gespeichert. Den Rest wird aktualisiert. 

	var c = null;
	var cs = db.vehicles.contract_leasing.SELECT("contract_number=:CNR");
	cs["CNR"] = ""+contract_nr;

    cs.is_cached = false;
    if(!cs.is_empty) {
        c = cs[0];
    } else {
        c = new db.vehicles.contract_leasing();
        c.contract_number = contract_nr;
        c.name = name;
        c.commit();
    }

## Zahlen

### Als String

Beispiel: Vertragsnummer kommt als String vom Excel:

var c = null;
var cs = db.vehicles.contract_leasing.SELECT("contract_number=:CNR");
cs["CNR"] = ""+contract_nr;



### Als Zahl

Zahlen kommen mit .0 manchmal von Excel

id = id.replace(".0","");



## Zeiten

Zeiten müssen in Excel in folgender Format sein "HH:MM:SS"

Hier gibt es keine bestimmte Kriterien.



## Daten / Perioden


Zum Beispiel: Import Leasing Begindatum (leas_begin = Begindatum aus Excel)

// SET LEASING BEGIN DATE IF NOT NULL
    
    if(leas_begin !="" && leas_begin !=null){
        var d_b = leas_begin;
        java.log.warn("LEASING BEGIN : " + leas_begin);
        if(d_b instanceof String && d_b.length() == 10) {
            d_b = java.date.parse("dd.MM.yyyy",d_b);
        }
        try {
            c.begin_date = d_b;
        } catch(err) {
            java.log.warn("Anfangsdatum als String! "+d_b);
        }

Beispiel: Import Leasing Enddatum. Leasing Periode wird aus diesen Daten berechnet. 


// SET LEASING END DATE IF NOT NULL

    if(leas_end !="" && leas_end !=null){
        var d_e = leas_end;
        java.log.error("LEASING END : " + leas_end);
        if(d_e instanceof String && d_e.length() == 10) {
        d_e = java.date.parse("dd.MM.yyyy",d_e);
    }
    try {
        //c.end_date = d_e;
        var bd = d_b.clone();
        var ed = d_e.clone();
        var diff = java.date.period(bd,ed.addDays(1));
        //c.REFRESH_OBJECT("duration_ref");
        var dura = contracts.misc.setPeriod(c.duration_ref,db.contracts.period_contract_duration,diff);
        c.duration_ref = dura;
        dura.reference_owner = c;
    } catch(err) {
    	java.log.warn("Error on set duration_ref: "+err.toString());
    }
    }
}

## Zahlen mit Nachkommastellen / Preise

Beispiel: Leasingrate monatlich importieren - Zahl mit Kommastellen.
//SET Leasingrate gesamt mtl.
    
    if(leas_price_monthly != null && leas_price_monthly !=""){
      var test = leas_price_monthly.split(" ");
      var rate = test[0].replace(",",".");
      rate = rate.castToInexactNumber();
      c.costs = rate;
      c.payment_interval = db.library.payment_interval.SELECT("code='monthly'")[0];
    }
