const lengthHeader = document.getElementById('lengthHeader');
const rangeInput = document.getElementById('rangeInput');
const createPassword = document.getElementById('createPassword');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const passwordWrite = document.getElementById('passwordWrite');

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];


const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
rangeInput.addEventListener('input', () => {
    const value = rangeInput.value;
    lengthHeader.innerHTML = value;
    console.log("Seçilen değer: " + value);
});


createPassword.addEventListener('click', () => {
    let selectedOptions = [];

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            if (checkbox.id === 'formCheck-1') {
                selectedOptions = selectedOptions.concat(alphabet);
            } else if (checkbox.id === 'formCheck-2') {
                selectedOptions = selectedOptions.concat(numbers);
            } else if (checkbox.id === 'formCheck-3') {
                selectedOptions = selectedOptions.concat(alphabet.map(letter => letter.toUpperCase()));
            } else if (checkbox.id === 'formCheck-4') {
                // Include symbols if selected
                // You can define your own symbols array or use special characters  
                const symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'];
                selectedOptions = selectedOptions.concat(symbols);
            }
        }
    });

    const passwordLength = parseInt(rangeInput.value);

    if (selectedOptions.length === 0) {
        Swal.fire(
            'Error',
            'Please choose at least 1 option',
            'error'
        );
    } else {
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * selectedOptions.length);
            password += selectedOptions[randomIndex];
        }
        passwordWrite.placeholder= password;

    }
});



const copyButton = document.getElementById('copy');

copyButton.addEventListener('click', function () {
    const placeholderValue = passwordWrite.getAttribute('placeholder');
    console.log(placeholderValue);
    navigator.clipboard.writeText(placeholderValue);
 
      Swal.fire(
        'Copied',
        'Password copied successfully!',
        'success'
    );
   
});
