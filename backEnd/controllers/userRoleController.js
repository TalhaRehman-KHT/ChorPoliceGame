import UserModle from "../schema/UserSchema.js";
import RoomModel from "../schema/roomID.js";


export const assignRolesController = async (req, res) => {
  try {
    const { roomId, numberOfChor, isModeratorSelected } = req.body;

    const room = await RoomModel.findOne({ roomId });
    if (!room) {
      return res.status(404).json({ success: false, message: "Room not found" });
    }

    // Fetch users from the database based on roomId
    const usersInRoom = await UserModle.find({ roomId });

    if (numberOfChor >= usersInRoom.length) {
      return res.status(400).json({ success: false, message: "Invalid number of Chor" });
    }

    // Define getRandomIndex function
    const getRandomIndex = (exclude = []) => {
      const indices = Array.from({ length: usersInRoom.length }, (_, index) => index);
      const availableIndices = indices.filter((index) => !exclude.includes(index));
      const randomIndex = Math.floor(Math.random() * availableIndices.length);
      return availableIndices[randomIndex];
    };

    const roles = ["Police", "Doctor", "Moderator" ,"Civilian"]; // Add Moderator role

    if (isModeratorSelected) {
      // If Moderator checkbox is selected, assign the Moderator role
      const moderatorIndex = getRandomIndex();
      usersInRoom[moderatorIndex].role = roles[2];
    } else {
      // If Moderator checkbox is not selected, shuffle the roles randomly
      const roleIndices = [0, 1, 2, 3, 4, 5, 6, 7];
      while (roleIndices.length < roles.length) {
        const randomIndex = getRandomIndex(roleIndices);
        roleIndices.push(randomIndex);
      }

      // Assign roles to users
      usersInRoom.forEach((user, index) => {
        user.role = roles[roleIndices[index]];
      });
    }

    // Assign roles for Chor
    if (numberOfChor === 4) {
      const chorIndices = [];
      while (chorIndices.length < numberOfChor) {
        const randomIndex = getRandomIndex(chorIndices);
        usersInRoom[randomIndex].role = "Chor";
        chorIndices.push(randomIndex);
      }
    } else {
      const chorIndex = getRandomIndex();
      usersInRoom[chorIndex].role = "Civilian";
    }

    // Save the updated user roles
    await Promise.all(usersInRoom.map((user) => user.save()));

    res.json({
      success: true,
      message: "Roles assigned successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error assigning roles");
  }
};
