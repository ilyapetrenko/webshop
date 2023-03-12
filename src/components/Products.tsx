import React from "react";
import {IProduct} from "../types";
import ProductItem from "./ProductItem";

const products:IProduct[] = [
    {
    _id: 'wefe',
    imagePath: 'https://i.citrus.world/imgcache/size_180/uploads/shop/a/b/ab0c89f53f722f35b033dbb1f4cc3974.jpg',
    name: 'Apple iPhone 13 128GB Midnight (MLPF3)',
    price: 1000
    },
    {
        _id: 'wesadfe',
        imagePath: 'https://i.citrus.world/imgcache/size_180/uploads/shop/a/0/a0f5283d3b6e42e0e5a4a0fe955f4355.jpg',
        name: 'Apple iPhone 14 Pro 128GB Gold (MQ083)',
        price: 1100
    },
    {
        _id: 'wesdadssdafe',
        imagePath: 'https://i.citrus.world/imgcache/size_180/uploads/shop/d/1/d1c502cc9809e82c744bd8a8d56a5424.jpg',
        name: 'Apple iPhone 14 128GB Blue (MPVN3)',
        price: 900
    }
]
const Products = () => {
    return(
        <div className='mt-4'>
            {products.map(product => (
                <ProductItem product={product} key={product._id}/>
            ))}
        </div>
    )
}

export default Products