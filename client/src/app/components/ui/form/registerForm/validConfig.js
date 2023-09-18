const validConfig = {
  email: {
    isRequired: { message: "Электронная почта обязательна" },
    isEmail: {
      message: "Email введен некорректно"
    }
  },
  name: {
    isRequired: { message: "Имя обязательна" },
    minSymbol: {
      message: "Имя должно содержать не менее 3 символов",
      value: 3
    }
  },
  password: {
    isRequired: { message: "Пароль обязателен" },
    isCapitalSymbol: {
      message: "Пароль должен содержать хотя бы одну заглавную букву"
    },
    isContainDigit: {
      message: "Пароль должен содержать хотя бы одно число"
    },
    minSymbol: {
      message: "Пароль должен содержать не менее 8 символов",
      value: 8
    }
  },
  sex: {
    isRequired: {
      message: "Обязательно выберете свой пол"
    }
  },
  licence: {
    isRequired: {
      message:
        "Нажимая вы подтверждаете что ознакомились с лицензионным соглашением"
    }
  },
  phone: {
    isRequired: {
      message: "Обязательно для заполнения"
    },
    isOnlyNumber: {
      message: "Должен содержать только цифры"
    },
    isNumberValid: {
      message: "Не менее 11 символов",
      value: 11
    }
  }
}

export default validConfig
