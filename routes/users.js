const router = require("express").Router();
const User = require("../models/user");

router.post("/info", async (req, res) => {
	console.log(req.body)
	const user = await User.findOne({ user_id: req.body.user_id });
	if(!user){
	   const user1 = await User.create({
	      user_id: req.body.user_id,
   		name:req.body.name,
   		kanal: false,
   		ref: null,
   	   balans: 5,
   	});
	   return res.status(200).send(user1);
	}else{
	   return res.status(200).send(user);
	}
});

router.get('/users', async (req,res)=>{
  try {
    const users = await User.find({}, 'user_id name');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/upg/', async (req, res) => {
  try {
      const updatedUser=await User.findOneAndUpdate({ user_id:req.body.user_id}, req.body, {new:true});

      if(!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/balansupg/', async (req, res) => {
  try {
      const updatedUser=await User.findOneAndUpdate({ user_id: req.body.user_id}, {balans: req.body.balans}, {new:true});

      if(!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/top/:top', async (req,res)=>{
  try {
     let lim = req.params.top;
    const topUsers = await User.find({}, 'user_id name balans') .sort({ balans:
    -1 }).limit(lim);
    res.json(topUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;