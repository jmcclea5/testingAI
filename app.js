const pages = {
  home: `
    <!-- ✅ ADDED: Carousel Section -->
    <section>
      <h2>Upcoming Events</h2>
      <div class="carousel">
        <div class="carousel-item" onclick="navigate('events')">
          <img src="https://via.placeholder.com/300x200?text=Event+1" alt="Event 1">
        </div>
        <div class="carousel-item" onclick="navigate('events')">
          <img src="https://via.placeholder.com/300x200?text=Event+2" alt="Event 2">
        </div>
        <div class="carousel-item" onclick="navigate('events')">
          <img src="https://via.placeholder.com/300x200?text=Event+3" alt="Event 3">
        </div>
      </div>
    </section>

    <!-- ✅ ADDED: About Section -->
    <section>
      <h2>About Smile Every Mile</h2>
      <p>Our mission is to inspire and support athletes at every level by celebrating their achievements and encouraging perseverance through every mile.</p>
    </section>

    <!-- ✅ ADDED: Athlete Highlights -->
    <section>
      <h2>Smile Every Mile Athletes</h2>
      <div class="athletes-grid">
        <div class="athlete-card">
          <img src="https://via.placeholder.com/150?text=Athlete+1" alt="Athlete 1" />
          <p>Athlete 1</p>
        </div>
        <div class="athlete-card">
          <img src="https://via.placeholder.com/150?text=Athlete+2" alt="Athlete 2" />
          <p>Athlete 2</p>
        </div>
        <div class="athlete-card">
          <img src="https://via.placeholder.com/150?text=Athlete+3" alt="Athlete 3" />
          <p>Athlete 3</p>
        </div>
        <div class="athlete-card">
          <img src="https://via.placeholder.com/150?text=Athlete+4" alt="Athlete 4" />
          <p>Athlete 4</p>
        </div>
      </div>
    </section>
  `,
  
  events: `
  <section>
    <h1>Upcoming Events</h1>
    <div class="event-grid">
      ${[1, 2, 3].map(i => `
        <div class="event-card">
          <img src="https://via.placeholder.com/300x180?text=Upcoming+Event+${i}" alt="Upcoming Event ${i}" />
          <h3>Upcoming Event ${i}</h3>
          <p class="date">Date: 2025-0${i + 7}-01</p>
          <p class="description">Brief details about upcoming event ${i}, including highlights or goals.</p>
        </div>
      `).join('')}
    </div>
  </section>

  <section>
    <h2>Past Events</h2>
    <div class="event-grid">
      ${[1, 2, 3].map(i => `
        <div class="event-card">
          <img src="https://via.placeholder.com/300x180?text=Past+Event+${i}" alt="Past Event ${i}" />
          <h3>Past Event ${i}</h3>
          <p class="date">Date: 2025-0${i + 3}-15</p>
          <p class="description">Short recap of past event ${i}, including achievements or outcomes.</p>
        </div>
      `).join('')}
    </div>
  </section>
  `,
  
  about: `
    <section>
    <h1>About Us</h1>
    <p>We are a small team passionate about building simple and beautiful web experiences.</p>
  </section>

  <!-- ✅ Our Mission -->
  <section>
    <h2>Our Mission</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in luctus nunc. 
      Nullam vitae tortor vel leo facilisis interdum. Pellentesque eu erat at dui porttitor 
      dictum vel nec sapien. Integer ut ultrices justo.
    </p>
  </section>

  <!-- ✅ Meet the Team -->
  <section>
    <h2>Meet the Team</h2>
    <div class="team-grid">
      ${[...Array(8)].map((_, i) => `
        <div class="team-member">
          <img src="https://via.placeholder.com/150?text=Team+${i + 1}" alt="Team Member ${i + 1}" />
          <h3>Member ${i + 1}</h3>
          <p class="role">Role ${i + 1}</p>
          <p class="description">Short description about team member ${i + 1} and their contribution to the project.</p>
        </div>
      `).join('')}
    </div>
  </section>
  `,
  
  contact: `
  <section>
    <h1>Contact Us</h1>
    <p>If you'd like to get in touch, please send us an email at 
      <a href="mailto:your@email.com">your@email.com</a>.
    </p>
  </section>

  <section>
    <h2>Support Our Mission</h2>
    <p>Your donations help us continue encouraging athletes and organizing community events.</p>
    <div class="donate-options">
      <div class="donate-card">
        <h3>Donate via PayPal</h3>
        <p><a href="#">paypal.me/yourcharity</a></p>
      </div>
      <div class="donate-card">
        <h3>Donate via Venmo</h3>
        <p><a href="#">@your-venmo-handle</a></p>
      </div>
      <div class="donate-card">
        <h3>Bank Transfer</h3>
        <p>Routing #: 123456789<br>Account #: 987654321</p>
      </div>
    </div>
  </section>
`,
};

function navigate(page) {
  const content = document.getElementById('content');
  content.innerHTML = pages[page] || pages['home'];
  setupCarouselAutoscroll();
}

function setupCarouselAutoscroll() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  let scrollAmount = 0;
  const scrollStep = 320; // pixels
  const scrollInterval = 3000; // ms

  setInterval(() => {
    if (!carousel) return;
    scrollAmount += scrollStep;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    }
    carousel.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, scrollInterval);
}

// Load initial content
window.onload = () => {
  const hash = location.hash.replace('#', '') || 'home';
  navigate(hash);
};
