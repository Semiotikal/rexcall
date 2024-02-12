---
hide:
  - toc
---
# 
<figure markdown="span">

![logo](assets/rexcall.svg#only-dark){ width=300 }
![logo](assets/rexcall-light.svg#only-light){ width=300 }
<figcaption> Refills. Automated.</figcaption>
</figure>
<center>:material-help-rhombus:{ title="This app bundles up your info and calls the prescription renewal touch-tone menu." }</center>

<center><form name="myForm" id="myForm"> <label for="telNo">:material-phone-plus:</label> <input id="telNo" name="telNo" title="No spaces" type="tel" placeholder="6137283724" value="6137283724" size="50" height="20" data-validation="required phone"> :material-information-outline:{ title="Default already sets to Wellington location" }  <br> Enter pharmacy telephone <br> <br> <label for="rxNo">:material-medication:</label> <input id="rxNo" name="RxNo" type="number" placeholder="5236879" size="50" height="20" title="Must be 7-digits long" max="9999999" min="1000000" required>  :material-information-outline:{ title="Usually found on the top-left of your pill bottle. Ignore any letters." }  <br> Enter 7-digit prescription number <br> <br> <label for="rxNo">:fontawesome-regular-calendar:</label> <input id="year" name="year" type="number" min="1900" max="2099" step="1" placeholder="1991" size="50" height="20" pattern="[0-9]" required />  :material-information-outline:{ title="Enter in the 4-digit year of birth associated with the" }  <br> Enter year of birth <br><br>
<button id="submitButton" type="submit" class="md-button md-button--primary"> Make Call :material-phone-forward: </button> <br>
</form><br>
<button id="resetButton" class="md-button">Reset :material-cancel:</button>

