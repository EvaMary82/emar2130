import images from './images/podcast (philosophy).png';
console.log(images)
const addTitleButton = document.querySelector('.button-primary');
const formContainer = document.getElementById('form-container');

addTitleButton.addEventListener('click', function () {
  formContainer.classList.toggle('active');
});
const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  formContainer.classList.remove('active');
});
//Get all the star elements
const stars = document.querySelectorAll('.star');

// Add a click event listener to each star
stars.forEach(star => {
  star.addEventListener('click', () => {
    // Toggle the active class on the clicked star
    star.classList.toggle('active');
  });
});
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
// Function to reset the form and go back to the first step

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
// Retrieve the tags input element
const tagsInput = document.getElementById('tags');

// Initialize Tagify on the input element
const tagify = new Tagify(tagsInput);

form.addEventListener("submit", function (event) {
  event.preventDefault();//block default submission behaviour 
  const tagsArray = tagify.value.map((tag) => tag.value);
  console.log(form.elements.podcastName.value)
  addPodcast(
    form.elements.podcastName.value,
    form.elements.episodeTitle.value,
    form.elements.episodeNumber.value,
    form.elements.platform.value,
    form.elements.host.value,
    tagsArray,
    form.elements.genre.value,
    form.elements.rating.value
  );
  form.reset();
})
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
    date: new Date().toISOString(),
  };
  podcastList.push(podcast);
  localStorage.setItem('podcasts', JSON.stringify(podcastList));
  updatePodcastList();
}
if (localStorage.getItem('podcasts')) {
  podcastList = JSON.parse(localStorage.getItem('podcasts'));
}
function updatePodcastList() {
  let list = document.querySelector(".layout-grid");
  list.innerHTML = "";

  let podcastList = JSON.parse(localStorage.getItem('podcasts'));
  console.log(podcastList);

  if (podcastList !== null) {
    podcastList.forEach((podcast) => {
      let gridItem = document.createElement('div');
      gridItem.className = 'grid-item';


      let image = document.createElement('img');
      image.src = getGenreImageSource(podcast.selectedGenre);
      image.alt = 'podcast-image(' + podcast.selectedGenre + ')';

      let podcastName = document.createElement('h3');
      podcastName.textContent = podcast.podcastName;

      let episodeTitle = document.createElement('h4');
      episodeTitle.textContent = podcast.episodeTitle;

      let starsContainer = document.createElement('div');
      starsContainer.className = 'stars-container';

      for (let i = 0; i < podcast.rating; i++) {
        let starIcon = document.createElement('span');
        starIcon.innerHTML = '&#9733;';
        starIcon.className = 'filled-star-icon';
        starsContainer.appendChild(starIcon);
      }

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
}

// Move the initial loading of podcasts to the beginning of the script
if (localStorage.getItem('podcasts')) {
  podcastList = JSON.parse(localStorage.getItem('podcasts'));
  updatePodcastList();
}
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
/*console.log(podcastList); 
const inputs = [];
 form.querySelectorAll("input").forEach((input) => {
   const { name, value } = input;
   inputs.push({ name, value });
 });
 console.log(inputs)
 form.reset();
;
 data.forEach((country) => {
       console.log(country)
       
       // Container for card (Div, with a class=".")
       
       
       // Title: Heading == Country Name
       
       
       // Description: Paragrph == Country Information
       
       
       // Image: Image == Country Flag
       
       
       // Appending all content to the card
       
       
       // Append the content to the page
       
   })
})
*/

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
function getPodcastById(podcastId) {
  return podcastList.find((podcast) => podcast.id === parseInt(podcastId));
}
const gridItems = document.querySelectorAll('.grid-item');
const moreInfoContainer = document.getElementById('more-info-container');
const moreInfoCloseButton = document.querySelector('.more-info-close-button');
let gridItem = null;


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
      document.getElementById('more-info-tags').textContent = podcast.tag;

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

/*function getPodcastById(podcastId) {
  const foundPodcast = podcastList.find((podcast) => podcast.id === podcastId);
  console.log('Found podcast:', foundPodcast);
  return foundPodcast;
}*/
moreInfoCloseButton.addEventListener('click', () => {
  moreInfoContainer.classList.remove('active');
});
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
/*confirmDeleteButton.addEventListener('click', function(){
  const activePodcast = document.querySelector('.grid-item.active');
if (activePodcast) {
  const podcastId = activePodcast.dataset.id;
  deletePodcast(podcastId);
  confirmationModal.style.display = 'none';
}
})

function deletePodcast(podcastId){
  let podcastList = getPodcastItemsFromStorage();
  podcastList = podcastList.filter((podcast) => podcast.id !== podcastId);
  savePodcastItemsToStorage(podcastList);
  removePodcastItemFromGrid()

  const podcastItems = getPodcastItemFromStorage();
  const index = podcastItems.findIndex(item => item.id === podcastId);
  if (index !== -1){
    podcastItems.splice(index,1);
    savePodcastItemsToStorage(podcastItems);
    removePodcastItemsFromGrid(podcastId);
  }
  function removePodcastItemFromGrid(podcastId){
    const gridItem = document.querySelector('.grid-tem[data-id"${podcastId}"]');
    if (gridItem);
    gridItem.remove();
  }
}*/
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
