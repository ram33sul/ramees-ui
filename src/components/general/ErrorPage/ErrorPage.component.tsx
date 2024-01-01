import { useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import SingleSection from "../../views/SingleSection/SingleSection.component";
import Button from "../Button/Button.component";
import React from 'react';

export default function ErrorPage({
  status = 400,
  message = "Page not found!",
  description = "Oops, the page you are looking for is not found, Please recheck the URL.",
  redirectConfig = { path: "/", text: "Go back to home" },
}) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(redirectConfig.path);
  };

  return (
    <SingleSection>
      <div className={styles.container}>
        <div className={styles.status}>{status}</div>
        <div className={styles.message}>{message}</div>
        <div className={styles.description}>{description}</div>
        <Button
          style={{ marginRight: "auto" }}
          type="primary"
          onClick={handleNavigate}
        >
          {redirectConfig.text}
        </Button>
      </div>
    </SingleSection>
  );
}
