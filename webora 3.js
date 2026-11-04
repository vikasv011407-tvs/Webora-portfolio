/* =========================
   COPYRIGHT YEAR
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================
   MOBILE NAV
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

  });


  document
    .querySelectorAll(".nav-link")
    .forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

      });

    });

}


/* =====================================================
   ORIGINAL TYPING ANIMATION
   DO NOT CHANGE THIS LOGIC
===================================================== */

const typingElement =
  document.querySelector(".typing-text");

if (typingElement) {

  const words = [
    "brand stand out.",
    "ideas come alive.",
    "business grow.",
    "digital dreams shine."
  ];

  let wordIndex = 0;

  let characterIndex =
    words[0].length;

  let deleting = true;


  function typeEffect() {

    const currentWord =
      words[wordIndex];


    typingElement.textContent =
      currentWord.substring(
        0,
        characterIndex
      );


    let delay =
      deleting ? 45 : 85;


    if (deleting) {

      characterIndex--;


      if (characterIndex < 0) {

        deleting = false;

        characterIndex = 0;

        wordIndex =
          (wordIndex + 1)
          % words.length;

        delay = 350;

      }

    } else {

      characterIndex++;


      if (
        characterIndex >
        words[wordIndex].length
      ) {

        deleting = true;

        characterIndex =
          words[wordIndex].length;

        delay = 1500;

      }

    }


    setTimeout(
      typeEffect,
      delay
    );

  }


  typingElement.textContent =
    words[0];


  setTimeout(
    typeEffect,
    1500
  );

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "active"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================
   SKILL BARS
========================= */

const skills =
  document.querySelectorAll(
    ".skill-progress"
  );


const skillObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const width =
            entry.target.dataset.width;

          entry.target.style.width =
            width;

          skillObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.3
    }
  );


skills.forEach(skill => {

  skillObserver.observe(skill);

});


/* =========================
   SCROLL PROGRESS
========================= */

const progress =
  document.querySelector(
    ".scroll-progress"
  );


window.addEventListener(
  "scroll",
  () => {

    const scrollTop =
      window.scrollY;

    const documentHeight =
      document.documentElement
        .scrollHeight -
      window.innerHeight;


    const percentage =
      (scrollTop /
        documentHeight) *
      100;


    if (progress) {

      progress.style.width =
        percentage + "%";

    }

  }
);


/* =========================
   BACK TO TOP
========================= */

const backToTop =
  document.querySelector(
    ".back-to-top"
  );


window.addEventListener(
  "scroll",
  () => {

    if (!backToTop) return;


    if (window.scrollY > 500) {

      backToTop.classList.add(
        "show"
      );

    } else {

      backToTop.classList.remove(
        "show"
      );

    }

  }
);


if (backToTop) {

  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* =========================
   MOUSE GLOW
========================= */

const mouseGlow =
  document.querySelector(
    ".mouse-glow"
  );


window.addEventListener(
  "mousemove",
  event => {

    if (!mouseGlow) return;

    mouseGlow.style.left =
      event.clientX + "px";

    mouseGlow.style.top =
      event.clientY + "px";

  }
);


/* =========================
   PROJECT CARD TILT
========================= */

const projectCards =
  document.querySelectorAll(
    ".project-card"
  );


projectCards.forEach(card => {

  card.addEventListener(
    "mousemove",
    event => {

      if (window.innerWidth < 900)
        return;


      const rect =
        card.getBoundingClientRect();


      const x =
        event.clientX -
        rect.left;


      const y =
        event.clientY -
        rect.top;


      const centerX =
        rect.width / 2;


      const centerY =
        rect.height / 2;


      const rotateX =
        (y - centerY) / 35;


      const rotateY =
        (centerX - x) / 35;


      card.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;

    }
  );


  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform =
        "";

    }
  );

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll(
    "section[id]"
  );


window.addEventListener(
  "scroll",
  () => {

    let current = "";


    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 150;


      if (
        window.scrollY >=
        sectionTop
      ) {

        current =
          section.getAttribute("id");

      }

    });


    document
      .querySelectorAll(".nav-link")
      .forEach(link => {

        link.classList.remove(
          "active"
        );


        if (
          link.getAttribute("href") ===
          "#" + current
        ) {

          link.classList.add(
            "active"
          );

        }

      });

  }
);


/* =========================
   CONTACT FORM
========================= */

const contactForm =
  document.getElementById(
    "contactForm"
  );


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const name =
        document.getElementById(
          "name"
        ).value;


      const email =
        document.getElementById(
          "email"
        ).value;


      const project =
        document.getElementById(
          "project"
        ).value;


      const message =
        document.getElementById(
          "message"
        ).value;


      const subject =
        encodeURIComponent(
          "WEBORA Project Enquiry"
        );


      const body =
        encodeURIComponent(
          `Name: ${name}

Email: ${email}

Project: ${project}

Message:
${message}`
        );


      window.location.href =
        `mailto:?subject=${subject}&body=${body}`;

    }
  );

}


/* =========================
   REDUCED MOTION
========================= */

if (
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
) {

  document
    .querySelectorAll("*")
    .forEach(element => {

      element.style.animationDuration =
        "0.001ms";

      element.style.animationIterationCount =
        "1";

      element.style.scrollBehavior =
        "auto";

    });

}