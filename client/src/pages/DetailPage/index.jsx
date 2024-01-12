import React, { useEffect, useState } from 'react'
import './detailPage.scss'
import { useParams } from 'react-router-dom';

function DetailPage() {

    const { id } = useParams()

    const [detail, setDetail] = useState()

    async function detailProduct() {
        const res=await axios.get(`http://localhost:4001/product/${id}`)
        setDetail(res.data)
    }

    useEffect(() => {
        detailProduct()
    }, [])
    

    

    return (
        <div>
            {
                detail ? <>
                <p>{detail.name}</p>
                </>
                :""
            }
        </div>
    )
}

export default DetailPage