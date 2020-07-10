// loadContact creates the elements for the contact tab

function loadContact() {
  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("contact-wrapper");

  const storeInfoWrapper = document.createElement("div");
  storeInfoWrapper.classList.add("store-info-wrapper");

  const addressHeader = document.createElement("h2");
  addressHeader.classList.add("contact-header");
  addressHeader.textContent = "Store Address";
  const addressDetails = document.createElement("ul");
  const street = document.createElement("li");
  street.classList.add("contact-text");
  street.textContent = "123 Pizza Street";
  const suburbCity = document.createElement("li");
  suburbCity.classList.add("contact-text");
  suburbCity.textContent = "Broadmeadows, Wellington";
  const postCode = document.createElement("li");
  postCode.classList.add("contact-text");
  postCode.textContent = "1234";
  addressDetails.appendChild(street);
  addressDetails.appendChild(suburbCity);
  addressDetails.appendChild(postCode);

  const emailHeader = document.createElement("h2");
  emailHeader.classList.add("contact-header");
  emailHeader.textContent = "Email";
  const email = document.createElement("p");
  email.classList.add("contact-text");
  email.textContent = "ligerpizza@gmail.com";

  const phoneHeader = document.createElement("h2");
  phoneHeader.classList.add("contact-header");
  phoneHeader.textContent = "Phone Number";
  const phoneNumber = document.createElement("p");
  phoneNumber.classList.add("contact-text");
  phoneNumber.textContent = "09 123 4567";

  const contactTab = document.querySelector(".contact-tab");
  const homeTab = document.querySelector(".home-tab");
  const menuTab = document.querySelector(".menu-tab");
  contactTab.classList.add("tab-active");
  homeTab.classList.remove("tab-active");
  menuTab.classList.remove("tab-active");

  storeInfoWrapper.appendChild(addressHeader);
  storeInfoWrapper.appendChild(addressDetails);
  storeInfoWrapper.appendChild(emailHeader);
  storeInfoWrapper.appendChild(email);
  storeInfoWrapper.appendChild(phoneHeader);
  storeInfoWrapper.appendChild(phoneNumber);
  
  const formWrapper = createForm();
  
  contactWrapper.appendChild(storeInfoWrapper);
  contactWrapper.appendChild(formWrapper);
  
  return contactWrapper;
}

function createForm() {
  const formDiv = document.createElement("div");
  formDiv.classList.add("form-wrapper");

  const formHeader = document.createElement("h2");
  formHeader.classList.add("contact-header");
  formHeader.textContent = "CONTACT US"

  const form = document.createElement("form");

  const lineBreakEmail = document.createElement("br");
  const lineBreakName = document.createElement("br");
  const lineBreakSubject = document.createElement("br");
  const lineBreakMessage = document.createElement("br");

  const emailDiv = document.createElement("div");
  emailDiv.classList.add("email-wrapper");
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  emailLabel.classList.add("contact-text");
  const emailInput = document.createElement("input");
  emailInput.type = "text";
  emailInput.name="email";
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(lineBreakEmail);
  emailDiv.appendChild(emailInput);

  const nameDiv =document.createElement("div");
  nameDiv.classList.add("name-wrapper");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";
  nameLabel.classList.add("contact-text");
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(lineBreakName);
  nameDiv.appendChild(nameInput);
  
  const subjectDiv = document.createElement("div");
  subjectDiv.classList.add("subject-wrapper");
  const subjectLabel = document.createElement("label");
  subjectLabel.textContent = "Subject";
  subjectLabel.classList.add("contact-text");
  const subjectInput = document.createElement("input");
  subjectInput.type = "text";
  subjectInput.name = "subject";
  subjectDiv.appendChild(subjectLabel);
  subjectDiv.appendChild(lineBreakSubject);
  subjectDiv.appendChild(subjectInput);

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message-wrapper");
  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message";
  messageLabel.classList.add("contact-text");
  const messageInput = document.createElement("textarea");
  messageInput.classList.add("message-box");
  messageInput.name = "message";
  messageDiv.appendChild(messageLabel);
  messageDiv.appendChild(lineBreakMessage);
  messageDiv.appendChild(messageInput);

  form.appendChild(emailDiv);
  form.appendChild(nameDiv);
  form.appendChild(subjectDiv);
  form.appendChild(messageDiv);
  formDiv.appendChild(formHeader);
  formDiv.appendChild(form);

  return formDiv;
}

export { loadContact };