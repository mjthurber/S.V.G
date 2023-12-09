const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle class', () => {
  test('render method should return SVG string for triangle with given colors and text', () => {
    const triangle = new Triangle();
    triangle.setText('ABC');
    triangle.setTextColor('red');
    triangle.setShapeColor('blue');

    const expectedSVG = `<svg width="300" height="200">
                            <polygon points="150,20 280,180 20,180" fill="blue" />
                            <text x="50%" y="50%" text-anchor="middle" fill="red">ABC</text>
                          </svg>`;

    expect(triangle.render()).toEqual(expectedSVG);
  });
});

describe('Circle class', () => {
  test('render method should return SVG string for circle with given colors and text', () => {
    const circle = new Circle();
    circle.setText('Hello');
    circle.setTextColor('green');
    circle.setShapeColor('yellow');

    const expectedSVG = `<svg width="300" height="200">
                            <circle cx="150" cy="100" r="80" fill="yellow" />
                            <text x="50%" y="50%" text-anchor="middle" fill="green">Hello</text>
                          </svg>`;

    expect(circle.render()).toEqual(expectedSVG);
  });
});

describe('Square class', () => {
  test('render method should return SVG string for square with given colors and text', () => {
    const square = new Square();
    square.setText('SVG');
    square.setTextColor('purple');
    square.setShapeColor('orange');

    const expectedSVG = `<svg width="300" height="200">
                            <rect x="50" y="50" width="200" height="200" fill="orange" />
                            <text x="50%" y="50%" text-anchor="middle" fill="purple">SVG</text>
                          </svg>`;

    expect(square.render()).toEqual(expectedSVG);
  });
});
