import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const CustomDialog = ({ open, onClose, content }: any) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <CancelOutlinedIcon
        onClick={onClose}
        sx={{ position: "absolute", right: "10px", top: "10px" }}
      />
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
