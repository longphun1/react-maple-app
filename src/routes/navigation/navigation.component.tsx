import { Outlet, Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const path = useLocation();

  const match = path.pathname.match(/^\/character\/(.*)$/);

  return (
    <Fragment>
      <Fragment>
        {path.pathname === "/" ? (
          <div className="navigation">
            <Link className="logo-container" to="/">
              <img
                className="logo-image"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAD//8wAAAC7RADdu2b/3Yj/7pn//+7/dwD/zFXdVQDuzHdEIhH//93/qiL/3ZnuqkT/7ruqdzNVMxH/7qruZgDuu2b/mSJ3RBGIMwD//7uZZiLMRADuZoiZMwDu3YjumYi7iEQzAEREMyL/iA3/3bv/zLv/qkTdiCLddyJ3VSLudxFmRBH/qpmqEYjVqlWqd1X/u0SZZjNEACL/mRHddxFmMxFEMxEzIhGIRAD/7u7/7t3/d6ruu4juqnfdZhHMZhHuVQCqRADOUGjWAAAAAXRSTlMAQObYZgAAAdJJREFUOMvt08ty2jAYhuFKlowlyzaS7QAlNscQAjRtzknP7f1fVH9JLkLRtKQzXXTRd8EA8/Ahe8av/nckbHsZ5bYXcHybQ8skqXl0jOOcQYPbxOg1/h3FA0YhNlhqfccY/jXNwRp8pXFyTqnVocRwVrB2WdsasNYhpWwJ+GpvoW/nDN4HGlcVyw0YMMjamm8ZA/xMY/gm51EXrzvLufnpOsIe3iZJFAkhyuFwqP0p79reffkKH/Eh5hxsea02JSEeP+3+DB/gCOxY7a7BQmber8YOG6tUSaiNjEajPbzo9/vrZ3h3/0SolAiS1kPWQt60uB+Pn2iFuqoKOHk7EyaD/emSXmK0TxaXGPRsJpQC7V2iwTeAnb7BRCfKnRIXBjv9QOl8LuU7hEqE4BXN56nGC6U2wt5qpx+oNKctH6vHktqTpxpvlGitdfj9mzOEsqzX62Wo6+xD03xeCNEGuGlWCAEF/FOvPjbNdNG27XdrHZ7Ccqat25ar6fQTcU+6wycFAtxlcRzHNCVOBvZPcYYO7V/AsXfjpKFgAYe6iCVsO2qsHQ5xWsTVa1sV6wqwJxaHelLELrDU2SO6mJhdhwON0wnVpVBoQ068sG9D7gL6T/YDGxwpIWfQEJoAAAAASUVORK5CYII="
                alt="logo"
              />
            </Link>
            <div className="navlink-container">
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
              <CartIcon />
            </div>
            {isCartOpen && <CartDropDown />}
          </div>
        ) : (
          <Fragment>
            {path.pathname === "/missions" ||
            path.pathname === "/addWeekly" ||
            path.pathname === "/addCharacter" ||
            path.pathname === "/characters" ||
            match ? (
              <div className="navigation">
                <Link className="logo-container" to="/">
                  <img
                    className="logo-image"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAD//8wAAAC7RADdu2b/3Yj/7pn//+7/dwD/zFXdVQDuzHdEIhH//93/qiL/3ZnuqkT/7ruqdzNVMxH/7qruZgDuu2b/mSJ3RBGIMwD//7uZZiLMRADuZoiZMwDu3YjumYi7iEQzAEREMyL/iA3/3bv/zLv/qkTdiCLddyJ3VSLudxFmRBH/qpmqEYjVqlWqd1X/u0SZZjNEACL/mRHddxFmMxFEMxEzIhGIRAD/7u7/7t3/d6ruu4juqnfdZhHMZhHuVQCqRADOUGjWAAAAAXRSTlMAQObYZgAAAdJJREFUOMvt08ty2jAYhuFKlowlyzaS7QAlNscQAjRtzknP7f1fVH9JLkLRtKQzXXTRd8EA8/Ahe8av/nckbHsZ5bYXcHybQ8skqXl0jOOcQYPbxOg1/h3FA0YhNlhqfccY/jXNwRp8pXFyTqnVocRwVrB2WdsasNYhpWwJ+GpvoW/nDN4HGlcVyw0YMMjamm8ZA/xMY/gm51EXrzvLufnpOsIe3iZJFAkhyuFwqP0p79reffkKH/Eh5hxsea02JSEeP+3+DB/gCOxY7a7BQmber8YOG6tUSaiNjEajPbzo9/vrZ3h3/0SolAiS1kPWQt60uB+Pn2iFuqoKOHk7EyaD/emSXmK0TxaXGPRsJpQC7V2iwTeAnb7BRCfKnRIXBjv9QOl8LuU7hEqE4BXN56nGC6U2wt5qpx+oNKctH6vHktqTpxpvlGitdfj9mzOEsqzX62Wo6+xD03xeCNEGuGlWCAEF/FOvPjbNdNG27XdrHZ7Ccqat25ar6fQTcU+6wycFAtxlcRzHNCVOBvZPcYYO7V/AsXfjpKFgAYe6iCVsO2qsHQ5xWsTVa1sV6wqwJxaHelLELrDU2SO6mJhdhwON0wnVpVBoQ068sG9D7gL6T/YDGxwpIWfQEJoAAAAASUVORK5CYII="
                    alt="logo"
                    height="50px"
                    width="160px"
                  />
                </Link>
                <div className="navlink-container">
                  <Link className="nav-link" to="/addCharacter">
                    ADD CHARACTER
                  </Link>
                  <Link className="nav-link" to="/addWeekly">
                    ADD WEEKLY
                  </Link>
                  <span className="nav-link" onClick={signOutUser}>
                    SIGN OUT
                  </span>
                </div>
                {isCartOpen && <CartDropDown />}
              </div>
            ) : (
              <div className="navigation">
                <Link className="logo-container" to="/">
                  <img
                    className="logo-image"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAD//8wAAAC7RADdu2b/3Yj/7pn//+7/dwD/zFXdVQDuzHdEIhH//93/qiL/3ZnuqkT/7ruqdzNVMxH/7qruZgDuu2b/mSJ3RBGIMwD//7uZZiLMRADuZoiZMwDu3YjumYi7iEQzAEREMyL/iA3/3bv/zLv/qkTdiCLddyJ3VSLudxFmRBH/qpmqEYjVqlWqd1X/u0SZZjNEACL/mRHddxFmMxFEMxEzIhGIRAD/7u7/7t3/d6ruu4juqnfdZhHMZhHuVQCqRADOUGjWAAAAAXRSTlMAQObYZgAAAdJJREFUOMvt08ty2jAYhuFKlowlyzaS7QAlNscQAjRtzknP7f1fVH9JLkLRtKQzXXTRd8EA8/Ahe8av/nckbHsZ5bYXcHybQ8skqXl0jOOcQYPbxOg1/h3FA0YhNlhqfccY/jXNwRp8pXFyTqnVocRwVrB2WdsasNYhpWwJ+GpvoW/nDN4HGlcVyw0YMMjamm8ZA/xMY/gm51EXrzvLufnpOsIe3iZJFAkhyuFwqP0p79reffkKH/Eh5hxsea02JSEeP+3+DB/gCOxY7a7BQmber8YOG6tUSaiNjEajPbzo9/vrZ3h3/0SolAiS1kPWQt60uB+Pn2iFuqoKOHk7EyaD/emSXmK0TxaXGPRsJpQC7V2iwTeAnb7BRCfKnRIXBjv9QOl8LuU7hEqE4BXN56nGC6U2wt5qpx+oNKctH6vHktqTpxpvlGitdfj9mzOEsqzX62Wo6+xD03xeCNEGuGlWCAEF/FOvPjbNdNG27XdrHZ7Ccqat25ar6fQTcU+6wycFAtxlcRzHNCVOBvZPcYYO7V/AsXfjpKFgAYe6iCVsO2qsHQ5xWsTVa1sV6wqwJxaHelLELrDU2SO6mJhdhwON0wnVpVBoQ068sG9D7gL6T/YDGxwpIWfQEJoAAAAASUVORK5CYII="
                    alt="logo"
                    height="50px"
                    width="160px"
                  />
                </Link>
                <div className="navlink-container">
                  <Link className="nav-link" to="/shop">
                    SHOP
                  </Link>
                  <span className="nav-link" onClick={signOutUser}>
                    SIGN OUT
                  </span>
                  <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
              </div>
            )}
          </Fragment>
        )}
      </Fragment>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
