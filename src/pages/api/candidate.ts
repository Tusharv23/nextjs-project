import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";
import { hash } from "bcrypt";
import { verify } from "jsonwebtoken";

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.headers.authorization!, "admin", async function(err, decoded) {
    if (!err && decoded) {
      return await fn(req, res);
    }

    res.status(401).json({ message: "Sorry you are not authenticated" });
  });
};

export default authenticated(async function getCandidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open("./mydb.sqlite");

  if (req.method === "PUT") {
    hash(req.body.password, 10, async function(err, hash) {
      const statement = await db.prepare(
        "UPDATE Candidate SET name= ?, email = ?, password = ?, type = ?, user_type = ?, image = ?, created = ?  where id = ?"
      );
      const result = await statement.run(
        req.body.name,
        req.body.email,
        hash,
        req.body.type,
        req.body.user_type,
        req.body.image,
        req.body.created,
        req.body.id
      );
      res.send(result.finalize());
    });
  }

  if (req.method === "POST") {
    hash(req.body.password, 10, async function(err, hash) {
      const statement = await db.prepare(
        "INSERT INTO Candidate (name, email , password , type , user_type , image , created) values (?,?,?,?,?,?,?)"
      );
      const result = await statement.run(
        req.body.name,
        req.body.email,
        hash,
        req.body.type,
        req.body.user_type,
        req.body.image,
        req.body.created
      );
      res.send(result.finalize());
    });
  }

  if (req.method === "DELETE") {
    const statement = await db.prepare("DELETE from  Candidate where id = ?");
    const result = await statement.run(req.body.id);
    res.send(result.finalize());
  }

  const candidate = await db.all("select * from candidate");
  res.json(candidate);
});
