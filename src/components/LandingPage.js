// LandingPage.js
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './LandingPage.css';
import loo from './1-removebg-preview.png';
import logo from './xenon-removebg-preview.png';
import lens from './—Pngtree—simple style elegant black glasses_5530697.png';
import second from './second.png';
import third from './third.png';
import fifth from './fifth.png';
import forth from './forth.png';
import sixth from './sixth.png';

const LandingPage = () => {
  return (
    <ReactFullpage
      anchors={['Home', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'grant', 'contact']}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <div>
            {/* Navbar Section */}
            <div id="Home" className="section menu1">
              <nav className="navbar">
                <a className="navbar-brand" href="#Home">
                  <img className="myLogo" src={logo} alt="Brand Logo" />
                </a>
                <div className="navbar-links">
                  <a className="nav-link" href="#contact">تواصل معنا</a>
                  <a className="nav-link" href="#grant">الضمان</a>
                  <a className="nav-link" href="#f0">المواصفات</a>
                  <a className="nav-link" href="#Home">الرئيسية</a>
                </div>
              </nav>
              {/* Header Content */}
              <div className="header-content">
                <img className="frameimg" src={lens} alt="Lens" />
                <p>عدسة ذات مواصفات عالية</p>
              </div>
            </div>

            {/* Features Sections */}
            {[{ id: 'f0', img: loo }, { id: 'f1', img: second }, { id: 'f2', img: third }, { id: 'f3', img: forth }, { id: 'f4', img: fifth }, { id: 'f5', img: sixth }].map(({ id, img }) => (
              <div key={id} id={id} className="section features">
                <div className="content-wrapper">
                  <img className="feature-image" src={img} alt="Feature Image" />
                  <div className="text-content">
                    <h1>مقاومة للغبار والماء</h1>
                    <p>
                      العدسة مخصصة لمقاومة الغبار والماء تعتمد على تقنية النانو<br />
                      وطلاءات مضادة للاتربة لتوفير حماية فائقة و وضوح عال<br />
                      مما يضمن اداء مستداما في اصعب الظروف البيئية
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Warranty Section */}
            <div id="grant" className="section warranty-section">
              <div className="content-wrapper">
                <h2>ضمان الاستبدال</h2>
                <p>
                  استكمالا لتجربة عدساتنا المثالية
                  <br />
                  تتعهد <span>زينون</span> بتقديم ضمان استبدال مجاني على عدساتها في حال تعرضها للكسر غير
                  المتعمد
                  <br />
                  ويكون الضمان ساري لمدة شهر بعد تاريخ الشراء
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="section contact-section">
              <div className="content-wrapper">
                <div className="contact-info">
                  <h3>للتواصل عبر الهاتف</h3>
                  <ul>
                    <li>9647703559650</li>
                    <li>9647703559650</li>
                    <li>9647703559650</li>
                  </ul>
                </div>
                <div className="contact-info">
                  <h3>للتواصل عبر البريد الالكتروني</h3>
                  <ul>
                    <li>sales@xenonlens.com</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default LandingPage;
