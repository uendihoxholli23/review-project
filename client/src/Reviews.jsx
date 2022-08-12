import React, { useState, useEffect } from "react";
import axios from "axios";

async function getReviews() {
  const result = await axios("http://localhost:3000/");
  return result;
}

const deleteReview = (id) => {
  axios.delete(`http://localhost:3000/${id}`)
  .then((res) => {
    console.log('Deleted!', res)
  }).catch((err) => {
    console.log(err)
  })
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
          <h3><b>Username:</b>{review.username}</h3>
          <h3><b>Surname:</b> {review.surname}</h3>
          <h6><b>Comment:</b> {review.comment}</h6>
          <button style={{padding: '5px'}} className="deleteButton" onClick={() => window.location.reload(review.id)}>Delete Review</button>
          <hr />
        </li>
      ))}
    </ul>
  );
}

export default Reviews;
