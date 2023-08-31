import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [x, setX] = useState([]);
  const [ans, setAns] = useState("");
  useEffect(() => {
    const url = `https://academics.newtonschool.co/api/v1/ott/show`;

    const fetchData = async () => {
      const headers = {
        projectId: "f104bi07c490",
      };
      try {
        const response = await fetch(url, { headers });
        const json = await response.json();
        setX(json.data);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const navigate = useNavigate();
  const handleSearch = (event) => {
    const t = x.filter((item) =>
      item.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    // Do something with filteredItems, like displaying them in the UI
    console.log(ans);
    setAns(t);
  };
  const xi = (t) => {
    // setContent(t);

    setTimeout(() => {
      navigate("../content", { state: { t } });
    }, 300);
  };
  return (
    <div className="search-begin">
      <Navbar />
      <div className="search-color">
        <div className="search-item">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="      Search , Movies and Shows"
          />
        </div>
        <div className="Search-content">
          {ans !== ""
            ? ans.map((series) => {
                return (
                  <>
                    <div className="box" key={series._id}>
                      <img
                        src={series.thumbnail}
                        alt=""
                        className="img1"
                        onClick={() => {
                          xi(series);
                        }}
                      />
                    </div>
                  </>
                );
              })
            : x.map((series) => {
                return (
                  <>
                    <div className="box" key={series._id}>
                      <img
                        src={series.thumbnail}
                        alt=""
                        className="img1"
                        onClick={() => {
                          xi(series);
                        }}
                      />
                    </div>
                  </>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Search;
// {
//   x.map((series) => {
//     return (
//       <>
//         <img src={series.thumbnail} alt="" className="img1" />
//       </>
//     );
//   });
// }
