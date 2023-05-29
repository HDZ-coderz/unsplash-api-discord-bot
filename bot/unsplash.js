import { createApi } from "unsplash-js";
import nodeFetch  from "node-fetch";
import * as dotenv from 'dotenv'
dotenv.config();
const key=process.env['UNSPLASH_API_KEY'];
const unsplash = createApi({
  accessKey:key ,
  fetch: nodeFetch
});
//get photos
function unsplash_response(txt){
  var result=unsplash.search.getPhotos({
      query: txt,
      page: 1,
      perPage: 10
    });
    return result;
}
var query="&client_id="+key;
async function result(txt){
    const data=await unsplash_response(txt);
    var response=await fetch(data.originalResponse.url+query);
    response=response.json();
    return response;
}
function rand(pages){
if(pages==0){
return 0;
}else{
    let random=Math.floor(Math.random() * pages);
    return random;
}
}
async function unsplash_get_image(txt){
try{
    let data=await result(txt);
    let rand_integer=rand(data.results.length);
    let final_result=data.results[rand_integer].links.html;
    return final_result;
}catch(err){
    return "Error";
}
}
export{unsplash_get_image};
