import React from "react";
import { Formik } from "formik";

function LogInForm() {
  return (
    <Formik>
      {formikProps => {
        return (
          <form>
            <input type="email" name="userEmail" />
            <input type="password" name="userPassword" />
            <button type="submit">Submit</button>
          </form>
        );
      }}
    </Formik>
  );
}

export default LogInForm;

// import React from "react";
// import * as yup from "yup";

// const LOGIN_SCHEMA = yup.object({
//   email: yup.string().email().required(),
//   password: yup
//     .string()
//     .matches(/^(?=.*[A-Z].*)(?=.*[a-z].?)(?=.*[!@#$%^&*].*).{8,32}/)
//     .min(8)
//     .max(32)
//     .required(),
// });

// const receivedUser = {
//   firstName: "Taras",
//   lastName: "Schevchenko",
//   age: "15",
// };

// const USER_SCHEME = yup.object({
//   firstName: yup
//     .string()
//     .required()
//     .matches(/^([A-Z][a-z]{1,18})$/)
//     .min(1)
//     .max(22),
//   lastName: yup
//     .string()
//     .required()
//     .matches(/^([A-Z][a-z]{1,18})$/)
//     .min(1)
//     .max(22),
//   age: yup.number().required().positive().integer(),
// });

// const isValidUser = USER_SCHEME.isValidSync(receivedUser);
// console.log("isValidUser :>> ", isValidUser);

// const validatedObject = {
//   email: "qwerty@qwerty.com",
//   password: "Qwe^^^^^^^^#12",
// };

// //isValid, isValids, validate, validateSync
// const isValid = LOGIN_SCHEMA.isValidSync(validatedObject);

// console.log("isValid :>> ", isValid);

// function LogInForm() {
//   return <div></div>;
// }

// export default LogInForm;
