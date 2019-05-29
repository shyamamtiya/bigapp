import React from 'react';
import { Transfer } from 'antd';
import data from '../../Data/Data';
import './Transfer.scss';

const TransferComponent = React.memo((props) => {

    const [targetKeys,setTargetKeys] =React.useState([]);

    const handleChange = (targetKeys, direction, moveKeys) => {
        setTargetKeys(targetKeys );
    };

    const renderItem = item => {
        const customLabel = (
            <span className="custom-item">
                {item.title}
            </span>
        );

        return {
            label: customLabel, // for displayed item
            value: item.title, // for title and filter matching
        };
    };

    return (
        <div style={{display: 'flex',
            justifyContent: 'center'}}>
        <Transfer
            dataSource={data}
            listStyle={{
                width: 300,
                height: 300,
            }}
            targetKeys={targetKeys}
            onChange={handleChange}
            render={renderItem}
            showSearch={true}
        />
        </div>
    );
});
export default TransferComponent;