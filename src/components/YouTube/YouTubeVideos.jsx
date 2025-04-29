import React, { useEffect, useState } from "react";
function YouTubeVideos() {
  const [youTubeVideos1, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&key=AIzaSyAnc1L3Vvlk9kzd6SqRT7C1RhT1PoejNgU&order=date"
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        const youTubeVideosData = data.items;
        setVideos(youTubeVideosData);
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  }, []);

  //console.log(youTubeVideos1);

  return (
    <section className="youtubeVideoWrapper">
      <div className="allVideoWrapper">
        <div className="container">
          <div className="row  justify-content-center text-center">
            <div className="col-12">
              {/* <div className="latestVideoWrapper"> */}
              <br />
              <h1>Latest Video</h1>
              <br />
              {/* </div> */}
            </div>
            {youTubeVideos1?.map((singleVideo) => {
              console.log(singleVideo);
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={vidId} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        {singleVideo.snippet.title}
                      </a>
                    </div>

                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default YouTubeVideos;
