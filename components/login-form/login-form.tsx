import React, { useState } from "react";
import { Button, TextField, Container } from "@material-ui/core";
import styles from "./login-form.module.css";

interface IProps {
  name: string;
  password: string;
}

export default function LoginForm({ name, password }: IProps) {
  const [inputName, setInputName] = useState<string | null>();
  const [inputPassword, setInputPassword] = useState<string | null>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      if (inputName !== name) throw "name does not match records";
      if (inputPassword !== password) throw "password incorrect";
      setIsLoggedIn(!isLoggedIn);
      setErrorMessage(null);
    } catch (err) {
      setErrorMessage(err);
    }
  }

  return (
    <div className={styles.container}>
      {errorMessage && <h4 className={styles.error}>{errorMessage}</h4>}
      {isLoggedIn ? (
        <h3>Welcome, {name}!</h3>
      ) : (
        <h3 data-testid="form-title" className={styles.formTitle}>
          Login Form
        </h3>
      )}
      {!isLoggedIn && (
        <>
          <TextField
            className={styles.input}
            label="Name"
            variant="outlined"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <TextField
            className={styles.input}
            label="Password"
            variant="outlined"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </>
      )}
      <Button color="primary" variant="contained" onClick={handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </Button>
    </div>
  );
}
