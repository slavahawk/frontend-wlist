# Используем официальный Node.js образ
FROM node:22 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Используем другой образ для запуска
FROM node:22 AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранные файлы из builder
COPY --from=builder /app/.output ./

# Устанавливаем зависимости для запуска
COPY --from=builder /app/node_modules ./node_modules

# Открываем порт
EXPOSE 3000

# Команда для запуска приложения
CMD ["node", "server/index.mjs"]
