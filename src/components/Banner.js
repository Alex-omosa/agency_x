import React from 'react';
import { ReactComponent as RightArrow } from './../assets/arrow-right.svg';

function Banner() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Crafting quality websites is</span>
            </div>
            <div className="line">
              <span>what I do.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              More about me <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
