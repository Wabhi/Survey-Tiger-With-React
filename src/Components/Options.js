import React from 'react'

const Options = ({addOption,deleteOption,updateText,uid}) => {
    return (
        <>
            <div className="col-md-8 offset-md-2 col-12 input-group my-3">
                <input className="form-control" type="text" placeholder="Option Text" style={{ marginLeft: "80px" }} onChange={(e)=>updateText(uid,e.target.value) }/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={()=>addOption()}>+</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={()=>deleteOption()}>-</button>
                </div>
            </div>
        </>
    )
}

export default Options
