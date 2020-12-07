$("body > header > div.mainHeader").after('<nav class="new-nav-bar"> <section id="logo"> <img src="https://www.invespcro.com/wp-content/themes/invesp/assets/images/invesp-logo-update.png" width="170" height="auto" alt="Invesp" class="mt-1" /> </section> <div class="nav-container"> <a title="Home" href="https://www.invespcro.com/" class="nav-link">Home</a> <a title="About" href="https://www.invespcro.com/about/" class="nav-link">About</a> <a title="Blog" href="https://www.invespcro.com/blog/" class="nav-link">Blog</a> <a title="Online Course" href="https://academy.invespcro.com/courses/conversion-optimization-mastery" class="nav-link">Online Course</a> <a title="Contact Us" href="https://offer.invesp.com/request/" class="nav-link">Contact Us</a> <section id="search-bt"> <!-- <div id="sb-search" class="sb-search"> <form> <input class="sb-search-input" placeholder="e.g. Conversion Optimization" type="search" value="" name="s" id="search"> <input class="sb-search-submit" type="submit" value="Search"> <span class="sb-icon-search"></span> </form> </div> --> </section> </div> </nav>');
$("body > div.container > div > div > div.mainSidebar > div > div.widget_text.newsletter > div > div > section.side-bar_speaker-images > section.side-bar_jakub > img").css("cssText", "top: 97px !important;");

$(function () {
    $(document).scroll(function () {
      var $nav = $(".new-nav-bar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $(".nav-container").toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $(".newsletter").toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $(".side-bar_jakub-img").toggleClass('scrolled', $(this).scrollTop() > $nav.height()) > $("body > div.container > div > div > div.mainSidebar > div > div.widget_text.newsletter > div > div > section.side-bar_speaker-images > section.side-bar_jakub > img").css("cssText", "top: 190px !important;");;
    });
  });