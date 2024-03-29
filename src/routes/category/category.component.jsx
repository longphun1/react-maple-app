import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  console.log(category)
  const categoriesMap = useSelector(selectCategoriesMap) 
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <div className='placeholder'/>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-sub-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;