# Blog-Post-API

# BlogProject
August Project System Design

Scope: 
Build the endpoints required for a Blogging platform.


High Level System Design:
create account, update their account information, and also delete their account 
post blogs, update a blog post and delete a blog post. 

Deep dive:
User credentials: 
- Name
- Email
- password
- PhoneNo
- Username


Blog Post;
	- Title
	- Article
	- Author
	- Comments, Like & Share (Optional)
Blog post: Upload Blog post, update blog post and delete blog post.

Wrap Up: 
Maximum number of user = 5000
Maximum capacity for per Blog content = 3000 characters (600 words)
Maximum number of blogs per day = 100
100 words = 1kb

Estimates:
User Credentials (name, email, password, phoneNo, username, profile picture = 1mb) = 1.1mb
Blog content: (title, article, authorname, images = 1mb) = 1.006mb
5000 users x 1.1mb = 5500mb (5.5Gb)
36500(blogs in a year) x 1.006mb = 36719 (36.7 Gb)
Total = 42.2Gb
