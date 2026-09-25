import { HeaderView } from "./headerview";
import type { genre } from "../types/types";
import { Movies } from "./moviesview";

export class View {
  app: HTMLElement | null;
  header: HeaderView | null = null;

  constructor() {
    this.app = document.querySelector("#app");
  }

  build(genres: genre[]): void {
    this.header = new HeaderView(genres);

    this.app?.append(this.header.headerElem);
  }
  renderMovies(movies) {
    this.movieList = new Movies(movies);
    console.log(this.movieList);
  }
}
