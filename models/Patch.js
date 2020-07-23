module.exports = function(sequelize, DataTypes) {
    var Patch = sequelize.define("Patch", {
      // Giving the Patch model a name of type STRING
      area:DataTypes.FLOAT,
      lat:DataTypes.FLOAT,
      lng:DataTypes.FLOAT
    });
  
    Patch.associate = function(models) {
    //   // Associating Patch with Posts
    //   // When an Patch is deleted, also delete any associated Posts
      Patch.belongsTo(models.User);
      Patch.belongsTo(models.User,{
          as:"Gardener"
      });
      Patch.belongsTo(models.Plant)
    };
  
    return Patch;
  };
  