import { NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";

export default async function getCandidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open("./mydb.sqlite");

  const country = await db.all("select * from Country");
  res.json(country);
}
