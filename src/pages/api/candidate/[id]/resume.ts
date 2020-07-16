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
      "INSERT INTO Resume (candidate_id,key_skills,experience,functional_area) values (?,?,?,?)"
    );
    const result = await statement.run(
      req.query.id,
      req.body.key_skills,
      req.body.experience,
      req.body.functional_area
    );
    result.finalize();
  }

  const person = await db.get("select * from Candidate where id = ?", [
    req.query.id
  ]);
  res.json(person);
});
