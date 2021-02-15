import useStyles from "../src/helper/headStyles";
import Layout from "../src/components/layout";
import { Typography } from "@material-ui/core";

import { useRouter } from "next/router";

import Link from "next/link";
import { useEffect } from "react";
const BlogPage = (props) => {
  const router = useRouter();
  const { title, body } = router.query;

  return (
    <Layout title="Blog PAGE">
      <Typography variant="h3">Blog PAGE</Typography>
	  <hr />
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle2">
        {body}
      </Typography>
    </Layout>
  );
};

export default BlogPage;
