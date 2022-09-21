import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import link from '@mui/material/Link';
import { Outlet, Link } from "react-router-dom";
function layout() {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" style={{margin:'0 auto',display:'table'}}> 
                <Link to='/' underline="hover" color="inherit" href="/">
                    todos
                </Link>
                <Link
                    to='/about'
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    About
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
            <Outlet />
        </div>

    )
}
export default layout