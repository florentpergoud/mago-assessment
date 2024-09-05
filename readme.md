# Mago technical use case

We are building an app that allows to upload videos into projects.

You are building the first feature about video thumbnails.

## 🎯 Your mission

You need to be able to:

- display the existing projects
- select one project and display the associated thumbnails
- upload a thumbnail into an existing project
- delete a thumbnail
- implement the design as much as possible
- implement the tests

## 💅 Design

Here is the link to the figma file: [Mago - Thumbnails](https://www.figma.com/design/6D7yTLQqiGRDq7Fe5wE98O/Test?node-id=0-1&node-type=CANVAS&t=o0fTzTJEYkibcgoc-0).

Make sure you have the password to access the file.

## 💡 Precisions

- You can clone the project and push your code on a public repo that you can share with us at the end of the exercise
- The password to access the figma file will be given to you by our team
- You need to embrace a pragmatic mindset

## 🏁 Getting Started

```bash
# Start the database
docker-compose up -d

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Migrate and seed database
npx prisma migrate reset

# Start development server
npm run dev

# Open app
open http://localhost:3000
```

## 🤝 TIPS

- If you want to add anything to the project, feel free to add your touch! 💅
- You can access your DB content by running the command `npx prisma studio`
- You have access to the assets in the `public/assets/images` folder.
- The loader gif is in `public/assets/loader.gif`
