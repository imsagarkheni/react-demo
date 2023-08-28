import React from 'react'

const DetailPopUp = ({ handleClose, data }) => {
    return (
        <div class="popup-container">
            <div class="popup-content">
                <h4>Product Details</h4>
                <button class="btn btn-success" onClick={() => handleClose(false)}>Close</button>
                <div class="scrollable-area">
                    <div class="data-item" key={data.id}>
                        {/* <div class="image-container">
                            <img src={data.image} alt="abc" width={50} height={50} />
                        </div> */}
                        <div class="text-container">
                            <p><b>Sr.No.:</b>{data.id}</p>
                            <p><b>Title:</b> {data.title}</p>
                            <p><b>Category:</b> {data.category}</p>
                            <p><b>Description:</b> {data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPopUp
