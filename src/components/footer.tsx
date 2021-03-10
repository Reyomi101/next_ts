import { AppBar, Toolbar, Typography, Container ,Button } from '@material-ui/core';
import useStyles from '../helper/headStyles';
import Link from 'next/link';

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position={props.fixed === true ? 'fixed' : 'static'}
        color='secondary'
        className={classes.footer}>
        <Container maxWidth='md'>
          <Toolbar>
            <Typography variant='body1' color='inherit'>
              <Link href='/' passHref>
                <Button color='inherit' size="large">© 2021 REYOMI</Button>
              </Link>
              {/* <div className='buttonIcon'></div> */}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
