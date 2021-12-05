import {createMuiTheme} from "@material-ui/core";

const Theme = createMuiTheme({
    palette:{
      primary:{
          main:"#191970",
      },
      secondary:{
          main:"#FFFAF0",
      }
    },
    overrides:{
        MuiAppBar: {
            positionFixed: {
                position: "sticky !important"
            }
        },
        MuiInputBase:{
            input:{
                width : "270px "
            }
        },
        MuiTypography :{
            root :{
                fontFamily: "Shabnam !important",
            }
        },MuiButton:{
            label:{
                fontFamily: "shabnam !important",
            }
        },MuiPaper:{
            root:{
                backgroundColor: "secondary",
            }
        }
    }

});
export default Theme;