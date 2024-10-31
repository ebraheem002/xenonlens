// LandingPage.js
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './LandingPage.css'
import loo from './1-removebg-preview.png'
import logo from './xenon-removebg-preview.png'

const LandingPage = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000} // Customize scrolling speed if needed
      render={({ state, fullpageApi }) => {
        return (
          <div>
            <div className="section menu1" style={{ backgroundColor: 'white' }}>
              <div className='x-head'>
              <nav class="navbar navbar-expand-lg navbar-light ">
              <a class="navbar-brand" href="#">
    <img className='myLogo' src={logo} />
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#">الضمان</a>
      <a class="nav-item nav-link" href="#">المواصفات</a>
      <a class="nav-item nav-link active" href="#">الرئيسية <span class="sr-only">(current)</span></a>
    </div>
  </div>
  
</nav>
<div className='head-pargraph'>
  <p>
    عدسة ذات مواصفات عالية
  </p>
</div>


              </div>
              

            </div>
            <div className="section features" >
              <div className='white-section'>
                <img src={loo} />
              </div>
              <div  className='blue-section'>
                <h1>
                  مقاومة للغبار والماء
                </h1>
                <p>
                  العدسة مخصصة لمقاومة الغبار والماء تعتمد على تقنية النانو<br/> وطلاءات مضادة للاتربة لتوفير حماية فائقة و وضوح عال<br/> مما يضمن اداء مستداما في اصعب الظروف البيئية 
                </p>
              </div>
            </div>
            <div className="section features" >
              <div className='white-section'>
                <img src={loo} />
              </div>
              <div  className='blue-section'>
                <h1>
                  مقاومة للغبار والماء
                </h1>
                <p>
                  العدسة مخصصة لمقاومة الغبار والماء تعتمد على تقنية النانو<br/> وطلاءات مضادة للاتربة لتوفير حماية فائقة و وضوح عال<br/> مما يضمن اداء مستداما في اصعب الظروف البيئية 
                </p>
              </div>
            </div>
            <div className="section features" >
              <div className='white-section'>
                <img src={loo} />
              </div>
              <div  className='blue-section'>
                <h1>
                  مقاومة للغبار والماء
                </h1>
                <p>
                  العدسة مخصصة لمقاومة الغبار والماء تعتمد على تقنية النانو<br/> وطلاءات مضادة للاتربة لتوفير حماية فائقة و وضوح عال<br/> مما يضمن اداء مستداما في اصعب الظروف البيئية 
                </p>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default LandingPage;
