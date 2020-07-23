module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      name:DataTypes.STRING,
      email:{
          type:DataTypes.STRING,
          unique:true
      },
      password:DataTypes.STRING
    });
  
    User.associate = function(models) {
    //   // Associating User with Posts
    //   // When an User is deleted, also delete any associated Posts
      User.hasMany(models.Patch);
      User.hasMany(models.Patch,{
        as :"Gardens",
        foreignKey:"GardenerId"
      });
    };
  
    return User;
  };
  