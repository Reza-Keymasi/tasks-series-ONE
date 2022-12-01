import React from 'react'
import "./NewPage.css"

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';



import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';

import { enableRipple } from '@syncfusion/ej2-base';


import { panels} from "./data/newData"
import { useStateContext } from '../context/StateContextProvider';

// const cellSpacing =[10,10]

enableRipple(true);

const NewPage = () => { 

  const { position, setPosition, resizePanel, setResizePanel } = useStateContext()

  const cellSpacing = [10, 10];
  let count = 7;
  let resize = ['e-south-east', 'e-east', 'e-west', 'e-north', 'e-south'];
  let data = ["Panel0", "Panel1", "Panel2", "Panel3", "Panel4", "Panel5", "Panel6"];
  let dashboardObj;
  let sizeXObj;
  let sizeYObj;
  let rowObj;
  let colsObj;
  let paneObj;

  const onAdd = (args) => {
    let panel = [{
      'id': count.toString() + '_layout', 'sizeX': sizeXObj.value, 'sizeY': sizeYObj.value, 'row': rowObj.value, 'col': colsObj.value,
      content: '<div class="content">' + count.toString() + '</div>'
  }];
    dashboardObj.addPanel(panel[0]);
    count = count + 1;
  };

  const onRemove = (args) => {
    dashboardObj.removePanel(paneObj.value.toString());
  };  

  



  const handleChange = (e) => {
      console.log(e)
      // console.log(e.changedPanels[0])

    for(let i=0; i < e.changedPanels.length; i++) {
      const changed = e.changedPanels[i]
      // changed positions
      console.log(changed)
      console.log(`Changed Panel is ${changed.id} with row:${changed.row}. Size X is: ${changed.sizeX} and Size Y is: ${changed.sizeY}.`)

      // get the positions that changed and put them in an Object (state)
      setPosition({sizeX: changed.sizeX, sizeY: changed.sizeY, col: changed.col, row: changed.row})
      console.log( "this data is for CHANGING POITIONS",position)
    };
    
  };


  // panel resizing by stop point
  const handleResizeStop = (e) => {
    // console.log(e)
    const ele = e.event
    // console.log(ele)
    setResizePanel({
      clienX: ele.clientX,
      clienY: ele.clientY,
      layerX: ele.layerX,
      layerY: ele.layerY,
      movementX: ele.movementX,
      movementY: ele.movementY,
      offSetX: ele.offsetX,
      offSetY: ele.offsetY,
      pageX: ele.pageX,
      pageY: ele.pageY,
      screenX: ele.screenX,
      screenY: ele.screenY,
      x: ele.x,
      y: ele.y
    })
    console.log("this data is for RESIZING",resizePanel)
    // console.log(panels);
    // console.log(dashboardObj);
  }


  return (
    <div style={{display: "i", justifyContent: "center", margin:"100px"}}>
      <div style={{margin:"50px"}}>
      <div className="inline" id="control">
        <DashboardLayoutComponent resizeStop={handleResizeStop} change={handleChange} id='dashboard_layout' ref={s => (dashboardObj = s)} cellSpacing={cellSpacing} panels={panels} allowResizing={true} columns={5} resizableHandles={resize} />
        </div>
        <div className="inline" id="properties">
            <table>
            <tbody>
                <tr>
                    <td>SizeX</td>
                    <td> <NumericTextBoxComponent ref={s => (sizeXObj = s)} className="col-sm-4" placeholder={"Ex: 10"} value={1} min={1} max={5} floatLabelType="Never" id="sizeX"/></td>
                </tr>
                <tr>
                    <td>SizeY</td>
                    <td> <NumericTextBoxComponent ref={s => (sizeYObj = s)} className="col-sm-4" placeholder={"Ex: 10"} value={1} min={1} max={5} floatLabelType="Never" id="sizeY"/></td>
                </tr>
                <tr>
                    <td>Row</td>
                    <td> <NumericTextBoxComponent ref={s => (rowObj = s)} className="col-sm-4" placeholder={"Ex: 10"} value={0} min={0} max={5} floatLabelType="Never" id="row"/></td>
                </tr>
                <tr>
                    <td>Column</td>
                    <td> <NumericTextBoxComponent ref={s => (colsObj = s)} className="col-sm-4" placeholder={"Ex: 10"} value={0} min={0} max={4} floatLabelType="Never" id="column"/></td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <button onClick={onAdd}>Add Panel</button>
                    </td>
                </tr>
            </tbody>
            </table>
            <table>
            <tbody>
                <tr>
                    <td>Id</td>
                    <td> <DropDownListComponent ref={s => (paneObj = s)} className="col-sm-4" placeholder={"panel id"} dataSource={data} floatLabelType="Never" id="panel_id"/></td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <button onClick={onRemove}>Remove Panel</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
            
      </div>
    </div>
  )
}

export default NewPage;