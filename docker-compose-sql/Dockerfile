# Gunakan Node.js versi LTS sebagai base image
FROM node:20-alpine3.20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g pm2

# Copy semua file source ke dalam image
COPY . .

# Expose port aplikasi
# EXPOSE 5000

# Jalankan aplikasi
# CMD ["pm2-runtime", "src/index.js"]
CMD ["sh", "-c", "sleep 10 && pm2-runtime src/index.js"]