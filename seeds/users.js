const bcrypt = require('bcrypt');
const saltRounds = 10;
let hashedPasswordArray = [];
let passwordArray = ['ed', 'jakers', 'joe'];
let usernameArray = ['DontCallMeFrEddy', 'Jakers', 'joe'];


for (let i=0; i<passwordArray.length; i++) {
  bcrypt.hash(passwordArray[i], saltRounds)
  .then((hash) => {
    hashedPasswordArray.push(hash);
  })
}


exports.seed = function (knex, Promise) {
  //Deletes All existing entries

  //Promise all to delete everything from BOTH the dogs and breeds table at the SAME time.
  // When both actions are done, out .then is triggered.
  return knex.migrate.rollback()
    // return Promise.all([knex('users').del()])
    .then(function () {
      console.log('Both deletions are complete.');
      return knex.migrate.latest();
    })
    .then(function () {
      //Inserts seed entries
      return knex('users').insert([{
          first_name: 'Ed',
          last_name: 'Patnzar',
          phone_number: '(GET) FUC-KEDD',
          email: 'Ed@EddyAndTheJets',
          username: 'DontCallMeFrEddy',
          userType: 'client',
          hashed_password: hashedPasswordArray[0]

        },
        {
          first_name: 'Jake',
          last_name: 'Lewis',
          phone_number: '(555) 123-4567',
          email: 'forpetesjake@punsareforsons.com',
          username: 'Jakers',
          userType: 'phlebotomist',
          hashed_password: hashedPasswordArray[1]
        },
        {
          first_name: 'Joes',
          last_name: 'Coffee',
          phone_number: '(555) 222-4444',
          email: 'joe@iloveyousomuch.com',
          username: 'joe',
          userType: 'phlebotomist',
          hashed_password: hashedPasswordArray[2]
        },
      ])
    })
};


