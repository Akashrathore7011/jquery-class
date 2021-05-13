window.addEventListener("load",init);

var cricketer;

function init()
{
    document.querySelector("#btn").addEventListener("click",loadId);
    cricketer = document.querySelector("#box");
}

function loadId()
{
    var str = cricketer.value;
    var url ="https://cricapi.com/api/playerFinder?apikey=RiPTCn1FNCUNmr3QzfBy03EMIJG2&name="+str;
    var xhttp = new XMLHttpRequest();// making object of XMLHTTPREQUEST
    xhttp.onreadystatechange = function ()
    {
        if (this.readyState ==4  && this.status==200)
        {
            Data = this.responseText;
            // console.log(Data);
            // // jSON => JS object
        data = JSON.parse(Data);
            // console.log(bata);
            pid = data.data[0]['pid'];
            loadName(pid);
   

        }
    }


    xhttp.open('get',url);
    xhttp.send();
}

function loadName(pid)
{
  var url = "https://cricapi.com/api/playerStats?apikey=RiPTCn1FNCUNmr3QzfBy03EMIJG2&pid="+pid;   
  var xhttp = new XMLHttpRequest();// making object of XMLHTTPREQUEST

  var div = document.querySelector("#data");
  xhttp.onreadystatechange = function ()
  {
      if (this.readyState ==4  && this.status==200)
      {
          Data = this.responseText;
          data = JSON.parse(Data);
        //   console.log(bata);
          var profile = data.profile;
          var p = document.createElement("p");
          var img = document.createElement("img");
          img.setAttribute("src",data.imageURL);
          p.innerText = profile;
          div.appendChild(p);
          div.appendChild(img);

      }
  }


  xhttp.open('get',url);
  xhttp.send();

}