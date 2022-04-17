import { PhoneContactsApp } from "./main.js";
import { DeviceApp } from "./main.js";

// const contactList = document.querySelector("#contact-list");

class PhoneTools {
  /**
   * A method that parses the contacts array and constructs the HTML structure to list each contact
   */
  updateList() {
    this.eraseList();
    PhoneContactsApp.contactsArr.forEach((contact) => {
      //Creating the list item for each contact (adding classes, and text)
      let li = document.createElement("li");
      li.classList.add("contact-item");
      let editImg = document.createElement("img");
      editImg.classList.add("contact-icon", "edit-icon");
      let removeImg = document.createElement("img");
      removeImg.classList.add("contact-icon");
      let div = document.createElement("div");
      div.classList.add("icon-container");
      div.append(editImg, removeImg);
      let nameP = document.createElement("p");
      let nameNode = document.createTextNode(`${contact.name}`);
      let phoneP = document.createElement("p");
      let phoneNode = document.createTextNode(`${contact.phoneNumber}`);
      nameP.append(nameNode);
      phoneP.append(phoneNode);
      editImg.src = "./images/edit-icon.svg";
      removeImg.src = "./images/remove-icon.svg";

      //Functionality for the remove button;
      removeImg.addEventListener("click", () => {
        li.remove();
        PhoneContactsApp.removeContact(contact.name);
      });
      //Functionality for edit button;

      editImg.addEventListener("click", () => {
        DeviceApp.editModal.classList.remove("hide");
        DeviceApp.editNameInput.placeholder = `${contact.name}`;
        DeviceApp.editPhoneInput.placeholder = `${contact.phoneNumber}`;
        DeviceApp.editTitle.innerText = `${contact.name}`;
      });

      //Appending the list item to the Contact list
      li.append(nameP, phoneP, div);
      DeviceApp.contactList.append(li);
    });
  }
  /**
   * A method that removes all listed contacts as a preparation for restructuring the list
   */
  eraseList() {
    let listItemsArr = [...document.querySelectorAll(".contact-item")];
    listItemsArr.forEach((item) => {
      item.remove();
    });
  }
  /**
   * A method that takes the users input in order to add a new contact and update the HTML list;
   */
  handleAddContact = () => {
    let tempContact = {};

    if (DeviceApp.nameInput.value != "" && DeviceApp.phoneInput.value != "") {
      tempContact.name = DeviceApp.nameInput.value;
      tempContact.phoneNumber = DeviceApp.phoneInput.value;
      DeviceApp.nameInput.value = "";
      DeviceApp.phoneInput.value = "";
      PhoneContactsApp.addContact(tempContact.name, tempContact.phoneNumber);
      this.updateList(tempContact);
      DeviceApp.addModal.classList.add("hide");
      DeviceApp.errorMsg.classList.add("hide");
    } else {
      DeviceApp.errorMsg.classList.remove("hide");
      DeviceApp.errorMsg.innerText =
        "Please enter a valid Name or Phone number!";
    }
  };
  /**
   * A method that takes the user's input in order to edit an existing contact name and phone, whilst also updating the HTML list;
   */
  handleEditContact = () => {
    if (DeviceApp.editNameInput.value != "") {
      PhoneContactsApp.editContact(
        DeviceApp.editTitle.innerText,
        DeviceApp.editNameInput.value,
        DeviceApp.editPhoneInput.value
      );
      this.updateList();
      DeviceApp.editNameInput.value = "";
      DeviceApp.editPhoneInput.value = "";
      DeviceApp.editModal.classList.add("hide");
      DeviceApp.editErrorMsg.classList.add("hide");
    } else {
      DeviceApp.editErrorMsg.classList.remove("hide");
      DeviceApp.editErrorMsg.innerText = "Please enter a valid new Name";
    }
  };
  /**
   * A method that handles the "go-back button";
   */
  handleBackButton() {
    DeviceApp.nameInput.value = "";
    DeviceApp.editNameInput.value = "";
    DeviceApp.phoneInput.value = "";
    DeviceApp.editPhoneInput.value = "";
    DeviceApp.addModal.classList.add("hide");
    DeviceApp.errorMsg.classList.add("hide");
    DeviceApp.editModal.classList.add("hide");
    DeviceApp.editErrorMsg.classList.add("hide");
  }
  /**
   * A method that handles the add contact modal;
   */
  handleAddModal() {
    DeviceApp.addModal.classList.remove("hide");
  }
  /**
   * A method that lets the users search Contact names and Phone Numbers;
   */
  handleSearchBar(e) {
    const value = e.target.value.toLowerCase();
    let listItems = [...document.querySelectorAll(".contact-item")];
    listItems.forEach((contact) => {
      const isVisible =
        contact.children[0].innerText.toLowerCase().includes(value) ||
        contact.children[1].innerText.toLowerCase().includes(value);
      contact.classList.toggle("hide", !isVisible);
    });
  }
}

export default PhoneTools;
