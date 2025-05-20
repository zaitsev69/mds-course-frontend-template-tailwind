import '../css/style.css';

import Alpine from 'alpinejs';

document.addEventListener('alpine:init', () => {
    Alpine.data('quantitySelector', function() {
      return {
        quantity: 0,


        increase() {
          if (this.quantity < 5) {
            this.quantity++;
          }
        },

        decrease() {
          if (this.quantity > 0) {
            this.quantity--;
          }
        }
      };
    });
});



window.Alpine = Alpine;
Alpine.start();

