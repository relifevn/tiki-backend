'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Categories', [
        { name: 'Technology'},
        { name: 'Sport'},
        { name: 'Book'},
        { name: 'Fashion'},
        { name: 'Baby'},
        { name: 'Toy'},
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Categories', [
      { name: 'Technology'},
      { name: 'Sport'},
      { name: 'Book'},
      { name: 'Fashion'},
      { name: 'Baby'},
      { name: 'Toy'},
    ], {});

  }
};
