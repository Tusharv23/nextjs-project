import { NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export default async function loginAdmin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open("./mydb.sqlite");

  if (req.method === "POST") {
    const admin = await db.get(
      "select * from admin where email = ? limit 0,1",
      [req.body.email]
    );
    compare(req.body.password, admin.password, async function(err, result) {
      if (!err && result == true) {
        const claims = { sub: admin.id };
        const jwt = sign(claims, "admin");
        res.json({
          authtoken: jwt
        });
      } else {
        res.send("oops something went wrong");
      }
    });
  }
}
