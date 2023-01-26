import React from "react";
import { Link } from "react-router-dom";

const TopicDetails = ({ topic }) => {
  //   console.log(topic);
  const { name, logo, id } = topic;
  return (
    <div className=" border-gray-500 border w-52 mb-5 rounded-lg   mx-auto shadow-xl shadow-white/70">
      <img
        className="w-36 pt-2 text-center ml-auto mr-auto "
        src={logo}
        alt=""
      />
      <p className="text-lg font-bold">{name}</p>
      <Link to={`/${id}`}>
        <button className="bg-green-500 px-4 py-2 mb-3 mt-2 font-bold text-white rounded-2xl">
          Start Practice
        </button>
      </Link>
    </div>
  );
};

export default TopicDetails;
