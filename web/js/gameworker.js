/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var i=8;

function timedCount()
{
//i=i+1;
postMessage(i);
setTimeout("timedCount()",10);
}

timedCount();


