'use strict';

const img1 = document.querySelector("#some_img1");
img1.addEventListener('click', () => alert('Server is Down Try after some time'));

const img2 = document.querySelector("#some_img2");
img2.addEventListener('click', () => alert('Server is Down Try after some time'));

const img3 = document.querySelector("#some_img3");
img3.addEventListener('click', () => alert('Server is Down Try after some time'));

const img4 = document.querySelector("#some_img4");
img4.addEventListener('click', () => alert('Server is Down Try after some time'));

(function () {
    /** 
     * counter 
     */
    const /** {HTMLElement} */ $decrementBtn = document.querySelector('[data-decrement-btn]');
    const /** {HTMLElement} */ $incrementBtn = document.querySelector('[data-increment-btn]');
    const /** {HTMLElement} */ $counterField = document.querySelector('[data-counter-field]');
    const /** {HTMLElement} */ $total = document.querySelector('[data-total]');
    const /** {Number} */ minValue = 1;
    const /** {Number} */ maxValue = 999;

    /** 
     * increment
    */
   $incrementBtn.addEventListener('click', function () {
    const currentValue = $counterField.value;
    if (currentValue < maxValue) $counterField.value = Number(currentValue) + 1;
    updateTotal.call($counterField);
   });

   /**
    * decrement
    */
   $decrementBtn.addEventListener('click', function () {
    const currentValue = $counterField.value;
    if (currentValue > minValue) $counterField.value = Number(currentValue) - 1;
    updateTotal.call($counterField);
   })

   const updateTotal = function () {
    $total.textContent = this.value;
   }

   $counterField.addEventListener('input', updateTotal.bind($counterField));

   /** 
    * submit contribute form
    */
   const contributeForm = document.querySelector('[data-contribute-form]');
   const submitBtn = document.querySelector('[data-submit-btn]');

   contributeForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    try {

        submitBtn.setAttribute('disabled', '');

        const formFields = document.querySelectorAll('[data-form-field]');

        const formData = {}

        formFields.forEach(item => {
            formData[item.getAttribute('name')] = item.value.trim();
        });

        const response = await fetch('/checkout', {
            method: 'POST',
            body: new URLSearchParams(formData).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
        } else {
            console.error('Form submission failed: ', response.statusText);
        }

    } catch (error) {
        console.error(error);
        throw error;

    } finally {

        submitBtn.removeAttribute('disabled');

    }
   });

})();
