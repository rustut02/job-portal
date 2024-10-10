import Header from '../components/Header';
import {Box, Typography, styled, TextField, Button} from '@mui/material';
import imgWorkProcess from '../img/rest.png'
import Dropdown from '../components/Dropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routhPath } from '../routes/route';

const Component = styled(Box)({
    padding: '80px 200px',
    background: '#F5F5F5'
})

const Container = styled(Box)({
    display: 'flex',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '& > p': {
        fontSize: 28,
        fontWeight: 700,
        opacity: .7,
    }
})

const FormWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    padding: 10,
    background: '#FFFFFF',
    borderRadius: 20,
    '& > *': {
        marginTop: '20 px !important'
    }
})

const defaultObj = {
    profile: "",
    type: "",
    description: "",
    expirience: "",
    technology: "",
    salary: ""
}

const options = {
    type: ["Online", "Offline"],
    expirience: ["0-2 years", "3-5 years", "5-8 years", "8 and more years"],
    technology: ["Java", "Javascript", "Angular", "React", "Node.js", "Docker", "AWS", "HTML", "CSS", "C", "C++", "C#", "Python", "Ruby", "R"],
    salary: ["Rs 0-300", "Rs 300-500", "Rs 500-800", "Rs 800-1300","Rs 1300 and more"],

}




const CreatePost = () => {
    const [data, setData] = useState(defaultObj);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const saveJob = async () => {
        await savePost(data);
        navigate(routhPath.posts);
    }

    return (
        <>
            <Header/>
            <Component>
                <Container>
                    <Typography>Create a Job Post</Typography>
                    <img src={imgWorkProcess} alt='create' style={{ width: 500, marginBottom: 10 }}/>
                </Container>
                <FormWrapper>
                    <TextField
                        placeholder="Job Title"
                        name="profile"
                        onChange={handleChange}
                    />
                    <Dropdown
                        label="Job Type"
                        id="job-type-label"
                        value={data.type}
                        handleChange={handleChange}
                        name="type"
                        options={options.type}
                    />
                    
                    <TextField
                        placeholder="Job Description"
                        name="description"
                        onChange={handleChange}
                    />
                    <Dropdown
                        label="Expiriens"
                        id="job-expirience-label"
                        value={data.expirience}
                        handleChange={handleChange}
                        options={options.expirience}
                        name="expirience"
                    />
                    <Dropdown
                        label="Technology"
                        id="job-technology-label"
                        value={data.technology}
                        handleChange={handleChange}
                        options={options.technology}
                        name="technology"
                    />
                    <Dropdown
                        label="Salary"
                        id="job-salary-label"
                        value={data.salary}
                        handleChange={handleChange}
                        options={options.salary}
                        name="salary"
                    />
                    <Button variant="contained" onClick={() => saveJob()}>Save Job</Button>
                </FormWrapper>
            </Component>
        </>
    )
}

export default CreatePost;