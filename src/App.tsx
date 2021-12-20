import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/global.css";
import HomePage from "./views/HomePage";
import ViewExams from "./views/ViewExams/View";
import ViewTeachers from "./views/ViewExams/ViewTeachers";
import ViewTeacher from "./views/ViewExams/ViewTeacher";
import ViewSubjects from "./views/ViewExams/ViewSubjects";
import ViewSubject from "./views/ViewExams/ViewSubject";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/view" exact>
                    <ViewExams />
                </Route>
                <Route path="/view/teachers" exact>
                    <ViewTeachers />
                </Route>
                <Route path="/view/teachers/:teacherId" exact>
                    <ViewTeacher />
                </Route>
                <Route path="/view/subjects" exact>
                    <ViewSubjects />
                </Route>
                <Route path="/view/subjects/:subjectId" exact>
                    <ViewSubject />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
