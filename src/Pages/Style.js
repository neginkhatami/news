import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme =>({
    paper:{
        width:"25rem",
        margin:"5rem auto !important",
        padding: " 2rem !important",
        display:"flex",
        flexDirection:"column"
    },
    title:{
        color : theme.palette.primary.main,
        marginTop : "4rem !important",
        textAlign : "center",
        fontWeight : "600 !important"
    },
    input:{
        marginRight : " 6rem !important",
    },
    label:{
        marginTop: "1rem !important",
    },
    button:{
        width: "80px",
        height : "33px",
        margin : "4rem 10rem 1rem 0 !important",
        backgroundColor : "red !important"
    }
}));

export default useStyle;