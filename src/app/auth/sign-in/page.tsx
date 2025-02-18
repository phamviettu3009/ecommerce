"use client";

import { signIn, signOut } from "next-auth/react";
import styles from "./styles.module.scss";
import { Button, CircularProgress, Divider, FormControl, FormLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Fragment } from "react";
import Link from "next/link";
import { classes } from "@/app/utils/css";

function SignInPage() {
    const { session, message, handleSignIn, signInControl, isLoading } = useAuth();

    return (
        <div className={styles["page"]}>
            <FormControl className={styles["form"]}>
                {session ? (
                    <Fragment>
                        <p>Welcome, {session.user?.name}</p>
                        <Button fullWidth variant="contained" onClick={() => signOut()}>
                            Sign Out
                        </Button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <FormLabel className="align-self-center fs-4 fw-bold">Sign In</FormLabel>
                        <Controller
                            name="email"
                            control={signInControl}
                            render={({ field }) => (
                                <TextField {...field} id="standard-adornment-email" label="Email" variant="standard" />
                            )}
                        />
                        <Controller
                            name="password"
                            control={signInControl}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="standard-adornment-password"
                                    type="password"
                                    label="Password"
                                    variant="standard"
                                />
                            )}
                        />
                        <Button
                            className="mt-3"
                            variant="contained"
                            disabled={isLoading}
                            fullWidth
                            onClick={handleSignIn}
                        >
                            {isLoading ? <CircularProgress size="25px" color="inherit" /> : <span>Sign In</span>}
                        </Button>
                        {message && <p className={classes(styles, "text-danger form-message")}>{message}</p>}
                        <Divider>OR</Divider>
                        <Button
                            disabled={isLoading}
                            variant="outlined"
                            fullWidth
                            onClick={() => signIn("google", { callbackUrl: "http://localhost:3000" })}
                        >
                            Sign In with Google
                        </Button>

                        <Link href={"/auth/sign-up"}>Sign up</Link>
                    </Fragment>
                )}
            </FormControl>
        </div>
    );
}

export default SignInPage;
