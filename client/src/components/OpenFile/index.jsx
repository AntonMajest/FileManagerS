import React from 'react'
import {dataURLtoText} from '../../service/utils'

export default function index(props) {
    console.log('OpenFile', props);
    return (
        <div>
            <div className="border" style={{ height: '250px', backgroundColor: 'yellow' }}>This is the opened file! {props.id}
                <button key={props.id} className="float-right" onClick={() => props.closeFileFunction(props.id)}>Close</button>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-tab1-tab" data-toggle="tab" href="#nav-tab1" role="tab" aria-controls="nav-tab1" aria-selected="true">Text</a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-tab1" role="tabpanel" aria-labelledby="nav-tab1-tab">{dataURLtoText(props.file.file)}</div>
                </div>
            </div>
        </div>

    )
}
