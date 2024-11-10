import React from 'react';
import './LandingPage.css';
import loo from './1-removebg-preview.png';
import logo from './footer-logo.png';
import lens from './xenon-cover-1.jpg';
import second from './second.png';
import third from './third.png';
import fifth from './fifth.png';
import forth from './forth.png';
import sixth from './sixth.png';
import warrant_image from './DALL·E-2024-11-10-01.56.jpg';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaRegCheckCircle } from 'react-icons/fa'; // Importing React Icons
import contactImage from './3f4b0f8b-8734-4e98-a4dd-08dbc6f4eb51.jpg'; // Add your image for the contact section
import { ReactTyped } from 'react-typed'; // Updated import statement

const LandingPage = () => {
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
        </div>
      </div>

      {/* Improved Features Section */}
      <div id="features" className="section features">
        <div className="container">
          <h2 className="text-center text-white mb-5">ميزات العدسات</h2>
          <div className="row">
            {[ 
              { title: 'مقاومة للغبار والماء', img: loo, desc: 'العدسة مخصصة لمقاومة الغبار والماء تعتمد على تقنية النانو وطلاءات مضادة للاتربة لتوفير حماية فائقة ووضوح عال.' },
              { title: 'مقاومة للخدش', img: second, desc: 'العدسات مقاومة للخدش وتُصنع بتقنيات متطورة، حيث تُعالج بطلاءات خاصة تقوي سطح العدسة وتزيد من متانتها.' },
              { title: 'تقنيات تسهيل التنظيف', img: third, desc: 'العدسات بتقنيات تسهيل التنظيف مزودة بطلاءات مضادة لأوساخ مما يجعلها مقاومة للتلطخ ويسهل تنظيفها بسرعة.' },
              { title: 'تقنيات تقليل الانعكاسات', img: forth, desc: 'العدسة مزودة بتقنيات تساهم في تقليل الانعكاسات غير المرغوب فيها. هذه الطلاءات تعزز من وضوح الرؤية وتقلل من إجهاد العين.' },
              { title: 'ختم مائي للتحقق من الجودة', img: fifth, desc: 'تتميز عدسة زينون بختم مائي يظهر عند تعرض العدسة للبخار مما يساعد على التحقق من أصالة العدسة وجودتها العالية.' },
              { title: 'حماية من الضوء الأزرق', img: sixth, desc: 'العدسات مخصصة للحماية من الضوء الأزرق تعتمد على فلاتر خاصة مصممة لتقليل كمية الضوء الأزرق الضار المنبعث من الشاشات.' }
            ].map((feature, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="feature-card text-center p-4">
                  <img className="feature-image" src={feature.img} alt={feature.title} />
                  <h4 className="mt-3 text-white">{feature.title}</h4>
                  <p className="text-light">{feature.desc}</p>
                  <div className="check-icon">
                    <FaRegCheckCircle color="#28a745" size={30} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Warranty Section */}
      <div id="grant" className="section warranty-section">
        <div className="warranty-container">
          <div className="warranty-image">
            <img src={warrant_image} alt="Warranty Image" />
          </div>
          <div className="warranty-text">
            <h2>ضمان الاستبدال</h2>
            <p>
              استكمالا لتجربة عدساتنا المثالية تتعهد <span>زينون</span> بتقديم ضمان استبدال مجاني
              على عدساتها في حال تعرضها للكسر غير المتعمد ويكون الضمان ساري لمدة شهر بعد تاريخ الشراء.
            </p>
            <p>
              للاستفادة من الضمان: قم بالذهاب الى محل العوينات الذي قمت بشراء عدسات زينون منه
              مع احظار العدسة المكسورة وبطاقة الضمان المرفقة مع العدسة.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="section contact-section">
        <div className="contact-container">
          <div className="contact-image">
            <img src={contactImage} alt="Contact Us" />
          </div>
          <div className="contact-text">
            <h2>تواصل معنا</h2>
            <p>إذا كنت بحاجة إلى المزيد من المعلومات أو الدعم، لا تتردد في التواصل معنا عبر الوسائل التالية:</p>

            {/* Contact details */}
            <ul className="list-unstyled">
              <li>
                <FaWhatsapp color="#25D366" size={30} />
                <span> <a href="https://wa.me/9647716950796">واتساب: 9647716950796</a> </span>
              </li>
              <li>
                <FaPhoneAlt color="#ff7f50" size={30} />
                <span> <a href="tel:+9647716950796">هاتف: 9647716950796</a> </span>
              </li>
              <li>
                <FaEnvelope color="#007bff" size={30} />
                <span> <a href="mailto:sales@xenonlens.com">البريد الإلكتروني: sales@xenonlens.com</a> </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer text-center">
        <div className="container">
          <p className="text-white">© 2024 Xenon Lens. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
