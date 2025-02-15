import { Formik, Form, Field, ErrorMessage } from "formik";
import MaskedInput from "react-text-mask";
import React, { useState } from "react";

import FormSchema from "../../../schema/FormSchema";
import { ButtonForm } from "../../Atoms/ButtonForm/ButtonForm";
import { LabelForm } from "../../Atoms/LabelForm/LabelForm";

import styles from "./FormCadastro.module.scss";

interface IFormikValues {
  email: string;
  password: string;
  confirmationPassword: string;
  name: string;
  lastName: string;
  birthDate: string;
  address: string;
}
const initialValues = {
  email: "",
  password: "",
  confirmationPassword: "",
  name: "",
  lastName: "",
  birthDate: "",
  address: "",
};

const FormCadastro = () => {
  const [FormSuccess, setFormSuccess] = useState(false);

  const [screen, setScreen] = React.useState<"login" | "personal" | "address">(
    "login"
  );

  const handleNavigateLogin = () => {
    setScreen("login");
  };
  const handleNavigatePersonal = () => {
    setScreen("personal");
  };

  const handleNavigateAddress = () => {
    setScreen("address");
  };

  const handleSuccess = () => {
    const modal: HTMLElement | undefined | null =
      document.getElementById("modal");
    if (modal !== undefined && modal !== null) {
      modal!.style.display = "none";
    }
  };

  return (
    <div className={styles["form"]}>
      <Formik
        onSubmit={(values: IFormikValues, onSubmitProps) => {
          console.log(values);
          onSubmitProps.resetForm();
          onSubmitProps.setSubmitting(false);
          setFormSuccess(true);
          const modal: HTMLElement | undefined | null =
            document.getElementById("modal");
          if (modal !== undefined && modal !== null) {
            modal!.style.display = "flex";
          }
        }}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        {() => (
          <>
            <div className={styles["form__navigate"]}>
              <button
                type="button"
                className={styles["form__navigate__button"]}
                onClick={handleNavigateLogin}
              >
                Etapa 1
              </button>
              <button
                type="button"
                className={styles["form__navigate__button"]}
                onClick={handleNavigatePersonal}
              >
                Etapa 2
              </button>
              <button
                type="button"
                className={styles["form__navigate__button"]}
                onClick={handleNavigateAddress}
              >
                Etapa 3
              </button>
            </div>
            <Form className={styles["form__wrapper"]}>
              <h2 className={styles["form__title"]}>Preencha o formulário </h2>
              {screen === "login" && (
                <>
                  <div className={styles["form__col"]}>
                    <LabelForm
                      className={styles["form__col__type"]}
                      htmlFor={"email"}
                      text={"E-mail"}
                    />
                    <Field id="email" name="email" placeholder="Seu email" />
                    <ErrorMessage
                      component="span"
                      name="email"
                      className={styles["form__col__error"]}
                    />
                  </div>
                  <div className={styles["form__col"]}>
                    <LabelForm
                      className={styles["form__col__type"]}
                      htmlFor={"password"}
                      text={"Senha"}
                    />
                    <Field
                      id="password"
                      name="password"
                      placeholder="Sua senha"
                    />
                    <ErrorMessage
                      component="span"
                      name="password"
                      className={styles["form__col__error"]}
                    />
                  </div>
                  <div className={styles["form__col"]}>
                    <LabelForm
                      className={styles["form__col__type"]}
                      htmlFor={"confirmationPassword"}
                      text={"Confirmação de Senha"}
                    />
                    <Field
                      id="confirmationPassword"
                      name="confirmationPassword"
                      placeholder="Confirme sua senha"
                    />
                    <ErrorMessage
                      component="span"
                      name="confirmationPassword"
                      className={styles["form__col__error"]}
                    />
                  </div>
                  <div className={styles["form__button__back-go"]}>
                    <button
                      type="button"
                      className={styles["form__button__back-go__button"]}
                      onClick={handleNavigatePersonal}
                    >
                      Avançar
                    </button>
                  </div>
                </>
              )}
              {screen === "personal" && (
                <>
                  <div className={styles["form__col"]}>
                    <LabelForm
                      className={styles["form__col__type"]}
                      htmlFor={"name"}
                      text={"Nome"}
                    />
                    <Field id="name" name="name" placeholder="Seu nome" />
                    <ErrorMessage
                      component="span"
                      name="name"
                      className={styles["form__col__error"]}
                    />
                  </div>
                  <div className={styles["form__col"]}>
                    <LabelForm
                      className={styles["form__col__type"]}
                      htmlFor={"lastName"}
                      text={"Sobrenome"}
                    />
                    <Field
                      id="lastName"
                      name="lastName"
                      placeholder="Seu sobrenome"
                    />
                    <ErrorMessage
                      component="span"
                      name="lastName"
                      className={styles["form__col__error"]}
                    />
                  </div>
                  <div className={styles["form__col"]}>
                    <LabelForm
                      className={styles["form__col__type"]}
                      htmlFor={"birthDate"}
                      text={"Data de Nascimento"}
                    />

                    <Field
                      type="tel"
                      name="birthDate"
                      render={({ field }: any) => (
                        <MaskedInput
                          id="birthDate"
                          placeholder="00.00.0000"
                          type="tel"
                          mask={[
                            /[0-3]/,
                            /[0-9]/,
                            ".",
                            /[0-1]/,
                            /[0-9]/,
                            ".",
                            /[0-9]/,
                            /[0-9]/,
                            /[0-9]/,
                            /[0-9]/,
                          ]}
                          {...field}
                        />
                      )}
                    ></Field>
                    <ErrorMessage
                      component="span"
                      name="birthDate"
                      className={styles["form__col__error"]}
                    />
                  </div>
                  <div className={styles["form__button__back-go"]}>
                    <button
                      type="button"
                      className={styles["form__button__back-go__button"]}
                      onClick={handleNavigateLogin}
                    >
                      Voltar
                    </button>
                    <button
                      type="button"
                      className={styles["form__button__back-go__button"]}
                      onClick={handleNavigateAddress}
                    >
                      Avançar
                    </button>
                  </div>
                </>
              )}
              {screen === "address" && (
                <>
                  <div className={styles["form__col"]}>
                    <LabelForm
                      className={styles["form__col__type"]}
                      htmlFor={"address"}
                      text={"Endereço completo"}
                    />
                    <Field
                      id="address"
                      name="address"
                      placeholder="Endereço completo"
                    />
                    <ErrorMessage
                      component="span"
                      name="address"
                      className={styles["form__col__error"]}
                    />
                  </div>
                  <div className={styles["form__button__back-go"]}>
                    <button
                      type="button"
                      className={styles["form__button__back-go__button"]}
                      onClick={handleNavigatePersonal}
                    >
                      Voltar
                    </button>
                  </div>
                </>
              )}
              <div className={styles["form__button__back-go"]}>
                <ButtonForm
                  className={styles["form__button"]}
                  type="submit"
                  text={"Enviar"}
                  disabled={false}
                />
              </div>
              {FormSuccess && (
                <div id="modal" className={styles["form__modal"]}>
                  <div className={styles["form__modal__center"]}>
                    <span className={styles["form__wrapper__success"]}>
                      *Formulário enviado com sucesso!
                    </span>
                    <button
                      className={styles["form__modal__center__button"]}
                      type="button"
                      onClick={handleSuccess}
                    >
                      x
                    </button>
                  </div>
                </div>
              )}
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export { FormCadastro };
