const express = require("express");
const bodyParser = require("body-parser");
const guest = require("./model/guestModel");
const {Greet} = require("./model/commentModel")


const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', async (req, res) => {
  try {
    const nameParam = req.query.name;
    
    if (nameParam) {
      const item = await guest.Guest.findOne({
        where: {
          name: nameParam
        }
      });

      if (item) {
        res.render('home', { name: nameParam }); // Render halaman home dan kirim parameter name ke EJS
      } else {
        res.send('Name not found'); // Jika nama tidak ditemukan, kirim pesan
      }
    } else {
      res.send('Please provide a name parameter'); // Jika tidak ada parameter 'name', kirim pesan
    }
  } catch (err) {
    console.error('Error fetching item', err);
    res.send('An error occurred');
  }
});

app.get('/gret', async (req, res) => {
  try {
    const comments = await Greet.findAll();
    res.json(comments);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).send("Terjadi kesalahan");
  }
});


app.post('/submit/:id', async (req, res) => {
  try {
    const { nama, ucapan } = req.body;
    await Greet.create({ nama, ucapan });

    res.status(200).send('Ucapan Anda telah berhasil dikirim. Terima kasih!');
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).send("Terjadi kesalahan");
  }
});





app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
