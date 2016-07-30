module.exports = function( sequelize, DataTypes ) {
  var path = sequelize.define('path', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    order_of_pages: {
      type: DataTypes.ARRAY( DataTypes.INTEGER ),
      default: []
    },
    number_of_steps: {
      type: DataTypes.INTEGER,
      default: 0
    },
    start_page_id: DataTypes.INTEGER,
    success: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, { underscored: true } );

  return path;
};