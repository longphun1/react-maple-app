import { Routes, Route } from 'react-router-dom';
import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import PrivateRoutes from './routes/PrivateRoutes';
import Login from './routes/login/login.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Missions from './routes/missions/missions.component';
import AddCharacter from './routes/addCharacter/addCharacter.component';
import AddWeekly from './routes/addWeekly/addWeekly.component';
import ShopPage from './routes/shop/shop.component';
import CheckOutPage from './routes/checkout/checkout.component';
import Characters from './routes/characters/characters.component';
import UpdateCharacter from './routes/updateCharacter/updateCharacter.component';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubsribe;
  }, [dispatch]);

  return (
    <Fragment>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route exact path='missions' element={<Missions />} />
            <Route exact path='addCharacter' element={<AddCharacter />} />
            <Route exact path='addWeekly' element={<AddWeekly />} />
            <Route exact path='characters' element={<Characters />} />
            <Route exact path='character/:id' element={<UpdateCharacter />} />
            <Route exact path='shop/*' element={<ShopPage />} />
            <Route exact path='checkout' element={<CheckOutPage />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App;
