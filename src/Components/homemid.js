import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import headerImage from "../images/headerImage.jpg";
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// <<<<<<< Updated upstream
// // import backgroundImage from '../images/layered-waves-haikei.svg';

// =======
// import backgroundImage from "../images/layered-waves-haikei.svg";
// >>>>>>> Stashed changes

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginTop: "10vh",
    padding: "20px",
    // border: '1px solid black',
  },
  backgroundImage: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    objectFit: "cover",
  },
  grid: {
    height: "calc(90vh - 24px)",
    position: "relative",
    // height: '100%',
    // border: '1px solid red',
  },
  gridItem: {
    position: "relative",
    // height: '100%',
  },
  cont: {
    position: "relative",
    // border: 'black 1px solid',
    height: "70%",
    // backgroundColor: 'red',
  },
  headerImage: {
    position: "relative",
    // display: 'block',
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
// <<<<<<< Updated upstream
//     backgroundImage: {
//         position: 'fixed',
//         width: '100%',
//         height: '100%',
//         top:'0',
//         left: '0',
//         objectFit: 'cover',
//     },
//     grid: {
//         height: 'calc(90vh - 24px)',
//         position: 'relative',
//         // height: '100%',
//         // border: '1px solid red',
//     },
//     gridItem: {
//         position: 'relative',
//         height: '70%',
//         [theme.breakpoints.down('xs')]: {
//             height: 'auto',
//         }
//     },
//     cont: {
//         position: 'relative',
//         // border: 'black 1px solid',
//         height: '100%',
//         // backgroundColor: 'red',
//     },
//     headerImage: {
//         position: 'relative',
//         // display: 'block',
//         height: '100%',
//         width: '100%',
//         objectFit: 'cover',
//         borderRadius: '10px',
//         [theme.breakpoints.down('xs')]: {
//             height: 'auto',
//         },
//     },
//     textCont: {
//         position: 'relative',
//         height: '70%',
//         // color: '#fff',
//     },
//     descDiv: {
//         position: 'relative',
//         height: '100%',
//         // border: '1px solid black',
//         display: 'flex',
//         alignItems: 'center',
//         textAlign: 'justify',
//         padding: '20px',
//         fontSize: '1.2rem',
//         [theme.breakpoints.down('sm')]: {
//             display: 'block',  
//             paddingTop: 0, 
//             fontSize: '1.1rem',
//             // alignItems: 'flex-start',
//         },
//         [theme.breakpoints.down('xs')]: {
//             // display: 'block',
//             // paddingTop: 0,
//             fontSize: '1.2rem',
//             // alignItems: 'flex-start',
//         },
//     }
//     // headerDiv: {
//     //     // border: '1px solid red',
//     //     // height: 'calc(90vh - 40px)',
//     //     display: 'flex',

//     // }
// =======
  },
  textCont: {
    position: "relative",
    height: "70%",
  },
  descDiv: {
    position: "relative",
    height: "100%",
    // border: '1px solid black',
    display: "flex",
    alignItems: "center",
    textAlign: "justify",
    padding: "20px",
    fontSize: "1.2rem",
    // [theme.breakpoints.down('sm')]: {
    //     fontSize: '1.1rem',
    // },
  },
  // headerDiv: {
  //     // border: '1px solid red',
  //     // height: 'calc(90vh - 40px)',
  //     display: 'flex',

  // }
// >>>>>>> Stashed changes
}));

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));
const Homemid = () => {
// <<<<<<< Updated upstream
//     const classes = useStyles();
//     return (
//         <div className={classes.mainDiv}>
//             {/* <img src={backgroundImage} alt='backgroundimg' className={classes.backgroundImage} /> */}
//             {/* <div className={classes.headerDiv}>
// =======
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      {/* <img
        src={backgroundImage}
        alt="backgroundimg"
        className={classes.backgroundImage}
      /> */}
      {/* <div className={classes.headerDiv}>
>>>>>>> Stashed changes
            <div className={classes.imageDiv}>
                <img src={headerImage} className={classes.headerImage}/>
            </div>
            <div className={classes.descDiv}>

            </div>
        </div> */}
      <Grid container spacing={2} columns={12} className={classes.grid}>
        <Grid item xs={12} sm={6} className={classes.gridItem}>
          <div className={classes.cont}>
            <img src={headerImage} className={classes.headerImage} alt="hi" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={0} columns={12} className={classes.textCont}>
            <Grid item xs={12}>
              <div className={classes.descDiv}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores labore sapiente hic numquam esse corporis id, itaque
                inventore omnis. Nemo aliquid sit aut veritatis aliquam maiores
                maxime sequi voluptatibus repudiandae?
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.descDiv}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores labore sapiente hic numquam esse corporis id, itaque
                inventore omnis. Nemo aliquid sit aut veritatis aliquam maiores
                maxime sequi voluptatibus repudiandae?
              </div>
            </Grid>
          </Grid>
          {/* lorem HI */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Homemid;
