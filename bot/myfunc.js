class Check{
check_bad_words(val){
    val=val.toLowerCase();
    val=val.split(" ");
    //list of bad words
    const bad_words=["test"];
    for(let i in val){
        if(bad_words.includes(val[i])){
            return true;
            break;
        }
    }
    return false;
}
}
export{Check};