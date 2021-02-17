import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import useStyles from "../helper/headStyles";

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position={props.fixed === true ? "fixed" : "static"}
        color="secondary"
        className={classes.footer}
      >
        {/* <Container maxWidth="lg"> */}
          <Toolbar>
            <Typography variant="body1" color="inherit">
              <div className="buttonIcon">© 2021 REYOMI</div>
            </Typography>
          </Toolbar>
        {/* </Container> */}
      </AppBar>
    </div>
  );
}
