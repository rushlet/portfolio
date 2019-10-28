class Portfolio {
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
          if (!targetDetail.hasAttribute('open')) {
            // if opening detail
            // calculate height of content & add this as margin to detail el
            setTimeout(() => {
              const height = targetDetail.querySelector('.details--container').offsetHeight;
              console.log('height:', height);
              targetDetail.style.marginBottom = `${height + 24}px`;
            }, 100);
          }
          else {
            targetDetail.style.marginBottom = '0px';
          }
          // Close all the details that are not targetDetail.
          details.forEach((detail) => {
            if (detail !== targetDetail) {
              detail.removeAttribute('open');
              detail.style.marginBottom = '0px';
            }
          });
        });
      });
    }
}

export default Portfolio;
