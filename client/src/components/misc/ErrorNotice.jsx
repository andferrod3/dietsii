import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import closeCircleOutline from '@iconify-icons/mdi/close-circle-outline';
import CancelIcon from '@material-ui/icons/Cancel';

function ErrorNotice (props) {
return (
<div className="error-notice alert alert-danger">
<span>{props.message}</span>
<CancelIcon onClick={props.clearError}></CancelIcon>
</div>
);
}
export default ErrorNotice;