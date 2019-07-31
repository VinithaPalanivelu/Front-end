function search()
{
  var country = document.querySelector("#cname").value;
  fetch("https://restcountries.eu/rest/v2/name/" + country).then((res)=>{
    res.json().then((data)=>{
      console.log(data);

      var container = document.querySelector(".results");
      for(var i = 0; i < data.length ; i++) {
        blockDiv = document.createElement("div");
        blockDiv.className = "block";
        blockDiv.setAttribute("onclick" , "getDetail(this)");
        textSpan = document.createElement("span");
        textSpan.className = data[i].name;
        flag = document.createElement("img");
        flag.className = "flagimg";
        flag.setAttribute("src" , data[i].flag);
        textSpan.append(data[i].name); 
        blockDiv.append(textSpan);
        blockDiv.append(flag);
        container.append(blockDiv);
      }
    })
  })
}
function getDetail(ele)
{
  var blk = ele.querySelector("span");
  var fname = blk.className;
  location.href = "main2.html?fname=" + fname;
}