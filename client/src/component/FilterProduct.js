import { useState } from "react";
import './FilterProduct.css'
export default function FilterProduct({getFilterdProducts}) {
    const [clickedFilter, setClickedFilter] = useState('every')
    const handleFilterClick = (type)=>{
        getFilterdProducts(type)
        setClickedFilter(type)
    }
  return (
    <div className="flex justify-center">
      <div className="text-center mr-9 hover:cursor-pointer" onClick={()=>{handleFilterClick('every')}}>
        <img src='/every.png' alt='all product'></img>
        <span className={clickedFilter === 'every'?'clicked-filter':''}>전체</span>
      </div>
      <div className="text-center mr-9 hover:cursor-pointer" onClick={()=>{handleFilterClick('Product')}}>
        <img src='/product.png' alt='filter product'></img>
        <span className={clickedFilter === 'Product'?'clicked-filter':''}>상품</span>
      </div>
      <div className="text-center mr-9 hover:cursor-pointer" onClick={()=>{handleFilterClick('Category')}}>
        <img src='/category.png' alt='filter category'></img>
        <span className={clickedFilter === 'Category'?'clicked-filter':''}>카테고리</span>
      </div>
      <div className="text-center mr-9 hover:cursor-pointer" onClick={()=>{handleFilterClick('Exhibition')}}>
        <img src='/exhibition.png' alt='filter exhibition'></img>
        <span className={clickedFilter === 'Exhibition'?'clicked-filter':''}>기획전</span>
      </div>
      <div className="text-center hover:cursor-pointer" onClick={()=>{handleFilterClick('Brand')}}>
        <img src='/brand.png' alt='filter brand'></img>
        <span className={clickedFilter === 'Brand'?'clicked-filter':''}>브랜드</span>
      </div>
    </div>
  );
}
