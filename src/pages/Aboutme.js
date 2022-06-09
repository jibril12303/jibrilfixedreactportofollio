import { makeStyles, createStyles } from "@material-ui/core/styles";
import MainCard from "../components/box/MainCard";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: "20px",
    },
    icon: {
      fontSize: "50px",
      color: theme.palette.common.white,
    },
    aboutmeHeading: {
      color: theme.palette.common.white,
    },
    paraAboutme: {
      color: theme.palette.common.white,
      fontFamily: "Roboto",
      lineHeight: "1.5",
    },
    devIcons: {
      color: theme.palette.common.white,
      textAlign: "center",
    },
  })
);

const Aboutme = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <MainCard>
          <h1 className={classes.aboutmeHeading}>About Me</h1>
          <AccountCircleIcon className={classes.icon} />
          <br />
          <p className={classes.paraAboutme}>
          Highly astute web developer with a knack for cultivating long-term relationships with company clients. A true analyser of trends who is also knowledgeable in social media and marketing. Looking for a suitable position with a company where key attributes like hard work and dedication are recognised. Hard working and effective web developer who has more than 6 months of expertise. Bilingual, astute and deadline-driven. Seeking a developer position where a strong understanding of technology and a marketing background can be best utilised. 
          </p>
        </MainCard>
      </Grid>
    </div>
  );
};

export default Aboutme;
