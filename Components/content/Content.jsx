import "./Content.css";
import { useLocation } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { DataState } from "../Store/Context";
import { GrAdd } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";


const Content = () => {
  const location = useLocation();
  console.log(location.state.t);
  const { state, dispatch } = DataState();
  const productData = location.state.t;
  console.log(state.cart);
  return (
    <div className="content">
      <video controls src={location.state.t.video_url} />
      <Link to="/">
        <BsFillArrowLeftCircleFill className="video-back" />
      </Link>
      <div className="content-item">
        {state.cart.some((pro) => pro._id === productData._id) ? (
          <div
            className="detail-Btn MyListBtn"
            onClick={() =>
              dispatch({
                type: "REMOVE_TO_LIST",
                payload: productData,
              })
            }
          >
            {/* <RemoveIcon /> */}
            <button className="watch-btn">
              <RxCross1 className="pluswatch" />

              <span>Remove To WatchList</span>
            </button>
          </div>
        ) : (
          <div
            className="detail-Btn MyListBtn"
            onClick={() =>
              dispatch({ type: "ADD_TO_LIST", payload: productData })
            }
          >
            {/* <AddIcon /> */}
            <button className="watch-btn">
              <GrAdd className="pluswatch" />
              <span>Add To WatchList</span>
            </button>
          </div>
        )}
      </div>
      <div className="content-item">
        <strong>Type</strong>
        <div>{location.state.t.type}</div>
      </div>
      <div className="content-item">
        <strong>Title</strong>
        <div>{location.state.t.title}</div>
      </div>
      <div className="content-item">
        <strong>Description</strong>
        <div>{location.state.t.description}</div>
      </div>
      <div className="content-item">
        <strong>Keywords </strong>
        <div>{location.state.t.keywords.join(" | ")}</div>
      </div>
      <div className="content-item">
        <strong>Director</strong>
        <div>{location.state.t.director}</div>
      </div>
      <div className="content-item">
        <strong>Cast</strong>
        <div>{location.state.t.cast.join(" | ")}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Content;
