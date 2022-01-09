import { Button, Modal } from "react-bootstrap";
import React, { useState } from 'react'

function Adding(props) {
  const [item, setitem] = useState({
    Name: "",
    From: "",
    Year: ""
  })
  let updatechange = (event) => {
    setitem({
      ...item,
      [event.target.name]: event.target.value,
    })
  }
  let handleClose = () => {
    props.hideadd()
  }
  let Additems = async () => {
    try {
      props.getData(item)
      props.hideadd()
      setitem({
        Name: "",
        From: "",
        Year: ""
      })

    } catch (err) {
      alert("Error")
    }

  }
  return (
    <>
      <Modal show={props.showadd} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div>
            <label className="form-label">Certificate Name</label>
            <input type="text" className="form-control" name="Name" onChange={updatechange} value={item.Name} placeholder="Enter Certficate Name" required/>
            </div>
            <div>
            <label className="form-label">This is Certified by</label>
            <input type="text" className="form-control" name="From" onChange={updatechange} value={item.From} placeholder="Enter Orginization name" required/>
            </div>
            <div>
            <label className="form-label">Certified Year</label>
            <input type="text" className="form-control" name="Year" onChange={updatechange} value={item.Year} placeholder="Enter Year" required/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Additems}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Adding
