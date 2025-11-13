# TODO API (Node.js + Express + MySQL)

## Функции
- JWT-авторизация
- CRUD для задач
- Валидация данных
- Обработка ошибок
- Деплой: Хотел сделать его в Render, но там не было MySQL,если надо будет могу сделать, могу сделать через внешний БД (Railway)
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