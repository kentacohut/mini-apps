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
    flatData.push(temp.join());

    obj.pid=count; //sets parent id on parent obj
    count++; //increment for unique id

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