
// see: https://github.com/summerstyle/jsonTreeViewer

var slideIndex = 1;
var itIsDisconnected= true;
var host = null;
var token = null;
var viz;
var fields = null;
var globalCypher = null;
var t0;

var tab = {
  nav : null, // holds all tabs
  txt : null, // holds all text containers
  init : function () {
  // tab.init() : init tab interface

    // Get all tabs + contents
    tab.nav = document.getElementById("tab-nav").getElementsByClassName("tabnav");
    tab.txt = document.getElementById("tab-contents").getElementsByClassName("tabtxt");

    // Error checking
    if (tab.nav.length==0 || tab.txt.length==0 || tab.nav.length!=tab.txt.length) {
      //console.log("ERROR STARTING TABS");
    } else {
      // Attach onclick events to navigation tabs
      for (var i=0; i<tab.nav.length; i++) {
        tab.nav[i].dataset.pos = i;
        tab.nav[i].addEventListener("click", tab.switch);
      }

      // Default - show first tab
      tab.nav[0].classList.add("active");
      tab.txt[0].classList.add("active");
    }
  },

  switch : function () {
  // tab.switch() : change to another tab

    // Hide all tabs & text
    for (var t of tab.nav) {
      t.classList.remove("active");
    }
    for (var t of tab.txt) {
      t.classList.remove("active");
    }
    // Set current tab
    tab.nav[this.dataset.pos].classList.add("active");
    tab.txt[this.dataset.pos].classList.add("active");
  }
};

function enable(el){
  $(el).removeAttr("disabled");
}

function disable(el){
   $(el).attr("disabled", "disabled");
}

function enableAll(el){
  $(el+" *").removeAttr("disabled");
}

function disableAll(el){
    $(el+" *").attr("disabled", "disabled");
}

function hideThis (el){
  $(el).hide();
}

$(document).ready(function(){
     $('#descriptiondiv').slideToggle(600);
    $("#toggle").click(function() {
       $('#descriptiondiv').slideToggle(600);
       $('#slidesdiv').slideToggle(600);
        return false;
    });
    //BUTTON EVENTS
    $("#ezker").click(function() {
       plusDivs(-1);
    });
    $("#eskuin").click(function() {
       plusDivs(1);
    });
    $("#run-button").click(function() {
       t0 = new Date();
       run2html($("#cypher").val());
    });
    $("#help").click(function() {
       helping();
    });
tab.init ()
    //PROCESSING:
    disconnectedFromNeo4j();
    disconnectedFromGuide()
    //NeoVis.js
    $("#result-form").hide();

    //URL params:
     host = getUrlParam('host', 'http://localhost:7474');
     token = getUrlParam('token', 'YWRtaW46b25la2lu');   //YWRtaW46b25la2lu   admin:onekin
     dataModelNoCompliance();
     counter = 0;
     connect();
     loading();
});

function helping (){
  rsp = confirm ('This front-end guides the auditing of a SLR data extraction process')
  if (!rsp) {return;}
  rsp = confirm ("Status on the top part of the page shows wether the front-end is connected to the Neo4J back-end or not. The back-end contains the SLR's data and executes cypher queries" )
  if (!rsp) {return;}
  rsp = confirm ("Follow the guide's slides and execute the auditing cypher queries embedded in it")
  if (!rsp) {return;}
  rsp = confirm ('Toggeling to the console, you can execute your own cypher queries')
}

function nocode(pssw){
  var newtxt = "";
  for (var i=0; i< pssw.length;i+=3){
    newtxt += String.fromCharCode(parseInt(pssw.substring(i, i+3)))
  }
  return newtxt;
}

function yescode(pssw){
  var newtxt = "";
  for (var i=0; i< pssw.length;i++){
    newtxt += pad (pssw.charCodeAt(i),3);
    }
  return newtxt;
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

function getUrlVars() {
    var vars = {};
    var url = decodeURI(window.location.href);
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function dataModelCompliance(){
  document.getElementById('w3cIcon').style.backgroundColor = 'honeydew';
  setDataModelManagementStatus('Verified W3C Annotation data model.')
}

function dataModelNoCompliance(){
  document.getElementById('w3cIcon').style.backgroundColor = 'lightcoral';
  setDataModelManagementStatus('No data model compliance.')
}

function connectedToNeo4j(){
  document.getElementById('connectionIcon').style.backgroundColor = 'honeydew';
  itIsDisconnected = false;
  enable("#run-button");
  disableAll('#anulableEngine')
  let q = `CALL apoc.meta.schema() YIELD value as schemaMap
UNWIND keys(schemaMap) as label
WITH label, schemaMap[label] as data
WHERE data.type = "node"
UNWIND keys(data.properties) as property
WITH label, property, data.properties[property] as propData
RETURN label,
property,
propData.type as type,
propData.indexed as isIndexed,
propData.unique as uniqueConstraint,
propData.existence as existenceConstraint
`;
    //console.log ('Querying: '+q);
    $('#cypher').val (q);
    t0 = new Date();
    run2html(q);
}

function disconnectedFromNeo4j(){
  setConnectionManagementStatus("No connected Neo4j engine...." );
  document.getElementById('connectionIcon').style.backgroundColor = 'lightcoral';
  itIsDisconnected = true;
  disable("#run-button");
  enableAll('#anulableEngine');
  dataModelNoCompliance()
}

function connectedToGuide(){
  enable("#ezker");
  enable("#eskuin");
  disableAll('#anulableGuide')
}

function disconnectedFromGuide(){
  disable("#ezker");
  disable("#eskuin");
  enableAll('#anulableGuide')
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = $( "slide" );
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
   $( "#num" ).html(slideIndex);
   $( "#numtotal" ).html (x.length);
}


function showSlide(n) {
  var i;
  var x = $( "slide" );
  slideIndex= n;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }  
  x[slideIndex-1].style.display = "block";
   $( "#num" ).html(slideIndex);
   $( "#numtotal" ).html (x.length);
}

function injectExecutionButtons(){
  var x = $( "pre.code" );
  for (i = 0; i < x.length; i++) {
    let el = x[i];
    elparent = el.parentElement;
    el.setAttribute("id", 'query_'+i);
    var btn = document.createElement("button");
    btn.setAttribute('id', 'button_'+i);
    btn.textContent =  'Run query_'+i;
    btn.setAttribute('onclick', 'runQuery('+i+')');
    elparent.prepend(btn);
  }
}

function runQuery (query){
  let name = "#query_"+query;
  var x = $( name )[0];
  let q = x.textContent;
    //console.log ('Querying: '+q);
    $('#cypher').val (q);
    t0 = new Date();
    run2html(q);
}

function reRunMultiple(multiquery){
//console.log (multiquery)
var lines = multiquery.split(';');
var lineNo = lines.length;
//console.log (lineNo)
for (i = 0; i < lineNo; i++) {
  var q = lines[i];
  //console.log (i+'>>'+lines[i]);
  t0 = new Date();
  run2html (q);
}
}

function loading (){
let url = "oslr_guide.html";
//console.log (url)
$( "#slides" ).load( url , function( response, status, xhr ) {
  if ( status == "error" ) {
    var msg = "Sorry but there was an error: ";
    disconnectedFromGuide();
  } else {
    connectedToGuide()
    injectExecutionButtons();
    showDivs(slideIndex);
  }
});
}


/////js neo4j-driver  : https://neo4j.com/developer/javascript/
//https://github.com/neo4j/neo4j-javascript-driver
// https://neo4j.com/docs/api/javascript-driver/4.1/
  function setConnectionManagementStatus(message) {
    $( "#connection-management-status" ).html(message );
  }

    function setDataModelManagementStatus(message) {
      $( "#data-model-status" ).html(message );
    }

  function connect() {
    try {
       checkConnection ()
    } catch (error) {
      //console.log ('erroneous:: ' + error)
    setConnectionManagementStatus(error);
    disconnectedFromNeo4j();
    }
  }

  function checkingConnection (err, rsp){
    //console.log(!_.isUndefined(rsp) )
    //console.log(_.isUndefined(err))
    //console.log( err.length )
    if (!_.isUndefined(rsp) && (_.isUndefined(err) || err.length == 0)){
      connectedToNeo4j();
      setConnectionManagementStatus("Connected to back-end at " + host +" with token " + token);
    }else{
      //console.log("ERROR:v: ")
      //console.log("err:: "+JSON.stringify (err))
      //console.log("rsp:: "+JSON.stringify (rsp))
      disconnectedFromNeo4j()
      setConnectionManagementStatus("Unable to connected to back-end at " + host +" with token " + token)
      new Error("Unable to connected to back-end at " + host +" with token " + token)
  }
}

function checkConnection (){
  // Run a Cypher statement, reading the result in a streaming manner as records arrive:
  var q = 'CALL apoc.meta.schema()';
  commitNeo4J (q, checkingConnection)
}

  function nodeValue(container, id, labels, properties) {
      var card = document.createElement("div"),
          cardHeader = document.createElement("h4"),
          cardBody = document.createElement("div");
      card.setAttribute("class", "card");
      cardHeader.setAttribute("class", "card-header");
      cardHeader.appendChild(document.createTextNode(labels + " #" + id ));
      cardBody.setAttribute("class", "card-body");
      cardBody.appendChild(document.createTextNode(JSON.stringify(properties)));
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      return card;
  }

  function nodeRelationship(container, id, labels, properties) {
      var card = document.createElement("div"),
          cardHeader = document.createElement("h4"),
          cardBody = document.createElement("div");
      card.setAttribute("class", "card");
      cardHeader.setAttribute("class", "card-header");
      cardHeader.appendChild(document.createTextNode("#" + id + " " + labels));
      cardBody.setAttribute("class", "card-body");
      cardBody.appendChild(document.createTextNode(JSON.stringify(properties)));
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      return card;
  }

////


function run2html(cypher) {
// Clear any existing result
try {
  var tables = document.getElementById("tables");
  while (tables.firstChild) tables.removeChild(tables.firstChild);
/*        var head = document.getElementById("result-head"),
        body = document.getElementById("result-body"),
        foot = document.getElementById("result-foot");
        foot = head;
    while (head.firstChild) head.removeChild(head.firstChild);
    while (body.firstChild) body.removeChild(body.firstChild);
    while (foot.firstChild) foot.removeChild(foot.firstChild);
*/
      if (itIsDisconnected){
        alert ('You should connect this proxy to a Ne4oj engine!!!')
        return;
      }
globalCypher = cypher;
commitNeo4J (cypher, resulting)

    }catch(error) {
        console.error(error);
        printError (error);
    }
    }

function resulting (err, rsp, cfg){
  //console.log ("RESULTING:: " + JSON.stringify (rsp), true)

  var onKeys = function (metadata, tableid) {
    //console.log('onKeys:: ' + metadata.length+metadata)

    var head = document.createElement("thead");
    $("#"+tableid).append(head);
    var tr = document.createElement("tr");
    for (var i = 0; i < metadata.length; i++) {
          fields.push(metadata[i]);
          var th = document.createElement("th");
          th.appendChild(document.createTextNode(fields[i]));
          tr.appendChild(th);
      }
      head.appendChild(tr)
      //console.log('header :: '+ fields)
}

 var onNext = function (record, tableid) {
  //console.log('onNext :: '+ JSON.stringify (record))
    var body = document.createElement("tbody");
    $("#"+tableid).append(body);
    count += 1;
    var tr = document.createElement("tr");
    for (var i = 0; i < record.row.length; i++) {
        var td = document.createElement("td");
        var div = document.createElement("div");
        var value = record.row[i]
        var content;
          //console.log('record2 :: '+ value)
        if (value === null) {
            content = undefined;
        }
        else if (typeof value === "string") {
            content = document.createTextNode(value);
        }
        else if (typeof value === "object" && !Array.isArray(value)) {
          var type = record.meta[i].type;
          //var type = "other";
          switch (type) {
                case "Node":
                    content = nodeValue(div, value.id, value.labels, value.properties);
                    break;
                case "node":
                        content = nodeValue(div, record.meta[i].id, type, value);
                          break;
                case "relationship":
                        content = nodeValue(div, record.meta[i].id, type, value);
                        break;
                default:
                    div.setAttribute("style", "white-space: pre");
                    content = document.createTextNode(JSON.stringify(value, null, "  "));
            }
        }
        else {
            content = document.createTextNode(JSON.stringify(value));
        }
        if (content !== undefined)
            div.appendChild(content);
        td.appendChild(div);
        tr.appendChild(td);
    }
    body.appendChild(tr)
}

var onCompleted = function (data, tableid, j) {
    var head = $("<thead>", {id: "head"+tableid, "class": "head"});
    $("#"+tableid).prepend(head);
    var th = document.createElement("th");
    th.setAttribute("colspan", "" + fields.length);
    data = JSON.parse(data)
    th.appendChild(document.createTextNode(JSON.stringify (data.statements[j].statement)));
    var tr = document.createElement("tr");
    tr.appendChild(th);
    $("#head"+tableid).append(tr)

    var foot = document.createElement("tfoot");
    $("#"+tableid).append(foot);

    var time = new Date() - t0;
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.setAttribute("colspan", "" + fields.length);
    th.appendChild(document.createTextNode(
        count + " record" + (count === 1 ? "" : "s") +
        " received from " + host + " in " + time + "ms"));
    tr.appendChild(th);
    foot.appendChild(tr);
}

var onError = function (failure, tableid) {
  //console.log('onError:: ' + JSON.stringify (failure))
  var txt = ""
  for (var i = 0; i < failure.length; i++) {
    txt += failure[i].code + " => " + failure[i].message +" \n";
  }

  if (txt.indexOf ('Expected exactly one statement per query')>= 0 ){
      reRunMultiple (globalCypher);
  }else{
    printError (txt, tableid);
    new Error("Unable to execute query." + txt)
  }
}


if (!_.isUndefined(rsp) && (_.isUndefined(err) || err.length == 0)){
  for (var j = 0; j < rsp.length; j++) {
    let r = rsp[j]
      var fields = [],
          count = 0;
    var table = $("<table>", {id: "table"+j , "class": "tabtxt"});
    $("#tables").append(table);

    onKeys(r.columns, "table"+j)
    for (var i = 0; i < r.data.length; i++) {
      onNext(r.data[i], "table"+j)
    }
    onCompleted( cfg, "table"+j, j)
  }
}else{
  onError (err, "table"+j)
}
}

function printError (error, tableid){

   var foot = document.createElement("tfoot");
   $("#"+tableid).append(foot);
  console.error(error);
  var tr = document.createElement("tr");
  var th = document.createElement("th");
  th.appendChild(document.createTextNode( "ERROR : " + error ));
  tr.appendChild(th);
  //foot.appendChild(tr)
  foot.insertBefore(tr, foot.firstChild);
}

///Vis

        function draw() {
            var config = {
                container_id: "viz",
                server_url: "bolt://" + host,
                server_user: user,
                server_password: password,
                labels: {},
                relationships: {},
                initial_cypher: $("#cypher").val()
            };
            config.labels["#labels"] = {
                "caption": "name",
                "size": "id",
                "community": "community"
            };
            config.relationships["oa__motivatedBy"] = {
                "thickness": "id",
                "caption": "start"
            }
            //console.log(config);
            viz = new NeoVis.default(config);
            viz.render();
            //console.log(viz);
        }


        function traverse (o) {
          for (var i in o) {
            //debuggingg('>>>> ' + i + ' <<<<' + JSON.stringify(o[i]))
            if (i === 'text') {
              o[i] = unescape(o[i])
            }
            if (i === 'description') {
              o[i] = unescape(o[i])
            }
            if (i === 'group' && o[i] !== null && typeof (o[i]) === 'object') {
              o[i] = o[i]['@value']
            }
            if (i === 'id' && o[i] !== null && typeof (o[i]) === 'object') {
            //  debuggingg('>>>> RETURNING')
              return traverse(o[i])
            }
            if (o[i] !== null && typeof (o[i]) === 'object') {
              // going one step down in the object tree!!
              //debuggingg('>>>> TRAVERSING')
              o[i] = traverse(o[i])
            }
          }
          return o
        }


  function traverseFor (o, ) {
    for (var i in o) {
      //console.log(i);
      if (i === 'text') {
        o[i] = o[i];
      }
      if (o[i] !== null && typeof (o[i]) === 'object') {
        o[i] = traverseFor(o[i])
      }
    }
    return o
  }

///axios
///HTTTP API https://neo4j.com/docs/http-api/current/actions/query-result/
function apiCallJSON (settings, callback) {
  debuggingg('apiCallJSON:: ' + JSON.stringify (settings), true)
  axios(settings).catch(() => {
    if (_.isFunction(callback)) {
      callback(new Error('Unable to execute:  ' + settings.data), [])
    }
  }).then((response) => {
    if (!_.isUndefined(response)) {
      let expandedData = response.data
      if (expandedData.length === 0) {
        callback(null, [])
      } else {
        // compact a document according to a particular context
        jsonld.compact(expandedData, { '@context': contextualization }, function (err, compacted) {
          if (err) console.error('Error compacting: ' + err)
          callback(null, compacted)
        })
      }
    }
  })
}

function apiCall (settings, callback) {
  debuggingg('apiCall:: ' + JSON.stringify (settings), true)

  axios(settings).catch(() => {
    if (_.isFunction(callback)) {
      new Error('Unable to execute:  ' + settings.data)
    }
  }).then((response) => {
    debuggingg('RESPONSE:' + JSON.stringify(response), true)
    if (!_.isUndefined(response)) {
      debuggingg('RESULT:' + JSON.stringify(response.data.results), true)
      debuggingg('ERROR::' + JSON.stringify(response.data.errors), true)
      if (!_.isUndefined(response.data.results) && !_.isUndefined(response.data.errors)){
          callback(response.data.errors, response.data.results, response.config.data)
      }else{
        if (!_.isUndefined(response.data.results)) {
          callback(null, response.data.results, response.config.data)
        }
        if (!_.isUndefined(response.data.errors)) {
            callback(response.data.errors, null, response.config.data)
          }
        }
    }else{
      callback(new Error('Unable to execute:  ' + settings.data), [])
    }
  })
}


/**
   * Giving an annotation data, it is created in Neo4J
   * @param context The this object to access configuration data
   * @param query
   * @param callback Function to execute after annotation creation.
   */
function commitNeo4J (query, callback) {

  var lines = query.split(';');
  var lineNo = lines.length;
  //console.log (lineNo)
  let statements = [];
  for (i = 0; i < lineNo; i++) {
    var q = lines[i];
    debuggingg(' QUERY>> ' + q, true)
    let statement = {"statement" :  q, "resultDataContents" : [ "row", "graph" ]};
    statements.push (statement)
  }
  let settings = {
    'async': true,
    'crossDomain': true,
    'url': host + '/db/neo4j/tx/commit',
    'method': 'POST',
    'headers': {
      'authorization': 'Basic ' + token, // admin:onekin https://www.base64decode.org/   https://neo4j.com/docs/http-api/3.5/security/
      'content-type': 'application/json',
      'cache-control': 'no-cache'
    },
    data: { "statements" : statements}
  }
  debuggingg(JSON.stringify(settings, null, 2), true)
  apiCall(settings, callback)
}

////
//UTILS
///

var verbose = false
function debuggingg (msg, priority) {
  if (verbose || priority) {
    console.debug('::>' + msg)
  }
  if (priority === false) verbose = false
}
//Ik
