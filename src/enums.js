const BRUSHES = Object.freeze({
  HAND_HOLDING: "HAND_HOLDING"
});

// Load assets
const BODY_IMGS = [
  "assets/1-bodies/bod1.png",
  "assets/1-bodies/2.png",
  "assets/1-bodies/3.png",
  "assets/1-bodies/4.png",
  "assets/1-bodies/5.png"
].map((url) => {
  const img = new Image();
  img.src = url;
  //img.crossOrigin = "anonymous";
  return img;
});

/*



const HAIR_URLS = [];
const setupHair = () => {
  for (let i = 0; i < 140; i++) {
    const url = `assets/people/2-hair/hair-${i}.png`;
    HAIR_URLS.push(url);
  }

  HAIR_URLS.map((url) => {
    const img = new Image();
    img.src = url;
    img.crossOrigin = "anonymous";
    return img;
  });
};

const GLASSES_URLS = [
  "assets/people/3-glasses/glasses-0.png",
  "assets/people/3-glasses/glasses-1.png",
  "assets/people/3-glasses/glasses-2.png",
  "assets/people/3-glasses/glasses-3.png",
  "assets/people/3-glasses/glasses-4.png"
];
let GLASSES_URLS_TO_IMGS = {};
const setupGlasses = () => {
  GLASSES_URLS.forEach((url, ind) => {
    const img = new Image();
    img.src = url;
    img.crossOrigin = "anonymous";
    GLASSES_URLS_TO_IMGS[ind] = img;
  });
};

const TOP_URLS = [];
let TOP_URLS_TO_IMGS = {};
const setupTops = () => {
  for (let i = 0; i < 50; i++) {
    const url = `assets/people/4-top/top-${i}.png`;
    TOP_URLS.push(url);
  }
  if (TOP_URLS.length !== 50) {
    console.log(TOP_URLS.length);
    return;
  }

  TOP_URLS.forEach((url, ind) => {
    const img = new Image();
    img.src = url;
    img.crossOrigin = "anonymous";
    TOP_URLS_TO_IMGS[ind] = img;
  });
};

const BOTTOMS_URLS = [];
let BOTTOMS_URLS_TO_IMGS = {};
const setupBottoms = () => {
  for (let i = 0; i < 22; i++) {
    const url = `assets/people/5-bottoms/bottoms-${i}.png`;
    BOTTOMS_URLS.push(url);
  }
  if (BOTTOMS_URLS.length !== 22) {
    console.log(BOTTOMS_URLS.length);
    return;
  }

  BOTTOMS_URLS.forEach((url, ind) => {
    const img = new Image();
    img.src = url;
    img.crossOrigin = "anonymous";
    BOTTOMS_URLS_TO_IMGS[ind] = img;
  });
};

const SHOES_URLS = [
  "assets/people/6-shoes/shoes-0.png",
  "assets/people/6-shoes/shoes-1.png",
  "assets/people/6-shoes/shoes-2.png",
  "assets/people/6-shoes/shoes-3.png",
  "assets/people/6-shoes/shoes-4.png",
  "assets/people/6-shoes/shoes-5.png",
  "assets/people/6-shoes/shoes-6.png",
  "assets/people/6-shoes/shoes-7.png",
  "assets/people/6-shoes/shoes-8.png",
  "assets/people/6-shoes/shoes-9.png",
  "assets/people/6-shoes/shoes-10.png",
  "assets/people/6-shoes/shoes-11.png"
];
let SHOES_URLS_TO_IMGS = {};
const setupShoes = () => {
  SHOES_URLS.forEach((url, ind) => {
    const img = new Image();
    img.src = url;
    img.crossOrigin = "anonymous";
    SHOES_URLS_TO_IMGS[ind] = img;
  });
};

*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

module.exports = {
  BRUSHES,
  getRandomInt,
  BODY_IMGS
  /*
  HAIR_URLS_TO_IMGS,
  TOP_URLS_TO_IMGS,
  BOTTOMS_URLS_TO_IMGS,
  SHOES_URLS_TO_IMGS,
  GLASSES_URLS_TO_IMGS
  */
};
