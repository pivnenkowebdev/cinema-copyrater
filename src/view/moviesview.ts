import { Creator } from "../tools/creator";
import { movielistParams } from "./moviesparams";

export class Movies {
  listElement;
  dataArray;
  constructor(movies) {
    this.dataArray = movies;
    this.listElement = new Creator(movielistParams).getTag();
  }
  createListCards() {
    this.dataArray.forEach((film) => {
      console.log(film);
    });
  }
}
