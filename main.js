import PhoneTools from "./phone-tools.js";
import ContactsApp from "./contacts-app.js";
import Device from "./Device-DOM.js";

export { PhoneContactsApp };
export { DeviceApp };

const PhoneContactsApp = new ContactsApp();
const PhoneToolsApp = new PhoneTools();
const DeviceApp = new Device();

DeviceApp.addBtn.addEventListener("click", PhoneToolsApp.handleAddModal);

DeviceApp.backBtn.addEventListener("click", PhoneToolsApp.handleBackButton);

DeviceApp.addSubmitBtn.addEventListener(
  "click",
  PhoneToolsApp.handleAddContact
);
DeviceApp.editSubmitBtn.addEventListener(
  "click",
  PhoneToolsApp.handleEditContact
);

DeviceApp.searchBar.addEventListener("input", (e) => {
  PhoneToolsApp.handleSearchBar(e);
});

//Adding dummy contacts

PhoneContactsApp.addContact("Corneliu", "0869239932");
PhoneContactsApp.addContact("Altcineva", "0000000000");
PhoneContactsApp.addContact("Alt-Altcineva", "123456789zece");
PhoneContactsApp.addContact("Vasi", "Confidential");

PhoneToolsApp.updateList();
