class PortfolioFilters {
    constructor() {
        console.log('constructing');
        this.filters = document.querySelectorAll('.filter-input');
        this.portfolioItems = document.querySelectorAll('.portfolio-item');
        this.filters.forEach((filter) => filter.addEventListener('change', this.filterItems.bind(this)));
        document.querySelector('#all').setAttribute('checked', true);
        this.addDetailsEventListener();
    }

    getSelectedFilter() {
        return document.querySelector('input[name = "filter"]:checked').id;
    }

    filterItems() {
        const selectedFilter = this.getSelectedFilter();
        console.log('selected filter: ', selectedFilter);
        this.portfolioItems.forEach((item) => {
            (selectedFilter === 'all' || item.classList.contains(selectedFilter)) ? item.classList.remove('hide') : item.classList.add('hide');
        });
    }

    addDetailsEventListener() {
      const details = document.querySelectorAll('.portfolio-item--details');
      details.forEach((targetDetail) => {
        targetDetail.addEventListener('click', () => {
          // Close all the details that are not targetDetail.
          details.forEach((detail) => {
            if (detail !== targetDetail) {
              detail.removeAttribute('open');
            }
          });
        });
      });
    }
}

export default PortfolioFilters;
