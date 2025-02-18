"use client";

import React from "react";
import styles from "./styles.module.scss";
import { Button, CircularProgress, FormControl, FormLabel, TextField } from "@mui/material";
import useAuth from "@/app/hooks/useAuth";
import { Controller } from "react-hook-form";
import { classes } from "@/app/utils/css";

function SignUpPage() {
    const { signUpControl, isLoading, handleSignUp, message } = useAuth();

    return (
        <div className={styles["page"]}>
            <FormControl className={styles["form"]}>
                <FormLabel className="align-self-center fs-4 fw-bold">Sign Up</FormLabel>
                <Controller
                    name="email"
                    control={signUpControl}
                    render={({ field }) => (
                        <TextField {...field} id="standard-adornment-email" label="Email" variant="standard" required />
                    )}
                />

                <Controller
                    name="password"
                    control={signUpControl}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="standard-adornment-password"
                            type="password"
                            label="Password"
                            variant="standard"
                            required
                        />
                    )}
                />

                <Controller
                    name="phone"
                    control={signUpControl}
                    render={({ field }) => (
                        <TextField {...field} id="standard-adornment-phone" label="Phone" variant="standard" required />
                    )}
                />

                <Button className="mt-3" variant="contained" disabled={isLoading} fullWidth onClick={handleSignUp}>
                    {isLoading ? <CircularProgress size="25px" color="inherit" /> : <span>Sign In</span>}
                </Button>

                {message && <p className={classes(styles, "text-danger form-message")}>{message}</p>}
            </FormControl>
        </div>
    );
}

export default SignUpPage;
