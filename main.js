



var siteNameInput= document.getElementById(`siteName`)  
var siteUrlInput= document.getElementById(`siteUrl`)
var siteContainer=[]
if (localStorage.getItem(`sites`) != null) {
    siteContainer = JSON.parse(localStorage.getItem(`sites`))
    displaySite()
}


function addsite(){
   var siteObj={
    name: siteNameInput.value,
    url: siteUrlInput.value,
   }
   siteContainer.push(siteObj);
   localStorage.setItem(`sites`, JSON.stringify(siteContainer))
   console.log(siteContainer)
   displaySite()

}

function displaySite(){
    var cartona="";
    for(var i = 0;i<siteContainer.length;i++){
       cartona +=`
       <tr>
       <td>${siteContainer[i].name}</td>
       <td>${siteContainer[i].url}</td>
       <td ><a href="${siteContainer[i].url}" target="_blank"><button class=" btn btn-success"> <i class="fa-solid fa-eye"></i>Visit</button> </a></td>
       <td ><button onclick="deleteSite(${i})" class=" btn btn-danger"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>

       </tr>`

    }
    document.getElementById(`demo`).innerHTML = cartona
}
function deleteSite(index) {
    siteContainer.splice(index, 1)
    localStorage.setItem(`sites`, JSON.stringify(siteContainer))
    displaySite()
}







