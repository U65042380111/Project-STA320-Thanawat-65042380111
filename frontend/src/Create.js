import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Create() {
    const [id,setid] = useState('')
    const [IDFAC,setIDFAC] = useState([])
    const [IDFAC1,setIDFAC1] = useState('')
    const [major,setmajor] = useState('')
    const [name,setname] = useState('')
    const [year,setyear] = useState('')

    const nav = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5619/faculty').then(res=>setIDFAC(res.data)).catch(err=>console.log(err))
    })

    const handledata=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:5619/create',{id,IDFAC1,major,name,year}).then(
            res =>{
                nav('/');

            }
        ).catch(err=> console.log(err))

    }


  return (
    <div className="create">
      <div className="container">
        <form onSubmit={handledata}>
            <h2>Add Student</h2>
            <div className="mb-2">
            <label htmlFor="">ID</label>
            <input type="text" name="" id="" placeholder='Enter id' className="form-control"
            onChange={e=> setid(e.target.value)}/> 
            
        </div>
        <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" placeholder='Enter name' className="form-control"
            onChange={e=> setname(e.target.value)}/> 
            {/* onChange={e=> setName(e.target.value)} */}
        </div>
        <div className="mb-2">
            <label htmlFor="">Major</label>
            <input type="text" name="" id="" placeholder='Enter Major' className="form-control"
            onChange={e=> setmajor(e.target.value)}/> 
            {/* onChange={e=> setName(e.target.value)} */}
        </div>
        <div className="mb-2">
            <label htmlFor="">year</label>
            <input type="text" name="" id="" placeholder='Enter Year' className="form-control"
            onChange={e=> setyear(e.target.value)}/>
        </div>
        <div className="mb-2">
            <label htmlFor="">IDFAC</label>
                <select name="" id="" onChange={e=> setIDFAC1(e.target.value)} className="form-select">
                    {IDFAC.map(d=>(
                        <option className="option" key= {d.IDFAC} value={d.IDFAC}>{d.FACNAME}</option>
                    ))}
                </select>
        </div>
        <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create