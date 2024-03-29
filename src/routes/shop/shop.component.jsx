import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss'

const ShopPage = () => {
  const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categories = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categories));
        };

        getCategoriesMap();
    }, [dispatch]);

  return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default ShopPage;