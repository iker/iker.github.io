var guideHtml = `<html data-ember-extensions="1">
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"3d26605ce4","applicationID":"12678344","transactionName":"e1tdF0JdWwoDRUwMD15bHARCU0cOOVAWDAVd","queueTime":3,"applicationTime":46,"agent":""}</script>
<script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"3d26605ce4",applicationID:"12678344"};window.NREUM||(NREUM={}),__nr_require=function(n,e,t){function r(t){if(!e[t]){var i=e[t]={exports:{}};n[t][0].call(i.exports,function(e){var i=n[t][1][e];return r(i||e)},i,i.exports)}return e[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<t.length;i++)r(t[i]);return r}({1:[function(n,e,t){function r(){}function i(n,e,t){return function(){return o(n,[u.now()].concat(f(arguments)),e?null:this,t),e?void 0:this}}var o=n("handle"),a=n(4),f=n(5),c=n("ee").get("tracer"),u=n("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(n,e){s[e]=i(d+e,!0,"api")}),s.addPageAction=i(d+"addPageAction",!0),s.setCurrentRouteName=i(d+"routeName",!0),e.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(n,e){var t={},r=this,i="function"==typeof e;return o(l+"tracer",[u.now(),n,t],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],t),i)try{return e.apply(this,arguments)}catch(n){throw c.emit("fn-err",[arguments,this,n],t),n}finally{c.emit("fn-end",[u.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(n,e){m[e]=i(l+e)}),newrelic.noticeError=function(n,e){"string"==typeof n&&(n=new Error(n)),o("err",[n,u.now(),!1,e])}},{}],2:[function(n,e,t){function r(n,e){var t=n.getEntries();t.forEach(function(n){"first-paint"===n.name?a("timing",["fp",Math.floor(n.startTime)]):"first-contentful-paint"===n.name&&a("timing",["fcp",Math.floor(n.startTime)])})}function i(n){if(n instanceof c&&!s){var e,t=Math.round(n.timeStamp);e=t>1e12?Date.now()-t:f.now()-t,s=!0,a("timing",["fi",t,{type:n.type,fid:e}])}}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var o,a=n("handle"),f=n("loader"),c=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){o=new PerformanceObserver(r);try{o.observe({entryTypes:["paint"]})}catch(u){}}if("addEventListener"in document){var s=!1,p=["click","keydown","mousedown","pointerdown","touchstart"];p.forEach(function(n){document.addEventListener(n,i,!1)})}}},{}],3:[function(n,e,t){function r(n,e){if(!i)return!1;if(n!==i)return!1;if(!e)return!0;if(!o)return!1;for(var t=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}e.exports={agent:i,version:o,match:r}},{}],4:[function(n,e,t){function r(n,e){var t=[],r="",o=0;for(r in n)i.call(n,r)&&(t[o]=e(r,n[r]),o+=1);return t}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],5:[function(n,e,t){function r(n,e,t){e||(e=0),"undefined"==typeof t&&(t=n?n.length:0);for(var r=-1,i=t-e||0,o=Array(i<0?0:i);++r<i;)o[r]=n[e+r];return o}e.exports=r},{}],6:[function(n,e,t){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(n,e,t){function r(){}function i(n){function e(n){return n&&n instanceof r?n:n?c(n,f,o):o()}function t(t,r,i,o){if(!d.aborted||o){n&&n(t,r,i);for(var a=e(i),f=v(t),c=f.length,u=0;u<c;u++)f[u].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function l(n,e){h[n]=v(n).concat(e)}function m(n,e){var t=h[n];if(t)for(var r=0;r<t.length;r++)t[r]===e&&t.splice(r,1)}function v(n){return h[n]||[]}function g(n){return p[n]=p[n]||i(t)}function w(n,e){u(n,function(n,t){e=e||"feature",y[t]=e,e in s||(s[e]=[])})}var h={},y={},b={on:l,addEventListener:l,removeEventListener:m,emit:t,get:g,listeners:v,context:e,buffer:w,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var f="nr@context",c=n("gos"),u=n(4),s={},p={},d=e.exports=i();d.backlog=s},{}],gos:[function(n,e,t){function r(n,e,t){if(i.call(n,e))return n[e];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(n,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return n[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(n,e,t){function r(n,e,t,r){i.buffer([n],r),i.emit(n,e,t)}var i=n("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(n,e,t){function r(n){var e=typeof n;return!n||"object"!==e&&"function"!==e?-1:n===window?0:a(n,o,function(){return i++})}var i=1,o="nr@id",a=n("gos");e.exports=r},{}],loader:[function(n,e,t){function r(){if(!x++){var n=E.info=NREUM.info,e=l.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(n&&n.licenseKey&&n.applicationID&&e))return s.abort();u(y,function(e,t){n[e]||(n[e]=t)}),c("mark",["onload",a()+E.offset],null,"api");var t=l.createElement("script");t.src="https://"+n.agent,e.parentNode.insertBefore(t,e)}}function i(){"complete"===l.readyState&&o()}function o(){c("mark",["domContent",a()+E.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(f=Math.max((new Date).getTime(),f))-E.offset}var f=(new Date).getTime(),c=n("handle"),u=n(4),s=n("ee"),p=n(3),d=window,l=d.document,m="addEventListener",v="attachEvent",g=d.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:g,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1158.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),E=e.exports={offset:f,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};n(1),n(2),l[m]?(l[m]("DOMContentLoaded",o,!1),d[m]("load",r,!1)):(l[v]("onreadystatechange",i),d[v]("onload",r)),c("mark",["firstbyte",f],null,"api");var x=0,O=n(6)},{}],"wrap-function":[function(n,e,t){function r(n){return!(n&&n instanceof Function&&n.apply&&!n[a])}var i=n("ee"),o=n(5),a="nr@original",f=Object.prototype.hasOwnProperty,c=!1;e.exports=function(n,e){function t(n,e,t,i){function nrWrapper(){var r,a,f,c;try{a=this,r=o(arguments),f="function"==typeof t?t(r,a):t||{}}catch(u){d([u,"",[r,a,i],f])}s(e+"start",[r,a,i],f);try{return c=n.apply(a,r)}catch(p){throw s(e+"err",[r,a,p],f),p}finally{s(e+"end",[r,a,c],f)}}return r(n)?n:(e||(e=""),nrWrapper[a]=n,p(n,nrWrapper),nrWrapper)}function u(n,e,i,o){i||(i="");var a,f,c,u="-"===i.charAt(0);for(c=0;c<e.length;c++)f=e[c],a=n[f],r(a)||(n[f]=t(a,u?f+i:i,o,f))}function s(t,r,i){if(!c||e){var o=c;c=!0;try{n.emit(t,r,i,e)}catch(a){d([a,t,r,i])}c=o}}function p(n,e){if(Object.defineProperty&&Object.keys)try{var t=Object.keys(n);return t.forEach(function(t){Object.defineProperty(e,t,{get:function(){return n[t]},set:function(e){return n[t]=e,e}})}),e}catch(r){d([r])}for(var i in n)f.call(n,i)&&(e[i]=n[i]);return e}function d(e){try{n.emit("internal-error",e)}catch(t){}}return n||(n=i),t.inPlace=u,t.flag=a,t}},{}]},{},["loader"]);</script><body><style type="text/css" media="screen">
  /*
  .nodes-image {
    margin:-100;
  }
  */
  @import url("//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");

  .imageblock .content img {max-width: 900px;max-height: 300px;}
  .deck h3, .deck h4 {display: block !important;margin-bottom:8px;margin-top:5px;}
  .listingblock {margin:8px;}
  .pull-bottom {position:relative;bottom:1em;}
  .admonitionblock td.icon [class^="fa icon-"]{font-size:2.5em;text-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:default}
  .admonitionblock td.icon .icon-note:before{content:"\f05a";color:#19407c}
  .admonitionblock td.icon .icon-tip:before{content:"\f0eb";text-shadow:1px 1px 2px rgba(155,155,0,.8);color:#111}
  .admonitionblock td.icon .icon-warning:before{content:"\f071";color:#bf6900}
  .admonitionblock td.icon .icon-caution:before{content:"\f06d";color:#bf3400}
  .admonitionblock td.icon .icon-important:before{content:"\f06a";color:#bf0000}
</style>
<style type="text/css" media="screen">
  #editor.maximize-editor .CodeMirror-code { font-size:40px; line-height:45px; }
</style>
<article class="guide" ng-controller="AdLibDataController">
  <carousel class="deck container-fluid">



  <slide class="row-fluid">

    <div class="col-sm-12">
      <h3>Open Systematic Literature Reviews</h3>
      <br/>
      <div>

<div class="paragraph">
<h4>ABOUT  us: </h4><p><a target="_blank" href="http://www.onekin.org/">
<img src="https://onekin.org/wp-content/uploads/2019/11/danland_logo-1.png" alt="danland logo" width="200"><br/>
 Onekin </a>is a research group mainly focused on the study of Portal/Portlet engineering issues. Our group is localized at the University of the Basque Country</p>
</div>
<div class="paragraph">
<h4>ABOUT this guided tour:</h4>
<p>This is a GraphGist created to show the Open SLR auditability concept. It is available <a target="_blank" href="https://github.com/onekin/OpenSLR/blob/master/graphgist/oslr_guide.html">in Github</a>.
In addition, it can be "played" as a guided tour into Neo4j. Copy and paste the following command in your Neo4j Browser:</p>
</div>

<div id="" class="listingblock">
  <div class="content">
      <pre class="">:play https://raw.githubusercontent.com/onekin/OpenSLR/master/graphgist/oslr_guide.html</pre>
  </div>
</div>
<div class="paragraph">
<p>Problems? For security reasons, Neo4j’s standard config is set up to accept files hosted on guides.neo4j.com and localhost. To allow accessing this guide from <a target="_blank" href="https://raw.githubusercontent.com" class="bare">https://raw.githubusercontent.com</a>, you will need to whitelist it in your $NEO4J_HOME/conf/neo4j.conf along with the default whitelists, as shown below.</p>
</div>


<div id="" class="listingblock">
  <div class="content">
      <pre class="">browser.remote_content_hostname_whitelist=https://raw.githubusercontent.com, https://portal.graphgist.org/, https://guides.neo4j.com/, localhost</pre>
  </div>
</div>

<div class="paragraph">
<h4>ABOUT Open SLRs</h4>
<p>The main aim of OpenSLRs is to ensure auditability of Data Extraction processes in Systematic Literature Reviews performance. For that purpose OpenSLRs:
  <ul>
    <li> Follow the <strong>W3C Annotations Model</strong></li>
  <li> Analyze data extraction process auditability by means of <strong>goals, metrics and queries</strong>.</li>
</ul>
</p>
</div>

<div class="paragraph">
<p>This guide explains and shows all these concepts through <strong>an example</strong>.</p>
</div></div>
    </div>
  </slide>

  <slide class="row-fluid">
    <div class="col-sm-12">
      <h3>W3C Annotations Model</h3>
      <div class="paragraph">
<p>We opt to align our efforts with the <a target="_blank" href="https://www.w3.org/annotation/">W3C Web Annotation</a> recomendation in order to standardize SLR annotations.</p>
</div>
<div class="paragraph">
<h4>Aims of the Model</h4>
<p>The primary aim of the Web Annotation Data Model is to provide a standard description model and format to enable annotations to be shared between systems. Annotating is defined as the act of creating associations between distinct pieces of information.</p>
</div>
<div class="imageblock">
<div class="content">
<img src="https://www.w3.org/TR/annotation-model/images/intro_model.png" alt="intro model" width="400" />
</div>
</div>
<div class="paragraph">
<p>The <a target="_blank" href="https://www.w3.org/TR/annotation-model/">Web Annotation Data Model</a> provides an extensible, interoperable framework for expressing annotations such that they can easily be shared between platforms, with sufficient richness of expression to satisfy complex requirements while remaining simple enough to also allow for the most common use cases.</p>
</div>
<div class="paragraph">
<p>The specification provides a specific <a target="_blank" href="https://www.w3.org/TR/annotation-vocab/">JSON format</a> for ease of creation and consumption of annotations based on the conceptual model that accommodates these use cases, and the vocabulary of terms that represents it.
  <div class="imageblock">
  <div class="content">
    <img src="https://www.w3.org/TR/annotation-vocab/images/examples/annotation.png" alt="anno model" width="600" /></p>
  </div>
  </div>
</div>
    </div>
  </slide>

  <!--
  SET THEORY
  -->


  <slide class="row-fluid">
    <div class="col-sm-12">
      <h3>Goals, metrics and queries for auditability</h3>
      <br/>
      <div class="paragraph">
<p>The main aim of OpenSLRs is to ensure auditability of data extraction processes in Systematic Literature Reviews. We follow the <a  target="_blank" href="https://www.leadingagile.com/2013/07/gqm-how-do-you-know-your-metrics-are-any-good/">Goal-Question-Metric</a> (GQM) paradigm</p>
</div>
<div class="imageblock">
<div class="content">
<img src="https://www.leadingagile.com/wp-content/uploads/2014/05/gqm-diagram.png" alt="gqm diagram" width="600">
</div>
</div>
<div class="paragraph">
<p>This Neo4J guide explains OpenSLR metrics and shows the cypher statements to obtain the metrics measurements from an example SLR. Concretely, we follow the this GQM schema: </p>
</div>
<div class="imageblock">
<div class="content">
<img src="https://raw.githubusercontent.com/onekin/OpenSLR/master/graphgist/DataExtractionReliablity.png" alt="gqm diagram"  height="500" width="1000">
</div>
</div>
    </div>
  </slide>

  <slide class="row-fluid">
    <div class="col-sm-12">
      <h3>The example: an Open Systematic Literature Review</h3>
      <br/>
      <div class="paragraph">
  <p>This example OpenSLR is a toy SLR to show the potential of this research proposal.

  First of all, let's define formally a SLR.

  </br>
  <strong>DEFINITION:  SLR data set:</strong>
  </br>
    Let <strong>\( A= (P, R, D, K, E, B, C, V) \)</strong> be a SLR data set, where:
    <ul>
  <li> \(P\) is a set of papers, </li>
  <li>\(R\) is a set of reviewers (a.k.a. extractors), </li>
  <li>\(D\) is a set of (internal or external) data checkers, </li>
  <li>\(K\) is a set of categories, </li>
  <li>\(E\) is a set of codes, </li>
  <li>\(B\) is a set of codebook tuples, </li>
  <li>\(C\) is a set of coding tuples, </li>
  <li>\(V\) is a set of validation tuples.</li>
  </ul>

    </br>  </br>
  <strong>  DEFINITION Codebook tuple:</strong>
    </br>
      A codebook tuple \(\lt category, code\gt  \in B \) links a \(code \in E\) to a \( category \in K\) . Hence , \(B  \subseteq (K \times E) \).

    </br>  </br>
  <strong>  DEFINITION Coding tuple:</strong>
    </br>
      A coding tuple \(\lt codingId, paper, reviewer, code, quote\gt  \in C  \) accounts for the act of a \( reviewer \in R\) classifying a given \(paper \in P\) along a certain \(code \in E\) at hand on the grounds of some paragraphs or quotes found on the paper.
    </br>  </br>
  <strong>  DEFINITION Validation tuple:</strong>
    </br>
    A validation tuple  \(\lt checker, codingId, assessment, comment\gt  \in V\) accounts for the act of a \( checker \in D\) assessing a coding tuple identified by \(codingId\).

    </br>

      <strong>  NOTATION a tuple property method: </strong>
      </br>
      We denote a property value of a tuple instance through a point notation. For instance, \(t.paper\) refers to the value of the paper property of tuple \(t \in T\). It is worth to note that by tuple we mean any of the aforementioned tuple type. Namely,  validation tuple, coding tuple, code book tuple.

      </br>

    </br>

   As an example, the following toy SLR data set is used along the guide: \( A= (P, R, D, K, E, B, C, V) \), where:
   <ul>
   <li> \(P= \{paper1, paper2, paper3, paper4,paper5, paper6\}\), </li>
   <li>\(R=\{Alice, Bob, Carol\}\), </li>
   <li>\(D= \{David\}\), </li>
   <li>\(K=\{ProgrammingLanguage, QueryLanguage, ApplicationDomain\}\), </li>
   <li>\(E=\{Java, C, MissingPL, SQL, Sparql, cypher, MissingQL, OpenendedAD, MissingAD\}\), </li>
   <li>\(B=\{\lt ProgrammingLanguage, Java\gt, \)</br> \(\lt ProgrammingLanguage, C\gt, \)</br> \(
   \lt ProgrammingLanguage, MissingPL\gt, \)</br> \(
   \lt QueryLanguage, SQL\gt, \)</br> \(
   \lt QueryLanguage, Cypher\gt , \)</br> \(
   \lt QueryLanguage, Sparql\gt , \)</br> \(
   \lt QueryLanguage, MissingQL\gt\},
   \lt ApplicationDomain, OpenendedAD\gt, \)</br> \(
   \lt ApplicationDomain, MissingAD\gt\}, \) </li>
   <li>\(C=\{\lt anno1, paper1, Alice, Java, “developed in Java”\gt , \)</br> \(
   \lt anno2, paper1, Bob,  Java, “developed in Java”\gt , \)</br> \(
   \lt anno3, paper2, Alice,   Java, “developed”\gt , \)</br> \(
        \lt anno4, paper2, Carol,  C, “C development”\gt , \)</br> \(
        \lt anno5, paper3, Bob, C, “developed in C”\gt , \)</br> \(
        \lt anno6, paper3, Carol, C, “developed in C”\gt , \)</br> \(
        \lt anno7, paper4, Carol, Java, “developed in Java”\gt , \)</br> \(
        \lt anno8, paper5, Carol, Java, “developed in Java”\gt , \)</br> \(
        \lt anno9, paper1, Alice, SQL, “ERDB”\gt , \)</br> \(
        \lt anno10, paper2, Alice, SQL, “ERDB”\gt \}, \) </li>
   <li>\(V=\{
  \lt David, anno1, agree, “all ok”\gt,  \)</br>
  \( \lt David, anno2, agree, “all ok”\gt,  \)</br>
  \(\lt David, anno3, disagree, “It is C”\gt,  \)</br>
  \(\lt David, anno10, agree, “all ok”\gt  \}.\) </li>
   </ul>

   <h3>A formal description of cypher queries:</h3>
           <p>
  This formal definition of SLR as sets allows us to describe Cypher queries formaly using the set theory. In this way we avoid the Cypher messiness when queries are big.


    Next slides describe cypher queries' goals in terms of the set theory following these definitions and notations.

       </p>
  </div>
      </div>
  </slide>

  <slide class="row-fluid">
    <div class="col-sm-12">
      <h3>ANALYSIS: Graph statistics</h3>
      <p>This query colects statistics about the Data Base. Concretely:
        <ul>
  <li>numberOfPapers</li>
  <li>	NumberOfAnnotations</li>
  <li>	numberOfExtractors</li>
  <li>	NumberOfValidations</li>
  <li>	NumberOfCheckers</li>
  <li>	NumberOfDBNodes</li>
  <li>	NumberOfDBRelations</li>
</ul>
</p>
      <div>
<div id="" class="listingblock">

  <div class="content">

      <pre mode="cypher" class="highlight pre-scrollable code runnable standalone-example ng-binding" lang="">
        <code class="cypher language-cypher">MATCH (n), (primaryStudy:foaf__Document), ()-[p]-()
WITH COUNT(DISTINCT primaryStudy) as numberOfPapers, count(DISTINCT n) as NumberOfDBNodes,  count(DISTINCT p) as NumberOfDBRelations
MATCH ({uri:'http://www.w3.org/ns/oa#classifying'})<-[:oa__motivatedBy]-(ano:oa__Annotation)-[:dcterms__creator]->(extractor)
MATCH ({uri:'http://www.w3.org/ns/oa#assessing'})<-[:oa__motivatedBy]-(checks:oa__Annotation)-[:dcterms__creator]->(checker)
RETURN numberOfPapers, count(DISTINCT ano) as NumberOfAnnotations,  COUNT(DISTINCT extractor) as numberOfExtractors, count(DISTINCT checks) as NumberOfValidations,  COUNT(DISTINCT checker) as numberOfCheckers, NumberOfDBNodes,   NumberOfDBRelations</code>
      </pre>

  </div>
</div></div>
    </div>
  </slide>



  <slide class="row-fluid">
    <div class="col-sm-12">
      <h3>ANALYSIS: #Extractors (M1):</h3>
      <br/>
<strong>TEXTUAL DESCRIPTION:</strong>
Count the distinct paper reviewers (i.e. data extractors) in the OSLR. That is, count distinct extractors coding primary studies.
<br/>
<strong>FORMAL DESCRIPTION: </strong>
\(numberOfExtractors = |Extractors| \) where \(Extractors =\{ e \in R | \exists Anno \in C: Anno.reviewer =e\} \)
<br/>
<strong>CYPHER QUERY: </strong>
<div id="" class="listingblock">
  <div class="content">
      <pre mode="cypher" class="highlight pre-scrollable code runnable standalone-example ng-binding" lang="">
        <code class="cypher language-cypher">
          MATCH ({uri:'http://www.w3.org/ns/oa#classifying'}) <-[:oa__motivatedBy]-(ANNO:oa__Annotation)-[:dcterms__creator]->(extractor)
RETURN COUNT(DISTINCT extractor ) AS numberOfExtractors
        </code>
      </pre>
  </div>
</div></div>
  </slide>


  <slide class="row-fluid">
    <div class="col-sm-12">
      <h3>ANALYSIS: #AdditionalReviewer (M4):</h3>
      <br/>
      <strong>TEXTUAL DESCRIPTION:</strong>
      List the number of distinct extractors coding each paper.
      <br/>
      <strong>FORMAL DESCRIPTION: </strong>
        We want the \(\lt paper_i , numberOfExtractors_i \gt \) where \(paper_i \in P \),  \(numberOfExtractors_i = |Extractors_i| \) and \(Extractors_i =\{ e \in R | \exists Anno \in C: Anno.reviewer =e \land Anno.paper = paper_i \} \)
  <br/>
  <strong>CYPHER QUERY: </strong>
<div id="" class="listingblock">
  <div class="content">
      <pre mode="cypher" class="highlight pre-scrollable code runnable standalone-example ng-binding" lang="">
        <code class="cypher language-cypher">
          MATCH (PAPER:foaf__Document)
          OPTIONAL MATCH ({uri:'http://www.w3.org/ns/oa#classifying'}) <-[:oa__motivatedBy]-(ANNO:oa__Annotation)-[:oa__hasTarget]-> ()-[:oa__hasSource]->(PAPER), (ANNO)-[:dcterms__creator]->(extractor)
          RETURN PAPER.dcterms__title AS paper, COUNT(DISTINCT extractor ) AS numberOfExtractors</code>
      </pre>
  </div>
</div></div>
  </slide>


  <slide class="row-fluid">
    <div class="col-sm-12">
      <h3>ANALYSIS: #AssessingAnnotations (M7):</h3>
      <br/>
      <div class="paragraph">
        <strong>TEXTUAL DESCRIPTION:</strong>
        Count the number of validated codings per codebook (i.e. category & code).
<br/>
        <strong>FORMAL DESCRIPTION:</strong>
        For each  \(\lt category, code\gt \in B\) we want tuples: \( \lt category, code, NumValidations_{code} \gt \) where  \( NumValidations_{code} = |Validations_{code}|  \) and  \( Validations_{code} = \{ v \in V |  \exists Anno \in C: Anno.code = code \land Anno.codingId = v.codingId\} \)
<br/>
<strong>CYPHER QUERY: </strong>
<div id="" class="listingblock">
  <div class="content">
      <pre mode="cypher" class="highlight pre-scrollable code runnable standalone-example ng-binding" lang="">
        <code class="cypher language-cypher">MATCH (ano1:oa__Annotation)-[:oa__motivatedBy]->({uri:'http://www.w3.org/ns/oa#assessing'})
MATCH (ano1:oa__Annotation)-[:oa__hasTarget]->(ano2)
MATCH (ano2:oa__Annotation)-[:oa__motivatedBy]->({uri:'http://www.w3.org/ns/oa#classifying'})
MATCH (ano2:oa__Annotation)-[:oa__hasBody]->(a)-[:oa__hasBody]->(b)
RETURN b.rdf__value as code, COUNT(DISTINCT ano1) as totalAssessed</code>
      </pre>
  </div>
</div></div>
    </div>
  </slide>


<slide class="row-fluid">
    <div class="col-sm-12">
      <h3>ANALYSIS: #AssesingAnnotationsAsAgree (M8):</h3>
      <br/>
  <div class="paragraph">
        <strong>TEXTUAL DESCRIPTION:</strong>
        Ratio of validated codings qualified as agree over the total of validated codings.
        <br/>
        <strong>FORMAL DESCRIPTION:</strong>
        We want to know the ratio \(\frac{|AgreeValidations|}{|V|}\) where \(AgreeValidations = \{v \in V | v.assessment = agree\}\)
        <br/>
        <strong>CYPHER QUERY: </strong>
<div id="" class="listingblock">
  <div class="content">
      <pre mode="cypher" class="highlight pre-scrollable code runnable standalone-example ng-binding" lang="">
        <code class="cypher language-cypher">MATCH (ano:oa__Annotation)-[:oa__motivatedBy]->({uri:'http://www.w3.org/ns/oa#assessing'})
WITH COUNT(DISTINCT ano) as totalAssessed
MATCH ({uri:'http://www.w3.org/ns/oa#assessing'})<-[:oa__motivatedBy]-(ano1:oa__Annotation)-[:oa__hasTarget]->(ano2:oa__Annotation)-[:oa__motivatedBy]->({uri:'http://www.w3.org/ns/oa#classifying'})
MATCH (ano1:oa__Annotation)-[:oa__hasBody]->({rdf__value:'agree'})
WITH COUNT(DISTINCT ano1) as agreeAnnotations, totalAssessed
RETURN agreeAnnotations, totalAssessed, toFloat(agreeAnnotations)/totalAssessed as Ratio</code>
      </pre>
  </div>
</div></div>
</div>
  </slide>


  <slide class="row-fluid">
    <div class="col-sm-12">
      <h3>ANALYSIS: #AssesingAnnotationsAsDisagree (M9):</h3>
      <br/>
    <div class="paragraph">
        <strong>TEXTUAL DESCRIPTION:</strong>
        Ratio of validated codings qualified as disagree over the total of validated codings.
        <br/>
        <strong>FORMAL DESCRIPTION:</strong>
        We want to know the ratio \(\frac{|DisagreeValidations|}{|V|}\) where \(DisagreeValidations = \{v \in V | v.assessment = disagree\}\)
        <br/>
        <strong>CYPHER QUERY: </strong>
<div id="" class="listingblock">
  <div class="content">
      <pre mode="cypher" class="highlight pre-scrollable code runnable standalone-example ng-binding" lang="">
        <code class="cypher language-cypher">MATCH (ano:oa__Annotation)-[:oa__motivatedBy]-&gt;({uri:'http://www.w3.org/ns/oa#assessing'})
WITH COUNT(DISTINCT ano) as totalAssessed
MATCH ({uri:'http://www.w3.org/ns/oa#assessing'})&lt;-[:oa__motivatedBy]-(ano1:oa__Annotation)-[:oa__hasTarget]-&gt;(ano2:oa__Annotation)-[:oa__motivatedBy]-&gt;({uri:'http://www.w3.org/ns/oa#classifying'})
MATCH (ano1:oa__Annotation)-[:oa__hasBody]-&gt;({rdf__value:'disagree'})
WITH COUNT(DISTINCT ano1) as disagreeAnnotations, totalAssessed
RETURN disagreeAnnotations, totalAssessed, toFloat(disagreeAnnotations)/totalAssessed as Ratio</code>
      </pre>
  </div>
</div></div>
    </div>
  </slide>


  <slide class="row-fluid">
    <div class="col-sm-12">
      <h3>ANALYSIS: #AssesingAnnotations (M10)</h3>
      <br/>
      <div class="paragraph">
            <strong>TEXTUAL DESCRIPTION:</strong>
            Ratio of assessed annotations per code.
            <br/>
            <strong>FORMAL DESCRIPTION:</strong>
        For each  \(\lt category, code\gt \in B\) we want tuples: \( \lt code, NumCodings_{code}, NumValidated_{code}, \frac{NumCodings_{code}}{NumValidated_{code}} \gt \) where  \( NumCodings_{code} = |Codings_{code}|  \) and  \( Codings_{code} = \{ Anno \in C | Anno.code = code \} \) and  \( Validations_{code} = \{ v \in V |  \exists Anno \in C: Anno.code = code \land Anno.codingId = v.codingId\} \)
            <br/>
            <strong>CYPHER QUERY: </strong>
</div>
<div id="" class="listingblock">
  <div class="content">
      <pre mode="cypher" class="highlight pre-scrollable code runnable standalone-example ng-binding" lang="">
        <code class="cypher language-cypher">MATCH (c:oa__Annotation)-[:oa__motivatedBy]->({uri:'http://www.w3.org/ns/oa#classifying'})
        MATCH (c:oa__Annotation)-[:oa__hasBody]->(a)-[:oa__hasBody]->(b)
        WITH COUNT(DISTINCT c) as totalExtractions, b.rdf__value as code, a
        MATCH (ano1:oa__Annotation)-[:oa__motivatedBy]->({uri:'http://www.w3.org/ns/oa#assessing'})
        MATCH (ano1:oa__Annotation)-[:oa__hasTarget]->(ano2)
        MATCH (ano2:oa__Annotation)-[:oa__motivatedBy]->({uri:'http://www.w3.org/ns/oa#classifying'})
        MATCH (ano2:oa__Annotation)-[:oa__hasBody]->(a)
        WITH COUNT(DISTINCT ano1) as totalAssessed, totalExtractions, code
        RETURN code, totalExtractions, totalAssessed, toFloat(totalAssessed)/totalExtractions as Ratio</code>
      </pre>
  </div>
</div>
    </div>
  </slide>



  <slide class="row-fluid">
    <div class="col-sm-12">
      <h3>ANALYSIS: #CodedPS_per_day (TimeLine):</h3>
      <br/>  <strong>TEXTUAL DESCRIPTION:</strong>
      <div><div class="paragraph">
<p> Codings per day</p>
<br/>
<strong>CYPHER QUERY: </strong>
</div>
<div id="" class="listingblock">
  <div class="content">
      <pre mode="cypher" class="highlight pre-scrollable code runnable standalone-example ng-binding" lang="">
        <code class="cypher language-cypher">MATCH ({uri:'http://www.w3.org/ns/oa#classifying'})<-[:oa__motivatedBy]-(ano1:oa__Annotation)
WITH apoc.date.parse (ano1.dcterms__created, "d", "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") as d, COUNT(DISTINCT ano1) as numberOfCodingAnnotations
RETURN apoc.date.format (d,"d", "yyyy-MM-dd") as day,  numberOfCodingAnnotations
ORDER BY d</code>
      </pre>
  </div>
</div></div>
    </div>
  </slide>
  </carousel>
</article></body></html>`