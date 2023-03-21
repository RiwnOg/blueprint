# BLUEPRINT

This is a scafold project. The base to all other projects.

# STACK:

1. NEXTjs 13
   ref: https://beta.nextjs.org/docs/installation
2. TAILWINDcss
   ref: https://tailwindcss.com/docs/guides/nextjs
3. SUPABASE - Backend as Service - Postgres
   ref: https://supabase.com/
   PLANETSCALE - Backend as Service - MySQL
   ref: https://planetscale.com/docs
4. PRISMA
   ref: https://www.prisma.io/docs/getting-started/quickstart
5. nextjs-prisma-postgres - guide
   ref: https://vercel.com/guides/nextjs-prisma-postgres

# Installs:

npx create-next-app@latest --experimental-app

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install typescript ts-node @types/node --save-dev
npm install prisma --save-dev
npm i @prisma/client
npx prisma init --datasource-provider mysql
npx prisma db push
npx prisma generate
