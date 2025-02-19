import { Table } from 'antd'

export default function RoleList() {
    return (
        <div>
            <h2>角色管理</h2>
            <Table 
                columns={[
                    { title: '角色名称', dataIndex: 'name' },
                    { title: '描述', dataIndex: 'description' },
                    { title: '权限数量', dataIndex: 'permissionCount' },
                ]}
                dataSource={[]}
            />
        </div>
    )
} 