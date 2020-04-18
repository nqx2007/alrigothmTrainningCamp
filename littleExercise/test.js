function changeStr(str){
    if(str.length===0){
        return "."
    }
    let newStr="";
    for(let i=0;i<str.length;i++){
        if((str[i]>="a" && str[i]<="z") || (str[i]>="A" && str[i]<="Z")){
            newStr+=str[i]
        }else{
            newStr+="-"
        }
    }
    const newStrArr=newStr.split("-").filter(item=>item!=="");
    return  newStrArr.map(item=>{
        return item[0].toUpperCase()+item.slice(1)
    }).join(" ")+"."
}
