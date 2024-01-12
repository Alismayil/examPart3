import React, { useEffect, useState } from 'react'
import './ourteamSection.scss'
import axios from 'axios'

function OurteamSection() {
  const [product, setProduct] = useState([])

  async function axiosGetProduct() {
    const res=await axios.get("http://localhost:4001/product")
  setProduct(res.data)
  }

  useEffect(() => {
    axiosGetProduct()
  }, [])
  
  return (
    <section id='ourteamSection'>
<h1>Our Services</h1>
<div className="prodctBox">
  {product && product.map((item)=>(
<>
<div className="productCart">
      <i className={item.image}></i>
      <h1>{item.name}</h1>
      <p>{item.comment}</p>
      <button>Learn more</button>
    </div>
</>
    
  ))}
</div>
    </section>
  )
}

export default OurteamSection