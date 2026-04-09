import { connectDB } from "@/config/connect-db";
import { User } from "@/model/User";

export default async function handler(req: any, res: any) {
  await connectDB();

  if (req.method === "GET") {
    const users = await User.find();
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const { name, age, email, password } = req.body;
    const createdUser = await User.create({
      name,
      age,
      email,
      password: "123456789",
    });

    return res.status(201).json({
      message: "user created successfully",
      createdUser,
    });
  }
}
