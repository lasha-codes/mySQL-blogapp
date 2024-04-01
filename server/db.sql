CREATE TABLE posts (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title TEXT NOT NULL,
  author VARCHAR(25) NOT NULL,
  image TEXT,
  description TEXT NOT NULL
);

CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(25) NOT NULL,
  email VARCHAR(70) NOT NULL,
  password VARCHAR(100) NOT NULL,
  UNIQUE(email)
);

-- some testing
INSERT INTO users (name, email, password) values ('testUser', 'test@gmail.com', 'password');
INSERT INTO users (name, email, password) values ('lasha', 'lasha@gmail.com', 'password');