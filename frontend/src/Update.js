import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
// const id = require(../../)

function Update() {
    // const [id,setid] = useState('')
    const [name,setname] = useState('')
    const [major,setmajor] = useState('')
    const [year,setyear] = useState('')
    const [IDFAC,setIDFAC] = useState('')
    const [IDFAC1,setIDFAC1] = useState([])
    // const [data,setdata] = useState([])

    const nav = useNavigate();
    const {id} = useParams();

    const handledata=(event)=>{
        event.preventDefault();
        axios.put('http://localhost:5619/update/'+id, {IDFAC,major,name,year}).then(
            res =>{
                nav('/');

            }
        ).catch(err=> console.log(err))
    }
    useEffect(()=>{
        // axios.get('http://localhost:5000/update/'+id).then(res=>setdata(res.data)).catch(err=>console.log(err))
        // axios.get('http://localhost:5000/update/'+id).then(res=>console.log(res.data)).catch(err=>console.log(err))

        // axios.get('http://localhost:5000/major').then(res=>setmajor(res.data)).catch(err=>console.log(err))
        axios.get('http://localhost:5619/faculty').then(res=>setIDFAC1(res.data)).catch(err=>console.log(err))
    })



  return (
    <div className="create">
      <div className="container">
        <form onSubmit={handledata}>
            <h2>Update Student</h2>
            <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" placeholder='Enter name' className="form-control"
            onChange={e=> setname(e.target.value)} />
            </div>
        <div className="mb-2">
            <label htmlFor="">Major</label>
            <input type="text" name="" id="" placeholder='Enter Your Major' className="form-control"
            onChange={e=> setmajor(e.target.value)} /> 
            {/* onChange={e=> setName(e.target.value)} */}
        </div>
        <div className="mb-2">
            <label htmlFor="">year</label>
            <input type="text" name="" id="" placeholder='Enter yaer' className="form-control"
            onChange={e=> setyear(e.target.value)}/>
        </div>
        <div className="mb-2">
            <label htmlFor="">faculty</label>
                <select name="" id="" onChange={e=> setIDFAC(e.target.value)} className="form-select">
                    {IDFAC1.map(d=>(
                        <option className="option" key= {d.IDFAC} value={d.IDFAC}>{d.FACNAME}</option>
                    ))}
                </select>
        </div>
        <button className="btn btn-warning">แก้ไข</button>
        </form>
      </div>
    </div>
  )
}

export default Update