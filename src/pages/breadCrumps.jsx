import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import link from '@mui/material/Link';
import { Outlet, Link } from "react-router-dom";
function layout({className}) {
    return (
        <div className={className}>
            <Breadcrumbs aria-label="breadcrumb" style={{margin:'0 auto',display:'table'}}> 
                <Link to='/' underline="hover" color="inherit" href="/">
                    todos
                </Link>
                <Link
                    to='/about'
                    underline="hover"
                    color="inherit"
                >
                    About
                </Link>
                <Link
                    to='/gallery'
                    underline="hover"
                    color="inherit"
                >
                    Gallery
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
            <Outlet />
        </div>

    )
}
export default layout