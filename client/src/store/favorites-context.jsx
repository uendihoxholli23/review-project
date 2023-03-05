import { useState, createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteFood) => {},
  removeFavorite: (reviewId) => {},
  itemIsFavorite: (reviewId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteFood) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteFood);
    });
  }

  function removeFavoriteHandler(reviewId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((review) => review.id !== reviewId);
    });
  }

  function itemIsFavoriteHandler(reviewId) {
    return userFavorites.some((review) => review.id === reviewId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
