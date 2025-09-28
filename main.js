 const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
      const btn = item.querySelector(".faq-question");
      btn.addEventListener("click", () => {
        // Close all other items first
        faqItems.forEach(i => {
          if (i !== item) i.classList.remove("active");
        });
        // Toggle current one
        item.classList.toggle("active");
      });
    });

    //animation codes

    AOS.init({
  duration: 1000, // animation duration in ms
  once: true,     // animation happens only once
});



    const hamburger = document.getElementById("hamburger");
    const sideNav = document.getElementById("sideNav");
    const icon = hamburger.querySelector("i");

    hamburger.addEventListener("click", () => {
      sideNav.classList.toggle("active");

      // Change icon between hamburger and X
      if (sideNav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times"); // X
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars"); // back to hamburger
      }
    });
