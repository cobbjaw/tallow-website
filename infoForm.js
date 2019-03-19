var boxHidden = true;

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

