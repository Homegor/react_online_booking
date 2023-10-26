const validConfig = {
  email: {
    isRequired: { message: "Электронная почта обязательна" },
    isEmail: {
      message: "Email введен некорректно"
    }
  },
  password: {
    isRequired: { message: "Пароль обязателен для заполнения" }
  }
}
