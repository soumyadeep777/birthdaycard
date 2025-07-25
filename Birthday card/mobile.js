let highestZ = 1;

class Paper {
  constructor() {
    this.holdingPaper = false;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.currentPaperX = 0;
    this.currentPaperY = 0;
    this.prevTouchX = 0;
    this.prevTouchY = 0;
    this.velX = 0;
    this.velY = 0;
    this.rotation = Math.random() * 30 - 15;
  }

  init(paper) {
    paper.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (this.holdingPaper) return;
      this.holdingPaper = true;

      paper.style.zIndex = highestZ++;
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
      this.prevTouchX = this.touchStartX;
      this.prevTouchY = this.touchStartY;
    }, { passive: false });

    paper.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (!this.holdingPaper) return;

      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;

      this.velX = touchX - this.prevTouchX;
      this.velY = touchY - this.prevTouchY;

      this.currentPaperX += this.velX;
      this.currentPaperY += this.velY;

      paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px) rotate(${this.rotation}deg)`;

      this.prevTouchX = touchX;
      this.prevTouchY = touchY;
    }, { passive: false });

    paper.addEventListener('touchend', () => {
      this.holdingPaper = false;
    });
  }
}

window.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('DOMContentLoaded', () => {
  const papers = Array.from(document.querySelectorAll('.paper'));
  papers.forEach(paper => {
    const p = new Paper();
    p.init(paper);
  });
});




/*let highestZ = 1;

class Paper {
  constructor() {
    this.holdingPaper = false;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.currentPaperX = 0;
    this.currentPaperY = 0;
    this.prevTouchX = 0;
    this.prevTouchY = 0;
    this.velX = 0;
    this.velY = 0;
    this.rotation = Math.random() * 30 - 15;
  }

  init(paper) {
    paper.addEventListener('touchstart', (e) => {
      e.preventDefault(); // prevent scrolling
      if (this.holdingPaper) return;
      this.holdingPaper = true;

      paper.style.zIndex = highestZ++;
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
      this.prevTouchX = this.touchStartX;
      this.prevTouchY = this.touchStartY;
    }, { passive: false }); // allow preventDefault

    paper.addEventListener('touchmove', (e) => {
      e.preventDefault(); // prevent scroll
      if (!this.holdingPaper) return;

      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;

      this.velX = touchX - this.prevTouchX;
      this.velY = touchY - this.prevTouchY;

      this.currentPaperX += this.velX;
      this.currentPaperY += this.velY;

      paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px) rotate(${this.rotation}deg)`;

      this.prevTouchX = touchX;
      this.prevTouchY = touchY;
    }, { passive: false });

    paper.addEventListener('touchend', (e) => {
      this.holdingPaper = false;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const papers = Array.from(document.querySelectorAll('.paper'));
  papers.forEach(paper => {
    const p = new Paper();
    p.init(paper);
  });
});*/
