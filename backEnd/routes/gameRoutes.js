//
import express from "express";
import {
  homeController,
  createRoomController,
  generateRoomIdController,
  createUserController,
} from "../controllers/homeController.js";
import { assignRolesController } from "../controllers/userRoleController.js";
import { joinRoomController } from "../controllers/joinRoomController.js";
import { getUsersInRoomController } from "../controllers/getAllUsersController.js";
 
const routes = express.Router();
//

routes.get("/", homeController);
routes.post("/createRoom", createRoomController);
routes.post("/createUser", createUserController);
routes.get("/room/:roomId/users", getUsersInRoomController);
// routes.get('/generateRoomId', generateRoomIdController);
routes.post("/joinRoom", joinRoomController);
routes.post("/room/assignRoles", assignRolesController);

export default routes;




