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
  <!-- ✅ Our Mission -->
  <section>
    <h2>Our Mission</h2>
    <p>
      Our mission is twofold: we host community wellness events and sporting activities to fundraise for our Good Neighbor Fund. 
 
SEM promotes health and wellness through sporting events such as road races, bike rides, walks, sports camps, clinics, and tournaments. Our mission is to inspire active lifestyles while fostering community engagement. 
 
All net proceeds from our events directly support our Good Neighbor Fund. This fund will benefit families and organizations in the greater Boston community, through initiatives such as shelter and food assistance, financial aid for medical needs, elderly support services, special needs programs, youth afterschool and educational outreach programs. Through these efforts, we aim to create a healthier, stronger, and more connected community.​
​
Smile Every Mile, Inc. (SEM) operates as a 501c non-profit organization serving Dorchester and Quincy.
    </p>
  </section>

  <!-- ✅ Meet the Team -->
  <section>
    <h2>Meet the Team</h2>
    <div class="team-grid">
    
      <div class="team-member">
          <img src="SEM-images/MichelleHeadshot.jpeg" alt="Michelle - Team Leader" />
          <h3>Michelle Cannon</h3>
          <p class="role">Board Member </p>
          <p class="description">Michelle is an education administration with 20 years experience in strategic, instructional, and program design at public and independent schools as well as educational non-profits, most recently in Boston Public schools. A former high school athlete (and Boston Latin School Athletics Hall of Fame honoree) who has coached in the community, she is a life-long Dorchester resident and lives there with her husband and two children.</p>
      </div>
      
      <div class="team-member">
          <img src="SEM-images/dereksPic.jpeg" alt="Derek Headshot" />
          <h3>Derek McCleary</h3>
          <p class="role">Founder & President </p>
          <p class="description">Derek is an SVP for TD Bank and has been working in banking and finance for 36 years.  He is also a 20+ year coach and life long volunteer. An entrepreneur, he has founded several companies in the sports industry and is passionate about the role sports play in youth development and society as a whole.  Derek has five children who have played high school and collegiate soccer and lives in Quincy (OFD). </p>
      </div>
      
      <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3>Rita Bailey</h3>
          <p class="role">Board Member</p>
          <p class="description">Rita is a Registered Nurse whose past experiences include working as a staff nurse at Brigham and Women’s Hospital and as a school nurse and Coordinator of Health Services at Quincy Public Schools. She was responsible for the Nursing Department and implementing the Health and Wellness Policy for the school district. Rita has run nine marathons and has participated in several triathlons. Rita has since retired and continues to stay active within the community. </p>
      </div>
      
      <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3>Christine Bailey</h3>
          <p class="role">Board Member</p>
          <p class="description">Christine has worked in the healthcare industry for 25 years and is a life long volunteer and a fundraising guru. She is a 4 year board member of Cedar Grove Neighborhood Association and prior president of Saint Brendan’s Parent Guild. She is currently employed at Boston Public Schools in the special education department. She was born and raised in Dorchester, where she lives with her husband, a Boston Police Sargent,  and their two children.</p>
      </div>
      
      <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3> Jared McCleary </h3>
          <p class="role"> Board Member </p>
          <p class="description">Jared ran his first Marathon at 19 and is a former division 1 soccer player.  He took to coaching after his playing career came to an end, with positions at UMass Amherst and Holy Cross, as well as at the youth level for the NE Revolution, Western MA Pioneers, Strikers United, and Boston Bolts.</p>
      </div>
      
      <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3>Shannon McCleary </h3>
          <p class="role">Chief People Officer</p>
          <p class="description">Shannon's passion knows no bounds, as 4 knee surgeries, 3 new ACLs, a few re-attached MCL, LCL, TCL, and PCL tendons have not been enough to stop her from playing soccer.  Her impressive Highschool soccer career, while hindered by injury, still earned her a roster spot on a college soccer team.  She now spends her time yelling at people on zoom meetings and is eager to find a way back into the athletics she loves so much.  </p>
      </div>
      
      <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3> Caitlin McCleary</h3>
          <p class="role">Social Media Coordinator </p>
          <p class="description">Caitlin is a former college soccer player, current travel team coach for the Dorchester Youth soccer, and avid runner (prior marathoner).  She has worked the last 10 years as a cardiology nurse.  She lives in Dorchester with her 4 children.</p>
      </div>

      <div class="team-member">
          <img src="SEM-images/SmileEveryMileLogo.jpeg" alt="Placeholder" />
          <h3>Tara McCleary </h3>
          <p class="role">Marketing Specialist</p>
          <p class="description"> Tara has a lot of friends </p>
      </div>

      
    </div>
  </section>
  `,
  
  contact: `
  <section>
    <h1>Contact Us</h1>
    <p>If you'd like to get in touch, please send us an email at 
      <a href="mailto:your@email.com">damccleary@yahoo.com</a>.
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
    </div>
  </section>
`,
};

function navigate(page) {
  const content = document.getElementById('content');
  content.innerHTML = pages[page] || pages['home'];
  setupCarouselAutoscroll();

  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth <= 768 && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
}
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

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

// Load initial content
window.onload = () => {
  const hash = location.hash.replace('#', '') || 'home';
  navigate(hash);
};
