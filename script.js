// Fetch JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Get wrapper element
    const wrapper = document.getElementById('row');

    // Iterate over JSON data
    data.forEach(item => {
      // Create card element
      const card = document.createElement('div');
       card.classList.add("col-sm-6", "col-md-4", "col-lg-3", "gap-2", "gutter-3", "mg-bt");
      // Populate card content
      card.innerHTML = `
      <a href="${item.link}"> 
                <div class="card">
                <img src="${item.image}" alt="" id="thumbnail">
                <div class="info-wrapper">
                    <div class="uploader"><img src="${item.uploader}" alt=""></div>
                    <div class="thumbnail-info">
                    <span class="title">${item.title}</span>
                    <span class="episode-count">${item.episodeCount}</span>
                    <span class="year">${item.year}</span>
                    </div>
                </div>
                </div>
        </a>
      `;

      // Append card to wrapper
      wrapper.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

  window.onload = function() {
    // Get all cards in the row
    const cards = document.querySelectorAll('#card-row .card');
  
    // Get the maximum height among all cards
    const maxHeight = Math.max(...Array.from(cards).map(card => card.clientHeight));
  
    // Set the height of all cards to match the maximum height
    cards.forEach(card => {
      card.style.height = `${maxHeight}px`;
    });
  }

/*   // Wait for window to load
window.addEventListener("load", function () {
  // Get preloader element
  var preloader = document.querySelector(".preloader");
  
  // Hide preloader and show content
  preloader.style.display = "none";
  document.querySelector(".content").style.display = "block";
});
 */
window.addEventListener("load", function () {
  // Add a 5-second delay before hiding the preloader
  setTimeout(function() {
    // Get preloader element
    var preloader = document.querySelector(".preloader");
    // Hide preloader and show content
    preloader.style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, 5000); // 5000 milliseconds = 5 seconds
});