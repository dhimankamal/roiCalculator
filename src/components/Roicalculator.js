import React from "react";
import cake from '../img/cake.png';
import close from '../img/close.png';


const Roicalculator = () => {
    return(
        <div className="container">
        <div className="header">
          <h1>ROI Calculator</h1>
          <div className="icon">
          <img src={close} alt="close" />
          </div>
        </div>
        <div className="input">
          <div className="cake">
            <div className="name">
              <img src={cake} alt="image" />
              <p>CAKE</p>
            </div>
            <label className="checkbox">
              <input type="checkbox" className="checkbox__system-checkbox" />
              <span className="checkbox__custom-checkbox" />
              <span className="checkbox__label">USD</span>
            </label>
          </div>
          <input type="text" defaultValue="0.000 USD" />
          <div className="input-down">
            <div className="button-group">
              <button className="input-down-button">$1000</button>
              <button className="input-down-button">$100</button>
            </div>
            <label className="inputDownLable" htmlFor>~CAKE 0.00</label>
          </div>
        </div>
        <div className="timeframe">
          <h2>Timeframe</h2>
          <div className="radio_container">
            <input type="radio" name="radio" id="one" defaultChecked />
            <label htmlFor="one">1 Day</label>
            <input type="radio" name="radio" id="two" />
            <label htmlFor="two">7 Day</label>
            <input type="radio" name="radio" id="three" />
            <label htmlFor="three">30 Day</label>
            <input type="radio" name="radio" id="four" />
            <label htmlFor="four">1 Year</label>
            <input type="radio" name="radio" id="five" />
            <label htmlFor="five">5 Year</label>
          </div>
        </div>
        <div className="enable">
          <h2>Enable Accelerated APY</h2>
          <label className="checkbox">
            <input type="checkbox" className="checkbox__system-checkbox" />
            <span className="checkbox__custom-checkbox" />
            <span className="checkbox__label" />
          </label>
        </div>
        <div className="tier">
          <h3>Select Tier</h3>
          <div className="radio_container">
            <input type="radio" name="radio2" id="oneday" defaultChecked />
            <label htmlFor="oneday">Tier 1</label>
            <input type="radio" name="radio2" id="twoday" />
            <label htmlFor="twoday">Tier 2</label>
            <input type="radio" name="radio2" id="threeday" />
            <label htmlFor="threeday">Tier 3</label>
            <input type="radio" name="radio2" id="fourday" />
            <label htmlFor="fourday">Tier 4</label>
            <input type="radio" name="radio2" id="fiveday" />
            <label htmlFor="fiveday">Tier 5</label>
          </div>
        </div>
        <div className="last">
          <h3>ROI at Current Rates</h3>
          <div className="input">
            <input type="text" defaultValue="0.000 USD" />
          </div>
          <h3>~0.000 CAKE + 0.0000000 DON</h3>
        </div>
      </div>

    );
};

export default Roicalculator;