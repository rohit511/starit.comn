import "./Content.css";
import { useLocation } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Content = () => {
  const location = useLocation();
  console.log(location.state.t);
  return (
    <div className="content">
      <video controls src={location.state.t.video_url} />
      <Link to="/">
        <BsFillArrowLeftCircleFill className="video-back" />
      </Link>

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
