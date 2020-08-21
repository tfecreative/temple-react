import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { ApplicationState } from "store";

const mapState = (state: ApplicationState) => ({
  authToken: state.auth.auth?.token,
});

const connector = connect(mapState, {});

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & RouteProps & {};

const PrivateRoute: React.FC<Props> = (props) => {
  const { authToken, ...rest } = props;
  return !authToken ? <Redirect to="/home/" /> : <Route {...rest} />;
};

export default connector(PrivateRoute);
