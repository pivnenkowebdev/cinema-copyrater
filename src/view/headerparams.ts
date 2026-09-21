import listGenres from "../css/listGenres.module.css";

export const headerParams = {
  tagName: "header",
  classList: ["header"],
  attributes: {},
  text: "",
};
export const ulParams = {
  tagName: "ul",
  classList: [listGenres.genreList],
  attributes: {},
  text: "",
};
export const liParams = {
  tagName: "li",
  classList: ["item"],
  attributes: {},
  text: "",
};

export const genreButtonParams = {
  tagName: "button",
  classList: [listGenres.genreButton],
  attributes: {
    "data-name": "",
    "data-id": "",
  },
  text: "",
};
