import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    console.log("i am called");
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};



