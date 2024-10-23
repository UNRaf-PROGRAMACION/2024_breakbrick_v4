import { Scene } from "phaser";
import { getLanguageConfig, getPhrase } from "../services/translations";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  init(data) {
    this.cameras.main.fadeIn(500, 0, 0, 0);
    this.language = data.language || getLanguageConfig();
  }

  create() {
    this.add.image(512, 384, "background");

    this.add.image(512, 300, "logo");

    const menuButton = this.add
      .text(512, 460, getPhrase('MenuPrincipal'), {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    menuButton.setInteractive();

    menuButton.on("pointerover", () => {
      menuButton.setScale(1.46);
    });

    menuButton.on("pointerout", () => {
      menuButton.setScale(1);
    });

    menuButton.on("pointerdown", () => {
        menuButton.setScale(1.6);
        this.scene.start('Game'); 
      });
  }
}