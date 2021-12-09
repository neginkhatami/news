import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme =>({
    container:{
        marginTop: '4rem !important',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar:{
        backgroundColor : '#8B008B !important'
    },
    form:{
        width : "350px",
        textAlign : "center",
        flexDirection : "column",
        marginTop : "1.5rem !important"
    },
    title:{
        marginTop : "7px !important",
    },
    input:{
        marginBottom : " 2rem !important",

    },
    button:{
        marginTop: "2.5rem !important",
        height : "30px",
        fontSize : "15px",
    },
    item:{
        marginTop : "1.5rem !important",
        fontSize : "30px !important"
    },
    check:{
        width : "100%",
    },
    link:{
        fontSize : "0.85rem !important",
        marginLeft : "11rem !important"
    },
    link1:{
        fontSize : "0.85rem !important",
        marginLeft : "20rem !important"
    }
}));

export default useStyle;
