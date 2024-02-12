/* 
Scripting to handle form input validation (phone number, 7-digit number, year)
and replace telephone number variables with the correct results. The code below takes the form values, 
validates them, and if successfull injects them into the URI of the telephone schema alongside the right number of pauses. 
If validation fails, submission is stopped and the invalid forms are highlighted

TODO: Parameterize the commas and any validation numbers required during a phone call
*/

document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission
      
  var telNo= document.getElementById('telNo').value;
  var rxNo= document.getElementById('rxNo').value;
  var year= document.getElementById('year').value;
  // Construct the URL with the input values
  var url = 'tel:' + encodeURIComponent(telNo) + ',,,1,,,' + encodeURIComponent(rxNo) + '#,,,,,1,,,,,,' + encodeURIComponent(year) + ',,,,1'
  // Redirect the user to the constructed URL
  console.log(url)
  window.location.href = url
});
document.getElementById('resetButton').addEventListener('click', function() {
  document.getElementById('myForm').reset();
});