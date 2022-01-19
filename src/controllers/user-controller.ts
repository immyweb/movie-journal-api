import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Response, Request } from "express";
import { IUser } from "../types/user";
import User from "../models/user-model";

const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName)) {
      return res.status(400).send("All input is required");
    }

    // Check if user already exist
    const oldUser: IUser | null = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    // Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY as string
    );

    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY as string
      );

      // save user token
      user.token = token;

      // user
      return res.status(200).json(user);
    }

    res.status(400).send("Invalid Credentials");
  } catch (error) {
    res.status(400).send(error);
  }
};

export { registerUser, loginUser };
