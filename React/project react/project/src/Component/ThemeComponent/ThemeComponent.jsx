import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLightMode ,setDarkMode } from '../Redux/store/slices/theme';
function ThemeComponent() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
     <select name="theme" id="" disabled="disabled">
      <button onClick={() => dispatch(setLightMode("light"))}>Light Mode</button>
      <button onClick={() => dispatch(setDarkMode("dark"))}>Dark Mode</button>
     </select>
    </div>
  )
}

export default ThemeComponent