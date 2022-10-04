import React from 'react';
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutlineTwoTone } from '@material-ui/icons'
import { userRows } from "../../dummyData";
import "./userList.css";
import { Link } from 'react-router-dom';


export default function UserList() {
    const [rows, setRows] = React.useState(userRows);
    const hendleDelete = (id) => {  
        setRows(rows.filter(row => row.id !== id));
    };
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'username', headerName: 'username', width: 200 },
        { field: 'email', headerName: 'User Email', width: 330 },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,
        },
        {
            field: 'jobRoll',
            headerName: 'Job Roll',
            description: 'This column has a value getter and is sortable.',
            sortable: true,
            width: 160,

        },
        {
            field: 'StartDate',
            headerName: 'Start Date',
            description: 'This column has a value getter and is not sortable.',
            type: 'date',
            sortable: true,
            width: 160,

        },
        {
            field: 'Action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                
                return (
                <>
                <Link to={"/user/"+params.row.id}>
                <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutlineTwoTone className="userListDelete" 
                onClick={() => hendleDelete(params.row.id)}
                />
                </>
                );
            }
        }
    ];

    return (
        <div className="userList">
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