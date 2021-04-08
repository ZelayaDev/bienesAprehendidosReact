//import Background from "../../assets/panama-aw139-520.jpg";
import Background from "../../assets/depositphotos_64414801-stock-photo-us-air-force-digital-tigerstripe.jpg";

const styles = (theme) => ({
  root: {
    minHeight: "100vh",
  },
  image: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.8,
  },
  logo: {
    width: "3rem",
    marginBottom: "1rem",
  },
  logoLabel: {
    fontFamily: "Audiowide",
    fontWeight: "cursive",
    fontSize: "1.4rem",
  },
  paper: {
    margin: theme.spacing(12, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(3, 0, 2),
    fontWeight: "bold",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  inputs: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
  },
});

export default styles;
