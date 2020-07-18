import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useRouter } from "next/router";
import MenuItem from "@material-ui/core/MenuItem";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
const preventDefault = f => e => {
  e.preventDefault();
  f(e);
};
export default function Candidates({ list }, { action = "/candidate" }) {
  console.log(list);
  const router = useRouter();
  const classes = useStyles();
  const handleSubmit = preventDefault(async () => {
    const resp = fetch("http://localhost:3001/api/candidate", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        created: "11-11-11",
        image: "/var/www",
        type: 1,
        user_type: 2
      })
    });

    router.push(action);
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <h1>Username and Password</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="current_password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <h1>Contact Information</h1>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoComplete="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="DOB"
                label="DOB"
                type="DOB"
                id="DOB"
                autoComplete="DOB"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="country"
                select
                label="Select"
                type="country"
                id="country"
                autoComplete="country"
              >
                {list.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.countryName}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <h1>Brief Synopsis Of Your Resume</h1>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fullName"
                name="experience"
                variant="outlined"
                required
                fullWidth
                id="experience"
                label="Total Experience"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="skills"
                label="Key Skills"
                name="key_skills"
                autoComplete="Skills"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="functional_area"
                label="Functional Area"
                type="text"
                id="functional_area"
                autoComplete="Functional"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
Candidates.getInitialProps = async () => {
  const resp = await fetch("http://localhost:3001/api/country");
  const json = await resp.json();
  console.log(json);
  return { list: json };
};
// Candidates.getInitialProps = async () => {
//   const resp = await fetch("http://localhost:3000/api/candidate");
//   const json = await resp.json();
//   return { list: json };
// };
// submitForm (data) {
//     fetch('/api/contact', {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     }).then((res) => {
//       res.status === 200 ? this.setState({ submitted: true }) : ''
//     })
//   }
