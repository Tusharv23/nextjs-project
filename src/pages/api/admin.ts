import { NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";
import { hash } from "bcrypt";

export default async function storeAdmin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open("./mydb.sqlite");

  if (req.method === "POST") {
    hash(req.body.password, 10, async function(err, hash) {
      // Store hash in your password DB.

      const statement = await db.prepare(
        "INSERT INTO admin (name, email, password) values (?, ?, ?)"
      );
      const result = await statement.run(req.body.name, req.body.email, hash);
      result.finalize();
    });
  }
}
