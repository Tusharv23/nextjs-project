import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";

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

export default authenticated(async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open("./mydb.sqlite");
  const candidate = await db.all(
    "select * from candidate left join Candidate_info on Candidate.id = Candidate_info.candidate_id left join Resume on Candidate.id = Resume.candidate_id left join WorkExperience on Candidate.id = WorkExperience.candidate_id where id = ?",
    [res.candidate_id]
  );

  res.json(candidate);
});
