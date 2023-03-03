import { useAppContext } from "../../context/appContext";
import { FormRow, Alert, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';


function AddJob() {
        const { showAlert, displayAlert, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, handleChange, clearValues } = useAppContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!position || !company || !jobLocation) {
            displayAlert();
            return;
        }
        console.log('create job');
    };

    const handleJobInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        handleChange({ name, value });
    };

    return <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
            <h3>{isEditing ? 'edit job' : 'add job'}</h3>
            {showAlert && <Alert />}
            <div className="form-center">
                <FormRow labelText='position' type='text' name='position' value={position} handleChange={handleJobInput} />
                <FormRow labelText='company' type='text' name='company' value={company} handleChange={handleJobInput} />
                <FormRow labelText='location' type='text' name='jobLocation' value={jobLocation} handleChange={handleJobInput} />
                <FormRowSelect name='status' value={status} handleChange={handleJobInput} list={statusOptions} />
                <FormRowSelect name='jobType' value={jobType} handleChange={handleJobInput} list={jobTypeOptions} labelText='job type' />
                <div className="btn-container">
                    <button type="submit" className="btn btn-block submit-btn">
                        submit
                    </button>
                    <button className="btn btn-block clear-btn" onClick={(e) => {
                        e.preventDefault();
                        clearValues();
                    }}>
                        clear
                    </button>
                </div>
            </div>
        </form>
    </Wrapper>;
}
export default AddJob;