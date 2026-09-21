import { Creator } from "../tools/creator";
import type { genre } from "../types/types";

import {
  genreButtonParams,
  headerParams,
  liParams,
  ulParams,
} from "./headerparams";

export class HeaderView {
  headerElem: HTMLElement;
  genreData: genre[];

  constructor(genres: genre[]) {
    this.headerElem = new Creator(headerParams).getTag();
    this.genreData = genres;

    this.createMenu();
  }

  private createMenu(): void {
    const genreList = new Creator(ulParams).getTag();

    this.genreData.forEach((movieGenre) => {
      const item = new Creator(liParams).getTag();

      const genreButton = new Creator({
        ...genreButtonParams,
        text: movieGenre.name,
        attributes: {
          ...genreButtonParams.attributes,
          "data-name": movieGenre.name,
          "data-id": movieGenre.id,
        },
      }).getTag();

      genreList.append(item);
      item.append(genreButton);
    });

    this.headerElem.append(genreList);
  }
}
