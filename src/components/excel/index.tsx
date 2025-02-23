import "@glideapps/glide-data-grid/dist/index.css";

import { DataEditor, GridCell, GridCellKind, Item } from "@glideapps/glide-data-grid";
import { useCallback } from "react";


interface ExcelProps {
    header: any[]
    rows: any[]
}

export default function Excel({ header, rows }: ExcelProps) {

    if (rows.length === 0) {
        return <div>暂无数据</div>
    }
    const columns = header.map(key => ({
        id: key,
        title: key
    }))
   
    const getCellContent = useCallback((cell: Item): GridCell => {
        const [col, row] = cell; // 列 行
        const dataRow = rows[row]; // 行数据
        const d = dataRow[col]
        return {
            kind: GridCellKind.Text,
            allowOverlay: false,
            displayData: String(d),
            data: String(d),
        };
    }, []);
    return <DataEditor
        getCellContent={getCellContent}
        columns={columns}
        rows={rows.length}
    />;
}

