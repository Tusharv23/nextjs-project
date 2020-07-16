-- Up

CREATE TABLE Admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE Country (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    countryName TEXT,
    status INTEGER
);

CREATE TABLE Qualification (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Qual_name TEXT,
    status INTEGER,
    created DATE
);

CREATE TABLE Designation (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Desig_name TEXT,
    status INTEGER,
    created DATE
);

CREATE TABLE Candidate (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    password TEXT,
    type TEXT,
    user_type TEXT,
    image TEXT,
    created DATE,
    email TEXT
);

CREATE TABLE Candidate_info
(
    candidate_id INTEGER REFERENCES Candidate(id),
    title TEXT,
    full_name TEXT,
    DOB DATE,
    country INTEGER REFERENCES Country(id),
    state text,
    city text,
    phone_no integer,
    mob_no integer
);
CREATE TABLE Resume
(
    candidate_id INTEGER REFERENCES Candidate(id),
    key_skills TEXT,
    experience INTEGER,
    functional_area TEXT,
    qualification_id REFERENCES Qualification(id),
    specialization TEXT,
    resume_ TEXT
);

CREATE TABLE WorkExperience
(
    candidate_id INTEGER REFERENCES Candidate(id),
    organization TEXT,
    designation_id REFERENCES Designation(id),
    from_ DATE,
    to_ DATE,
    job_profile TEXT
);

-- Down
DROP TABLE Admin;
DROP TABLE Candidate;
DROP TABLE Candidate_info;
DROP TABLE Designation;
DROP TABLE Qualification;
DROP TABLE Country;
DROP TABLE Resume;
DROP TABLE WorkExperience;