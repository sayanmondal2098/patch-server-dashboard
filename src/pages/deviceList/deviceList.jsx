import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlineTwoTone } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import "./deviceList.css";
import { deviceRows } from '../../dummyData';

export default function DeviceList(){
    const [rows, setRows] = React.useState(deviceRows);
    const handleDelete = (id) => {
        setRows(rows.filter(row => row.id !== id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'devicename', headerName: 'Device Name', width: 200, sortable: true },
        { field: 'os', headerName: 'Operating System', width: 200, sortable: true },
        { field: 'osversion', headerName: 'Operating System Version', width: 200, sortable: true },
        { field: 'patchDate', headerName: 'Last Patch Installation Date', type: 'date', width: 160, sortable: true },
        { field: 'userId', headerName: 'User Id', width: 200},
        {
            field: 'Action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                
                return (
                <>
                <Link to={"/device/"+params.row.id}>
                <button className="deviceListEdit">Edit</button>
                </Link>
                <DeleteOutlineTwoTone className="deviceListDelete" 
                onClick={() => handleDelete(params.row.id)}
                />
                </>
                );
            }
        }
    
    ];
    return (
        <div className="deviceList">
            <DataGrid
                rows={rows}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[100]}
                checkboxSelection
            />
        </div>
    );
}