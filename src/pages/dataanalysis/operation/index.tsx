import { Box, styled } from "@mui/material";
import { useParams } from "react-router";
import { Scrollbars } from "@/components/scrollbars";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { SyntheticEvent } from "react";


export default function Operation() {

    const { id } = useParams();

    const SimpleTreeViewStyled = styled(SimpleTreeView)(() => ({
        '& .MuiTreeItem-root': {
        },
    }))

    const TreeItemStyled = styled(TreeItem)(() => ({
        fontSize: '12px',
        '& .MuiTreeItem-label': {
                fontSize: '12px',
        },
    }))

    const onSelectedItemsChange = (event: SyntheticEvent<Element, Event>, itemIds: string | string[] | null) => {
        console.log(itemIds);
    }

    const onItemClick = (event: SyntheticEvent<Element, Event>, itemIds: string | string[] | null) => {
        console.log(itemIds);
    }

    return <div className="w-full flex-start flex-1 p-20">
        <div className="w-220 border-r  ">
            <div className="px-10 h-40 h-40 flex-col-center text-14">
                分析结果
            </div>
        </div>
        <div className="w-235 border-r  ">
            <div className="mx-10 h-40 flex-col-center border-b text-14">
                选择算法
            </div>
            <Scrollbars>
                <SimpleTreeViewStyled 
                  onSelectedItemsChange={onSelectedItemsChange}
                  onItemClick={onItemClick}
                >
                    <TreeItemStyled itemId="grid" label="Data Grid">
                        <TreeItemStyled itemId="grid-community" label="@mui/x-data-grid" />
                        <TreeItemStyled itemId="grid-pro" label="@mui/x-data-grid-pro" />
                        <TreeItemStyled itemId="grid-premium" label="@mui/x-data-grid-premium" />
                    </TreeItemStyled>
                    <TreeItemStyled itemId="pickers" label="Date and Time Pickers">
                        <TreeItemStyled itemId="pickers-community" label="@mui/x-date-pickers" />
                        <TreeItemStyled itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
                    </TreeItemStyled>
                    <TreeItemStyled itemId="charts" label="Charts">
                        <TreeItemStyled itemId="charts-community" label="@mui/x-charts" />
                    </TreeItemStyled>
                    <TreeItemStyled itemId="tree-view" label="Tree View">
                        <TreeItemStyled itemId="tree-view-community" label="@mui/x-tree-view" />
                    </TreeItemStyled>
                    
                </SimpleTreeViewStyled>
            </Scrollbars>
        </div>
    </div>
}
