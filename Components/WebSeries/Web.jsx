import { useEffect, useState } from "react";
// import "./api.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Web.css";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  smartphone: {
    breakpoint: { max: 824, min: 464 },
    items: 2.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.4,
  },
};
function Web() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const [webSeries, setWebSeries] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  // const[content,setContent] = useState([]);
  //  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://academics.newtonschool.co/api/v1/ott/show?limit=100`;

    const fetchData = async () => {
      const headers = {
        projectId: "f104bi07c490",
      };
      try {
        const response = await fetch(url, { headers });
        const json = await response.json();
        setWebSeries(json.data);
        console.log(json.data);
        const filtered = json.data.filter(
          (series) => series.type === "web series"
        );
        setFilteredSeries(filtered);
        console.log(webSeries);
        console.log("filtered");
        console.log(filtered);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const handleclick=()=>{

  //   navigate("/movie/:id");

  // }
  const x = (t) => {
    // setContent(t);

    setTimeout(() => {
      navigate("../content", { state: { t } });
    }, 300);
  };

  return (
    <>
      <div className="container1">
        <h2>Web series</h2>
        {/* <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {filteredSeries.map((series) => {
            return (
              <>
                <div className="box">
                  <img src={series.thumbnail} alt="" className="img1" />
                </div>
              </>
            );
          })}
        </Carousel> */}
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {filteredSeries.map((series) => {
            return (
              <>
                <div className="box" key={series._id}>
                  <img
                    src={series.thumbnail}
                    alt=""
                    className="img1"
                    onClick={() => {
                      x(series);
                    }}
                  />
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Web;

// const filtered = webSeries.filter((series) => series.type === `movie`);
// setFilteredSeries(filtered);
