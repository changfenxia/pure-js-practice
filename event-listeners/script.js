window.addEventListener('load', function() {
        const btn = document.querySelector('.show');
        const h1 = document.querySelector('h1');
        const t = document.querySelector('.tall');

        btn.addEventListener('click', function() {
                //isn't going to work with arrow function
                //because it doesn't have 'this' context
                this.classList.toggle('btn');
                });

        window.onscroll = () => {
                if (scrollY > 1200) {
                        t.style.backgroundColor = 'aquamarine';
                } else if (scrollY < 1200) {
                        t.style.backgroundColor = 'purple';
                }
        }
});

//prevent default
form.onsubmit = function(e) {
        e.preventDefault();
        //now we can do something
}



