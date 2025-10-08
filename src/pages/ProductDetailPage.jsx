import { useParams } from "react-router-dom"

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const ProductDetailPage = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect( ()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
        setProduct(res.data); 
      })
        .catch( err => console.log(err))
    })

    return (
        <>
            <Link to="/product" className="back-link">
            <i className="fa-solid fa-arrow-left"></i> Torna ai prodotti
            </Link>

            <div className="product-detail-container">
                <div className="product-detail-card">
                    <h2 className="titleDetail">{product.title}</h2>
                    <img src={product.image} alt={product.title} />
                    <p className="descriptionDetail">{product.description}</p>
                    <p className="priceDetail">Il prezzo è di € {product.price}</p>
                </div>
            </div>

        </>
    )

}

export default ProductDetailPage 