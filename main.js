function mynav() {
  let bar = document.getElementById("bar");
  let nav = document.querySelector(".navigation");
  bar.onclick = () => {
    if (nav.style.right == "0%") {
      nav.style.right = "-50%";
      bar.src = "pic/menu.png";
    } else {
      nav.style.right = "0%";
      bar.src = "pic/x.png";
    }
  };
}
mynav();

function myHeader() {
  let header = document.getElementById("header");
  let lamp = document.getElementById("lamp");
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 0) {
      header.classList.add("active");
      lamp.src = "pic/blamp.png";
    } else {
      header.classList.remove("active");
      lamp.src = "pic/wlamp.png";
    }
  });
}
myHeader();

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      text: "Absolutely love the furniture! The quality and design are top-notch. Highly recommend!",
      author: "Sarah Johnson",
    },
    {
      text: "The best online furniture store! Fast delivery and great customer service.",
      author: "Mark Williams",
    },
    {
      text: "The craftsmanship is excellent. My living room looks stunning now!",
      author: "Emily Brown",
    },
    {
      text: "Great experience! The furniture is durable and elegant. Worth every penny!",
      author: "James Anderson",
    },
    {
      text: "I was skeptical at first, but the quality exceeded my expectations!",
      author: "Sophia Martinez",
    },
    {
      text: "Excellent customer service and stylish furniture. A great shopping experience!",
      author: "Michael Lee",
    },
    {
      text: "I love the eco-friendly materials used. It’s stylish and sustainable!",
      author: "Olivia Taylor",
    },
    {
      text: "A wonderful addition to my home. I get compliments on my new furniture all the time!",
      author: "Daniel White",
    },
  ];

  const testimonialGrid = document.querySelector(".testimonial-grid");
  const dotsContainer = document.querySelector(".dots");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const itemsPerPage = 4;

  function displayTestimonials() {
    testimonialGrid.innerHTML = "";
    for (let i = 0; i < itemsPerPage; i++) {
      let testimonialIndex = (currentIndex + i) % testimonials.length;
      const testimonial = testimonials[testimonialIndex];

      const box = document.createElement("div");
      box.classList.add("testimonial-box");

      box.innerHTML = `
                <p class="testimonial-text">"${testimonial.text}"</p>
                <h4 class="testimonial-author">- ${testimonial.author}</h4>
            `;

      testimonialGrid.appendChild(box);
    }
  }

  function showNext() {
    currentIndex = (currentIndex + itemsPerPage) % testimonials.length;
    displayTestimonials();
    updateDots();
  }

  function showPrevious() {
    currentIndex =
      (currentIndex - itemsPerPage + testimonials.length) % testimonials.length;
    displayTestimonials();
    updateDots();
  }

  function createDots() {
    dotsContainer.innerHTML = "";
    const numPages = Math.ceil(testimonials.length / itemsPerPage);
    for (let i = 0; i < numPages; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        currentIndex = i * itemsPerPage;
        displayTestimonials();
        updateDots();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle(
        "active",
        index === Math.floor(currentIndex / itemsPerPage)
      );
    });
  }

  prevBtn.addEventListener("click", showPrevious);
  nextBtn.addEventListener("click", showNext);

  setInterval(showNext, 5000); // Auto-slide every 5 seconds

  displayTestimonials();
  createDots();
});
