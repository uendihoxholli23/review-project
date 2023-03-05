import { useState, useEffect, useContext } from "react";
import React from "react";
import axios from "axios";
import FavoritesContext from "../store/favorites-context";
import StarRating from "../components/StarRating";

async function getReviews() {
  const result = await axios("http://localhost:3000/");
  return result;
}

function Cards(props) {
  //delete button
  const [reviews, setReviews] = useState();

  const deleteReview = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3000/${id}`)
      .then((res) => {
        console.log("Deleted!", res);
        const filteredReviews = reviews.filter((review) => review.id !== id);
        setReviews(filteredReviews);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getReviews().then((resp) => {
      const allReviews = resp.data;
      setReviews(allReviews);
    });
  }, []);

  //Favorites button
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        username: props.username,
        surname: props.surname,
        comment: props.comment,
      });
    }
  }
  return (
    <>
      {reviews?.map((review) => (
        <section key={review.id} class="text-gray-400 bg-gray-00 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="cards flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <div class="bg-gray-800 p-8">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      {review.username}
                      {""} {review.surname}
                    </h2>
                    <h1 class="title-font text-lg font-bold text-white mb-3"></h1>
                    <p class="leading-relaxed mb-3">{review.comment}</p>
                    <div class="flex justify-center">
                      <button
                        class="bg-transparent hover:bg-teal-500 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
                        onClick={toggleFavoriteStatusHandler}
                      >
                        {itemIsFavorite
                          ? "Remove from Favorites"
                          : "To Favorites"}
                      </button>
                      <button
                        class="ml-3 w-24 bg-transparent hover:bg-teal-500 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
                        onClick={() => deleteReview(review.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
export default Cards;
