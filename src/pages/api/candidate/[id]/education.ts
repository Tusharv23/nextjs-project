import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";
import { verify } from "jsonwebtoken";

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.headers.authorization!, "candidate", async function(err, decoded) {
    if (!err && decoded) {
      res.candidate_id = decoded.sub;
      return await fn(req, res);
    }
    res.status(401).json({ message: "Sorry you are not authenticated" });
  });
};

export default authenticated(async function updateContactInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open("./mydb.sqlite");

  if (req.method === "POST") {
    const statement = await db.prepare(
      "update Resume set resume_ = ? , qualification_id = ?, specialization = ? where candidate_id = ?"
    );
    const result = await statement.run(
      req.body.resume,
      req.body.qualification_id,
      req.body.specialization,
      res.candidate_id
    );
    result.finalize();
  }

  const person = await db.get("select * from Candidate where id = ?", [
    req.query.id
  ]);
  res.json(person);
});
