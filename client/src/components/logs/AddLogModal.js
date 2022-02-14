import React, { useState } from 'react'

const AddLogModal = () => {
    const [ message, setMessage ] = useState('');
    const [ attention, setAttention ] = useState(false);
    const [ technician, setTechnician ] = useState('');

  return (
    <div id="add-log-modal" className='modal' style={modalStyle}>
          <div className='modal-content'>
              <h4> Enter Vehicle Log</h4>
              <div className='input-field'>
                    <input
                    type='text'
                    name='message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    />
                    <label htmlFor='message' className='active'>
                        Log message
                    </label>
              </div>
          </div>
    </div>
  )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}
export default AddLogModal