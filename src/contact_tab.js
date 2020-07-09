// loadContact creates the elements for the contact tab

function loadContact() {
  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("contact-wrapper");

  const addressHeader = document.createElement("h2");
  addressHeader.classList.add("address-header");
  addressHeader.textContent = "Store Address";
  const addressDetails = document.createElement("ul");
  const street = document.createElement("li");
  street.textContent = "123 Pizza Street";
  const suburbCity = document.createElement("li");
  suburbCity.textContent = "Broadmeadows, Wellington";
  const postCode = document.createElement("li");
  postCode.textContent = "1234";
  addressDetails.appendChild(street);
  addressDetails.appendChild(suburbCity);
  addressDetails.appendChild(postCode);

  const emailHeader = document.createElement("h2");
  emailHeader.classList.add("email-header");
  emailHeader.textContent = "Email";
  const email = document.createElement("p");
  email.classList.add("email");
  email.textContent = "ligerpizza@gmail.com";

  const phoneHeader = document.createElement("h2");
  phoneHeader.classList.add("phone-header");
  phoneHeader.textContent = "Phone Number";
  const phoneNumber = document.createElement("p");
  phoneNumber.classList.add("phone-number");
  phoneNumber.textContent = "09 123 4567";

  contactWrapper.appendChild(addressHeader);
  contactWrapper.appendChild(addressDetails);
  contactWrapper.appendChild(emailHeader);
  contactWrapper.appendChild(email);
  contactWrapper.appendChild(phoneHeader);
  contactWrapper.appendChild(phoneNumber);

  return contactWrapper;
}

export { loadContact };