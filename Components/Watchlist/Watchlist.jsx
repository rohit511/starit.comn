import { useNavigate } from "react-router-dom";
import { DataState } from "../Store/Context";
import { RxCross1 } from "react-icons/rx";
import "./Watchlist.css"
import Navbar from "../Navbar/Navbar";

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
   <Navbar/>
    <div className="cart-align">
        {
            state.cart.map((ele)=>{
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
        }
   
    </div>
    </>
  )
}

export default Watchlist;