const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Agregar clases de animate.css
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    // Opcional: dejar de observar el elemento
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Se activa cuando el 10% del elemento es visible
            rootMargin: '0px 0px -50px 0px' // Se activa 50px antes de que aparezca
        });

        // Observar todos los elementos con la clase scroll-element
        document.querySelectorAll('.scroll-element').forEach(el => {
            observer.observe(el);
        });