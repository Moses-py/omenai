"use client";
import React, { useReducer, useEffect } from "react";
import JoyRide, { ACTIONS, EVENTS, STATUS } from "react-joyride";
// Tour steps
const TOUR_STEPS = [
  {
    target: "#tour-search",
    content:
      "Welcome to your dashboard. Once your artworks starts gaining popularity, we'll be sure to show you your top-rated artworks amongst our users.",
    disableBeacon: true,
  },
  {
    target: "#tour-orders",
    content:
      "You can view your sales progress from this chart here, it keeps track of and shows how much revenue you've made from successful artwork sales.",
  },
  {
    target: "#tour-external-links",
    content:
      "We serve you the best and latest editorial articles here. Take a good read.",
  },
  {
    target: "#tour-footer",
    content:
      "This is where you can view the most recent list of orders made for various artworks you've uploaded.",
  },
  {
    target: "#navigation-items",
    content:
      "You can switch between your dashboard links or navigate to another dashboard page from here",
  },
  {
    target: "#expand",
    content:
      "You can expand or clam up the navigation bar by clicking this icon here.",
  },
  {
    target: "#gallery-verification",
    content:
      "Your account is in a pending state as it's being verified. You can expedite this process by clicking this button and an agent will reach out to you within 24 hours.",
  },
];

// Tour component
const INITIAL_STATE = {
  key: new Date(), // This field makes the tour to re-render when we restart the tour
  run: false,
  continuous: true,
  loading: false,
  stepIndex: 0,
  steps: TOUR_STEPS,
};

// Reducer will manage updating the local state
const reducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "START":
      return { ...state, run: true };
    case "RESET":
      return { ...state, stepIndex: 0 };
    case "STOP":
      return { ...state, run: false };
    case "NEXT_OR_PREV":
      return { ...state, ...action.payload };
    case "RESTART":
      return {
        ...state,
        stepIndex: 0,
        run: true,
        loading: false,
        key: new Date(),
      };
    default:
      return state;
  }
};

// Tour component
const Tour = () => {
  // Tour state is the state which control the JoyRide component
  const [tourState, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    // Auto start the tour if the tour is not viewed before
    if (!localStorage.getItem("tour")) {
      dispatch({
        type: "START",
        payload: undefined,
      });
    }
  }, []);

  // Set once tour is viewed, skipped or closed
  const setTourViewed = () => {
    localStorage.setItem("tour", "1");
  };

  const callback = (data: {
    action: any;
    index: any;
    type: any;
    status: any;
  }) => {
    const { action, index, type, status } = data;

    if (
      // If close button clicked, then close the tour
      action === ACTIONS.CLOSE ||
      // If skipped or end tour, then close the tour
      (status === STATUS.SKIPPED && tourState.run) ||
      status === STATUS.FINISHED
    ) {
      setTourViewed();
      dispatch({
        type: "STOP",
        payload: undefined,
      });
    } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      // Check whether next or back button click and update the step.
      dispatch({
        type: "NEXT_OR_PREV",
        payload: { stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) },
      });
    }
  };

  const startTour = () => {
    // Start the tour manually
    dispatch({
      type: "RESTART",
      payload: undefined,
    });
  };

  return (
    <>
      <JoyRide
        {...tourState}
        callback={callback}
        showSkipButton={true}
        showProgress={true}
        styles={{
          tooltipContainer: {
            textAlign: "left",
          },
          buttonBack: {
            marginRight: 10,
          },
        }}
        locale={{
          last: "End tour",
        }}
      />
    </>
  );
};

export default Tour;
