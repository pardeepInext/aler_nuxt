export const state = () => ({
  propertyStatus: ["rent", "sale"],
  propertyTypes: [
    "apartment",
    "house",
    "office",
    "villa",
    "store",
    "resturent",
  ],
  propertyFeatures: [
    ["air conditioning", "barbeque", "dryer", "gym"],
    ["laundry", "lawn", "microwave", "outdoorShower"],
    ["refrigerator", "sauna", "swimming pool", "tv cable"],
    ["washer", "Wifi", "window coverings", "villa"],
  ],
  footerMenus: [
    "fa-facebook",
    "fa-twitter",
    "fa-youtube-play",
    "fa-pinterest-p",
    "fa-instagram",
  ],
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  menuToggle: false,
});

export const mutations = {
  Menu_Toggle: (state, paylaod) => (state.menuToggle = paylaod),
};

export const actions = {
  menuToggleAction: ({ state, commit }) =>
    commit("Menu_Toggle", !state.menuToggle),
};
