import Contact from "./Contact-class.js";
/**
 * A class that holds Contacts and uses different methods in order to add, edit, remove, search new or existent contacts.
 */
class ContactsApp {
  contactsArr = []; // The array that holds all the contacts
  /**
   * A method that allows you to add a new contact
   */
  addContact(name, phoneNumber) {
    if (name != undefined && phoneNumber != undefined) {
      this.contactsArr.push(new Contact(name, phoneNumber));
    } else {
      console.log("Please specify the name and phone number!");
    }
  }
  /**
   * A method that allows you to remove a specific contact
   */
  removeContact(name) {
    if (name != undefined) {
      this.contactsArr = this.contactsArr.filter(
        (contact) => contact.name !== name
      );
    } else {
      console.log("Please specify the name of the contact you wish to remove!");
    }
  }
  /**
   * A method that allows you to edit a specific contact
   */
  editContact(name, newName, newPhoneNumber) {
    if (name != undefined && newName != undefined) {
      this.contactsArr = this.contactsArr.map((contact) => {
        if (contact.name == name) {
          contact.name = newName;
          newPhoneNumber != "" ? (contact.phoneNumber = newPhoneNumber) : null;
        }
        return contact;
      });
    } else {
      console.log(
        "Please specify the name of the contact you wish to edit, as well as the edited name!"
      );
    }
  }
  /**
   * A method that allows you to search for a specific contact in the contact list
   */
  searchContact(name) {
    let result = `Sorry, couldn't find ${name} in your Contacts`;
    if (name != undefined) {
      this.contactsArr.forEach((contact) => {
        contact.name == name ? (result = contact.phoneNumber) : null;
      });
    }
    console.log(result);
    return result;
  }
  /**
   * A method that prints all the existent contacts to the console
   */
  printContacts() {
    this.contactsArr.forEach((contact) =>
      console.log(
        `Name: ${contact.name} , Phone Number: ${contact.phoneNumber}`
      )
    );
  }
}

export default ContactsApp;
