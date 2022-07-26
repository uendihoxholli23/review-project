import React from "react";
function Cards(props) {
  return (
    <>
      {props.allReviews.map((value, index) => (
        <section class="text-gray-400 bg-gray-900 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  ></img>
                  <div class="p-6" key={index}>
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      {value.username}
                      {value.surname}
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3"></h1>
                    <p class="leading-relaxed mb-3">{value.comment}</p>
                    <button class="bg-transparent hover:bg-teal-500 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
                      To Favorites
                    </button>
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
