import React, { useEffect, useState } from 'react'
import Adding from './Adding'
import Editing from './Editing'

function Home() {
    const [Data, setData] = useState([{ Name: "Python", From: "TechMahindra", Year: 2021 }, { Name: "Java Script", From: "Micro soft", Year: 2020 }])
    const [selecteditem, setselecteditem] = useState({})
    const [uni, setuni] = useState()
    const [showadd, setshowadd] = useState(false)
    const [showedit, setshowedit] = useState(false)


    let getData = (item) => {
        const info = [...Data]
        info.push(item)
        setData(info)
    }
    let saveData = (childData) => {
        const info = [...Data]
        info.splice(uni, 1, childData)
        setData(info)
        setuni()
    }
    let Deleteitem = (id) => {
        if(window.confirm("Are you sure?, this will get delete")){
            const info = [...Data]
            info.splice(id, 1)
            setData(info)
        }
    }


    let Showmodal = () => {
        setshowadd(true)
    }
    let hideadd = () => {
        setshowadd(false)
    }
    let Dataedit = (id, value) => {
        setshowedit(true)
        setselecteditem(value)
        setuni(id)

    }
    let hideedit = () => {
        setshowedit(false)
    }
    // console.log("Edit",selecteditem);
    // console.log("Id",uni);
    // console.log(Data);
    // let a=Data[0]
    // console.log(a[1].id);


    return (
        <div>
            <table className='table table-hover'>
                <thead className='table-success'>
                    <tr>
                        <th>Certification Name</th>
                        <th>Certified By</th>
                        <th>Year of completion</th>
                        <th style={{cursor: "pointer"}} onClick={Showmodal}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg></th>
                    </tr>
                </thead>
                <tbody className='table-dark '>
                    {
                        Data.map((val, id) => {
                            return <tr key={id}>
                                <td>{val.Name}</td>
                                <td>{val.From}</td>
                                <td>{val.Year}</td>
                                <td><button className='btn btn-warning' onClick={() => { Dataedit(id, val) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg></button>|<button className='btn btn-danger' onClick={() => { Deleteitem(id) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg></button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <Adding showadd={showadd} hideadd={hideadd} getData={getData} />
            <Editing hideedit={hideedit} showedit={showedit} selecteditem={selecteditem} saveData={saveData} />
        </div>
    )
}

export default Home
