import { isString, isValidEmail, isValidPassword } from "../../Utils/Utilities";
// import moment from "moment";

export const validations = Object.freeze({
  post: {
    name: {
      exists: true,
      isLength: {
        errorMessage:
          "Name is required field and minimum 2 characters are required.",
        options: { min: 2 }
      },
      custom: {
        options: (name: string): boolean => {
          return isString(name);
        },
        errorMessage: "Name should be string."
      }
    },
    rent: {
      exists: true,
      isInt: true,
      toFloat: true,
      errorMessage: "Please enter valid rent."
    },
    price: {
      exists: true,
      isInt: true,
      toFloat: true,
      errorMessage: "Please enter valid price."
    },
    manufactureDate: {
      isDate: true,
      exists: true,
      errorMessage: "Please enter valid date"
    },
    actualCost: {
      exists: true,
      isInt: true,
      toFloat: true,
      errorMessage: "Please enter valid cost."
    }
  },
  put: {
    name: {
      exists: true,
      isLength: {
        errorMessage:
          "Name is required field and minimum 2 characters are required.",
        options: { min: 2 }
      },
      custom: {
        options: (name: string): boolean => {
          return isString(name);
        },
        errorMessage: "Name should be string."
      }
    },
    rent: {
      exists: true,
      isInt: true,
      toFloat: true,
      errorMessage: "Please enter valid rent."
    },
    "rented.to": {
      exists: true
    },
    price: {
      exists: true,
      isInt: true,
      toFloat: true,
      errorMessage: "Please enter valid price."
    },
    manufactureDate: {
      isDate: true,
      exists: true,
      errorMessage: "Please enter valid date"
    },
    actualCost: {
      exists: true,
      isInt: true,
      toFloat: true,
      errorMessage: "Please enter valid cost."
    }
  },
  delete: {
    id: {
      in: ["query"],
      errorMessage: "id bad format",
      optional: false,
      custom: {
        options: (id: string) => isString(id),
        errorMessage: "id bad format"
      }
    }
  }
});
