import { isString, isValidEmail, isValidPassword } from "../../Utils/Utilities";
// import moment from "moment";

export const validations = Object.freeze({
  post: {
    name: {
      exists: true,
      isLength: {
        errorMessage:
          "Name is required field and minimum 3 characters are required.",
        options: { min: 3 }
      },
      custom: {
        options: (name: string): boolean => {
          return isString(name);
        },
        errorMessage: "Name should be string."
      }
    },
    email: {
      exists: true,
      isLength: {
        errorMessage:
          "Email is required field and minimum 3 characters are required.",
        options: { min: 3 }
      },
      custom: {
        options: (email: string): boolean => {
          return isValidEmail(email);
        },
        errorMessage: "Please enter valid email."
      }
    },
    password: {
      exists: true,
      isLength: {
        errorMessage: "Password must be 8 to 13 characters long",
        options: { min: 8, max: 13 }
      },
      custom: {
        options: (password: string): boolean => {
          return isValidPassword(password);
        },
        errorMessage:
          "Password must contain 1 lower case letter, 1 upper case letter, one number, one special character, length should 8 to 13 characters."
      },
      errorMessage: "Password is a required field."
    }
  },
  put: {
    name: {
      exists: true,
      isLength: {
        errorMessage:
          "Name is required field and minimum 3 characters are required.",
        options: { min: 3 }
      },
      custom: {
        options: (name: string = ""): boolean => {
          return isString(name);
        },
        errorMessage: "Name should be string."
      }
    },
    password: {
      exists: true,
      isLength: {
        errorMessage: "Password must be 8 to 13 characters long",
        options: { min: 8, max: 13 }
      },
      custom: {
        options: (password: string): boolean => {
          return isValidPassword(password);
        },
        errorMessage:
          "Password must contain 1 lower case letter, 1 upper case letter, one number, one special character, length should 8 to 13 characters."
      },
      errorMessage: "Password is a required field."
    }
  },
  delete: {
    id: {
      in: ["query"],
      errorMessage: "id bad format",
      optional: false,
      custom: {
        options: (id: string = "") => isString(id),
        errorMessage: "id bad format"
      }
    }
  }
});
