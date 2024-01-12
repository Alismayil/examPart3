import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react'
import './addPage.scss'
import { Helmet } from "react-helmet";
import axios from 'axios'


const AddPage = () => {
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState('')

  function handleSearch(e) {
    setSearch(e.value)
  }

async function axiosGetProduct() {
  const res = await axios.get("http://localhost:4001/product")
  setProduct(res.data)
}

async function deleteProduct(id) {
  await axios.delete(`http://localhost:4001/product/${id}`)
  axiosGetProduct()
}

useEffect(() => {
  axiosGetProduct()
}, [])
  return (
    <div className='addPage'>
      <div className="notMean"></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
      </Helmet>
      <Formik
        initialValues={{ image: '', name: '', comment: '' }}
        validationSchema={Yup.object({
          image: Yup.string()
            .required('Required'),
          name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          comment: Yup.string().required('Required'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await axios.post("http://localhost:4001/product", values)
          axiosGetProduct()
          setSubmitting();
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="image">image</label>
            <input
              id="image"
              type="text"
              {...formik.getFieldProps('image')}
            />
            {formik.touched.image && formik.errors.image ? (
              <div>{formik.errors.image}</div>
            ) : null}

            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="comment">comment Address</label>
            <input id="comment" type="text" {...formik.getFieldProps('comment')} />
            {formik.touched.comment && formik.errors.comment ? (
              <div>{formik.errors.comment}</div>
            ) : null}

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <input type="text" placeholder='search' onChange={(e)=>handleSearch(e.target)} />
      <button>A-z(name)</button>
      <button>Z-a(name)</button>
      <button>A-z(comment)</button>
      <button>Z-a(comment)</button>
      <thead>
        <tr>
          <th>Name</th>
          <th>Comment</th>
          <th>Icon</th>
          <th>Delete</th>
        </tr>
      </thead>
      {
        product && product.filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
        .map((item) => (
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.comment}</td>
              <td><i className={item.image}></i></td>
              <td><button onClick={()=>deleteProduct(item._id)}>Delete</button></td>
            </tr>
          </tbody>
        ))
      }
    </div>
  );
};
export default AddPage



