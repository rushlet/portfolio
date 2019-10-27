import PortfolioFilters from './components/portfolio/portfolio-filter';
import About from './components/about/about';
import Testimonials from './components/testimonials/testimonials';

new About();
new PortfolioFilters();
new Testimonials();

enhanceContent();

function enhanceContent() {
    document.querySelector('.portfolio-filters').style.display = 'block';
    document.querySelector('.testimonials-button').style.display = 'block';
}
