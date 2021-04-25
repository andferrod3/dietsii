import React from 'react';
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