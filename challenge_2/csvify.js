const csvify = (obj)=>{
  let headers =[];
  let flatData = [];
  for(var key in obj){
    if(key !== 'children') {
    headers.push(key);
    }
  }
  flatData.push(headers.join());

  let searchData = (obj)=>{
    let temp = [];
    for (let i = 0; i < headers.length; i++) {
      if (obj[headers[i]]) {
        temp.push(obj[headers[i]]);
      }
    }
    flatData.push(temp.join());
    if(obj.children){
      for (let j = 0; j < obj.children.length; j++) {
        searchData(obj.children[j]);
      }
    }
  }
  
  searchData(obj);

  return flatData.join('<br/>');
}
exports.csvify = csvify;