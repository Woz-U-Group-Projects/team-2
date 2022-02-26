import { IntegerDataType } from "sequelize/types";

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  admin: boolean;
}
