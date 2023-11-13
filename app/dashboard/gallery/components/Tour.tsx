import JoyRide from "react-joyride";

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
    disableBeacon: true,
  },
  {
    target: "#tour-external-links",
    content:
      "We serve you the best and latest editorial articles here. Take a good read.",
    disableBeacon: true,
  },
  {
    target: "#tour-footer",
    content:
      "This is where you can view the most recent list of orders made for various artworks you've uploaded.",
    disableBeacon: true,
  },
  {
    target: "#navigation-items",
    content:
      "You can switch between your dashboard links or navigate to another dashboard page from here",
    disableBeacon: true,
  },
  {
    target: "#expand",
    content:
      "You can expand or clam up the navigation bar by clicking this icon here.",
    disableBeacon: true,
  },
  {
    target: "#gallery-verification",
    content:
      "Your account is in a pending state as it's being verified. You can expedite this process by clicking this button and an agent will reach out to you within 24 hours.",
    disableBeacon: true,
  },
];

// Tour component
const Tour = () => {
  const defaultOptions = {
    arrowColor: "#fff",
    backgroundColor: "#fff",
    beaconSize: 36,
    overlayColor: "rgba(0, 0, 0, 0.7)",
    primaryColor: "#f04",
    spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
    textColor: "#333",
    width: 400,
    zIndex: 100,
  };
  return (
    <>
      <JoyRide
        steps={TOUR_STEPS}
        continuous={true}
        showSkipButton={true}
        showProgress={true}
        styles={{
          beacon: {},
          beaconInner: {},
          beaconOuter: {},
          buttonBack: {},
          buttonClose: {},
          buttonNext: {},
          buttonSkip: {},
          overlay: {},
          overlayLegacy: {},
          overlayLegacyCenter: {},
          spotlightLegacy: {},
          tooltip: {},
          tooltipContent: {},
          tooltipFooter: {},
          tooltipFooterSpacer: {},
          tooltipTitle: {},
          options: defaultOptions,

          spotlight: {
            borderRadius: "2rem",
          },
          tooltipContainer: {
            textAlign: "left",
          },
        }}
        locale={{
          last: "Enjoy!",
          skip: "Exit tour",
        }}
      />
    </>
  );
};

export default Tour;
