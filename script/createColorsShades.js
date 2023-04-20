/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const { prompt } = require('inquirer');
const ShadeGenerator = require('shade-generator');

const config = require(`../src/theme/colors/colors.json`);
const output = `src/theme/colors/colorsShades.json`;

/**
 * Start index and count of shades to generate
 * use start=9 and count=1 to generate only starting color
 */

/**
 * Generate shades for each color in the colors.json file
 * and write them to the colorsShades.json file
 */
function generateShades(start, count) {
  const colorShades = {};

  // Generate shades for all colors except primary
  Object.entries(config).forEach(([key, value]) => {
    const colorMap = ShadeGenerator.default.hue(value).shadesMap('hex');
    const colorArr = Object.values(colorMap).splice(start, count);
    colorShades[key] = colorArr;
  });

  fs.writeFileSync(output, JSON.stringify(colorShades, null, 2));
}

console.log('********** Generating Colors Shades **********');
console.log('Minimum start index is 0 and maximum is 18');
console.log('Enter start=3 and count=10 to generate 10 color shades');
console.log('Enter start=9 and count=1 to generate only starting color shade');

prompt([
  {
    type: 'number',
    name: 'start',
    message: 'Enter start index',
    default: 3,
  },
  {
    type: 'number',
    name: 'count',
    message: 'Enter shade count',
    default: 10,
  },
])
  .then(({ start, count, primaryStart, primaryCount }) => {
    generateShades(start, count, primaryStart, primaryCount);
    console.log(
      `Shades generated for ${count} colors starting at index ${start}`,
    );
  })
  .catch((err) => {
    console.log('Error generating shades: ', err);
  });
