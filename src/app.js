import PortfolioFilters from './components/portfolio/portfolio-filter';
import About from './components/about/about';

new About();
new PortfolioFilters();
const message = "HELLO!"
console.log(`This is written in es6 and working. ${message}`);

enhanceContent();

function enhanceContent() {
    document.querySelector('.portfolio-filters').style.display = 'block';
}