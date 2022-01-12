\c music

CREATE TABLE IF NOT EXISTS account (
    account_id serial PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS artist (
    artist_id serial PRIMARY KEY,
    artist_name VARCHAR(50),
    account_id INT NOT NULL,
    FOREIGN KEY (account_id)
        REFERENCES account (account_id)
);

CREATE TABLE IF NOT EXISTS album (
    album_id serial PRIMARY KEY,
    album_name VARCHAR(50),
    artist_id INT NOT NULL,
    FOREIGN KEY (artist_id)
        REFERENCES artist (artist_id)
);

CREATE TABLE IF NOT EXISTS song (
    song_id serial PRIMARY KEY,
    song_name VARCHAR(100),
    album_id INT NOT NULL,
    FOREIGN KEY (album_id)
        REFERENCES album (album_id)
);

