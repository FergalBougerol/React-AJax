import React from 'react';
var Maison = require ('react-icons/lib/fa/home');
var Search = require ('react-icons/lib/fa/search');
var Play = require ('react-icons/lib/fa/play');
var Face = require ('react-icons/lib/fa/facebook');
var Star = require ('react-icons/lib/fa/star');
/*j'importe mes icones pour mon menu*/

export default (props) => {
    return (
/*je contruis mon menu vertical */
<div className="vertical-menu">

  <a href="http://localhost:3000/"><Maison/></a>
  <a href="#2"><Play/></a>
  <a href="http://www.omdbapi.com/?apikey=ef5e5885&t=superman+"><Search/></a>
  <a href="https://www.facebook.com/"><Face/></a>
  <a href="#4"><Star/></a>
 

           
        </div> 

    
    );
};