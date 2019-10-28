import Portfolio from './components/portfolio/portfolio';
import About from './components/about/about';
import Testimonials from './components/testimonials/testimonials';

new About();
new Portfolio();
new Testimonials();

enhanceContent();

function enhanceContent() {
    document.querySelector('.portfolio-filters').style.display = 'block';
    document.querySelectorAll('.testimonials-button').forEach((btn) => {
      btn.style.display = 'block';
    });
    document.querySelectorAll('.no-js').forEach((el) => {
      el.classList.remove('no-js');
    });
}
