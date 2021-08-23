import "./Home.css"
import {Button, MenuItem, TextField} from "@material-ui/core"
import Categories from '../../Data/Categories'
import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"

const Home = ({name, setName, fetchQuestion}) => {
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState("")
    const history = useHistory()

    const handleSubmit =() => {
        if(!category || !difficulty || !name){
            setError(true)
            return
        }
        else{
            setError(false)
            fetchQuestion(category,difficulty)
            history.push('/quiz')
        }
    }


    return (
        <div className='content'>
            <div className='settings'>
                <span style={{fontSize: 30}}> INFO</span>

                <div className='settings__select'>

                    {error && <ErrorMessage> Please fill all fields</ErrorMessage>}
                    
                    <TextField 
                        label='Enter your name' 
                        variant='outlined' 
                        style={{marginBottom: 25}} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField 
                        select 
                        label='Select category'
                        variant="outlined"
                        style={{marginBottom:30}} 
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >                        
                        {
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {
                                        cat.category
                                    }
                                </MenuItem>
                            ))
                        }
                    </TextField>

                    <TextField 
                        select 
                        label='Select Difficulty'
                        variant="outlined"
                        style={{marginBottom:30}} 
                        onChange={(e) => setDifficulty(e.target.value)}
                        value ={difficulty}
                    >                        
                       
                        <MenuItem key='Easy' value='easy'>
                            Easy
                        </MenuItem>
                        <MenuItem key='Medium' value='medium'>
                            Medium
                        </MenuItem>
                        <MenuItem key='Hard' value='hard'>
                            Hard
                        </MenuItem>                           
                        
                    </TextField>

                    <Button 
                        variant='contained' 
                        size='large' 
                        color='primary'
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>

                </div>
            </div>

            <img src='./quiz.svg' className="banner" alt="ff"></img>

        </div>
    )
}

export default Home