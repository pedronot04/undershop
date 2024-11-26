const aircraftData = [
    { 
        id: 0, 
        category: 'military', 
        name: 'Boeing AH-64', 
        description: 'Attack Helicopter built by Boeing.', 
        image: 'assets/APACHE.png', 
        price: 20000,
        onSale: true
    },
    { 
        id: 1, 
        category: 'commercial', 
        name: 'Airbus A321neo', 
        description: 'Good airliner for medium range jobs.', 
        image: 'assets/A321NEO.png', 
        price: 25000,
        onSale: true
    },
    { 
        id: 2, 
        category: 'commercial', 
        name: 'Embraer E-190', 
        description: 'Description of Commercial Aircraft 1', 
        image: 'assets/E190.png', 
        price: 20000,
        onSale: true
    },
    { 
        id: 3, 
        category: 'commercial', 
        name: 'Boom Overture', 
        description: 'Medium-Price SST.', 
        image: 'assets/BOOM.png', 
        price: 90000,
        onSale: false
    },
    { 
        id: 4, 
        category: 'private', 
        name: 'Bombardier Global 7500', 
        description: 'Small business jet for long-range trips.', 
        image: 'assets/7500.png', 
        price: 21000,
        onSale: true
    },
    { 
        id: 5, 
        category: 'commercial', 
        name: 'Tupolev Tu-144', 
        description: 'Fuel eater.', 
        image: 'assets/TU144.png', 
        price: 120000,
        onSale: false
    },
    { 
        id: 6, 
        category: 'cargo', 
        name: 'Antonov AN-74', 
        description: 'STOL aircraft for cargo.', 
        image: 'assets/AN-74.png', 
        price: 28000,
        onSale: true
    },
    { 
        id: 7, 
        category: 'boats', 
        name: 'LK-60a', 
        description: 'Call me Project 22220.', 
        image: 'assets/LK-60YA.png', 
        price: 700000,
        onSale: true
    },
    { 
        id: 8, 
        category: 'special', 
        name: 'ADF-340 Relay', 
        description: 'ACE COMBAT REFERENCE ?!?!?!/??.', 
        image: 'assets/ADF340.png', 
        price: 2500000,
        onSale: true
    },
    { 
        id: 9, 
        category: 'military', 
        name: 'Yakovlev Yak-38U', 
        description: 'Soviet VTOL plane.', 
        image: 'assets/YAK-38U.png', 
        price: 34000,
        onSale: true
    },
    { 
        id: 10, 
        category: 'military', 
        name: 'Sikorsky UH-60', 
        description: 'That one american heli.', 
        image: 'assets/UH-60.png', 
        price: 15000,
        onSale: false
    },
    { 
        id: 11, 
        category: 'military', 
        name: 'Sikorsky SH-60', 
        description: 'Anti-Sub american heli.', 
        image: 'assets/SH-60.png', 
        price: 13000,
        onSale: false
    },
    { 
        id: 12, 
        category: 'commercial', 
        name: 'SAAB 2000', 
        description: 'This plane is cool.', 
        image: 'assets/SAAB2000.png', 
        price: 20000,
        onSale: false
    },
    { 
        id: 13, 
        category: 'military', 
        name: 'Convair XB-46', 
        description: 'Ugly bomber.', 
        image: 'assets/XB-46.png', 
        price: 14000,
        onSale: false
    },
    { 
        id: 14, 
        category: 'military', 
        name: 'Lun-class Ekranoplan', 
        description: 'This plane is not ugly.', 
        image: 'assets/LUN.png', 
        price: 100000,
        onSale: false
    },
    { 
        id: 15, 
        category: 'civilian', 
        name: 'Turbolet L-410', 
        description: 'Look = 10/10, Utility = 0/10', 
        image: 'assets/L410.png', 
        price: 7000,
        onSale: false
    },
    { 
        id: 16, 
        category: 'civilian', 
        name: 'Extra EA-330', 
        description: '... i like OrangeTimeExpress.', 
        image: 'assets/EA330.png', 
        price: 2000,
        onSale: false
    },
    { 
        id: 17, 
        category: 'civilian', 
        name: 'Rutan Long EZ', 
        description: 'Long... EZ ?', 
        image: 'assets/RUTEZ.png', 
        price: 2000,
        onSale: true
    },
    { 
        id: 18, 
        category: 'civilian', 
        name: 'Rutan Quickie Q2', 
        description: 'Quickie? Who is naming those Rutan planes?', 
        image: 'assets/RUTQ2.png', 
        price: 3000,
        onSale: true
    },
    { 
        id: 19, 
        category: 'military', 
        name: 'Sukhoi SU-24', 
        description: 'F-111 BLYAT Edition.', 
        image: 'assets/SU24.png', 
        price: 30000,
        onSale: true
    },
    { 
        id: 20, 
        category: 'military', 
        name: 'Northrop Tacit Blue', 
        description: 'What.', 
        image: 'assets/TACITBLUE.png', 
        price: 15000,
        onSale: false
    },
    { 
        id: 21, 
        category: 'military', 
        name: 'Eurofighter Typhoon', 
        description: 'Gripen is more cooler.', 
        image: 'assets/TYPH.png', 
        price: 26000,
        onSale: true
    },
    { 
        id: 22, 
        category: 'military', 
        name: 'Chengdu J-20', 
        description: 'F-22 made in china.', 
        image: 'assets/J20.png', 
        price: 40000,
        onSale: false
    },
    { 
        id: 23, 
        category: 'commercial', 
        name: 'Focke-Wulf FW 200 Condor', 
        description: 'Guess who flew in this guy?', 
        image: 'assets/CONDOR200.png', 
        price: 25000,
        onSale: false
    },
    { 
        id: 24, 
        category: 'military', 
        name: 'Focke-Wulf TA-152', 
        description: 'Rare?', 
        image: 'assets/TA-152.png', 
        price: 15000,
        onSale: false
    },
    { 
        id: 25, 
        category: 'military', 
        name: 'McDonnell Douglas F-15C', 
        description: 'FREEEEEEEEEEEEEEEEEDOM!!!!', 
        image: 'assets/F-15C.png', 
        price: 25000,
        onSale: false
    },
    { 
        id: 26, 
        category: 'commercial', 
        name: 'BAC 1-11-200', 
        description: 'BAAAK ONE-ELEVON', 
        image: 'assets/bac1-11.png', 
        price: 11000,
        onSale: true
    },
    {
        id: 27,
        category: 'commercial',
        name: 'Aerion SBJ',
        description: 'Sonic Boom Jet?',
        image: 'assets/AESBJ.png',
        price: 90000,
        onSale: true
    },
    {
        id: 28,
        category: 'commercial',
        name: 'Convair 990',
        description: 'The fastest subsonic jet in its day.',
        image: 'assets/C990.png',
        price: 29000,
        onSale: false
    },
    {
        id: 29,
        category: 'civilian',
        name: 'Cessna 337',
        description: 'double the noise.',
        image: 'assets/337.png',
        price: 4000,
        onSale: true
    }
];

// Function to format price with thousand separators
function formatPrice(price) {
    return price.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

// Function to create a single product card with sale price logic
function createCard(vehicle) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Check if the product is on sale
    const priceHTML = vehicle.onSale ? `
        <h4 class="original-price"><del>${formatPrice(vehicle.price)} WP</del></h4>
        <h4 class="sale-price"><strong>${formatPrice(vehicle.price * 0.88)} WP</strong></h4>
    ` : `
        <h4><strong>${formatPrice(vehicle.price)} WP</strong></h4>
    `;
    
    card.innerHTML = `
        <img src="${vehicle.image}" alt="${vehicle.name}">
        <h3>${vehicle.name}</h3>
        <p>${vehicle.description}</p>
        ${priceHTML}
        <a href="https://discord.com/users/870065855134834799?id=${vehicle.id}" class="btn send-btn">I WANT</a>
    `;
    
    return card;
}


// Function to display products based on the category and onSale status
function displayProducts(category) {
    const onSaleProducts = aircraftData.filter(vehicle => vehicle.onSale && vehicle.category === category);
    const regularProducts = aircraftData.filter(vehicle => !vehicle.onSale && vehicle.category === category);

    const onSaleSection = document.getElementById('onSaleProducts');
    const regularSection = document.getElementById('regularProducts');

    onSaleSection.innerHTML = ''; // Clear previous content
    regularSection.innerHTML = ''; // Clear previous content

    // Display On Sale Products
    onSaleProducts.forEach(vehicle => {
        const card = createCard(vehicle);
        onSaleSection.appendChild(card);
    });

    // Display Regular Products
    regularProducts.forEach(vehicle => {
        const card = createCard(vehicle);
        regularSection.appendChild(card);
    });
}

// When the page loads, filter and display products based on the category
document.addEventListener('DOMContentLoaded', function() {
    // Get the current page's category from the URL or some other method
    const pageCategory = window.location.pathname.split('/').pop().split('.').shift(); // Example: "military", "commercial"

    displayProducts(pageCategory);
});

// Function to handle search across all pages
function searchAircraft(event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase(); // Capture and clean search term
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous search results

    if (searchTerm === "") {
        searchResults.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

    const filteredAircraft = aircraftData.filter(vehicle =>
        vehicle.name.toLowerCase().includes(searchTerm) ||
        vehicle.description.toLowerCase().includes(searchTerm)
    );

    // Display the filtered aircraft or show random recommendations
    if (filteredAircraft.length > 0) {
        filteredAircraft.forEach(vehicle => {
            const card = createCard(vehicle);
            searchResults.appendChild(card);
        });
    } else {
        searchResults.innerHTML = "<p>No aircraft found for your search. Here are some recommendations:</p>";

        // Display random recommendations
        const recommendations = getRandomRecommendations();
        recommendations.forEach(vehicle => {
            const card = createCard(vehicle);
            searchResults.appendChild(card);
        });
    }
}

// Event listener for search form submission
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', searchAircraft);
    }
});

// Function to get random recommendations when no results are found
function getRandomRecommendations() {
    const randomItems = [];
    const shuffled = [...aircraftData].sort(() => 0.5 - Math.random()); // Shuffle the data array
    for (let i = 0; i < 3; i++) { // Show 3 random recommendations
        randomItems.push(shuffled[i]);
    }
    return randomItems;
}

// Function to get products on sale
function getOnSaleProducts() {
    return aircraftData.filter(vehicle => vehicle.onSale);
}

// Function to populate aircraft by category
function populateAircraftByCategory(category) {
    const filteredAircraft = aircraftData.filter(vehicle => vehicle.category === category);

    const listElementId = `${category}List`;
    filteredAircraft.forEach(vehicle => {
        const card = createCard(vehicle);
        document.getElementById(listElementId).appendChild(card);
    });
}
