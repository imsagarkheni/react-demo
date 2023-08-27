import React, { useState } from 'react';

function AboutPopup({ data, handleClose }) {
  const itemsPerPage = 5; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div className="popup-container">

      <div className="popup-content">
        <h4>About PopUp Data is Here</h4>
        <button className='btn btn-success' onClick={() => handleClose(false)}>Close</button>
        <div className="scrollable-area">
          {currentItems.map((e) => (
            <div key={e.id}>
              <p>Sr.No.{e.id}</p>
              <img src={e.image} alt="abc" width={50} height={50} />
              <p>Title : {e.title}</p>
              <p>Category : {e.category}</p>
            </div>
          ))}
        </div>
        <button
          className="scroll-button"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default AboutPopup;