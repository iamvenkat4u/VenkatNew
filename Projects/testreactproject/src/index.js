import React, { isValidElement } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Notes from './Notes';
import './index.css';
import emojipedia from './EmojiPedia';
import Login from './Login';
import AppList from './AddList';

// function mapinfo(current) {
//   return <div>
//     {current.id}
//     {current.name}
//     {current.emoji}
//   </div>
// }

//console.log(emojipedia.length);
// const filterobj = emojipedia.filter(function(current)
// {
//   return current.id>1;
// });
// console.log(filterobj);
const numbers = [1,5,7,8,9,15];
var reduceobj = numbers.reduce(function (accum, current) {
  console.log(accum);
  console.log(current);
  return accum + current;
});
console.log(reduceobj);
var today = new Date(2023, 1, 1, 10)
const fname = "Venkat";
const lname = "Thiru";
const luckno = 5;
const goodMorning = {
  color: 'Red'
}
const goodEve = {
  color: 'green'
}
const goodNight = {
  color: 'blue'
}
const hr = today.getHours();
ReactDOM.render(
  <div>
  <App />
    <Header />
    
    <Login />
    {/* <Notes name = {fname + " " + lname} /> */}
   {/* <App /> 
    <List name = {fname + " " + lname} fullYear = {today.getFullYear()} hr = {hr} /> */}

    {
      emojipedia.map(function (mapinfo, key) {
        
        return <div  key = {mapinfo.id}>
          {mapinfo.id}
          {mapinfo.name}
          {mapinfo.emoji}
          {mapinfo.meaning.substring(0, 100)}
        </div>
      }
      )
    }
    {emojipedia.map(mapinfo=><div  key = {mapinfo.id}>
          Arrowfunction <br />
          {mapinfo.id}
          {mapinfo.name}
          {mapinfo.emoji}
          {mapinfo.meaning.substring(0, 100)}
        </div>)}

<AppList />


    {/* <Footer fullYear = {today.getFullYear()} /> */}
  </div>
  , document.getElementById("root"));

