import Layout from "../src/components/layout";
import Link from "next/link";
import useStyles from "../src/helper/headStyles";
import Pagination from "@material-ui/lab/Pagination";
import { usePagination, Skeleton } from "@material-ui/lab";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Paper,
  Button,
  Grid,
  Toolbar,
} from "@material-ui/core";
import { WebClient } from "../src/api/webclient";
import { useState, useEffect } from "react";
import { TablePagination } from "@material-ui/core";

function paginator(array, limit, page) {
  return array.slice((page - 1) * limit, page * limit);
}

export default function Home() {
  const [pageItems, setPageitems] = useState([]);
  const [items, setItems] = useState([]);

  const [loader, setLoader] = useState(true);

  const classes = useStyles();
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      WebClient.get("/posts").then((res) => {
        setItems(res.data);
        setPageitems(paginator(items, limit, page));
        setLoader(false);
      });
    }, 1000);
  }, []);

  //   const [noOfPages] = useState(Math.ceil(items.length / limit));
  // console.log(pageItems);

  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setLoader(true);
    setTimeout(() => {
      setPage(newPage);
      setPageitems(paginator(items, limit, page));
      setLoader(false);
    }, 1000);
  };

  return (
    <div>
      <Layout title="Tsx NEXT blog">
        <Typography variant="h3">Articles</Typography>

        <Typography variant="subtitle2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
          voluptatem illum sapiente nisi ab! Eligendi consequuntur sapiente
          architecto vitae natus neque veniam voluptatem enim. Explicabo
          accusamus consequatur voluptatibus quisquam fugiat!
        </Typography>
        <hr />
        <Grid container spacing={3}>
          {loader === true ? (
            <Skeleton variant="rect" width="100%">
              <div style={{ paddingTop: "57%" }} />
            </Skeleton>
          ) : (
            pageItems.map((item, idx) => {
              return (
                //  <Button target="_blank" component="a">{JSON.stringify(item)}</Button>

                <Grid item lg={4} md={6} sm={12}>
                  <Paper className={classes.paper}>
                    <Card>
                      <CardActionArea >
                        <CardContent>
                          <Typography gutterBottom variant="button" component="h2">
                            {item.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="textSecondary"
                            component="p"
							className={classes.cardBody}
                          >
                            {item.body}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Link
                          key={idx}
                          href={{ pathname: "/blogpage", query: item }}
                          passHref
                        >
                          <Button target="_blank" component="a" size="small" color="primary">
                            Learn More
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Paper>
                </Grid>
              );
            })
          )}
        </Grid>
        <Toolbar />
        <div className={classes.pagenator}>
          <Pagination
            count={items.length}
            page={page}
            onChange={handleChange}
            defaultPage={2}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </div>
      </Layout>
    </div>
  );
}
