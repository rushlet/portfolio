class PortfolioFilters {
    constructor() {
        console.log('constructing');
        this.filters = document.querySelectorAll('.filter-input');
        this.portfolioItems = document.querySelectorAll('.portfolio-item');
        this.filters.forEach((filter) => filter.addEventListener('change', this.filterItems.bind(this)));
        document.querySelector('#all').setAttribute('checked', true);
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
}

export default PortfolioFilters;