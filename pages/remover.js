let extDiv = document.getElementById('ext-div');
if (extDiv) {
    extDiv.parentNode.removeChild(extDiv);
    console.log('Removed');
} else {
    console.log('Aí não tem como');
}