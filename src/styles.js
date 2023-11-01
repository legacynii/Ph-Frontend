import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0 , 6)
    },
  
    icon: {
        marginRight: '20px',
    },

    buttons: {
        marginTop: '40px',
    },

    cardGrid: {
        padding: "20px 0"
    },
    
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    cardMedia: {
        paddingTop: '56%',
        padding: '2px'
    },

    cardContent: {
        flexGrow: 1
    },

    footer:{
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    },

    pagination: {
        padding: "50px",
        margin: "2px 270px"
    },

    elevatedCard: {
        transition: 'box-shadow 0.4s ease-in-out',
        '&:hover': {
            boxShadow: theme.shadows[15],
            cursor: "pointer"
        },
        
    }
    

}));

export default useStyles;