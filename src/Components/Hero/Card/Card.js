import React from 'react'

function Card() {
    return (
        <div>

            {/* card */}
            <div className="sop-card">
                <div className="container-lg">
                    <div className="contant row" style={{ paddingBottom: "10px", background: "transparent", flexWrap: "wrap" }} id="row">
                        <div className="col-md-3">
                            {/* map card */}
                            <div className="card">
                                <div className="img-body">
                                    <img src="" className="card-img-top" alt="..." /></div>
                                <div className="card-body">
                                    <h5 className="card-title">title</h5>
                                    <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                                    <div className="flex"><div className="price">prise</div>
                                        <div className="btn btn-primaryer"><i className="fa-sharp fa-solid fa-cart-shopping"></i></div>
                                    </div>
                                </div>
                            </div>
                            {/* mapend */}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Card