const Sequelize = require("sequelize");
const db = require("../config/DB");

const {DataTypes} = Sequelize;

const Greet = db.define('Ucapan',{
    nama: DataTypes.STRING,
    ucapan: DataTypes.STRING,
},{
    freezeTableName: true
});

// Sinkronkan model dengan database
(async () => {
  try {
    await Greet.sync(); // Membuat tabel jika belum ada
    console.log("Tabel Greet berhasil disinkronkan.");
  } catch (error) {
    console.error("Terjadi kesalahan saat mensinkronkan tabel Guest:", error);
  }
})();

module.exports = {
  Greet,
};
