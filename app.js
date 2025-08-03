const pages = {
  home: `
    <!-- ✅ ADDED: Home Page Content -->
    <section>
      <h1>Welcome to Our Site</h1>
      <p>This is the landing page of our simple site. Use the nav above to explore.</p>
    </section>

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
      <h1>Events</h1>
      <ul>
        <li>Event 1 - August 1st</li>
        <li>Event 2 - September 15th</li>
        <li>Event 3 - October 30th</li>
      </ul>
    </section>
  `,
  about: `
    <section>
      <h1>About Us</h1>
      <p>We are a small team passionate about building simple and beautiful web experiences.</p>
    </section>
  `,
  contact: `
    <section>
      <h1>Contact Us</h1>
      <p>Email: contact@example.com</p>
      <p>Phone: 123-456-7890</p>
    </section>
  `
};

function navigate(page) {
  const content = document.getElementById('content');
  content.innerHTML = pages[page] || pages['home'];
}

// Load initial content
window.onload = () => {
  const hash = location.hash.replace('#', '') || 'home';
  navigate(hash);
};
