var boxHidden = true;

function removeHiddenOther() {
    const otherInput = document.getElementById('otherInput');
    otherInput.classList.remove('hidden');
    boxHidden = false
};

function pushHiddenOther() {
    if (boxHidden === false) {
        const otherInput = document.getElementById('otherInput');
        otherInput.classList.add('hidden');
        boxHidden = true;
        otherInput.value = '';
   }
};