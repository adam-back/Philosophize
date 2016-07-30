module.exports = function( sequelize, DataTypes ) {
  var page = sequelize.define('page', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    next_page_id: DataTypes.INTEGER,
  }, { underscored: true } );

  return page;
};