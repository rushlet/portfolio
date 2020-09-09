class About {
    constructor() {
        this.aboutShuffleBtn = document.querySelector('.about-content--img-shuffle');
        this.aboutImgs = document.querySelectorAll('.img-me');
        this.aboutShuffleBtn.addEventListener('click', this.shuffleImg.bind(this));
    }

    shuffleImg() {
        let selected = 0;
        let next = 0;
        this.aboutImgs.forEach((img, i) => {
            if (img.style.display === 'block') selected = i;
            img.style.display = 'none';
        });
        next = selected + 1;
        if (selected === this.aboutImgs.length - 1) next = 0;
        this.aboutImgs[next].style.display = 'block';
    }
}

export default About;