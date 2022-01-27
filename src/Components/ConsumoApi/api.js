import {useState,useEffect} from "react";
export const Api=(url)=>{//Aqui consumimos la api de fakestore
    const[podructs,setProducts]=useState({load:true,datos:null});
    useEffect(()=>{
        ObtenerDatos(url)
    },[url]);
    async function ObtenerDatos(url){
        try{
            setProducts({load:true,datos:null})
            const x=await fetch(url)
            const datos=await x.json()
            setProducts({load:false,datos})
        }catch(e){
            console.log(e);
        }
        
    } 
    return podructs;
}