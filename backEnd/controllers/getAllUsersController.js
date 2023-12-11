import UserModle from "../schema/UserSchema.js";
import RoomModel from "../schema/roomID.js";

export const getUsersInRoomController = async (req, res) => {
  try {
    const { roomId } = req.params;

    const room = await RoomModel.findOne({ roomId });
    if (!room) {
      return res
        .status(404)
        .json({ success: false, message: "Room not found" });
    }
    // find all users
    const usersInRoom = await UserModle.find({ roomId });
    res.json({
      success: true,
      users: usersInRoom,
    });
  } catch (error) {
    res.status(500).send("Error getting users in room");
  }
};
