import React from 'react';

const HomePopUp = ({ handleClose, data }) => {
  console.log("dsfsd", data);
  return (
    <div class="popup-container">
      <div class="popup-content">
        <h4>PopUp Data is Here</h4>
        <button class="btn btn-success" onClick={() => handleClose(false)}>Close</button>
        <div class="scrollable-area">
          {data.map((e) => (
            <div class="data-item" key={e.id}>
              <div class="image-container">
                <img src={e.image} alt="abc" width={50} height={50} />
              </div>
              <div class="text-container">
                <p>Sr.No.{e.id}</p>
                <p>Title: {e.title}</p>
                <p>Category: {e.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePopUp;
