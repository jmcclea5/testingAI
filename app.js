const pages = {
  home: `
    <h1>Welcome to Our Site</h1>
    <p>This is the landing page of our simple site. Use the nav above to explore.</p>
  `,
  events: `
    <h1>Events</h1>
    <ul>
      <li>Event 1 - August 1st</li>
      <li>Event 2 - September 15th</li>
      <li>Event 3 - October 30th</li>
    </ul>
  `,
  about: `
    <h1>About Us</h1>
    <p>We are a small team passionate about building simple and beautiful web experiences.</p>
  `,
  contact: `
    <h1>Contact Us</h1>
    <p>Email: contact@example.com</p>
    <p>Phone: 123-456-7890</p>
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
