const User = require("../model/guestModel.js") ;


 const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

 const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

 
 const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}



 const getLinkById = async (req, res) => {
  const id = req.params.id;

  try {
    const linkData = await User.findOne({
      where: { id }
    });

    if (linkData) {
      const generatedLink = `http://yourwebsite.com/details/${linkData.id}`;
      res.render('index', { generatedLink, name: linkData.name });
    } else {
      res.send('Data not found');
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  getLinkById,
}


