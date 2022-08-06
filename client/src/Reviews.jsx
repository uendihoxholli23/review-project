import React, { useState, useEffect } from "react";
import axios from "axios";

async function getReviews() {
  const result = await axios("http://localhost:3000/");
  return result;
}

function Reviews() {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    getReviews().then(resp => {
      const allReviews = resp.data 
      setReviews(allReviews)
    });
  }, []);

  return (
    <ul>
      {reviews?.map((review) => (
        <li key={review.id}>
          <h3>Username: {review.username}</h3>
          <h6>Komenti: {review.comment}</h6>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;
