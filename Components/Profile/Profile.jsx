/* eslint-disable react/no-unescaped-entities */
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Profile.css";
 const Profile = () => {

    const userName = JSON.parse(localStorage.getItem("user"));
    
  return (
    <div>
      <Navbar />
      <div className="profile-details">
        <h1>
          Welcome here{" "}
          {userName?.name !== null && userName !== null ? (
            <em>{userName.name}</em>
          ) : (
            <em> user1</em>
          )}{" "}
          ! . you are signed in , with email id as{" "}
          {(userName ?.email !== null && userName !== null)? (
            <em>{userName.email}</em>
          ) : (
            <em> abc@gmail.com</em>
          )}{" "}
          ....
        </h1>
        <h1>Our Frequently Asked Questions</h1>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is the internet speed required to use StarIt?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                While the StarIt player automatically adjusts itself to your
                available internet speed, it is advised to have a minimum
                internet speed of 2 Mbps or above.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How can I watch a movie or TV show on StarIt?{" "}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Tap on any Movie or TV Show available on the Home screen of the
                app. You can also browse our vast library of content by
                accessing Movies, TV Shows and Trailers sections from the left
                navigational panel (Android) / Jio drawer (iOS). If you have a
                particular movie in mind, go to Search and type the movie title;
                or search by your favourite actor, genre etc.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What are the different genres offered by StarIt?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                StarIt provides a variety of movies and TV shows from different
                genres, such as action, comedy, documentary, and family. To see
                the list of all available genres, select the Genres tab under
                the Movies section of the app.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Profile;