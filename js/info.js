AFRAME.registerComponent("infoemation", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        captain: {
         thumbnail: "./assets/thumbnails/Captain.jpg",
          title: "Captain America",
          released_year: "1940s",
          description:
      "A famous hero which was famous for his feats in the war against nazi's which was similar to the world war as it was the period it came out"
        },
        spiderman: {
          thumbnail: "./assets/thumbnails/spider.jpg",
          title: "Spiderman",
          released_year: "1962",
          description:
"Spider-ma is a hero which got his powers by a bitten radioactive spider , Stan Lee had not intention of making spider man as someone who anyone can be but that was a result of the character thus making him his favorite. As it can be anyone."
        },
        Iron: {
         thumbnail: "./assets/thumbnails/iron.jpg",
          title: "Iron Man ",
          released_year: "1963",
          description:
          "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism."
        },
        "hulk": {
          thumbnail: "./assets/thumbnails/hulk.jpg",
          title: "Hulk",
          released_year: "1962",
          description:
            "Scientist Bruce Banner is exposed to gamma radiation, which has its unique side effect. During his acts of resentments, Bruce transforms into an infuriated green monster."
        },
      };
    },
});