export function filterData(sText,rest){
    const filteredData=rest.filter((res)=>res?.data?.name.toLowerCase().includes(sText.toLowerCase()))
    return filteredData;
  }