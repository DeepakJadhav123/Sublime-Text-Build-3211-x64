import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PAGE_CONFIG } from "../common/constant/pageconfig.constant";
import { TODO_API_END_POINT } from "./todo-api-constant";
import { ThrowStmt } from "@angular/compiler";
import { own_task_create_interface, todo_list_create_interface, todo_task_create_interface } from "./todo-interface";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  activatedUser:any;

  constructor(private http: HttpClient) {
    this.fetchUser();
  }
       
  fetchUser(){
    this.activatedUser=JSON.parse(localStorage.getItem("USER_INFO"));
  }
  /**
   * @Description send id to this function this will send to you id related task list  .
   */
  getTaskListApi() {
    return this.http.get(`${TODO_API_END_POINT.own_task_getby_id}`+1);
  }
  ownTaskUpdate(id:any){
    return this.http.put(`${TODO_API_END_POINT.own_task_update_id}`,id)
  }
  /**
   * @Description this pin table json related config function this will give you to pin table herder .
   */
  taskMyDayConfig() {
    return this.http.get(`${PAGE_CONFIG.Task_My_Day}`);
  }
  /**
   * @Description this pin table json related config function this will give you to pin table herder .
   */
  taskAssignedToMeConfig() {
    return this.http.get(`${PAGE_CONFIG.Task_Assigned_To_Me}`);
  }
/**
   * @Description this pin table json related config function this will give you to pin table herder .
   */
  taskMultipalListConfig() {
    return this.http.get(`${PAGE_CONFIG.Task_Multipal_List}`);
  }

/**
   * @Description my day task list will insered useing this function send object to this function.
   */
  insertTask(data:own_task_create_interface) {   
    return this.http.post(`${TODO_API_END_POINT.own_task_create}`,data)
  }


  newListArry:any=[];
  /**
   * @Description to create a new task list you can use this function .
   * @param listData This is post api send new list object to this.
   * @returns  this will return submitted or error.
   */
  addNewList(newlistname: todo_list_create_interface) {
    return this.http.post(`${TODO_API_END_POINT.todo_list_create}`,newlistname);
  }

  newListGroupArry:any=[];
  /**
   * @Description to create a new task list group you can use this function .
   * @param listData This is post api send new list object to this.
   * @returns  this will return submitted or error.
   */
  listGroupData(obj:todo_task_create_interface){
       return this.http.post(`${TODO_API_END_POINT.todo_task_create}`,obj);
  }
  listNextedListdata(id:any){
    return this.http.get(`${TODO_API_END_POINT.todo_list_getList_id}`+id);
  }
  /**
   * @Description this function is created to fetch data related id .
   * @param listData send id to this function it will reture that id related task list.
   * @returns  it will returen bunch of list data.
   */
  getAllTaskCreatedByMe(id: number) {
    return this.http.get(`${TODO_API_END_POINT.own_task_getby_id}`+id);
  }
  getAllTaskLists(){
    return this.http.get(`${TODO_API_END_POINT.todo_list_list}`)
  }

  getListByMasterListId(id:any){
    return this.http.get(`${TODO_API_END_POINT.todo_list_getList_id}`+id)
  }

  showListReletedList(id:any){
    return this.http.get(`${TODO_API_END_POINT.todo_task_getByListId_id}`+id)
  }
  /**
   * @Description this api is used to add list data in database.
   * @param listData This is post api send new list object to this.
   * @returns  this will return submitted or error.
   */
  addTaskInCreatedList(listData:any){
    var data:todo_task_create_interface;
    data.listId=listData;
    return this.http.post(`${TODO_API_END_POINT.todo_list_create}`,data);
  }

 own_task_create(data:any){
    return this.http.post(`${TODO_API_END_POINT.own_task_create}`,data);
  } 
  own_task_getCompleted_id(id:any){
    return this.http.get(`${TODO_API_END_POINT.own_task_getCompleted_id}`+id);
  }
  own_task_getPending_id(id:any){
    return this.http.get(`${TODO_API_END_POINT.own_task_getPending_id}`+id);
  }
  own_task_getby_id(id:any){
    return this.http.get(`${TODO_API_END_POINT.own_task_getby_id}`+id);
  }
  own_task_list(){
    return this.http.get(`${TODO_API_END_POINT.own_task_list}`);
  }  
  own_task_update_id(obj:any){ 
    return this.http.put(`${TODO_API_END_POINT.own_task_update_id}`,obj);
  }
  

  todo_list_create(data:todo_list_create_interface){
    return this.http.post(`${TODO_API_END_POINT.todo_list_create}`,data);
  }
  todo_list_getById_id(id:any){
    return this.http.get(`${TODO_API_END_POINT.todo_list_getById_id}`+id);
  }
  todo_list_getList_id(id:any){
    return this.http.get(`${TODO_API_END_POINT.todo_list_getList_id}`+id);
  }
  todo_list_get_id(id:any){
    return this.http.get(`${TODO_API_END_POINT.todo_list_get_id}`+id);
  }
  todo_list_shared(){
    return this.http.get(`${TODO_API_END_POINT.todo_list_shared}`);
  }
  todo_list_update_id(id:any){
    return this.http.get(`${TODO_API_END_POINT.todo_list_update_id}`+id);
  }


  todo_task_create(data:any){
    return this.http.get(`${TODO_API_END_POINT.todo_task_create}`,data);
  }
  todo_task_getByListId_id(id:any){
    return this.http.get(`${TODO_API_END_POINT.todo_task_getByListId_id}`+id);
  }
  todo_task_getPending_id(id:any){
    return this.http.get(`${TODO_API_END_POINT.todo_task_getPending_id}`+id);
  }
  todo_task_list(){
    return this.http.get(`${TODO_API_END_POINT.todo_task_list}`);
  }
  todo_task_update_id(id:any){
    return this.http.get(`${TODO_API_END_POINT.todo_task_update_id}`+id);
  }
 
}
