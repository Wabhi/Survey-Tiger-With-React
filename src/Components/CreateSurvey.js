import React, { useState } from 'react'
import TypeSelector from './TypeSelector'
import Questions from './Questions'
import Options from './Options'
import {useHistory} from 'react-router'
const CreateSurvey = ({ squestion, setSquestion }) => {
    
    const history = useHistory()
    const getRandom = () => { return Math.floor((Math.random() * 1000) + 1) }
    const defaultOptionsState = [{ uid: getRandom(), value: "" }, { uid: getRandom(), value: "" }]
    const [qText, setQText] = useState('')
    const [qType, setQType] = useState(0)
    const [qOption, setQOption] = useState(defaultOptionsState)

    const addOption = () => {
        //alert("+ clicked!")
        let newOption = {
            uid: getRandom(),
            value: ''
        }
        let updatedOption = [...qOption]
        updatedOption.push(newOption)
        setQOption(updatedOption)
    }
    const deleteOption = () => {
        if (qOption.length === 2) {
            alert('selected question type should have atleast two options!')
        } else {
            let updatedOption = [...qOption]
            updatedOption.pop();
            setQOption(updatedOption)
        }
        
    }
    const updateText = (id,text) => {
        let updatedOption = [...qOption]
        let changeText = updatedOption.findIndex((x => x.uid === id))
        updatedOption[changeText].value = text
        setQOption(updatedOption)
    }
    const updateSurveyQuestion = () => {
        let updateSurveyQ = [...squestion]
        let newQ = {
            qtext: qText,
            qtype: qType,
            qoption:qOption
        }
        updateSurveyQ.push(newQ)
        setSquestion(updateSurveyQ)
        setQType(0)
        setQText('')
        setQOption(defaultOptionsState)
    }
    const publishSurveyQuestion = () => {
        updateSurveyQuestion()
        history.push('/publish')
        //alert('published!')
    }
    return (
        <>
            <TypeSelector qType={qType} setQType={setQType} />
            {qType !== 0 ?
                <>
                    <Questions onChangeText={setQText}/>
                    {qOption.map((opt, key) => (
                        <Options key={key} uid={opt.uid} addOption={addOption} deleteOption={deleteOption} updateText={updateText}/>
                    ))}
                    <button className="btn btn-primary m-1 my-3" onClick={()=>updateSurveyQuestion()}>Add Question</button>
                    <button className="btn btn-primary m-1" onClick={()=>publishSurveyQuestion()}>Publish</button>
                </>
                : null}
            
            
        </>
    )
}
export default CreateSurvey;