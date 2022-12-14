// Global Variables
const feedbackNumbers = document.querySelectorAll(".link-number");
const submitButton = document.querySelector("#submit");
const thanksCont = document.querySelector(".thanks-container");
const rating = document.querySelector(".changed-rating");


// Adding an event listener to all feedbackNumbers
feedbackNumbers.forEach(function(i) {
    i.addEventListener("click", function() {
        // alert("Number clicked!");
        let txt = i.innerText;
        // console.log(txt);
        rating.innerHTML = "You selected " + txt + " out of 5";
    });
});


// Adding an event listener to the submit button to change the card container to the thanks container
submitButton.addEventListener("click", handleClick);
function handleClick() {
    // alert("Submit clicked!");
    thanksCont.classList.remove("remove-index");
}