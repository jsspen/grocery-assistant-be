module.exports = (sequelize, Sequelize) => {
  const Groceries = sequelize.define("groceries", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
    },
    brand: {
      type: Sequelize.TEXT,
    },
    item: {
      type: Sequelize.TEXT,
    },
    store: {
      type: Sequelize.TEXT,
    },
    total_price: {
      type: Sequelize.DECIMAL,
    },
    total_size: {
      type: Sequelize.DECIMAL,
    },
    unit: {
      type: Sequelize.TEXT,
    },
    category_primary: {
      type: Sequelize.TEXT,
    },
    category_sub: {
      type: Sequelize.TEXT,
    },
    organic: {
      type: Sequelize.BOOLEAN,
    },
    upc: {
      type: Sequelize.TEXT,
    },
    last_confirmed: {
      type: Sequelize.DATE,
    },
    price_per_unit: {
      type: Sequelize.DECIMAL,
    },
  });

  return Groceries;
};
