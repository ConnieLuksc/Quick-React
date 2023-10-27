import CourseList from './CourseList.jsx';
import TermSelector from './TermSelector.jsx';
import Modal from './Modal.jsx';
import Schedule from './Schedule.jsx';
import '../App.css';
import { useState } from 'react';
import { useJsonQuery } from '../utilities/fetch.js';
import { useDbData} from '../utilities/firebase'; 
import Navigation from './Navigation.jsx'


const MainPage =() =>{
    const [data, isLoading, error] = useDbData("/");
    console.log("data",data)
    console.log("error",error)
    const [term, setTerm] = useState('Fall');
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);

    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    if (error) return <h1>Error loading courses data: {`${error}`}</h1>;
    if (isLoading) return <h1>Loading courses data...</h1>;
    if (!data) return <h1>No courses data found</h1>;
    return(
        <div className="container">
                <div className="header-container">
                <h1>CS Courses for 2018-2019</h1>
                <Navigation/>
                </div>
                <div className="header-row">
                <TermSelector selection={term} setSelection={setTerm} />
                <button className="btn btn-outline-dark" onClick={openModal}>Course plan<i className="bi bi-cart4"></i></button>
                </div>
                <CourseList term={term} selected={selected} toggleSelected={toggleSelected} courses={data.courses}/>
                {/* <CourseList term={term} selected={selected} toggleSelected={toggleSelected} courses={data.courses} profile={profile} /> */}
                <Modal open={open} close={closeModal}>
                    <Schedule selected={selected} courses={data.courses}/>
                </Modal>
            </div>);
    };
export default MainPage;
