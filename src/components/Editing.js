import { Button, Modal } from "react-bootstrap";
import React, { useEffect, useState } from 'react'

function Editing(props) {
    let handleClose = () => {
        props.hideedit()
    }
    const [childData, setchildData] = useState({
        Name: "",
        From: "",
        Year: ""
    })
    useEffect(() => {
        setchildData({
            ...props.selecteditem
        })
    }, [props.selecteditem])

    let updatechange = (event) => {
        setchildData({
            ...childData,
            [event.target.name]: event.target.value,
        })
    }
    let Edititem = async () => {
        try {
            props.saveData(childData)
            props.hideedit()
            setchildData({
                Name: "",
                From: "",
                Year: ""
            })
        } catch (err) {
            alert("Sorry")
        }
    }
    return (
        <>
            <Modal show={props.showedit} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                    <label className="form-label">Certificate Name</label>
                        <input type="text" className="form-control" name="Name" onChange={updatechange} value={childData.Name} placeholder="Enter Certficate Name" />
                        <label className="form-label">This is Certified by</label>
                        <input type="text" className="form-control" name="From" onChange={updatechange} value={childData.From} placeholder="Enter Orginization name" />
                        <label className="form-label">Certified Year</label>
                        <input type="text" className="form-control" name="Year" onChange={updatechange} value={childData.Year} placeholder="Enter Year" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={Edititem}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Editing
