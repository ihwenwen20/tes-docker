# Gunakan image node.js sebagai base image, node biasa atau alpine yang lebih ringan bawaan linux
FROM node:18-alpine

# Set nama direktori untuk digunakan pada container docker nya, namanya bebas dan itu juga akan muncul pada terminal docker container
WORKDIR /app

# copy package.json dan package-lock.json (dengan tanda * artinya apapun setelah kata yang kita tentukan) ke directory WORKDIR nya
# Pada directory WORKDIR nya ./<Lalu nama directory> tapi karena kita telah declare workdir di atas jadi bisa langsung saja ./ atau agar lebih singkat langsung saja pakai . saja
COPY package*.json .

# RUN docker nya dengan perintah seperti yang biasa kita gunakan pada terminal linux, dan itu akan dimasukan ke workdir kita /app
RUN npm i

# copy kode aplikasi kita ke dalam container nya . pertama itu directory pada aplikasi kita lalu . yang kedua itu directory workdir container /app nya
COPY . .

# cara 1 mode selain dev, kita build dulu aplikasi kita dan sesuaikan dengan yang ada pada package json kita
# RUN npm run build
# EXPOSE 3001

# cara 2 mode development tanpa port expose, jika expose nya ada maka ubah npm run nya apa? sesuaikan dengan yang ada pada package json kita
CMD ["npm", "run", "start"]
