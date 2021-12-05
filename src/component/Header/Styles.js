import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme =>({
    bar:{
        margin: "0 1rem 0 1rem !important",
    },
    title:{
        width : "50%",
        color : theme.palette.secondary.main
    },
    text:{
        marginRight: "1.35rem !important"
    }
}));

export default useStyle;