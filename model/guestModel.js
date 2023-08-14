const Sequelize = require("sequelize");
const db = require("../config/DB");

const { DataTypes } = Sequelize;

const Guest = db.define('guest', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true
});

// Sinkronkan model dengan database
(async () => {
  try {
    await Guest.sync(); // Membuat tabel jika belum ada
    console.log("Tabel Guest berhasil disinkronkan.");
  } catch (error) {
    console.error("Terjadi kesalahan saat mensinkronkan tabel Guest:", error);
  }
})();

module.exports = {
  Guest
};
