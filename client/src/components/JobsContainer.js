import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";


function JobsContainer() {
    const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();

    useEffect(() => {
        getJobs();
    }, []);

    return (
        <Wrapper>
            <Loading />
        </Wrapper>
    );
}
export default JobsContainer;