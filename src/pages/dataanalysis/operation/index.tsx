import { Box, styled } from "@mui/material";
import { useParams } from "react-router";
import { Scrollbars } from "@/components/scrollbars";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { SyntheticEvent, useEffect, useState } from "react";
import { getAlgorithms } from "@/service/data";
import { nanoid } from "nanoid";

export default function Operation() {

    const { id } = useParams();
    const [algorithms, setAlgorithms] = useState([]);

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

    useEffect(() => {
        getAlgorithms().then(res => {
            setAlgorithms(res.data);
        })
    }, [])  

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
            <Scrollbars
                style={{height: 'calc(100vh - 144px)'}}
            >
                <SimpleTreeViewStyled 
                  onSelectedItemsChange={onSelectedItemsChange}
                  onItemClick={onItemClick}
                >
                    {algorithms.map((item: any) => (
                        <TreeItemStyled itemId={nanoid()} label={item.category_name} >
                            {item.algorithms.map((algorithm: any) => (
                                <TreeItemStyled itemId={nanoid()} label={algorithm.algorithm_name} />
                            ))}
                        </TreeItemStyled>
                    ))}
                </SimpleTreeViewStyled>
            </Scrollbars>
        </div>
    </div>
}
