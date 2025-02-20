import { HomeOutlined } from "@ant-design/icons"
import { Link, useLocation } from "react-router"
import { Breadcrumb } from "antd"

export default function Breadcrumbs() {
    const location = useLocation()
    // 根据路径获取面包屑项
    const getBreadcrumbItems = (pathname: string) => {
        const paths = pathname.split('/').filter(Boolean)
        return [
            {
                title: <Link to="/"><HomeOutlined /> 首页</Link>
            },
            ...paths.map((path, index) => ({
                title: <Link to={`/${paths.slice(0, index + 1).join('/')}`}>
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
            }))
        ]
    }
    return <Breadcrumb
        items={getBreadcrumbItems(location.pathname)}
    />
}
