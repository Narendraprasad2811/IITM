import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 h-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="h-40 w-full">
            <img src={item.image} alt="Shoes" className="h-full w-full object-contain" />
          </figure>
          <div className="card-body">
            <div className="flex flex-col">
              <h2 className="card-title">
                {item.title}
              </h2>
              <div className="badge badge-secondary mt-2">{item.category}</div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Author: {item.author}</p>
            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline">₹{item.price}</div>
              <div className="cursor-pointer px-1 py-1 rounded-full border-[1px] hover:bg-pink-500 hover:text-white duration-200 text-sm">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
