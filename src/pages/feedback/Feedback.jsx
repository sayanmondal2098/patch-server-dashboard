import "./feedback.css";
const Feedback = () => {
  return (
    <div className='feedback'>
        <div className="fdb-container">
            <div className="fdb-form">
                <div className="form-header">
                <h1>Feedback Form</h1>
                </div>
                <div className="input-container">
                    <input type="text" name="name" id="name" placeholder="Enter Name" />
                    <input type="text" name="device" id="device" placeholder="Device Name" />
                </div>
                <div className="tarea-container">
                    <textarea name="feedback" id="feedback" placeholder="Enter feedback..."></textarea>
                </div>
                <div className="btn-container">
                    <button className="btn">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback