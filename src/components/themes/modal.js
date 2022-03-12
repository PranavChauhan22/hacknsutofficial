import React,{useState} from "react";
import "./modal.css";

function Modal({ content,title}) {
    const [open,setOpenModal] = useState(false);
  return (<>
   <button className="theme__item" onClick={()=>{setOpenModal(!open)}}>{title}</button>
    <div className={`modalBackground ${open?"show":"hide"}`} >
      <div className="modalContainer">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="body">
          <p>{content}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
                setOpenModal(false);
            }}
            id="cancelBtn"
            >
            Cancel
          </button>
        </div>
      </div>
    </div>
              </>
  );
}

export default Modal;