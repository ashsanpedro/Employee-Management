import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponeModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  isLoader: boolean = true;
  masterService = inject(MasterService);

  designationList: IDesignation[] = []

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe(
      (result:APIResponeModel)=> {
      this.designationList = result.data;
      this.isLoader = false;
    }, error=> {
      alert("API error / Network Down")
      this.isLoader = false;
    })
  }


  
  

}
