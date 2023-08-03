import React, { useState, useEffect } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

function CategoryButton({ categoryName, onClick }) {
    return (
        <button type="button" className="btn btn-outline-secondary" onClick={() => onClick(categoryName)}>
            {categoryName}
        </button>
    );
}

function ProductCard({ item }) {
    const navigate = useNavigate();
    const handleProductClick = () => {
        navigate(`/products/${item.id}`);
    };

    const handleCart = (product) => {
        console.log(product);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductExit = cart.find((items) => items.id === product.id);
        if (isProductExit) {
            const updatedCart = cart.map((items) =>{

                if(items.id === product.id){
                    return{
                        ...items,
                        quantity: items.quantity + 1 
                    }
                } 
                return items
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
        else{
            localStorage.setItem('cart',JSON.stringify([...cart,{...product,quantity:1}]))
        }
    };

    return (
        <div className="col-md-3" >
            <div className="card">
                <div className="img-body">
                    <img src={item.image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title" style={{ cursor: "pointer" }} onClick={handleProductClick}>{item.title}</h5>
                    <p>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </p>
                    <div className="flex">
                        <div className="price" style={{ cursor: "pointer" }}>{item.price}$</div>
                        <div className="btn btn-primaryer" onClick={() => handleCart(item)}>
                            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Hero() {
    const [data, setData] = useState([]);
    const [categoryState, setCategoryState] = useState('');

    const url = "https://fakestoreapi.com/products";
    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const responseData = await response.json();
            if (responseData) {
                setData(responseData);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData(categoryState ? `${url}/category/${categoryState}` : url);
    }, [categoryState]);

    const handleCategoryChange = (categoryName) => {
        if (categoryName === "All") {
            setCategoryState('');
        } else {
            setCategoryState(categoryName);
        }
    };
    return (
        <div>
            <div className="category">
                <div className="catg container-lg">
                    {/* Category Title */}
                    <div className="catg-title">
                        <h3 style={{ textAlign: "center", color: "black" }}>SHOPPING BY CATEGORIES</h3>
                        <h5 style={{ textAlign: "center", color: "#6c757d" }}>
                            ALL THE T-SHIRTS, SWEATSHIRTS, HOODIES, TANK TOPS, MUG THAT YOU COULD BE LOOKING FOR
                        </h5>
                    </div>
                    <hr />
                    {/* Category Buttons */}
                    <div className="category_button">
                        <CategoryButton categoryName="All" onClick={handleCategoryChange} />
                        <CategoryButton categoryName="electronics" onClick={handleCategoryChange} />
                        <CategoryButton categoryName="men's clothing" onClick={handleCategoryChange} />
                        <CategoryButton categoryName="women's clothing" onClick={handleCategoryChange} />
                        <CategoryButton categoryName="jewelery" onClick={handleCategoryChange} />
                    </div>
                    <hr />
                </div>
            </div>

            <div className="sop-card">
                <div className="container-lg">
                    <div className="contant row" style={{ paddingBottom: "10px", background: "transparent", flexWrap: "wrap" }} id="row">
                        {/* Product Cards */}
                        {data.map((item) => <ProductCard key={item.id} item={item} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
