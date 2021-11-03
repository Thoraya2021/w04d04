import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import Cards from "./Cards";
const Card=()=>
{
    const {id}=useParams();


const [tower,SetCards]=useState
([
  {
    id:1,
    name: "Paris Eiffel Tower ",
    img: "https://th.bing.com/th/id/R.b39f31c325cf5117c3004d8d1a6d1106?rik=oyodz3%2bZnr%2flMw&pid=ImgRaw&r=0",
    description:"this tower"},
  {
 id:2 ,
 name:"Saudi Arabia Kingdom Tower",
img:"https://th.bing.com/th/id/R.df682e559cb4f0ea3c266d42bfb3b936?rik=QC67pab5VO905A&pid=ImgRaw&r=0",
description:"this tower"},
  {
 id:3 ,
 name :" Khalifa Tower",
 img :"https://th.bing.com/th/id/OIP.PkYU8ejc2ibRRH_RkwsTEwHaL0?pid=ImgDet&rs=1",
description:"this tower",
  },
]);
const myitem=Cards.find((elements)=>
{
return Number(id)===elements.id;

})
return (
    <div>
<h1> {myitem.name} </h1> ;
<img src={myitem.img}/>;
</div>


) 
}


export default Card;