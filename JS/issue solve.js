document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get form data
  var formData = new FormData(this);
  
  // Get uploaded image URL
  var imageInput = uploadcare.Widget('[role=uploadcare-uploader]');
  var file = imageInput.value();
  if (file) {
    file.done(function(fileInfo) {
      formData.append("image", fileInfo.cdnUrl);
      submitForm(formData);
    });
  } else {
    submitForm(formData);
  }
});

function submitForm(formData) {
  // Send form data to Formspree
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://formspree.io/f/xoqgjyka"); // Replace "YOUR_FORMSPREE_URL" with your Formspree form URL
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      alert("The Problem is solved and Thank you for your intimation Like This..!.");
      document.getElementById("contactForm").reset();
    } else {
      alert("Oops! Something went wrong. Please try again later.");
    }
  };
  xhr.send(formData);
}