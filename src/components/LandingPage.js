import React from 'react';
import './LandingPage.css';
import loo from './1-removebg-preview.png';
import logo from './footer-logo.png';
import lens from './xenon-cover-1.jpg';
import second from './second.png';
import third from './third.png';
import forth from './forth.png';
import fifth from './fifth.png';
import sixth from './sixth.png';
import logoInvert from './logoinvert.png'
import aboutUsimage from './DALL·E 2024-11-13 11.20.07 - A high-quality, close-up image of a professional lab setting with precision optical lenses and glass equipment. Soft, focused lighting highlights a cl.webp'
import warrant_image from './DALL·E-2024-11-10-01.56.jpg';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaRegCheckCircle } from 'react-icons/fa';
import MapComponent from './MapComponent';

const locations = [
  { name: 'Point A', latitude: 51.505, longitude: -0.09 },
  { name: 'Point B', latitude: 51.515, longitude: -0.1 },
];

const LandingPage = () => {
  return (
    <div>
      {/* Navbar Section */}
      <header id="Home" className="hero-section">
        <nav className="navbar navbar-expand-lg navbar-transparent">
          <a className="navbar-brand" href="#Home">
            <img className="logo" src={logo} alt="Brand Logo" />
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
            <ul className="navbar-nav ml-auto">
              <li><a className="nav-link" href="#contact">تواصل معنا</a></li>
              <li><a className="nav-link" href="#grant">الضمان</a></li>
              <li><a className="nav-link" href="#map">اعثر علينا</a></li>
              <li><a className="nav-link" href="#features">المواصفات</a></li>
              <li><a className="nav-link" href="#about-us">من نحن</a></li>
              <li><a className="nav-link" href="#Home">الرئيسية</a></li>

            </ul>
          </div>
        </nav>
        <div className="hero-content">
          <div className="hero-overlay">
            <h1>اكتشف العدسات المتطورة</h1>
            <p>أحدث التقنيات لضمان وضوح الرؤية وحماية العين</p>
            <a href="#features" className="cta-button">استكشف الآن</a>
          </div>
        </div>
      </header>
      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="features-heading">ميزات العدسات</h2>
        <div className="feature-cards">
          {[
            { title: 'مقاومة للغبار والماء', img: loo, desc: 'تقنية النانو لحماية العدسات من الغبار والماء.' },
            { title: 'مقاومة للخدش', img: second, desc: 'تكنولوجيا لطلاءات تزيد من متانة العدسات.' },
            { title: 'تقنيات تسهيل التنظيف', img: third, desc: 'طلاءات مضادة لأوساخ تضمن تنظيف سهل وسريع.' },
            { title: 'تقنيات تقليل الانعكاسات', img: forth, desc: 'تحسين الرؤية من خلال تقليل الانعكاسات.' },
            { title: 'ختم مائي للتحقق من الجودة', img: fifth, desc: 'ختم يظهر عند تعرض العدسة للبخار للتحقق من الأصالة.' },
            { title: 'حماية من الضوء الأزرق', img: sixth, desc: 'حماية للعين من الأشعة الضارة المنبعثة من الشاشات.' }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <img className="feature-image" src={feature.img} alt={feature.title} />
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
              <FaRegCheckCircle className="check-icon" />
            </div>
          ))}
        </div>
      </section>

      <div id="about-us" className="about-us">
        <h2>من نحن</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-section">
              <h3> : الشـركـة </h3>
              <p>تتربع شركة زينون على قمة الابتكار والتميّز في عالم العدسات البصرية عالية الجودة. بدأت كمشروع صغير يتمحور حول الالتزام بأعلى معايير الجودة، واليوم أصبحت رمزًا للريادة والإبداع في قطاع البصريات.</p>
            </div>
            <div className="about-section">
              <h3>:رؤيتــــنا </h3>
              <p>في شركة زينون، نؤمن أن الرؤية هي القوة الدافعة التي تحرك العالم نحو التقدّم. نسعى إلى تقديم تجربة بصرية استثنائية تجمع بين الثقة والأناقة، لتمنح عملاءنا أفضل جودة وأروع مظهر.</p>
            </div>
            <div className="about-section">
              <h3>: تاريخـــنا</h3>
              <p>تأسست شركة زينون على يد فريق من الخبراء المتخصصين في صناعة العدسات البصرية. منذ البداية، كرّسنا جهودنا للابتكار والجودة، مما أكسبنا سمعة راسخة وثقة عملائنا في مجال العدسات عالية الجودة.</p>
            </div>
          </div>
          <div className="about-image">
            <img src={aboutUsimage} alt="Xenon Lenses Team" />
          </div>
        </div>
      </div>
      
      {/* Warranty Section */}
      <section id="grant" className="warranty">
        <div className="warranty-content">
          <div className="warranty-text">
            <h2>ضمان الاستبدال</h2>
            <p>استكمالا لتجربة استخدام عدساتنا تتعهد زينون بتقديم ضمان استبدال لعدساتها في حالة الكسر الغير متعمد</p>
            <h2> :للاستفادة من الضمان في حالة الكسر </h2>

            <p> <ul>
                <li>اولاً : قم باحضار العدسة المكسورة التي يظهر فيها ختم زينون الضبابي او جزء منها</li>
                <br/>
                <li>ثانياً : قم باحضار بطاقة الضمان التي يظهر فيها تاريخ الشراء </li>
                <br/>
                <li>ثالثاً : اذهب الى محل البصريات الذي قمت بشراء عدسات زينون منه </li>

              </ul>
              </p>
          </div>
          <div className="warranty-image">
            <img src={warrant_image} alt="Warranty" />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="myMap">
        <div className="myMap-content">
          <div className="myMap-text">
          <h2>: تتوفر عدساتنا في المتاجر التالية</h2>

            <p><strong> بغداد البصريات</strong><br/>الموصل - الجانب الايسر - حي المصارف - قرب التقاطع</p>
            <p><strong>الجامعة للبصريات </strong><br/>الموصل - الجانب الايسر - قرب نفق الجامعة</p>
            <p><strong>مركز الحدباءالتخصصي</strong><br/>الموصل - الجانب الايسر - القادسية - قرب دورة حاملة الجرار</p>
            <p><strong> الريان للبصريات</strong><br/>الموصل - الجانب الايسر - المصارف </p>
            <p><strong> اليمامة للبصريات</strong><br/>الموصل - الجانب الايسر - المثنى - قرب دورةالمثنى </p>
            <p><strong> ابن الهيثم للبصريات</strong><br/>الموصل - الجانب الايسر - الزهور - قرب دورة سيدتي الجميلة</p>
            <p><strong> زيد للبصريات</strong><br/>الموصل - الجانب الايسر - المصارف - قرب اثاث استقبال</p>
            



          </div>
          <MapComponent  locations={locations} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>تواصل معنا</h2>
        <div className="contact-details">
          <ul>
            <li><FaWhatsapp size={30} /> <a href="https://wa.me/9647716950796">9647716950796</a></li>
            <li><FaWhatsapp size={30} /> <a href="https://wa.me/9647508199458">9647508199458</a></li>
            <li><FaWhatsapp size={30} /> <a href="https://wa.me/9647518050661">9647518050661</a></li>
            <li><FaEnvelope size={30} /> <a href="mailto:sales@xenonlens.com">sales@xenonlens.com</a></li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Xenon Lens <img className='logoInvert' src={logoInvert} />. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
