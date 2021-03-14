import React, {useCallback} from "react";
// import Pdf from "../../editable-stuff/resume.pdf";

import axios from "axios";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  // const handleClick = useCallback(() => {
  //   // handle the click event
  // }, []);

  // const handleRequest = async () => {
  //   const instaLink = "https://www.instagram.com/";
  //   const instaQuery = "/?__a=1";
  //   try {
  //     const response = await axios.get(instaLink + link + instaQuery);
  //     setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
  //   } catch (error) {
  //     setShowPic(false);
  //     console.error(error.message);
  //   }
  // };

  const handleRequest = useCallback( async () => {
    const instaLink = "https://www.instagram.com/";
    const instaQuery = "/?__a=1";
    try {
      const response = await axios.get(instaLink + link + instaQuery);
      setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  }, [link]);

  React.useEffect(() => {
    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link, setProfilePicUrl, handleRequest]);

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
            )}
          </div>

          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            {/* <p className="lead text-center">{message}</p> */}
            <p>• Currently working as a Graduate Research Assistant at Cal State University - San Marcos <br/>• 2 years of professional experience as a Software Engineer and as a Software Developer <br/>• Master's student in Computer Science at California State University - San Marcos graduating in May 2021 <br/>• Machine learning enthusiast with experience in all phases of SDLC using Agile Methodologies <br/>• Strong understanding of object-oriented programming/design, data structures and algorithms <br/> </p>
            {resume && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
