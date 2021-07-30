const UserCrudMigrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(UserCrudMigrations);
};
