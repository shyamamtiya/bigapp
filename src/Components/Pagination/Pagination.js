import React from 'react';
import { Pagination } from 'antd';

const PaginationComponent = (props) => {
    const {total,defaultPageSize}=props;

    const onShowSizeChange = (current, pageSize) => {

    }
    const handleChange = ev => {
    }

    return (
        <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            defaultPageSize={defaultPageSize}
            total={total}
            showLessItems={true}
            onChange={handleChange}
        />
    )
}

export default PaginationComponent;