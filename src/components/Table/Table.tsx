// BasicTable.tsx
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditableTableCell from '../EditableTableCell/EditableTableCell.tsx';
import styles from './Table.module.scss'

const initialData = [
  { currency: 'USD/UAH', buyPrice: 27.5, sellPrice: 27.7 },
  { currency: 'EUR/UAH', buyPrice: 32.5, sellPrice: 32.7 },
];

function BasicTable() {
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [values, setValues] = useState(initialData);
  const [tempValues, setTempValues] = useState<{ [key: string]: number }>({});

  const handleEdit = (cellKey: string) => {
    setIsEditing(cellKey);
  };
  const handleSave = (cellKey: string) => {
    // Commit tempValue to actual value
    const tempValue = tempValues[cellKey];
    handleInputChange(cellKey, tempValue.toString());
    setIsEditing(null);
  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  const handleInputChange = (cellKey: string, newValue: string) => {
    setTempValues({
      ...tempValues,
      [cellKey]: parseFloat(newValue),
    });
  };

  const isSaveDisabled = (cellKey: string) => {
    const tempValue = tempValues[cellKey];
    const initialRow = initialData.find((row) => `${row.currency}-buyPrice` === cellKey || `${row.currency}-sellPrice` === cellKey);
    if (!initialRow || tempValue === undefined) return true;
  
    const initialValue = `${initialRow.currency}-buyPrice` === cellKey ? initialRow.buyPrice : initialRow.sellPrice;
    return tempValue < initialValue * 0.9 || tempValue > initialValue * 1.1;
  };
  

  return (
    <TableContainer className={styles.tableContainer} component={Paper}>
      <Table className={styles.table}>
        <TableHead className={styles.tableHead}>
          <TableRow  className={styles.tableRow}>
            <TableCell>Currency</TableCell>
            <TableCell align="right">Buy</TableCell>
            <TableCell align="right">Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((row) => (
            <TableRow className={styles.tableRow} key={row.currency}>
              <TableCell>{row.currency}</TableCell>
              {['buyPrice', 'sellPrice'].map((priceType) => {
                const cellKey = `${row.currency}-${priceType}`;
                const value = row[priceType];

                return (
                  <TableCell align="right" key={cellKey}>
                    <EditableTableCell
  isEditing={isEditing === cellKey}
  value={isEditing === cellKey ? tempValues[cellKey] || value : value}
  onInputChange={(e) => handleInputChange(cellKey, e.target.value)}
  onEdit={() => handleEdit(cellKey)}
  onSave={() => handleSave(cellKey)}
  onCancel={handleCancel}
  isSaveDisabled={isSaveDisabled(cellKey)}
/>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;