class GlitchEffect {
  constructor(element, options = {}) {
    this.element = element;
    this.originalText = element.textContent;
    const isChaosText = this.originalText.trim() === "chaos into order.";
    
    // Create canvas for text measurement
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    if (isChaosText) {
      // Special case for "chaos into order"
      context.font = "italic 200 50px 'EB Garamond', serif";
      this.originalWidth = context.measureText(this.originalText).width;
      
      this.originalStyles = {
        fontFamily: "'EB Garamond', serif",
        fontStyle: "italic",
        fontWeight: "200",
        fontSize: "50px",
        display: 'inline-block',
        width: `${this.originalWidth}px`
      };
    } else {
      // For regular links, get computed style
      const computedStyle = window.getComputedStyle(element);
      context.font = computedStyle.font;
      this.originalWidth = context.measureText(this.originalText).width;
      
      this.originalStyles = {
        font: computedStyle.font,
        fontFamily: computedStyle.fontFamily,
        fontSize: computedStyle.fontSize,
        fontWeight: computedStyle.fontWeight,
        fontStyle: computedStyle.fontStyle,
        letterSpacing: computedStyle.letterSpacing,
        textTransform: computedStyle.textTransform,
        color: computedStyle.color,
        display: 'inline-block',
        width: `${this.originalWidth}px`
      };
    }
    
    // Create wrapper to maintain width
    this.wrapper = document.createElement('span');
    this.wrapper.style.display = 'inline-block';
    this.wrapper.style.width = `${this.originalWidth}px`;
    
    
    // Wrap the element content
    if (!element.contains(this.wrapper)) {
      const content = element.textContent;
      element.textContent = '';
      this.wrapper.textContent = content;
      element.appendChild(this.wrapper);
    }
    
    this.options = {
      characters: "!@#$%^&*()_+:,.",
      speed: 50,
      duration: 150,
      fadeSpeed: 100,
      ...options
    };
    
    this.isGlitching = false;
    Object.assign(this.wrapper.style, this.originalStyles);
  }

  start() {
    if (this.isGlitching) return;
    this.isGlitching = true;
    
    let iterations = 0;
    const maxIterations = 4;

    const interval = setInterval(() => {
      this.wrapper.textContent = this.originalText
        .split("")
        .map(char => char === " " ? char : this.options.characters[
          Math.floor(Math.random() * this.options.characters.length)
        ])
        .join("");

      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(interval);
        this.wrapper.textContent = this.originalText;
        this.isGlitching = false;
      }
    }, this.options.speed);
  }

  stop() {
    this.isGlitching = false;
    this.wrapper.textContent = this.originalText;
    Object.assign(this.wrapper.style, this.originalStyles);
  }
}
