import { useContext } from "react";
import Cards from "../components/Cards";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <Cards allReviews={favoriteCtx.favorites} />;
  }
  return (
    <section class="text-gray-400 bg-gray-900 body-font h-screen">
      {" "}
      {content}
    </section>
  );
}
export default Favorites;
