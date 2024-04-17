import React from 'react'; 

export const ResumeView = ({onClose}) => {
    return (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>Close</button>
            <embed src="/resume.pdf" type="application/pdf" width="100%" height="600px" />
          </div>
        </div>
      );
}