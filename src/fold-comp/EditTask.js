
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateTask } from './redux/Todoslice/Todoslice';

function EditTask({id}) {
const dispatch= useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edited, setEdited] = useState({
        title:'',
        description:'',
    });

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Edit tast
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='inps'>
            

<input type='text'  placeholder='entre task dicription' onChange={(e) => {setEdited({ ...edited, title: e.target.value});
}}
/>
<input type='text'  placeholder='entre task dicription' onChange={(e) => {setEdited({ ...edited, description: e.target.value});
}}
/>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
           onClick={ () => { 
            handleClose();
            dispatch(UpdateTask({ id: id, edited }));
           }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditTask