import { useNavigate } from "react-router-dom";
import { DataState } from "../Store/Context";
import { RxCross1 } from "react-icons/rx";
import "./Watchlist.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

 const Watchlist = () => {
    const{state,dispatch}=DataState();
    const navigate=useNavigate();
    console.log(state.cart)
     const xi = (t) => {
       // setContent(t);

       setTimeout(() => {
         navigate("../content", { state: { t } });
       }, 300);
     };
  return (
    <>
      <Navbar />
      <h1 className="watch-head watch-mi">Watch Your Saved Movies From here</h1>
      <div className="cart-align">
        {state.cart.length === 0 ? (
          <div className="empty">
            {" "}
            <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" />
            <h1 className="watch-head">No content At this point add it </h1>
            {/* <iframe
              src="https://giphy.com/embed/13d2jHlSlxklVe"
              width="260"
              height="240px"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe> */}
            <p></p>
          </div>
        ) : (
          state.cart.map((ele) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="img-cart">
                <img
                  src={ele.thumbnail}
                  alt={ele._id}
                  onClick={() => {
                    xi(ele);
                  }}
                />

                <div
                  className="detail-Btn MyListBtn"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_TO_LIST",
                      payload: ele,
                    })
                  }
                >
                  {/* <RemoveIcon /> */}
                  <button className="watch-btn up-thebox">
                    <RxCross1 className="pluswatch" />

                    <span>Remove </span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
}

export default Watchlist;