import clsx from "clsx";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../../assets/scss/pages/_login.module.scss";

export default function Login() {
  return (
    <div className={clsx(styles.loginPage)}>
      <div className={clsx(styles.pageContent)}>
        <div className={clsx(styles.titleContent)}>
          <LockIcon />
          <h3>Sign in</h3>
        </div>
        <div className={clsx(styles.loginForm)}>
          <TextField
            className={clsx(styles.emailInput)}
            required
            label="Email Address"
            defaultValue="admin@gmail.com"
          />
          <TextField
            className={clsx(styles.passwordInput)}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button className={clsx(styles.signInButton)} variant="contained">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
