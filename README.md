# TODO API (Node.js + Express + MySQL)

## Функции
- JWT-авторизация
- CRUD для задач
- Валидация данных
- Обработка ошибок
- Деплой: [Render](https://todo-api.onrender.com)

## Роуты
| Метод | Путь | Описание |
|-------|------|---------|
| POST | /api/auth/register | Регистрация |
| POST | /api/auth/login | Логин → JWT |
| GET | /api/tasks | Все задачи |
| POST | /api/tasks | Создать |
| PUT | /api/tasks/:id | Обновить |

## Технологии
- Express.js
- MySQL
- JWT
- bcrypt
- dotenv

## Запуск
`bash
npm install
npm run dev