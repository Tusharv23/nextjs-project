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
      "INSERT INTO Candidate_info (candidate_id,title,full_name,DOB,country,state,city,phone_no,mob_no) values (?,?,?,?,?,?,?,?,?)"
    );
    const result = await statement.run(
      res.candidate_id,
      req.body.title,
      req.body.full_name,
      req.body.DOB,
      req.body.country,
      req.body.state,
      req.body.city,
      req.body.phone_no,
      req.body.mob_no
    );
    result.finalize();
  }

  const person = await db.get("select * from Candidate where id = ?", [
    req.query.id
  ]);
  res.json(person);
});
