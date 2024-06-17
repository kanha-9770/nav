import React from "react";
import "./SliderComponent.css";
const SliderComponent = () => {
  return (
    <>
      <div className="sectionmain  h-auto px-4 px-sm-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="align-self-center padding-tb">
              <div className="section text-center slider-height-padding">
                <input
                  className="checkbox frst"
                  type="radio"
                  id="slide-1"
                  name="slider"
                  defaultChecked
                />
                <label htmlFor="slide-1"></label>
                <input
                  className="checkbox scnd"
                  type="radio"
                  name="slider"
                  id="slider-2"
                />
                <label htmlFor="slider-2"></label>
                <input
                  className="checkbox thrd"
                  type="radio"
                  name="slider"
                  id="slider-3"
                />
                <label htmlFor="slider-3"></label>
                <input
                  className="checkbox foth"
                  type="radio"
                  name="slider"
                  id="slider-4"
                />
                <label htmlFor="slider-4"></label>
                <ul>
                  <li>
                    <span>MALE GOOFY FACE</span>
                  </li>
                  <li>
                    <span>TOY PIG</span>
                  </li>
                  <li>
                    <span>SHY PORTRAIT</span>
                  </li>
                  <li>
                    <span>SKATEBOARD FACE</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
