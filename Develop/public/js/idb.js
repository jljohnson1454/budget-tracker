// create variable to hold connection
let db;
// establish connection to db
const request = indexedDB.open('budget_tracker', 1);

// emit db version changes
request.onupgradeneeded = function(event) {

    const db = event.target.result;

    db.createObjectStore('new_budget', { autoIncrement: true });
};

request.onsuccess = function(event) {

    db = event.target.result;

    if(navigator.onLine) {

      //  uploadBudget();
    }
};

request.onerror = function(event) {
    console.log(event.target.errorCode);

}

function saveRecord(record) {

    const transaction = db.transaction(['new_budget'], 'readwrite');

    const budgetObjectStore = transaction.objectStore('new_budget');
}