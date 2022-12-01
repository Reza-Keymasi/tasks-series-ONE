import React from 'react'
import "./NewPage.css"

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';


import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";
import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from '@syncfusion/ej2-react-layouts';

import { enableRipple } from '@syncfusion/ej2-base';


import {lineData, pieData, pieData2, chartData, panels} from "./data/newData"

// const cellSpacing =[10,10]

enableRipple(true);

const NewPage = () => { 
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

  

  // Line Chart
  const lineTemplate = () => {
    <div>
      <ChartComponent style={{ "height": "162px" }}><Inject services={[LineSeries]}/>
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={lineData} xName='x' yName='y' type='Line'/>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  };

  // Pie Chart 
  const pieTemplate = () => {
    <div>
      <AccumulationChartComponent style={{ "height": "162px" }} tooltip={{ enable: true }}><Inject services= {[AccumulationTooltip]}/>
          <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective dataSource={pieData} xName='x' yName='y' innerRadius="40%"/>
          </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  };

  // Pie Chart 2
  const pieTemplate2 = () => {
    const dataLabel = { visible: true, position: 'Inside', name: 'text', font: { fontWeight: '600' } };
    <div>
      <AccumulationChartComponent style={{ "height": "162px" }} tooltip={{ enable: true }}>
        <Inject services={[AccumulationTooltip]}/>
        <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={pieData2} dataLabel={dataLabel} xName='x' yName='y' radius="70%" name='Browser'/>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  }

  // Column Chart

  const columnTemplate = () => {
    <ChartComponent style={{ "height": "162px" }} primaryXAxis={{ valueType: 'Category' }}>
      <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}/>
      <SeriesCollectionDirective>
          <SeriesDirective dataSource={chartData} xName='month' yName='sales' type='Column'/>
      </SeriesCollectionDirective>
    </ChartComponent>
  }

  const handleChange = (e) => {
      // console.log(e)
      // console.log(e.changedPanels[0])

    for(let i=0; i < e.changedPanels.length; i++) {
      const changed = e.changedPanels[i]
      console.log(changed)
      console.log(`Changed Panel is ${changed.id} with row:${changed.row}. Size X is: ${changed.sizeX} and Size Y is: ${changed.sizeY}.`)
    };
    for (let j = 0; j < e.addedPanels.length; j++) {
      const added = e.addedPanels[j];
      console.log(added)
      console.log(`Added Panel is ${added.id} with row:${added.row}. Size X is: ${added.sizeX} and Size Y is: ${added.sizeY}.`)
    }
  }

  return (
    <div style={{display: "i", justifyContent: "center", margin:"100px"}}>
      <div style={{margin:"50px"}}>
      <div className="inline" id="control">
        <DashboardLayoutComponent change={handleChange} id='dashboard_layout' ref={s => (dashboardObj = s)} cellSpacing={cellSpacing} panels={panels} allowResizing={true} columns={5} resizableHandles={resize} />
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
            <div style={{margin: "100px", justifyContent: "center", alignItems: "center", width:"500px"}}> 
                <DashboardLayoutComponent id="dashboard_default" columns={6} cellSpacing={cellSpacing} allowResizing={true}>
                    <PanelsDirective>
                        <PanelDirective sizeX={3} sizeY={2} row={0} col={0} content={pieTemplate} header="<div>Product usage ratio</div>"/>
                        <PanelDirective sizeX={3} sizeY={2} row={0} col={3} content={columnTemplate} header="<div>Last year Sales Comparison</div>"/>
                        <PanelDirective sizeX={3} sizeY={2} row={0} col={3} content={pieTemplate2} header="<div>Mobile browsers usage</div>"/>
                        <PanelDirective sizeX={3} sizeY={2} row={1} col={0} content={lineTemplate} header="<div>Sales increase percentage</div>"/>
                    </PanelsDirective>
                </DashboardLayoutComponent>
            </div>
        </div>
    </div>
  )
}

export default NewPage;