# Экран выбора и отправки условий

Реализован только экран "Респондент". Остальные страницы пустые

На данной странице можно выбрать условия, которые получены с помощью запроса к файлу db.json. Каждый условный блок получает случайный цвет. Часть элементов можно посмотреть через storybook. Некоторые из них не отобразятся, так как storybook использовался в начале разработки для визуализации элементов, а впоследствии они изменялись.
Результат формы выводится в консоль.

## Используемые технологии

- React
- Redux
- Redux-form
- Redux-saga
- Redux-actions
- React-router
- styled-component

* имитация работы с удалённой БД
* Атомарный подход разработки

- npm start - для запуска
- npm run storybook - запуск storybook
