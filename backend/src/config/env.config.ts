import "dotenv/config";

export const envConfig = {
  jwtSecret: process.env.JWT_SECRET || "saad_sayyed_7223",
  port: process.env.PORT || 5000,
};
