# Выбираем базовый образ
FROM node:14

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости проекта
RUN npm install

# Копируем исходный код проекта в контейнер
COPY . .

# Собираем приложение для production
RUN npm run build

# Устанавливаем serve для запуска собранного приложения
RUN npm install -g serve

# Открываем порт 3000
EXPOSE 3008

# Запускаем приложение
CMD ["node", "server.js"]
