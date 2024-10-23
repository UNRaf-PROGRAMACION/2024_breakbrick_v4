import { Scene } from "phaser";
import { ES_AR, EN_US } from "../enums/languages";
import { getTranslations } from "../services/translations";

export class ChooseLanguage extends Scene {
  constructor() {
    super("chooseLanguage");
  }

  create() {
    const width = this.game.scale.width;
    const height = this.game.scale.height;

    const ARGFlag = this.add
      .image(width * 0.3, height * 0.6, "Argentina")
      .setDepth(1)
      .setOrigin(0.5)
      .setScale(1.24);

    ARGFlag.setInteractive();

    ARGFlag.on("pointerover", () => {
      ARGFlag.setScale(1.46);
    });

    ARGFlag.on("pointerout", () => {
      ARGFlag.setScale(1);
    });

    ARGFlag.on("pointerdown", () => {
      ARGFlag.setScale(1.6);

      getTranslations(ES_AR, () => {
        this.time.addEvent({
          delay: 120,
          loop: true,
          callback: () => {
            this.gotoMainScene(ES_AR); //Llama la escena Main
          },
        });
      });
    });

    const EEUUFlag = this.add
      .image(width * 0.7, height * 0.6, "EstadosUnidos")
      .setDepth(1)
      .setOrigin(0.5)
      .setScale(1.24);

    EEUUFlag.setInteractive();

    EEUUFlag.on("pointerover", () => {
      EEUUFlag.setScale(1.46);
    });

    EEUUFlag.on("pointerout", () => {
      EEUUFlag.setScale(1);
    });

    EEUUFlag.on("pointerdown", () => {
      EEUUFlag.setScale(1.6);

      getTranslations(EN_US, () => {
        this.time.addEvent({
          delay: 120,
          loop: true,
          callback: () => {
            this.gotoMainScene(EN_US); //Llama la escena Main
          },
        });
      });
    });
  }

  gotoMainScene(lang) {
    this.time.delayedCall(200, () => {
      this.scene.start("MainMenu", {
        language: lang,
      });
    });
  }
}