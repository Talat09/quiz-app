import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicDetails from "../TopicDetails/TopicDetails";

const Topic = () => {
  const data = useLoaderData();
  const topics = data.data;
  return (
    <div className=" grid grid-cols-4  px-7 py-12">
      {topics.map((topic) => (
        <TopicDetails key={topic.id} topic={topic}></TopicDetails>
      ))}
    </div>
  );
};

export default Topic;
