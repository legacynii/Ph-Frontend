import React, {useState} from 'react'
import { Typography,DialogContent, Dialog, AppBar,Button, Card, CardActions, CardActionArea, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, DialogTitle } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

import alpha from './IMG/alpha.jpg';
import Sugar from './IMG/Sugar.JPG';
import emerald from './IMG/emerald.JPG';
import baby from './IMG/baby.JPG';
import Queency from './IMG/Queency.JPG';
import a from './IMG/a.jpg';
import b from './IMG/b.jpg';
import c from './IMG/c.jpg';
// import d from './IMG/d.jpg';
import e from './IMG/e.jpg';
import f from './IMG/f.jpg';
import g from './IMG/g.jpg';
import h from './IMG/h.jpg';
import i from './IMG/i.jpg';
import j from './IMG/j.jpg';
import k from './IMG/k.JPG';
import l from './IMG/l.JPG';
import m from './IMG/m.JPG';
import n from './IMG/n.JPG';
import o from './IMG/o.JPG';
import p from './IMG/p.JPG';
import q from './IMG/q.JPG';
import r from './IMG/r.jpg';
import s from './IMG/s.jpg';
import t from './IMG/t.jpg';
import u from './IMG/u.jpg';
import v from './IMG/v.jpg';
import w from './IMG/w.jpg';
import x from './IMG/x.jpg';
import y from './IMG/y.jpg';
import z from './IMG/z.jpg';
import ab from './IMG/ab.jpg';
import ac from './IMG/ac.jpg';





const students = [
  { id: 1, name: 'Emerald',  description: '"With God All Things Are Possible"', image: alpha },
  { id: 2, name: 'Larbi',  description: '"God never rests!"', image: Sugar },
  { id: 3, name: 'Lovey',  description: '"With God All Things Are Possible!"', image: emerald },
  { id: 4, name: 'Baby',  description: '"He never gives up on you"', image: baby },
  { id: 5, name: 'Queency', description: '"Keep On Keeping On"', image: Queency },
  { id: 5, name: 'a',  description: '"Keep On Keeping On"', image: a },
  { id: 5, name: 'b',  description: '"Keep On Keeping On"', image: b },
  { id: 5, name: 'c',  description: '"Keep On Keeping On"', image: c },
  // { id: 5, name: 'd',  description: '"Keep On Keeping On"', image: d },
  { id: 5, name: 'e',  description: '"Keep On Keeping On"', image: e },
  { id: 5, name: 'f',  description: '"Keep On Keeping On"', image: f },
  { id: 5, name: 'g',  description: '"Keep On Keeping On"', image: g },
  { id: 5, name: 'h',  description: '"Keep On Keeping On"', image: h },
  { id: 5, name: 'i',  description: '"Keep On Keeping On"', image: i },
  { id: 5, name: 'j',  description: '"Keep On Keeping On"', image: j },
  { id: 5, name: 'k',  description: '"Keep On Keeping On"', image: k },
  { id: 5, name: 'l',  description: '"Keep On Keeping On"', image: l },
  { id: 5, name: 'm',  description: '"Keep On Keeping On"', image: m },
  { id: 5, name: 'n',  description: '"Keep On Keeping On"', image: n },
  { id: 5, name: 'o', description: '"Keep On Keeping On"', image: o },
  { id: 5, name: 'p',  description: '"Keep On Keeping On"', image: p },
  { id: 5, name: 'q',  description: '"Keep On Keeping On"', image: q },
  { id: 5, name: 'r', description: '"Keep On Keeping On"', image: r },
  { id: 5, name: 's',  description: '"Keep On Keeping On"', image: s },
  { id: 5, name: 't',  description: '"Keep On Keeping On"', image: t },
  { id: 5, name: 'u',  description: '"Keep On Keeping On"', image: u },
  { id: 5, name: 'v', description: '"Keep On Keeping On"', image: v },
  { id: 5, name: 'w',  description: '"Keep On Keeping On"', image: w },
  { id: 5, name: 'x',  description: '"Keep On Keeping On"', image: x },
  { id: 5, name: 'y',  description: '"Keep On Keeping On"', image: y },
  { id: 5, name: 'z',  description: '"Keep On Keeping On"', image: z },
  { id: 5, name: 'ab', description: '"Keep On Keeping On"', image: ab },
  { id: 5, name: 'ac',  description: '"Keep On Keeping On"', image: ac },





]

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const itemsPerPage = 8;
  const totalPages = Math.ceil(students.length / itemsPerPage);
  
  const [currentPage, setCurrentPage] = useState(1);

  const getStudentsForCurrentPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return students.slice(startIndex, endIndex);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  }

  const classes = useStyles();

  const openModal = (photoUrl) => {
    setSelectedPhoto(photoUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto('');
    setModalOpen(false);
  }

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{marginTop: '50px'}}>
            <Typography variant="h2" align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello there! This is an album website created for keeping the sweet moments and memories with my love
            </Typography>
            
            <div className={classes.button}>
              <Grid container spacing={4} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                      See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                      Secondary Action 
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>

            {getStudentsForCurrentPage().map((student)=>(
            
              <Grid item key={student.id} xs={12} sm={6} md={4}>
                <Card className={`${classes.card} ${classes.elevatedCard}`}>
                <CardMedia
                  className={classes.cardMedia}
                  image= {student.image}
                  title={student.name}
                />
                
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' >
                    {student.name}
                  </Typography>
                  <Typography>
                    {student.description}
                  </Typography>
                </CardContent>
                <CardActions>
                    <Button
                      size='small'
                      color='primary'
                      onClick={() => openModal(student.image) }
                    >View
                    </Button>
                  <Button size='small' color='primary'>Edit</Button>

                </CardActions>
                </Card>
                <Dialog open={modalOpen} onClose={closeModal} maxWidth = 'md'>
                  <DialogTitle>Full Size Photo</DialogTitle>
                  <DialogContent>
                    <img
                      src={selectedPhoto}
                      alt="Full Size"
                      style={{width:"100%", maxHeight: '80vh'}}
                    />
                  </DialogContent>
                </Dialog>
            </Grid>
            ))}
            
          </Grid>

          <div className={classes.pagination}>
            <Button
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
            >
              First
            </Button>
            <Button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
            <Button
              onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}>
              Last
            </Button>
          </div>
        </Container>
      </main>
      <footer className= {classes.footer}>
        <Typography variant = "h6" align="center" gutterBottom>
          The Future Is Exciting!
        </Typography>
        <Typography variant="subtitle1" align="center" color='textSecondary'>
              Loving the view?
        </Typography>



      </footer>
      
    </>
  )
}

export default App
