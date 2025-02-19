import { List, Card } from 'antd'

export default function BasicList() {
    return (
        <div>
            <h2>基础列表</h2>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={[]}
                renderItem={(item) => (
                    <List.Item>
                        <Card title="列表项">卡片内容</Card>
                    </List.Item>
                )}
            />
        </div>
    )
} 