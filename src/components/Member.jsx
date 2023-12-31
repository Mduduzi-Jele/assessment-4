/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Member = ({ id, image, name, job }) => {
  const navigate = useNavigate();
  return (
    <div className="home__member">
      <div className="home__member__div">
        <img src={image} width={"80"} height={"80"} />
        <div>
          <h1>{name}</h1>
          <p>{job}</p>
        </div>
      </div>
      <div className="home__member__icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
          onClick={() => navigate(`/editmember/${id}`)}
          id="icon"
        >
          <path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
          onClick={() => {
            localStorage.removeItem(id);
            window.location.reload();
          }}
        >
          <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
        </svg>
      </div>
    </div>
  );
};

export default Member;
