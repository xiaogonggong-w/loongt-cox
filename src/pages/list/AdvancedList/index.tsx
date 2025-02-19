import { Table, Card } from 'antd'

export default function AdvancedList() {
    return (
        <div>
            <h2>高级列表</h2>
            <Card>
                <Table 
                    columns={[
                        { title: '名称', dataIndex: 'name' },
                        { title: '描述', dataIndex: 'description' },
                        { title: '状态', dataIndex: 'status' },
                    ]}
                    dataSource={[]}
                />
            </Card>
        </div>
    )
} 