var url_name = document.URL;
var url = new URL(url_name);
var fname = url.searchParams.get("fname");

fetch("https://restcountries.eu/rest/v2/name/" + fname + "?fullText=true").then((res) =>{
  res.json().then((data)=>{
  
    var elem = document.querySelector(".myelem");
  
    flag = document.createElement("img");
    flag.className = "flagimg";
    flag.setAttribute("src" , data[0].flag);
    elem.append(flag);

    blockDiv = document.createElement("div");
    blockDiv.append("Name: " + data[0].name);
    elem.append(blockDiv);

    blockDiv = document.createElement("div");
    blockDiv.append("Capital: " +data[0].capital);
    elem.append(blockDiv);

    blockDiv = document.createElement("div");
    blockDiv.append("Calling Codes: " +data[0].callingCodes[0]);
    elem.append(blockDiv);

    blockDiv = document.createElement("div");
    blockDiv.append("Region: " +data[0].region);
    elem.append(blockDiv);

    blockDiv = document.createElement("div");
    blockDiv.append("Subregion: " +data[0].subregion);
    elem.append(blockDiv);

    blockDiv = document.createElement("div");
    blockDiv.append("Population: " +data[0].population);
    elem.append(blockDiv);

    blockDiv = document.createElement("div");
    blockDiv.append("Languages: " +data[0].languages[0].name);
    elem.append(blockDiv);

    blockDiv = document.createElement("div");
    blockDiv.append("Currency: " +data[0].currencies[0].name);
    elem.append(blockDiv);

    blockDiv = document.createElement("div");
    blockDiv.append("Regional Blocs: " +data[0].regionalBlocs[0].name);
    elem.append(blockDiv);

    blockDiv = document.createElement("div");
    container.append(blockDiv);
    elem.append(blockDiv);
  })
})

function goBack() {
  window.history.back();
}