import React, { useState } from 'react'
import axios from 'axios'

export const Form = () => {

    const [ formbuy , setFormBuy ] = useState({
        titulo:'',
        precio:''
    })

    const handleChange = (e)=>{
        setFormBuy({
            ...formbuy,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e) =>{

        e.preventDefault()

        await axios.post('https://mercadopagobackend.herokuapp.com/pago' , formbuy)
        .then(resp=>{
            console.log(resp.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} name='titulo'/>
        <input type='number' onChange={handleChange} name='precio' />
  
        <input type='submit'/>
      </form>
    );
  }