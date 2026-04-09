import { connectDB } from "@/config/connect-db";
import { User } from "@/model/User";

export default async function handler(req: any, res: any) {
  try {
    await connectDB();
    let { ID } = req.query;

    if (req.method === "GET") {
      const user = await User.findById(ID);
      if (!user) {
        return res.status(404).json({
          message: "user not found",
        });
      }
      return res.status(200).json(user);
    }

    if (req.method === "PUT") {
      const { name, age, email, password } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        ID,
        {
          name,
          age,
          email,
          password: "123456789",
        },
        { new: true },
      );

      if (!updatedUser) {
        return res.status(404).json({
          message: "user not found",
        });
      }

      return res.status(200).json({
        message: "user updated successfully",
        updatedUser,
      });
    }

    if (req.method === "DELETE") {
      const deletedUser = await User.findByIdAndDelete(ID);
      if (!deletedUser) {
        return res.status(404).json({
          message: "user not found",
        });
      }
      return res.status(204).json(deletedUser);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred",
      error: error,
    });
  }
}
