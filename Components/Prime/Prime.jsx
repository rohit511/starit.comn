import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Prime.css"
import { RxCross1 } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai";


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
            <h5 className="card-title">Mobile View</h5>
            <div className="card-text">
              <AiOutlineCheck className="tick" /> All movies & Tv
            </div>
            <div className="card-text">
              <AiOutlineCheck className="tick" /> 2 device allowed
            </div>
            <div className="card-text">
              <AiOutlineCheck className="tick" /> With Adds
            </div>
            <div className="card-text">
              <AiOutlineCheck className="tick" /> Max Quality 720p
            </div>
            <div className="card-text">
              <RxCross1 className="cross" /> Laptop & big-screen
            </div>
            <a href="#" className="btn btn-primary prime-b">
              ₹ 999 / year
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
            <h5 className="card-title">Laptop View</h5>
            <div className="card-text">
              <AiOutlineCheck className="tick" /> All movies & Tv
            </div>
            <div className="card-text">
              <AiOutlineCheck className="tick" /> 4 device allowed
            </div>
            <div className="card-text">
              <RxCross1 className="cross" /> With Adds
            </div>
            <div className="card-text">
              <AiOutlineCheck className="tick" /> Max Quality 1080p
            </div>
            <RxCross1 className="cross" /> big-screen
            <a href="#" className="btn btn-primary prime-b">
              ₹ 2999 / year
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
            <h5 className="card-title">Big Screen View</h5>
            <div className="card-text">
              <AiOutlineCheck className="tick" /> All movies & Tv
            </div>
            <div className="card-text">
              <AiOutlineCheck className="tick" /> 6 device allowed
            </div>
            <div className="card-text">
              <RxCross1 className="cross" /> With Adds
            </div>
            <div className="card-text">
              <AiOutlineCheck className="tick" /> Max Quality 1080p
            </div>
            <div className="card-text">
              <AiOutlineCheck className="tick" /> All screen allowed
            </div>
            <a href="#" className="btn btn-primary prime-b" onClick={() => {}}>
              ₹ 4999 / year
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Prime;
