module.exports = function(sequelize, DataTypes) {
    var Plant = sequelize.define("Plant", {
      // Giving the Plant model a name of type STRING
      harvest: DataTypes.DATE,
      name:DataTypes.STRING,
      bio: DataTypes.TEXT
    });
  
    Plant.associate = function(models) {
    //   // Associating Plant with Posts
    //   // When an Plant is deleted, also delete any associated Posts
      Plant.hasMany(models.Patch);
    };
  
    return Plant;
  };