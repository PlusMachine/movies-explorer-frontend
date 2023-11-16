export default function errorMessage(status, defaultText) {
  switch (status) {
    case 409:
      return 'Пользователь с таким email уже существует'

    case 500:
      return 'На сервере произошла ошибка'

    case 401:
      return 'Неверный логин или пароль'

    default:
      return defaultText
  }
};