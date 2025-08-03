const pages = {
  home: `
    <!-- ✅ ADDED: Carousel Section -->
    <section>
      <h2>Upcoming Events</h2>
      <div class="carousel">
        <div class="carousel-item" onclick="navigate('events')">
          <img src="SEM-images/MarathonMania.png" alt="Marathon Mania">
        </div>
        <div class="carousel-item" onclick="navigate('events')">
          <img src="SEM-images/polarPlunge2025.jpg" alt="Polar Plunge"> 
        </div>
        <div class="carousel-item" onclick="navigate('events')">
          <img src="SEM-images/stockPebbles.png" alt="Beach Yoga">
        </div>
        <div class="carousel-item" onclick="navigate('events')">
          <img src="SEM-images/coedSoccerTeam.jpg" alt="coed Soccer Tournament">
        </div>
      </div>
    </section>

    <!-- ✅ ADDED: About Section -->
    <section>
      <h2>About Smile Every Mile</h2>
      <p> Get to Know Us: ​Our story is simple. Founded in October 2024, we are a group connected through our fitness journeys, who want to help our communities of Quincy and Dorchester.  Spanning collegiate sports, running marathons, coaching, and so much more; our journeys have lead us all here.  What better way for us to help families and support our neighborhood than to create opportunities for us to gather in community for active events and raise money for good causes. </p>
    </section>

    <!-- ✅ ADDED: Athlete Highlights -->
    <section>
      <h2>Smile Every Mile Athletes</h2>
      <div class="athletes-grid">
        <div class="athlete-card">
          <img src="SEM-images/TaraSoccerPic.jpg" alt="Tara McCleary" />
          <p>Tara McCleary</p>
        </div>
        <div class="athlete-card">
          <img src="SEM-images/MichelleHeadshot.jpeg" alt="Michelle Cannon" />
          <p>Michelle Cannon</p>
        </div>
        <div class="athlete-card">
          <img src="SEM-images/dereksPic.jpeg" alt="Derek McCleary" />
          <p>Derek McCleary</p>
        </div>
        <div class="athlete-card">
          <img src="SEM-images/michellePic.jpeg" alt="Megan Cormican" />
          <p>Megan Cormican</p>
        </div>
      </div>
    </section>
  `,
  
  events: `
  <section>
    <h1>Upcoming Events</h1>
    <div class="event-grid">
       <div class="event-card">
          <img src="SEM-images/MarathonMania.png" alt="Marathon Mania" />
          <h3>Marathon Mania</h3>
          <p class="date">Date: 2025-08-01</p>
          <p class="description">Join us to support our group of Marathon runners this year!</p>
      </div>
      
      <div class="event-card">
          <img src="SEM-images/stockPebbles.png" alt="Beach Yoga" />
          <h3>Beach Yoga</h3>
          <p class="date">Date: 2025-09-10</p>
          <p class="description">Experience the thrill of free yoga on the beach</p>
      </div>
      
      <div class="event-card">
          <img src="SEM-images/coedSoccerTeam.jpg" alt="Coed Soccer Tournament" />
          <h3>Coed Soccer Tournament</h3>
          <p class="date">Date: 2025-10-05</p>
          <p class="description">Teams compete in a friendly community soccer event. Fun for all ages!</p>
      </div>
  </div>
  </section>

  <section>
    <h2>Past Events</h2>
    <div class="event-grid">
       <div class="event-card">
          <img src="SEM-images/MarathonMania.png" alt="Marathon Mania" />
          <h3>Marathon Mania</h3>
          <p class="date">Date: 2025-08-01</p>
          <p class="description">Join us to support our group of Marathon runners this year!</p>
      </div>
      
      <div class="event-card">
          <img src="SEM-images/stockPebbles.png" alt="Beach Yoga" />
          <h3>Beach Yoga</h3>
          <p class="date">Date: 2025-09-10</p>
          <p class="description">Experience the thrill of free yoga on the beach</p>
      </div>
      
      <div class="event-card">
          <img src="SEM-images/polarPlunge2025.jpg" alt="Polar Plunge" />
          <h3>Polar Plunge</h3>
          <p class="date">Date: 2025-10-05</p>
          <p class="description">Teams compete in a friendly community soccer event. Fun for all ages!</p>
      </div>
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
