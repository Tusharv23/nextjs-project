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
    const candidate = await db.get(
      "select * from candidate where email = ? limit 0,1",
      [req.body.email]
    );
    compare(req.body.password, candidate.password, async function(err, result) {
      if (!err && result == true) {
        const claims = { sub: candidate.id };
        const jwt = sign(claims, "candidate");
        res.json({
          authtoken: jwt
        });
      } else {
        res.send("oops something went wrong");
      }
    });
  }
}
