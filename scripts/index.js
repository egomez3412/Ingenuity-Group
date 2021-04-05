const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();


/**
 * Creates a document with ID -> uid in the `Users` collection.
 *
 * @param {Object} userRecord Contains the auth, uid and displayName info.
 * @param {Object} context Details about the event.
 */
const createProfile = (userRecord, context) => {
  const { email, points, uid } = userRecord;

  return db
    .collection("USERS")
    .doc(uid)
    .set({ email, points })
    .catch(console.error);
};

module.exports = {
  authOnCreate: functions.auth.user().onCreate(createProfile),
};