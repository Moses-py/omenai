import React from "react";

export default function PayNowButton() {
  return (
    <div className="w-full grid place-items-center h-full">
      <div className="space-y-4 text-center w-full flex flex-col items-center">
        <button className="w-fit px-5 disabled:cursor-not-allowed disabled:bg-white disabled:border disabled:border-dark bg-dark py-3 text-white text-base hover:bg-white hover:text-dark hover:border hover:border-dark hover:underline duration-300 grid place-items-center group">
          Proceed to payment
        </button>
        <p className="font-bold text-red-600 md:w-1/2">
          <span className="text-[1.15rem] uppercase underline">
            Please note:
          </span>
          <br /> In order to prevent multiple transaction attempts for this
          artwork, we have implemented a queueing system and lock mechanism
          which prevents other users from accessing the payment portal if a user
          is currently in the process of paying for the artwork. In a case where
          you are unable to access the payment portal, please refresh your page
          after a few minutes and we&apos;ll let you know if the artwork is
          still available for purchase.
        </p>
      </div>
    </div>
  );
}
