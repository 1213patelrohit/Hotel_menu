import React, { useState } from "react";

import Menu from "./Menu";

const GalleryReact = () => {
  const [item, setItem] = useState(Menu);

  const filterItem = (categItem) => {
    // categItem ni jagya e game te name rakhi sakay
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItem(updateItems);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourit Dish
      </h1>
      <hr />
      <div className="main-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Breakfast")}
          >
                      Breakfast
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Lunch")}
          >
            
            Lunch
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Evening")}
          >
            Evening
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Dinner")}
          >
      
            Dinner
          </button>
          <button className="btn btn-warning" onClick={() => setItem(Menu)}>
             All
          </button>
        </div>
      </div>
      <div className=" menu-item  container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {item.map((elem) => {
                const { id, name, image, discription, price } = elem;
                return (
                  <div
                    className="item1 col-12 col-md-6 col-lg-6 col-xl-4"
                    key={id}
                  >
                    <div className="row item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} className="img-fluid" />
                      </div>
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-8 pb-10">
                          <h1>{name}</h1>
                          <p>{discription} </p>
                        </div>
                        <div className=" Menu-price-book">
                          <div className="price-book-decide d-flex justify-content-between">
                            <h2> Price:{price}</h2>
                            <a>
                              <button className=" btn btn-primary">
                                {" "}
                                Order Now
                              </button>
                            </a>
                          </div>
                          <p> * Price may very on selected datw.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
