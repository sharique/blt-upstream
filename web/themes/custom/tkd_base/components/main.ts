/**
 * @file
 * Added handler to Drop down menu.
 */

((Drupal) => {
  Drupal.behaviors.tkd_dropdownMenu = {
    attach(context, settings) {
      const toggle = document.querySelector('.dropdown-item a.dropdown-toggle');
      if (toggle != null) {
        toggle.addEventListener('click', function (e) {
          // document.querySelector(this).next('ul').toggle();
          e.stopPropagation();
          e.preventDefault();
        });
      }
    },
  };
})(Drupal);
