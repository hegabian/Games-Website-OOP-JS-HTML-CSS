import { Details } from "./Details.js";
import { Ui } from "./Ui.js";
export class Games {
 
  constructor() {
    this.ui = new Ui();
    this.Details = new Details();
    this.apiGames("mmorpg");
    this.li = document.querySelectorAll("#mainLi li");
    this.li.forEach((picks) => {
      picks.addEventListener("click", (e) => {
        this.ui.mainDiv.innerHTML = "";
        this.li.forEach((picks) => {
          picks.classList.remove("active");
        });
        e.target.classList.add("active");
        this.apiGames(picks.innerHTML);
      });
    });
  }
  apiGames(category) {
    let options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f8615c1ae5msh638bcd87f8ee175p1f78fajsnb5291f5a55b5",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        this.ui.displayData(response);
        this.cardX = document.querySelectorAll(".cardX");
        this.changeCategory();
      })
      .catch((err) => console.error(err));
  }
  changeCategory() {
    let cards = document.querySelectorAll(".cardX");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        this.displayDetails(card.id);
      });
    });
  }
  displayDetails(id) {
    let main = document.querySelector("#mainSec");
    let detailsx = document.querySelector("#details");
    const details = new Details(id);
    main.style.display = "none";
    detailsx.style.display = "block";
  }
}
