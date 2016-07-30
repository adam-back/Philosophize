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

  path.beforeCreate(function( newPath ) {
    newPath.number_of_steps = newPath.order_of_pages.length;
    if ( newPath.number_of_steps ) {
      newPath.start_page_id = newPath.order_of_pages[ 0 ];
    }
  });

  path.beforeUpdate(function( updatedPath ) {
    updatedPath.number_of_steps = updatedPath.order_of_pages.length;
  });

  return path;
};