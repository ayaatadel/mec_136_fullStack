import React, { use, useState } from "react";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { setLightMode, setDarkMode } from "../Redux/store/slices/theme";
import {
  setEnglishLanguage,
  setArabicLanguage,
  setLanguage,
} from "../Redux/store/slices/lang";
import { increment, decrement } from "../Redux/store/slices/test";
export default function NavBar() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  const test = useSelector((state) => state.test.value);
  const defaultLang = useSelector((state) => state.lang.value);
  const lang = useSelector((state) => state.lang.availableLanguages);
   let [selectedLanguage,setSelectedLanguage] = useState(defaultLang);
  return (
    <>
      <nav
        style={
          theme === "light"
            ? { backgroundColor: "lightgray" }
            : { backgroundColor: "black", color: "white" }
        }
      >
        <ul>
          <li>TestValue:{test}</li>
          <li>
            <button
              className="btn btn-success p-2 mx-1"
              onClick={() => {
                dispatch(increment(test + 1));
              }}
            >
              +1
            </button>
            <button
              className="btn btn-danger p-2 mx-1"
              onClick={() => {
                dispatch(decrement(test - 1));
              }}
            >
              -1
            </button>
          </li>
          <li>theme : {theme}</li>
          <li>
            <select
              name="theme"
              className="form-select m-1"
              value={theme}
              onChange={(e) => {
                if (e.target.value === "light") dispatch(setLightMode("light"));
                if (e.target.value === "dark") dispatch(setDarkMode("dark"));
              }}
            >
              <option value="" disabled>
                Choose Theme
              </option>
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
            </select>
          </li>
          <li>language Site :{selectedLanguage}</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Counter :{counter}</li>
          {/* <h2>language : {language}</h2> */}
          <li>
            {/* <select
              name="language"
              id="language"
              className="form-select"
              // onChange={(e) => {
              //   // console.log(e.target.value);
              //   if (e.target.value === "english") {
              //     dispatch(setEnglishLanguage("english"));
              //   }
              //   if (e.target.value === "arabic") {
              //     dispatch(setArabicLanguage("arabic"));
              //   }
              // }}

              onChange={(e)=>{
                console.log(e.target.value);
                
                dispatch(setLanguage(e.target.value));
              }}
            >
              <option defaultValue={defaultLang} disabled selected>
                choose Language
              </option>
              {lang.forEach(element => {
                // console.log(element);
                
                <option value={element} key={element}>
                  {element}
                </option>
              })}
           
            </select> */}

            <select
              name="language"
              id="language"
              className="form-select"
              // <-- control the value of the whole select
              onChange={(e) => {
                dispatch(setLanguage(e.target.value));
                setSelectedLanguage(e.target.value)
            
              }}
            >
              <option value="" disabled selected>
                Choose Language
              </option>
              {lang.map((element) => (
                <option value={element} key={element}>
                  {element}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </nav>
    </>
  );
}
