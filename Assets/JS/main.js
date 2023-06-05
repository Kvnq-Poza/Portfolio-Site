(function($){


  "use strict";

    // Parallaxmouse js
    
    function parallaxMouse() {
      if ($('#parallax').length) {
          var scene = document.getElementById('parallax');
          var parallax = new Parallax(scene);
      };
  };
  parallaxMouse();

}(jQuery));

