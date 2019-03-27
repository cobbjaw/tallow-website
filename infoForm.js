var boxHidden = true;
const buttonElement = document.getElementById('saveChanges');

// when other radio button is clicked, removes the hidden class from the html class 'otherInput' revealing an input box.
function removeHiddenOther() {
    const otherInput = document.getElementById('otherInput');
    otherInput.classList.remove('hidden');
    boxHidden = false
};

//when any other radio button is clicked, pushes the hidden class back to 'otherInput' and places empty string to erase any characters.
function pushHiddenOther() {
    if (boxHidden === false) {
        const otherInput = document.getElementById('otherInput');
        otherInput.classList.add('hidden');
        boxHidden = true;
        otherInput.value = '';
   }
};

//Use "alert" to thank the user for signing up for the newsletter.
buttonElement.addEventListener('click', function (event) {
    alert('Thank you for becoming a part of the Tallow community!');
  });


