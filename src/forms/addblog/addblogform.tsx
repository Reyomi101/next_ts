import {
  TextField,
  Button,
  LinearProgress,
  Grid,
  Typography,
  Toolbar,
} from "@material-ui/core";
import useStyles from "../../helper/headStyles";
import { useState, useEffect, useRef } from "react";
import { Formik } from "formik";
import {BlogAdd} from '../../helper/validation/yup'



export default function AddBlogForm() {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Formik
        initialValues={{ subject: "", content: "" }}
        validationSchema={BlogAdd}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
         
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="subject"
                  name='subject'
                  label="Subject Tilte"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="filled"
                  error={ touched.subject && Boolean(errors.subject)}
                  helperText={Boolean(errors.subject) && touched.subject }

                />
                <Typography color="error">
                {errors.subject && touched.subject && errors.subject}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="content"
                  name="content"
                  label="Descriptions"
                  style={{ margin: 8 }}
                  fullWidth
                  multiline
                  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="filled"
                  error={ touched.content && Boolean(errors.content)}
                  helperText={Boolean(errors.content) && touched.content }

                />
                <Typography color="error">
                {errors.content && touched.content && errors.content}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
              <Grid item className={classes.loader} xs={9}>
                  {isSubmitting === false ? null : <LinearProgress
                  variant="buffer"
                  style={{ marginTop: "1rem" }}
                  value={progress}
                  valueBuffer={buffer}
                />}
                
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}
