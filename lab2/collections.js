const contactsArray = [
    { fullName: "Alexander Hamilton", phoneNumber: "+380445554433" },
    { fullName: "Emily Brown", phoneNumber: "+123456789" },
    { fullName: "Sarah Johnson", phoneNumber: "+987654321" },
];

const contactsHash = {
    "Alexander Hamilton": "+380445554433",
    "Emily Brown": "+123456789",
    "Sarah Johnson": "+987654321",
};


const findPhoneByNameInArray = (fullName) => {
    const contact = contactsArray.find(contact => contact.fullName === fullName);
    return contact ? contact.phoneNumber : "Not found";
};


const findPhoneByNameInHash = (fullName) => contactsHash[fullName] || "Not found";


console.log("Search in array of objects:");
console.log(findPhoneByNameInArray("Alexander Hamilton"));
console.log(findPhoneByNameInArray("Unknown"));

console.log("\nSearch in hash table:");
console.log(findPhoneByNameInHash("Sarah Johnson"));
console.log(findPhoneByNameInHash("Unknown"));
