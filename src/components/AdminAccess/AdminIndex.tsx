import React from "react";
import AdminCreate from "./AdminCreate";

export interface AdminIndexProps {
  token: string;
}

export interface AdminIndexState {}

class AdminIndex extends React.Component<AdminIndexProps, AdminIndexState> {
  constructor(props: AdminIndexProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <AdminCreate token={this.props.token} />
      </div>
    );
  }
}

export default AdminIndex;
