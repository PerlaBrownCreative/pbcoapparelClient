import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export interface UserProfileProps {
    token: string;
    username: string;
    role: string;
}
 
export interface UserProfileState {
    
}
 
class UserProfile extends React.Component<UserProfileProps, UserProfileState> {
    constructor(props: UserProfileProps) {
        super(props);
        this.state = {
            
        };
    }
    // first_name: req.body.shipping.first_name,
    // last_name: req.body.shipping.last_name,
    // address: req.body.shipping.address,
    // city: req.body.shipping.city,
    // state: req.body.shipping.state,
    // zip_code: req.body.shipping.zip_code,
    // mobile_number: req.body.shipping.mobile_number,
    // owner: req.user.id,
    
    render() { 
        return (
            <form>
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
         );
    }
}
 
export default UserProfile;
