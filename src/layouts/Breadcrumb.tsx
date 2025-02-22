import { Link as RouterLink, useLocation } from "react-router"
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from "@mui/material"

export default function Breadcrumbs() {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter(Boolean)

    return (
        <MuiBreadcrumbs>
            <Link component={RouterLink} to="/" color="inherit">
                首页
            </Link>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1
                const to = `/${pathnames.slice(0, index + 1).join('/')}`

                return last ? (
                    <Typography color="text.primary" key={to}>
                        {value}
                    </Typography>
                ) : (
                    <Link 
                        component={RouterLink} 
                        to={to} 
                        key={to} 
                        color="inherit"
                    >
                        {value}
                    </Link>
                )
            })}
        </MuiBreadcrumbs>
    )
}
