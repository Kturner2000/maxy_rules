import User from "../models/users.model";

async function CreateUser(req, res) {
    const { auth0Id, username, email } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ auth0Id });
    if (!user) {
      // Create a new user if they don't exist
      user = new User({ auth0Id, username, email });
      await user.save();
    }

    // Respond with user data (excluding sensitive information)
    res.status(200).json({ id: user._id, username: user.username, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { CreateUser}