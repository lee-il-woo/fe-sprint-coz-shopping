import { useState } from 'react';
import styled from 'styled-components';
import {productType} from '../utils/productType'

const FilterName = styled.span`
  ${(props) =>
    props.clicked &&
    'color:#412DD4;font-weight: 700;border-bottom:4px solid #412DD4;'}
`;

export default function FilterProduct({ getFilterdProducts }) {
  const [clickedFilter, setClickedFilter] = useState(productType.EVERY);
  const filterTypes = Object.values(productType);
  const handleFilterClick = (type) => {
    getFilterdProducts(type);
    setClickedFilter(type);
  };

  return (
    <div className='flex justify-center'>
      {filterTypes.map((type) => (
        <div
          key={type}
          className='text-center mr-9 hover:cursor-pointer'
          onClick={() => handleFilterClick(type)}
        >
          <img src={`/filterIcon/${type}.png`} alt={`Filter by ${type}`} />
          <FilterName clicked={clickedFilter === type}>{type}</FilterName>
        </div>
      ))}
    </div>
  );
}
