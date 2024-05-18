/* --------------------------------------------------
PROJECT FILTER
-------------------------------------------------- */
const prjCard = document.querySelectorAll(".project-card[data-category]");
const prjFilterBtn = document.querySelectorAll(".projects-filter abbr");

prjFilterBtn.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      let filterVal = e.target.getAttribute("id");

      prjFilterBtn.forEach((btn) => {
         btn.classList.remove("active");
         e.target.classList.add("active");
      });

      prjCard.forEach((prj) => {
         let cardFilter = prj.getAttribute("data-category");
         prj.style.display = "none";

         if (cardFilter.includes(`${filterVal}`)) {
            prj.style.display = `block`;
         }
      });
   });
});

const mainSection = document.querySelectorAll("section[id");
const navLinks = document.querySelectorAll(".nav-links a");

const mainSectionObserver = new IntersectionObserver(
   (entries) => {
      entries.forEach((entry) => {
         let secId = entry.target.getAttribute("id");
         // console.log(entry, secId);

         if (entry.isIntersecting) {
            navLinks.forEach((link) => {
               link.classList.remove("active");
            });

            document.querySelectorAll(`.nav-links a[href*="${secId}"]`).forEach((el) => {
               el.classList.add("active");
            });
         }
      });
   },
   {
      threshold: 0.6,
   }
);

mainSection.forEach((el) => mainSectionObserver.observe(el));

let menuToggleBtn = document.querySelectorAll(".mob-menu-tog");
let mobileMenu = document.querySelector(".mobile-menu");
let mobMenuLinks = document.querySelectorAll(".mobile-menu .nav-links a");

menuToggleBtn.forEach((btn) => {
   btn.addEventListener("click", () => {
      btn.classList.toggle("show");
      mobileMenu.classList.toggle("show");
   });
});
mobMenuLinks.forEach((btn) => {
   btn.addEventListener("click", () => {
      menuToggleBtn.forEach((btn) => {
         btn.classList.remove("show");
      });
      mobileMenu.classList.remove("show");
   });
});
