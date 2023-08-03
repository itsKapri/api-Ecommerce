import React from 'react';
import './Navbar.css'
function Navbar() {
    const bookmarkedProducts = JSON.parse(localStorage.getItem('cart')) || [];

    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-dark">
                <div className="container">
                    <a className="navbar-brand nav-text-color" style={{ fontSize: "2rem" }} href="/">APNI <spna style={{ color: "pink" }}>
                        दुकान</spna></a>
                    <button className="navbar-toggler " style={{ backgroundColor: "rgb(255, 255, 255)" }} type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-text-color">
                                <a className="nav-link  nav-text-color " style={{ fontSize: "1.2rem" }} aria-current="page"
                                    href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  nav-text-color" style={{ fontSize: "1.2rem" }} aria-current="page"
                                    href="#About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-text-color" style={{ fontSize: "1.2rem" }} aria-current="page"
                                    href="/">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex less" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn nav_search-btn" type="submit">Search</button>
                        <button type="button" className="btn nav_icons"><i className="fa-solid fa-user"></i></button>
                        <button className="btn nav_icons" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i
                                className="fa-solid fa-cart-shopping"></i></button>

                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 id="offcanvasRightLabel">Your Cart <i className="fa-solid fa-cart-shopping"></i> </h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                {bookmarkedProducts.length > 0 ? (
                                    bookmarkedProducts.map((product) => (
                                        <div key={product.id} className="bookmark">
                                            <div className="bookmark_right">
                                                <img src={product.image} alt="" />
                                            </div>
                                            <div className="bookmark_left">
                                                <div className="bookmark_left_title">{product.title}</div>
                                                <div className="bookmark_left_div">
                                                    <div className="bookmark_left_price" style={{fontSize:"13px"}}>
                                                        <span style={{ color: "gray", fontWeight: "300" ,fontSize:"13px" }}>Price: </span>${product.price}
                                                    </div>
                                                    <div className="bookmark_left_price" style={{fontSize:"13px"}}>
                                                        <span style={{ color: "gray", fontWeight: "300",fontSize:"13px" }}>Category: </span>{product.category}
                                                    </div>
                                                </div>
                                                {/* <div className="bookmark_left_div">
                                                    <div className="bookmark_left_price">
                                                        <span style={{ color: "gray", fontWeight: "300" }}>Quantity: </span>{product.quantity}
                                                    </div>
                                                    <button
                                                        className="bookmark_left_price"
                                                        style={{ marginRight: "10px", border: "2px solid black", textAlign: "center", marginTop: "5px", fontWeight: "normal", width: "50px" }}
                                                    >
                                                        More
                                                    </button>
                                                </div> */}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center">
                                        No item available
                                    </div>
                                )}
                            </div>
                        </div>

                    </form>
                </div>
            </nav>
        </div>

    )
}

export default Navbar