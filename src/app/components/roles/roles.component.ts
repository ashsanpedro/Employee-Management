import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { APIResponeModel } from '../../model/interface/role';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  roleList: IRole [] = [];


  ngOnInit(): void {
    this.getAllRoles();
  }

  constructor(private http: HttpClient) {}

  getAllRoles() {  
    this.http.get<APIResponeModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:APIResponeModel)=>{
      this.roleList = res.data;
      console.log(res.data);
    })
  }
}
