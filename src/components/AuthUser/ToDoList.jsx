import React from "react";
import { useEffect, useState } from "react";
import AuthHeader from "./AuthHeader";
import { commonConfig } from "../../config/commonConfig";
import ClassicAuthHeader from "./ClassicAuthHeader";
import PreLoader from "../Preloader";
import { useNavigate } from "react-router-dom";
import { Amplify, API, Auth, graphqlOperation } from "aws-amplify";
import awsconfig from '../../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { listTodos } from '../../graphql/queries';
import { createTodo, updateTodo, deleteTodo } from '../../graphql/mutations';
import {v4 as uuidv4} from 'uuid';
import './ToDoList.css';

Amplify.configure(awsconfig);

const ToDoList = () => {
    const darkTheme = commonConfig.darkTheme;
    const classicHeader = commonConfig.classicHeader;
    const [isLoading, setisLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [todos, setToDoList] = useState([]);
    const navigate = useNavigate();

    const fetchTodoList = async () => {
      try {
        const todolistData = await API.graphql(graphqlOperation(listTodos, { authMode: 'AMAZON_COGNITO_USER_POOLS'}));
        const todoList = todolistData.data.listTodos.items;
        //For testing purposes
        let newToDo = {
          id: uuidv4(),
          name: "groceries",
          description: "eggs,mayo,tuna",
          owner: "Jed Marasigan",
          complete: false,
          active: true
        };
        todoList.push(newToDo)
        ///////////////////////////////////////////////////////////////////
        setToDoList(todoList);
      } catch (error) {
        console.log("There was an error getting todolist items: ", error);
      }
    }

    useEffect(() => {
      AssessLoggedInState()
      fetchTodoList()
    }, [])

    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
        setisLoading(false);
      }, 1000);
      return () => {
        clearTimeout(loadingTimeout);
      };
    }, []);

    const AssessLoggedInState = () => {
      Auth.currentAuthenticatedUser()
      .then(() => {
        setLoggedIn(true)
      })
      .catch(() => {
        setLoggedIn(false)
        navigate("/login")
      })
    }

    const deleteItem = async (id) => {
      console.log(id);
      try {
        setToDoList((prevList) => {
          const updatedList = prevList.filter((toDoItem) => toDoItem.id !== id);
          return updatedList;
        });
      } catch (error) {
        console.log("error trying to delete item: ", id);
      }
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        event.target.reset();
        if(formJson.name.trim() === "" && formJson.description.trim() === ""){
          return;
        }else{
          let newToDo = {
            id: uuidv4(),
            name: formJson.name,
            description: formJson.description,
            owner: "Jed Marasigan",
            complete: false,
            active: true
          };
          // await API.graphql({ query: createTodo, variables: {input: newToDo}, authMode: "AMAZON_COGNITO_USER_POOLS" });
          setToDoList((prevList) => {
            const updatedList = [
              newToDo,
              ...prevList,
            ];
            return updatedList;
          });
        }
      } catch (error) {
        console.log("Error trying to add new To Do: ", error);
      }
    }
  
    return (
      <div
        style={{ position: "absolute", height: "100%", width: "100%" }}
        className={classicHeader ? "" : "side-header"}
      >
        {isLoading && <PreLoader></PreLoader>}
        <div id="main-wrapper" style={{ height: "100%" }}>
          {classicHeader ? (
            <ClassicAuthHeader setLoggedIn={setLoggedIn}></ClassicAuthHeader>
          ) : (
            <AuthHeader activeClass="active" setLoggedIn={setLoggedIn}></AuthHeader>
          )}
          <div id="content" role="main" className={(darkTheme ? "bg-dark-1" : "")}>
            <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
              {/* Heading */}
              <div className="position-relative d-flex text-center mb-5">
                <h2
                  className={
                    "text-24  text-uppercase fw-600 w-100 mb-0 " +
                    (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
                  }
                >
                  What's Next?
                </h2>
                <p
                  className={
                    "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                    (darkTheme ? "text-white" : "text-dark")
                  }
                >
                  To Do List
                  <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
                </p>
              </div>
              {/* Heading end*/}
            </div>
            <section>
              <div className="container">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                      <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">New To Do Item</h3>
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="form-outline">
                              <input type="text" id="name" className="form-control form-control-lg" name="name"/>
                              <label className="form-label" htmlFor='name'>Title</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-outline">
                              <input type="text" id="description" className="form-control form-control-lg" name="description"/>
                              <label className="form-label" htmlFor='description'>Description</label>
                            </div>
                          </div>
                          <button className="btn btn-primary btn-lg w-100 p-auto" type="submit">
                            Add
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="todoList">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-12 col-lg-9 col-xl-7">
                    <ul className="list-group list-group-light">
                      {/* <li className="list-group-item" key="1">groceries: egg, tuna, mayo
                        <a className="delete-button" role="button" onClick={() => deleteItem(1)}>
                          <i className="fas fa-trash-can"></i>
                        </a>
                      </li> */}
                      {todos.map(todo => {
                        return (
                          <li className="list-group-item" key={todo.id}>{todo.name}: {todo.description}
                            <a className="delete-button" role="button" onClick={() => deleteItem(todo.id)}>
                              <i className="fas fa-trash-can"></i>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  };
  
  export default ToDoList;