const getDate=()=>{
    const year=new Date().getFullYear();
    const month=String(new Date().getMonth()+1).padStart(2, "0");
    const date=String(new Date().getDate()+1).padStart(2, "0");
    return `${year}-${month}-${date}`
}


export default getDate;