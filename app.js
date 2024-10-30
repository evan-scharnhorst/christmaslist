// app.js
const list = document.getElementById('list');
const sortSelect = document.getElementById('sort-select');

const selectedTab = 1;

const christmasLists = [];

christmasLists.push(ClaireChristmasList);
christmasLists.push(EvanChristmasList);
christmasLists.push(EricChristmasList);
christmasLists.push(KentChristmasList);
christmasLists.push(LukeChristmasList);

let currentTab = 0;

function renderList(items) {
  list.innerHTML = ''; // Clear the list
  items.forEach(item => list.appendChild(createListItem(item)));
}

function createListItem(item) {
  const listItem = document.createElement('div');
  listItem.classList.add('list-item');
  
  listItem.innerHTML = `
    <div class="item-content">
      <img src="${item.image}" alt="${item.title}" class="item-image">
      <div class="item-info">
        <h3 class="item-title">${item.title}</h3>
        <p class="item-price">$${item.price.toFixed(2)}</p>
        <p class="item-priority">Priority: ${item.priority}</p>
        <p class="item-description">${item.description}</p>
        <a href="${item.link}" target="_blank" class="item-link">Link</a>
      </div>
    </div>
    <button class="expand-btn">+</button>
  `;
  
  const expandBtn = listItem.querySelector('.expand-btn');
  const description = listItem.querySelector('.item-description');
  
  expandBtn.addEventListener('click', () => {
    listItem.classList.toggle('expanded');
    expandBtn.textContent = listItem.classList.contains('expanded') ? '-' : '+';
  });
  
  return listItem;
}

function sortItems(criteria) {
  const sortedItems = [...christmasLists[currentTab]];
  switch(criteria) {
    case 'price':
      sortedItems.sort((a, b) => a.price - b.price);
      break;
    case 'alphabetical':
      sortedItems.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'priority':
    default:
      sortedItems.sort((a, b) => a.priority - b.priority);
      break;
  }
  renderList(sortedItems);
}

// Event listener for sorting dropdown
sortSelect.addEventListener('change', (e) => sortItems(e.target.value));

// Function to display items for the selected tab
function showTab(index) {
  currentTab = index;

  // Update tab styling for active tab
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  tabs[index].classList.add('active');

  // Add fade-out effect by removing the fade-in class
  const listElement = document.getElementById('list');
  listElement.classList.remove('fade-in');

  // Short delay to allow fade-out before rendering new content
  setTimeout(() => {
    // Sort and render items for the selected tab
    sortItems('priority');

    // Trigger fade-in by adding the class back
    listElement.classList.add('fade-in');
  }, 300); // Adjust the delay as needed for smoothness
}

function updateCountdown() {
  const countdownElement = document.getElementById('countdown');
  const now = new Date();
  const christmas = new Date(now.getFullYear(), 11, 25); // December 25th of the current year

  // If Christmas has passed this year, set countdown to next year
  if (now > christmas) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  const timeDiff = christmas - now;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until Christmas!`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial render of the first tab and countdown
showTab(0);
updateCountdown();
