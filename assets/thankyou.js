let formFields = new URLSearchParams(window.location.search)
document.getElementById("customresponse").innerHTML = `Thank you for your purchase ${formFields.get("name")}!`