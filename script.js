const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;


function handleCheck(e) {
    console.log(e);
    //check if they had the shift key down.
    let inbetween = false; //flag variable.
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inbetween = !inbetween;
            }
            if(inbetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));