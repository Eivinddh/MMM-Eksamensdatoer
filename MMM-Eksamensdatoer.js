// { "id":"INF109", "name": "Dataprogrammering for naturvitskap", "date":"11/22/2017" },

var jsonArray = [{ "id":"INF100", "name": "Grunnkurs i programmering (Programmering 1)", "date":"12/04/2017" },
{ "id":"KJEM100", "name": "Kjemi i naturen", "date":"12/20/2017" },
{ "id":"INF102", "name": "Algoritmar, datastrukturar og programmering", "date":"12/06/2017" },
{ "id":"INF122", "name": "Funksjonell programmering", "date":"12/08/2017" },
{ "id":"INF143", "name": "Tryggleik i distribuerte system", "date":"12/08/2017" },
{ "id":"INF170", "name": "Modellering og optimering", "date":"11/23/2017" },
{ "id":"INF214", "name": "Multiprogrammering", "date":"12/20/2017" },
{ "id":"INF234", "name": "Algoritmer", "date":"12/08/2017" },
{ "id":"INF240", "name": "Grunnleggjande koder", "date":"12/22/2017" },
{ "id":"INF244", "name": "Grafbasert kodeteori", "date":"12/05/2017" },
{ "id":"INF251", "name": "Grafisk databehandling", "date":"12/13/2017" },
{ "id":"INF270", "name": "Lineær programmering", "date":"12/12/2017" },
{ "id":"INF283", "name": "Innføring i maskinlæring", "date":"12/18/2017" },
{ "id":"MAT111", "name": "Grunnkurs i matematikk I", "date":"12/13/2017" },
{ "id":"MAT101", "name": "Brukarkurs i matematikk I", "date":"12/18/2017" },
{ "id":"MAT221", "name": "Diskret matematikk", "date":"12/11/2017" },
{ "id":"BIRTH122", "name": "Thors bursdag!!", "date":"12/31/2017" },
{ "id":"DAT103", "name": "Datamaskiner og operativsystemer", "date":"12/15/2017" },
{ "id":"MOL203", "name": "Genstruktur og -funksjon", "date":"12/08/2017" },
{ "id":"INFO207", "name": "Sosial nettverksteori", "date":"12/06/2017" },
{ "id":"STAT110", "name": "Grunnkurs i statistikk", "date":"12/07/2017" }]
jsonArray = jsonArray.sort(function(a, b) {
  if (new Date(a.date )> new Date(b.date)) {
    return 1;
  } else {
    return -1;
  }
});
var MAX_TABLES = 7;

Module.register("MMM-Eksamensdatoer",{
  defaults: {
    maximumEntries: 10,
    maxTitleLength: 25,
  },
  getStyles: function () {
    return ["MMM-Eksamensdatoer.css"]
  },
  getDom: function() {
    var daily = 0;
    while (true) {

//    if (daily > 0) {
//        await sleep(86400000);
//	daily++;    
//    }
    var wrapper = document.createElement("div");
    var para = document.createElement("p");

    para.className = "p1";

    wrapper.appendChild(para);
    var nodePara = document.createTextNode("Eksamensdatoer");
    para.appendChild(nodePara);
    var table = document.createElement("table");
    wrapper.appendChild(table);
    table.className = "table"

    var tr = document.createElement("tr");

    var thSubjCode = document.createElement("th");
    thSubjCode.appendChild(document.createTextNode("Fagkode"));
    thSubjCode.className = "subjectHead"

    tr.appendChild(thSubjCode);
    var thSubjName = document.createElement("th");
    thSubjName.appendChild(document.createTextNode("Navn"));
    thSubjName.className = "titleHead"

    tr.appendChild(thSubjName);
    var thSubjDate = document.createElement("th");
    thSubjDate.appendChild(document.createTextNode("Dato"));
    thSubjDate.className = "dateHead"

    tr.appendChild(thSubjDate);

    table.appendChild(tr);

    var d = new Date();
    var i = 0;
    jsonArray.forEach((obj)=>{
      if (i < MAX_TABLES) {
        var objDate = new Date(obj.date);
        var nowDate = new Date (d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear());
        console.log(obj);
        console.log(objDate);
        console.log(nowDate);

        //console.log((objDate instanceof Date) + " date now: " + (nowDate instanceof Date));

        //var bool = (objDate > nowDate)

        //var tr = document.createElement("tr");


        if (objDate > nowDate) {
          var trObj = document.createElement("tr");

          console.log("inside if")

          console.log("first")

          var thSubjCode = document.createElement("th")
          thSubjCode.appendChild(document.createTextNode(obj.id));
          thSubjCode.className = "subject"


          trObj.appendChild(thSubjCode);

          console.log("sec")
          var thSubjName = document.createElement("th")
          thSubjName.appendChild(document.createTextNode(obj.name));
          thSubjName.className = "title"


          trObj.appendChild(thSubjName);
          console.log("third")

          var thSubjDate = document.createElement("th")
          thSubjDate.appendChild(document.createTextNode(objDate.getDate() + "." + (objDate.getMonth() + 1)));
          thSubjDate.className = "date"


          trObj.appendChild(thSubjDate);
          table.appendChild(trObj);

        } else {
          console.log("else")
        }
        i++;
      }
    });
    console.log("done for")
    return wrapper;
  }
  }
});


/*
function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var file = evt.target.files[0];

    if (!file) {
        alert("Failed to load file");
    } else if (!file.type.match('text.*')) {
		    alert(f.name + " is not a valid text file.");
    } else {
      var reader = new FileReader();
      reader.readAsText(file)
      getExamObjects(reader)
      //proceed with read…
    }
  }

  function exam (name, date) {
    this.name = name
    this.date = date
  }

  function getExamObjects (reader) {
    var result = reader.result
    if ((typeof result) == "string") {
      var arrayOfExams = [];
      var arrayOfLines = result.match(/[^\r\n]+/g);
      for(var i = 0; i < arrayOfLines.length; i ++) {
        var
        arrayOfExams.push(enEksamen);
      }

      return arrayOfExams
    } else {
      return undefined;
    }
  }
*/
