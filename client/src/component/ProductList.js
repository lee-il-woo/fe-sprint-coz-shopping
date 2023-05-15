import { useState } from "react";
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard";
export default function ProductList({listTitle}){

    const generateRandomProducts = ()=>{
        let arr = [];
        while(arr.length < 4) {
          let num = Math.floor(Math.random() * 100);
          if(arr.indexOf(num) === -1) arr.push(num);
        }
        return arr;
    }
    const bookmarks = useSelector(state=>state.bookmark)
    const generateRandomBookmarks = ()=>{
        let arr = [];
        if(bookmarks.length <= 4) return bookmarks
        while(arr.length < 4) {
          let num = Math.floor(Math.random() * bookmarks.length);
          if(arr.indexOf(bookmarks[num]) === -1) arr.push(bookmarks[num]);
        }
        return arr;
    }
    const products = useSelector(state=>state.products)

    const [randomFourProductIds, setRandomFourProductIds] = useState(generateRandomProducts())
    const makeProductList = (listTitle)=>{
        if (!products.length) {
            return null; 
        }
        if(listTitle === '상품 리스트'){
            return randomFourProductIds.map((productId,idx)=>{
                return <ProductCard key={idx} product={products[productId]}></ProductCard>
            })
        }else if(listTitle === '북마크 리스트'){
            const randomBookmarks = generateRandomBookmarks()
            return randomBookmarks.map((productId,idx)=>{
                return <ProductCard key={idx} product={products[productId]}></ProductCard>
            })
        }
    }

    return(
        <>
        <p className="text-2xl font-semibold mb-3">{listTitle}</p>
        <div className="flex">
            {makeProductList(listTitle)}
        </div>
        </>
    )
}