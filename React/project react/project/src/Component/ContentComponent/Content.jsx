import React from 'react'
import './Content.css'
import Slider from '../SliderComponent/Slider'
export  function Content() {
  return (
    <div className={'content'}>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempora eveniet deleniti odit. Recusandae enim laborum, id, illum harum nostrum illo ad beatae adipisci deserunt velit. Quidem unde quas quae.
        </p>
      <Slider></Slider>
      <h2>
        Content component
      </h2>
    </div>
  )
}
