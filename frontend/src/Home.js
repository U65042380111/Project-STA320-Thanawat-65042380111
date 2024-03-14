import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
// require('dotenv').config();


function Home() {
    const [data,setData] = useState([]);
    // const [IDFAC,setIDFAC] = useState([]);
    useEffect(()=>{
        // axios.get('http://localhost:5619/faculty').then(res=>setIDFAC(res.data)).catch(err=>console.log(err))

        axios.get('http://localhost:5619/').then(res=>setData(res.data)).catch(err=>console.log(err))
    })
    const navigate = useNavigate();
    const handleDelete = (id)=>{
        axios.delete('http://localhost:5619/delete/'+id).then(res=>navigate('/')).catch(err=>console.log(err))
    }


  return (
    <div className="d-flex justify-content-center align-itmes-center bg-dark vh-100">
        <div className="bg-white rounded w-50">
            <h2 align='center'>แสดงรายชื่อนักศึกษา</h2>
            <Link to="/create" align='center' className='btn btn-success'>เพิ่มข้อมูล</Link>
            <table className="table" align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Major</th>
                        <th>Year</th>
                        <th>IDFAC</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d,i)=>(
                        <tr>
                            <td>{d.id}</td>
                            <td>{d.name} </td>
                            <td>{d.major}</td>
                            <td>{d.year}</td>
                            <td>{d.IDFAC}</td>
                            <td>
                                <Link to={`/update/${d.id}`} className="btn btn-warning" >แก้ไข</Link>
                                <button onClick={e=> handleDelete(d.id)} className="btn btn-danger">ลบ</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default Home