import { Component, OnInit } from '@angular/core';
import  groupBy from 'group-array';
import  grouper from 'grouper';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'derp' })
export class DerpPipe {
  transform (value, args) {
    return Array.from(value);
  }
}

@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.css']
})
export class GroupBYComponent implements OnInit {
	a:any[] = [];
  constructor() { }

  ngOnInit() {
  	var arr = {data :[
  {tag: 'Krishna', content: 'Anirudh', relation: 'grandson'},
   {tag: 'Krishna', content: 'Anirudh', relation: 'Brother'},
 {tag: 'Balaram', content: 'Cochin', relation: 'grandson'},
  {tag: 'Krishna', content: 'Parishidh', relation: 'uncle'},
   {tag: 'Krishna', content: 'Balaram', relation: 'brother'},
   {tag: 'Krishna', content: 'Anirudh1', relation: 'grandson'},
  {tag: 'Radha', content: 'Lakshmi', relation: 'grandson'},
    {tag: 'Radha', content: 'pratti', relation: 'grandson'},
  {tag: 'Balaram', content: 'Trivandrum', relation: 'grandson'}
 
] };
 
let demo = {
    'key1': [{'key11':'value11'}, {'key12':'value12'}],
    'key2': [{'key21':'value21'}, {'key22':'value22'}],
  }


// group by the `tag` property 
 this.a =groupBy(arr.data, 'tag','content','relation');
 
console.log(this.a);
  }

}
