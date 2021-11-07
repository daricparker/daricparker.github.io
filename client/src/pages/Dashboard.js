import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import NutritionDisplay from "../components/NutritionDisplay";
import FoodHistory from "../components/FoodHistory";
import AddFood from "../pages/AddFood";
import FoodForm from "../components/FoodForm";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const DashStyled = styled.div`
  .AddFood {
    display: flex;
  }
`;

const Dashboard = () => {
  const path = "/dashboard";
  return (
    <Switch>
      <DashStyled>
        <Grid container spacing={6}>
          <Grid item lg={12}>
            <Route exact path={path}>
              <NutritionDisplay />
            </Route>
            <Route exact path={`${path}/addfood`}>
              <div className="AddFood">
                <AddFood />
                <FoodForm />
              </div>
            </Route>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item sm={6}>
            <Route exact path={path}>
              <FoodHistory />
            </Route>
          </Grid>
        </Grid>
      </DashStyled>
    </Switch>
  );
};

export default Dashboard;
