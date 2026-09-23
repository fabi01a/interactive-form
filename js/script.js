//Name Field
//referencing name ID
const name = document.getElementById('name');
//adding a focus state to the name element
name.focus()


//Job Role Section
//referencing job role element
const title = document.getElementById('title');
//referencing other job role element
const otherJobRole = document.getElementById('other-job-role');
//hide this element by default
otherJobRole.style.display = 'none';
//listening for change event on element
title.addEventListener('change', e => {
//access the event
const targetValue = e.target.value
//
if (targetValue === 'other') {
    otherJobRole.style.display = 'inline-block';
} else {
    otherJobRole.style.display = 'none';
}    

})

