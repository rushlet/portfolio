class Testimonials {
    constructor() {
        this.testimonials = document.querySelectorAll('.testimonial');
        this.nextButton = document.querySelector('.testimonials-button.next');
        this.previousButton = document.querySelector('.testimonials-button.previous');
        this.testimonials.forEach((el, i) => {
          if (i !== 0) el.classList.add('off-screen');
        })
        this.nextButton.addEventListener('click', this.showNextTestimonial.bind(this));
        this.previousButton.addEventListener('click', this.showPreviousTestimonial.bind(this));
    }

    getCurrentTestimonialIndex() {
      let currentTestimonial;
      this.testimonials.forEach((testimonial, i) => {
        if (!testimonial.classList.contains('off-screen')) {
          this.currentTestimonialIndex = i;
          this.currentTestimonial = testimonial;
        }
      });
      return this.currentTestimonialIndex;
    }

    showNextTestimonial() {
      const currentTestimonialIndex = this.getCurrentTestimonialIndex();
      this.testimonials.forEach((el, i) => {
        el.classList.add('off-screen');
        if (currentTestimonialIndex === this.testimonials.length - 1) {
          if (i === 0) el.classList.remove('off-screen');
        }
        else {
          if (i === currentTestimonialIndex + 1) el.classList.remove('off-screen');
        }
      });
    }

    showPreviousTestimonial() {
      const currentTestimonialIndex = this.getCurrentTestimonialIndex();
      this.testimonials.forEach((el, i) => {
        el.classList.add('off-screen');
        if (currentTestimonialIndex === 0) {
          if (i === this.testimonials.length - 1) el.classList.remove('off-screen');
        }
        else {
          if (i === currentTestimonialIndex - 1) el.classList.remove('off-screen');
        }
      });
    }
}

export default Testimonials;
