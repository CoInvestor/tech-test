$(document).ready(function init(){
  loadPageData(1);
})

function loadPageData(page){
  $("#outputTable tr:not(:first)").remove();
  document.getElementById('currPage').innerHTML = page;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      let pagination = response.meta.pagination;

      document.getElementById('prevBttn').onclick = function() {
        loadPageData((page <= 1?pagination.total_pages:page-1));
      }
      document.getElementById('nextBttn').onclick = function(){
        loadPageData((page >= pagination.total_pages ? 1:page+1));
      }

      for(company of response.data){
        let details = getCompanyDetails(company, response.included);
        document.getElementById("outputTable").innerHTML += "<tr> <td>" + (details.name==undefined?"":details.name) + "</td> <td>" +
        (details.emails==undefined?"":details.emails) + "</td> <td>" +
        (details.websites==undefined?"":details.websites) + "</td> <td> <img src='" +
        (details.latestLogo==undefined?"":details.latestLogo) + "' alt='" +
        (details.name==undefined?"":details.name) + " Logo'> </td> <td>" +
        (details.primarySponsorType==undefined?"":details.primarySponsorType) + "</td> <td>" +
        (details.otherSponsorTypes==undefined?"":details.otherSponsorTypes) + "</td> </tr>";
      }
    } else if(this.readyState == 4){
      document.getElementById("outputTable").style.display = "none";
      let response = JSON.parse(this.responseText);
      document.getElementById("errorOutput").innerHTML = response.status_code + "<br>" + response.message;
    }
  };
  xhttp.open("GET", "https://api.coinvestor.co.uk/v2/company/sponsor?page="+page+"&include=communications,latestLogo,primarySponsorType,otherSponsorTypes", true);
  xhttp.send();
};

function findRelationship(included,type,id,fields){
  let data = {};
  for(elem of included){
    if(elem.type == type && elem.id == id){
      for(f of fields){
        data[f] = elem.attributes[f];
      }
      break;
    }
  }
  return data;
}

function getCompanyDetails(company, included){
  let details = {
    name: company.attributes.name
  }

  let keys = Object.keys(company.relationships);
  let fields = [];
  for(key of keys){
    let rel = company.relationships[key];
    if(rel.data != null && Object.keys(rel.data).length > 0){
      if(key == "otherSponsorTypes"){
        for(r of rel.data){
          fields = findRelationship(included,r.type,r.id,["value"]);
          if(details.hasOwnProperty("otherSponsorTypes")){
            details.otherSponsorTypes += ", " + fields.value;
          } else {
            details.otherSponsorTypes = fields.value;
          }
        }
      } else if(key== "communications"){
        for(r of rel.data){
          fields = findRelationship(included,r.type,r.id,["website","email"]);
          if(details.hasOwnProperty("websites")){
            details.websites += ", " + fields.website;
          } else {
            details.websites = fields.website;
          }

          if(details.hasOwnProperty("emails")){
            details.emails += ", " + fields.email;
          } else {
            details.emails = fields.email;
          }
        }
      } else {
        switch(rel.data.type){
          case "sponsor_type":
          fields = findRelationship(included,rel.data.type,rel.data.id,["value"]);
          details.primarySponsorType = fields.value;
          break;
          case "file_manager":
          fields = findRelationship(included,rel.data.type,rel.data.id,["path"]);
          details.latestLogo = fields.path;
          break;
        }
      }
    }
  }
  return details;
}
