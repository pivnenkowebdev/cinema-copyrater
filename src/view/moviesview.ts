import { Creator } from "../tools/creator";
import {
  cardParams,
  movieImgParams,
  movielistParams,
  movieTitleParams,
  movieTitleWrapperParams,
  ratingStarParams,
  ratingTextParams,
  ratingWrapperParams,
} from "./moviesparams";

export class Movies {
  listElement;
  dataArray;
  constructor(movies) {
    this.dataArray = movies.results;
    this.listElement = new Creator(movielistParams).getTag();
  }
  createListCards() {
    this.dataArray.forEach((film) => {
      console.log(film);
      movieImgParams.attributes.src = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
      movieTitleParams.text = film.title;
      const img = new Creator(movieImgParams).getTag();
      const title = new Creator(movieTitleParams).getTag();
      const filmCard = new Creator(cardParams).getTag();
      const wrapper = new Creator(movieTitleWrapperParams).getTag();
      const ratingWrapper = new Creator(ratingWrapperParams).getTag();
      const ratingStar = new Creator(ratingStarParams).getTag();
      const ratingText = new Creator(ratingTextParams).getTag();
      wrapper.append(title);
      this.listElement.append(filmCard);
      filmCard.append(img);
      filmCard.append(wrapper);
      wrapper.append(ratingWrapper);
      wrapper.append(ratingText, ratingStar);
    });
  }
}
