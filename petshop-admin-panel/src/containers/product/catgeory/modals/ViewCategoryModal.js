import React, {useEffect, useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {DialogContentText} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import "./CategoryModal.css";
import {generateCategoryStr} from "../../ProductUtil.js";


function ViewCategoryModal(props) {

    const [categoryStr,setCategoryStr] = useState("");
    const {categoryData, open, handleClose} = props;

    useEffect(() => {
        if (open) {

        }
    }, [open]);

    useEffect(() => {
        if (categoryData.name) {
            setCategoryStr(generateCategoryStr(categoryData));
        }
    }, [categoryData]);

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{
                        style: {
                            minHeight: '40vh',
                            minWidth: '40vw',
                        },
                    }}>
                <DialogTitle id="view-category">Kategori Detay</DialogTitle>
                <DialogContent>
                    <h4>Kategori</h4>
                    <DialogContentText>{categoryStr}</DialogContentText>
                    <h4>Kategori Resmi</h4>
                    {categoryData.photoUrl && <div className="productImageItem"><img src={categoryData.photoUrl}/></div>}
                    <h4>Oluşturulma Tarihi</h4>
                    <DialogContentText>{categoryData.createdAt}</DialogContentText>
                    <h4>Oluşturan Kullanıcı</h4>
                    <DialogContentText>{categoryData.createdBy}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        İptal
                    </Button>
                </DialogActions>
                </Dialog>


        </React.Fragment>
    );

}

export default ViewCategoryModal;