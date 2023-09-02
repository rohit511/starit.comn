import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Prime.css"
const Prime = () => {
  return (
    <div>
      <Navbar />
      <h1 className="prime-head">Subscribe now and start streaming</h1>

      <div className="prime">
        <div className="card">
          <img
            src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/mobile-banking/advantage-of-mobile-banking-240x320.jpg"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://reviewed-com-res.cloudinary.com/image/fetch/s--b80cmsVL--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_729,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1558119942449/Laptoporientation.jpg"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWdOr_UiLL-Ck4lggYOsEZ3p28eeRpJsSNHDscuK6dJkj-yDcUNJG-3RmSQChfCMrIV0&usqp=CAU"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Prime;
