import React, { useEffect,useState } from 'react'
import ProductCard from '../Components/ProductCard'

function Main() {
    const [data,setData] = useState([]);
    useEffect(()=>{
            async function fetchData(){
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json();
                // console.log(data)
                setData(data)
                console.log(data.length)

            } 
            fetchData();
    },[])
  return (
    <section className="Products-Container  flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center mt-5 p-10 md:p-0 md:mx-auto md:w-[95%] gap-8">

    {data.map((data)=>{
        return <ProductCard key={data.id} data={data}/>
    })}
    
    </section>
  )
}

export default Main