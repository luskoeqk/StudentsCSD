// styles
import { PageConfig } from '@/styles/PagesConfigElements'

// Material Ui
import * as React from 'react';
import Box from '@mui/material/Box';
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Pagination from '@mui/material/Pagination';


function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            count={pageCount}
            page={page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}

export default function _2023() {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 1000,
        maxColumns: 16,
    });

    return (
        <PageConfig>
            <Box sx={{ height: '90vh', width: '100%' }}>
                <DataGrid
                    pagination
                    pageSize={50}
                    rowsPerPageOptions={[50]}
                    components={{
                        Pagination: CustomPagination,
                    }}
                    {...data}
                />
            </Box>
        </PageConfig>
    );
}