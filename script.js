const countries = [
    { name: "Afghanistan", code: "af" },
    { name: "Albania", code: "al" },
    { name: "Algeria", code: "dz" },
    { name: "Andorra", code: "ad" },
    { name: "Angola", code: "ao" },
    { name: "Antigua and Barbuda", code: "ag" },
    { name: "Argentina", code: "ar" },
    { name: "Armenia", code: "am" },
    { name: "Australia", code: "au" },
    { name: "Austria", code: "at" },
    { name: "Azerbaijan", code: "az" },
    { name: "Bahamas", code: "bs" },
    { name: "Bahrain", code: "bh" },
    { name: "Bangladesh", code: "bd" },
    { name: "Barbados", code: "bb" },
    { name: "Belarus", code: "by" },
    { name: "Belgium", code: "be" },
    { name: "Belize", code: "bz" },
    { name: "Benin", code: "bj" },
    { name: "Bhutan", code: "bt" },
    { name: "Bolivia", code: "bo" },
    { name: "Bosnia and Herzegovina", code: "ba" },
    { name: "Botswana", code: "bw" },
    { name: "Brazil", code: "br" },
    { name: "Brunei", code: "bn" },
    { name: "Bulgaria", code: "bg" },
    { name: "Burkina Faso", code: "bf" },
    { name: "Burundi", code: "bi" },
    { name: "Cabo Verde", code: "cv" },
    { name: "Cambodia", code: "kh" },
    { name: "Cameroon", code: "cm" },
    { name: "Canada", code: "ca" },
    { name: "Central African Republic", code: "cf" },
    { name: "Chad", code: "td" },
    { name: "Chile", code: "cl" },
    { name: "China", code: "cn" },
    { name: "Colombia", code: "co" },
    { name: "Comoros", code: "km" },
    { name: "Congo (Congo-Brazzaville)", code: "cg" },
    { name: "Costa Rica", code: "cr" },
    { name: "Croatia", code: "hr" },
    { name: "Cuba", code: "cu" },
    { name: "Cyprus", code: "cy" },
    { name: "Czechia (Czech Republic)", code: "cz" },
    { name: "Democratic Republic of the Congo", code: "cd" },
    { name: "Denmark", code: "dk" },
    { name: "Djibouti", code: "dj" },
    { name: "Dominica", code: "dm" },
    { name: "Dominican Republic", code: "do" },
    { name: "Ecuador", code: "ec" },
    { name: "Egypt", code: "eg" },
    { name: "El Salvador", code: "sv" },
    { name: "Equatorial Guinea", code: "gq" },
    { name: "Eritrea", code: "er" },
    { name: "Estonia", code: "ee" },
    { name: "Eswatini (fmr. Swaziland)", code: "sz" },
    { name: "Ethiopia", code: "et" },
    { name: "Fiji", code: "fj" },
    { name: "Finland", code: "fi" },
    { name: "France", code: "fr" },
    { name: "Gabon", code: "ga" },
    { name: "Gambia", code: "gm" },
    { name: "Georgia", code: "ge" },
    { name: "Germany", code: "de" },
    { name: "Ghana", code: "gh" },
    { name: "Greece", code: "gr" },
    { name: "Grenada", code: "gd" },
    { name: "Guatemala", code: "gt" },
    { name: "Guinea", code: "gn" },
    { name: "Guinea-Bissau", code: "gw" },
    { name: "Guyana", code: "gy" },
    { name: "Haiti", code: "ht" },
    { name: "Honduras", code: "hn" },
    { name: "Hungary", code: "hu" },
    { name: "Iceland", code: "is" },
    { name: "India", code: "in" },
    { name: "Indonesia", code: "id" },
    { name: "Iran", code: "ir" },
    { name: "Iraq", code: "iq" },
    { name: "Ireland", code: "ie" },
    { name: "Israel", code: "il" },
    { name: "Italy", code: "it" },
    { name: "Jamaica", code: "jm" },
    { name: "Japan", code: "jp" },
    { name: "Jordan", code: "jo" },
    { name: "Kazakhstan", code: "kz" },
    { name: "Kenya", code: "ke" },
    { name: "Kiribati", code: "ki" },
    { name: "Kuwait", code: "kw" },
    { name: "Kyrgyzstan", code: "kg" },
    { name: "Laos", code: "la" },
    { name: "Latvia", code: "lv" },
    { name: "Lebanon", code: "lb" },
    { name: "Lesotho", code: "ls" },
    { name: "Liberia", code: "lr" },
    { name: "Libya", code: "ly" },
    { name: "Liechtenstein", code: "li" },
    { name: "Lithuania", code: "lt" },
    { name: "Luxembourg", code: "lu" },
    { name: "Madagascar", code: "mg" },
    { name: "Malawi", code: "mw" },
    { name: "Malaysia", code: "my" },
    { name: "Maldives", code: "mv" },
    { name: "Mali", code: "ml" },
    { name: "Malta", code: "mt" },
    { name: "Marshall Islands", code: "mh" },
    { name: "Mauritania", code: "mr" },
    { name: "Mauritius", code: "mu" },
    { name: "Mexico", code: "mx" },
    { name: "Micronesia", code: "fm" },
    { name: "Moldova", code: "md" },
    { name: "Monaco", code: "mc" },
    { name: "Mongolia", code: "mn" },
    { name: "Montenegro", code: "me" },
    { name: "Morocco", code: "ma" },
    { name: "Mozambique", code: "mz" },
    { name: "Myanmar (formerly Burma)", code: "mm" },
    { name: "Namibia", code: "na" },
    { name: "Nauru", code: "nr" },
    { name: "Nepal", code: "np" },
    { name: "Netherlands", code: "nl" },
    { name: "New Zealand", code: "nz" },
    { name: "Nicaragua", code: "ni" },
    { name: "Niger", code: "ne" },
    { name: "Nigeria", code: "ng" },
    { name: "North Korea", code: "kp" },
    { name: "North Macedonia", code: "mk" },
    { name: "Norway", code: "no" },
    { name: "Oman", code: "om" },
    { name: "Pakistan", code: "pk" },
    { name: "Palau", code: "pw" },
    { name: "Palestine State", code: "ps" },
    { name: "Panama", code: "pa" },
    { name: "Papua New Guinea", code: "pg" },
    { name: "Paraguay", code: "py" },
    { name: "Peru", code: "pe" },
    { name: "Philippines", code: "ph" },
    { name: "Poland", code: "pl" },
    { name: "Portugal", code: "pt" },
    { name: "Qatar", code: "qa" },
    { name: "Romania", code: "ro" },
    { name: "Russia", code: "ru" },
    { name: "Rwanda", code: "rw" },
    { name: "Saint Kitts and Nevis", code: "kn" },
    { name: "Saint Lucia", code: "lc" },
    { name: "Saint Vincent and the Grenadines", code: "vc" },
    { name: "Samoa", code: "ws" },
    { name: "San Marino", code: "sm" },
    { name: "Sao Tome and Principe", code: "st" },
    { name: "Saudi Arabia", code: "sa" },
    { name: "Senegal", code: "sn" },
    { name: "Serbia", code: "rs" },
    { name: "Seychelles", code: "sc" },
    { name: "Sierra Leone", code: "sl" },
    { name: "Singapore", code: "sg" },
    { name: "Slovakia", code: "sk" },
    { name: "Slovenia", code: "si" },
    { name: "Solomon Islands", code: "sb" },
    { name: "Somalia", code: "so" },
    { name: "South Africa", code: "za" },
    { name: "South Korea", code: "kr" },
    { name: "South Sudan", code: "ss" },
    { name: "Spain", code: "es" },
    { name: "Sri Lanka", code: "lk" },
    { name: "Sudan", code: "sd" },
    { name: "Suriname", code: "sr" },
    { name: "Sweden", code: "se" },
    { name: "Switzerland", code: "ch" },
    { name: "Syria", code: "sy" },
    { name: "Tajikistan", code: "tj" },
    { name: "Tanzania", code: "tz" },
    { name: "Thailand", code: "th" },
    { name: "Timor-Leste", code: "tl" },
    { name: "Togo", code: "tg" },
    { name: "Tonga", code: "to" },
    { name: "Trinidad and Tobago", code: "tt" },
    { name: "Tunisia", code: "tn" },
    { name: "Turkey", code: "tr" },
    { name: "Turkmenistan", code: "tm" },
    { name: "Tuvalu", code: "tv" },
    { name: "Uganda", code: "ug" },
    { name: "Ukraine", code: "ua" },
    { name: "United Arab Emirates", code: "ae" },
    { name: "United Kingdom", code: "gb" },
    { name: "United States of America", code: "us" },
    { name: "Uruguay", code: "uy" },
    { name: "Uzbekistan", code: "uz" },
    { name: "Vanuatu", code: "vu" },
    { name: "Vatican City", code: "va" },
    { name: "Venezuela", code: "ve" },
    { name: "Vietnam", code: "vn" },
    { name: "Yemen", code: "ye" },
    { name: "Zambia", code: "zm" },
    { name: "Zimbabwe", code: "zw" }
];

// Log the total number of countries to the console
console.log(countries.length);

//Base URL for flag images( rectangular flag version)
// const baseUrl = "https://flagcdn.com/w320/";

// Base URL for the flag images (wavy flag version)
const baseUrl = "https://flagcdn.com/256x192/";

let currentCountryIndex = 0; // Index of the current country being displayed
let correctAnswer = ""; // Name of the correct answer

document.addEventListener("DOMContentLoaded", () => {
    // Get references to DOM elements
    const flagImage = document.getElementById("flag-image"); // Image element for the flag
    const optionsContainer = document.getElementById("options-container"); // Container for the answer options
    const resultMessage = document.getElementById("result-message"); // Element to display result messages
    const nextButton = document.getElementById("next-button"); // Button to load the next flag
    const correctCount = document.getElementById("correct-count"); // Element to display the correct count
    const incorrectCount = document.getElementById("incorrect-count"); // Element to display the incorrect count

    // Function to get a random integer up to a maximum value
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    // Function to generate options including the correct answer
    const getOptions = (correctIndex) => {
        let options = [correctIndex]; // Start with the correct answer
        while (options.length < 3) { // Add until we have three options
            const randomIndex = getRandomInt(countries.length); // Get a random index
            if (!options.includes(randomIndex)) { // Ensure it's not already included
                options.push(randomIndex);
            }
        }
        return options.sort(() => Math.random() - 0.5); // Shuffle the options
    };

    // Function to load a new flag and set up the answer options
    const loadFlag = () => {
        currentCountryIndex = getRandomInt(countries.length); // Get a random country index
        const country = countries[currentCountryIndex]; // Get the country object
        flagImage.src = `${baseUrl}${country.code}.png`; // Set the flag image source
        resultMessage.textContent = ""; // Clear any previous result message

        // Generate new options
        const options = getOptions(currentCountryIndex);
        correctAnswer = country.name; // Set the correct answer

        // Clear previous options and create new option buttons
        optionsContainer.innerHTML = "";
        options.forEach((index, idx) => {
            const optionButton = document.createElement("button");
            optionButton.textContent = `${String.fromCharCode(97 + idx)}) ${countries[index].name}`; // a), b), c) labels
            optionButton.classList.add("option-button");
            optionButton.addEventListener("click", () => {
                checkAnswer(optionButton, index); // Add click event to check answer
            });
            optionsContainer.appendChild(optionButton);
        });
    };

    // Function to check the selected answer
    const checkAnswer = (selectedOption, index) => {
        if (countries[index].name === correctAnswer) { // If the answer is correct
            selectedOption.classList.add("correct");
            selectedOption.style.backgroundColor = "#8bc34a"; // Green background for correct option
            resultMessage.textContent = "Correct!";
            correctCount.textContent = `Correct: ${parseInt(correctCount.textContent.split(':')[1]) + 1}`;
        } else { // If the answer is incorrect
            selectedOption.classList.add("incorrect");
            selectedOption.style.backgroundColor = "#ff0000"; // Red background for incorrect option
            const correctOption = optionsContainer.querySelector(`button:nth-child(${options.indexOf(currentCountryIndex) + 1})`);
            correctOption.style.backgroundColor = "#8bc34a"; // Green background for correct option
            resultMessage.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
            incorrectCount.textContent = `Incorrect: ${parseInt(incorrectCount.textContent.split(':')[1]) + 1}`;
        }
        // Hide all other options except the selected one
        optionsContainer.querySelectorAll(".option-button").forEach(button => {
            if (button !== selectedOption) {
                button.style.display = "none";
            }
        });
    };

    // Event listener for the "Next" button to load the next flag
    nextButton.addEventListener("click", () => {
        // Reset styles and show all options
        optionsContainer.querySelectorAll(".option-button").forEach(button => {
            button.style.display = "block";
            button.classList.remove("correct", "incorrect");
        });
        loadFlag(); // Load a new flag
    });

    // Initial load of the flag
    loadFlag();
});
