// used this method based off a conversation thread on piazza because though my image path was correct the images were not loading . i followed teh instruction posted by a tutor 
import images from './images/podcast (philosophy).png';
console.log(images)
//JS to handle the slide out form which works by making the form change to 'active status' which then activated the transaltion applied in css file
const addTitleButton = document.querySelector('.button-primary');
const formContainer = document.getElementById('form-container');

addTitleButton.addEventListener('click', function () {
  formContainer.classList.toggle('active');
});
//close button does the opposite by changing status back to inactive and getting teh window to slid out 
const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
  formContainer.classList.remove('active');
});

// JS to handle the star rating on the form where the stars fill in up to the clicked star. 
//payttern derived from Chatgpt
const stars = document.querySelectorAll('.star');

// Add a click event listener to each star
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // Toggle the active class on the clicked star
    const rating = index + 1;
    // Toggle the active class on the stars up to the clicked star
    stars.forEach((s, i) => {
      if (i < rating) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
    // Get the grid item containing the star
    const gridItem = star.closest('.grid-item');
    if (gridItem) {
      // Get the podcast ID from the grid item's data attribute
      const podcastId = parseInt(gridItem.dataset.id);
      const podcast = getPodcastById(podcastId);

      // Update the podcast's rating based on the clicked stars
      const clickedStars = gridItem.querySelectorAll('.filled-star-icon.active');
      const rating = clickedStars.length;
      podcast.rating = rating;

      // Update the grid item's stars display
      const gridItemStars = gridItem.querySelectorAll('.filled-star-icon');
      gridItemStars.forEach((item, index) => {
        if (index < rating) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  });
});
//JS to handle the multistep form pattern. This is derived from codepen. refer to HTML file/readme to view refrence
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});
//tagify pattern is derived from canvas 
// Retrieve the tags input element
const tagsInput = document.getElementById('tags');

// Initialize Tagify on the input element
const tagify = new Tagify(tagsInput);
// Function to reset the form and go back to the first step
//initializing function to get the form to clear once user has submiited. Function is later called in the submit eventlistener
function resetForm() {
  // Clear the star rating inputs within the fieldset
  const ratingFieldset = document.getElementById('ratingFieldset');
  const ratingInputs = ratingFieldset.querySelectorAll('input[type="radio"]');
  ratingInputs.forEach(input => {
    input.checked = false;
  });

  // Clear the star rating display required extra lines as initially the rating remained
  const starIcons = document.querySelectorAll('.star-rating .star');
  starIcons.forEach(icon => icon.classList.remove('active'));

  // Reset the rest of the form fields
  form.reset();
}
// JS that handles the form submission 
form.addEventListener("submit", function (event) {
  event.preventDefault();//block default submission behaviour 
  const tagsArray = tagify.value.map((tag) => tag.value);
  console.log(form.elements.podcastName.value)
  //only used for testing podcast is actually being added in the below addpodcast function 
  addPodcast(
    form.elements.podcastName.value,
    form.elements.episodeTitle.value,
    form.elements.episodeNumber.value,
    form.elements.platform.value,
    form.elements.host.value,
    tagsArray,
    form.elements.genre.value,
    parseInt(form.elements.rating.value) // Retrieve the rating value and convert it to an integer
  );
  resetForm();
})
// an empty array is created to contain my podcast objects this follows closely with the patterns from the task tracker application developed during tutorials 
var podcastList = [];
function addPodcast(podcastName, episodeTitle, episodeNumber, platform, host, tags, selectedGenre, rating) {
  let podcast = {
    podcastName,
    episodeTitle,
    episodeNumber,
    platform,
    host,
    tags,
    selectedGenre,
    rating,
    id: Date.now(),
    date: new Date().toLocaleDateString(), // Format the date using toLocaleDateString()
  };
  // object is created and then pushed into empty array. contained in local storage (this follows the countries API pattern)
  podcastList.push(podcast);
  localStorage.setItem('podcasts', JSON.stringify(podcastList));
  updatePodcastList();
}
if (localStorage.getItem('podcasts')) {
  podcastList = JSON.parse(localStorage.getItem('podcasts'));
}
//update function is used to retain previously added objects and 'add on' to teh existing list
function updatePodcastList() {
  let list = document.querySelector(".layout-grid");
  list.innerHTML = "";

  let podcastList = JSON.parse(localStorage.getItem('podcasts'));
  console.log(podcastList);
  if (podcastList !== null) {
    //dynamically creating grid items 
    podcastList.forEach((podcast) => {
      let gridItem = document.createElement('div');
      gridItem.className = 'grid-item';

// JS that handels assigning items a genre value and returning an image depending on that 
      let image = document.createElement('img');
      image.src = getGenreImageSource(podcast.selectedGenre);
      image.alt = 'podcast-image(' + podcast.selectedGenre + ')';

      let podcastName = document.createElement('h3');
      podcastName.textContent = podcast.podcastName;

      let episodeTitle = document.createElement('h4');
      episodeTitle.textContent = podcast.episodeTitle;



      let starsContainer = document.createElement('div');
      starsContainer.className = 'stars-container';
// pattern derived from chatgpt to allow for stars that is being returned in teh grid item to be equal to teh ones that is eing clicked to fill in 
      for (let i = 0; i < podcast.rating; i++) {
        let starIcon = document.createElement('span');
        starIcon.innerHTML = '&#9733;';
        starIcon.className = 'filled-star-icon';
        starIcon.dataset.rating = i + 1;
        starsContainer.appendChild(starIcon);
      }

      // Add a click event listener to each star
      let stars = starsContainer.querySelectorAll('.filled-star-icon');
      stars.forEach(star => {
        star.addEventListener('click', () => {
          const gridItem = star.closest('.grid-item');
          if (gridItem) {
            const podcastId = parseInt(gridItem.dataset.id);
            const podcast = getPodcastById(podcastId);

            const rating = parseInt(star.dataset.rating);
            podcast.rating = rating;

            const gridItemStars = gridItem.querySelectorAll('.filled-star-icon');
            gridItemStars.forEach(item => {
              const itemRating = parseInt(item.dataset.rating);
              if (itemRating <= rating) {
                item.classList.add('active');
              } else {
                item.classList.remove('active');
              }
            });
          }
        });
      });
// append all items to list  so that it shows up on teh grid item 
      gridItem.appendChild(image);
      gridItem.appendChild(podcastName);
      gridItem.appendChild(episodeTitle);
      gridItem.appendChild(starsContainer);

      list.appendChild(gridItem);
      gridItem.dataset.id = podcast.id;
      list.appendChild(gridItem);
      const genreImage = document.getElementById('genre-image');
      const genre = podcast.selectedGenre;
      const imageSource = getGenreImageSource(genre);
      genreImage.src = imageSource;
    });
  }
  attachEventListeners(); // Attach event listeners to the new grid items
}

// Move the initial loading of podcasts to the beginning of the script
if (localStorage.getItem('podcasts')) {
  podcastList = JSON.parse(localStorage.getItem('podcasts'));
  updatePodcastList();
}
//switch case to return an assigned value depending on what otem has been clicked
function getGenreImageSource(genre) {
  switch (genre) {
    case 'philosophy':
      return require('./images/podcast (philosophy).png');
    case 'film & TV':
      return require('./images/podcast (film & TV).png');
    case 'news':
      return require('./images/podcast (news).png');
    case 'self-care':
      return require('./images/podcast (self-care).png');
    case 'finance':
      return require('./images/podcast (finance).png');
    case 'crime':
      return require('./images/podcast (crime).png');
    case 'comedy':
      return require('./images/podcast (comedy).png');
    default:
      return require('./images/podcast (default).png'); // Provide a default image source or handle the case where the genre is not recognized

  }
}
// JS that is handling the multi-step form pattern
function changeStep(btn) {
  const activeStep = document.querySelector(".step.active");
  const activeIndex = steps.indexOf(activeStep);

  activeStep.classList.remove("active");

  let index;
  if (btn === "next") {
    index = activeIndex + 1;
  } else if (btn === "prev") {
    index = activeIndex - 1;
  }

  if (index >= 0 && index < steps.length) {
    steps[index].classList.add("active");
  }
}
const genreItems = document.querySelectorAll('.genre-item');
// JS that is triggering the extende view slide-out window when clicked 
genreItems.forEach((item) => {
  const image = item.querySelector('img');

  image.addEventListener('click', () => {
    // Remove 'active' class from all genre items
    genreItems.forEach((item) => {
      item.querySelector('img').classList.remove('active');
    });

    // Add 'active' class to the clicked genre item
    image.classList.add('active');
  });
});
// ataching an id to podcast so that it can be retrioeved to display information about the clicked item in the extended view
function getPodcastById(podcastId) {
  return podcastList.find((podcast) => podcast.id === parseInt(podcastId));
}
// JS that is handling the display of user input on the extende view page 
const moreInfoContainer = document.getElementById('more-info-container');
const moreInfoCloseButton = document.querySelector('.more-info-close-button');
function attachEventListeners() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((item) => {
    item.addEventListener('click', () => {
      moreInfoContainer.classList.toggle('active');
      const podcastId = parseInt(item.dataset.id);
      const podcast = getPodcastById(podcastId);


      if (podcast) {
        gridItem = item;
        const genreImage = document.getElementById('genre-image');
        const genre = podcast.selectedGenre;
        const imageSource = getGenreImageSource(genre);
        genreImage.src = imageSource;

        document.getElementById('more-info-date').textContent = podcast.date;
        document.getElementById('more-info-podcastName').textContent = podcast.podcastName;
        document.getElementById('more-info-episodeTitle').textContent = podcast.episodeTitle;
        document.getElementById('more-info-episodeNumber').textContent = podcast.episodeNumber;
        document.getElementById('more-info-host').textContent = podcast.host;
        document.getElementById('more-info-platform').textContent = podcast.platform;
        document.getElementById('more-info-genre').textContent = podcast.selectedGenre;
        document.getElementById('more-info-tags').textContent = podcast.tags.join(', ');;// Chatgpt suggestion that allows for the display of multiple tags but joining the inputs 

        const starsContainer = document.getElementById('stars-container');
        starsContainer.innerHTML = ''; // Clear any existing stars
        const rating = podcast.rating;
        for (let i = 0; i < rating; i++) {
          let starIcon = document.createElement('span');
          starIcon.innerHTML = '&#9733;';
          starIcon.className = 'filled-star-icon';
          starsContainer.appendChild(starIcon);
        }
      }
    });
  });
}
// similar logic pattern used get the extended view to slide out 
moreInfoCloseButton.addEventListener('click', () => {
  moreInfoContainer.classList.remove('active');
});
// JS to handle delete confirmation window 
const trashcanIcon = document.getElementById('trashcan-icon');
const confirmationModal = document.getElementById('confirmation-modal');
const confirmDeleteButton = document.getElementById('confirm-delete');
const refuseDeleteButton = document.getElementById('refuse-delete');
trashcanIcon.addEventListener('click', function () {
  confirmationModal.style.display = "block"

})
refuseDeleteButton.addEventListener('click', function () {
  confirmationModal.style.display = 'none';
})
confirmDeleteButton.addEventListener('click', function () {
  if (gridItem && gridItem.dataset && gridItem.dataset.id) {
    const podcastId = parseInt(gridItem.dataset.id);
    deletePodcast(podcastId);
    confirmationModal.style.display = 'none';
    moreInfoContainer.classList.remove('active');
    gridItem.style.display = 'none';
    gridItem = null;// Reset gridItem after deletin

    // Update the podcast list
    updatePodcastList();
  }
});
// function to handle delete 
function deletePodcast(podcastId) {
  // Get the existing podcast list from local storage
  let podcastList = JSON.parse(localStorage.getItem('podcasts'));

  // Find the index of the podcast with the matching ID
  const index = podcastList.findIndex(podcast => podcast.id === podcastId);

  // If the podcast is found, remove it from the list
  if (index !== -1) {
    podcastList.splice(index, 1);

    // Save the updated podcast list back to local storage
    localStorage.setItem('podcasts', JSON.stringify(podcastList));
  }
}

function getPodcastItemsFromStorage() {
  let podcastList = localStorage.getItem('podcast');
  if (podcastList) {
    return JSON.parse(podcastList);
  }
  return [];
}
function savePodcastItemsToStorage(podcastList) {
  localStorage.setItem('podcast', JSON.stringify(podcastList));
}
moreInfoCloseButton.addEventListener('click', () => {
  moreInfoContainer.classList.remove('active');
  console.log('more-info-container class:', moreInfoContainer.classList);
});
