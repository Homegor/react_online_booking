const validatorConfig = {
  name: {
    isRequired: {
      message: "Обязательно для заполнения"
    },
    minSymbol: {
      message: "Имя должно содержать не менее 3 символов",
      value: 3
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

export default validatorConfig
