// EditableTableCell.tsx

import React from 'react';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import styles from './EditableTableCell.module.scss';

type EditableTableCellProps = {
  isEditing: boolean;
  value: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  isSaveDisabled: boolean;
};

const EditableTableCell: React.FC<EditableTableCellProps> = ({
  isEditing,
  value,
  onInputChange,
  onEdit,
  onSave,
  onCancel,
  isSaveDisabled,
}) => (
  <Box className={styles.cellContainer} onClick={!isEditing ? onEdit : undefined}>
    {isEditing ? (
      <Box className={styles.editingContainer}>
        <TextField
          className={styles.textField}
          value={isNaN(value) ? '' : value}
          onChange={onInputChange}
          type="number"
        />
        <SaveIcon
          className={`${styles.icon} ${isSaveDisabled ? styles.disabledIcon : styles.activeIcon}`}
          onClick={!isSaveDisabled ? onSave : undefined}
        />
        <CancelIcon
          className={`${styles.icon} ${styles.activeIcon}`}
          onClick={onCancel}
        />
      </Box>
    ) : (
      <Box>
        {value}
      </Box>
    )}
  </Box>
);

export default EditableTableCell;
