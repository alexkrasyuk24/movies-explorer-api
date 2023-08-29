# movies-explorer-api

## Написания бекенд части для депломного проекта Movies поисковик фильмов

В данном репозитории хранится бэкенд приложения Movies Explorer. Pоутинг:

- POST /signup - регистрация пользователя

- POST /signin - логин пользователя

- GET /users/me - информация о пользователе

- PATCH /users/me - обновляет информацию о пользователе

- GET /movies - возвращает все сохранённые фильмы связанные текущим пользователем

- POST /movies - создаёт новый фильм

- DELETE /movies/:movieId - удаляет сохранённый фильм по его ID

## Установка и запуск проекта:

Клонировать репозиторий: `git clone git@github.com:alexkrasyuk24/movies-explorer-api.git`

Установить зависимости: `npm install`

Запустить сервер: `npm run start`

Запустить сервер с hot-reload: `npm run dev`

## Ccылка на Pull requests

https://github.com/alexkrasyuk24/movies-explorer-api/pull/1

## Ccылка на репозиторий

https://alexkrasyuk24.github.io/movies-explorer-api/
