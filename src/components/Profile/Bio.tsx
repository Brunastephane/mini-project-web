import React from "react";

const Bio = (props: any) => {
  const {bio} = props;
  return (
    <div>
      <h4>Who I am</h4>
      <p>{bio.whoIAm}</p>
      <hr />
      <h4>My Career Story</h4>
      <p>{bio.careerStory}</p>
    </div>
  );
};

export default Bio;
