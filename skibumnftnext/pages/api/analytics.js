import ReactGA from "react-ga4";
export const initGA = () => {
  const { REACT_APP_GOOGLE_GA } = process.env;
  console.log("GA init");
  ReactGA.initialize([{ trackingId: REACT_APP_GOOGLE_GA }]);
};
export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.send({
    hitType: "pageview",
    page: { page: window.location.pathname },
  });
};
export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
