import React from 'react';
import { ReactComponent as CaseNext } from './../assets/arrow-right.svg';
import { ReactComponent as CasePrev } from './../assets/arrow-left.svg';
import img1 from './../assets/curology-min.png';
import img2 from './../assets/lumin-min.png';
import img3 from './../assets/yourspace-min.png';
const caseStudies = [
  {
    id: 1,
    subTitle: 'Curology',
    title: "A custom formulae for you skin's unique needs ",
    img: img1,
  },
  {
    id: 2,
    subTitle: 'Yourspace',
    title: 'Open space floor plans for your next venture  ',
    img: img2,
  },
  {
    id: 3,
    subTitle: 'Limun',
    title: 'For your best look ever',
    img: img3,
  },
];

function Cases() {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow next disabled">
            <CasePrev />
          </div>
          <div className="cases-arrow prev ">
            <CaseNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subTitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img src={caseItem.img} alt={caseItem.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;
