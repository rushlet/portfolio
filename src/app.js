import Portfolio from './components/portfolio/portfolio';
import About from './components/about/about';
import Testimonials from './components/testimonials/testimonials';

new About();
new Portfolio();
new Testimonials();

enhanceContent();

function enhanceContent() {
    const filters = document.querySelector('.portfolio-filters');
    const testimonialButtons = document.querySelectorAll('.testimonials-button');
    const tweets = document.querySelectorAll('.tweet')
    const els = [filters, ...testimonialButtons, ...tweets];
    els.forEach((el) => {
      el.style.display = 'block';
    });
    document.querySelectorAll('.no-js').forEach((el) => {
      el.classList.remove('no-js');
    });
}
