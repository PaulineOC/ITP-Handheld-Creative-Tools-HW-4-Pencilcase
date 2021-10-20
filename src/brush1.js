import "./enums";

import { getRandomInt, BODY_IMGS } from "./enums";

function generateRandomPerson() {
  const randomBodyInd = getRandomInt(0, BODY_IMGS.length);

  /*
  const randomHairInd = getRandomInt(0, Object.keys(HAIR_URLS_TO_IMGS).length);

  const randomTopInd = getRandomInt(0, Object.keys(TOP_URLS_TO_IMGS).length);
  const randomBottomsInd = getRandomInt(
    0,
    Object.keys(BOTTOMS_URLS_TO_IMGS).length
  );
  const randomShoesInd = getRandomInt(
    0,
    Object.keys(SHOES_URLS_TO_IMGS).length
  );

  const randomHair = HAIR_URLS_TO_IMGS[randomHairInd];
  const randomTop = TOP_URLS_TO_IMGS[randomTopInd];
  const randomBottoms = BOTTOMS_URLS_TO_IMGS[randomBottomsInd];
  const randomShoes = SHOES_URLS_TO_IMGS[randomShoesInd];

  const hasGlasses = getRandomInt(0, 2);
  const randomGlassesInd =
    hasGlasses === 1
      ? getRandomInt(0, Object.keys(GLASSES_URLS_TO_IMGS).length)
      : null;
  const randomGlasses =
    hasGlasses === 1 ? GLASSES_URLS_TO_IMGS[randomGlassesInd] : null;

  */

  const randomBody = BODY_IMGS[randomBodyInd];

  const test = {
    body: randomBody
    /*
    hair: randomHair,
    top: randomTop,
    bottom: randomBottoms,
    shoes: randomShoes,
    hasGlasses: hasGlasses,
    glasses: randomGlasses
    */
  };
  console.log(test);
  return test;
}

function drawPerson(ctx, x, y) {
  const person = generateRandomPerson();

  console.log(person.body);
  //body

  // var image = new Image(); // see note on creating an image
  // image.src = "./assets/people/1-bodies/5.png";
  // image.crossOrigin = "anonymous";

  ctx.drawImage(person.body, x, y, 16, 16);
  //hair

  /* 
  ctx.drawImage(person.hair, x, y - 10, 16, 16);
  //glasses?
  if (person.hasGlasses === 1) {
    ctx.drawImage(person.glasses, x, y - 5, 16, 16);
  }
  //top
  ctx.drawImage(person.top, x, y + 5, 16, 16);
  //bottoms
  ctx.drawImage(person.bottom, x, y + 10, 16, 16);
  //shoes
  ctx.drawImage(person.shoes, x, y + 15, 16, 16);

  */
}

module.exports = {
  drawPerson,
  generateRandomPerson
};
