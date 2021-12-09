import {createMuiTheme} from "@material-ui/core";

const Theme = createMuiTheme({
    palette:{
      primary:{
          main:"#1E90FF",
      },
      secondary:{
          main:"#FFFAF0",
      }
    },
    overrides: {
        MuiAppBar: {
            positionFixed: {
                position: "sticky !important"
            }
        }, MuiInputBase: {
            input: {
                fontFamily : "shabnam !important",
                padding : "6px  !important",
                width : "330px",
                fontSize: "14px"
            }
        }, MuiTypography: {
            root: {
                fontFamily: "Shabnam !important",
            },
            body1:{
                marginRight : "0.5rem !important"
            }
        }, MuiButton: {
            label: {
                fontFamily: "shabnam !important",
            }
        },MuiFormControlLabel: {
            root:{
                marginLeft: "15rem !important",
                marginTop: "1.5rem !important"
            },
            label:{
                fontSize: "0.8rem !important"
            }
        }
    }

});
export default Theme;
