import React, { useEffect, useContext } from "react";
import AppContext from "../store/context";
import { useParams } from "react-router-dom";
const SingleContent = () => {
  const { media_type, id } = useParams();
  const { fetchSingle, single, darkMode } = useContext(AppContext);
  useEffect(() => {
    fetchSingle(media_type, id);
  }, []);
  const backdrop = `https://image.tmdb.org/t/p/original/${single.backdrop_path}`;
  const poster = `https://www.themoviedb.org/t/p/w1280/${single.poster_path}`;
  const voteAverage =
    ((single.vote_average / 10) * 100).toFixed().toString() + "%";
  return (
    <div
      className={`min-h-screen w-full relative after:absolute after:h-full after:w-full  ${
        darkMode
          ? "after:bg-[rgba(0,0,0,0.5)]"
          : "after:bg-[rgba(255,255,255,0.42)]"
      }  after:top-0 after:left-0 after:z-[-1]`}
      style={{
        background: `url(${backdrop})`,
        backgroundPosition: "center center",
        objectFit: "cover",
        zIndex: "-2",
      }}
    >
      <div className="py-7 mx-auto grid grid-cols-1 xl:grid-cols-3 w-[90%] justify-items-center z-20">
        <img
          src={poster}
          alt={"image-loading"}
          className="h-[500px] xl:h-[600px] w-80 xl:w-96 object-cover"
        />
        <div className="flex flex-col gap-4 col-span-2">
          <h3
            className={`${
              darkMode ? "text-whitish" : "text-blackish"
            } text-5xl font-light`}
          >
            {single.name ? single.name : single.original_title}
          </h3>
          {single.genres ? (
            <div className="genres flex gap-3">
              <span
                className={`${
                  darkMode
                    ? "bg-whitish text-blackish"
                    : "bg-blackish text-whitish"
                } py-1 px-2`}
              >
                {single.genres[0].name}
              </span>
              {single.genres[1] ? (
                <span
                  className={`${
                    darkMode
                      ? "bg-whitish text-blackish"
                      : "bg-blackish text-whitish"
                  } py-1 px-2`}
                >
                  {single.genres[1].name}
                </span>
              ) : null}
            </div>
          ) : null}

          <div className={`${darkMode ? "text-whitish" : "text-blackish"}`}>
            {single.overview}
          </div>

          <div class="w-full  rounded-full bg-gray-700">
            <div
              className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full `}
              style={{ width: `${voteAverage}` }}
            >
              {""}
              {voteAverage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
