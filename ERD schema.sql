CREATE TABLE 'USER' (
	user_id INT PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	password VARCHAR(100) NOT NULL,
	full_name VARCHAR(100),
	join_date DATE,
	follower_count INT DEFAULT 0
);

CREATE TABLE 'POST' (
	post_id INT PRIMARY KEY,
	content TEXT NOT NULL,
	comment_count INT DEFAULT 0,
	post_date DATE,
	like_count INT DEFAULT 0,
	user_id INT,
	FOREIGN KEY (user_id) REFERENCES USER(user_id)
);

CREATE TABLE 'COMMENT' (
	comment_id INT PRIMARY KEY,
	content TEXT NOT NULL,
	comment_date DATE,
	post_id INT,
	FOREIGN KEY (post_id) REFERENCES POST(post_id)
);

CREATE TABLE 'LIKE' (
	like_id INT PRIMARY KEY,
	like_date DATE,
	user_id INT,
	post_id INT,
	FOREIGN KEY (user_id) REFERENCES USER(user_id),
	FOREIGN KEY (post_id) REFERENCES POST(post_id)
);

CREATE TABLE 'FOLLOWER' (
	follow_date DATE,
	follower_id INT,
	followed_id INT,
	FOREIGN KEY (follower_id) REFERENCES USER(user_id),
	FOREIGN KEY (followed_id) REFERENCES USER(user_id),
	PRIMARY KEY (follower_id, followed_id)
);
