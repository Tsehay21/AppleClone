import React from "react";
import { Outlet } from "react-router-dom";
import YouTubeVideos from "./YouTubeVideos";

function SharedVideos() {
  return (
    <div>
      <Outlet />
      <YouTubeVideos />
    </div>
  );
}

export default SharedVideos;
