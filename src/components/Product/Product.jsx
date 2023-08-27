import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductDetail } from './productSlice';
// @media (max-width: 767.98px) { .border-sm-start-none { border-left: none !important; } }

const Product = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [star, setStar] = useState(0);

    const Star = ({ star }) => {
		const numberRating = Number(star);
        console.log("numberRating",numberRating);
		const ratingStar = Array.from({ length: 5 }, (elem, index) => {
			let number = index + 0.5;
			return (
				<span key={index}>
					{numberRating >= index + 1 ? (
						<i className="fa-solid fa-star"></i>
					) : numberRating >= number ? (
						<i className="fa-regular fa-star-half-stroke"></i>
					) : (
						<i className="fa-regular fa-star"></i>
					)}
				</span>
			);
		});
		return (
			<div>{ratingStar}</div>
		)
	};


    const productList = async () => {
        const payload = {};
        try {
            const response = await dispatch(getProductDetail(payload)).unwrap();
            setData(response.data);
            setStar(response.data.rating)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        productList();
    }, []);
    return (
        <div>
    {data.map((ele)=>(
        <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5" key={ele.id}>
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src={ele.image}
                          className="w-50"
                          height={150}
                          alt="Product"
                        />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>{ele.title}</h5>
                      <div className="d-flex flex-row">
                      <Star star={ele.rating.rate} />
                        <span>{ele.rating.count}</span>
                      </div>
                      <div className="mt-1 mb-0 text-muted small">
                        <span>{ele.category}</span>
                      </div>
                      <p className="text-truncate mb-4 mb-md-0">
                        {ele.description}
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">${ele.price}</h4>
                        <span className="text-danger"><s>$20.99</s></span>
                      </div>
                      <h6 className="text-success">Free shipping</h6>
                      <div className="d-flex flex-column mt-4">
                        <button className="btn btn-primary btn-sm" type="button">
                          Details
                        </button>
                        <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Additional similar rows */}
        </div>
      </section>
    ))}
        </div>
    )
}

export default Product
