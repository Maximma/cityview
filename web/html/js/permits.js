var permitsPath = 'data/neighbors_bp.json';
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function(){
  if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
    var permits = JSON.parse(httpRequest.response)
    console.log(permits);
  }
}
var permits = httpRequest.open("GET", permitsPath, true);
httpRequest.send();