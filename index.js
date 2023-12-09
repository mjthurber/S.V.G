const { prompt } = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function generateLogo() {
  try {
    const responses = await prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Choose text (three letters max):',
        validate: function (value) {
          if (value.length > 3) {
            return 'Please enter three letters or less.';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Choose a text color keyword (OR a hexadecimal number):'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose a shape color keyword (OR a hexadecimal number):'
      }
    ]);

    const { text, textColor, shape, shapeColor } = responses;

    let logoShape;

    switch (shape) {
      case 'Circle':
        logoShape = new Circle();
        break;
      case 'Triangle':
        logoShape = new Triangle();
        break;
      case 'Square':
        logoShape = new Square();
        break;
      default:
        break;
    }

    logoShape.setText(text);
    logoShape.setTextColor(textColor);
    logoShape.setShapeColor(shapeColor);

    const svgContent = logoShape.render(); // Generate SVG content

    const fileName = `${text}_in_${shapeColor}.svg`; // Replace 'generated_logo.svg' with the desired filename
    
    const filePath = path.join(__dirname, 'examples', fileName);

    fs.writeFileSync(filePath, svgContent); // Write SVG content to file
    console.log('Generated logo! Now go make some money!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

generateLogo();
