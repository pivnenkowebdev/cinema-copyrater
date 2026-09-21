import { Model } from "../model/model";
import { View } from "../view/view";

export class Controller {
  private model: Model;
  private view: View;

  constructor() {
    this.model = new Model();
    this.view = new View();

    this.init();
  }

  private async init(): Promise<void> {
    try {
      const data = await this.model.fetchData();

      this.view.build(data.genres);

      this.setListeners();
    } catch (error) {
      console.error("Failed to initialize application:", error);
    }
  }

  private setListeners(): void {
    this.view.header?.headerElem.addEventListener("click", async (event) => {
      const isElement = event.target as HTMLElement;
      if (isElement) {
        const isButton = isElement.closest("[data-name]");
        if (isButton) {
          const isGenreId = isButton.getAttribute("data-id");
          this.model.fetchMovies(isGenreId);
        }
      }
    });
  }
}
