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