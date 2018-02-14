const csvify = (obj)=>{
  let headers =['id','parent'];
  let flatData = [];
  let count = 1;

  for(var key in obj){
    if(key !== 'children') {
    headers.push(key);
    }
  }
  flatData.push(headers.join());

  let searchData = (obj, parent)=>{
    let temp = [count, parent];
    
    for (let i = 0; i < headers.length; i++) {
      if (obj[headers[i]]) {
        temp.push(obj[headers[i]]);
      }
    }
    obj.pid=count;
    count++; //increment for unique id

    flatData.push(temp.join());
    if(obj.children){
      for (let j = 0; j < obj.children.length; j++) {
        searchData(obj.children[j], obj.pid);
      }
    }
  }
  
  searchData(obj);

  return flatData.join('<br/>');
}
exports.csvify = csvify;