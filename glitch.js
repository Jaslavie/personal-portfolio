class GlitchEffect {
  constructor(element, options = {}) {
    this.element = element;
    this.originalText = element.textContent;
    const isChaosText = this.originalText.trim() === "chaos into order.";
    
    // Create wrapper to maintain width
    this.wrapper = document.createElement('span');
    this.wrapper.style.display = 'inline-block';
    // this.wrapper.style.overflowX = 'hidden';
    // this.wrapper.style.whiteSpace = 'nowrap';
    // Store the original width
    this.originalWidth = element.getBoundingClientRect().width + 'px';
    this.wrapper.style.width = this.originalWidth;
    
    // Wrap the element content if not already wrapped
    if (!element.contains(this.wrapper)) {
      const content = element.textContent;
      element.textContent = '';
      this.wrapper.textContent = content;
      element.appendChild(this.wrapper);
    }

    this.originalStyles = isChaosText ? {
      fontFamily: "'EB Garamond', serif",
      fontStyle: "italic",
      fontWeight: "200",
      fontSize: "50px",
      display: 'inline-block'
    } : {
      font: window.getComputedStyle(element).font,
      display: 'inline-block'
    };
    
    this.options = {
      characters: "!@#$%^&*()_+:,.<>12",
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
