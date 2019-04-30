class PortfolioFilters {
    constructor() {
        this.filters = document.querySelectorAll('.filter-input');
        this.portfolioItems = document.querySelectorAll('.portfolio-item');
        this.test = 'hello';
        this.filters.forEach((filter) => {
            console.log('filter', filter);
            console.log('test', this.test);
            filter.addEventListener('change', this.filterItems.bind(this));
        });
    }

    getSelectedFilter() {
        return document.querySelector('input[name = "filter"]:checked').id;
    }

    showItem(item) {
        item.classList.add('show');
        item.classList.remove('hide');
    }

    hideItem(item) {
        item.classList.remove('show');
        item.classList.add('hide');
    }

    filterItems() {
        const selectedFilter = this.getSelectedFilter();
        this.portfolioItems.forEach((item) => {
            if (selectedFilter === 'all' || item.classList.contains(selectedFilter)) {
                this.showItem(item);
            }
            else {
                this.hideItem(item);
            }
        });

    }
}

export default PortfolioFilters;