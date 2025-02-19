import { Table } from 'antd'

export default function UserList() {
    return (
        <div>
            <h2>用户管理</h2>
            <Table 
                columns={[
                    { title: '用户名', dataIndex: 'username' },
                    { title: '邮箱', dataIndex: 'email' },
                    { title: '角色', dataIndex: 'role' },
                ]}
                dataSource={[]}
            />
        </div>
    )
} 