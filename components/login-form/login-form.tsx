import React, { useState } from "react";
import { Button, TextField, Container } from "@material-ui/core";
import styles from "./login-form.module.css";

export default function LoginForm() {
  const [name, setName] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();
  return (
    <div className={styles.container}>
      <h3 className={styles.formTitle}>Log In Form</h3>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button color="primary" variant="contained">
        Login
      </Button>
    </div>
  );
}
