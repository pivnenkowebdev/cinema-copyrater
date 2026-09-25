import { Creator } from "../tools/creator";
import { movielistParams } from "./moviesparams";

export class Movies {
  listElement;
  constructor(movies) {
    console.log(movies);
    this.listElement = new Creator(movielistParams).getTag();
  }
}
