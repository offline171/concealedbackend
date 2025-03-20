module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        customer_name: 'John Doe',
        email: 'example@example.com',
        state: 'NY',
        city: 'Brooklyn',
        street_address: 'example street',
        zip_code: '11111'
      }, 
    ]);
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null {});
  },
};
