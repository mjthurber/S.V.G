// shapes.js

class Shape {
    constructor() {
      this.text = '';
      this.textColor = 'black';
      this.shapeColor = 'transparent';
    }
  
    setText(text) {
      this.text = text.substring(0, 3); // Consider only the first three characters
    }
  
    setTextColor(color) {
      this.textColor = color.toLowerCase(); // Convert color input to lowercase
    }
  
    setShapeColor(color) {
      this.shapeColor = color.toLowerCase(); // Convert color input to lowercase
    }
  
    render() {
      // Default render method for Shape class (to be overridden by subclasses)
      return ''; // Placeholder return statement
    }
  }
  
  class Triangle extends Shape {
    constructor() {
      super();
      // Triangle-specific properties (if any)
    }
  
    render() {
      // Implement rendering logic for a triangle SVG
      return `<svg width="300" height="200">
                <polygon points="150,20 280,180 20,180" fill="${this.shapeColor}" />
                <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
              </svg>`;
    }
  }
  
  class Circle extends Shape {
    constructor() {
      super();
      // Circle-specific properties (if any)
    }
  
    render() {
      // Implement rendering logic for a circle SVG
      return `<svg width="300" height="200">
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
              </svg>`;
    }
  }
  
  class Square extends Shape {
    constructor() {
      super();
      // Square-specific properties (if any)
    }
  
    render() {
      // Implement rendering logic for a square SVG
      return `<svg width="300" height="200">
                <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
                <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
              </svg>`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  