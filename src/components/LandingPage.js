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
      anchors={['Home', 'features', 'f1', 'f2', 'f3', 'f4', 'f5', 'grant', 'contact']}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <div>
            {/* Navbar Section */}
            <div id="Home" className="section menu1">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#Home">
                  <img className="myLogo" src={logo} alt="Brand Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <div className="navbar-nav">
                    <a className="nav-link" href="#contact">تواصل معنا</a>
                    <a className="nav-link" href="#grant">الضمان</a>
                    <a className="nav-link" href="#features">المواصفات</a>
                    <a className="nav-link" href="#Home">الرئيسية</a>
                  </div>
                </div>
              </nav>
              {/* Header Content */}
              <div className="header-content text-center">
                <img className="frameimg" src={lens} alt="Lens" />
                <p>عدسة ذات مواصفات عالية</p>
              </div>
            </div>

            {/* Features Sections */}
            {[{ id: 'features', img: loo }, { id: 'f1', img: second }, { id: 'f2', img: third }, { id: 'f3', img: forth }, { id: 'f4', img: fifth }, { id: 'f5', img: sixth }].map(({ id, img }) => (
              <div key={id} id={id} className="section features">
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 text-center">
                      <img className="feature-image" src={img} alt="Feature Image" />
                      <h1 className="mt-3">
                        {id === 'features' && 'مقاومة للغبار والماء'}
                        {id === 'f1' && 'مقاومة للخدش'}
                        {id === 'f2' && 'تقنيات تسهيل التنظيف'}
                        {id === 'f3' && 'تقنيات تقليل الانعكاسات'}
                        {id === 'f4' && 'ختم مائي للتحقق من الجودة'}
                        {id === 'f5' && 'حماية من الضوء الأزرق'}
                      </h1>
                      <p>
                        {id === 'features' && (
                          <>العدسة مخصصة لمقاومة الغبار والماء تعتمد على تقنية النانو<br />
                          وطلاءات مضادة للاتربة لتوفير حماية فائقة ووضوح عال<br />
                          مما يضمن اداء مستداما في اصعب الظروف البيئية</>
                        )}
                        {id === 'f1' && (
                          <>العدسات مقاومة للخدش وتُصنع بتقنيات متطورة، حيث تُعالج<br />
                          بطلاءات خاصة تقوي سطح العدسة وتزيد من متانتها.</>
                        )}
                        {id === 'f2' && (
                          <>العدسات بتقنيات تسهيل التنظيف مزودة بطلاءات مضادة لأوساخ<br />
                          مما يجعلها مقاومة للتلطخ ويسهل تنظيفها بسرعة.</>
                        )}
                        {id === 'f3' && (
                          <>العدسة مزودة بتقنيات تساهم في تقليل الانعكاسات غير المرغوب فيها.<br />
                          هذه الطلاءات تعزز من وضوح الرؤية وتقلل من إجهاد العين.</>
                        )}
                        {id === 'f4' && (
                          <>تتميز عدسة زينون بختم مائي يظهر عند تعرض العدسة للبخار<br />
                          مما يساعد على التحقق من أصالة العدسة وجودتها العالية.</>
                        )}
                        {id === 'f5' && (
                          <>العدسات مخصصة للحماية من الضوء الأزرق تعتمد على فلاتر خاصة<br />
                          مصممة لتقليل كمية الضوء الأزرق الضار المنبعث من الشاشات.</>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Warranty Section */}
            <div id="grant" className="section warranty-section">
              <div className="container text-center">
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
              <div className="container text-center">
                <h3>للتواصل عبر الهاتف</h3>
                <ul className="list-unstyled">
                  <li>9647703559650</li>
                  <li>9647703559650</li>
                  <li>9647703559650</li>
                </ul>
                <h3>للتواصل عبر البريد الالكتروني</h3>
                <ul className="list-unstyled">
                  <li>sales@xenonlens.com</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default LandingPage;
