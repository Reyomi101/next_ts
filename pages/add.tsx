import React from "react";
import Layout from "../src/components/layout";
import useStyles from "../src/helper/headStyles";
import {
  TextField,
  Button,
  LinearProgress,
  Grid,
  Typography,
  Toolbar,
} from "@material-ui/core";
// import AddBlogForm from "../src/forms/addblog/addblogform";
import { useState, useEffect, useRef } from "react";
import { Formik } from "formik";
import { BlogAdd } from "../src/helper/validation/yup";
import { connect } from "react-redux";
import { Create_post } from "../src/redux/actions/mainAction";

function Add() {
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
    <div>
      <Layout title="Add BLOG" fixed={false}>
        <Typography variant="h3">This is ADD page</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
          culpa? A odit dolorem illo delectus fuga labore fugiat culpa libero et
          recusandae officia accusantium laborum numquam sit necessitatibus
          fugit, temporibus incidunt veniam modi exercitationem? Quia inventore
          earum aliquam dolorem veniam dicta, minima excepturi officia
          repudiandae culpa ea explicabo dolores sunt.
        </Typography>
        <hr />
        <div className={classes.addform}>
          {/* <AddBlogForm /> */}
          <Formik
            initialValues={{ subject: "", content: "" }}
            validationSchema={BlogAdd}
            onSubmit={(values, { setSubmitting }) => {
              Create_post(values)
              // const postDatas = Create_post(values)
              // alert(JSON.stringify(values));
              // .then(res => {
              //   setSubmitting(false);
              // });
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
                      name="subject"
                      label="Subject Tilte"
                      style={{ margin: 8 }}
                      fullWidth
                      margin="normal"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="filled"
                      error={touched.subject && Boolean(errors.subject)}
                      helperText={Boolean(errors.subject) && touched.subject}
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
                      error={touched.content && Boolean(errors.content)}
                      helperText={Boolean(errors.content) && touched.content}
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
                    {isSubmitting === false ? null : (
                      <LinearProgress
                        variant="buffer"
                        style={{ marginTop: "1rem" }}
                        value={progress}
                        valueBuffer={buffer}
                      />
                    )}
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </div>
        <Toolbar />
        <Toolbar />
        <Toolbar />
        <Toolbar />
        <Toolbar />
        <Toolbar />
      </Layout>
    </div>
  );
}

const mapSateToProps = value => ({
	Create_post : value
  })
  
  const mapDispatchToProps = {
	Create_post: Create_post
  }
  
  
  export default connect(mapSateToProps, mapDispatchToProps)(Add)
  
